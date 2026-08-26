/*!
 * ToolAspect Motorcycle Insurance Cost Calculator Embed
 * Install: <div id="ta-motorcycle-insurance-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/motorcycle-insurance-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-motorcycle-insurance-cost-calculator';
  var BASE = 'https://toolaspect.com/motorcycle-insurance-cost-calculator/';

  var STATE_RATES = { AL: 660, AK: 480, AZ: 590, AR: 610, CA: 830, CO: 560, CT: 640, DE: 620, DC: 780, FL: 950, GA: 700, HI: 610, ID: 430, IL: 570, IN: 520, IA: 400, KS: 490, KY: 580, LA: 1080, ME: 420, MD: 690, MA: 610, MI: 870, MN: 450, MS: 720, MO: 540, MT: 380, NE: 460, NV: 640, NH: 410, NJ: 760, NM: 560, NY: 820, NC: 530, ND: 330, OH: 470, OK: 650, OR: 490, PA: 550, RI: 700, SC: 600, SD: 340, TN: 570, TX: 780, UT: 470, VT: 415, VA: 510, WA: 560, WV: 590, WI: 410, WY: 365 };
  var STATE_NAMES = { AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California', CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', DC: 'District of Columbia', FL: 'Florida', GA: 'Georgia', HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina', SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming' };
  var COVERAGE_FACTOR = { full: 1.00, 'liab-comp': 0.72, liab: 0.38 };
  var AGE_FACTOR = { y18: 1.90, y25: 1.35, y35: 1.10, y45: 1.00, y55: 0.90, y65: 0.95 };
  var BIKE_FACTOR = { cruiser: 1.00, touring: 1.05, standard: 0.95, sport: 1.65, adv: 1.00, scooter: 0.55 };
  var CC_FACTOR = { s: 0.85, m: 0.95, l: 1.00, xl: 1.10 };
  var RECORD_FACTOR = { clean: 1.00, one: 1.28, two: 1.60 };

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'motorcycle-insurance-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="motorcycle-insurance-cost-calculator"]')) {
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

  var stateOptions = '';
  Object.keys(STATE_NAMES).sort(function (a, b) {
    return STATE_NAMES[a] < STATE_NAMES[b] ? -1 : 1;
  }).forEach(function (k) {
    stateOptions += '<option value="' + k + '"' + (k === 'TX' ? ' selected' : '') + '>' + STATE_NAMES[k] + '</option>';
  });

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Motorcycle Insurance Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Annual and monthly premium by state, age, bike, and record</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state">' + stateOptions + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Rider age</label><select class="ta-age">'
    + '<option value="y18">18-24</option><option value="y25">25-34</option><option value="y35">35-44</option>'
    + '<option value="y45" selected>45-54</option><option value="y55">55-64</option><option value="y65">65+</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Coverage</label><select class="ta-cov">'
    + '<option value="full" selected>Full coverage</option><option value="liab-comp">Liability + comp</option>'
    + '<option value="liab">Liability only</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Bike type</label><select class="ta-bike">'
    + '<option value="cruiser" selected>Cruiser</option><option value="touring">Touring</option>'
    + '<option value="standard">Standard</option><option value="sport">Sportbike</option>'
    + '<option value="adv">Adventure</option><option value="scooter">Scooter</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Engine size</label><select class="ta-cc">'
    + '<option value="s">Under 500cc</option><option value="m" selected>500-749cc</option>'
    + '<option value="l">750-1,100cc</option><option value="xl">1,100cc+</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Record (3 yrs)</label><select class="ta-rec">'
    + '<option value="clean" selected>Clean</option><option value="one">One ticket/claim</option>'
    + '<option value="two">Two or more</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var st = root.querySelector('.ta-state').value;
    var age = root.querySelector('.ta-age').value;
    var cov = root.querySelector('.ta-cov').value;
    var bike = root.querySelector('.ta-bike').value;
    var cc = root.querySelector('.ta-cc').value;
    var rec = root.querySelector('.ta-rec').value;
    var base = STATE_RATES[st];
    if (!base) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Pick your state</div>';
      return;
    }
    var premium = base * COVERAGE_FACTOR[cov] * AGE_FACTOR[age] * BIKE_FACTOR[bike] * CC_FACTOR[cc] * RECORD_FACTOR[rec];
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(premium).toLocaleString('en-US') + '/yr</div>'
      + '<div class="ta-embed-sub">$' + (premium / 12).toFixed(2) + ' per month</div>'
      + '<div class="ta-embed-sub">' + STATE_NAMES[st] + ' baseline (45-54, cruiser, full coverage): <strong>$' + base + '/yr</strong></div>'
      + '<div class="ta-embed-sub">Typical published 2025 averages. Your quote will vary.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.motorcycleInsuranceCostCalculator = { recalc: calc };
})();
