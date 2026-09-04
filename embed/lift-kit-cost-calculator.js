/*!
 * ToolAspect Lift Kit Cost Calculator Embed
 * Install: <div id="ta-lift-kit-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/lift-kit-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-lift-kit-cost-calculator';
  var BASE = 'https://toolaspect.com/lift-kit-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;gap:7px;font-size:.82rem;color:var(--ta-text);margin-top:2px}'
    + '.ta-embed-check input{width:auto;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-range,.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'lift-kit-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="lift-kit-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Lift Kit Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Leveling, body, or 2/4/6-in suspension lift by truck and shop rate</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Lift type</label><select class="ta-type">'
    + '<option value="leveling">Leveling kit</option><option value="body">Body lift</option>'
    + '<option value="susp2">Suspension 2 in</option><option value="susp4" selected>Suspension 4 in</option>'
    + '<option value="susp6">Suspension 6 in+</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Truck</label><select class="ta-truck">'
    + '<option value="jeep">Jeep Wrangler</option><option value="halfton" selected>Half-ton</option>'
    + '<option value="hd">Heavy-duty</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Parts tier</label><select class="ta-tier">'
    + '<option value="budget">Budget</option><option value="mid" selected>Mid</option><option value="premium">Premium</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Shop rate ($/hr)</label><input type="number" class="ta-rate" value="110" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Install</label><select class="ta-install">'
    + '<option value="shop" selected>Shop</option><option value="diy">DIY</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Alignment ($)</label><input type="number" class="ta-align" value="125" min="0" step="5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-tires"> Tires +$1,200</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-wheels"> Wheels +$1,000</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-speedo"> Speedo recal +$175</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var PARTS = {
    leveling: { jeep: [90, 280], halfton: [100, 400], hd: [150, 500], hrs: 3 },
    body: { jeep: [130, 550], halfton: [150, 700], hd: [200, 850], hrs: 5 },
    susp2: { jeep: [340, 1000], halfton: [400, 1200], hd: [550, 1500], hrs: 8 },
    susp4: { jeep: [600, 1700], halfton: [700, 2000], hd: [950, 2600], hrs: 12 },
    susp6: { jeep: [1300, 4200], halfton: [1500, 5000], hd: [2000, 6300], hrs: 15 }
  };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var t = PARTS[val('.ta-type')], k = val('.ta-truck'), tier = val('.ta-tier');
    var band = t[k];
    var parts = tier === 'budget' ? band[0] : tier === 'premium' ? band[1] : (band[0] + band[1]) / 2;
    var rate = num('.ta-rate'), align = num('.ta-align');
    var diy = val('.ta-install') === 'diy';
    var labor = diy ? 0 : t.hrs * rate;
    var addons = align;
    if (root.querySelector('.ta-tires').checked) addons += 1200;
    if (root.querySelector('.ta-wheels').checked) addons += 1000;
    if (root.querySelector('.ta-speedo').checked) addons += 175;
    var total = parts + labor + addons;

    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(total) + '</div>'
      + '<div class="ta-embed-sub">' + (diy ? 'DIY install' : money(rate) + '/hr shop labor') + ' · includes alignment and add-ons</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Kit / parts</div><div class="rv">' + money(parts) + '</div></div>'
      + '<div><div class="rl">Labor (' + t.hrs + ' hrs)</div><div class="rv">' + (diy ? 'DIY' : money(labor)) + '</div></div>'
      + '<div><div class="rl">Add-ons</div><div class="rv">' + money(addons) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.liftKitCostCalculator = { recalc: calc };
})();
