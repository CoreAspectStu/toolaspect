/*!
 * ToolAspect SVG Optimizer Embed
 * Install: <div id="ta-svg-optimizer"></div>
 *          <script src="https://toolaspect.com/embed/svg-optimizer.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: svgo 4.1.0 (MIT) browser build, lazy-loaded from jsdelivr and run
 * locally in the visitor's browser.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-svg-optimizer';
  var BASE = 'https://toolaspect.com/svg-optimizer/';
  var LIB_SVGO = 'https://cdn.jsdelivr.net/npm/svgo@4.1.0/dist/svgo.browser.js';

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
  styleEl.setAttribute('data-ta-embed', 'svg-optimizer');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="svg-optimizer"]')) {
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
    + '<div class="ta-embed-title">SVG Optimizer</div>'
    + '<div class="ta-embed-subtitle">Strip editor junk and shrink icons — in the browser</div>'
    + '<div class="ta-embed-card">'
    + '<label>SVG markup</label><textarea class="ta-svg" spellcheck="false" placeholder="paste <svg> markup here"></textarea>'
    + '<div class="ta-embed-row">'
    + '<div><label>Preset</label><select class="ta-preset"><option value="safe" selected>Safe (default)</option><option value="aggressive">Aggressive</option></select></div>'
    + '<div><label>Precision</label><select class="ta-prec"><option value="3" selected>3 decimals</option><option value="2">2</option><option value="1">1</option></select></div>'
    + '</div>'
    + '<button class="ta-embed-btn ta-go" type="button">Optimize SVG</button>'
    + '<div class="ta-embed-status">Paste SVG, hit optimize. First use fetches SVGO (~805 KB module, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var svgBox = q('.ta-svg'), goBtn = q('.ta-go'), statusEl = q('.ta-embed-status');

  goBtn.addEventListener('click', function () {
    var input = svgBox.value;
    if (!input.trim()) { statusEl.textContent = 'Paste an SVG first.'; return; }
    if (!/<svg[\s>]/i.test(input)) { statusEl.textContent = 'Input has no <svg> element.'; return; }
    statusEl.textContent = 'Loading SVGO and optimizing …';
    import(LIB_SVGO).then(function (svgo) {
      var prec = +q('.ta-prec').value || 3;
      var plugins = ['preset-default'];
      if (prec !== 3) plugins.push({ name: 'convertPathData', params: { floatPrecision: prec } });
      if (q('.ta-preset').value === 'aggressive') {
        plugins.push('removeDesc', 'removeTitle', 'removeDimensions', 'convertPathData', 'collapseGroups', 'mergePaths');
      }
      var r = svgo.optimize(input, { plugins: plugins });
      var out = r.data;
      var b = new Blob([input]).size, a = new Blob([out]).size;
      var pct = b ? (100 * (1 - a / b)).toFixed(1) : 0;
      var blob = new Blob([out], { type: 'image/svg+xml;charset=utf-8' });
      var dl = document.createElement('a');
      dl.href = URL.createObjectURL(blob);
      dl.download = 'optimized.svg';
      dl.textContent = 'Download optimized.svg (' + a.toLocaleString('en-US') + ' bytes)';
      dl.className = 'ta-embed-btn';
      statusEl.textContent = 'Optimized: ' + b.toLocaleString('en-US') + ' → ' + a.toLocaleString('en-US') + ' bytes (' + pct + '% saved).';
      statusEl.appendChild(document.createElement('br'));
      statusEl.appendChild(dl);
    }).catch(function (e) {
      statusEl.textContent = 'Failed: ' + ((e && e.message) || e);
    });
  });
})();
