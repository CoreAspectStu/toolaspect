/*!
 * ToolAspect Student Loan Repayment Plan Comparison Embed
 * Install: <div id="ta-student-loan-repayment-plan-comparison-calculator"></div>
 *          <script src="https://toolaspect.com/embed/student-loan-repayment-plan-comparison-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-student-loan-repayment-plan-comparison-calculator';
  var BASE = 'https://toolaspect.com/student-loan-repayment-plan-comparison-calculator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-table{width:100%;border-collapse:collapse;font-size:.88rem}'
    + '.ta-embed-table th,.ta-embed-table td{border:1px solid var(--ta-border);padding:8px 10px;text-align:left}'
    + '.ta-embed-table th{background:var(--ta-bg);font-size:.75rem;text-transform:uppercase;letter-spacing:.04em;color:var(--ta-muted)}'
    + '.ta-embed-table td.v{font-weight:700;white-space:nowrap}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'student-loan-repayment-plan-comparison-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="student-loan-repayment-plan-comparison-calculator"]')) {
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
    + '<div class="ta-embed-title">Student Loan Repayment Plan Comparison</div>'
    + '<div class="ta-embed-subtitle">Standard vs Extended vs Graduated vs RAP on your balance</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Balance ($)</label><input type="number" id="taslr-balance" value="35000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Rate (%)</label><input type="number" id="taslr-rate" value="6.52" min="0" step="0.01"></div>'
    + '<div class="ta-embed-form-group"><label>AGI for RAP ($)</label><input type="number" id="taslr-agi" value="60000" min="0" step="1000"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<table class="ta-embed-table">'
    + '<thead><tr><th>Plan</th><th>Payment</th><th>Total paid</th></tr></thead>'
    + '<tbody>'
    + '<tr><td>Standard 10-yr</td><td class="v" id="taslr-stdp">&mdash;</td><td class="v" id="taslr-stdt">&nbsp;</td></tr>'
    + '<tr><td>Graduated (starts at)</td><td class="v" id="taslr-grap">&mdash;</td><td class="v" id="taslr-grat">&nbsp;</td></tr>'
    + '<tr><td>Extended 25-yr</td><td class="v" id="taslr-extp">&mdash;</td><td class="v" id="taslr-extt">&nbsp;</td></tr>'
    + '<tr><td>RAP (income-based)</td><td class="v" id="taslr-rapp">&mdash;</td><td class="v" id="taslr-rapt">&nbsp;</td></tr>'
    + '</tbody>'
    + '</table>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#taslr-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  function pmt(P, rate, years) {
    var r = rate / 100 / 12, n = Math.round(years * 12);
    if (n <= 0 || P <= 0) return 0;
    if (r === 0) return P / n;
    return P * r / (1 - Math.pow(1 + r, -n));
  }
  function rapPayment(agi) {
    if (agi <= 0) return 0;
    if (agi <= 10000) return 10;
    var pct = agi > 100000 ? 10 : Math.ceil((agi - 10000) / 10000);
    return Math.max(10, agi * pct / 100 / 12);
  }
  function graduatedTotals(P, rate) {
    // start = max(50% of standard, monthly interest); uniform growth every 2 yrs over 5 blocks
    var r = rate / 100 / 12;
    var std = pmt(P, rate, 10);
    var first = Math.max(0.5 * std, P * r);
    var a24 = (1 - Math.pow(1 + r, -24)) / r;
    var d1 = Math.pow(1 + r, -48), d2 = Math.pow(1 + r, -96), d3 = Math.pow(1 + r, -144), d4 = Math.pow(1 + r, -192);
    var lo = 1.0001, hi = 8;
    for (var i = 0; i < 80; i++) {
      var m = (lo + hi) / 2;
      var pv = first * a24 * (1 + m * d1 + m * m * d2 + m * m * m * d3 + m * m * m * m * d4);
      if (pv < P) lo = m; else hi = m;
    }
    var last = first * Math.pow(lo, 4), total = 0;
    for (var k = 0; k < 5; k++) total += first * Math.pow(lo, k) * 24;
    return { first: first, last: last, total: total };
  }

  function calc() {
    var P = parseFloat(g('balance').value) || 0;
    var rate = parseFloat(g('rate').value) || 0;
    var agi = parseFloat(g('agi').value) || 0;
    if (P <= 0) return;
    var std = pmt(P, rate, 10);
    var ext = P > 30000 ? pmt(P, rate, 25) : 0;
    var gr = graduatedTotals(P, rate);
    g('stdp').textContent = money(std);
    g('stdt').textContent = money(std * 120);
    g('grap').textContent = money(gr.first);
    g('grat').textContent = 'ends near ' + money(gr.last) + ', total ' + money(gr.total);
    if (ext > 0) {
      g('extp').textContent = money(ext);
      g('extt').textContent = money(ext * 300);
    } else {
      g('extp').textContent = 'needs > $30k';
      g('extt').textContent = '—';
    }
    if (agi > 0) {
      g('rapp').textContent = money(rapPayment(agi));
      g('rapt').textContent = 'interest-subsidized';
    } else {
      g('rapp').textContent = '—';
      g('rapt').textContent = 'enter AGI';
    }
  }

  ['balance', 'rate', 'agi'].forEach(function (id) {
    g(id).addEventListener('input', calc);
  });
  calc();
})();
