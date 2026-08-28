/*!
 * ToolAspect Title Loan APR Calculator Embed
 * Install: <div id="ta-title-loan-apr-calculator"></div>
 *          <script src="https://toolaspect.com/embed/title-loan-apr-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-title-loan-apr-calculator';
  var BASE = 'https://toolaspect.com/title-loan-apr-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#f87171}'
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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-compare{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-cell .k{font-size:.72rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.03em}'
    + '.ta-embed-cell .v{font-size:1.05rem;font-weight:700;margin-top:2px}'
    + '.ta-embed-stack{width:100%;border-collapse:collapse;font-size:.8rem;margin-top:12px}'
    + '.ta-embed-stack th,.ta-embed-stack td{padding:5px 8px;border:1px solid var(--ta-border);text-align:left}'
    + '.ta-embed-stack th{background:var(--ta-bg);color:var(--ta-muted)}'
    + '.ta-embed-stack tr.hot td{color:var(--ta-accent);font-weight:600}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-compare{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'title-loan-apr-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="title-loan-apr-calculator"]')) {
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
    + '<div class="ta-embed-title">Title Loan APR Calculator</div>'
    + '<div class="ta-embed-subtitle">What that monthly fee really costs</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Loan amount ($)</label><input type="number" class="ta-amount" value="1000" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Monthly fee (%)</label><input type="number" class="ta-fee" value="25" min="0" max="40" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Months carried</label><input type="number" class="ta-months" value="6" min="1" max="24" step="1"></div>'
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

  function calc() {
    var amount = val('.ta-amount'), fee = val('.ta-fee');
    var months = Math.max(1, Math.min(24, Math.round(val('.ta-months')) || 1));
    if (amount <= 0 || fee <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter the loan amount and monthly fee</div>';
      return;
    }
    var apr = fee * 12;
    var feeMo = amount * fee / 100;
    var totalFees = feeMo * months;
    var hitMonth = Math.ceil(100 / fee);
    var rows = '';
    var cum = 0;
    for (var m = 1; m <= months; m++) {
      cum += feeMo;
      rows += '<tr' + (cum >= amount ? ' class="hot"' : '') + '><td>' + m + '</td><td>' + money(cum) + '</td><td>' + money(amount + cum) + '</td></tr>';
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + apr.toFixed(0) + '% APR</div>'
      + '<div class="ta-embed-sub">' + fee + '% per month × 12 · ' + money(feeMo) + ' every 30 days ($' + (feeMo / 30).toFixed(2) + '/day)</div>'
      + '<div class="ta-embed-compare">'
      + '<div class="ta-embed-cell"><div class="k">Fees over ' + months + ' months</div><div class="v">' + money(totalFees) + ' (' + Math.round(totalFees / amount * 100) + '% of principal)</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Fees reach principal at</div><div class="v">Month ' + hitMonth + '</div></div>'
      + '</div>'
      + '<table class="ta-embed-stack"><thead><tr><th>Month</th><th>Fees so far</th><th>Total repaid</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.titleLoanApr = { recalc: calc };
})();
