/*!
 * ToolAspect Wedding Budget Calculator Embed
 * Install: <div id="ta-wedding-budget-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-budget-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-budget-calculator';
  var BASE = 'https://toolaspect.com/wedding-budget-calculator/';

  // Percentage split from The Knot 2026 Real Weddings Study
  var CATS = [
    ['Venue & rentals', 29], ['Catering, cake & drinks', 24], ['Photo & video', 10],
    ['Florals & decor', 9], ['Music', 6], ['Attire & beauty', 6], ['Wedding rings', 5],
    ['Planner', 4], ['Guest entertainment', 3], ['Transportation', 2], ['Stationery', 1], ['Officiant', 1]
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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-table{width:100%;border-collapse:collapse;font-size:.85rem;margin-top:12px}'
    + '.ta-embed-table th,.ta-embed-table td{padding:6px 8px;border:1px solid var(--ta-border);text-align:left;color:var(--ta-text)}'
    + '.ta-embed-table th{background:var(--ta-bg)}'
    + '.ta-embed-table td:nth-child(2),.ta-embed-table td:nth-child(3),.ta-embed-table th:nth-child(2),.ta-embed-table th:nth-child(3){text-align:right}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-budget-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-budget-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Budget Calculator</div>'
    + '<div class="ta-embed-subtitle">Split your total across 12 categories</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Total budget ($)</label><input type="number" class="ta-budget" value="30000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Guests</label><input type="number" class="ta-guests" value="100" min="0" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">Enter your budget</div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<table class="ta-embed-table"><thead><tr><th>Category</th><th>%</th><th>Amount</th></tr></thead><tbody class="ta-rows"></tbody></table>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var budget = parseFloat(root.querySelector('.ta-budget').value) || 0;
    var guests = parseFloat(root.querySelector('.ta-guests').value) || 0;
    if (budget <= 0) {
      root.querySelector('.ta-embed-big').textContent = '—';
      root.querySelector('.ta-embed-sub').textContent = 'Enter your total budget';
      return;
    }
    var pg = guests > 0 ? budget / guests : 0;
    root.querySelector('.ta-embed-big').textContent = money(budget * 0.53);
    root.querySelector('.ta-embed-sub').textContent = 'reception (venue + catering, 53%)' + (guests > 0 ? ' · ' + money(pg) + ' per guest vs $292 avg' : '');
    root.querySelector('.ta-rows').innerHTML = CATS.map(function (c) {
      return '<tr><td>' + c[0] + '</td><td>' + c[1] + '%</td><td>' + money(budget * c[1] / 100) + '</td></tr>';
    }).join('') + '<tr><td><strong>Total</strong></td><td>100%</td><td><strong>' + money(budget) + '</strong></td></tr>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingBudgetCalculator = { recalc: calc };
})();
