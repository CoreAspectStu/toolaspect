/*!
 * ToolAspect Sample Size Calculator Embed
 * Install: <div id="ta-sample-size-calculator"></div>
 *          <script src="https://toolaspect.com/embed/sample-size-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-sample-size-calculator';
  var BASE = 'https://toolaspect.com/sample-size-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-mode-toggle{display:flex;gap:6px;margin-bottom:14px;justify-content:center}'
    + '.ta-embed-mode-btn{background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;'
    + 'padding:7px 16px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode-btn.ta-active{background:rgba(37,99,235,.1);border-color:var(--ta-accent);color:var(--ta-text);font-weight:600}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-mode-btn.ta-active{background:rgba(96,165,250,.12)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'sample-size-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="sample-size-calculator"]')) {
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
    + '<div class="ta-embed-title">Sample Size Calculator</div>'
    + '<div class="ta-embed-subtitle">Cochran\'s formula with finite population correction</div>'
    + '<div class="ta-embed-mode-toggle">'
    + '<button type="button" class="ta-embed-mode-btn ta-active" data-mode="prop">Proportion</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-mode="mean">Mean</button>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Confidence</label><select class="ta-conf">'
    + '<option value="1.282">80%</option><option value="1.645">90%</option>'
    + '<option value="1.96" selected>95%</option><option value="2.326">98%</option><option value="2.576">99%</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group ta-prop-only"><label>p (%)</label><input type="number" class="ta-p" value="50" min="1" max="99" step="1"></div>'
    + '<div class="ta-embed-form-group ta-mean-only" style="display:none"><label>Std dev s</label><input type="number" class="ta-s" value="15" min="0.1" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Margin of error</label><input type="number" class="ta-e" value="5" min="0.1" step="0.5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Population (blank = infinite)</label><input type="number" class="ta-pop" min="1" step="1" placeholder="e.g. 1000"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var mode = 'prop';

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function renderMode() {
    root.querySelector('.ta-prop-only').style.display = mode === 'prop' ? '' : 'none';
    root.querySelector('.ta-mean-only').style.display = mode === 'mean' ? '' : 'none';
    root.querySelector('.ta-e').value = mode === 'prop' ? 5 : 3;
  }

  function calc() {
    var z = parseFloat(root.querySelector('.ta-conf').value);
    var eRaw = val('.ta-e');
    var N = val('.ta-pop');
    var n0;
    if (mode === 'prop') {
      var p = val('.ta-p') / 100;
      var e = eRaw / 100;
      if (e <= 0 || p <= 0 || p >= 1) {
        resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Margin must be &gt; 0 and p between 1 and 99</div>';
        return;
      }
      n0 = z * z * p * (1 - p) / (e * e);
    } else {
      var s = val('.ta-s');
      if (eRaw <= 0 || s <= 0) {
        resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter std deviation and margin</div>';
        return;
      }
      n0 = (z * s / eRaw) * (z * s / eRaw);
    }
    var nAdj = N > 0 ? Math.ceil(n0 / (1 + (n0 - 1) / N)) : Math.ceil(n0);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + nAdj.toLocaleString('en-US') + '</div>'
      + '<div class="ta-embed-sub">required ' + (mode === 'prop' ? 'responses' : 'measurements') + '</div>'
      + (N > 0
        ? '<div class="ta-embed-sub">' + Math.ceil(n0) + ' before the finite population correction (N=' + N.toLocaleString('en-US') + ')</div>'
        : '<div class="ta-embed-sub">infinite population, no correction needed</div>');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  root.querySelector('.ta-embed-mode-toggle').addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-mode-btn');
    if (!btn) return;
    mode = btn.getAttribute('data-mode');
    root.querySelectorAll('.ta-embed-mode-btn').forEach(function (b) { b.classList.remove('ta-active'); });
    btn.classList.add('ta-active');
    renderMode();
    calc();
  });

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.sampleSizeCalculator = { recalc: calc };
})();
