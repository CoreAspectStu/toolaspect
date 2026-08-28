/*!
 * ToolAspect Hybrid Battery Replacement Cost Calculator Embed
 * Install: <div id="ta-hybrid-battery-cost"></div>
 *          <script src="https://toolaspect.com/embed/hybrid-battery-replacement-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-hybrid-battery-cost';
  var BASE = 'https://toolaspect.com/hybrid-battery-replacement-cost-calculator/';

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
    + '.ta-embed-range{display:flex;justify-content:center;gap:24px;margin-top:10px;font-size:.85rem;color:var(--ta-text)}'
    + '.ta-embed-range span b{display:block;font-size:1.05rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}.ta-embed-range{gap:14px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'hybrid-battery-cost');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="hybrid-battery-cost"]')) {
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
    + '<div class="ta-embed-title">Hybrid Battery Replacement Cost</div>'
    + '<div class="ta-embed-subtitle">New OEM vs remanufactured vs used, installed</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Vehicle</label><select class="ta-model">'
    + '<option value="0">Prius 2004&ndash;2015</option><option value="1">Prius 2016+</option>'
    + '<option value="2">Camry / RAV4 / Highlander</option><option value="3">Honda hybrid</option>'
    + '<option value="4">Fusion / C-Max</option><option value="5">Hyundai / Kia</option>'
    + '<option value="6">Lexus</option><option value="7">Luxury / PHEV</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Repair path</label><select class="ta-path">'
    + '<option value="1" selected>Remanufactured</option><option value="0">New OEM (dealer)</option>'
    + '<option value="2">Used pull</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Labor hours</label><input type="number" class="ta-hours" value="2.5" min="0" step="0.5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Shop rate ($/hr)</label><input type="number" class="ta-rate" value="150" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Diagnostic fee ($)</label><input type="number" class="ta-diag" value="150" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Core credit ($)</label><input type="number" class="ta-core" value="350" min="0" step="50"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var PACKS = [
    [[2200, 3200, 4400], [1300, 2100, 2400], [550, 1050, 1300]],
    [[2900, 4200, 5300], [1600, 2300, 2700], [850, 1500, 1900]],
    [[3100, 4700, 5900], [1800, 2700, 3200], [1100, 1900, 2300]],
    [[2300, 3500, 4700], [1400, 2200, 2700], [700, 1400, 1700]],
    [[3400, 5400, 7400], [2000, 3100, 3700], [1300, 2300, 2700]],
    [[2600, 4400, 5900], [1700, 2800, 3500], [1200, 2200, 2600]],
    [[3500, 5600, 7400], [2200, 3300, 4000], [1500, 2600, 3100]],
    [[4300, 7000, 11000], [2600, 4200, 5300], [1800, 3200, 4000]]
  ];

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var m = PACKS[+root.querySelector('.ta-model').value];
    var path = +root.querySelector('.ta-path').value;
    var labor = val('.ta-hours') * val('.ta-rate');
    var fixed = labor + val('.ta-diag') - val('.ta-core');
    var lo = m[path][0] + fixed, mid = m[path][1] + fixed, hi = m[path][2] + fixed;
    if (mid <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">&mdash;</div><div class="ta-embed-sub">Enter your vehicle and shop details</div>';
      return;
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(mid) + '</div>'
      + '<div class="ta-embed-sub">typical installed total</div>'
      + '<div class="ta-embed-range">'
      + '<span>Low<b>' + money(lo) + '</b></span>'
      + '<span>High<b>' + money(hi) + '</b></span>'
      + '</div>'
      + '<div class="ta-embed-sub" style="margin-top:10px">Pack ' + money(m[path][1]) + ' + labor/diag ' + money(fixed) + ' (net of core)</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.hybridBatteryCost = { recalc: calc };
})();
