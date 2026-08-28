/*!
 * ToolAspect Car AC Repair Cost Calculator Embed
 * Install: <div id="ta-car-ac-repair-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/car-ac-repair-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-car-ac-repair-cost-calculator';
  var BASE = 'https://toolaspect.com/car-ac-repair-cost-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'car-ac-repair-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="car-ac-repair-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Car AC Repair Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Recharge vs leak vs compressor, priced live</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Repair</label><select class="ta-svc">'
    + '<option value="recharge" selected>Recharge</option>'
    + '<option value="leakdiag">Leak diagnosis</option>'
    + '<option value="oring">Seal / hose repair</option>'
    + '<option value="compressor">Compressor</option>'
    + '<option value="fullres">Full restore</option>'
    + '<option value="condenser">Condenser</option>'
    + '<option value="evaporator">Evaporator</option>'
    + '<option value="blower">Blower motor</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Refrigerant</label><select class="ta-ref">'
    + '<option value="r134a" selected>R-134a</option><option value="r1234yf">R-1234yf</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Rate ($/hr)</label><input type="number" class="ta-rate" value="120" min="40" max="400" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var SVC = {
    recharge: { p: [45, 90], h: [0.5, 1], refrig: true },
    leakdiag: { p: [25, 60], h: [1, 2.5] },
    oring: { p: [40, 180], h: [1, 2.5] },
    compressor: { p: [450, 900], h: [2.5, 4.5] },
    fullres: { p: [650, 1200], h: [4, 6.5] },
    condenser: { p: [180, 450], h: [1.5, 3] },
    evaporator: { p: [150, 500], h: [6, 10] },
    blower: { p: [80, 250], h: [1, 2], noRef: true }
  };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var s = SVC[val('.ta-svc')];
    var yf = val('.ta-ref') === 'r1234yf';
    var rate = num('.ta-rate');
    if (!s || rate <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Pick a repair and rate</div>';
      return;
    }
    var pLo = s.p[0], pHi = s.p[1];
    if (s.refrig && yf) { pLo = 160; pHi = 320; }
    else if (yf && !s.noRef) { pLo += 75; pHi += 180; }
    var lo = pLo + s.h[0] * rate, hi = pHi + s.h[1] * rate;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">parts ' + money(pLo) + '–' + money(pHi) + ' + ' + s.h[0] + '–' + s.h[1] + ' hrs × $' + rate + '/hr' + (yf ? ' · R-1234yf' : '') + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Midpoint</div><div class="rv">' + money((lo + hi) / 2) + '</div></div>'
      + '<div><div class="rl">Labor share</div><div class="rv">' + money(s.h[0] * rate) + ' – ' + money(s.h[1] * rate) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.carAcRepairCostCalculator = { recalc: calc };
})();
