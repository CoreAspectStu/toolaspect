/*!
 * ToolAspect Rebar Calculator Embed
 * Install: <div id="ta-rebar-calculator"></div>
 *          <script src="https://toolaspect.com/embed/rebar-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-rebar-calculator';
  var BASE = 'https://toolaspect.com/rebar-calculator/';

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
    + '.ta-embed-results-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px;margin-bottom:12px}'
    + '.ta-embed-result-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:10px;padding:14px;text-align:center}'
    + '.ta-embed-result-card .ta-amount{font-size:1.3rem;font-weight:700;color:var(--ta-text)}'
    + '.ta-embed-result-card.ta-primary .ta-amount{color:var(--ta-accent);font-size:1.5rem}'
    + '.ta-embed-result-card.ta-green .ta-amount{color:#059669}'
    + '.ta-embed-result-card .ta-label{font-size:.7rem;color:var(--ta-muted);text-transform:uppercase;margin-top:2px;letter-spacing:.03em}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-results-grid{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'rebar-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="rebar-calculator"]')) {
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
    + '<div class="ta-embed-title">Rebar Calculator</div>'
    + '<div class="ta-embed-subtitle">Rebar grid, sticks, tie wire &amp; cost for slabs and footings</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Slab Length (ft)</label><input type="number" class="ta-len" value="20" min="0" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Slab Width (ft)</label><input type="number" class="ta-wid" value="20" min="0" step="0.5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Grid Spacing (in, on center)</label>'
    + '<select class="ta-grid"><option value="12">12 in</option><option value="18">18 in</option><option value="24" selected>24 in</option><option value="36">36 in</option><option value="48">48 in</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Rebar Size</label>'
    + '<select class="ta-size"><option value="3">#3 (0.376 lb/ft)</option><option value="4" selected>#4 (0.668 lb/ft)</option><option value="5">#5 (1.043 lb/ft)</option><option value="6">#6 (1.502 lb/ft)</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Edge Clearance (in)</label><input type="number" class="ta-clear" value="3" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Lap per Stick (ft)</label><input type="number" class="ta-lap" value="2" min="0" step="0.5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Price per lb ($)</label><input type="number" class="ta-price" value="0.85" min="0" step="0.05"></div>'
    + '<div class="ta-embed-form-group"><label>Wire Tie Spacing</label>'
    + '<select class="ta-tie"><option value="1">Every intersection</option><option value="2" selected>Every other intersection</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-results-grid"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultsEl = root.querySelector('.ta-embed-results-grid');

  function v(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function vi(sel) {
    var el = root.querySelector(sel);
    return el ? (parseInt(el.value, 10) || 0) : 0;
  }

  function calc() {
    var len = v('.ta-len');
    var wid = v('.ta-wid');
    var grid = v('.ta-grid') / 12;
    var size = vi('.ta-size');
    var clear = v('.ta-clear') / 12;
    var lap = v('.ta-lap');
    var price = v('.ta-price');
    var tieEvery = vi('.ta-tie');
    var lbft = { 3: 0.376, 4: 0.668, 5: 1.043, 6: 1.502 }[size] || 0.668;
    var nx = Math.max(1, Math.floor((len - 2 * clear) / grid) + 1);
    var ny = Math.max(1, Math.floor((wid - 2 * clear) / grid) + 1);
    var totalFt = nx * wid + ny * len;
    var sticks = Math.ceil(totalFt / 20);
    var totalWithLap = totalFt + sticks * lap;
    var sticksLap = Math.ceil(totalWithLap / 20);
    var weight = totalWithLap * lbft;
    var intersections = Math.max(1, Math.ceil((nx * ny) / tieEvery));
    var wireLb = Math.max(1, Math.ceil(totalWithLap / 500));
    var wireSpools = Math.ceil(wireLb / 3.5);
    var cost = weight * price;

    resultsEl.innerHTML =
      '<div class="ta-embed-result-card ta-primary"><div class="ta-amount">' + (nx + ny) + '</div><div class="ta-label">Total Bars</div></div>'
      + '<div class="ta-embed-result-card"><div class="ta-amount">' + nx + ' × ' + ny + '</div><div class="ta-label">Grid (x × y bars)</div></div>'
      + '<div class="ta-embed-result-card ta-green"><div class="ta-amount">' + sticksLap + '</div><div class="ta-label">20ft Sticks (incl. lap)</div></div>'
      + '<div class="ta-embed-result-card"><div class="ta-amount">' + Math.round(totalWithLap) + ' ft</div><div class="ta-label">Total Length</div></div>'
      + '<div class="ta-embed-result-card"><div class="ta-amount">' + Math.round(weight) + ' lb</div><div class="ta-label">Steel Weight</div></div>'
      + '<div class="ta-embed-result-card"><div class="ta-amount">' + wireSpools + ' spool</div><div class="ta-label">Tie Wire (' + intersections + ' ties)</div></div>'
      + '<div class="ta-embed-result-card"><div class="ta-amount">$' + Math.round(cost).toLocaleString() + '</div><div class="ta-label">Rebar Cost</div></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.rebarCalculator = { recalc: calc };
})();
