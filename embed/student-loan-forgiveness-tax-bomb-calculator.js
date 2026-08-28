/*!
 * ToolAspect Student Loan Forgiveness Tax Bomb Calculator Embed
 * Install: <div id="ta-student-loan-forgiveness-tax-bomb-calculator"></div>
 *          <script src="https://toolaspect.com/embed/student-loan-forgiveness-tax-bomb-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-student-loan-forgiveness-tax-bomb-calculator';
  var BASE = 'https://toolaspect.com/student-loan-forgiveness-tax-bomb-calculator/';

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'student-loan-forgiveness-tax-bomb-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="student-loan-forgiveness-tax-bomb-calculator"]')) {
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
    + '<div class="ta-embed-title">Loan Forgiveness Tax Bomb Calculator</div>'
    + '<div class="ta-embed-subtitle">IDR forgiveness is federally taxable again from 2026</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Forgiven amount ($)</label><input type="number" class="ta-forgiven" value="50000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Filing status</label>'
    + '<select class="ta-status">'
    + '<option value="S" selected>Single</option>'
    + '<option value="MFJ">Married joint</option>'
    + '<option value="HoH">Head of household</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Other income ($/yr)</label><input type="number" class="ta-other" value="60000" min="0" step="1000"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>State tax rate (%)</label><input type="number" class="ta-state" value="0" min="0" max="15" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Assets ($)</label><input type="number" class="ta-assets" value="0" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Other debts ($)</label><input type="number" class="ta-debts" value="0" min="0" step="1000"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var BR = {
    S: { std: 16100, c: [12400, 50400, 105700, 201775, 256225, 640600] },
    MFJ: { std: 32200, c: [24800, 100800, 211400, 403550, 512450, 768700] },
    HoH: { std: 24150, c: [17700, 67450, 105700, 201775, 256200, 640600] }
  };
  var RATES = [.10, .12, .22, .24, .32, .35, .37];

  function taxOn(t, status) {
    var c = BR[status].c, tax = 0, prev = 0;
    for (var i = 0; i < c.length; i++) {
      var band = Math.min(t, c[i]) - prev;
      if (band <= 0) break;
      tax += band * RATES[i];
      prev = c[i];
    }
    if (t > c[5]) tax += (t - c[5]) * .37;
    return tax;
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function val(sel) { return parseFloat(root.querySelector(sel).value) || 0; }

  function calc() {
    var forgiven = val('.ta-forgiven');
    var status = root.querySelector('.ta-status').value;
    var other = val('.ta-other');
    var stateRate = val('.ta-state') / 100;
    var assets = val('.ta-assets');
    var debts = val('.ta-debts');
    var insolv = Math.max(0, debts - assets);
    var excluded = Math.min(forgiven, insolv);
    var taxable = Math.max(0, forgiven - excluded);
    var std = BR[status].std;
    var fed = taxOn(Math.max(0, other + taxable - std), status) - taxOn(Math.max(0, other - std), status);
    var state = taxable * stateRate;
    var total = fed + state;
    var eff = forgiven > 0 ? (total / forgiven * 100) : 0;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(total) + '</div>'
      + '<div class="ta-embed-sub">Estimated tax on ' + usd(forgiven) + ' of forgiveness</div>'
      + '<div class="ta-embed-sub">Federal: <strong>' + usd(fed) + '</strong>' + (state > 0 ? ' · State: <strong>' + usd(state) + '</strong>' : '')
      + ' · Effective rate: <strong>' + eff.toFixed(1) + '%</strong></div>'
      + (excluded > 0 ? '<div class="ta-embed-sub">Form 982 insolvency exclusion applied: <strong>' + usd(excluded) + '</strong></div>' : '');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.studentLoanForgivenessTaxBombCalculator = { recalc: calc };
})();
