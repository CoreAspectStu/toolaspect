/*!
 * ToolAspect Fence Cost Calculator Embed
 * Install: <div id="ta-fence-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/fence-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-fence-cost-calculator';
  var BASE = 'https://toolaspect.com/fence-cost-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'fence-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="fence-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Fence Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Installed price per linear foot and for the full run</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Length (linear ft)</label><input type="number" class="ta-lf" value="150" min="10" max="2000" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Material</label><select class="ta-mat">'
    + '<option value="chain-link">Chain-link</option><option value="split-rail">Split rail</option>'
    + '<option value="wood-picket">Wood picket</option><option value="wood-privacy" selected>Wood privacy</option>'
    + '<option value="cedar-privacy">Cedar privacy</option><option value="vinyl-privacy">Vinyl privacy</option>'
    + '<option value="composite">Composite</option><option value="aluminum">Aluminum</option>'
    + '<option value="wrought-iron">Wrought iron</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Height</label><select class="ta-height">'
    + '<option value="3">3 ft</option><option value="4">4 ft</option><option value="5">5 ft</option>'
    + '<option value="6" selected>6 ft</option><option value="8">8 ft</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Terrain</label><select class="ta-terrain">'
    + '<option value="flat" selected>Flat</option><option value="gentle">Gentle slope</option><option value="steep">Steep slope</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Walk gates</label><input type="number" class="ta-walk" value="1" min="0" max="6" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Drive gates</label><input type="number" class="ta-drive" value="0" min="0" max="4" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var RATE = { 'chain-link': [12, 17, 26], 'split-rail': [10, 15, 22], 'wood-picket': [14, 21, 30], 'wood-privacy': [17, 25, 36], 'cedar-privacy': [22, 32, 45], 'vinyl-privacy': [22, 32, 48], composite: [25, 38, 55], aluminum: [30, 42, 60], 'wrought-iron': [32, 50, 80] };
  var HEIGHT = { '3': 0.80, '4': 0.90, '5': 0.96, '6': 1.00, '8': 1.35 };
  var TERRAIN = { flat: 1.00, gentle: 1.08, steep: 1.20 };
  var WALK = [150, 275, 450], DRIVE = [450, 900, 1600];

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function sel(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var lf = num('.ta-lf');
    if (lf < 10) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your fence length</div>';
      return;
    }
    var walk = Math.max(0, num('.ta-walk'));
    var drive = Math.max(0, num('.ta-drive'));
    var total = RATE[sel('.ta-mat')].map(function (r, i) {
      return lf * r * HEIGHT[sel('.ta-height')] * TERRAIN[sel('.ta-terrain')] + walk * WALK[i] + drive * DRIVE[i];
    });
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(total[1]) + '</div>'
      + '<div class="ta-embed-sub">typical installed total · about ' + money(total[1] / lf) + ' per LF</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Low estimate</div><div class="rv">' + money(total[0]) + '</div></div>'
      + '<div><div class="rl">High estimate</div><div class="rv">' + money(total[2]) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.fenceCostCalculator = { recalc: calc };
})();
