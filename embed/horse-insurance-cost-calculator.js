/*!
 * ToolAspect Horse Insurance Cost Calculator Embed
 * Install: <div id="ta-horse-insurance-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/horse-insurance-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-horse-insurance-cost-calculator';
  var BASE = 'https://toolaspect.com/horse-insurance-cost-calculator/';

  var USE_RATE = { pleasure: 0.030, breeding: 0.034, show: 0.039, event: 0.044 };
  var MED_FEE = { none: 0, surgical: 165, mm5: 350, mm10: 525, mm15: 700 };

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
  styleEl.setAttribute('data-ta-embed', 'horse-insurance-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="horse-insurance-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Horse Insurance Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Equine mortality + major medical annual premium</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Insured value ($)</label><input type="number" class="ta-val" value="12000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Use / discipline</label><select class="ta-use">'
    + '<option value="pleasure">Pleasure / trail</option><option value="breeding">Breeding</option>'
    + '<option value="show" selected>Show / jumper</option><option value="event">Eventing / racing</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Age band</label><select class="ta-age">'
    + '<option value="1">0&ndash;10 years</option><option value="1.15">11&ndash;14 years</option>'
    + '<option value="1.35">15&ndash;17 years</option><option value="1.6">18&ndash;20 years</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Medical coverage</label><select class="ta-med">'
    + '<option value="none">Mortality only</option><option value="surgical">Surgical only (+$165)</option>'
    + '<option value="mm5">Major medical $5k (+$350)</option><option value="mm10" selected>Major medical $10k (+$525)</option>'
    + '<option value="mm15">Major medical $15k (+$700)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>$1M liability</label><select class="ta-liab">'
    + '<option value="0">Not included</option><option value="150" selected>Add +$150/yr</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Minimum premium</label><select class="ta-min">'
    + '<option value="200" selected>Apply $200 minimum</option><option value="0">No minimum</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var val = parseFloat(root.querySelector('.ta-val').value) || 0;
    var use = root.querySelector('.ta-use').value;
    var age = parseFloat(root.querySelector('.ta-age').value);
    var med = root.querySelector('.ta-med').value;
    var liab = parseFloat(root.querySelector('.ta-liab').value) || 0;
    var minP = parseFloat(root.querySelector('.ta-min').value);
    if (val <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your horse\'s insured value</div>';
      return;
    }
    var mort = val * USE_RATE[use] * age;
    if (mort < minP) mort = minP;
    var total = mort + MED_FEE[med] + liab;
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(total).toLocaleString('en-US') + '/yr</div>'
      + '<div class="ta-embed-sub">$' + (total / 12).toFixed(2) + ' per month</div>'
      + '<div class="ta-embed-sub">Mortality $' + Math.round(mort).toLocaleString('en-US') + (MED_FEE[med] ? ' · medical +$' + MED_FEE[med] : '') + (liab ? ' · liability +$' + liab : '') + '</div>'
      + '<div class="ta-embed-sub">Industry-average rates (2.5%–4.5% of value). Your quote will vary.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.horseInsuranceCostCalculator = { recalc: calc };
})();
