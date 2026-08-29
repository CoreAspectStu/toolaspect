/*!
 * ToolAspect Car Maintenance Cost Calculator Embed
 * Install: <div id="ta-car-maintenance-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/car-maintenance-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-car-maintenance-cost-calculator';
  var BASE = 'https://toolaspect.com/car-maintenance-cost-calculator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'car-maintenance-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="car-maintenance-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Car Maintenance Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Which 30/60/90K services are due, and what the year costs</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Current Mileage</label><input type="number" class="ta-miles" value="42500" min="0" max="400000" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Annual Miles</label><input type="number" class="ta-annual" value="12000" min="1000" max="60000" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Service Pricing</label><select class="ta-tier">'
    + '<option value="econ">Economy (independent)</option>'
    + '<option value="typical" selected>Typical shop</option>'
    + '<option value="dealer">Dealer</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var MAJOR = { 1: [150, 400, '30K'], 2: [300, 800, '60K'], 3: [450, 1200, '90K'], 4: [400, 1500, '120K'] };
  var TIERS = { econ: 0.8, typical: 1.0, dealer: 1.3 };
  var ROUTINE = 381; // oil 152 + rotations 70 + wear 159 at typical pricing

  function classOf(i) { return i <= 4 ? i : (i % 2 === 1 ? 3 : 2); }
  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var cur = num('.ta-miles'), annual = num('.ta-annual');
    if (cur < 0 || annual <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your mileage and annual miles</div>';
      return;
    }
    var t = TIERS[val('.ta-tier')] || 1;
    var routine = ROUTINE * t;
    var next12 = [], next5 = [];
    for (var m = 30000; m <= 400000; m += 30000) {
      var cls = classOf(m / 30000);
      if (cur < m && m <= cur + annual) next12.push(cls);
      if (cur < m && m <= cur + annual * 5) next5.push(cls);
    }
    function sum(list) {
      var lo = 0, hi = 0;
      for (var i = 0; i < list.length; i++) { lo += MAJOR[list[i]][0]; hi += MAJOR[list[i]][1]; }
      return [lo * t, hi * t];
    }
    var m12 = sum(next12), m5 = sum(next5);
    var lo = routine + m12[0], hi = routine + m12[1];
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '/yr</div>'
      + '<div class="ta-embed-sub">' + (next12.length
        ? 'includes ' + next12.map(function (c) { return MAJOR[c][2] + ' service'; }).join(' + ')
        : 'no 30/60/90K service due — routine year') + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">5-Year Average</div><div class="rv">' + money((routine * 5 + m5[0]) / 5) + ' – ' + money((routine * 5 + m5[1]) / 5) + '/yr</div></div>'
      + '<div><div class="rl">Cost per Mile</div><div class="rv">$' + (lo / annual).toFixed(3) + ' – $' + (hi / annual).toFixed(3) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.carMaintenanceCostCalculator = { recalc: calc };
})();
