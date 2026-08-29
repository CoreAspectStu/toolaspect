/*!
 * ToolAspect EV Battery Replacement Cost Calculator Embed
 * Install: <div id="ta-ev-battery-replacement-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/ev-battery-replacement-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-ev-battery-replacement-cost-calculator';
  var BASE = 'https://toolaspect.com/ev-battery-replacement-cost-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'ev-battery-replacement-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="ev-battery-replacement-cost-calculator"]')) {
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

  var MODELS = {
    leaf24: { kwh: 24, ty: 5250 },
    leaf30: { kwh: 30, ty: 6500 },
    leaf40: { kwh: 40, ty: 9000 },
    tesla: { kwh: 75, ty: 13500 },
    bolt: { kwh: 65, ty: 15734 }
  };
  var COND = { new: 1, reman: 0.6, used: 0.4 };

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">EV Battery Replacement Cost</div>'
    + '<div class="ta-embed-subtitle">New, remanufactured, or used pack — with labor and tax</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Model</label>'
    + '<select class="ta-model">'
    + '<option value="leaf24">Leaf 24 kWh</option>'
    + '<option value="leaf30">Leaf 30 kWh</option>'
    + '<option value="leaf40" selected>Leaf 40 kWh</option>'
    + '<option value="tesla">Tesla Model 3/Y</option>'
    + '<option value="bolt">Chevy Bolt</option>'
    + '<option value="custom">Custom kWh</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>kWh</label><input type="number" class="ta-kwh" value="40" min="5" max="250" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Pack condition</label>'
    + '<select class="ta-cond"><option value="new" selected>New</option><option value="reman">Reman (−40%)</option><option value="used">Used (−60%)</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Labor hours</label><input type="number" class="ta-hours" value="5" min="1" max="20" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Shop rate ($/hr)</label><input type="number" class="ta-rate" value="150" min="50" max="400" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Sales tax (%)</label><input type="number" class="ta-tax" value="7" min="0" max="10" step="0.25"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function money(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calc() {
    var key = root.querySelector('.ta-model').value;
    var kwh = val('.ta-kwh');
    var cond = root.querySelector('.ta-cond').value;
    var hours = val('.ta-hours');
    var rate = val('.ta-rate');
    var taxPct = val('.ta-tax');
    var parts;
    if (key === 'custom') {
      parts = kwh * 200 * COND[cond];
    } else {
      parts = MODELS[key].ty * COND[cond];
    }
    var labor = hours * rate;
    var total = (parts + labor) * (1 + taxPct / 100);
    var perKwh = kwh > 0 ? '$' + (total / kwh).toFixed(0) + '/kWh' : '';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(total) + '</div>'
      + '<div class="ta-embed-sub">Estimated installed total' + (perKwh ? ' · ' + perKwh : '') + '</div>'
      + '<div class="ta-embed-sub">Parts ' + money(parts) + ' + labor ' + money(labor) + (taxPct ? ' + ' + taxPct + '% tax' : '') + '</div>'
      + '<div class="ta-embed-sub">Under 8 years / 100k miles? The battery warranty likely pays instead.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', function (e) {
    var m = root.querySelector('.ta-model');
    if (e.target === m && MODELS[m.value]) root.querySelector('.ta-kwh').value = MODELS[m.value].kwh;
    calc();
  });
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.evBatteryReplacementCostCalculator = { recalc: calc };
})();
