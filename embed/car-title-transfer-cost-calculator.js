/*!
 * ToolAspect Car Title Transfer Cost Calculator Embed
 * Install: <div id="ta-car-title-transfer-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/car-title-transfer-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-car-title-transfer-cost-calculator';
  var BASE = 'https://toolaspect.com/car-title-transfer-cost-calculator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'car-title-transfer-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="car-title-transfer-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Car Title Transfer Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">DMV fees plus the tax on top, by state</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state"></select></div>'
    + '<div class="ta-embed-form-group"><label>Transfer Type</label><select class="ta-mode">'
    + '<option value="sale" selected>Private sale</option>'
    + '<option value="gift">Family gift</option>'
    + '<option value="inherit">Inheritance</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Sale Price / Fair Value ($)</label><input type="number" class="ta-price" value="12000" min="0" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var stateSel = root.querySelector('.ta-state');

  // [name, title fee, tax mode, state rate, avg local rate]
  var STATES = [
    ['Alabama', 18, 'st', 2.50, 0.00], ['Alaska', 15, 'none', 0, 0], ['Arizona', 4, 'st', 5.60, 2.92],
    ['Arkansas', 11.50, 'st', 6.50, 2.96], ['California', 23, 'full', 7.25, 1.74], ['Colorado', 12, 'st', 2.90, 4.99],
    ['Connecticut', 25, 'st', 6.35, 0], ['Delaware', 35, 'none', 0, 0], ['District of Columbia', 26, 'st', 6.00, 0],
    ['Florida', 77.25, 'st', 6.00, 0.98], ['Georgia', 18, 'tavt', 7.00, 0], ['Hawaii', 5, 'st', 4.00, 0.50],
    ['Idaho', 14, 'st', 6.00, 0.03], ['Illinois', 150, 'st', 6.25, 2.71], ['Indiana', 15, 'st', 7.00, 0],
    ['Iowa', 35, 'st', 6.00, 0.94], ['Kansas', 16.50, 'st', 6.50, 2.19], ['Kentucky', 9, 'st', 6.00, 0],
    ['Louisiana', 68.50, 'st', 5.00, 5.11], ['Maine', 33, 'st', 5.50, 0], ['Maryland', 200, 'st', 6.00, 0],
    ['Massachusetts', 75, 'st', 6.25, 0], ['Michigan', 15, 'st', 6.00, 0], ['Minnesota', 10.50, 'st', 6.875, 1.26],
    ['Mississippi', 9, 'st', 7.00, 0.06], ['Missouri', 14.50, 'st', 4.225, 4.22], ['Montana', 12, 'st', 0, 0],
    ['Nebraska', 10, 'st', 5.50, 1.48], ['Nevada', 29.25, 'st', 6.85, 1.39], ['New Hampshire', 25, 'none', 0, 0],
    ['New Jersey', 60, 'st', 6.625, 0], ['New Mexico', 5, 'mve', 4.00, 0], ['New York', 50, 'st', 4.00, 4.54],
    ['North Carolina', 56, 'hut', 3.00, 0], ['North Dakota', 5, 'st', 5.00, 2.09], ['Ohio', 15, 'st', 5.75, 1.54],
    ['Oklahoma', 17, 'st', 4.50, 4.56], ['Oregon', 103, 'none', 0, 0], ['Pennsylvania', 67, 'st', 6.00, 0.34],
    ['Rhode Island', 52.50, 'st', 7.00, 0], ['South Carolina', 15, 'cap', 5.00, 1.49], ['South Dakota', 10, 'mve', 4.00, 0],
    ['Tennessee', 36.50, 'st', 7.00, 2.61], ['Texas', 33, 'st', 6.25, 1.95], ['Utah', 6, 'st', 6.10, 1.32],
    ['Vermont', 35, 'st', 6.00, 0.39], ['Virginia', 15, 'vamin', 4.15, 0], ['Washington', 5.50, 'wa', 6.50, 3.01],
    ['West Virginia', 15, 'st', 6.00, 0.59], ['Wisconsin', 164.50, 'st', 5.00, 0.72], ['Wyoming', 20, 'st', 4.00, 1.56]
  ];

  STATES.forEach(function (s, i) {
    var o = document.createElement('option');
    o.value = i; o.textContent = s[0];
    stateSel.appendChild(o);
  });

  function taxOf(price, s, withLocal) {
    var sr = s[3], lr = withLocal ? s[4] : 0;
    if (price <= 0) return 0;
    switch (s[2]) {
      case 'none': return 0;
      case 'full': return price * (sr + lr) / 100;
      case 'tavt': return price * 0.07;
      case 'hut': return price * 0.03;
      case 'mve': return price * 0.04;
      case 'cap': return Math.min(price * 0.05, 500);
      case 'vamin': return Math.max(price * 0.0415, 75);
      case 'wa': return price * (sr + lr + 0.5) / 100;
      default: return price * (sr + lr) / 100;
    }
  }

  function num(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var i = parseInt(num('.ta-state'), 10);
    var s = STATES[i] || STATES[0];
    var mode = num('.ta-mode');
    var price = parseFloat(num('.ta-price')) || 0;
    var giftTax = (s[0] === 'Texas' && mode === 'gift') ? 10 : 0;
    var fee = s[1];
    var taxLo = (mode === 'sale') ? taxOf(price, s, false) : giftTax;
    var taxHi = (mode === 'sale') ? taxOf(price, s, true) : giftTax;
    var lo = fee + taxLo, hi = fee + taxHi;
    var taxLine;
    if (mode === 'sale') taxLine = money(taxLo) + ' – ' + money(taxHi);
    else if (mode === 'gift') taxLine = giftTax ? '$10 gift tax' : '$0 (exempt)';
    else taxLine = '$0 (exempt)';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">' + s[0] + ' · estimate before registration</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Title &amp; Transfer Fees</div><div class="rv">' + money(fee) + '</div></div>'
      + '<div><div class="rl">Sales / Use Tax</div><div class="rv">' + taxLine + '</div></div>'
      + '</div>';
  }

  root.addEventListener('change', calc);
  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.carTitleTransferCostCalculator = { recalc: calc };
})();
