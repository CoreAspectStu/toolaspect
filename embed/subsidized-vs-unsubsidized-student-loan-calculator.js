/*!
 * ToolAspect Subsidized vs Unsubsidized Student Loan Calculator Embed
 * Install: <div id="ta-subsidized-vs-unsubsidized-student-loan-calculator"></div>
 *          <script src="https://toolaspect.com/embed/subsidized-vs-unsubsidized-student-loan-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-subsidized-vs-unsubsidized-student-loan-calculator';
  var BASE = 'https://toolaspect.com/subsidized-vs-unsubsidized-student-loan-calculator/';

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
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
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
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'subsidized-vs-unsubsidized-student-loan-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="subsidized-vs-unsubsidized-student-loan-calculator"]')) {
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
    + '<div class="ta-embed-title">Subsidized vs Unsubsidized Loan Calculator</div>'
    + '<div class="ta-embed-subtitle">What in-school interest costs you by graduation</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Amount per year ($)</label><input type="number" id="tasvu-annual" value="5500" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Years in school</label><input type="number" id="tasvu-yrs" value="4" min="1" max="8" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Rate (%)</label><input type="number" id="tasvu-rate" value="6.52" min="0" step="0.01"></div>'
    + '<div class="ta-embed-form-group"><label>Repayment term (yrs)</label><input type="number" id="tasvu-term" value="10" min="1" max="25" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-compare">'
    + '<div class="ta-embed-side"><div class="side-label">SUBSIDIZED / MO</div><div class="side-pay" id="tasvu-subp">&mdash;</div><div class="side-sub" id="tasvu-subb">&nbsp;</div></div>'
    + '<div class="ta-embed-side"><div class="side-label">UNSUBSIDIZED / MO</div><div class="side-pay" id="tasvu-unsubp">&mdash;</div><div class="side-sub" id="tasvu-unsubb">&nbsp;</div></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tasvu-gap">&mdash;</div>'
    + '<div class="ta-embed-sub" id="tasvu-gapsub">lifetime cost of skipping the subsidy</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tasvu-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  function pmt(P, rate, years) {
    var r = rate / 100 / 12, n = Math.round(years * 12);
    if (n <= 0 || P <= 0) return 0;
    if (r === 0) return P / n;
    return P * r / (1 - Math.pow(1 + r, -n));
  }

  function calc() {
    var annual = parseFloat(g('annual').value) || 0;
    var yrs = Math.max(1, Math.round(parseFloat(g('yrs').value) || 1));
    var rate = parseFloat(g('rate').value) || 0;
    var term = parseFloat(g('term').value) || 10;
    if (annual <= 0) return;
    var r = rate / 100 / 12;
    var principal = 0, acc = 0;
    for (var m = 0; m < yrs * 12 + 6; m++) {
      if (m % 12 === 0 && m / 12 < yrs) principal += annual;
      acc += principal * r;
    }
    var borrowed = annual * yrs;
    var unsubBal = principal + acc;
    var subP = pmt(borrowed, rate, term);
    var unsubP = pmt(unsubBal, rate, term);
    g('subp').textContent = money(subP);
    g('subb').textContent = 'balance stays ' + money(borrowed);
    g('unsubp').textContent = money(unsubP);
    g('unsubb').textContent = money(unsubBal) + ' after capitalization';
    var n = Math.round(term * 12);
    g('gap').textContent = money((unsubP - subP) * n);
    g('gapsub').textContent = money(acc) + ' capitalizes; ' + '$' + (unsubP - subP).toFixed(2) + '/mo more';
  }

  ['annual', 'yrs', 'rate', 'term'].forEach(function (id) {
    g(id).addEventListener('input', calc);
  });
  calc();
})();
