/*!
 * ToolAspect Wedding Vendor Pricing Calculator Embed
 * Install: <div id="ta-wedding-vendor-pricing-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-vendor-pricing-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-vendor-pricing-calculator';
  var BASE = 'https://toolaspect.com/wedding-vendor-pricing-calculator/';

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
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:8px;font-size:.85rem}'
    + '.ta-embed-cell strong{display:block;font-size:1.05rem}'
    + '.ta-embed-cell span{color:var(--ta-muted);font-size:.75rem}'
    + '.ta-embed-check{display:flex;align-items:center;font-size:.85rem;color:var(--ta-text);cursor:pointer}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-form-row.three{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-vendor-pricing-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-vendor-pricing-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Vendor Pricing Calculator</div>'
    + '<div class="ta-embed-subtitle">Overhead + target income ÷ weddings per year = your minimum package price</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Vendor type</label><select class="ta-vtype">'
    + '<option value="photo" selected>Photographer</option>'
    + '<option value="video">Videographer</option>'
    + '<option value="dj">DJ</option>'
    + '<option value="planner">Full-service planner</option>'
    + '<option value="coord">Month-of coordinator</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Target income ($/yr)</label><input type="number" class="ta-income" value="60000" min="0" step="1000">'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-form-row three">'
    + '<div class="ta-embed-form-group"><label>Overhead ($/yr)</label><input type="number" class="ta-overhead" value="10000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Weddings / yr</label><input type="number" class="ta-weddings" value="25" min="1" max="104" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Direct $/wedding</label><input type="number" class="ta-direct" value="800" min="0" step="50"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Hours per wedding (shoot + edit + admin)</label><input type="number" class="ta-hours" value="40" min="1" max="300" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var PRESETS = {
    photo: { overhead: 10000, weddings: 25, direct: 800, hours: 40 },
    video: { overhead: 10500, weddings: 25, direct: 900, hours: 48 },
    dj: { overhead: 7000, weddings: 40, direct: 150, hours: 12 },
    planner: { overhead: 6500, weddings: 15, direct: 600, hours: 100 },
    coord: { overhead: 5000, weddings: 30, direct: 250, hours: 30 }
  };
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }

  function loadPreset() {
    var p = PRESETS[root.querySelector('.ta-vtype').value];
    root.querySelector('.ta-overhead').value = p.overhead;
    root.querySelector('.ta-weddings').value = p.weddings;
    root.querySelector('.ta-direct').value = p.direct;
    root.querySelector('.ta-hours').value = p.hours;
    calc();
  }

  function calc() {
    var income = num('.ta-income'), overhead = num('.ta-overhead');
    var n = num('.ta-weddings'), direct = num('.ta-direct'), hours = num('.ta-hours');
    if (n <= 0 || hours <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">enter weddings per year and hours per wedding</div>';
      return;
    }
    var min = (overhead + income) / n + direct;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(min) + '</div>'
      + '<div class="ta-embed-sub">minimum sustainable package · ' + n + ' × ' + usd(min) + ' = ' + usd(min * n)
      + ' − ' + usd(overhead) + ' overhead − ' + usd(direct * n) + ' direct = ' + usd(income) + ' take-home</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Effective hourly</span><strong>' + usd(min / hours) + '/hr</strong></div>'
      + '<div class="ta-embed-cell"><span>Annual revenue</span><strong>' + usd(min * n) + '</strong></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingVendorPricingCalculator = { recalc: calc, loadPreset: loadPreset };
})();
