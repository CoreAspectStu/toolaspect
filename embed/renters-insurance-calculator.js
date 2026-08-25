/*!
 * ToolAspect Renters Insurance Calculator Embed
 * Install: <div id="ta-renters-insurance-calculator"></div>
 *          <script src="https://toolaspect.com/embed/renters-insurance-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-renters-insurance-calculator';
  var BASE = 'https://toolaspect.com/renters-insurance-calculator/';

  var STATE_RATES = { AL: 255, AK: 166, AZ: 178, AR: 235, CA: 202, CO: 164, CT: 180, DE: 159, DC: 158, FL: 270, GA: 240, HI: 170, ID: 133, IL: 168, IN: 174, IA: 126, KS: 172, KY: 168, LA: 390, ME: 149, MD: 190, MA: 172, MI: 182, MN: 140, MS: 310, MO: 188, MT: 146, NE: 132, NV: 178, NH: 145, NJ: 165, NM: 187, NY: 190, NC: 158, ND: 115, OH: 162, OK: 300, OR: 156, PA: 158, RI: 182, SC: 188, SD: 118, TN: 200, TX: 275, UT: 140, VT: 151, VA: 168, WA: 158, WV: 180, WI: 122, WY: 148 };
  var STATE_NAMES = { AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California', CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', DC: 'District of Columbia', FL: 'Florida', GA: 'Georgia', HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina', SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming' };
  var DEDUCTIBLE_FACTOR = { '500': 1.0, '1000': 0.92, '2000': 0.85 };

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
  styleEl.setAttribute('data-ta-embed', 'renters-insurance-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="renters-insurance-calculator"]')) {
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
    + '<div class="ta-embed-title">Renters Insurance Calculator</div>'
    + '<div class="ta-embed-subtitle">Estimated annual and monthly premium by state</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state">' + stateOptions + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Property coverage ($)</label><input type="number" class="ta-prop" value="30000" min="5000" step="5000"></div>'
    + '<div class="ta-embed-form-group"><label>Deductible</label><select class="ta-ded">'
    + '<option value="500" selected>$500</option>'
    + '<option value="1000">$1,000</option>'
    + '<option value="2000">$2,000</option>'
    + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var st = root.querySelector('.ta-state').value;
    var prop = parseFloat(root.querySelector('.ta-prop').value) || 0;
    var ded = root.querySelector('.ta-ded').value;
    var base = STATE_RATES[st];
    if (!base || prop <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your property coverage</div>';
      return;
    }
    var premium = base * (0.55 + 0.45 * prop / 30000) * DEDUCTIBLE_FACTOR[ded];
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(premium).toLocaleString('en-US') + '/yr</div>'
      + '<div class="ta-embed-sub">$' + (premium / 12).toFixed(2) + ' per month</div>'
      + '<div class="ta-embed-sub">' + STATE_NAMES[st] + ' average (baseline policy): <strong>$' + base + '/yr</strong></div>'
      + '<div class="ta-embed-sub">Published 2025 averages with $100,000 liability. Your quote will vary.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.rentersInsuranceCalculator = { recalc: calc };
})();
