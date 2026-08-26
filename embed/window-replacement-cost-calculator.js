/*!
 * ToolAspect Window Replacement Cost Calculator Embed
 * Install: <div id="ta-window-replacement-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/window-replacement-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-window-replacement-cost-calculator';
  var BASE = 'https://toolaspect.com/window-replacement-cost-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'window-replacement-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="window-replacement-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Window Replacement Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Installed price per window and for the whole house</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Number of windows</label><input type="number" class="ta-count" value="10" min="1" max="60" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Window type</label><select class="ta-type">'
    + '<option value="double-hung">Double-hung</option><option value="slider">Slider</option><option value="casement">Casement</option>'
    + '<option value="awning">Awning</option><option value="picture">Picture</option><option value="bay-bow">Bay or bow</option>'
    + '<option value="custom">Custom shape</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Frame material</label><select class="ta-mat">'
    + '<option value="vinyl">Vinyl</option><option value="aluminum">Aluminum</option><option value="fiberglass">Fiberglass</option>'
    + '<option value="composite">Composite</option><option value="wood">Wood</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Glass</label><select class="ta-glass">'
    + '<option value="double">Double-pane clear</option><option value="low-e" selected>Low-E + argon</option><option value="triple">Triple-pane</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Install method</label><select class="ta-install">'
    + '<option value="insert">Retrofit insert</option><option value="full">Full-frame</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Stories</label><select class="ta-stories">'
    + '<option value="1">1 story</option><option value="2">2+ stories</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var TYPE = { 'double-hung': [325, 550, 850], 'slider': [300, 500, 750], 'casement': [350, 575, 900], 'awning': [325, 525, 800], 'picture': [300, 525, 900], 'bay-bow': [1600, 2700, 4100], 'custom': [450, 750, 1200] };
  var MAT = { vinyl: 1.00, aluminum: 1.05, fiberglass: 1.40, composite: 1.55, wood: 1.70 };
  var GLASS = { double: 0.95, 'low-e': 1.00, triple: 1.22 };

  function val(sel) {
    var el = root.querySelector(sel);
    if (!el) return 0;
    return el.tagName === 'SELECT' ? el.value : (parseFloat(el.value) || 0);
  }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var count = val('.ta-count');
    var type = val('.ta-type');
    var mat = val('.ta-mat');
    var glass = val('.ta-glass');
    var install = val('.ta-install');
    var stories = parseInt(val('.ta-stories'), 10) || 1;
    if (count < 1) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter the number of windows</div>';
      return;
    }
    var per = TYPE[type].map(function (b) {
      return b * MAT[mat] * GLASS[glass] + (install === 'full' ? 175 : 0) + (stories >= 2 ? 75 : 0);
    });
    var total = per.map(function (p) { return p * count; });
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(total[1]) + '</div>'
      + '<div class="ta-embed-sub">typical installed total · ' + money(per[1]) + ' per window</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Low estimate</div><div class="rv">' + money(total[0]) + '</div></div>'
      + '<div><div class="rl">High estimate</div><div class="rv">' + money(total[2]) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.windowReplacementCostCalculator = { recalc: calc };
})();
