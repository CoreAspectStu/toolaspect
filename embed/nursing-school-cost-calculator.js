/*!
 * ToolAspect Nursing School Cost Calculator Embed
 * Install: <div id="ta-nursing-school-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/nursing-school-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-nursing-school-cost-calculator';
  var BASE = 'https://toolaspect.com/nursing-school-cost-calculator/';

  var PROG = {
    adn_cc: { label: 'ADN — community college', cr: 70, rate: 200, sems: 4, fees: 500, sup: 2500, lic: 450 },
    adn_priv: { label: 'ADN — private', cr: 70, rate: 550, sems: 4, fees: 800, sup: 2500, lic: 450 },
    bsn_pub_is: { label: 'BSN — public in-state', cr: 120, rate: 400, sems: 8, fees: 700, sup: 3000, lic: 450 },
    bsn_pub_oos: { label: 'BSN — public out-of-state', cr: 120, rate: 900, sems: 8, fees: 700, sup: 3000, lic: 450 },
    bsn_priv: { label: 'BSN — private', cr: 120, rate: 1400, sems: 8, fees: 1000, sup: 3000, lic: 450 },
    absn: { label: 'ABSN — accelerated', cr: 60, rate: 900, sems: 3, fees: 900, sup: 2000, lic: 450 },
    rnbsn: { label: 'RN-to-BSN — online', cr: 30, rate: 350, sems: 3, fees: 400, sup: 800, lic: 0 },
    msn: { label: 'MSN — NP track', cr: 45, rate: 800, sems: 5, fees: 800, sup: 1500, lic: 0 },
    dnp: { label: 'DNP — post-MSN', cr: 35, rate: 800, sems: 5, fees: 800, sup: 1000, lic: 0 },
    bsn_dnp: { label: 'BSN-to-DNP', cr: 70, rate: 900, sems: 10, fees: 800, sup: 2000, lic: 0 }
  };
  var RN_MEDIAN = 97550;

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
  styleEl.setAttribute('data-ta-embed', 'nursing-school-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="nursing-school-cost-calculator"]')) {
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

  var progOpts = Object.keys(PROG).map(function (k) {
    return '<option value="' + k + '"' + (k === 'adn_cc' ? ' selected' : '') + '>' + PROG[k].label + '</option>';
  }).join('');

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Nursing School Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Total program cost by degree path</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Degree path</label><select class="ta-prog">' + progOpts + '</select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Credits</label><input type="number" class="ta-cr" value="70" min="1" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>$ / credit</label><input type="number" class="ta-rate" value="200" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Semesters</label><input type="number" class="ta-sems" value="4" min="1" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function preset() {
    var p = PROG[root.querySelector('.ta-prog').value];
    root.querySelector('.ta-cr').value = p.cr;
    root.querySelector('.ta-rate').value = p.rate;
    root.querySelector('.ta-sems').value = p.sems;
    calc(p.fees, p.sup, p.lic);
  }

  function calc(fFees, fSup, fLic) {
    var p = PROG[root.querySelector('.ta-prog').value];
    var fees = fFees !== undefined ? fFees : p.fees;
    var sup = fSup !== undefined ? fSup : p.sup;
    var lic = fLic !== undefined ? fLic : p.lic;
    var cr = parseFloat(root.querySelector('.ta-cr').value) || 0;
    var rate = parseFloat(root.querySelector('.ta-rate').value) || 0;
    var sems = parseFloat(root.querySelector('.ta-sems').value) || 0;
    var total = cr * rate + sems * fees + sup + lic;
    var months = total / (RN_MEDIAN / 12);
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(total).toLocaleString('en-US') + '</div>'
      + '<div class="ta-embed-sub">Tuition $' + Math.round(cr * rate).toLocaleString('en-US') + ' + fees $' + Math.round(sems * fees).toLocaleString('en-US') + ' + supplies &amp; licensure $' + (sup + lic).toLocaleString('en-US') + '</div>'
      + '<div class="ta-embed-sub">Equal to ' + months.toFixed(1) + ' months of median RN pay ($97,550/yr, BLS May 2025)</div>'
      + '<div class="ta-embed-sub">Typical mid-range defaults; replace with your program&rsquo;s numbers.</div>';
  }

  root.addEventListener('input', function () { calc(); });
  root.addEventListener('change', function (e) {
    if (e.target.classList.contains('ta-prog')) preset();
    else calc();
  });

  preset();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.nursingSchoolCostCalculator = { recalc: function () { calc(); } };
})();
