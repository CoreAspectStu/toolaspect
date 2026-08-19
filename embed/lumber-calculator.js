/*!
 * ToolAspect Lumber Calculator Embed
 * Install: <div id="ta-lumber-calculator"></div>
 *          <script src="https://toolaspect.com/embed/lumber-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-lumber-calculator';
  var BASE = 'https://toolaspect.com/lumber-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'lumber-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="lumber-calculator"]')) {
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
    + '<div class="ta-embed-title">Lumber Calculator</div>'
    + '<div class="ta-embed-subtitle">Board feet, pieces from linear feet, and cost</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Nominal thickness (in)</label><input type="number" class="ta-thick" value="2" min="0.25" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Nominal width (in)</label><input type="number" class="ta-wide" value="4" min="0.25" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Board length (ft)</label><input type="number" class="ta-len" value="8" min="0.5" step="0.5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Linear feet needed</label><input type="number" class="ta-linft" value="100" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Price per board ($)</label><input type="number" class="ta-price" value="6" min="0" step="0.25"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function v(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function calc() {
    var t = v('.ta-thick');
    var w = v('.ta-wide');
    var l = v('.ta-len');
    var linft = v('.ta-linft');
    var price = v('.ta-price');
    if (t <= 0 || w <= 0 || l <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter dimensions</div>';
      return;
    }
    var bf = t * w * l / 12;
    var pieces = linft > 0 ? Math.ceil(linft / l) : 0;
    var totalBf = bf * pieces;
    var cost = pieces * price;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + bf.toFixed(2) + ' BF</div>'
      + '<div class="ta-embed-sub">per board (' + t + '" × ' + w + '" × ' + l + ' ft)</div>'
      + (linft > 0
        ? '<div class="ta-embed-sub">' + linft + ' linear ft → <strong>' + pieces + ' boards</strong></div>'
        + '<div class="ta-embed-sub">Total: <strong>' + totalBf.toFixed(1) + ' board feet</strong></div>'
        + (price > 0 ? '<div class="ta-embed-sub">Cost estimate: <strong>$' + cost.toFixed(0) + '</strong></div>' : '')
        : '');
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.lumberCalculator = { recalc: calc };
})();
