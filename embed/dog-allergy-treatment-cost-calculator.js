/*!
 * ToolAspect Dog Allergy Treatment Cost Calculator Embed
 * Install: <div id="ta-dog-allergy-treatment-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-allergy-treatment-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Cost-only tool: prices published treatment schedules and visit frequency; no dosing math.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-allergy-treatment-cost-calculator';
  var BASE = 'https://toolaspect.com/dog-allergy-treatment-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.4rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-rows{margin-top:14px;text-align:left;font-size:.88rem}'
    + '.ta-embed-rows div{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--ta-border)}'
    + '.ta-embed-rows div:last-child{border-bottom:none;font-weight:700}'
    + '.ta-embed-note{text-align:left;background:var(--ta-bg);border-radius:8px;padding:12px 14px;margin-top:14px;font-size:.82rem;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-allergy-treatment-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-allergy-treatment-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Dog Allergy Treatment Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Cytopoint vs Apoquel vs immunotherapy, priced over 1-5 years</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Dog weight band</label><select class="ta-band">'
    + '<option value="s">Under 20 lb</option>'
    + '<option value="m">21-40 lb</option>'
    + '<option value="l" selected>41-70 lb</option>'
    + '<option value="xl">Over 70 lb</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Years of treatment</label><select class="ta-years">'
    + '<option value="1">1 year</option>'
    + '<option value="2">2 years</option>'
    + '<option value="3" selected>3 years</option>'
    + '<option value="5">5 years</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Cytopoint schedule</label><select class="ta-interval">'
    + '<option value="4">Every 4 weeks</option>'
    + '<option value="6">Every 6 weeks</option>'
    + '<option value="8" selected>Every 8 weeks</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Exam fee per visit ($)</label><input type="number" class="ta-exam" value="45" min="0" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">&nbsp;</div>'
    + '<div class="ta-embed-rows">'
    + '<div><span>Cytopoint total</span><span class="ta-r-cy">—</span></div>'
    + '<div><span>Apoquel total</span><span class="ta-r-ap">—</span></div>'
    + '<div><span>Immunotherapy total</span><span class="ta-r-im">—</span></div>'
    + '</div>'
    + '<div class="ta-embed-note ta-verdict"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var CY = { s: 75, m: 115, l: 160, xl: 190 };
  var AP = { s: 60, m: 85, l: 110, xl: 135 };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var band = root.querySelector('.ta-band').value;
    var years = parseInt(root.querySelector('.ta-years').value, 10);
    var interval = parseInt(root.querySelector('.ta-interval').value, 10);
    var exam = val('.ta-exam');
    var injYr = 52 / interval;
    var cyYr = injYr * (CY[band] + exam);
    var apYr1 = AP[band] * 12 + 35 + 2 * exam;
    var apYrN = AP[band] * 12 + 2 * exam;
    var imYr1 = 600 + 75 * 12 + 2 * exam;
    var imYrN = 75 * 12 + 2 * exam;
    var cyTot = cyYr * years;
    var apTot = apYr1 + apYrN * (years - 1);
    var imTot = imYr1 + imYrN * (years - 1);
    root.querySelector('.ta-r-cy').textContent = fmt(cyTot);
    root.querySelector('.ta-r-ap').textContent = fmt(apTot);
    root.querySelector('.ta-r-im').textContent = fmt(imTot);
    var opts = [['Cytopoint', cyTot], ['Apoquel', apTot], ['Immunotherapy', imTot]];
    opts.sort(function (a, b) { return a[1] - b[1]; });
    root.querySelector('.ta-embed-big').textContent = fmt(opts[0][1]);
    root.querySelector('.ta-embed-sub').textContent = opts[0][0] + ' is cheapest over ' + years + ' year' + (years > 1 ? 's' : '');
    root.querySelector('.ta-verdict').textContent = 'Based on published national prices: Cytopoint $' + CY[band] + '/injection for this weight band, Apoquel $' + AP[band] + '/month, immunotherapy $600 test + $75/month serum, first-month Apoquel adder $35. Cost estimates only — not dosing advice; treatment choices belong with your vet.';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogAllergyTreatmentCostCalculator = { recalc: calc };
})();
