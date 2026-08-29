/*!
 * ToolAspect Vehicle Property Tax Calculator Embed
 * Install: <div id="ta-vehicle-property-tax-calculator"></div>
 *          <script src="https://toolaspect.com/embed/vehicle-property-tax-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-vehicle-property-tax-calculator';
  var BASE = 'https://toolaspect.com/vehicle-property-tax-calculator/';

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
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-extras{margin-top:4px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'vehicle-property-tax-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="vehicle-property-tax-calculator"]')) {
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
    + '<div class="ta-embed-title">Vehicle Property Tax Calculator</div>'
    + '<div class="ta-embed-subtitle">Yearly excise and personal property tax on your car</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>State / Method</label><select class="ta-state">'
    + '<option value="ma" selected>Massachusetts (excise)</option>'
    + '<option value="ri">Rhode Island (repealed 2022)</option>'
    + '<option value="ct">Connecticut (mill rate)</option>'
    + '<option value="me">Maine (excise)</option>'
    + '<option value="va">Virginia (personal property)</option>'
    + '<option value="mo">Missouri (personal property)</option>'
    + '<option value="nc">North Carolina (county)</option>'
    + '<option value="ks">Kansas (1.1%)</option>'
    + '<option value="az">Arizona (VLT)</option>'
    + '<option value="custom">Custom rate</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label class="ta-vlabel">Original MSRP ($)</label><input type="number" class="ta-value" value="28000" min="500" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Vehicle Age (years)</label><select class="ta-age">'
    + '<option value="1" selected>1</option><option value="2">2</option><option value="3">3</option>'
    + '<option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7+</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group ta-extra-slot"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var MA_DEP = [0.90, 0.60, 0.40, 0.25, 0.10];
  var ME_SCH = [24, 17.50, 13.50, 10, 6.50, 4, 3];
  var STATES = {
    ma: { label: 'Massachusetts', vlabel: 'Original MSRP ($)', f: function (v, a, e) { return v * MA_DEP[Math.min(a - 1, 4)] * 0.025; } },
    ri: { label: 'Rhode Island (repealed 2022)', vlabel: 'Current NADA value ($)', f: function () { return 0; } },
    ct: { label: 'Connecticut', vlabel: 'Depreciated retail value ($)', f: function (v, a, e) { return v * 0.70 * (e.mills || 30) / 1000; }, extra: { key: 'mills', label: 'Town Mill Rate', value: 30 } },
    me: { label: 'Maine', vlabel: 'Original MSRP ($)', f: function (v, a) { return v * ME_SCH[Math.min(a - 1, 6)] / 1000; } },
    va: { label: 'Virginia', vlabel: 'NADA assessed value ($)', f: function (v, a, e) { return v * (e.rate || 4.20) / 100 * (1 - (e.relief || 45) / 100); }, extra: { key: 'rate', label: 'Local Rate ($/$100)', value: 4.20 } },
    mo: { label: 'Missouri', vlabel: 'Market value ($)', f: function (v, a, e) { return v / 3 * (e.levy || 7.00) / 100; }, extra: { key: 'levy', label: 'Levy ($/$100 assessed)', value: 7.00 } },
    nc: { label: 'North Carolina', vlabel: 'Vehicle value ($)', f: function (v, a, e) { return v * (e.rate || 0.85) / 100; }, extra: { key: 'rate', label: 'County Rate ($/$100)', value: 0.85 } },
    ks: { label: 'Kansas', vlabel: 'Appraised value ($)', f: function (v) { return v * 0.011; } },
    az: { label: 'Arizona', vlabel: 'Base price ($)', f: function (v, a) { return Math.max(0, v * 0.60 * Math.max(0.20, Math.pow(0.8375, Math.min(a, 25) - 1)) * 0.028); } },
    custom: { label: 'Custom rate', vlabel: 'Taxable value ($)', f: function (v, a, e) { return v * (e.ratio || 100) / 100 * (e.rate || 1.00) / 100; }, extra: { key: 'rate', label: 'Rate ($/$100 assessed)', value: 1.00 } }
  };

  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function renderExtra() {
    var st = STATES[val('.ta-state')];
    var slot = root.querySelector('.ta-extra-slot');
    root.querySelector('.ta-vlabel').textContent = st.vlabel;
    if (st.extra) {
      slot.style.display = '';
      slot.innerHTML = '<label>' + st.extra.label + '</label><input type="number" class="ta-extra" value="' + st.extra.value + '" min="0" step="any">';
    } else {
      slot.style.display = 'none';
      slot.innerHTML = '';
    }
  }

  function calc() {
    var key = val('.ta-state');
    var st = STATES[key];
    var v = num('.ta-value'), a = parseInt(val('.ta-age'), 10) || 1;
    var e = {};
    if (st.extra) e[st.extra.key] = num('.ta-extra');
    if (v <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your vehicle value</div>';
      return;
    }
    var yr = st.f(v, a, e);
    var next = st.f(v, Math.min(a + 1, 25), e);
    var eff = yr / v * 100;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(yr) + '/yr</div>'
      + '<div class="ta-embed-sub">' + st.label + ' &middot; age ' + a + ' &middot; ' + eff.toFixed(2) + '% of value</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Next Year (older car)</div><div class="rv">' + money(next) + '</div></div>'
      + '<div><div class="rl">Estimate only</div><div class="rv" style="font-size:.72rem">verify with your town or DMV</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', function () { renderExtra(); calc(); });
  renderExtra();
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.vehiclePropertyTaxCalculator = { recalc: calc };
})();
