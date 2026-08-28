/*!
 * ToolAspect Lease vs Buy Car Calculator Embed
 * Install: <div id="ta-lease-vs-buy-car-calculator"></div>
 *          <script src="https://toolaspect.com/embed/lease-vs-buy-car-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-lease-vs-buy-car-calculator';
  var BASE = 'https://toolaspect.com/lease-vs-buy-car-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'lease-vs-buy-car-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="lease-vs-buy-car-calculator"]')) {
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
    + '<div class="ta-embed-title">Lease vs Buy Car Calculator</div>'
    + '<div class="ta-embed-subtitle">Both paths to the same finish line, equity included</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>MSRP ($)</label><input type="number" class="ta-msrp" value="35000" min="1000" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Negotiated ($)</label><input type="number" class="ta-price" value="33500" min="1000" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Down ($)</label><input type="number" class="ta-down" value="2000" min="0" step="250"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Term (mo)</label><select class="ta-term"><option>24</option><option selected>36</option><option>48</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Residual (%)</label><input type="number" class="ta-res" value="57" min="30" max="85" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Money factor</label><input type="number" class="ta-mf" value="0.0025" min="0.0001" max="0.01" step="0.0001"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Loan APR (%)</label><input type="number" class="ta-apr" value="7" min="0" max="30" step="0.1"></div>'
    + '<div class="ta-embed-form-group"><label>Your mi/yr</label><input type="number" class="ta-miles" value="12000" min="2000" max="40000" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Allowance mi/yr</label><select class="ta-allow"><option>10000</option><option selected>12000</option><option>15000</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Sales tax (%)</label><input type="number" class="ta-tax" value="6" min="0" max="12" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Overage $/mi</label><input type="number" class="ta-over" value="0.25" min="0" max="1" step="0.05"></div>'
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

  function pmt(P, apr, n) {
    var r = apr / 100 / 12;
    if (n <= 0 || P <= 0) return 0;
    if (r === 0) return P / n;
    return P * r / (1 - Math.pow(1 + r, -n));
  }

  function money(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calc() {
    var msrp = val('.ta-msrp'), price = val('.ta-price'), down = val('.ta-down');
    var term = parseInt(root.querySelector('.ta-term').value, 10) || 36;
    var resPct = val('.ta-res'), mf = val('.ta-mf');
    var apr = val('.ta-apr'), myMiles = val('.ta-miles');
    var allow = parseInt(root.querySelector('.ta-allow').value, 10) || 12000;
    var tax = val('.ta-tax'), over = val('.ta-over');
    if (msrp <= 0 || price <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter the deal numbers</div>';
      return;
    }
    var residual = msrp * resPct / 100;
    var cap = price - down;
    var leaseMo = ((cap - residual) / term + (cap + residual) * mf) * (1 + tax / 100);
    var overMiles = Math.max(0, (myMiles - allow) * term / 12);
    var leaseTot = down + leaseMo * term + overMiles * over;
    var loan = price * (1 + tax / 100) - down;
    var buyMo = pmt(loan, apr, 60);
    var r = apr / 100 / 12;
    var bal = loan * Math.pow(1 + r, term) - buyMo * ((Math.pow(1 + r, term) - 1) / r);
    var equity = residual - bal;
    var buyTot = down + buyMo * term - equity;
    var winner = leaseTot < buyTot ? 'Lease' : 'Buy';
    var diff = Math.abs(buyTot - leaseTot);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + winner + ' wins by ' + money(diff) + '</div>'
      + '<div class="ta-embed-sub">over ' + term + ' months at ' + myMiles.toLocaleString('en-US') + ' mi/yr</div>'
      + '<div class="ta-embed-sub">Lease: <strong>' + money(leaseMo) + '/mo</strong>, total ' + money(leaseTot) + (overMiles > 0 ? ' (incl ' + money(overMiles * over) + ' overage)' : '') + '</div>'
      + '<div class="ta-embed-sub">Buy: <strong>' + money(buyMo) + '/mo</strong>, net ' + money(buyTot) + ' after ' + money(equity) + ' equity</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.leaseVsBuyCarCalculator = { recalc: calc };
})();
