/*!
 * ToolAspect Boat Insurance Cost Calculator Embed
 * Install: <div id="ta-boat-insurance-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/boat-insurance-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-boat-insurance-cost-calculator';
  var BASE = 'https://toolaspect.com/boat-insurance-cost-calculator/';

  var TYPE_DATA = {
    bass: { base: 345, typ: 30000, name: 'Bass / fishing boat' },
    pontoon: { base: 385, typ: 35000, name: 'Pontoon' },
    bowrider: { base: 420, typ: 40000, name: 'Bowrider / runabout' },
    sail: { base: 560, typ: 50000, name: 'Sailboat' },
    cruiser: { base: 980, typ: 120000, name: 'Cabin cruiser' },
    pwc: { base: 265, typ: 12000, name: 'Jet ski / PWC' },
    small: { base: 110, typ: 2500, name: 'Small craft' }
  };
  var NAV_FACTOR = { inland: 1.00, greatlakes: 1.10, coastal: 1.18, offshore: 1.40 };
  var DEDUCTIBLE_FACTOR = { '250': 1.10, '500': 1.00, '1000': 0.90 };
  var LAYUP_FACTOR = { none: 1.00, m5: 0.92, m6: 0.85 };

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
  styleEl.setAttribute('data-ta-embed', 'boat-insurance-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="boat-insurance-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Boat Insurance Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Annual premium by boat type, value, and water</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Boat type</label><select class="ta-type">'
    + '<option value="bass" selected>Bass boat</option><option value="pontoon">Pontoon</option>'
    + '<option value="bowrider">Bowrider</option><option value="sail">Sailboat</option>'
    + '<option value="cruiser">Cabin cruiser</option><option value="pwc">Jet ski / PWC</option>'
    + '<option value="small">Canoe / kayak</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Insured value ($)</label><input type="number" class="ta-val" value="40000" min="1000" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Navigation</label><select class="ta-nav">'
    + '<option value="inland">Inland lakes</option><option value="greatlakes" selected>Great Lakes / bays</option>'
    + '<option value="coastal">Coastal</option><option value="offshore">Offshore</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>State group</label><select class="ta-state">'
    + '<option value="0.95" selected>Great Lakes / inland heartland</option>'
    + '<option value="1.00">Standard</option><option value="1.12">Coastal (Atlantic / Pacific)</option>'
    + '<option value="1.25">Hurricane state (Gulf / Southeast)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Deductible</label><select class="ta-ded">'
    + '<option value="250">$250</option><option value="500" selected>$500</option>'
    + '<option value="1000">$1,000</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Lay-up (winter storage)</label><select class="ta-lay">'
    + '<option value="none">None</option><option value="m5" selected>3-5 months</option>'
    + '<option value="m6">6+ months</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var t = root.querySelector('.ta-type').value;
    var val = parseFloat(root.querySelector('.ta-val').value) || 0;
    var nav = root.querySelector('.ta-nav').value;
    var st = parseFloat(root.querySelector('.ta-state').value);
    var ded = root.querySelector('.ta-ded').value;
    var lay = root.querySelector('.ta-lay').value;
    var c = TYPE_DATA[t];
    if (val <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your boat insured value</div>';
      return;
    }
    var premium = c.base * (0.6 + 0.4 * val / c.typ) * st * NAV_FACTOR[nav] * DEDUCTIBLE_FACTOR[ded] * LAYUP_FACTOR[lay];
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(premium).toLocaleString('en-US') + '/yr</div>'
      + '<div class="ta-embed-sub">$' + (premium / 12).toFixed(2) + ' per month</div>'
      + '<div class="ta-embed-sub">' + c.name + ' · ' + (premium / val * 100).toFixed(1) + '% of insured value per year</div>'
      + '<div class="ta-embed-sub">Typical industry averages, $300k liability included. Your quote will vary.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.boatInsuranceCostCalculator = { recalc: calc };
})();
