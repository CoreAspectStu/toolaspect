/*!
 * ToolAspect Student Loan Payoff vs Invest Calculator Embed
 * Install: <div id="ta-student-loan-payoff-vs-invest-calculator"></div>
 *          <script src="https://toolaspect.com/embed/student-loan-payoff-vs-invest-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-student-loan-payoff-vs-invest-calculator';
  var BASE = 'https://toolaspect.com/student-loan-payoff-vs-invest-calculator/';

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
    + '.ta-embed-big{font-size:1.7rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-line{color:var(--ta-text);font-size:.9rem;margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'student-loan-payoff-vs-invest-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="student-loan-payoff-vs-invest-calculator"]')) {
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
    + '<div class="ta-embed-title">Pay Off Student Loans or Invest?</div>'
    + '<div class="ta-embed-subtitle">Guaranteed interest saved vs expected returns</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Balance ($)</label><input type="number" class="ta-bal" value="30000" min="1" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>APR (%)</label><input type="number" class="ta-apr" value="6.52" min="0" max="30" step="0.01"></div>'
    + '<div class="ta-embed-form-group"><label>Minimum ($/mo)</label><input type="number" class="ta-min" value="340.95" min="1" step="0.05"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Extra ($/mo)</label><input type="number" class="ta-extra" value="250" min="0" step="25"></div>'
    + '<div class="ta-embed-form-group"><label>Expected return (%/yr)</label><input type="number" class="ta-mkt" value="7" min="0" max="20" step="0.5"></div>'
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

  function simulate(bal, apr, min, extra, mkt) {
    var r = apr / 100, m = mkt / 100 / 12;
    var H = 0, b = bal;
    while (b > 0.01 && H < 600) { H++; b -= (min - b * r / 12); }
    if (H >= 600) return null;
    var bA = bal, t = 0, intA = 0;
    while (bA > 0.01 && t < 600) {
      t++;
      var i = bA * r / 12;
      intA += i;
      var p = Math.min(min + extra, bA + i);
      bA = bA + i - p;
    }
    var invA = 0;
    for (var k = 0; k < H - t; k++) invA = (invA + min + extra) * (1 + m);
    var invB = 0, intB = 0, bB = bal;
    for (var k2 = 0; k2 < H; k2++) {
      invB = (invB + extra) * (1 + m);
      var i2 = bB * r / 12;
      intB += i2;
      bB = bB + i2 - min;
    }
    return { H: H, t1: t, intA: intA, intB: intB, invA: invA, invB: invB };
  }

  function calc() {
    var bal = val('.ta-bal'), apr = val('.ta-apr'), min = val('.ta-min');
    var extra = val('.ta-extra'), mkt = val('.ta-mkt');
    if (bal <= 0 || min <= 0 || min <= bal * apr / 100 / 12) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Minimum must exceed monthly interest</div>';
      return;
    }
    var s = simulate(bal, apr, min, extra, mkt);
    if (!s) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Horizon exceeds 50 years</div>';
      return;
    }
    var diff = s.invA - s.invB;
    var lo = 0, hi = 30;
    for (var i = 0; i < 48; i++) {
      var mid = (lo + hi) / 2;
      var sm = simulate(bal, apr, min, extra, mid);
      if (sm && sm.invA >= sm.invB) lo = mid; else hi = mid;
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + (extra <= 0 ? '—' : (diff >= 0 ? 'Paying off wins by ' : 'Investing wins by ') + money(Math.abs(diff))) + '</div>'
      + '<div class="ta-embed-sub">Wealth at payoff horizon: ' + money(s.invA) + ' (pay off) vs ' + money(s.invB) + ' (invest)</div>'
      + '<div class="ta-embed-line">Loan ends month ' + s.t1 + ' with extra vs month ' + s.H + ' minimum-only</div>'
      + '<div class="ta-embed-line">Interest saved prepaying: <strong>' + money(Math.round(s.intB) - Math.round(s.intA)) + '</strong> · Break-even return: <strong>' + ((lo + hi) / 2).toFixed(2) + '%</strong></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.studentLoanPayoffVsInvestCalculator = { recalc: calc };
})();
