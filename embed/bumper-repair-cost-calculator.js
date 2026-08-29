/*!
 * ToolAspect Bumper Repair Cost Calculator Embed
 * Install: <div id="ta-bumper-repair-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/bumper-repair-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-bumper-repair-cost-calculator';
  var BASE = 'https://toolaspect.com/bumper-repair-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-check{display:flex;align-items:center;font-size:.82rem;color:var(--ta-text);cursor:pointer;margin-top:4px}'
    + '.ta-embed-check input{width:auto;margin-right:6px;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.4rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-note{text-align:left;background:var(--ta-bg);border-radius:8px;padding:12px 14px;margin-top:14px;font-size:.82rem;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'bumper-repair-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="bumper-repair-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Bumper Repair Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Scuff, scratch, crack, or replacement — estimate before the shop quote</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Damage</label><select class="ta-sev">'
    + '<option value="scuff">Light scuff / paint transfer</option>'
    + '<option value="deep" selected>Deep scratch to primer</option>'
    + '<option value="crack">Cracked or dented cover</option>'
    + '<option value="replace">Torn / broken tabs — replace</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Vehicle class</label><select class="ta-cls">'
    + '<option value="std" selected>Sedan / compact</option>'
    + '<option value="suv">SUV / pickup / van</option>'
    + '<option value="lux">Luxury / EV import</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Paint finish</label><select class="ta-paint">'
    + '<option value="solid">Solid</option>'
    + '<option value="metallic" selected>Metallic / pearl</option>'
    + '<option value="tri">Tri-coat</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Labor rate ($/hr)</label><input type="number" class="ta-rate" value="90" min="40" max="250" step="5"></div>'
    + '</div>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-oem"> OEM parts (replacement)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-adas"> Parking sensors / camera (+recalibration)</label>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">&nbsp;</div>'
    + '<div class="ta-embed-note ta-verdict"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var SEV = { scuff: { h: 1.5, m: 60 }, deep: { h: 2.5, m: 90 }, crack: { h: 3.5, m: 140 } };
  var PARTS = { std: 325, suv: 450, lux: 950 };
  var CMULT = { std: 1, suv: 1.15, lux: 1.5 };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var sev = root.querySelector('.ta-sev').value;
    var cls = root.querySelector('.ta-cls').value;
    var paint = root.querySelector('.ta-paint').value;
    var rate = Math.max(20, val('.ta-rate') || 90);
    var oem = root.querySelector('.ta-oem').checked;
    var adas = root.querySelector('.ta-adas').checked;
    var cm = CMULT[cls];
    var paintAdd = paint === 'metallic' ? 75 : paint === 'tri' ? 175 : 0;
    var est, parts, mat, hrs;
    if (sev === 'replace') {
      parts = PARTS[cls] * (oem ? 1.8 : 1);
      hrs = 5.5 * cm;
      mat = 150 * cm + paintAdd;
      est = parts + hrs * rate + mat + (adas ? 250 : 0);
    } else {
      var s = SEV[sev];
      hrs = s.h * cm;
      mat = s.m * cm + paintAdd;
      parts = 0;
      est = hrs * rate + mat + (adas ? 250 : 0);
    }
    root.querySelector('.ta-embed-big').textContent = fmt(est);
    root.querySelector('.ta-embed-sub').textContent = 'Typical range: ' + fmt(est * 0.85) + ' – ' + fmt(est * 1.25);
    var v = (sev === 'replace')
      ? 'Cover needs replacing. ' + hrs.toFixed(1) + ' h labor, ' + fmt(parts) + ' parts' + (oem ? ' (OEM)' : ' (aftermarket)') + ', ' + fmt(mat) + ' paint & materials' + (adas ? ', +$250 ADAS recalibration' : '') + '.'
      : 'Cover is intact — repair beats replacement here, saving roughly ' + fmt(Math.max(0, PARTS[cls] + 5.5 * cm * rate + 150 * cm + paintAdd - est)) + ' vs a full replacement. ' + hrs.toFixed(1) + ' h labor, ' + fmt(mat) + ' materials & paint.';
    root.querySelector('.ta-verdict').textContent = v + ' Estimate, not a quote — verify hidden damage behind the cover after any real impact.';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.bumperRepairCostCalculator = { recalc: calc };
})();
