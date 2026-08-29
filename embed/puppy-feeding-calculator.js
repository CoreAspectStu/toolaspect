/*!
 * ToolAspect Puppy Feeding Calculator Embed
 * Install: <div id="ta-puppy-feeding-calculator"></div>
 *          <script src="https://toolaspect.com/embed/puppy-feeding-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-puppy-feeding-calculator';
  var BASE = 'https://toolaspect.com/puppy-feeding-calculator/';

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
    + '.ta-embed-range{display:flex;justify-content:center;gap:26px;margin-top:12px;flex-wrap:wrap}'
    + '.ta-embed-range div{font-size:.82rem;color:var(--ta-muted)}'
    + '.ta-embed-range strong{display:block;font-size:1.05rem;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}.ta-embed-range{gap:14px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'puppy-feeding-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="puppy-feeding-calculator"]')) {
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
    + '<div class="ta-embed-title">Puppy Feeding Calculator</div>'
    + '<div class="ta-embed-subtitle">RER × age band → daily kcal, meals, and cups</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Weight (lb)</label><input type="number" class="ta-wt" value="25" min="1" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Age (months)</label><input type="number" class="ta-age" value="4" min="2" max="24" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Adult weight (lb)</label><input type="number" class="ta-adult" value="65" min="3" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group" style="margin-bottom:0"><label>kcal per cup (check the bag)</label><input type="number" class="ta-kcal" value="400" min="200" step="10"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function rer(lb) { return 70 * Math.pow(lb / 2.20462, 0.75); }
  function band(age, adultWt) {
    if (age < 4) return { m: 3.0, label: 'under 4 mo ×3.0' };
    if (age < 12) return { m: 2.0, label: '4–12 mo ×2.0' };
    var mature = adultWt > 90 ? 24 : (adultWt > 50 ? 18 : 12);
    if (age < mature) return { m: 1.6, label: 'still growing ×1.6' };
    return { m: 1.6, label: 'adult maintenance ×1.6' };
  }
  function meals(age) { return age < 3 ? 4 : (age < 6 ? 3 : 2); }

  function calc() {
    var wt = val('.ta-wt'), age = val('.ta-age'), adultWt = val('.ta-adult'), kc = val('.ta-kcal');
    if (wt < 1 || age < 2) {
      root.querySelector('.ta-embed-result').innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter weight and age</div>';
      return;
    }
    var b = band(age, adultWt);
    var daily = rer(wt) * b.m;
    var m = meals(age);
    root.querySelector('.ta-embed-result').innerHTML =
      '<div class="ta-embed-big">' + Math.round(daily).toLocaleString('en-US') + ' kcal</div>'
      + '<div class="ta-embed-sub">RER ' + Math.round(rer(wt)) + ' × ' + b.m + ' (' + b.label + '), ' + m + ' meals a day</div>'
      + '<div class="ta-embed-range">'
      + '<div>Per meal<strong>' + Math.round(daily / m) + ' kcal</strong></div>'
      + (kc > 0 ? '<div>Cups/day<strong>' + (daily / kc).toFixed(2).replace(/\.?0+$/, '') + '</strong></div>' : '')
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.puppyFeedingCalculator = { recalc: calc };
})();
