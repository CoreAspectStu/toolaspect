/*!
 * ToolAspect Concrete Calculator Embed
 * Install: <div id="ta-concrete-calculator"></div>
 *          <script src="https://toolaspect.com/embed/concrete-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-concrete-calculator';
  var BASE = 'https://toolaspect.com/concrete-calculator/';

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
    + '.ta-embed-form-group input[type="checkbox"]{width:auto}'
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
    + '.ta-embed-check{display:flex;align-items:center;font-size:.85rem;color:var(--ta-text);cursor:pointer}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'concrete-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="concrete-calculator"]')) {
    (document.head || document.documentElement).appendChild(styleEl);
  }

  function findTarget() {
    var el = document.getElementById(TARGET_ID);
    if (el) return el;
    // fallback: div immediately preceding this script
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
    + '<div class="ta-embed-title">Concrete Calculator</div>'
    + '<div class="ta-embed-subtitle">Cubic yards, 80lb bags, and cost estimate</div>'
    + '<div class="ta-embed-mode-toggle">'
    + '<button type="button" class="ta-embed-mode-btn ta-active" data-mode="slab">Slab</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-mode="footing">Footing</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-mode="column">Column</button>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-inputs"></div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Waste factor (%)</label><input type="number" class="ta-waste" value="10" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Price per yd³ ($, ready-mix)</label><input type="number" class="ta-price" value="150" min="0" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var inputsEl = root.querySelector('.ta-embed-inputs');
  var resultEl = root.querySelector('.ta-embed-result');
  var mode = 'slab';

  function onInput(html) { return html; }

  function renderInputs() {
    var h = '';
    if (mode === 'slab') {
      h = '<div class="ta-embed-form-row">'
        + '<div class="ta-embed-form-group"><label>Length (ft)</label><input type="number" class="ta-a" value="10" min="0" step="0.5"></div>'
        + '<div class="ta-embed-form-group"><label>Width (ft)</label><input type="number" class="ta-b" value="10" min="0" step="0.5"></div>'
        + '<div class="ta-embed-form-group"><label>Thickness (in)</label><input type="number" class="ta-c" value="4" min="0.5" step="0.5"></div>'
        + '</div>';
    } else if (mode === 'footing') {
      h = '<div class="ta-embed-form-row">'
        + '<div class="ta-embed-form-group"><label>Length (ft)</label><input type="number" class="ta-a" value="20" min="0" step="0.5"></div>'
        + '<div class="ta-embed-form-group"><label>Width (in)</label><input type="number" class="ta-b" value="16" min="1" step="1"></div>'
        + '<div class="ta-embed-form-group"><label>Depth (in)</label><input type="number" class="ta-c" value="8" min="1" step="1"></div>'
        + '</div>';
    } else {
      h = '<div class="ta-embed-form-row">'
        + '<div class="ta-embed-form-group"><label>Diameter (in)</label><input type="number" class="ta-d" value="12" min="1" step="1"></div>'
        + '<div class="ta-embed-form-group"><label>Height (ft)</label><input type="number" class="ta-a" value="4" min="0" step="0.5"></div>'
        + '<div class="ta-embed-form-group"><label>Number of columns</label><input type="number" class="ta-n" value="4" min="1" step="1"></div>'
        + '</div>'
        + '<div class="ta-embed-form-group"><label class="ta-embed-check"><input type="checkbox" class="ta-square" style="margin-right:6px"> Square column (instead of round)</label></div>';
    }
    inputsEl.innerHTML = h;
  }

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function calc() {
    var waste = val('.ta-waste') / 100;
    var price = val('.ta-price');
    var cf = 0;
    var a = val('.ta-a'), b = val('.ta-b'), c = val('.ta-c');
    if (mode === 'slab') {
      cf = a * b * (c / 12);
    } else if (mode === 'footing') {
      cf = a * (b / 12) * (c / 12);
    } else {
      var d = val('.ta-d');
      var n = val('.ta-n') || 1;
      var sqEl = root.querySelector('.ta-square');
      var sq = sqEl ? sqEl.checked : false;
      var one = sq ? (d / 12) * (d / 12) * a : Math.PI * Math.pow(d / 24, 2) * a;
      cf = one * n;
    }
    if (cf <= 0 || isNaN(cf)) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your dimensions</div>';
      return;
    }
    var cfW = cf * (1 + waste);
    var yd = cfW / 27;
    var bags = Math.ceil(cfW / 0.6);
    var cost = yd * price;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + yd.toFixed(2) + ' yd³</div>'
      + '<div class="ta-embed-sub">' + cfW.toFixed(1) + ' ft³ (with ' + Math.round(waste * 100) + '% waste)</div>'
      + '<div class="ta-embed-sub"><strong>' + bags + '</strong> × 80lb bags</div>'
      + (price > 0 ? '<div class="ta-embed-sub">Ready-mix cost estimate: <strong>$' + cost.toFixed(0) + '</strong></div>' : '');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', function (e) {
    if (e.target.classList.contains('ta-square')) calc();
  });
  root.querySelector('.ta-embed-mode-toggle').addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-mode-btn');
    if (!btn) return;
    mode = btn.getAttribute('data-mode');
    root.querySelectorAll('.ta-embed-mode-btn').forEach(function (b) { b.classList.remove('ta-active'); });
    btn.classList.add('ta-active');
    renderInputs();
    calc();
  });

  renderInputs();
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.concreteCalculator = { recalc: calc };
})();
