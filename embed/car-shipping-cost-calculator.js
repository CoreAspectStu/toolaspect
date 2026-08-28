/*!
 * ToolAspect Car Shipping Cost Calculator Embed
 * Install: <div id="ta-car-shipping-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/car-shipping-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-car-shipping-cost-calculator';
  var BASE = 'https://toolaspect.com/car-shipping-cost-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'car-shipping-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="car-shipping-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Car Shipping Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Open vs enclosed auto transport by distance</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Distance (miles)</label><input type="number" class="ta-miles" value="1250" min="10" max="5000" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Vehicle</label><select class="ta-vehicle">'
    + '<option value="0.95">Compact</option><option value="1.00" selected>Sedan / coupe</option>'
    + '<option value="1.08">Small SUV</option><option value="1.12">Van</option>'
    + '<option value="1.18">Full-size SUV / pickup</option><option value="1.35">Oversized</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Trailer</label><select class="ta-trailer">'
    + '<option value="open" selected>Open</option><option value="enclosed">Enclosed</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Condition</label><select class="ta-operable">'
    + '<option value="0" selected>Runs and drives</option><option value="150">Inoperable (+$150–$300)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Season</label><select class="ta-season">'
    + '<option value="1.00" selected>Fall / spring</option><option value="1.15">Summer</option><option value="0.92">Winter</option>'
    + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var TIERS = [[150, 2.20, 3.20], [500, 1.30, 1.85], [1000, 0.90, 1.30], [1500, 0.72, 1.05], [2500, 0.55, 0.80], [Infinity, 0.46, 0.66]];

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var miles = num('.ta-miles');
    if (miles < 10) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your shipping distance</div>';
      return;
    }
    var rate;
    for (var i = 0; i < TIERS.length; i++) if (miles <= TIERS[i][0]) { rate = [TIERS[i][1], TIERS[i][2]]; break; }
    var vf = parseFloat(val('.ta-vehicle'));
    var enclosed = val('.ta-trailer') === 'enclosed';
    var inop = parseFloat(val('.ta-operable'));
    var season = parseFloat(val('.ta-season'));
    var lo = (miles * rate[0] * vf + inop) * season;
    var hi = (miles * rate[1] * vf + inop * 2) * season;
    if (enclosed) { lo *= 1.8; hi *= 1.95; }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money((lo + hi) / 2) + '</div>'
      + '<div class="ta-embed-sub">' + money(lo) + ' – ' + money(hi) + ' · ' + (enclosed ? 'enclosed' : 'open') + ' carrier · ' + miles.toLocaleString('en-US') + ' mi</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Per mile</div><div class="rv">$' + (lo / miles).toFixed(2) + ' – $' + (hi / miles).toFixed(2) + '</div></div>'
      + '<div><div class="rl">' + (enclosed ? 'Open alternative' : 'Enclosed alternative') + '</div><div class="rv">' + (enclosed ? money(lo / 1.8) + ' – ' + money(hi / 1.95) : money(lo * 1.8) + ' – ' + money(hi * 1.95)) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.carShippingCostCalculator = { recalc: calc };
})();
