/*!
 * ToolAspect Federal vs Private Student Loan Calculator Embed
 * Install: <div id="ta-federal-vs-private-student-loan-calculator"></div>
 *          <script src="https://toolaspect.com/embed/federal-vs-private-student-loan-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-federal-vs-private-student-loan-calculator';
  var BASE = 'https://toolaspect.com/federal-vs-private-student-loan-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#4f46e5;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#818cf8}'
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
    + '.ta-embed-compare{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px}'
    + '.ta-embed-side{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:10px;padding:12px;text-align:center}'
    + '.ta-embed-side .side-label{font-size:.75rem;color:var(--ta-muted);font-weight:600;letter-spacing:.03em}'
    + '.ta-embed-side .side-pay{font-size:1.45rem;font-weight:700;color:var(--ta-accent);margin-top:2px}'
    + '.ta-embed-side .side-sub{font-size:.78rem;color:var(--ta-muted);margin-top:2px}'
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-compare{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'federal-vs-private-student-loan-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="federal-vs-private-student-loan-calculator"]')) {
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
    if (window.console) console.warn('ToolAspect embed: no container #' + TARGET_ID + ' found.');
    return;
  }

  var html = ''
    + '<div class="ta-embed-root">'
    + '<div class="ta-embed-title">Federal vs Private Student Loan Calculator</div>'
    + '<div class="ta-embed-subtitle">Monthly payment and lifetime cost, origination fees included</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Cash needed ($)</label><input type="number" id="tafvp-amount" value="20000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Federal rate (%)</label><input type="number" id="tafvp-fedrate" value="6.52" min="0" step="0.01"></div>'
    + '<div class="ta-embed-form-group"><label>Private APR (%)</label><input type="number" id="tafvp-privrate" value="9.1" min="0" step="0.01"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Federal fee (%)</label><input type="number" id="tafvp-fedfee" value="1.057" min="0" step="0.001"></div>'
    + '<div class="ta-embed-form-group"><label>Term (years)</label><input type="number" id="tafvp-term" value="10" min="1" max="30" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-compare">'
    + '<div class="ta-embed-side"><div class="side-label">FEDERAL / MO</div><div class="side-pay" id="tafvp-fedpay">&mdash;</div><div class="side-sub" id="tafvp-fedtot">&nbsp;</div></div>'
    + '<div class="ta-embed-side"><div class="side-label">PRIVATE / MO</div><div class="side-pay" id="tafvp-privpay">&mdash;</div><div class="side-sub" id="tafvp-privtot">&nbsp;</div></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tafvp-diff">&mdash;</div>'
    + '<div class="ta-embed-sub" id="tafvp-diffsub">lifetime difference</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tafvp-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  function pmt(P, rate, years) {
    var r = rate / 100 / 12, n = Math.round(years * 12);
    if (n <= 0 || P <= 0) return 0;
    if (r === 0) return P / n;
    return P * r / (1 - Math.pow(1 + r, -n));
  }

  function calc() {
    var amount = parseFloat(g('amount').value) || 0;
    var fedRate = parseFloat(g('fedrate').value) || 0;
    var privRate = parseFloat(g('privrate').value) || 0;
    var fedFee = parseFloat(g('fedfee').value) || 0;
    var term = parseFloat(g('term').value) || 0;
    if (amount <= 0 || term <= 0) { g('diff').textContent = '—'; return; }
    var fedP = fedFee < 100 ? amount / (1 - fedFee / 100) : amount;
    var fedPay = pmt(fedP, fedRate, term);
    var privPay = pmt(amount, privRate, term);
    var n = Math.round(term * 12);
    g('fedpay').textContent = money(fedPay);
    g('fedtot').textContent = money(fedPay * n) + ' total repaid';
    g('privpay').textContent = money(privPay);
    g('privtot').textContent = money(privPay * n) + ' total repaid';
    var diff = privPay * n - fedPay * n;
    g('diff').textContent = (diff >= 0 ? money(diff) : '-' + money(diff).slice(1));
    g('diffsub').textContent = Math.abs(diff) < 1 ? 'dead even at these rates' : (diff > 0 ? 'private costs more over ' + term + ' yrs' : 'federal costs more over ' + term + ' yrs');
  }

  ['amount', 'fedrate', 'privrate', 'fedfee', 'term'].forEach(function (id) {
    g(id).addEventListener('input', calc);
  });
  calc();
})();
