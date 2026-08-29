/*!
 * ToolAspect Wedding Florist Cost Calculator Embed
 * Install: <div id="ta-wedding-florist-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-florist-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-florist-cost-calculator';
  var BASE = 'https://toolaspect.com/wedding-florist-cost-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'wedding-florist-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-florist-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Florist Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Per-piece pricing &times; your counts</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guest tables</label><input class="ta-tbl" type="number" value="12" min="0" max="50" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Bridesmaid bouquets</label><input class="ta-bm" type="number" value="4" min="0" max="20" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Boutonnieres</label><input class="ta-bouts" type="number" value="5" min="0" max="20" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Ceremony flowers</label><select class="ta-arch">'
    + '<option value="none" selected>None</option>'
    + '<option value="small">Small arrangement (+$400)</option>'
    + '<option value="grand">Full arch install (+$1,500)</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group" style="display:flex;gap:14px;flex-wrap:wrap">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-petals" style="margin-right:6px"> Aisle petals (+$125)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-del" checked style="margin-right:6px"> Delivery + setup (+$250)</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var FL = { bridal: [150, 225, 350], bm: [50, 100, 175], bout: [10, 18, 30], cors: [20, 32, 50], center: [75, 150, 300], small: [200, 400, 800], grand: [800, 1500, 3000], petals: [50, 125, 300], delivery: [100, 250, 500] };
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function num(sel) { var el = root.querySelector(sel); return el ? Math.max(0, parseFloat(el.value) || 0) : 0; }
  function sel2(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function chk(sel3) { var el = root.querySelector(sel3); return el ? el.checked : false; }

  function calc() {
    var tbl = num('.ta-tbl'), bm = num('.ta-bm'), bouts = num('.ta-bouts'), cors = 3;
    var arch = sel2('.ta-arch');
    var out = [0, 0, 0], tblOut = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
      tblOut[i] = tbl * FL.center[i];
      out[i] = FL.bridal[i] + bm * FL.bm[i] + bouts * FL.bout[i] + cors * FL.cors[i] + tblOut[i]
        + (arch === 'small' ? FL.small[i] : arch === 'grand' ? FL.grand[i] : 0)
        + (chk('.ta-petals') ? FL.petals[i] : 0) + (chk('.ta-del') ? FL.delivery[i] : 0);
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(out[1]) + '</div>'
      + '<div class="ta-embed-sub">typical total &middot; range ' + usd(out[0]) + ' to ' + usd(out[2]) + '</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Centerpieces</span><strong>' + usd(tblOut[1]) + '</strong></div>'
      + '<div class="ta-embed-cell"><span>Everything else</span><strong>' + usd(out[1] - tblOut[1]) + '</strong></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingFloristCostCalculator = { recalc: calc };
})();
