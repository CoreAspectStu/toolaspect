/*!
 * ToolAspect Auto Refinance Calculator Embed
 * Install: <div id="ta-auto-refinance-calculator"></div>
 *          <script src="https://toolaspect.com/embed/auto-refinance-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-auto-refinance-calculator';
  var BASE = 'https://toolaspect.com/auto-refinance-calculator/';

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
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
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
  styleEl.setAttribute('data-ta-embed', 'auto-refinance-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="auto-refinance-calculator"]')) {
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
    + '<div class="ta-embed-title">Auto Refinance Calculator</div>'
    + '<div class="ta-embed-subtitle">Current APR vs a new offer, fees included</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Balance ($)</label><input type="number" class="ta-bal" value="18000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Current APR (%)</label><input type="number" class="ta-cur" value="9.9" min="0" step="0.1"></div>'
    + '<div class="ta-embed-form-group"><label>Months left</label><input type="number" class="ta-rem" value="36" min="1" max="120" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>New APR (%)</label><input type="number" class="ta-new" value="5.9" min="0" step="0.1"></div>'
    + '<div class="ta-embed-form-group"><label>New term (mo)</label><input type="number" class="ta-newn" value="36" min="1" max="120" step="6"></div>'
    + '<div class="ta-embed-form-group"><label>Fees ($)</label><input type="number" class="ta-fee" value="300" min="0" step="25"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function pmt(P, annualPct, n) {
    var r = annualPct / 100 / 12;
    if (n <= 0 || P <= 0) return 0;
    if (r === 0) return P / n;
    return P * r / (1 - Math.pow(1 + r, -n));
  }
  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function usd(n) { return '$' + Math.round(Math.abs(n)).toLocaleString('en-US'); }

  function calc() {
    var bal = val('.ta-bal'), curApr = val('.ta-cur'), rem = val('.ta-rem');
    var newApr = val('.ta-new'), newN = val('.ta-newn'), fee = val('.ta-fee');
    if (bal <= 0 || rem <= 0 || newN <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your loan details</div>';
      return;
    }
    var curPay = pmt(bal, curApr, rem), newPay = pmt(bal, newApr, newN);
    var monthly = curPay - newPay;
    var lifetime = (curPay * rem - bal) - (newPay * newN - bal + fee);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + (monthly >= 0 ? '+$' : '-$') + Math.abs(monthly).toFixed(2) + '/mo</div>'
      + '<div class="ta-embed-sub">' + curPay.toFixed(2) + ' → ' + newPay.toFixed(2) + ' payment</div>'
      + '<div class="ta-embed-sub">' + (lifetime >= 0 ? usd(lifetime) + ' saved after fees' : usd(lifetime) + ' more than staying put') + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.autoRefinanceCalculator = { recalc: calc };
})();
