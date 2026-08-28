/*!
 * ToolAspect Windshield Replacement Cost Calculator Embed
 * Install: <div id="ta-windshield-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/windshield-replacement-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-windshield-cost-calculator';
  var BASE = 'https://toolaspect.com/windshield-replacement-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;gap:8px;font-size:.85rem;margin-top:8px}'
    + '.ta-embed-check input{width:16px;height:16px;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'windshield-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="windshield-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Windshield Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Replacement or repair, with insurance math</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Vehicle type</label><select class="ta-veh">'
    + '<option value="compact">Compact car</option><option value="sedan" selected>Sedan / crossover</option>'
    + '<option value="truck">SUV / pickup</option><option value="luxury">Luxury / European</option>'
    + '<option value="ev">EV / camera-heavy</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Glass</label><select class="ta-glass"><option value="am" selected>Aftermarket</option><option value="oem">OEM</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Deductible ($)</label><input type="number" class="ta-ded" value="250" min="0" step="50"></div>'
    + '</div>'
    + '<div class="ta-embed-check"><input type="checkbox" class="ta-adas" checked><span>ADAS camera on glass (add recalibration)</span></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var BASE_RANGES = { compact: [250, 450], sedan: [300, 550], truck: [350, 700], luxury: [700, 2000], ev: [600, 1500] };

  function calc() {
    var veh = root.querySelector('.ta-veh').value;
    var oem = root.querySelector('.ta-glass').value === 'oem';
    var adas = root.querySelector('.ta-adas').checked;
    var ded = parseFloat(root.querySelector('.ta-ded').value) || 0;
    var r = BASE_RANGES[veh];
    var lo = r[0] * (oem ? 1.4 : 1);
    var hi = r[1] * (oem ? 1.4 : 1);
    if (adas) { lo += 150; hi += 500; }
    var tot = (lo + hi) / 2;
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(tot).toLocaleString() + '</div>'
      + '<div class="ta-embed-sub">Typical range $' + Math.round(lo).toLocaleString() + ' – $' + Math.round(hi).toLocaleString() + '</div>'
      + '<div class="ta-embed-sub">With a $' + ded + ' deductible you pay $' + Math.round(Math.min(tot, ded)).toLocaleString()
      + ' · insurance pays $' + Math.round(Math.max(0, tot - ded)).toLocaleString() + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.windshieldCostCalculator = { recalc: calc };
})();
