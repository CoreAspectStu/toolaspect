/*!
 * ToolAspect RV Insurance Cost Calculator Embed
 * Install: <div id="ta-rv-insurance-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/rv-insurance-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-rv-insurance-cost-calculator';
  var BASE = 'https://toolaspect.com/rv-insurance-cost-calculator/';

  var CLASS_DATA = {
    classA: { base: 1480, typ: 150000, name: 'Class A motorhome' },
    classB: { base: 880, typ: 80000, name: 'Class B camper van' },
    classC: { base: 1090, typ: 90000, name: 'Class C motorhome' },
    trailer: { base: 480, typ: 30000, name: 'Travel trailer' },
    fifth: { base: 640, typ: 45000, name: 'Fifth wheel' },
    camper: { base: 340, typ: 20000, name: 'Truck camper' }
  };
  var USAGE_FACTOR = { full: 1.35, frequent: 1.00, occasional: 0.85 };
  var REGION_FACTOR = { gulf: 1.18, west: 1.05, plains: 0.92, standard: 1.00 };
  var DEDUCTIBLE_FACTOR = { '250': 1.12, '500': 1.00, '1000': 0.90, '2000': 0.82 };

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
  styleEl.setAttribute('data-ta-embed', 'rv-insurance-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="rv-insurance-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">RV Insurance Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Annual premium by class, value, usage, and region</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>RV class</label><select class="ta-cls">'
    + '<option value="classA">Class A</option><option value="classB">Class B van</option>'
    + '<option value="classC" selected>Class C</option><option value="trailer">Travel trailer</option>'
    + '<option value="fifth">Fifth wheel</option><option value="camper">Truck camper</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Insured value ($)</label><input type="number" class="ta-val" value="90000" min="5000" step="5000"></div>'
    + '<div class="ta-embed-form-group"><label>Usage</label><select class="ta-usage">'
    + '<option value="full">Full-time</option><option value="frequent" selected>Frequent</option>'
    + '<option value="occasional">Occasional</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Region</label><select class="ta-region">'
    + '<option value="gulf">Gulf / Southeast</option><option value="west" selected>West</option>'
    + '<option value="plains">Plains / Mountain</option><option value="standard">Other</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Deductible</label><select class="ta-ded">'
    + '<option value="250">$250</option><option value="500" selected>$500</option>'
    + '<option value="1000">$1,000</option><option value="2000">$2,000</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var cls = root.querySelector('.ta-cls').value;
    var val = parseFloat(root.querySelector('.ta-val').value) || 0;
    var usage = root.querySelector('.ta-usage').value;
    var region = root.querySelector('.ta-region').value;
    var ded = root.querySelector('.ta-ded').value;
    var c = CLASS_DATA[cls];
    if (val <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your RV insured value</div>';
      return;
    }
    var premium = c.base * (0.55 + 0.45 * val / c.typ) * USAGE_FACTOR[usage] * REGION_FACTOR[region] * DEDUCTIBLE_FACTOR[ded];
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(premium).toLocaleString('en-US') + '/yr</div>'
      + '<div class="ta-embed-sub">$' + (premium / 12).toFixed(2) + ' per month</div>'
      + '<div class="ta-embed-sub">' + c.name + ' class baseline: <strong>$' + c.base + '/yr</strong> at a typical $' + c.typ.toLocaleString('en-US') + ' value</div>'
      + '<div class="ta-embed-sub">Typical industry averages, full coverage. Your quote will vary.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.rvInsuranceCostCalculator = { recalc: calc };
})();
