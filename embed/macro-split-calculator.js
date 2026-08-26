/*!
 * ToolAspect Macro Split Calculator Embed
 * Install: <div id="ta-macro-split-calculator"></div>
 *          <script src="https://toolaspect.com/embed/macro-split-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-macro-split-calculator';
  var BASE = 'https://toolaspect.com/macro-split-calculator/';

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
    + '.ta-embed-big{font-size:1.6rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-macros{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:14px;text-align:center}'
    + '.ta-embed-macros div{background:var(--ta-bg);border-radius:8px;padding:8px}'
    + '.ta-embed-macros .k{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-macros .v{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-check{font-size:.78rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'macro-split-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="macro-split-calculator"]')) {
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
    + '<div class="ta-embed-title">Macro Split Calculator</div>'
    + '<div class="ta-embed-subtitle">Daily calories in, protein / carb / fat grams out</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Daily calories</label><input type="number" class="ta-cals" value="2400" min="800" max="6000" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Split</label><select class="ta-split">'
    + '<option value="45,25,30">Balanced 45/25/30</option>'
    + '<option value="40,30,30" selected>Classic 40/30/30</option>'
    + '<option value="35,35,30">High protein 35/35/30</option>'
    + '<option value="30,40,30">Very high protein 30/40/30</option>'
    + '<option value="20,40,40">Low carb 20/40/40</option>'
    + '<option value="10,25,65">Keto 10/25/65</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Fat %</label><input type="number" class="ta-fatpct" value="30" min="5" max="80" step="1"></div>'
    + '</div>'
    + '<p style="font-size:.72rem;color:var(--ta-muted);margin:0">Split shows carbs/protein/fat. Editing fat % rebalances carbs and protein equally.</p>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var splitSel = root.querySelector('.ta-split');
  var fatIn = root.querySelector('.ta-fatpct');

  function calc() {
    var cals = parseFloat(root.querySelector('.ta-cals').value) || 0;
    var fatPct = parseFloat(fatIn.value) || 30;
    var parts = splitSel.value.split(',');
    var cPct = parseFloat(parts[0]), pPct = parseFloat(parts[1]);
    if (cals <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your daily calories</div>';
      return;
    }
    // rebalance carbs/protein around the chosen fat %
    var rem = 100 - fatPct;
    var c = cals * (rem * cPct / (cPct + pPct)) / 100 / 4;
    var p = cals * (rem * pPct / (cPct + pPct)) / 100 / 4;
    var f = cals * fatPct / 100 / 9;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + cals.toLocaleString('en-US') + ' calories</div>'
      + '<div class="ta-embed-sub">at roughly ' + Math.round(c * 4 / cals * 100) + '/' + Math.round(p * 4 / cals * 100) + '/' + fatPct + ' (C/P/F)</div>'
      + '<div class="ta-embed-macros">'
      + '<div><div class="k">Protein</div><div class="v">' + Math.round(p) + 'g</div></div>'
      + '<div><div class="k">Carbs</div><div class="v">' + Math.round(c) + 'g</div></div>'
      + '<div><div class="k">Fat</div><div class="v">' + Math.round(f) + 'g</div></div>'
      + '</div>'
      + '<div class="ta-embed-check">Check: ' + Math.round(p) + '×4 + ' + Math.round(c) + '×4 + ' + Math.round(f) + '×9 = '
      + (Math.round(p) * 4 + Math.round(c) * 4 + Math.round(f) * 9).toLocaleString('en-US') + ' cal</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.macroSplit = { recalc: calc };
})();
