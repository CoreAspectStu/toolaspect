/*!
 * ToolAspect Car Cost of Ownership Calculator Embed
 * Install: <div id="ta-car-cost-of-ownership-calculator"></div>
 *          <script src="https://toolaspect.com/embed/car-cost-of-ownership-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-car-cost-of-ownership-calculator';
  var BASE = 'https://toolaspect.com/car-cost-of-ownership-calculator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-row{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:14px}'
    + '.ta-embed-chip{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 12px;font-size:.8rem}'
    + '.ta-embed-chip b{display:block;font-size:.66rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'car-cost-of-ownership-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="car-cost-of-ownership-calculator"]')) {
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
    + '<div class="ta-embed-title">Cost of Ownership Calculator</div>'
    + '<div class="ta-embed-subtitle">The true cost of your car over 5 years</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Purchase price ($)</label><input type="number" class="ta-price" value="35000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Resale after 5 yrs (% of price)</label><input type="number" class="ta-resale" value="55" min="0" max="100"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Loan APR (%) — 0 if cash</label><input type="number" class="ta-apr" value="7" min="0" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Loan amount ($)</label><input type="number" class="ta-loan" value="30000" min="0" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Miles per year</label><input type="number" class="ta-miles" value="12000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>MPG</label><input type="number" class="ta-mpg" value="28" min="1" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Gas price ($/gal)</label><input type="number" class="ta-gas" value="3.50" min="0" step="0.05"></div>'
    + '<div class="ta-embed-form-group"><label>Insurance + maint + reg ($/yr)</label><input type="number" class="ta-other" value="3030" min="0" step="50"></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var usd = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };
  function pmt(P, pct) { // 60 months fixed
    var r = pct / 100 / 12, n = 60;
    if (P <= 0) return 0;
    if (r === 0) return P / n;
    return P * r / (1 - Math.pow(1 + r, -n));
  }

  function calc() {
    var price = parseFloat(root.querySelector('.ta-price').value) || 0;
    var resalePct = parseFloat(root.querySelector('.ta-resale').value) || 0;
    var apr = parseFloat(root.querySelector('.ta-apr').value) || 0;
    var loan = parseFloat(root.querySelector('.ta-loan').value) || 0;
    var miles = parseFloat(root.querySelector('.ta-miles').value) || 0;
    var mpg = Math.max(1, parseFloat(root.querySelector('.ta-mpg').value) || 1);
    var gas = parseFloat(root.querySelector('.ta-gas').value) || 0;
    var other = parseFloat(root.querySelector('.ta-other').value) || 0;
    var dep = price - price * resalePct / 100;
    var interest = pmt(loan, apr) * 60 - loan;
    if (interest < 0) interest = 0;
    var fuel = miles / mpg * gas * 5;
    var total = dep + interest + fuel + other * 5;
    var mi = total / (miles * 5);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(total) + '</div>'
      + '<div class="ta-embed-sub">5-year true cost — ' + usd(total / 60) + '/mo, $' + (isNaN(mi) ? 0 : mi.toFixed(2)) + '/mi</div>'
      + '<div class="ta-embed-row">'
      + '<div class="ta-embed-chip"><b>Depreciation</b>' + usd(dep) + '</div>'
      + '<div class="ta-embed-chip"><b>Loan interest</b>' + usd(interest) + '</div>'
      + '<div class="ta-embed-chip"><b>Fuel</b>' + usd(fuel) + '</div>'
      + '<div class="ta-embed-chip"><b>Insurance+care</b>' + usd(other * 5) + '</div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.carCostOfOwnershipCalculator = { recalc: calc };
})();
