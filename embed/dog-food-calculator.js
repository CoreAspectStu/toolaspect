/*!
 * ToolAspect Dog Food Calculator Embed
 * Install: <div id="ta-dog-food-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-food-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-food-calculator';
  var BASE = 'https://toolaspect.com/dog-food-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'dog-food-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-food-calculator"]')) {
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
    + '<div class="ta-embed-title">Dog Food Calculator</div>'
    + '<div class="ta-embed-subtitle">Daily calories and cups from RER x life-stage factor</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Weight</label><input type="number" class="ta-w" value="30" min="1" max="300" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Unit</label><select class="ta-unit"><option value="lb" selected>lb</option><option value="kg">kg</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Life stage</label><select class="ta-stage">'
    + '<option value="3.0">Puppy &lt;4 mo</option><option value="2.0">Puppy 4-12 mo</option>'
    + '<option value="1.8">Adult intact</option><option value="1.6" selected>Adult neutered</option>'
    + '<option value="1.7">Weight gain</option><option value="1.0">Weight loss</option><option value="2.0">Active/working</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>kcal per cup</label><input type="number" class="ta-kcal" value="375" min="100" max="900" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Treats (% of kcal)</label><input type="number" class="ta-treats" value="0" min="0" max="30" step="1"></div>'
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

  function calc() {
    var w = val('.ta-w');
    var unit = root.querySelector('.ta-unit').value;
    var factor = parseFloat(root.querySelector('.ta-stage').value) || 1.6;
    var kcalCup = val('.ta-kcal');
    var treatsPct = val('.ta-treats');
    var kg = unit === 'kg' ? w : w * 0.453592;
    if (kg <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your dog’s weight</div>';
      return;
    }
    var rer = 70 * Math.pow(kg, 0.75);
    var der = rer * factor;
    var treatKcal = der * treatsPct / 100;
    var cups = kcalCup > 0 ? (der - treatKcal) / kcalCup : 0;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + Math.round(der).toLocaleString('en-US') + ' kcal/day</div>'
      + '<div class="ta-embed-sub">RER ' + Math.round(rer) + ' × factor ' + factor.toFixed(1) + '</div>'
      + (kcalCup > 0
        ? '<div class="ta-embed-sub"><strong>' + cups.toFixed(2) + ' cups</strong> of food per day</div>'
          + (treatsPct > 0 ? '<div class="ta-embed-sub">' + Math.round(treatKcal) + ' kcal reserved for treats</div>' : '')
        : '');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogFoodCalculator = { recalc: calc };
})();
