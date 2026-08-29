/*!
 * ToolAspect Wedding Cost Per Guest Calculator Embed
 * Install: <div id="ta-wedding-cost-per-guest-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-cost-per-guest-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-cost-per-guest-calculator';
  var BASE = 'https://toolaspect.com/wedding-cost-per-guest-calculator/';

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
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:8px;font-size:.85rem}'
    + '.ta-embed-cell strong{display:block;font-size:1.05rem}'
    + '.ta-embed-cell span{color:var(--ta-muted);font-size:.75rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-cost-per-guest-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-cost-per-guest-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Cost Per Guest Calculator</div>'
    + '<div class="ta-embed-subtitle">Per-person stack + the fixed pool behind it</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guests</label><input class="ta-g" type="number" value="117" min="1" max="500" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Cost level</label><select class="ta-preset">'
    + '<option value="budget">Budget</option>'
    + '<option value="avg" selected>Average</option>'
    + '<option value="upscale">Upscale</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Fixed pool — venue fee, photo, music, florals, planner ($)</label><input class="ta-fixed" type="number" value="18600" min="0" step="100"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  // Variable per-guest stack: [lo, typ, hi] per line; fixed pool bands to match.
  var VARBANDS = { catering: [50, 80, 150], bar: [10, 25, 50], cake: [3, 7, 15], rentals: [6, 12, 25], favors: [0, 5, 12], stationery: [2, 4, 8] };
  var PRESETS = {
    budget: { v: [50, 10, 3, 6, 0, 2], fixed: 8050 },
    avg: { v: [80, 25, 7, 12, 5, 4], fixed: 18600 },
    upscale: { v: [150, 50, 15, 25, 12, 8], fixed: 37800 }
  };
  var FIXED = [8050, 18600, 37800];
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }

  function calc() {
    var g = Math.max(1, Math.round(num('.ta-g')));
    var fixed = num('.ta-fixed');
    var v = PRESETS[root.querySelector('.ta-preset').value].v;
    var vTyp = v.reduce(function (a, b) { return a + b; }, 0);
    var vLo = 0, vHi = 0;
    Object.keys(VARBANDS).forEach(function (k) { vLo += VARBANDS[k][0]; vHi += VARBANDS[k][2]; });
    var total = vTyp * g + fixed;
    var lo = (vLo * g + FIXED[0]) / g, hi = (vHi * g + FIXED[2]) / g;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(total / g) + '</div>'
      + '<div class="ta-embed-sub">per guest &middot; ' + usd(total) + ' total &middot; range ' + usd(lo) + ' to ' + usd(hi) + ' a head</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Per-person stack</span><strong>' + usd(vTyp) + '</strong></div>'
      + '<div class="ta-embed-cell"><span>Fixed share / guest</span><strong>' + usd(fixed / g) + '</strong></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingCostPerGuestCalculator = { recalc: calc };
})();
