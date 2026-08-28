/*!
 * ToolAspect Pet Shipping Cost Calculator Embed
 * Install: <div id="ta-pet-shipping-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/pet-shipping-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pet-shipping-cost-calculator';
  var BASE = 'https://toolaspect.com/pet-shipping-cost-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'pet-shipping-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pet-shipping-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Pet Shipping Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Ground, cabin, and air cargo rates by distance + size</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Mode</label><select class="ta-mode">'
    + '<option value="shared" selected>Shared ground</option><option value="private">Private ground</option>'
    + '<option value="cabin">In-cabin flight</option><option value="cargo">Air cargo</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Distance (mi)</label><input type="number" class="ta-miles" value="1250" min="10" max="4000" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Pet size</label><select class="ta-size">'
    + '<option value="0.90">Under 20 lb</option><option value="1.00">20–50 lb</option>'
    + '<option value="1.15" selected>50–80 lb</option><option value="1.30">80+ lb</option></select></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var TIERS = [[150, 2.20, 3.50], [500, 1.10, 1.80], [1000, 0.75, 1.25], [1500, 0.60, 1.00], [2500, 0.45, 0.80], [Infinity, 0.35, 0.65]];
  var CARGO = { small: [500, 900], medium: [700, 1300], large: [900, 2000], xl: [1200, 2500] };
  var SIZEKEYS = { 0.90: 'small', 1.00: 'medium', 1.15: 'large', 1.30: 'xl' };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n + 1e-6).toLocaleString('en-US'); }
  function tierRate(miles) { for (var i = 0; i < TIERS.length; i++) if (miles <= TIERS[i][0]) return [TIERS[i][1], TIERS[i][2]]; }

  function calc() {
    var mode = val('.ta-mode'), miles = num('.ta-miles');
    var sizeF = parseFloat(val('.ta-size'));
    var sk = SIZEKEYS[sizeF];
    var lo, hi, sub, perMi;
    var r = tierRate(miles);
    var sLo = miles * r[0] * sizeF, sHi = miles * r[1] * sizeF;
    if (mode === 'cabin') {
      lo = 95; hi = 150; perMi = 'flat fee, each way'; sub = 'in-cabin · pets under ~20 lb';
    } else if (mode === 'cargo') {
      lo = CARGO[sk][0]; hi = CARGO[sk][1]; perMi = 'size-banded'; sub = 'domestic air cargo · ' + sk + ' pet';
    } else if (mode === 'private') {
      lo = sLo * 2.0; hi = sHi * 2.3; perMi = '$' + (lo / miles).toFixed(2) + ' – $' + (hi / miles).toFixed(2);
      sub = 'private door-to-door · ' + sk + ' pet';
    } else {
      lo = sLo; hi = sHi; perMi = '$' + (lo / miles).toFixed(2) + ' – $' + (hi / miles).toFixed(2);
      sub = 'shared ground · ' + sk + ' pet · health cert ($100–$300) + crate ($50–$220) extra';
    }
    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">' + sub + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Per mile</div><div class="rv">' + perMi + '</div></div>'
      + '<div><div class="rl">Cheaper alternative</div><div class="rv">'
      + (mode === 'shared' ? 'shared is cheapest' : money(sLo) + ' – ' + money(sHi) + ' shared') + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.petShippingCostCalculator = { recalc: calc };
})();
