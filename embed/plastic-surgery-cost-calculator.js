/*!
 * ToolAspect Plastic Surgery Cost Calculator Embed
 * Install: <div id="ta-plastic-surgery-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/plastic-surgery-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-plastic-surgery-cost-calculator';
  var BASE = 'https://toolaspect.com/plastic-surgery-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}'
    + '@media(max-width:520px){.ta-embed-grid{grid-template-columns:1fr}}'
    + '.ta-embed-field{display:flex;flex-direction:column;gap:4px}'
    + '.ta-embed-field label{font-size:.76rem;color:var(--ta-muted);font-weight:600}'
    + '.ta-embed-field input,.ta-embed-field select{width:100%;padding:8px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;'
    + 'color:var(--ta-text);font-size:.9rem;outline:none;font-family:inherit}'
    + '.ta-embed-field input:focus,.ta-embed-field select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.7rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-box{background:var(--ta-bg);border-radius:10px;padding:12px;text-align:center}'
    + '.ta-embed-box .l{font-size:.74rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-box .v{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-note{margin-top:12px;background:var(--ta-bg);border-radius:10px;padding:12px;text-align:center;font-size:.8rem;color:var(--ta-muted)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'plastic-surgery-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="plastic-surgery-cost-calculator"]')) {
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

  var PROCS = [
    ['breast', 'Breast Augmentation', 6500, 12000],
    ['rhino', 'Rhinoplasty (Nose)', 5000, 15000],
    ['lipo', 'Liposuction (per area)', 3500, 9000],
    ['tuck', 'Tummy Tuck', 8000, 15000],
    ['face', 'Facelift', 9000, 20000],
    ['eyes', 'Eyelid Surgery', 3500, 7000],
    ['lift', 'Breast Lift', 6500, 12000],
    ['reduction', 'Breast Reduction', 7000, 13000],
    ['bbl', 'Brazilian Butt Lift (BBL)', 6000, 14000],
    ['mommy', 'Mommy Makeover', 10000, 25000]
  ];
  var procOptions = PROCS.map(function (p) {
    return '<option value="' + p[0] + '">' + p[1] + '</option>';
  }).join('');

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Plastic Surgery Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">By procedure, state level, surgeon tier, and facility</div>'
    + '<div class="ta-embed-card"><div class="ta-embed-grid">'
    + '<div class="ta-embed-field"><label>Procedure</label><select id="ta-ps-proc">' + procOptions + '</select></div>'
    + '<div class="ta-embed-field"><label>State price level</label><select id="ta-ps-state">'
    + '<option value="0.90">Low-cost state</option><option value="0.96">Below average</option>'
    + '<option value="1" selected>National average</option><option value="1.08">Above average</option>'
    + '<option value="1.2">High-cost (CA/NY)</option></select></div>'
    + '<div class="ta-embed-field"><label>Surgeon tier</label><select id="ta-ps-tier">'
    + '<option value="0.88">Budget / less-experienced</option><option value="1" selected>Board-certified average</option>'
    + '<option value="1.15">Highly sought-after</option></select></div>'
    + '<div class="ta-embed-field"><label>Facility</label><select id="ta-ps-fac">'
    + '<option value="0.92">Office-based OR</option><option value="1" selected>Accredited surgery center</option>'
    + '<option value="1.25">Hospital OR</option></select></div>'
    + '<div class="ta-embed-field"><label>Extras — labs, garments, Rx ($)</label><input type="number" id="ta-ps-extras" value="300" min="0" step="25"></div>'
    + '</div></div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="ta-ps-hero">—</div><div class="ta-embed-sub" id="ta-ps-herosub"></div>'
    + '<div class="ta-embed-row">'
    + '<div class="ta-embed-box"><div class="l">National range</div><div class="v" id="ta-ps-nat">—</div></div>'
    + '<div class="ta-embed-box"><div class="l">Your estimate</div><div class="v" id="ta-ps-est">—</div></div>'
    + '</div><div class="ta-embed-note">Educational estimates — surgeon + facility + anesthesia + extras. Not a quote; consult a board-certified plastic surgeon.</div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function findProc(id) {
    for (var i = 0; i < PROCS.length; i++) if (PROCS[i][0] === id) return PROCS[i];
    return PROCS[0];
  }

  function calc() {
    var p = findProc(root.querySelector('#ta-ps-proc').value);
    var st = parseFloat(root.querySelector('#ta-ps-state').value) || 1;
    var tier = parseFloat(root.querySelector('#ta-ps-tier').value) || 1;
    var fac = parseFloat(root.querySelector('#ta-ps-fac').value) || 1;
    var extras = parseFloat(root.querySelector('#ta-ps-extras').value) || 0;
    if (isNaN(extras)) extras = 0;
    var mult = st * tier * fac;
    var lo = p[2] * mult + extras, hi = p[3] * mult + extras;
    root.querySelector('#ta-ps-hero').textContent = fmt(lo) + ' – ' + fmt(hi);
    root.querySelector('#ta-ps-herosub').textContent = p[1] + ' · state ×' + st.toFixed(2) + ' · surgeon ×' + tier.toFixed(2) + ' · facility ×' + fac.toFixed(2);
    root.querySelector('#ta-ps-nat').textContent = fmt(p[2]) + ' – ' + fmt(p[3]);
    root.querySelector('#ta-ps-est').textContent = fmt(lo) + ' – ' + fmt(hi);
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.plasticSurgeryCostCalculator = { recalc: calc };
})();
