/*!
 * ToolAspect JSON to YAML Embed
 * Install: <div id="ta-json-to-yaml"></div>
 *          <script src="https://toolaspect.com/embed/json-to-yaml.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: eemeli/yaml 2.9.0 (ISC) browser build, lazy-loaded from jsdelivr.
 * Parsing and serialization run locally in the visitor's browser.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-json-to-yaml';
  var BASE = 'https://toolaspect.com/json-to-yaml/';
  var LIB_YAML = 'https://cdn.jsdelivr.net/npm/yaml@2.9.0/browser/index.js';

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
    + '.ta-embed-card textarea{width:100%;min-height:130px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.8rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;line-height:1.5;outline:none;resize:vertical}'
    + '.ta-embed-card textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}'
    + '.ta-embed-row select{width:100%;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.82rem;font-family:inherit}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:10px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'json-to-yaml');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="json-to-yaml"]')) {
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
    + '<div class="ta-embed-title">JSON to YAML</div>'
    + '<div class="ta-embed-subtitle">Convert configs in the browser — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<label>JSON</label><textarea class="ta-json" spellcheck="false" placeholder=\'{"key": "value"}\'></textarea>'
    + '<div class="ta-embed-row">'
    + '<div><label>Indent</label><select class="ta-indent"><option value="2" selected>2 spaces</option><option value="4">4 spaces</option></select></div>'
    + '<div><label>Folding</label><select class="ta-wrap"><option value="80" selected>Wrap at 80</option><option value="0">Off</option></select></div>'
    + '</div>'
    + '<button class="ta-embed-btn ta-go" type="button">Convert to YAML</button>'
    + '<div class="ta-embed-status">Paste JSON, hit convert. First use fetches the yaml engine (small, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var jsonBox = q('.ta-json'), goBtn = q('.ta-go'), statusEl = q('.ta-embed-status');

  goBtn.addEventListener('click', function () {
    statusEl.textContent = 'Loading engine and converting …';
    import(LIB_YAML).then(function (mod) {
      var YAML = mod.default || mod;
      var value;
      try {
        value = JSON.parse(jsonBox.value);
      } catch (e) {
        statusEl.textContent = 'Invalid JSON: ' + e.message;
        return;
      }
      var out = YAML.stringify(value, { indent: +q('.ta-indent').value || 2, lineWidth: +q('.ta-wrap').value });
      var ok = JSON.stringify(YAML.parse(out)) === JSON.stringify(value);
      var blob = new Blob([out], { type: 'text/plain;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'config.yaml';
      a.textContent = 'Download config.yaml (' + out.length.toLocaleString('en-US') + ' bytes)';
      a.className = 'ta-embed-btn';
      statusEl.textContent = 'Converted — round-trip ' + (ok ? '✓ equal' : '✗ mismatch') + '.';
      statusEl.appendChild(document.createElement('br'));
      statusEl.appendChild(a);
    }).catch(function (e) {
      statusEl.textContent = 'Failed: ' + ((e && e.message) || e);
    });
  });
})();
