/*!
 * ToolAspect Student Loan Payoff Calculator Embed
 * Install: <div id="ta-student-loan-payoff-calculator"></div>
 *          <script src="https://toolaspect.com/embed/student-loan-payoff-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-student-loan-payoff-calculator';
  var BASE = 'https://toolaspect.com/student-loan-payoff-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'student-loan-payoff-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="student-loan-payoff-calculator"]')) {
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
    + '<div class="ta-embed-title">Student Loan Payoff Calculator</div>'
    + '<div class="ta-embed-subtitle">Federal daily simple interest + extra payments</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Balance ($)</label><input type="number" class="ta-bal" value="35000" min="100" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Rate (%)</label><input type="number" class="ta-rate" value="6.8" min="0" max="20" step="0.05"></div>'
    + '<div class="ta-embed-form-group"><label>Monthly payment ($)</label><input type="number" class="ta-pay" value="402.78" min="1" step="0.01"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Extra / month ($)</label><input type="number" class="ta-extra" value="0" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>One-time extra today ($)</label><input type="number" class="ta-once" value="0" min="0" step="100"></div>'
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

  function pmtOf(P, annualPct, months) {
    var r = annualPct / 100 / 12;
    if (r === 0) return P / months;
    return P * r / (1 - Math.pow(1 + r, -months));
  }

  function simulate(P, rate, payment, extraMo, oneTime) {
    var dr = rate / 100 / 365;
    var bal = P - (oneTime || 0);
    var totInt = 0, m = 0, y = 2026, mo = 9;
    var lastY = y, lastM = mo;
    while (bal > 0.005 && m < 600) {
      var cur = new Date(y, mo - 1, 15), nx = new Date(y, mo, 15);
      var days = Math.round((nx - cur) / 86400000);
      var int = bal * dr * days;
      totInt += int;
      var pay = payment + extraMo;
      if (pay <= int) return { never: true };
      if (pay >= bal + int) pay = bal + int;
      bal = bal + int - pay;
      m++; lastY = y; lastM = mo; mo++; if (mo > 12) { mo = 1; y++; }
    }
    return { months: m, totalInt: totInt, y: lastY, mo: lastM };
  }

  function calc() {
    var bal = val('.ta-bal');
    var rate = val('.ta-rate');
    var payment = val('.ta-pay');
    var extra = val('.ta-extra');
    var once = val('.ta-once');
    if (bal <= 0 || payment <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter balance, rate, and payment</div>';
      return;
    }
    var MN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var std = pmtOf(bal, rate, 120);
    var base = simulate(bal, rate, Math.round(std * 100) / 100, 0, 0);
    var plan = simulate(bal, rate, payment, extra, once);
    if (plan.never) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Payment doesn\'t cover monthly interest</div>';
      return;
    }
    var saved = Math.max(0, base.totalInt - plan.totalInt);
    var yrs = Math.floor(plan.months / 12), mos = plan.months % 12;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + MN[plan.mo - 1] + ' ' + plan.y + '</div>'
      + '<div class="ta-embed-sub">payoff date — ' + (yrs ? yrs + ' yr ' : '') + mos + ' mo of payments left</div>'
      + '<div class="ta-embed-sub"><strong>$' + Math.round(plan.totalInt).toLocaleString('en-US') + '</strong> total interest'
      + (saved > 0 ? ' (saves <strong>$' + Math.round(saved).toLocaleString('en-US') + '</strong> vs 10-yr standard)' : '') + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.studentLoanPayoffCalculator = { recalc: calc };
})();
