/*!
 * ToolAspect Standard Deviation Calculator Embed
 * Install: <div id="ta-standard-deviation-calculator"></div>
 *          <script src="https://toolaspect.com/embed/standard-deviation-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-standard-deviation-calculator';
  var BASE = 'https://toolaspect.com/standard-deviation-calculator/';

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
    + '.ta-embed-form-group textarea{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none;resize:vertical}'
    + '.ta-embed-form-group textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-mode-toggle{display:flex;gap:6px;margin-bottom:14px;justify-content:center}'
    + '.ta-embed-mode-btn{background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;'
    + 'padding:7px 16px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode-btn.ta-active{background:rgba(37,99,235,.1);border-color:var(--ta-accent);color:var(--ta-text);font-weight:600}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-mode-btn.ta-active{background:rgba(96,165,250,.12)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px 6px}'
    + '.ta-embed-cell .k{font-size:.7rem;color:var(--ta-muted);margin-bottom:3px;text-transform:uppercase;letter-spacing:.03em}'
    + '.ta-embed-cell .v{font-size:.95rem;font-weight:700;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-grid{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'standard-deviation-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="standard-deviation-calculator"]')) {
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
    + '<div class="ta-embed-title">Standard Deviation Calculator</div>'
    + '<div class="ta-embed-subtitle">Sample and population SD, variance, mean</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Numbers (comma or space separated)</label><textarea class="ta-data" rows="3">4, 8, 15, 16, 23, 42</textarea></div>'
    + '</div>'
    + '<div class="ta-embed-mode-toggle">'
    + '<button type="button" class="ta-embed-mode-btn" data-mode="sample">Sample (n−1)</button>'
    + '<button type="button" class="ta-embed-mode-btn ta-active" data-mode="population">Population (n)</button>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var mode = 'population';

  function fmt(n) {
    var r = Math.round(n * 100) / 100;
    return (Object.is(r, -0) ? 0 : r).toLocaleString('en-US', { maximumFractionDigits: 2 });
  }

  function calc() {
    var raw = root.querySelector('.ta-data').value;
    var xs = raw.split(/[\s,;]+/).filter(function (t) { return t.length > 0; }).map(Number).filter(function (n) { return !isNaN(n); });
    var n = xs.length;
    if (n === 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter some numbers</div>';
      return;
    }
    var sum = xs.reduce(function (a, b) { return a + b; }, 0);
    var mean = sum / n;
    var ss = xs.reduce(function (a, b) { return a + (b - mean) * (b - mean); }, 0);
    var pv = ss / n, ps = Math.sqrt(pv);
    var sv = n > 1 ? ss / (n - 1) : NaN, sd = Math.sqrt(sv);
    var chosen = mode === 'population' ? ps : sd;
    var srt = xs.slice().sort(function (a, b) { return a - b; });
    var mid = Math.floor(srt.length / 2);
    var med = srt.length % 2 ? srt[mid] : (srt[mid - 1] + srt[mid]) / 2;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + fmt(chosen) + '</div>'
      + '<div class="ta-embed-sub">' + (mode === 'population' ? 'Population' : 'Sample') + ' SD · variance ' + fmt(mode === 'population' ? pv : sv) + ' · n = ' + n + '</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><div class="k">Mean</div><div class="v">' + fmt(mean) + '</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Median</div><div class="v">' + fmt(med) + '</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Other SD</div><div class="v">' + (n > 1 ? (mode === 'population' ? fmt(sd) : fmt(ps)) : '—') + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.querySelector('.ta-embed-mode-toggle').addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-mode-btn');
    if (!btn) return;
    mode = btn.getAttribute('data-mode');
    root.querySelectorAll('.ta-embed-mode-btn').forEach(function (b) { b.classList.remove('ta-active'); });
    btn.classList.add('ta-active');
    calc();
  });

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.standardDeviationCalculator = { recalc: calc };
})();
