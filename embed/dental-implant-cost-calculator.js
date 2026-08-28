/*!
 * ToolAspect Dental Implant Cost Calculator Embed
 * Install: <div id="ta-dental-implant-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dental-implant-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dental-implant-cost-calculator';
  var BASE = 'https://toolaspect.com/dental-implant-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;font-size:.85rem;color:var(--ta-text);cursor:pointer;margin-bottom:8px}'
    + '.ta-embed-check input{width:auto;margin-right:6px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dental-implant-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dental-implant-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Dental Implant Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">2025 national ranges, adjusted by state</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Procedure</label><select class="ta-proc">'
    + '<option value="single">Single tooth implant</option>'
    + '<option value="bridge">3-tooth implant bridge</option>'
    + '<option value="ao4">All-on-4 arch (acrylic)</option>'
    + '<option value="ao4z">All-on-4 arch (zirconia)</option>'
    + '<option value="full">Full mouth (both arches)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>State price level</label><select class="ta-state">'
    + '<option value="1.00">National average</option>'
    + '<option value="1.22">California / New York</option>'
    + '<option value="1.15">CT / NJ / WA (high)</option>'
    + '<option value="1.05">CO / IL (mid-high)</option>'
    + '<option value="1.02">Florida</option>'
    + '<option value="0.96">TX / OH / AZ (mid-low)</option>'
    + '<option value="0.90">TN / OK / UT (low)</option>'
    + '</select></div>'
    + '</div>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-ex" checked> Tooth extraction ($75-$650)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-graft" checked> Bone graft ($300-$800)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-sed"> IV sedation ($500-$1,000)</label>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var PROC={single:[3000,6000],bridge:[6000,12000],ao4:[15000,30000],ao4z:[20000,35000],full:[36000,70000]};
  function fmt(n){return '$'+Math.round(n).toLocaleString('en-US');}

  function calc() {
    var base = PROC[root.querySelector('.ta-proc').value];
    var m = parseFloat(root.querySelector('.ta-state').value);
    var aLow = 0, aHigh = 0;
    if (root.querySelector('.ta-ex').checked) { aLow += 75; aHigh += 650; }
    if (root.querySelector('.ta-graft').checked) { aLow += 300; aHigh += 800; }
    if (root.querySelector('.ta-sed').checked) { aLow += 500; aHigh += 1000; }
    var lo = base[0] * m + aLow, hi = base[1] * m + aHigh;
    var ins = Math.min(1500, base[0] * m * 0.5);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + fmt(lo) + ' – ' + fmt(hi) + '</div>'
      + '<div class="ta-embed-sub">Estimated all-in cost (procedure + add-ons)</div>'
      + '<div class="ta-embed-sub">Typical dental PPO chips in up to ' + fmt(Math.max(ins, 0)) + ' this plan year</div>'
      + '<div class="ta-embed-sub">Estimate only — not medical advice; get 2-3 consults</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dentalImplantCostCalculator = { recalc: calc };
})();
