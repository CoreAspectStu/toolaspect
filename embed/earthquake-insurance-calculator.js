/*!
 * ToolAspect Earthquake Insurance Calculator Embed
 * Install: <div id="ta-earthquake-insurance-calculator"></div>
 *          <script src="https://toolaspect.com/embed/earthquake-insurance-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-earthquake-insurance-calculator';
  var BASE = 'https://toolaspect.com/earthquake-insurance-calculator/';

  var STATE_RATE = { CA: 2.90, WA: 1.75, OR: 1.45 };
  var STATE_NAMES = { CA: 'California', WA: 'Washington', OR: 'Oregon' };
  var DED_FACTOR = { '5': 1.00, '10': 0.86, '15': 0.76, '20': 0.69, '25': 0.63 };
  var CONSTRUCTION_FACTOR = { wood: 1.00, steel: 1.10, reinforced: 1.30, unmasonry: 1.75 };
  var AGE_FACTOR = { new: 0.85, '1980s': 0.95, mid: 1.00, pre1940: 1.25 };
  var ZONE_FACTOR = { low: 0.70, moderate: 1.00, high: 1.45 };

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
    + '.ta-embed-warn{color:#dc2626;font-weight:600}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'earthquake-insurance-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="earthquake-insurance-calculator"]')) {
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
    + '<div class="ta-embed-title">Earthquake Insurance Calculator</div>'
    + '<div class="ta-embed-subtitle">CA, WA &amp; OR premium estimate, with the out-of-pocket deductible</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state">'
    + '<option value="CA" selected>California</option><option value="WA">Washington</option><option value="OR">Oregon</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Dwelling coverage ($)</label><input type="number" class="ta-dw" value="500000" min="50000" step="10000"></div>'
    + '<div class="ta-embed-form-group"><label>Deductible</label><select class="ta-ded">'
    + '<option value="5">5%</option><option value="10">10%</option><option value="15" selected>15%</option>'
    + '<option value="20">20%</option><option value="25">25%</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Construction</label><select class="ta-cons">'
    + '<option value="wood" selected>Wood frame</option><option value="steel">Steel frame</option>'
    + '<option value="reinforced">Reinforced masonry</option><option value="unmasonry">Unreinforced masonry</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Year built</label><select class="ta-age">'
    + '<option value="new">1990+</option><option value="1980s">1980-1989</option>'
    + '<option value="mid" selected>1940-1979</option><option value="pre1940">Pre-1940</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Seismic area</label><select class="ta-zone">'
    + '<option value="low">Low</option><option value="moderate" selected>Moderate</option><option value="high">High</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var st = root.querySelector('.ta-state').value;
    var dw = parseFloat(root.querySelector('.ta-dw').value) || 0;
    var ded = root.querySelector('.ta-ded').value;
    var cons = root.querySelector('.ta-cons').value;
    var age = root.querySelector('.ta-age').value;
    var zone = root.querySelector('.ta-zone').value;
    if (dw <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your dwelling coverage</div>';
      return;
    }
    var premium = dw / 1000 * STATE_RATE[st] * ZONE_FACTOR[zone] * CONSTRUCTION_FACTOR[cons] * AGE_FACTOR[age] * DED_FACTOR[ded];
    var oop = dw * parseFloat(ded) / 100;
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(premium).toLocaleString('en-US') + '/yr</div>'
      + '<div class="ta-embed-sub">$' + (premium / 12).toFixed(2) + ' per month</div>'
      + '<div class="ta-embed-sub">You pay the first <strong class="ta-embed-warn">$' + Math.round(oop).toLocaleString('en-US') + '</strong> of repairs (' + ded + '% deductible)</div>'
      + '<div class="ta-embed-sub">' + STATE_NAMES[st] + ' state-average rate model. Your quote varies by zip and insurer.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.earthquakeInsuranceCalculator = { recalc: calc };
})();
