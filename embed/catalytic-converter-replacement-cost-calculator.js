/*!
 * ToolAspect Catalytic Converter Replacement Cost Calculator Embed
 * Install: <div id="ta-catalytic-converter-replacement-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/catalytic-converter-replacement-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-catalytic-converter-replacement-cost-calculator';
  var BASE = 'https://toolaspect.com/catalytic-converter-replacement-cost-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'catalytic-converter-replacement-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="catalytic-converter-replacement-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Catalytic Converter Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Parts by vehicle class + labor, theft extras included</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Vehicle class</label><select class="ta-class">'
    + '<option value="compact">Compact</option><option value="sedan" selected>Sedan / small crossover</option>'
    + '<option value="suvmid">Midsize SUV</option><option value="truck">Full-size truck / SUV</option>'
    + '<option value="hybrid">Hybrid</option><option value="luxury">Luxury / performance</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Part type</label><select class="ta-ptype">'
    + '<option value="direct" selected>Direct-fit aftermarket</option><option value="oem">OEM / dealer</option>'
    + '<option value="universal">Universal weld-in</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Emissions</label><select class="ta-carb">'
    + '<option value="1" selected>49-state federal</option><option value="1.4">CARB (CA / NY)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Shop rate ($/hr)</label><input type="number" class="ta-rate" value="120" min="60" max="250" step="5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Scenario</label><select class="ta-scen">'
    + '<option value="planned" selected>Planned replacement</option><option value="theft">Stolen converter</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Deductible ($)</label><input type="number" class="ta-ded" value="500" min="0" step="50"></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var PARTS = { compact: [350, 800], sedan: [450, 1100], suvmid: [500, 1300], truck: [600, 1800], hybrid: [700, 2000], luxury: [1200, 3000] };
  var UNIVERSAL = [100, 450];

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n + 1e-6).toLocaleString('en-US'); }

  function calc() {
    var vc = val('.ta-class'), pt = val('.ta-ptype'), carb = parseFloat(val('.ta-carb'));
    var rate = num('.ta-rate') || 120, scen = val('.ta-scen'), ded = num('.ta-ded');
    var pLo, pHi, hrsLo, hrsHi;
    if (pt === 'universal') { pLo = UNIVERSAL[0]; pHi = UNIVERSAL[1]; hrsLo = 2.5; hrsHi = 4; }
    else {
      var band = PARTS[vc];
      pLo = band[0]; pHi = band[1];
      if (pt === 'oem') { pLo *= 1.5; pHi *= 2.0; }
      if (carb > 1) { pLo *= carb; pHi *= carb; }
      hrsLo = 1; hrsHi = 2;
    }
    var labLo = hrsLo * rate, labHi = hrsHi * rate;
    var totLo = pLo + labLo, totHi = pHi + labHi;
    var theft = scen === 'theft';
    if (theft) { totLo += 230; totHi += 620; } // 2 O2 sensors + exhaust hardware
    var sub = (theft ? 'theft replacement (+sensors &amp; hardware)' : pt === 'oem' ? 'OEM part' : pt === 'universal' ? 'universal weld-in' : 'direct-fit aftermarket')
      + (carb > 1 ? ' · CARB' : '') + ' · ' + money(rate) + '/hr';
    var insNote = theft
      ? 'Insurance pays ' + money(Math.max(0, totLo - ded)) + ' – ' + money(Math.max(0, totHi - ded)) + ' after your ' + money(ded) + ' deductible'
      : 'Parts ' + money(pLo) + '–' + money(pHi) + ' · labor ' + money(labLo) + '–' + money(labHi) + ' (' + hrsLo + '–' + hrsHi + ' hrs)';
    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + money(totLo) + ' – ' + money(totHi) + '</div>'
      + '<div class="ta-embed-sub">' + sub + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Converter part</div><div class="rv">' + money(pLo) + ' – ' + money(pHi) + '</div></div>'
      + '<div><div class="rl">' + (theft ? 'Insurance (comprehensive)' : 'Labor') + '</div><div class="rv">'
      + (theft ? money(Math.max(0, totLo - ded)) + ' – ' + money(Math.max(0, totHi - ded)) : money(labLo) + ' – ' + money(labHi)) + '</div></div>'
      + '</div>'
      + '<div class="ta-embed-sub" style="margin-top:10px">' + insNote + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.catalyticConverterCostCalculator = { recalc: calc };
})();
