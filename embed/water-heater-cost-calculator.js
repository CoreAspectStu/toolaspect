/*!
 * ToolAspect Water Heater Cost Calculator Embed
 * Install: <div id="ta-water-heater-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/water-heater-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-water-heater-cost-calculator';
  var BASE = 'https://toolaspect.com/water-heater-cost-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'water-heater-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="water-heater-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Water Heater Cost</div>'
    + '<div class="ta-embed-subtitle">Tank vs tankless vs heat pump, operating cost and payback</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Usage (kWh-eq/yr)</label><input type="number" class="ta-load" value="4600" min="500" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Gas $/therm</label><input type="number" class="ta-gas" value="1.65" min="0.5" step="0.05"></div>'
    + '<div class="ta-embed-form-group"><label>Elec $/kWh</label><input type="number" class="ta-elec" value="0.175" min="0.05" step="0.005"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Type A</label><select class="ta-a">'
    + '<option value="gastank" selected>Gas tank</option><option value="electank">Electric tank</option>'
    + '<option value="gastankless">Gas tankless</option><option value="electankless">Electric tankless</option>'
    + '<option value="heatpump">Heat pump hybrid</option></select></div>'
    + '<div class="ta-embed-form-group" style="grid-column:span 2"><label>Type B</label><select class="ta-b">'
    + '<option value="gastank">Gas tank</option><option value="electank">Electric tank</option>'
    + '<option value="gastankless" selected>Gas tankless</option><option value="electankless">Electric tankless</option>'
    + '<option value="heatpump">Heat pump hybrid</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var TYPES = {
    gastank: { name: 'Gas tank', gas: true, uef: 0.64, mid: 2450 },
    electank: { name: 'Electric tank', gas: false, uef: 0.92, mid: 1900 },
    gastankless: { name: 'Gas tankless', gas: true, uef: 0.90, mid: 4750 },
    electankless: { name: 'Electric tankless', gas: false, uef: 0.96, mid: 3500 },
    heatpump: { name: 'Heat pump', gas: false, uef: 3.5, mid: 3750 }
  };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function opCost(key, load, gasP, elecP) {
    var t = TYPES[key];
    return t.gas ? load / t.uef / 29.3 * gasP : load / t.uef * elecP;
  }

  function calc() {
    var load = val('.ta-load'), gasP = val('.ta-gas'), elecP = val('.ta-elec');
    var a = root.querySelector('.ta-a').value, b = root.querySelector('.ta-b').value;
    if (load <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your household usage</div>';
      return;
    }
    var oa = opCost(a, load, gasP, elecP), ob = opCost(b, load, gasP, elecP);
    var cheaper = oa <= ob ? a : b;
    var diff = Math.abs(oa - ob), prem = Math.abs(TYPES[b].mid - TYPES[a].mid);
    resultEl.innerHTML = '<div class="ta-embed-big">' + fmt(Math.min(oa, ob)) + '/yr</div>'
      + '<div class="ta-embed-sub">' + TYPES[cheaper].name + ' is cheaper to run by ' + fmt(diff) + ' a year</div>'
      + '<div class="ta-embed-rows">'
      + '<div class="ta-embed-row"><span class="k">' + TYPES[a].name + ' operating</span><span class="v">' + fmt(oa) + '/yr</span></div>'
      + '<div class="ta-embed-row"><span class="k">' + TYPES[b].name + ' operating</span><span class="v">' + fmt(ob) + '/yr</span></div>'
      + '<div class="ta-embed-row"><span class="k">Upfront difference</span><span class="v">' + fmt(prem) + '</span></div>'
      + '<div class="ta-embed-row"><span class="k">Payback on upgrade</span><span class="v">' + (diff > 0 ? (prem / diff).toFixed(1) + ' yrs' : '—') + '</span></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.waterHeaterCost = { recalc: calc };
})();
