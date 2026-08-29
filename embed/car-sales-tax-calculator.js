/*!
 * ToolAspect Car Sales Tax Calculator Embed
 * Install: <div id="ta-car-sales-tax-calculator"></div>
 *          <script src="https://toolaspect.com/embed/car-sales-tax-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-car-sales-tax-calculator';
  var BASE = 'https://toolaspect.com/car-sales-tax-calculator/';

  // [label, stateRate%, avgLocal%, mode] — rates as of 2026-01-01 (Tax Foundation)
  var STATES = [
    ['Alabama', 4.00, 5.46, ''], ['Alaska', 0, 1.82, ''], ['Arizona', 5.60, 2.92, ''],
    ['Arkansas', 6.50, 2.96, ''], ['California', 7.25, 1.74, 'NOTRADE'], ['Colorado', 2.90, 4.99, ''],
    ['Connecticut', 6.35, 0, ''], ['Delaware', 0, 0, 'NONE'], ['Florida', 6.00, 0.98, 'FL5K'],
    ['Georgia', 7.00, 0, 'TAVT'], ['Hawaii', 4.00, 0.50, ''], ['Idaho', 6.00, 0.03, ''],
    ['Illinois', 6.25, 2.71, ''], ['Indiana', 7.00, 0, ''], ['Iowa', 6.00, 0.94, ''],
    ['Kansas', 6.50, 2.19, ''], ['Kentucky', 6.00, 0, ''], ['Louisiana', 5.00, 5.11, ''],
    ['Maine', 5.50, 0, ''], ['Maryland', 6.00, 0, ''], ['Massachusetts', 6.25, 0, ''],
    ['Michigan', 6.00, 0, ''], ['Minnesota', 6.875, 1.26, ''], ['Mississippi', 7.00, 0.06, ''],
    ['Missouri', 4.225, 4.22, ''], ['Montana', 0, 0, 'NONE'], ['Nebraska', 5.50, 1.48, ''],
    ['Nevada', 6.85, 1.39, ''], ['New Hampshire', 0, 0, 'NONE'], ['New Jersey', 6.625, 0, ''],
    ['New Mexico', 4.00, 0, 'MVE'], ['New York', 4.00, 4.54, ''], ['North Carolina', 4.75, 2.25, 'HUT'],
    ['North Dakota', 5.00, 2.09, ''], ['Ohio', 5.75, 1.54, ''], ['Oklahoma', 4.50, 4.56, ''],
    ['Oregon', 0, 0, 'NONE'], ['Pennsylvania', 6.00, 0.34, ''], ['Rhode Island', 7.00, 0, ''],
    ['South Carolina', 6.00, 1.49, 'SCCAP'], ['South Dakota', 4.20, 1.91, 'MVE4'], ['Tennessee', 7.00, 2.61, 'TN'],
    ['Texas', 6.25, 1.95, ''], ['Utah', 6.10, 1.32, ''], ['Vermont', 6.00, 0.39, ''],
    ['Virginia', 5.30, 0.47, 'VAMIN'], ['Washington', 6.50, 3.01, 'WA'], ['West Virginia', 6.00, 0.59, ''],
    ['Wisconsin', 5.00, 0.72, ''], ['Wyoming', 4.00, 1.56, '']
  ];

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group{margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'car-sales-tax-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="car-sales-tax-calculator"]')) {
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
    + '<div class="ta-embed-title">Car Sales Tax Calculator</div>'
    + '<div class="ta-embed-subtitle">Vehicle sales tax by state, with trade-in credit</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state"></select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Purchase price ($)</label><input type="number" class="ta-price" value="35000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Trade-in value ($)</label><input type="number" class="ta-trade" value="0" min="0" step="500"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">Enter your vehicle details</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var sel = root.querySelector('.ta-state');
  STATES.forEach(function (st, i) {
    var o = document.createElement('option');
    o.value = String(i);
    o.textContent = st[0];
    sel.appendChild(o);
  });
  var txIdx = STATES.findIndex(function (s) { return s[0] === 'Texas'; });
  sel.value = String(txIdx);

  function money(n) { return '$' + (Math.round(n * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

  function compute(price, trade, st) {
    var sr = st[1], lr = st[2], mode = st[3];
    if (trade < 0 || price < trade) trade = 0;
    var base, lines = [], total = 0;
    switch (mode) {
      case 'NONE': base = price; if (lr > 0) lines.push([lr + '% local', price * lr / 100]); break;
      case 'NOTRADE': base = price; lines.push([sr + '% state (full price)', price * sr / 100]); if (lr > 0) lines.push([lr + '% local', price * lr / 100]); break;
      case 'TAVT': base = price; lines.push(['7% TAVT', price * 0.07]); break;
      case 'HUT': base = price - trade; lines.push(['3% highway use tax (trade-in credited)', (price - trade) * 0.03]); break;
      case 'MVE': base = price - trade; lines.push(['4% excise (trade credited)', (price - trade) * 0.04]); break;
      case 'MVE4': base = price; lines.push(['4% excise', price * 0.04]); break;
      case 'SCCAP': base = price; lines.push(['5%, $500 max', Math.min(price * 0.05, 500)]); break;
      case 'FL5K': base = price - trade; lines.push(['6% state', (price - trade) * 0.06]); if (lr > 0) lines.push([lr + '% county (first $5,000)', Math.min(price - trade, 5000) * lr / 100]); break;
      case 'TN': base = price; { var band = Math.min(Math.max(price - 1600, 0), 1600); lines.push(['7% state', price * 0.07]); lines.push(['2.75% on $1,600–$3,200', band * 0.0275]); if (lr > 0) lines.push([lr + '% local (first $1,600)', Math.min(price, 1600) * lr / 100]); } break;
      case 'VAMIN': base = price - trade; lines.push(['4.15% ($75 min)', Math.max((price - trade) * 0.0415, 75)]); break;
      case 'WA': base = price - trade; lines.push([(sr + lr + 0.5) + '% incl. motor vehicle tax', (price - trade) * (sr + lr + 0.5) / 100]); if (price > 100000) lines.push(['8% luxury over $100k', (price - 100000) * 0.08]); break;
      default: base = price - trade; lines.push([sr + '% state', (price - trade) * sr / 100]); if (lr > 0) lines.push([lr + '% local', (price - trade) * lr / 100]);
    }
    lines.forEach(function (l) { total += l[1]; });
    return { base: base, lines: lines, total: total };
  }

  function val(sel2) { var el = root.querySelector(sel2); return el ? (parseFloat(el.value) || 0) : 0; }

  function calc() {
    var price = val('.ta-price');
    var trade = val('.ta-trade');
    var st = STATES[parseInt(sel.value, 10) || 0];
    if (price <= 0) {
      root.querySelector('.ta-embed-big').textContent = '—';
      root.querySelector('.ta-embed-sub').textContent = 'Enter a purchase price';
      return;
    }
    var r = compute(price, trade, st);
    root.querySelector('.ta-embed-big').textContent = money(r.total);
    root.querySelector('.ta-embed-sub').textContent = st[0] + ' · taxable base ' + money(r.base) + (r.lines.length > 1 ? ' · ' + r.lines.map(function (l) { return l[0]; }).join(' + ') : '');
  }

  root.addEventListener('input', calc);
  sel.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.carSalesTaxCalculator = { recalc: calc };
})();
