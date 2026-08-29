/*!
 * ToolAspect HMAC Generator Embed
 * Install: <div id="ta-hmac-generator"></div>
 *          <script src="https://toolaspect.com/embed/hmac-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Uses native WebCrypto (crypto.subtle) — runs entirely in the visitor's
 * browser; requires the embedding page to be served over HTTPS.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-hmac-generator';
  var BASE = 'https://toolaspect.com/hmac-generator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-code:#059669;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-code:#34d399}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:2fr 1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select,.ta-embed-form-group textarea{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group textarea{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.85rem;resize:vertical}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus,.ta-embed-form-group textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-full{grid-column:1/-1}'
    + '.ta-embed-out{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:10px;padding:12px 14px;margin-bottom:10px;position:relative}'
    + '.ta-embed-out .ol{font-size:.68rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px}'
    + '.ta-embed-out .ov{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.82rem;color:var(--ta-code);word-break:break-all;user-select:all}'
    + '.ta-embed-copy{position:absolute;top:8px;right:8px;background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-muted);'
    + 'border-radius:6px;padding:2px 10px;font-size:.7rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-copy:hover{border-color:var(--ta-accent);color:var(--ta-text)}'
    + '.ta-embed-note{text-align:center;color:var(--ta-muted);font-size:.8rem;margin-top:4px;min-height:1.2em}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'hmac-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="hmac-generator"]')) {
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

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">HMAC Generator</div>'
    + '<div class="ta-embed-subtitle">HMAC-SHA1/256/384/512 via native WebCrypto — nothing leaves the browser</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group ta-embed-full"><label>Message</label><textarea class="ta-msg" rows="3">The quick brown fox jumps over the lazy dog</textarea></div>'
    + '<div class="ta-embed-form-group"><label>Secret key</label><input type="text" class="ta-key" value="key" autocomplete="off" spellcheck="false"></div>'
    + '<div class="ta-embed-form-group"><label>Key encoding</label><select class="ta-keyenc"><option value="utf8">UTF-8 text</option><option value="hex">Hex bytes</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Algorithm</label><select class="ta-alg">'
    + '<option value="SHA-1">HMAC-SHA1</option>'
    + '<option value="SHA-256" selected>HMAC-SHA256</option>'
    + '<option value="SHA-384">HMAC-SHA384</option>'
    + '<option value="SHA-512">HMAC-SHA512</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-out"><div class="ol">Hex</div><button type="button" class="ta-embed-copy" data-ta="hex">Copy</button><div class="ov ta-hex">—</div></div>'
    + '<div class="ta-embed-out"><div class="ol">Base64</div><button type="button" class="ta-embed-copy" data-ta="b64">Copy</button><div class="ov ta-b64">—</div></div>'
    + '<div class="ta-embed-note ta-note"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var noteEl = root.querySelector('.ta-note');
  var timer = null;

  function toHex(buf) {
    return Array.prototype.map.call(new Uint8Array(buf), function (b) {
      return b.toString(16).padStart(2, '0');
    }).join('');
  }

  function toB64(buf) {
    var bytes = new Uint8Array(buf), s = '';
    for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s);
  }

  function hexToBytes(h) {
    var clean = h.replace(/[^0-9a-fA-F]/g, '');
    if (clean.length % 2 !== 0) throw new Error('Hex key needs an even number of digits');
    var out = new Uint8Array(clean.length / 2);
    for (var i = 0; i < out.length; i++) out[i] = parseInt(clean.substr(i * 2, 2), 16);
    return out;
  }

  function run() {
    if (!window.crypto || !crypto.subtle) {
      noteEl.textContent = 'WebCrypto is unavailable — this widget needs an HTTPS page in a modern browser.';
      return;
    }
    var msg = root.querySelector('.ta-msg').value;
    var keyStr = root.querySelector('.ta-key').value;
    var enc = root.querySelector('.ta-keyenc').value;
    var alg = root.querySelector('.ta-alg').value;
    var keyBytes;
    try {
      keyBytes = enc === 'hex' ? hexToBytes(keyStr) : new TextEncoder().encode(keyStr);
    } catch (e) {
      noteEl.textContent = e.message;
      return;
    }
    if (keyBytes.length === 0) { noteEl.textContent = 'Enter a secret key (at least one byte).'; return; }
    noteEl.textContent = '';
    crypto.subtle.importKey('raw', keyBytes, { name: 'HMAC', hash: alg }, false, ['sign'])
      .then(function (k) { return crypto.subtle.sign('HMAC', k, new TextEncoder().encode(msg)); })
      .then(function (sig) {
        root.querySelector('.ta-hex').textContent = toHex(sig);
        root.querySelector('.ta-b64').textContent = toB64(sig);
        noteEl.textContent = sig.byteLength + ' bytes · key: ' + keyBytes.length + ' byte' + (keyBytes.length === 1 ? '' : 's') + ' (' + (enc === 'hex' ? 'hex' : 'UTF-8') + ')';
      })
      .catch(function (e) { noteEl.textContent = 'Signing failed: ' + e.message; });
  }

  function debounced() {
    clearTimeout(timer);
    timer = setTimeout(run, 80);
  }

  root.addEventListener('input', debounced);
  root.addEventListener('change', debounced);
  root.addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-copy');
    if (!btn) return;
    var text = root.querySelector('.ta-' + btn.getAttribute('data-ta')).textContent;
    function done() { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = 'Copy'; }, 1200); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done);
    else done();
  });
  run();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.hmacGenerator = { recalc: run };
})();
