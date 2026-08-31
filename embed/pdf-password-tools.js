/*!
 * ToolAspect PDF Password Tools Embed — ONE shell, TWO modes.
 * Install: <div id="ta-pdf-password-tools"></div>
 *          <script src="https://toolaspect.com/embed/pdf-password-tools.js"></script>
 * Options: data-mode="lock" (default: password-protect) or "unlock" (remove password)
 *          on the container div; add data-theme="dark" for dark theme.
 * Engine: pdfstudio 0.4.0 (Apache-2.0, qpdf-wasm) loaded from toolaspect.com;
 * encryption/decryption runs entirely in the visitor's browser — no upload, ever.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pdf-password-tools';
  var LIB_PDFSTUDIO = 'https://toolaspect.com/shared/vendor/pdfstudio/dist/index.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card label{display:block;font-size:.78rem;color:var(--ta-muted);margin:10px 0 5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-file{display:block;width:100%;padding:9px;background:var(--ta-bg);border:1px dashed var(--ta-border);border-radius:8px;color:var(--ta-text);font-size:.85rem;font-family:inherit}'
    + '.ta-embed-pwd{width:100%;margin-top:2px;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.82rem;font-family:inherit}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:12px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;text-align:center;text-decoration:none}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pdf-password-tools');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pdf-password-tools"]')) {
    (document.head || document.documentElement).appendChild(styleEl);
  }

  function findTarget() {
    var el = document.getElementById(TARGET_ID);
    if (el) return el;
    var cs = document.currentScript;
    if (cs && cs.previousElementSibling && cs.previousElementSibling.tagName === 'DIV') return cs.previousElementSibling;
    return null;
  }

  var target = findTarget();
  if (!target) {
    if (window.console) console.error('[ToolAspect] embed container #' + TARGET_ID + ' not found.');
    return;
  }

  var mode = target.getAttribute('data-mode') === 'unlock' ? 'unlock' : 'lock';
  var isLock = mode === 'lock';

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">' + (isLock ? 'Password Protect a PDF' : 'Remove PDF Password') + '</div>'
    + '<div class="ta-embed-subtitle">' + (isLock ? 'AES-256 encryption in the browser — no upload' : 'Decrypt a PDF you can open — no upload') + '</div>'
    + '<div class="ta-embed-card">'
    + '<label>PDF file</label><input class="ta-file" type="file" accept=".pdf,application/pdf">'
    + '<label>' + (isLock ? 'Password to set' : 'Current password (empty for restrictions-only)') + '</label><input class="ta-pwd" type="password" autocomplete="new-password">'
    + (isLock ? '<label>Repeat password</label><input class="ta-pwd2" type="password" autocomplete="new-password">' : '')
    + '<button class="ta-embed-btn ta-go" type="button" disabled>' + (isLock ? 'Encrypt PDF' : 'Remove Password') + '</button>'
    + '<div class="ta-embed-status">First use fetches the engine (qpdf WebAssembly, ~2.2 MB, cached). Everything runs locally.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="https://toolaspect.com/pdf-password-tools/' + (isLock ? '' : 'unlock/') + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var fileInput = q('.ta-file'), goBtn = q('.ta-go'), statusEl = q('.ta-embed-status');
  var bytes = null, fname = '';

  fileInput.addEventListener('change', function () {
    var f = fileInput.files[0];
    if (!f) return;
    var fr = new FileReader();
    fr.onload = function () {
      bytes = new Uint8Array(fr.result);
      fname = f.name;
      goBtn.disabled = false;
      statusEl.textContent = f.name + ' loaded (' + f.size.toLocaleString('en-US') + ' bytes). ' + (isLock ? 'Type a password and hit Encrypt.' : 'Type its password and hit Remove Password.');
    };
    fr.readAsArrayBuffer(f);
  });

  goBtn.addEventListener('click', function () {
    if (!bytes) return;
    var pw = q('.ta-pwd').value;
    if (isLock) {
      if (!pw) { statusEl.textContent = 'Type a password first.'; return; }
      if (pw !== q('.ta-pwd2').value) { statusEl.textContent = 'The two passwords don\'t match.'; return; }
    }
    goBtn.disabled = true;
    statusEl.textContent = 'Loading qpdf WebAssembly and working …';
    import(LIB_PDFSTUDIO).then(function (studio) {
      return studio.createPdfToolkit().then(function (tk) {
        if (isLock) {
          return tk.lock(bytes, { userPassword: pw, ownerPassword: pw, permissions: { print: 'full' } }).then(function (out) {
            return { tk: tk, out: new Uint8Array(out), pw: pw };
          });
        }
        return tk.unlock(bytes, pw ? { password: pw } : undefined).then(function (out) {
          return { tk: tk, out: new Uint8Array(out) };
        });
      });
    }).then(function (r) {
      return r.tk.isEncrypted(r.out).then(function (enc) {
        var a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([r.out], { type: 'application/pdf' }));
        a.download = fname.replace(/\.pdf$/i, '') + (isLock ? '-password-protected.pdf' : '-unlocked.pdf');
        a.textContent = 'Download ' + a.download + ' (' + r.out.length.toLocaleString('en-US') + ' B)';
        a.className = 'ta-embed-btn';
        statusEl.textContent = (isLock ? 'Encrypted with AES-256 and verified (' + (enc ? 'encrypted' : 'NOT encrypted') + '). Store the password — it can\'t be recovered.' : 'Password removed — ' + (enc ? 'still encrypted? something went wrong' : 'opens without a password, no restrictions') + '.');
        statusEl.appendChild(document.createElement('br'));
        statusEl.appendChild(a);
      });
    }).catch(function (e) {
      statusEl.textContent = ((e && e.message) || ('' + e)) + (isLock ? '' : ' — a wrong password cannot decrypt a file.');
    }).then(function () { goBtn.disabled = false; });
  });
})();
