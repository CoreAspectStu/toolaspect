/*!
 * ToolAspect Ceramic Coating Cost Calculator Embed
 * Install: <div id="ta-ceramic-coating-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/ceramic-coating-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-ceramic-coating-cost-calculator';
  var BASE = 'https://toolaspect.com/ceramic-coating-cost-calculator/';

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
    + '.ta-embed-form-group input[type="checkbox"]{width:auto}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-check{display:flex;align-items:center;font-size:.85rem;color:var(--ta-text);cursor:pointer}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'ceramic-coating-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="ceramic-coating-cost-calculator"]')) {
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

  var TIERS = {
    diy: { low: 50, high: 100, dur: 1.5, durLabel: '1–2 yrs' },
    entry: { low: 500, high: 800, dur: 2.5, durLabel: '2–3 yrs' },
    pro: { low: 1000, high: 1500, dur: 4, durLabel: '3–5 yrs' },
    premium: { low: 2000, high: 3500, dur: 6, durLabel: '5–7+ yrs' }
  };

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Ceramic Coating Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Package price by vehicle, tier, and region</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Vehicle class</label>'
    + '<select class="ta-vclass">'
    + '<option value="0.90">Compact / hatchback</option>'
    + '<option value="1.00" selected>Sedan / coupe</option>'
    + '<option value="1.15">SUV / crossover</option>'
    + '<option value="1.30">Truck / large SUV</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Package</label>'
    + '<select class="ta-tier">'
    + '<option value="diy">DIY consumer kit</option>'
    + '<option value="entry">Entry pro (1-step)</option>'
    + '<option value="pro" selected>Standard pro (2-step)</option>'
    + '<option value="premium">Premium multi-layer</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Region</label>'
    + '<select class="ta-region">'
    + '<option value="0.90">Lower-cost area</option>'
    + '<option value="1.00" selected>National average</option>'
    + '<option value="1.20">High-cost metro</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label class="ta-embed-check"><input type="checkbox" class="ta-wheels" style="margin-right:6px"> Wheels &amp; calipers</label></div>'
    + '<div class="ta-embed-form-group"><label class="ta-embed-check"><input type="checkbox" class="ta-glass" style="margin-right:6px"> Glass coating</label></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var f = val('.ta-vclass');
    var t = TIERS[root.querySelector('.ta-tier').value];
    var region = val('.ta-region');
    var wheels = root.querySelector('.ta-wheels').checked;
    var glass = root.querySelector('.ta-glass').checked;
    var addLow = (wheels ? 100 : 0) + (glass ? 75 : 0);
    var addHigh = (wheels ? 200 : 0) + (glass ? 150 : 0);
    var isDiy = root.querySelector('.ta-tier').value === 'diy';
    var low = (isDiy ? t.low : t.low * f * region) + addLow;
    var high = (isDiy ? t.high : t.high * f * region) + addHigh;
    var mid = (low + high) / 2;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(mid) + '</div>'
      + '<div class="ta-embed-sub">Range: <strong>' + usd(low) + ' – ' + usd(high) + '</strong></div>'
      + '<div class="ta-embed-sub">Expected durability: <strong>' + t.durLabel + '</strong> · about <strong>'
      + usd(mid / t.dur) + '/yr</strong> of protection</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.ceramicCoatingCostCalculator = { recalc: calc };
})();
