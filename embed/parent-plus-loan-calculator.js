/*!
 * ToolAspect Parent PLUS Loan Calculator Embed
 * Install: <div id="ta-parent-plus-loan-calculator"></div>
 *          <script src="https://toolaspect.com/embed/parent-plus-loan-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-parent-plus-loan-calculator';
  var BASE = 'https://toolaspect.com/parent-plus-loan-calculator/';

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
    + '.ta-embed-apr{margin-top:10px;padding:10px;border:1px solid var(--ta-border);border-radius:10px;font-size:.9rem;color:var(--ta-text)}'
    + '.ta-embed-apr strong{color:#dc2626}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-apr strong{color:#f87171}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'parent-plus-loan-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="parent-plus-loan-calculator"]')) {
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
    + '<div class="ta-embed-title">Parent PLUS Loan Calculator</div>'
    + '<div class="ta-embed-subtitle">Payment, fee, and the true APR</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Amount ($)</label><input type="number" class="ta-amt" value="30000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Rate (%)</label><input type="number" class="ta-rate" value="9.07" min="0" step="0.01"></div>'
    + '<div class="ta-embed-form-group"><label>Term (years)</label><select class="ta-term"><option value="5">5</option><option value="10" selected>10</option><option value="25">25</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var FEE_PCT = 4.228; // loans disbursed 10/1/2025 - 9/30/2026

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function pmt(P, annualPct, years) {
    var r = annualPct / 100 / 12, n = Math.round(years * 12);
    if (n <= 0 || P <= 0) return 0;
    if (r === 0) return P / n;
    return P * r / (1 - Math.pow(1 + r, -n));
  }
  function solveAPR(net, payment, months) {
    var lo = 0.0001, hi = 2, m;
    for (var i = 0; i < 200; i++) {
      m = (lo + hi) / 2;
      var r = m / 12;
      var p = net * r / (1 - Math.pow(1 + r, -months));
      if (p < payment) lo = m; else hi = m;
    }
    return (lo + hi) / 2 * 100;
  }

  function calc() {
    var amt = val('.ta-amt'), rate = val('.ta-rate'), years = val('.ta-term') || 10;
    if (amt <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter loan amount</div>';
      return;
    }
    var fee = amt * FEE_PCT / 100, net = amt - fee;
    var months = Math.round(years * 12);
    var pay = pmt(amt, rate, years);
    var apr = solveAPR(net, pay, months);
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + pay.toFixed(2) + '/mo</div>'
      + '<div class="ta-embed-sub">Fee $' + fee.toFixed(2) + ' withheld · school receives $' + net.toFixed(2) + '</div>'
      + '<div class="ta-embed-sub">Total paid over ' + years + ' yrs: $' + (pay * months).toLocaleString('en-US', {maximumFractionDigits: 0}) + '</div>'
      + '<div class="ta-embed-apr">Sticker rate ' + rate.toFixed(2) + '% — but you repay $' + amt.toLocaleString('en-US', {maximumFractionDigits: 0})
      + ' on $' + net.toLocaleString('en-US', {maximumFractionDigits: 0}) + ' received.<br><strong>True APR: ' + apr.toFixed(2) + '%</strong></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.parentPlusLoanCalculator = { recalc: calc };
})();
