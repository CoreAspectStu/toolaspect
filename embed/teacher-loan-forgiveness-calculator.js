/*!
 * ToolAspect Teacher Loan Forgiveness Calculator Embed
 * Install: <div id="ta-teacher-loan-forgiveness-calculator"></div>
 *          <script src="https://toolaspect.com/embed/teacher-loan-forgiveness-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-teacher-loan-forgiveness-calculator';
  var BASE = 'https://toolaspect.com/teacher-loan-forgiveness-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-line{display:flex;justify-content:space-between;font-size:.88rem;padding:6px 0;border-bottom:1px solid var(--ta-border)}'
    + '.ta-embed-line:last-child{border-bottom:none}'
    + '.ta-embed-line .k{color:var(--ta-muted)}'
    + '.ta-embed-line .v{font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'teacher-loan-forgiveness-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="teacher-loan-forgiveness-calculator"]')) {
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
    + '<div class="ta-embed-title">Teacher Loan Forgiveness Calculator</div>'
    + '<div class="ta-embed-subtitle">The $5,000 and $17,500 tiers on your balance</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Eligible balance ($)</label><input type="number" id="tatlf-balance" value="27000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Rate (%)</label><input type="number" id="tatlf-rate" value="6.52" min="0" step="0.01"></div>'
    + '<div class="ta-embed-form-group"><label>Category</label><select id="tatlf-tier"><option value="17500">Math/sci/spec ed — $17,500</option><option value="5000">Other — $5,000</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tatlf-award">&mdash;</div>'
    + '<div class="ta-embed-sub" id="tatlf-awardsub">estimated forgiveness after 5 years</div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-line"><span class="k">10-yr standard payment</span><span class="v" id="tatlf-pmt">&mdash;</span></div>'
    + '<div class="ta-embed-line"><span class="k">Balance after 5 yrs of payments</span><span class="v" id="tatlf-bal5">&mdash;</span></div>'
    + '<div class="ta-embed-line"><span class="k">Still owed after the award</span><span class="v" id="tatlf-left">&mdash;</span></div>'
    + '<div class="ta-embed-line"><span class="k">Total out-of-pocket (TLF path)</span><span class="v" id="tatlf-oop">&mdash;</span></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tatlf-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  function pmt(P, rate, years) {
    var r = rate / 100 / 12, n = Math.round(years * 12);
    if (n <= 0 || P <= 0) return 0;
    if (r === 0) return P / n;
    return P * r / (1 - Math.pow(1 + r, -n));
  }
  function balAfter(P, rate, pay, months) {
    var r = rate / 100 / 12, bal = P;
    for (var m = 0; m < months; m++) bal = bal * (1 + r) - pay;
    return bal;
  }

  function calc() {
    var P = parseFloat(g('balance').value) || 0;
    var rate = parseFloat(g('rate').value) || 0;
    var award = parseFloat(g('tier').value) || 5000;
    if (P <= 0) return;
    var pay = pmt(P, rate, 10);
    var bal60 = balAfter(P, rate, pay, 60);
    var forgiven = Math.min(award, Math.max(0, bal60));
    var left = Math.max(0, bal60 - forgiven);
    g('award').textContent = money(forgiven);
    g('awardsub').textContent = forgiven >= bal60 ? 'covers your entire remaining balance' : 'tier cap ' + money(award) + '; balance remaining ' + money(bal60);
    g('pmt').textContent = money(pay) + '/mo';
    g('bal5').textContent = money(bal60);
    g('left').textContent = money(left);
    g('oop').textContent = money(pay * 60 + left);
  }

  ['balance', 'rate'].forEach(function (id) {
    g(id).addEventListener('input', calc);
  });
  g('tier').addEventListener('change', calc);
  calc();
})();
