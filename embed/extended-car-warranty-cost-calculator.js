/*!
 * ToolAspect Extended Car Warranty Cost Calculator Embed
 * Install: <div id="ta-extended-car-warranty-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/extended-car-warranty-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-extended-car-warranty-cost-calculator';
  var BASE = 'https://toolaspect.com/extended-car-warranty-cost-calculator/';

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
    + '.ta-embed-compare{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-cell .k{font-size:.72rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.03em}'
    + '.ta-embed-cell .v{font-size:1.05rem;font-weight:700;margin-top:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}.ta-embed-compare{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'extended-car-warranty-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="extended-car-warranty-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Extended Car Warranty Cost</div>'
    + '<div class="ta-embed-subtitle">Model price by vehicle, coverage tier, and term</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Vehicle value ($)</label><input type="number" class="ta-value" value="28000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Age (years)</label><input type="number" class="ta-age" value="4" min="0" max="20" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Mileage</label><input type="number" class="ta-miles" value="68000" min="0" step="1000"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Vehicle class</label><select class="ta-vclass"><option value="0.8">Compact</option><option value="1">Sedan</option><option value="1.15" selected>SUV / truck</option><option value="1.4">Luxury / EV</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Coverage tier</label><select class="ta-tier"><option value="0.010">Powertrain</option><option value="0.017">Named component</option><option value="0.022" selected>Bumper-to-bumper</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Term (years)</label><select class="ta-term"><option value="3">3</option><option value="4" selected>4</option><option value="5">5</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Deductible</label><select class="ta-ded"><option value="100" selected>$100 per visit</option><option value="0">$0 (+10%)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Miles per year</label><input type="number" class="ta-annual" value="12000" min="1000" step="500"></div>'
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
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function ageMult(a) { return a <= 2 ? 1.0 : a <= 4 ? 1.15 : a <= 6 ? 1.35 : a <= 8 ? 1.60 : a <= 10 ? 1.90 : 2.30; }
  function mileMult(m) { return m < 40000 ? 1.0 : m < 60000 ? 1.10 : m < 80000 ? 1.25 : m < 100000 ? 1.45 : m < 120000 ? 1.70 : 2.00; }

  function calc() {
    var value = val('.ta-value'), age = val('.ta-age'), miles = val('.ta-miles');
    var vclass = val('.ta-vclass'), tier = val('.ta-tier');
    var term = parseInt((root.querySelector('.ta-term') || {}).value, 10) || 4;
    var ded = (root.querySelector('.ta-ded') || {}).value || '100';
    var annual = val('.ta-annual') || 12000;
    if (value <= 0 || term <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your vehicle value</div>';
      return;
    }
    var perYear = value * tier * ageMult(age) * mileMult(miles) * vclass * (ded === '0' ? 1.10 : 1);
    var total = perYear * term;
    var termMiles = term * annual;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(total) + '</div>'
      + '<div class="ta-embed-sub">' + money(perYear) + '/yr for ' + term + ' years · ' + money(total / (term * 12)) + '/mo</div>'
      + '<div class="ta-embed-compare">'
      + '<div class="ta-embed-cell"><div class="k">Cost per mile</div><div class="v">$' + (total / termMiles).toFixed(3) + '</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Break-even repairs</div><div class="v">' + money(total) + (ded === '100' ? ' + deductibles' : '') + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.extendedCarWarrantyCost = { recalc: calc };
})();
