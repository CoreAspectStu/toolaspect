/*!
 * ToolAspect Horse Board Cost Calculator Embed
 * Install: <div id="ta-horse-board-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/horse-board-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-horse-board-cost-calculator';
  var BASE = 'https://toolaspect.com/horse-board-cost-calculator/';

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
    + '.ta-embed-form-row.three{grid-template-columns:1fr 1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}'
    + '.ta-embed-stat{text-align:center;background:var(--ta-bg);border-radius:8px;padding:10px 6px}'
    + '.ta-embed-stat .k{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-stat .v{font-size:1rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-form-row.three,.ta-embed-stats{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'horse-board-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="horse-board-cost-calculator"]')) {
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

  var RATES = {
    full: { rural: 500, sub: 650, metro: 1200 },
    partial: { rural: 350, sub: 475, metro: 700 },
    self: { rural: 175, sub: 300, metro: 475 },
    pasture: { rural: 300, sub: 425, metro: 625 }
  };

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Horse Board Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Full, partial, self-care, and pasture board priced monthly and yearly</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Board type</label><select class="ta-btype">'
    + '<option value="full" selected>Full care</option><option value="partial">Partial</option>'
    + '<option value="self">Self-care</option><option value="pasture">Pasture</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Location</label><select class="ta-tier">'
    + '<option value="rural">Rural</option><option value="sub" selected>Suburban</option><option value="metro">Major metro</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row three">'
    + '<div class="ta-embed-form-group"><label>Base rate ($/mo)</label><input type="number" class="ta-base" value="650" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Add-ons ($/mo)</label><input type="number" class="ta-addons" value="100" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Annual extras ($/yr)</label><input type="number" class="ta-annual" value="300" min="0" step="25"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big ta-mo">—</div>'
    + '<div class="ta-embed-sub ta-mosub"></div>'
    + '<div class="ta-embed-stats">'
    + '<div class="ta-embed-stat"><div class="k">Per year</div><div class="v ta-yr">—</div></div>'
    + '<div class="ta-embed-stat"><div class="k">Per day</div><div class="v ta-day">—</div></div>'
    + '<div class="ta-embed-stat"><div class="k">5-year total</div><div class="v ta-five">—</div></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var mo = val('.ta-base') + val('.ta-addons');
    var yr = mo * 12 + val('.ta-annual');
    root.querySelector('.ta-mo').textContent = money(mo) + '/mo';
    root.querySelector('.ta-mosub').textContent = 'all-in with add-ons';
    root.querySelector('.ta-yr').textContent = money(yr);
    root.querySelector('.ta-day').textContent = money(yr / 365);
    root.querySelector('.ta-five').textContent = money(yr * 5);
  }
  function loadPreset() {
    var t = root.querySelector('.ta-btype').value;
    var tier = root.querySelector('.ta-tier').value;
    root.querySelector('.ta-base').value = RATES[t][tier];
    calc();
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', function (e) {
    if (e.target.classList.contains('ta-btype') || e.target.classList.contains('ta-tier')) loadPreset();
  });
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.horseBoardCostCalculator = { recalc: calc };
})();
