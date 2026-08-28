/*!
 * ToolAspect Upside Down Car Loan Calculator Embed
 * Install: <div id="ta-upside-down-car-loan-calculator"></div>
 *          <script src="https://toolaspect.com/embed/upside-down-car-loan-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-upside-down-car-loan-calculator';
  var BASE = 'https://toolaspect.com/upside-down-car-loan-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'upside-down-car-loan-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="upside-down-car-loan-calculator"]')) {
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
    + '<div class="ta-embed-title">Upside Down Car Loan Calculator</div>'
    + '<div class="ta-embed-subtitle">Your negative equity and what rolling it into a new loan costs</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Loan payoff ($)</label><input type="number" class="ta-payoff" value="22000" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Car value ($)</label><input type="number" class="ta-value" value="15000" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>New car price ($)</label><input type="number" class="ta-price" value="28000" min="0" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Cash down ($)</label><input type="number" class="ta-down" value="2000" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>APR (%)</label><input type="number" class="ta-apr" value="9.2" min="0" max="40" step="0.1"></div>'
    + '<div class="ta-embed-form-group"><label>Term</label><select class="ta-term">'
    + '<option value="48">48 mo</option><option value="60">60 mo</option>'
    + '<option value="72" selected>72 mo</option><option value="84">84 mo</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function pay(P, apr, mo) {
    var r = apr / 100 / 12;
    if (P <= 0 || mo <= 0) return 0;
    if (r === 0) return P / mo;
    return P * r / (1 - Math.pow(1 + r, -mo));
  }

  function calc() {
    var payoff = num('.ta-payoff'), value = num('.ta-value'), price = num('.ta-price');
    var down = num('.ta-down'), apr = num('.ta-apr');
    var term = parseInt(root.querySelector('.ta-term').value, 10) || 72;
    var equity = value - payoff;
    var roll = Math.max(0, -equity);
    var loan = Math.max(0, price + roll - down);
    var p = pay(loan, apr, term);
    var ltv = price > 0 ? loan / price * 100 : 0;

    if (payoff <= 0 && value <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your payoff and the car’s value</div>';
      return;
    }
    var head = equity < 0
      ? '<div class="ta-embed-big">' + money(-equity) + '</div><div class="ta-embed-sub">negative equity (owe ' + money(payoff) + ' on a ' + money(value) + ' car)</div>'
      : '<div class="ta-embed-big">' + money(equity) + '</div><div class="ta-embed-sub">positive equity — no gap to roll</div>';
    if (price <= 0) {
      resultEl.innerHTML = head;
      return;
    }
    resultEl.innerHTML = head
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">New loan amount</div><div class="rv">' + money(loan) + '</div></div>'
      + '<div><div class="rl">Monthly payment</div><div class="rv">' + money(p) + '</div></div>'
      + '<div><div class="rl">LTV on new car</div><div class="rv">' + ltv.toFixed(1) + '%</div></div>'
      + '<div><div class="rl">Total interest</div><div class="rv">' + money(p * term - loan) + '</div></div>'
      + '</div>'
      + '<div class="ta-embed-sub" style="margin-top:10px">' + (ltv > 125
        ? 'Above 125% LTV most lenders decline — consider a larger down payment.'
        : 'Every dollar rolled is paying interest on the old car.') + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.upsideDownCarLoanCalculator = { recalc: calc };
})();
