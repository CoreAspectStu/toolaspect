/*!
 * ToolAspect Deck Cost Calculator Embed
 * Install: <div id="ta-deck-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/deck-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-deck-cost-calculator';
  var BASE = 'https://toolaspect.com/deck-cost-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'deck-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="deck-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Deck Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Wood vs composite installed cost per square foot</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Length (ft)</label><input type="number" class="ta-len" value="12" min="6" max="80" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Width (ft)</label><input type="number" class="ta-wid" value="20" min="6" max="40" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Stair sets</label><input type="number" class="ta-stairs" value="1" min="0" max="4" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Material</label><select class="ta-mat">'
    + '<option value="pressure-treated" selected>Pressure-treated pine</option><option value="cedar-redwood">Cedar / redwood</option>'
    + '<option value="composite">Composite</option><option value="pvc">PVC / polymer</option>'
    + '<option value="hardwood">Hardwood (ipe)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Deck height</label><select class="ta-level">'
    + '<option value="ground" selected>Ground level</option><option value="raised">Raised (2–6 ft)</option>'
    + '<option value="second">Second story</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Railing</label><select class="ta-rail">'
    + '<option value="none" selected>Standard</option><option value="balusters">Metal balusters</option>'
    + '<option value="cable">Cable rail</option><option value="glass">Glass panel</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var RATE = { 'pressure-treated': [18, 30, 42], 'cedar-redwood': [25, 40, 55], composite: [25, 38, 55], pvc: [32, 48, 65], hardwood: [40, 55, 75] };
  var LEVEL = { ground: 1.00, raised: 1.10, second: 1.55 };
  var STAIRS = { wood: [400, 600, 900], composite: [600, 900, 1300] };
  var RAIL = { none: 0, balusters: 20, cable: 55, glass: 100 };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function sel(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var len = num('.ta-len'), wid = num('.ta-wid');
    if (len < 3 || wid < 3) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your deck dimensions</div>';
      return;
    }
    var sf = len * wid;
    var mat = sel('.ta-mat');
    var level = sel('.ta-level');
    var stairs = Math.max(0, num('.ta-stairs'));
    var rail = sel('.ta-rail');
    var stairRate = (mat === 'composite' || mat === 'pvc') ? STAIRS.composite : STAIRS.wood;
    var railLF = len + 2 * wid; // attached deck, 3 railed sides
    var total = RATE[mat].map(function (r, i) {
      return sf * r * LEVEL[level] + stairs * stairRate[i] + RAIL[rail] * railLF;
    });
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(total[1]) + '</div>'
      + '<div class="ta-embed-sub">' + sf.toLocaleString('en-US') + ' sq ft · about ' + money(total[1] / sf) + ' per sq ft installed</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Low estimate</div><div class="rv">' + money(total[0]) + '</div></div>'
      + '<div><div class="rl">High estimate</div><div class="rv">' + money(total[2]) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.deckCostCalculator = { recalc: calc };
})();
