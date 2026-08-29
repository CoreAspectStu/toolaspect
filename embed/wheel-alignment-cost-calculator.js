/*!
 * ToolAspect Wheel Alignment Cost Calculator Embed
 * Install: <div id="ta-wheel-alignment-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wheel-alignment-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wheel-alignment-cost-calculator';
  var BASE = 'https://toolaspect.com/wheel-alignment-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-good:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-good:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:16px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-form-group{margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none;cursor:pointer}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px;text-align:center}'
    + '.ta-embed-cell .cl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-cell .cv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-verdict{padding:10px 12px;border-radius:8px;text-align:center;font-weight:600;font-size:.9rem}'
    + '.ta-embed-verdict.win{background:rgba(22,163,74,.1);color:var(--ta-good);border:1px solid rgba(22,163,74,.3)}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-verdict.win{background:rgba(74,222,128,.1)}'
    + '.ta-embed-verdict.lose{background:rgba(220,38,38,.08);color:var(--ta-bad);border:1px solid rgba(220,38,38,.25)}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-verdict.lose{background:rgba(248,113,113,.1)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}.ta-embed-grid{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wheel-alignment-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wheel-alignment-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Wheel Alignment Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Single price vs a lifetime plan, for your vehicle</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Alignment</label><select class="ta-type"><option value="four">4-wheel</option><option value="two">2-wheel</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Vehicle</label><select class="ta-class"><option value="car">Car</option><option value="suv" selected>SUV / Minivan</option><option value="truck">Truck / Lifted</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Area prices</label><select class="ta-region"><option value="low">Low</option><option value="avg" selected>Average</option><option value="high">High (metro)</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Lifetime plan ($)</label><input type="number" class="ta-plan" value="200" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Alignments / year</label><input type="number" class="ta-peryear" value="2" min="0.5" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Years owning it</label><input type="number" class="ta-years" value="4" min="1" max="30" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-grid"></div>'
    + '<div class="ta-embed-verdict win"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var gridEl = root.querySelector('.ta-embed-grid');
  var verdictEl = root.querySelector('.ta-embed-verdict');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function sel(selName) { return root.querySelector(selName).value; }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function calc() {
    var base = { two: 75, four: 125 };
    var classMult = { car: 1.0, suv: 1.1, truck: 1.2 };
    var regionMult = { low: 0.85, avg: 1.0, high: 1.25 };
    var single = base[sel('.ta-type')] * classMult[sel('.ta-class')] * regionMult[sel('.ta-region')];
    var plan = val('.ta-plan');
    var perYear = val('.ta-peryear');
    var years = Math.max(1, val('.ta-years') || 1);
    var visits = perYear * years;
    var beVisits = single > 0 ? Math.ceil(plan / single) : 0;
    var savings = visits * single - plan;

    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(single) + '</div>'
      + '<div class="ta-embed-sub">typical single ' + (sel('.ta-type') === 'four' ? '4-wheel' : '2-wheel') + ' alignment in your area</div>';

    gridEl.innerHTML =
      '<div class="ta-embed-cell"><div class="cl">Break-even</div><div class="cv">' + (plan > 0 ? beVisits + ' alignments' : '—') + '</div></div>'
      + '<div class="ta-embed-cell"><div class="cl">Pay-per-visit / yr</div><div class="cv">' + money(single * perYear) + '</div></div>'
      + '<div class="ta-embed-cell"><div class="cl">Plan / yr</div><div class="cv">' + money(plan / years) + '</div></div>'
      + '<div class="ta-embed-cell"><div class="cl">Savings over ' + Math.round(years) + ' yrs</div><div class="cv">' + money(savings) + '</div></div>';

    if (plan <= 0) {
      verdictEl.className = 'ta-embed-verdict win';
      verdictEl.textContent = 'Enter a plan price to compare a lifetime alignment plan';
    } else if (savings > 0) {
      verdictEl.className = 'ta-embed-verdict win';
      verdictEl.textContent = 'Plan wins: ' + Math.round(visits) + ' alignments over ' + Math.round(years) + ' yrs save ' + money(savings);
    } else {
      verdictEl.className = 'ta-embed-verdict lose';
      verdictEl.textContent = 'Pay per visit: the plan costs ' + money(-savings) + ' more over ' + Math.round(years) + ' yrs';
    }
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.wheelAlignmentCost = { recalc: calc };
})();
