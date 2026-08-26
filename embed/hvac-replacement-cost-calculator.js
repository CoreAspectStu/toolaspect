/*!
 * ToolAspect HVAC Replacement Cost Calculator Embed
 * Install: <div id="ta-hvac-replacement-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/hvac-replacement-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-hvac-replacement-cost-calculator';
  var BASE = 'https://toolaspect.com/hvac-replacement-cost-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.7rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-rows{margin-top:12px;display:grid;gap:6px}'
    + '.ta-embed-row{display:flex;justify-content:space-between;gap:10px;padding:8px 12px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);text-align:left}'
    + '.ta-embed-row .k{font-size:.82rem;color:var(--ta-muted);font-weight:600}'
    + '.ta-embed-row .v{font-size:.9rem;font-weight:700;white-space:nowrap}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'hvac-replacement-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="hvac-replacement-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">HVAC Replacement Cost</div>'
    + '<div class="ta-embed-subtitle">Sized from home square footage, priced at national rates</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Home Size (sq ft)</label><input type="number" class="ta-sqft" value="1800" min="400" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Sq Ft per Ton</label><input type="number" class="ta-perton" value="600" min="300" max="1000" step="25"></div>'
    + '<div class="ta-embed-form-group"><label>System</label><select class="ta-sys">'
    + '<option value="ac">AC only</option><option value="furnace">Furnace only</option>'
    + '<option value="complete" selected>AC + furnace</option><option value="heatpump">Heat pump</option>'
    + '<option value="minisplit">Mini-split (3-zone)</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var SIZES = [1.5, 2, 2.5, 3, 3.5, 4, 5];

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function snap(raw) { for (var i = 0; i < SIZES.length; i++) { if (SIZES[i] >= raw) return SIZES[i]; } return 5; }

  function calc() {
    var sqft = val('.ta-sqft'), perTon = val('.ta-perton');
    var sys = root.querySelector('.ta-sys').value;
    if (sqft <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your home size</div>';
      return;
    }
    var tons = snap(sqft / (perTon || 600));
    var btu = 80;
    var est, lo, hi, label;
    if (sys === 'ac') { est = tons * 3500; lo = tons * 2000; hi = tons * 6000; label = tons + '-ton AC'; }
    else if (sys === 'furnace') { est = btu * 55; lo = btu * 35; hi = btu * 80; label = btu + ' kBTU gas furnace'; }
    else if (sys === 'complete') { est = (tons * 3500 + btu * 55) * 0.9; lo = (tons * 2000 + btu * 35) * 0.9; hi = (tons * 6000 + btu * 80) * 0.9; label = tons + '-ton AC + furnace'; }
    else if (sys === 'heatpump') { est = tons * 3500; lo = tons * 2600; hi = tons * 5300; label = tons + '-ton heat pump'; }
    else { est = 3500 + 2 * 2200; lo = 3000 + 2 * 1800; hi = 5000 + 2 * 3000; label = '3-zone mini-split'; }
    resultEl.innerHTML = '<div class="ta-embed-big">' + fmt(est) + '</div>'
      + '<div class="ta-embed-sub">estimated installed cost, ' + label + '</div>'
      + '<div class="ta-embed-rows">'
      + '<div class="ta-embed-row"><span class="k">Typical low (national)</span><span class="v">' + fmt(lo) + '</span></div>'
      + '<div class="ta-embed-row"><span class="k">Typical high (national)</span><span class="v">' + fmt(hi) + '</span></div>'
      + '<div class="ta-embed-row"><span class="k">Sizing rule</span><span class="v">' + perTon + ' sq ft/ton</span></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.hvacCost = { recalc: calc };
})();
