/*!
 * ToolAspect Car Repair Cost Calculator Embed
 * Install: <div id="ta-car-repair-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/car-repair-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-car-repair-cost-calculator';
  var BASE = 'https://toolaspect.com/car-repair-cost-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'car-repair-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="car-repair-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Car Repair Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Parts + flat-rate labor for 25 common repairs</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Repair</label><select class="ta-repair">'
    + '<option value="pads">Brake pads (front)</option>'
    + '<option value="padsrotors" selected>Brake pads + rotors</option>'
    + '<option value="alternator">Alternator</option>'
    + '<option value="starter">Starter</option>'
    + '<option value="battery">Battery</option>'
    + '<option value="waterpump">Water pump</option>'
    + '<option value="radiator">Radiator</option>'
    + '<option value="thermostat">Thermostat</option>'
    + '<option value="tbelt">Timing belt + pump</option>'
    + '<option value="serp">Serpentine belt</option>'
    + '<option value="plugs">Spark plugs (4-cyl)</option>'
    + '<option value="coil">Ignition coil</option>'
    + '<option value="o2">O2 sensor</option>'
    + '<option value="maf">Mass air flow sensor</option>'
    + '<option value="cat">Catalytic converter</option>'
    + '<option value="fuelpump">Fuel pump</option>'
    + '<option value="bearing">Wheel bearing</option>'
    + '<option value="cv">CV axle</option>'
    + '<option value="controlarm">Control arm</option>'
    + '<option value="struts">Struts (pair)</option>'
    + '<option value="accomp">AC compressor</option>'
    + '<option value="pspump">Power steering pump</option>'
    + '<option value="clutch">Clutch</option>'
    + '<option value="headgasket">Head gasket</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Shop type</label><select class="ta-shop">'
    + '<option value="120" selected>Independent ($90–$150/hr)</option>'
    + '<option value="115">National chain ($90–$140/hr)</option>'
    + '<option value="155">Dealership ($120–$190/hr)</option>'
    + '<option value="150">European specialty ($120–$180/hr)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Rate ($/hr)</label><input type="number" class="ta-rate" value="120" min="40" max="400" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var R = {
    pads: [70, 180, 1.0, 1.6], padsrotors: [250, 500, 1.5, 2.5], alternator: [350, 700, 1.5, 2.5],
    starter: [300, 600, 1.5, 2.5], battery: [140, 320, 0.3, 0.5], waterpump: [300, 650, 2.0, 3.5],
    radiator: [350, 750, 1.8, 3.0], thermostat: [90, 220, 1.0, 1.8], tbelt: [350, 800, 3.5, 6.0],
    serp: [40, 110, 0.4, 0.9], plugs: [40, 160, 0.8, 1.8], coil: [90, 250, 0.5, 1.2],
    o2: [130, 350, 0.5, 1.2], maf: [150, 420, 0.4, 1.0], cat: [900, 2500, 1.0, 2.2],
    fuelpump: [350, 800, 1.5, 3.0], bearing: [200, 500, 1.5, 2.5], cv: [200, 500, 1.0, 1.8],
    controlarm: [250, 600, 1.5, 2.5], struts: [300, 700, 2.0, 3.5], accomp: [450, 900, 2.5, 4.5],
    pspump: [250, 550, 1.5, 2.5], clutch: [500, 1100, 4.0, 7.0], headgasket: [400, 900, 8.0, 14.0]
  };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var r = R[val('.ta-repair')];
    var rate = num('.ta-rate');
    if (!r || rate <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Pick a repair and rate</div>';
      return;
    }
    var lo = r[0] + r[2] * rate, hi = r[1] + r[3] * rate;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">parts ' + money(r[0]) + '–' + money(r[1]) + ' + ' + r[2] + '–' + r[3] + ' hrs × $' + rate + '/hr</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Labor</div><div class="rv">' + money(r[2] * rate) + ' – ' + money(r[3] * rate) + '</div></div>'
      + '<div><div class="rl">DIY?</div><div class="rv">' + (r[3] <= 1.8 ? 'DIY-friendly' : 'Pro job') + '</div></div>'
      + '</div>';
  }

  root.querySelector('.ta-shop').addEventListener('change', function () {
    root.querySelector('.ta-rate').value = this.value;
    calc();
  });
  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.carRepairCostCalculator = { recalc: calc };
})();
