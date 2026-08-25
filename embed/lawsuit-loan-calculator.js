/*!
 * ToolAspect Lawsuit Loan Calculator Embed
 * Install: <div id="ta-lawsuit-loan-calculator"></div>
 *          <script src="https://toolaspect.com/embed/lawsuit-loan-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-lawsuit-loan-calculator';
  var BASE = 'https://toolaspect.com/lawsuit-loan-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-warn:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-warn:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-sub strong{color:var(--ta-warn)}'
    + '.ta-embed-note{color:var(--ta-muted);font-size:.72rem;margin-top:10px;text-align:center}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'lawsuit-loan-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="lawsuit-loan-calculator"]')) {
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
    + '<div class="ta-embed-title">Lawsuit Loan Calculator</div>'
    + '<div class="ta-embed-subtitle">What pre-settlement funding really costs</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Advance amount ($)</label><input type="number" class="ta-advance" value="10000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Monthly rate (%)</label><input type="number" class="ta-rate" value="3" min="0" max="10" step="0.25"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Rate structure</label><select class="ta-type">'
    + '<option value="compound" selected>Compounding monthly (common)</option>'
    + '<option value="simple">Simple interest</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Months until settlement</label><input type="number" class="ta-months" value="12" min="1" max="48" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-note">Education only, not legal or financial advice. Talk to a licensed attorney in your state.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function fmt(n) {
    return '$' + Math.abs(Math.round(n)).toLocaleString('en-US');
  }

  function calc() {
    var advance = val('.ta-advance');
    var r = val('.ta-rate') / 100;
    var type = root.querySelector('.ta-type').value;
    var months = Math.min(Math.max(val('.ta-months'), 1), 48);

    var payoff, apr;
    if (type === 'compound') {
      payoff = advance * Math.pow(1 + r, months);
      apr = Math.pow(1 + r, 12) - 1;
    } else {
      payoff = advance * (1 + r * months);
      apr = r * 12;
    }
    var cost = payoff - advance;

    if (advance <= 0 || isNaN(payoff)) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter the advance terms</div>';
      return;
    }
    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + fmt(payoff) + '</div>'
      + '<div class="ta-embed-sub">Payoff at settlement after ' + months + ' months</div>'
      + '<div class="ta-embed-sub">It costs <strong>' + fmt(cost) + '</strong> to get ' + fmt(advance) + ' early</div>'
      + '<div class="ta-embed-sub">Effective APR: <strong>' + (apr * 100).toFixed(1) + '%</strong></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.lawsuitLoanCalculator = { recalc: calc };
})();
