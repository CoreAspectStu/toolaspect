/*!
 * ToolAspect New vs Used Car Calculator Embed
 * Install: <div id="ta-new-vs-used-car-calculator"></div>
 *          <script src="https://toolaspect.com/embed/new-vs-used-car-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-new-vs-used-car-calculator';
  var BASE = 'https://toolaspect.com/new-vs-used-car-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card h4{margin:0 0 10px;font-size:.95rem;color:var(--ta-accent)}'
    + '.ta-embed-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}'
    + '@media(max-width:520px){.ta-embed-grid{grid-template-columns:1fr 1fr}}'
    + '.ta-embed-field{display:flex;flex-direction:column;gap:4px}'
    + '.ta-embed-field label{font-size:.76rem;color:var(--ta-muted);font-weight:600}'
    + '.ta-embed-field input{width:100%;padding:8px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;'
    + 'color:var(--ta-text);font-size:.9rem;outline:none;font-family:inherit}'
    + '.ta-embed-field input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-box{background:var(--ta-bg);border-radius:10px;padding:12px;text-align:center}'
    + '.ta-embed-box .l{font-size:.74rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-box .v{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-verdict{margin-top:12px;background:var(--ta-bg);border-radius:10px;padding:12px;text-align:center;font-size:.88rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'new-vs-used-car-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="new-vs-used-car-calculator"]')) {
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

  function field(id, label, val, step) {
    return '<div class="ta-embed-field"><label>' + label + '</label>'
      + '<input type="number" id="' + id + '" value="' + val + '" min="0" step="' + step + '"></div>';
  }

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">New vs Used Car Calculator</div>'
    + '<div class="ta-embed-subtitle">Total cost of each over the years you keep it</div>'
    + '<div class="ta-embed-card"><h4>🆕 New car</h4><div class="ta-embed-grid">'
    + field('ta-nv-nPrice', 'Price ($)', 40000, 500) + field('ta-nv-nApr', 'APR (%)', 6.5, 0.1) + field('ta-nv-nTerm', 'Term (mo)', 60, 12)
    + field('ta-nv-nFees', 'Tax + fees ($)', 3200, 100) + field('ta-nv-nIns', 'Insurance ($/mo)', 185, 5) + field('ta-nv-nMaint', 'Maintenance ($/yr)', 500, 50)
    + '</div></div>'
    + '<div class="ta-embed-card"><h4>🔁 Used car</h4><div class="ta-embed-grid">'
    + field('ta-nv-uPrice', 'Price ($)', 24000, 500) + field('ta-nv-uApr', 'APR (%)', 9.5, 0.1) + field('ta-nv-uTerm', 'Term (mo)', 60, 12)
    + field('ta-nv-uFees', 'Tax + fees ($)', 1900, 100) + field('ta-nv-uIns', 'Insurance ($/mo)', 150, 5) + field('ta-nv-uMaint', 'Maintenance ($/yr)', 1000, 50)
    + field('ta-nv-uAge', 'Age (years)', 3, 1) + field('ta-nv-hold', 'Keep for (years)', 5, 1)
    + '</div></div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="ta-nv-hero">—</div><div class="ta-embed-sub" id="ta-nv-herosub"></div>'
    + '<div class="ta-embed-row">'
    + '<div class="ta-embed-box"><div class="l">🆕 New total</div><div class="v" id="ta-nv-ntot">—</div></div>'
    + '<div class="ta-embed-box"><div class="l">🔁 Used total</div><div class="v" id="ta-nv-utot">—</div></div>'
    + '</div><div class="ta-embed-verdict" id="ta-nv-verdict"></div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function fmt(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  function pmt(P, annualPct, months) {
    var r = annualPct / 100 / 12;
    if (months <= 0 || P <= 0) return 0;
    if (r === 0) return P / months;
    return P * r / (1 - Math.pow(1 + r, -months));
  }
  var RET = { 0: 1, 1: .80, 2: .69, 3: .60, 4: .52, 5: .45, 6: .39, 7: .34, 8: .30, 9: .26, 10: .22, 11: .19, 12: .16, 13: .14, 14: .12, 15: .10 };
  function retention(y) {
    y = Math.max(0, y);
    if (y >= 15) return 0.10;
    var lo = Math.floor(y), hi = Math.ceil(y);
    if (lo === hi) return RET[lo];
    return RET[lo] + (RET[hi] - RET[lo]) * (y - lo);
  }
  function gv(id) { var v = parseFloat(root.querySelector('#' + id).value); return isNaN(v) ? 0 : v; }
  function totalCost(price, apr, term, fees, ins, maint, hold, buyAge) {
    var n = hold * 12;
    var pay = pmt(price, apr, term) * Math.min(term, n);
    var resale = price * retention(buyAge + hold) / retention(buyAge);
    return { tot: pay + fees + ins * n + maint * hold - resale, resale: resale };
  }

  function calc() {
    var hold = Math.max(1, Math.min(15, gv('ta-nv-hold') || 5));
    var n = totalCost(gv('ta-nv-nPrice'), gv('ta-nv-nApr'), gv('ta-nv-nTerm'), gv('ta-nv-nFees'), gv('ta-nv-nIns'), gv('ta-nv-nMaint'), hold, 0);
    var uAge = Math.max(0, Math.min(15, gv('ta-nv-uAge')));
    var u = totalCost(gv('ta-nv-uPrice'), gv('ta-nv-uApr'), gv('ta-nv-uTerm'), gv('ta-nv-uFees'), gv('ta-nv-uIns'), gv('ta-nv-uMaint'), hold, uAge);
    if (gv('ta-nv-nPrice') <= 0 && gv('ta-nv-uPrice') <= 0) {
      root.querySelector('#ta-nv-hero').textContent = '—';
      root.querySelector('#ta-nv-herosub').textContent = 'Enter prices for both cars';
      root.querySelector('#ta-nv-verdict').textContent = '';
      return;
    }
    var diff = n.tot - u.tot;
    root.querySelector('#ta-nv-ntot').textContent = fmt(n.tot) + ' (' + fmt(n.tot / (hold * 12)) + '/mo)';
    root.querySelector('#ta-nv-utot').textContent = fmt(u.tot) + ' (' + fmt(u.tot / (hold * 12)) + '/mo)';
    var hero = root.querySelector('#ta-nv-hero'), sub = root.querySelector('#ta-nv-herosub'), v = root.querySelector('#ta-nv-verdict');
    if (Math.abs(diff) < 1) {
      hero.textContent = 'Dead heat';
      sub.textContent = 'Both cost about the same over ' + hold + ' years';
      v.textContent = 'A tie this close means buy the one you want to drive.';
      return;
    }
    hero.textContent = fmt(Math.abs(diff));
    sub.textContent = (diff > 0 ? 'Used car is cheaper by ' : 'New car is cheaper by ') + fmt(Math.abs(diff) / (hold * 12)) + '/mo over ' + hold + ' years';
    v.textContent = (diff > 0 ? 'The used car wins' : 'The new car wins') + ' — resale at sale: ' + fmt(n.resale) + ' vs ' + fmt(u.resale) + '.';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.newVsUsedCarCalculator = { recalc: calc };
})();
