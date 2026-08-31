/*!
 * ToolAspect Repair Corrupt PDF Embed
 * Install: <div id="ta-pdf-repair"></div>
 *          <script src="https://toolaspect.com/embed/pdf-repair.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: pdfstudio 0.4.0 (Apache-2.0, qpdf-wasm) loaded from toolaspect.com;
 * the repair runs entirely in the visitor's browser — no upload, ever.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pdf-repair';
  var BASE = 'https://toolaspect.com/pdf-repair/';
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
    + '.ta-embed-card label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-file{display:block;width:100%;padding:9px;background:var(--ta-bg);border:1px dashed var(--ta-border);border-radius:8px;color:var(--ta-text);font-size:.85rem;font-family:inherit}'
    + '.ta-embed-pwd{width:100%;margin-top:10px;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.82rem;font-family:inherit}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:12px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;text-align:center;text-decoration:none}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pdf-repair');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pdf-repair"]')) {
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
    + '<div class="ta-embed-title">Repair Corrupt PDF</div>'
    + '<div class="ta-embed-subtitle">qpdf rebuilds damaged files in the browser — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<label>Damaged PDF</label><input class="ta-file" type="file" accept=".pdf,application/pdf">'
    + '<input class="ta-pwd" type="password" placeholder="Password (only if it was encrypted)" autocomplete="off">'
    + '<button class="ta-embed-btn ta-go" type="button" disabled>Repair PDF</button>'
    + '<div class="ta-embed-status">Open the damaged file to begin. First use fetches the engine (~2.2 MB, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var fileInput = q('.ta-file'), goBtn = q('.ta-go'), statusEl = q('.ta-embed-status');
  var bytes = null;

  fileInput.addEventListener('change', function () {
    var f = fileInput.files[0];
    if (!f) return;
    var fr = new FileReader();
    fr.onload = function () {
      bytes = new Uint8Array(fr.result);
      goBtn.disabled = false;
      statusEl.textContent = f.name + ' loaded (' + f.size.toLocaleString('en-US') + ' bytes). Hit Repair.';
    };
    fr.readAsArrayBuffer(f);
  });

  goBtn.addEventListener('click', function () {
    if (!bytes) return;
    goBtn.disabled = true;
    statusEl.textContent = 'Loading qpdf WebAssembly and scanning …';
    import(LIB_PDFSTUDIO).then(function (studio) {
      return studio.createPdfToolkit().then(function (tk) {
        var pwd = q('.ta-pwd').value || undefined;
        return tk.repair(bytes, pwd ? { password: pwd } : undefined);
      });
    }).then(function (out) {
      var outBytes = new Uint8Array(out);
      var blob = new Blob([outBytes], { type: 'application/pdf' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'repaired.pdf';
      a.textContent = 'Download repaired.pdf (' + outBytes.length.toLocaleString('en-US') + ' bytes)';
      a.className = 'ta-embed-btn';
      statusEl.textContent = 'Repaired. Open it and spot-check the pages.';
      statusEl.appendChild(document.createElement('br'));
      statusEl.appendChild(a);
    }).catch(function (e) {
      statusEl.textContent = 'Beyond repair: ' + ((e && e.message) || e);
    }).then(function () { goBtn.disabled = false; });
  });
})();
