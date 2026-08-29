/*!
 * ToolAspect Wedding Decor & Lighting Cost Calculator Embed
 * Install: <div id="ta-wedding-decor-lighting-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-decor-lighting-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-decor-lighting-cost-calculator';
  var BASE = 'https://toolaspect.com/wedding-decor-lighting-cost-calculator/';

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-decor-lighting-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-decor-lighting-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Decor &amp; Lighting Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Uplighting, drape, linens &amp; candles — the rental stack</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Uplights</label><input class="ta-up" type="number" value="16" min="0" max="100" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Uplight mode</label><select class="ta-upmode">'
    + '<option value="diy">DIY rental</option>'
    + '<option value="pro" selected>Pro installed</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guest tables</label><input class="ta-tbl" type="number" value="20" min="0" max="60" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Draping</label><select class="ta-drape">'
    + '<option value="none">None</option>'
    + '<option value="pipe" selected>Pipe &amp; drape 80 ft</option>'
    + '<option value="ceiling">Ceiling drape 1,200 sq ft</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Chairs (sashes/covers)</label><input class="ta-ch" type="number" value="160" min="0" max="600" step="10"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var UP = { diy: [19, 25, 40], pro: [50, 65, 75] };
  var LINFT = [8, 14, 20], CFT = [1.5, 3, 6], TBL = [10, 20, 35], CHAIR = [2, 3.5, 8], CANDLE = [10, 25, 60], ARCH = [100, 275, 600], SIGN = [25, 75, 200], INST = [100, 300, 600];
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function num(sel) { var el = root.querySelector(sel); return el ? Math.max(0, parseFloat(el.value) || 0) : 0; }
  function sel2(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }

  function calc() {
    var upN = num('.ta-up'), tblN = num('.ta-tbl'), chN = num('.ta-ch');
    var up = UP[sel2('.ta-upmode')], dm = sel2('.ta-drape');
    var out = [0, 0, 0], light = [0, 0, 0], drape = [0, 0, 0], table = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
      light[i] = upN * up[i];
      drape[i] = dm === 'pipe' ? 80 * LINFT[i] : dm === 'ceiling' ? 1200 * CFT[i] : 0;
      table[i] = tblN * (TBL[i] + CANDLE[i]) + chN * CHAIR[i];
      out[i] = light[i] + drape[i] + table[i] + ARCH[i] + 3 * SIGN[i] + INST[i];
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(out[1]) + '</div>'
      + '<div class="ta-embed-sub">typical total &middot; range ' + usd(out[0]) + ' to ' + usd(out[2]) + '</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Lighting + drape</span><strong>' + usd(light[1] + drape[1]) + '</strong></div>'
      + '<div class="ta-embed-cell"><span>Tables + chairs</span><strong>' + usd(table[1]) + '</strong></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingDecorLightingCostCalculator = { recalc: calc };
})();
