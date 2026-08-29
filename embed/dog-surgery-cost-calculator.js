/*!
 * ToolAspect Dog Surgery Cost Calculator Embed
 * Install: <div id="ta-dog-surgery-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-surgery-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-surgery-cost-calculator';
  var BASE = 'https://toolaspect.com/dog-surgery-cost-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-row{display:flex;justify-content:space-between;font-size:.85rem;padding:6px 0;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-row:last-child{border-bottom:none}'
    + '.ta-embed-note{font-size:.72rem;color:var(--ta-muted);line-height:1.5;margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-surgery-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-surgery-cost-calculator"]')) {
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

  var PROCS = {
    'TPLO (cruciate / ACL)': [[3000, 4500], [3800, 5500], [4500, 6500], [5000, 7500]],
    'Lateral suture repair': [[1200, 2000], [1800, 2800], [2200, 3500], [2500, 4000]],
    'Patella luxation repair': [[1500, 3000], [1800, 3500], [2500, 4500], [3000, 5000]],
    'Foreign body (surgical)': [[2000, 3500], [2000, 4500], [2500, 5000], [2500, 5500]],
    'Foreign body (endoscopy)': [[800, 2000], [1000, 2200], [1200, 2500], [1200, 2500]],
    'Bloat (GDV)': [[2500, 4500], [2500, 4500], [3000, 5500], [3500, 6000]],
    'Hip replacement (THR)': [[3500, 5000], [4000, 6000], [4500, 7000], [5000, 7000]],
    'Limb amputation': [[1500, 2500], [1800, 3000], [2000, 3500], [2500, 4000]],
    'Mass / lump removal': [[250, 800], [300, 1000], [400, 1200], [500, 1500]],
    'Dental with extractions': [[500, 1000], [600, 1200], [700, 1500], [700, 1500]],
    'C-section': [[1500, 3000], [1800, 3500], [2000, 4000], [2500, 4500]]
  };

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  var procOptions = Object.keys(PROCS).map(function (k) {
    return '<option value="' + k + '"' + (k === 'TPLO (cruciate / ACL)' ? ' selected' : '') + '>' + k + '</option>';
  }).join('');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Dog Surgery Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Procedure prices by dog size and region, with insurance math</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Procedure</label><select class="ta-proc">' + procOptions + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Dog size</label><select class="ta-size">'
    + '<option value="0">Small (&lt;30 lb)</option><option value="1">Medium (30–60)</option>'
    + '<option value="2" selected>Large (60–90)</option><option value="3">Giant (90+)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Region</label><select class="ta-region">'
    + '<option value="0.85">Low-cost area</option><option value="1" selected>National average</option>'
    + '<option value="1.25">High-cost metro</option><option value="1.4">Top metro</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Insurance?</label><select class="ta-insured">'
    + '<option value="no" selected>No</option><option value="yes">Yes</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Deductible ($) · reimb %</label><div style="display:flex;gap:6px">'
    + '<input type="number" class="ta-ded" value="500" min="0" step="50" style="min-width:0">'
    + '<select class="ta-reimb"><option value="0.7">70%</option><option value="0.8">80%</option><option value="0.9" selected>90%</option></select>'
    + '</div></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-card ta-details"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var detailsEl = root.querySelector('.ta-details');

  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var p = PROCS[root.querySelector('.ta-proc').value];
    var s = +root.querySelector('.ta-size').value;
    var region = parseFloat(root.querySelector('.ta-region').value);
    var lo = p[s][0] * region, hi = p[s][1] * region;
    // typical add-ons: exam + labs + rads + pain meds mid ≈ $260
    var addonMid = 260;
    var mid = (lo + hi) / 2 + addonMid;
    resultEl.innerHTML = '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">procedure alone · all-in with typical workup ≈ ' + money((lo + hi) / 2 + addonMid) + '</div>';
    var html = '<div class="ta-embed-row"><span>Typical workup add-ons</span><strong>≈ ' + money(addonMid) + '</strong></div>';
    if (root.querySelector('.ta-insured').value === 'yes') {
      var ded = parseFloat(root.querySelector('.ta-ded').value) || 0;
      var pct = parseFloat(root.querySelector('.ta-reimb').value) || 0.9;
      var reimb = Math.max(0, mid - ded) * pct;
      html += '<div class="ta-embed-row"><span>Insurance reimburses</span><strong>' + money(reimb) + '</strong></div>'
        + '<div class="ta-embed-row"><span>You pay</span><strong>' + money(mid - reimb) + '</strong></div>';
    } else {
      html += '<div class="ta-embed-row"><span>You pay (no insurance)</span><strong>' + money(mid) + ' (midpoint)</strong></div>';
    }
    html += '<div class="ta-embed-note">Estimates only — get a written all-in quote from your vet. Insurance covers conditions that began after the policy started.</div>';
    detailsEl.innerHTML = html;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogSurgeryCost = { recalc: calc };
})();
