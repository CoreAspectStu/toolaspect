/*!
 * ToolAspect Student Loan 401(k) Match Calculator Embed
 * Install: <div id="ta-student-loan-401k-match-calculator"></div>
 *          <script src="https://toolaspect.com/embed/student-loan-401k-match-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-student-loan-401k-match-calculator';
  var BASE = 'https://toolaspect.com/student-loan-401k-match-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-line{color:var(--ta-text);font-size:.9rem;margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'student-loan-401k-match-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="student-loan-401k-match-calculator"]')) {
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
    + '<div class="ta-embed-title">Student Loan 401(k) Match Calculator</div>'
    + '<div class="ta-embed-subtitle">SECURE 2.0 &sect;110 &mdash; what your loan payments match</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Salary ($/yr)</label><input type="number" class="ta-salary" value="60000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Loan payment ($/mo)</label><input type="number" class="ta-pmt" value="300" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Match formula</label>'
    + '<select class="ta-formula">'
    + '<option value="tier">100% first 3% + 50% next 2%</option>'
    + '<option value="full4">100% up to 4%</option>'
    + '<option value="half6">50% up to 6%</option>'
    + '<option value="full6">Dollar-for-dollar to 6%</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Years</label><input type="number" class="ta-yrs" value="10" min="1" max="40" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Return (%/yr)</label><input type="number" class="ta-ret" value="7" min="0" max="15" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>&nbsp;</label></div>'
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

  function matchPct(payPct, f) {
    if (f === 'tier') return Math.min(payPct, 3) + 0.5 * Math.max(0, Math.min(payPct, 5) - 3);
    if (f === 'full4') return Math.min(payPct, 4);
    if (f === 'half6') return 0.5 * Math.min(payPct, 6);
    if (f === 'full6') return Math.min(payPct, 6);
    return 0;
  }

  function calc() {
    var salary = val('.ta-salary'), pmt = val('.ta-pmt');
    var f = root.querySelector('.ta-formula').value;
    var yrs = Math.max(1, val('.ta-yrs')), ret = val('.ta-ret');
    if (salary <= 0 || pmt <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter salary and loan payment</div>';
      return;
    }
    var payPct = pmt * 12 / salary * 100;
    var m = matchPct(payPct, f);
    var annual = salary * m / 100;
    var i = ret / 100 / 12, n = yrs * 12, per = annual / 12;
    var fv = i > 0 ? per * ((Math.pow(1 + i, n) - 1) / i) : per * n;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(annual) + '/yr</div>'
      + '<div class="ta-embed-sub">Payments = ' + payPct.toFixed(1) + '% of pay &rarr; match ' + m.toFixed(2) + '% of pay</div>'
      + '<div class="ta-embed-line">Employer money over ' + yrs + ' yrs: <strong>' + money(annual * yrs) + '</strong></div>'
      + '<div class="ta-embed-line">Projected value at ' + ret + '%: <strong>' + money(fv) + '</strong></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.studentLoan401kMatchCalculator = { recalc: calc };
})();
