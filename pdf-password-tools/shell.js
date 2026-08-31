/*!
 * ToolAspect PDF Password shell — ONE shell, TWO pages.
 * /pdf-password-tools/        -> mode 'lock'   (add a password, AES-256)
 * /pdf-password-tools/unlock/ -> mode 'unlock' (remove a password you know)
 * Engine: pdfstudio 0.4.0 (Apache-2.0, qpdf-wasm) vendored at /shared/vendor/pdfstudio.
 * Everything runs in the visitor's browser; the PDF never leaves the machine.
 */
window.TA = window.TA || {};
window.TA.pdfPassword = (function () {
  'use strict';
  var PDFSTUDIO_URL = '/shared/vendor/pdfstudio/dist/index.js';
  var ABS_PDFSTUDIO = 'https://toolaspect.com/shared/vendor/pdfstudio/dist/index.js';

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g,'&gt;').replace(/"/g, '&quot;'); }

  function mount(container, opts) {
    var mode = opts.mode; /* 'lock' | 'unlock' */
    var isLock = mode === 'lock';
    var className = 'ta-pw-' + mode;
    container.innerHTML = ''
      + '<div class="ta-pw-card">'
      + '<div class="ta-pw-pick"><label class="ta-pw-filelabel">' + (isLock ? '📄 Open the PDF to protect' : '📄 Open the password-protected PDF') + '<input type="file" class="ta-pw-file" accept=".pdf,application/pdf"></label><div class="ta-pw-fname"></div></div>'
      + '<div class="ta-pw-grid">'
      + '<div class="ta-pw-group"><label>' + (isLock ? 'Password to open the PDF' : 'Current password') + '</label><input type="password" class="ta-pw-pw1" autocomplete="new-password" placeholder="At least 8 characters is sensible"></div>'
      + (isLock
        ? '<div class="ta-pw-group"><label>Repeat password</label><input type="password" class="ta-pw-pw2" autocomplete="new-password" placeholder="Same password again"></div>'
          + '<div class="ta-pw-group"><label>Owner password (optional, for permissions)</label><input type="password" class="ta-pw-own" autocomplete="new-password" placeholder="Leave empty to reuse the open password"></div>'
        : '<div class="ta-pw-group"><label>&nbsp;</label><div class="ta-pw-note">Only works with a password you know. A lost password is not recoverable — AES has no back door.</div></div>')
      + '</div>'
      + (isLock
        ? '<details class="ta-pw-adv"><summary>Restrictions (optional)</summary>'
          + '<label class="ta-pw-check"><input type="checkbox" class="ta-pw-print" checked> Allow printing</label>'
          + '<label class="ta-pw-check"><input type="checkbox" class="ta-pw-copy"> Allow copying text and images</label>'
          + '<label class="ta-pw-check"><input type="checkbox" class="ta-pw-mod"> Allow modifying the document</label>'
          + '<div class="ta-pw-note">Screen-reader accessibility stays enabled — turning it off is possible in the format but harmful and this tool won\'t.</div></details>'
        : '')
      + '<div class="ta-pw-btnrow"><button class="ta-pw-go" disabled>' + (isLock ? '🔒 Encrypt PDF' : '🔓 Remove Password') + '</button><button class="ta-pw-clear">Clear</button></div>'
      + '<div class="ta-pw-status">Open a PDF to begin. Files never leave your browser.</div>'
      + '<div class="ta-pw-out"></div>'
      + '</div>';

    var q = function (c) { return container.querySelector(c); };
    var fileInput = q('.ta-pw-file'), goBtn = q('.ta-pw-go'), statusEl = q('.ta-pw-status'), outEl = q('.ta-pw-out');
    var bytes = null, fname = '';

    function setStatus(msg, cls) { statusEl.textContent = msg; statusEl.className = 'ta-pw-status' + (cls ? ' ' + cls : ''); }

    fileInput.addEventListener('change', function () {
      var f = fileInput.files[0];
      if (!f) return;
      bytes = null; outEl.innerHTML = '';
      var fr = new FileReader();
      fr.onload = function () {
        bytes = new Uint8Array(fr.result);
        fname = f.name;
        q('.ta-pw-fname').textContent = f.name + ' — ' + f.size.toLocaleString('en-US') + ' bytes';
        goBtn.disabled = false;
        setStatus('Loaded. Checking encryption …');
        getToolkit().then(function (tk) {
          return Promise.all([tk.isEncrypted(bytes), tk.isEncrypted(bytes).then(function (enc) { return enc ? tk.requiresPassword(bytes) : false; })]);
        }).then(function (r) {
          var encrypted = r[0], needs = r[1];
          if (isLock) {
            if (encrypted) setStatus('This PDF is already encrypted. Remove its password first, then protect it with the new one.', 'err');
            else setStatus('Ready — pick a password and hit Encrypt. The engine (qpdf WebAssembly, ~2.2 MB, cached) runs locally.');
          } else {
            if (!encrypted) setStatus('This PDF is not encrypted — nothing to remove.', 'err');
            else if (!needs) setStatus('This PDF opens without a password (restrictions-only encryption). Leave the password field empty and hit Remove Password.');
            else setStatus('This PDF asks for a password to open. Type it and hit Remove Password.');
          }
        }).catch(function (e) {
          setStatus('Loaded, but the encryption check failed: ' + ((e && e.message) || e) + ' — you can still try.');
        });
      };
      fr.readAsArrayBuffer(f);
    });

    q('.ta-pw-clear').addEventListener('click', function () {
      bytes = null; fileInput.value = ''; q('.ta-pw-fname').textContent = ''; goBtn.disabled = true;
      outEl.innerHTML = ''; q('.ta-pw-pw1').value = ''; var p2 = q('.ta-pw-pw2'); if (p2) p2.value = ''; var ow = q('.ta-pw-own'); if (ow) ow.value = '';
      setStatus('Open a PDF to begin. Files never leave your browser.');
    });

    var tkPromise = null;
    function getToolkit() {
      if (tkPromise) return tkPromise;
      tkPromise = import(PDFSTUDIO_URL).then(function (studio) { return studio.createPdfToolkit(); });
      return tkPromise;
    }

    goBtn.addEventListener('click', function () {
      if (!bytes) return;
      var pw = q('.ta-pw-pw1').value;
      if (isLock) {
        var pw2 = q('.ta-pw-pw2').value;
        if (!pw) { setStatus('Type a password first.', 'err'); return; }
        if (pw !== pw2) { setStatus('The two passwords don\'t match.', 'err'); return; }
      }
      goBtn.disabled = true;
      outEl.innerHTML = '';
      setStatus('Loading the engine (qpdf WebAssembly, ~2.2 MB — cached after first use) …');
      getToolkit().then(function (tk) {
        if (isLock) {
          var own = q('.ta-pw-own').value || pw;
          return tk.lock(bytes, {
            userPassword: pw,
            ownerPassword: own,
            permissions: {
              print: q('.ta-pw-print').checked ? 'full' : 'none',
              extract: q('.ta-pw-copy').checked,
              modify: q('.ta-pw-mod').checked ? 'any' : 'none'
            }
          }).then(function (out) { return { tk: tk, out: new Uint8Array(out), pw: pw }; });
        }
        return tk.unlock(bytes, pw ? { password: pw } : undefined).then(function (out) { return { tk: tk, out: new Uint8Array(out) }; });
      }).then(function (r) {
        return Promise.all([
          r.tk.isEncrypted(r.out),
          r.tk.pageCount(r.out, isLock ? { password: r.pw } : undefined),
          isLock ? r.tk.getInfo(r.out, { password: r.pw }) : Promise.resolve(null)
        ]).then(function (v) {
          var enc = v[0], pages = v[1], info = v[2];
          var stats = document.createElement('div');
          stats.className = 'ta-pw-stats';
          var bits = '';
          if (isLock && info && info.encryption) bits = '<div class="ta-pw-stat"><div class="n">' + esc(info.encryption.method) + '</div><div class="l">' + info.encryption.bits + '-bit encryption written</div></div>';
          stats.innerHTML = bits
            + '<div class="ta-pw-stat"><div class="n">' + (enc ? 'Encrypted' : 'Unencrypted') + '</div><div class="l">verified on the output</div></div>'
            + '<div class="ta-pw-stat"><div class="n">' + pages + '</div><div class="l">pages</div></div>'
            + '<div class="ta-pw-stat"><div class="n">' + r.out.length.toLocaleString('en-US') + ' B</div><div class="l">out (was ' + bytes.length.toLocaleString('en-US') + ' B)</div></div>';
          outEl.appendChild(stats);
          var a = document.createElement('a');
          a.href = URL.createObjectURL(new Blob([r.out], { type: 'application/pdf' }));
          a.download = fname.replace(/\.pdf$/i, '') + (isLock ? '-password-protected.pdf' : '-unlocked.pdf');
          a.textContent = '⬇️ Download ' + a.download + ' (' + r.out.length.toLocaleString('en-US') + ' B)';
          a.className = 'ta-pw-dl';
          outEl.appendChild(a);
          if (isLock) {
            setStatus('Encrypted with AES-256 and verified — the output opens only with your password. Store the password somewhere you\'ll find it; it cannot be recovered from the file.', 'ok');
          } else {
            setStatus('Password removed — the output opens without one and carries no restrictions. ' + pages + ' pages, content untouched.', 'ok');
          }
        });
      }).catch(function (e) {
        var msg = ((e && e.message) || ('' + e));
        if (/password/i.test(msg)) setStatus('The engine rejected the password: ' + msg + (isLock ? '' : ' — a wrong password cannot decrypt a file; there is no way around this.'), 'err');
        else setStatus('Failed: ' + msg, 'err');
      }).then(function () { goBtn.disabled = false; });
    });
  }

  return { mount: mount, PDFSTUDIO_URL: PDFSTUDIO_URL, ABS_PDFSTUDIO: ABS_PDFSTUDIO };
})();
