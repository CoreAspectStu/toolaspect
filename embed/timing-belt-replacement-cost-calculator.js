/*!
 * ToolAspect Timing Belt Replacement Cost Calculator Embed
 * Install: <div id="ta-timing-belt-replacement-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/timing-belt-replacement-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-timing-belt-replacement-cost-calculator';
  var BASE = 'https://toolaspect.com/timing-belt-replacement-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;gap:6px;font-size:.82rem;color:var(--ta-text);margin-top:8px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-warn{background:rgba(220,38,38,.06);border:1px solid rgba(220,38,38,.3);border-radius:8px;padding:10px 12px;font-size:.78rem;color:var(--ta-text);text-align:left;margin-top:12px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'timing-belt-replacement-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="timing-belt-replacement-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Timing Belt Replacement Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Parts + flat-rate labor by engine, with water pump and tensioner add-ons</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Engine</label><select class="ta-engine">'
    + '<option value="cyl4" selected>4-cylinder</option>'
    + '<option value="v6">V6 / transverse</option>'
    + '<option value="v8">V8 / turbo</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Shop type</label><select class="ta-shop">'
    + '<option value="115">Independent ($90–$150/hr)</option>'
    + '<option value="130" selected>National median ($130/hr)</option>'
    + '<option value="155">Dealership ($120–$190/hr)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Rate ($/hr)</label><input type="number" class="ta-rate" value="130" min="40" max="400" step="5"></div>'
    + '</div>'
    + '<label class="ta-check" style="display:flex;align-items:center;gap:6px;font-size:.82rem;margin-top:8px"><input type="checkbox" class="ta-pump" checked> Water pump (+$80–$250, +0.5–1.0 hr)</label>'
    + '<label class="ta-check" style="display:flex;align-items:center;gap:6px;font-size:.82rem;margin-top:6px"><input type="checkbox" class="ta-tensioner" checked> Tensioner &amp; idlers (+$60–$180, +0.3–0.5 hr)</label>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var ENG = { cyl4: [150, 350, 2.5, 4.5], v6: [250, 500, 3.5, 5.5], v8: [350, 700, 4.5, 7.0] };
  var PUMP = [80, 250, 0.5, 1.0], TENS = [60, 180, 0.3, 0.5];

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function chk(sel) { var el = root.querySelector(sel); return el ? el.checked : false; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var eng = ENG[val('.ta-engine')];
    var rate = num('.ta-rate');
    if (!eng || rate <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Pick an engine and rate</div>';
      return;
    }
    var items = [eng];
    if (chk('.ta-pump')) items.push(PUMP);
    if (chk('.ta-tensioner')) items.push(TENS);
    var pl = 0, ph = 0, hl = 0, hh = 0;
    items.forEach(function (x) { pl += x[0]; ph += x[1]; hl += x[2]; hh += x[3]; });
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(pl + hl * rate) + ' – ' + money(ph + hh * rate) + '</div>'
      + '<div class="ta-embed-sub">parts ' + money(pl) + '–' + money(ph) + ' + ' + hl.toFixed(1) + '–' + hh.toFixed(1) + ' hrs × $' + rate + '/hr</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Belt only</div><div class="rv">' + money(eng[0] + eng[2] * rate) + ' – ' + money(eng[1] + eng[3] * rate) + '</div></div>'
      + '<div><div class="rl">Break a belt on an interference engine</div><div class="rv">$1,500+ damage</div></div>'
      + '</div>'
      + '<div class="ta-embed-warn"><strong>Interference engines</strong> (most Honda, Nissan, Subaru, VW/Audi): a broken timing belt bends valves. Replace every 60,000–105,000 miles — check your owner\'s manual.</div>';
  }

  root.querySelector('.ta-shop').addEventListener('change', function () {
    root.querySelector('.ta-rate').value = this.value;
    calc();
  });
  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.timingBeltReplacementCostCalculator = { recalc: calc };
})();
