/*!
 * ToolAspect Capital Gains Tax Calculator Embed
 * Install: <div id="ta-capital-gains-tax-calculator"></div>
 *          <script src="https://toolaspect.com/embed/capital-gains-tax-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-capital-gains-tax-calculator';
  var BASE = 'https://toolaspect.com/capital-gains-tax-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'capital-gains-tax-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="capital-gains-tax-calculator"]')) {
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
    + '<div class="ta-embed-title">Capital Gains Tax Calculator</div>'
    + '<div class="ta-embed-subtitle">2025 federal estimate incl. NIIT</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Filing status</label>'
    + '<select class="ta-status"><option value="single">Single</option><option value="mfj">Married filing jointly</option><option value="hoh">Head of household</option></select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Income before gains ($)</label><input type="number" class="ta-income" value="75000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Long-term gain ($)</label><input type="number" class="ta-lt" value="25000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Short-term gain ($)</label><input type="number" class="ta-st" value="0" min="0" step="500"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var ORD = {
    single: [[11925, .10], [48475, .12], [103350, .22], [197300, .24], [250525, .32], [626350, .35], [Infinity, .37]],
    mfj: [[23850, .10], [96950, .12], [206700, .22], [394600, .24], [501050, .32], [751600, .35], [Infinity, .37]],
    hoh: [[17050, .10], [64700, .12], [103350, .22], [197300, .24], [250500, .32], [626350, .35], [Infinity, .37]]
  };
  var LT = { single: [48350, 533400], mfj: [96700, 600000], hoh: [64750, 566700] };
  var NIIT = { single: 200000, hoh: 200000, mfj: 250000 };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function sval(sel) {
    var el = root.querySelector(sel);
    return el ? el.value : 'single';
  }
  function ordTax(taxable, status) {
    var t = 0, prev = 0, i, cap, rate;
    for (i = 0; i < ORD[status].length; i++) {
      cap = ORD[status][i][0]; rate = ORD[status][i][1];
      if (taxable > prev) t += (Math.min(taxable, cap) - prev) * rate; else break;
      prev = cap;
    }
    return t;
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var status = sval('.ta-status');
    var income = val('.ta-income'), lt = val('.ta-lt'), st = val('.ta-st');
    if (lt <= 0 && st <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter a gain amount</div>';
      return;
    }
    var ordInc = income + st;
    var stTax = ordTax(ordInc, status) - ordTax(income, status);
    var z = LT[status][0], f = LT[status][1], top = ordInc + lt;
    function band(lo, hi, rate) { return Math.max(0, Math.min(top, hi) - Math.max(ordInc, lo)) * rate; }
    var ltTax = band(0, z, 0) + band(z, f, .15) + band(f, Infinity, .20);
    var niit = Math.min(lt + st, Math.max(0, ordInc + lt - NIIT[status])) * 0.038;
    var total = stTax + ltTax + niit;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(total) + '</div>'
      + '<div class="ta-embed-sub">federal est. · ' + (total / (lt + st) * 100).toFixed(1) + '% effective on ' + usd(lt + st) + '</div>'
      + '<div class="ta-embed-sub">LT ' + usd(ltTax) + ' · ST ' + usd(stTax) + ' · NIIT ' + usd(niit) + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.capitalGainsTaxCalculator = { recalc: calc };
})();
