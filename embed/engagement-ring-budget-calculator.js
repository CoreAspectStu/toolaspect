/*!
 * ToolAspect Engagement Ring Budget Calculator Embed
 * Install: <div id="ta-engagement-ring-budget-calculator"></div>
 *          <script src="https://toolaspect.com/embed/engagement-ring-budget-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-engagement-ring-budget-calculator';
  var BASE = 'https://toolaspect.com/engagement-ring-budget-calculator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-row{display:flex;justify-content:space-between;font-size:.85rem;padding:6px 0;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-row:last-child{border-bottom:none}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'engagement-ring-budget-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="engagement-ring-budget-calculator"]')) {
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
    + '<div class="ta-embed-title">Engagement Ring Budget Calculator</div>'
    + '<div class="ta-embed-subtitle">The salary rule in real dollars, vs. what couples actually spend</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Annual salary ($)</label><input type="number" class="ta-salary" value="65000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Salary rule</label><select class="ta-months">'
    + '<option value="1">1 month</option><option value="2" selected>2 months (De Beers rule)</option><option value="3">3 months</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-card ta-details"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var detailsEl = root.querySelector('.ta-details');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function usd(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function calc() {
    var salary = val('.ta-salary');
    var months = val('.ta-months') || 2;
    if (salary <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your annual salary</div>';
      detailsEl.innerHTML = '';
      return;
    }
    var budget = salary * months / 12;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(budget) + '</div>'
      + '<div class="ta-embed-sub">' + months + ' month' + (months > 1 ? 's' : '') + ' of a ' + usd(salary) + ' salary · '
      + (months / 12 * 100).toFixed(1) + '% of annual income</div>'
      + '<div class="ta-embed-sub">Range: <strong>' + usd(budget * 0.8) + ' – ' + usd(budget * 1.2) + '</strong> (±20%)</div>';
    detailsEl.innerHTML =
      '<div class="ta-embed-row"><span>Lab-grown equivalent</span><strong>' + usd(budget * 0.25) + '</strong></div>'
      + '<div class="ta-embed-row"><span>vs. $4,600 US average</span><strong>' + (budget / 4600).toFixed(1) + '× the average</strong></div>'
      + '<div class="ta-embed-row"><span>Save monthly (12-mo plan)</span><strong>' + usd(budget / 12) + '</strong></div>'
      + '<div class="ta-embed-row"><span>Insurance (1–2%/yr)</span><strong>' + usd(budget * 0.01) + ' – ' + usd(budget * 0.02) + '</strong></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.engagementRingBudgetCalculator = { recalc: calc };
})();
