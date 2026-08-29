/*!
 * ToolAspect Dealer Doc Fee Calculator Embed
 * Install: <div id="ta-dealer-doc-fee-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dealer-doc-fee-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dealer-doc-fee-calculator';
  var BASE = 'https://toolaspect.com/dealer-doc-fee-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}.ta-embed-range{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dealer-doc-fee-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dealer-doc-fee-calculator"]')) {
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
    + '<div class="ta-embed-title">Dealer Doc Fee Calculator</div>'
    + '<div class="ta-embed-subtitle">Your out-the-door price, state by state</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state"></select></div>'
    + '<div class="ta-embed-form-group"><label>Vehicle Price ($)</label><input type="number" class="ta-price" value="38000" min="0" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Sales Tax Rate (%)</label><input type="number" class="ta-tax" value="6" min="0" max="11" step="0.125"></div>'
    + '<div class="ta-embed-form-group"><label>Registration &amp; Plates ($)</label><input type="number" class="ta-reg" value="100" min="0" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  // 2026 average doc fee and title fee by state (CarEdge)
  var STATES = {
    'Alabama': [489, 18], 'Alaska': [299, 15], 'Arizona': [499, 4], 'Arkansas': [129, 10], 'California': [85, 25],
    'Colorado': [699, 7], 'Connecticut': [599, 25], 'Delaware': [475, 35], 'DC': [300, 26], 'Florida': [999, 75],
    'Georgia': [599, 18], 'Hawaii': [395, 5], 'Idaho': [399, 14], 'Illinois': [347, 155], 'Indiana': [199, 15],
    'Iowa': [180, 25], 'Kansas': [499, 10], 'Kentucky': [450, 6], 'Louisiana': [425, 77], 'Maine': [499, 33],
    'Maryland': [499, 100], 'Massachusetts': [459, 75], 'Michigan': [260, 15], 'Minnesota': [125, 8], 'Mississippi': [425, 8],
    'Missouri': [565, 9], 'Montana': [299, 12], 'Nebraska': [299, 10], 'Nevada': [499, 20], 'New Hampshire': [375, 25],
    'New Jersey': [695, 60], 'New Mexico': [339, 3], 'New York': [175, 50], 'North Carolina': [699, 56], 'North Dakota': [299, 5],
    'Ohio': [250, 15], 'Oklahoma': [599, 11], 'Oregon': [250, 106], 'Pennsylvania': [449, 58], 'Rhode Island': [399, 53],
    'South Carolina': [400, 15], 'South Dakota': [200, 10], 'Tennessee': [499, 14], 'Texas': [150, 33], 'Utah': [299, 6],
    'Vermont': [200, 35], 'Virginia': [799, 15], 'Washington': [199, 15], 'West Virginia': [250, 15], 'Wisconsin': [299, 165], 'Wyoming': [500, 15]
  };

  var stateSel = root.querySelector('.ta-state');
  Object.keys(STATES).sort().forEach(function (s) {
    var o = document.createElement('option');
    o.value = s;
    o.textContent = s + ' ($' + STATES[s][0] + ')';
    if (s === 'Florida') o.selected = true;
    stateSel.appendChild(o);
  });

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var s = STATES[val('.ta-state')] || STATES.Florida;
    var price = num('.ta-price');
    var tax = num('.ta-tax') / 100;
    var reg = num('.ta-reg');
    var doc = s[0], title = s[1];
    var taxAmt = (price + doc) * tax;
    var otd = price + doc + title + reg + taxAmt;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(otd) + '</div>'
      + '<div class="ta-embed-sub">out-the-door &mdash; ' + money(price) + ' car + $' + doc + ' doc + $' + title + ' title + ' + money(reg) + ' reg + ' + money(taxAmt) + ' tax</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Doc Fee (avg)</div><div class="rv">$' + doc + '</div></div>'
      + '<div><div class="rl">Fees Total</div><div class="rv">' + money(doc + title + reg) + '</div></div>'
      + '<div><div class="rl">Fee + Tax on It</div><div class="rv">$' + (doc * (1 + tax)).toFixed(0) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dealerDocFeeCalculator = { recalc: calc };
})();
