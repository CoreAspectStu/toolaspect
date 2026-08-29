/*!
 * ToolAspect Party Rental Cost Calculator Embed
 * Install: <div id="ta-party-rental-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/party-rental-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-party-rental-cost-calculator';
  var BASE = 'https://toolaspect.com/party-rental-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;font-size:.85rem;color:var(--ta-text);cursor:pointer}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:8px;font-size:.85rem}'
    + '.ta-embed-cell strong{display:block;font-size:1.05rem}'
    + '.ta-embed-cell span{color:var(--ta-muted);font-size:.75rem}'
    + '.ta-embed-note{color:var(--ta-muted);font-size:.8rem;margin-top:10px;text-align:center}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'party-rental-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="party-rental-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Party Rental Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Tent size from your guest count, then the per-item stack</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guests</label><input class="ta-guests" type="number" value="100" min="10" max="400" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Dance floor</label><select class="ta-dance">'
    + '<option value="1" selected>Yes</option><option value="0">No</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Delivery &amp; setup</label><select class="ta-deliv">'
    + '<option value="incl">Included in quote</option>'
    + '<option value="zone" selected>Local zone ($75 typical)</option>'
    + '<option value="ext">Extended ($150 typical)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Round tables</label><input class="ta-tables" type="number" value="10" min="0" max="60"></div>'
    + '<div class="ta-embed-form-group"><label>Chairs</label><input class="ta-chairs" type="number" value="100" min="0" max="500"></div>'
    + '<div class="ta-embed-form-group"><label>Linens</label><input class="ta-linens" type="number" value="10" min="0" max="60"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-note"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var noteEl = root.querySelector('.ta-embed-note');
  var TENTS = [
    { n: '20x20', sq: 400, c: [250, 325, 400] },
    { n: '20x30', sq: 600, c: [300, 400, 500] },
    { n: '20x40', sq: 800, c: [450, 625, 800] },
    { n: '40x40', sq: 1600, c: [900, 1250, 1800] },
    { n: '40x60', sq: 2400, c: [1000, 1400, 2000] },
    { n: '40x80', sq: 3200, c: [1800, 2600, 3400] }
  ];
  var ROUND = [8, 12, 18], CHAIR = [1.25, 2, 3], LINEN = [6, 12, 20], FLOOR = [1.5, 2, 4];
  var DEL = { incl: [0, 0, 0], zone: [50, 75, 100], ext: [100, 150, 150] };
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function num(sel) { var el = root.querySelector(sel); return el ? (parseInt(el.value, 10) || 0) : 0; }
  function sel2(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }

  function calc() {
    var g = num('.ta-guests');
    var dance = sel2('.ta-dance') === '1';
    var d = DEL[sel2('.ta-deliv')];
    var need = g * 12 + (dance ? g * 3 + 200 : 0);
    var tent = TENTS[TENTS.length - 1];
    for (var i = 0; i < TENTS.length; i++) { if (TENTS[i].sq >= need) { tent = TENTS[i]; break; } }
    var dsq = dance ? g * 3 : 0;
    var tabs = num('.ta-tables'), ch = num('.ta-chairs'), lin = num('.ta-linens');
    var out = [0, 0, 0];
    for (var j = 0; j < 3; j++) {
      out[j] = tent.c[j] + tabs * ROUND[j] + ch * CHAIR[j] + lin * LINEN[j] + dsq * FLOOR[j] + d[j];
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(out[1]) + '</div>'
      + '<div class="ta-embed-sub">typical total &middot; range ' + usd(out[0]) + ' to ' + usd(out[2]) + '</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Recommended tent</span><strong>' + tent.n + '</strong></div>'
      + '<div class="ta-embed-cell"><span>Dance floor</span><strong>' + (dance ? dsq + ' sq ft' : 'none') + '</strong></div>'
      + '</div>';
    noteEl.textContent = 'Need: ' + need.toLocaleString() + ' sq ft (' + g + ' seated × 12' + (dance ? ' + ' + dsq + ' dance + 200 head table/bar' : '') + ') → ' + tent.n;
  }

  function autofill() {
    var g = num('.ta-guests');
    root.querySelector('.ta-tables').value = Math.ceil(g / 10);
    root.querySelector('.ta-chairs').value = g;
    root.querySelector('.ta-linens').value = Math.ceil(g / 10);
  }

  root.addEventListener('input', function (e) { if (e.target.classList.contains('ta-guests')) autofill(); calc(); });
  root.addEventListener('change', calc);
  autofill();
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.partyRentalCostCalculator = { recalc: calc };
})();
