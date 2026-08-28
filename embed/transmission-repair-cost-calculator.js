/*!
 * ToolAspect Transmission Repair Cost Calculator Embed
 * Install: <div id="ta-transmission-repair-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/transmission-repair-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-transmission-repair-cost-calculator';
  var BASE = 'https://toolaspect.com/transmission-repair-cost-calculator/';

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'transmission-repair-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="transmission-repair-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Transmission Repair Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Rebuild vs replace vs used, against your car’s value</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Vehicle</label><select class="ta-class">'
    + '<option value="1" selected>Car / sedan</option><option value="1.1">SUV / van</option>'
    + '<option value="1.15">Pickup</option><option value="1.6">Luxury</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Transmission</label><select class="ta-type">'
    + '<option value="auto" selected>Automatic</option><option value="manual">Manual</option><option value="cvt">CVT</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Repair path</label><select class="ta-path">'
    + '<option value="minor">Minor repair</option><option value="used">Used unit</option>'
    + '<option value="rebuild" selected>Rebuild</option><option value="reman">Remanufactured</option><option value="new">New OEM</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Car value after repair ($)</label><input type="number" class="ta-val" value="9000" min="0" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var RANGE = {
    minor: [150, 1200, 500],
    used: [1200, 2800, 1900],
    rebuild: [1500, 3500, 2400],
    reman: [3000, 5000, 3900],
    cvtReman: [3500, 5500, 4300],
    nw: [4000, 8000, 5600]
  };

  function money(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calc() {
    var mult = parseFloat(root.querySelector('.ta-class').value) || 1;
    var ttype = root.querySelector('.ta-type').value;
    var path = root.querySelector('.ta-path').value;
    var carVal = parseFloat(root.querySelector('.ta-val').value) || 0;
    var key = path;
    if (ttype === 'cvt' && (path === 'rebuild' || path === 'reman')) key = 'cvtReman';
    if (ttype === 'auto' && path === 'new') key = 'nw';
    var r = RANGE[key];
    var lo = Math.round(r[0] * mult / 50) * 50;
    var hi = Math.round(r[1] * mult / 50) * 50;
    var mid = Math.round(r[2] * mult);
    var html = '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">installed, national range · typical midpoint ' + money(mid) + '</div>';
    if (carVal > 0) {
      var pct = mid / carVal * 100;
      var verdict = pct <= 30 ? 'Repair — clearly worth it'
        : pct <= 50 ? 'Usually repair'
        : pct <= 75 ? 'Borderline — used unit or new car'
        : 'Repair exceeds value — replace the car';
      html += '<div class="ta-embed-sub"><strong>' + Math.round(pct) + '% of car value</strong> — ' + verdict + '</div>';
    }
    resultEl.innerHTML = html;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.transmissionRepairCostCalculator = { recalc: calc };
})();
