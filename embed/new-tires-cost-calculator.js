/*!
 * ToolAspect New Tires Cost Calculator Embed
 * Install: <div id="ta-new-tires-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/new-tires-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-new-tires-cost-calculator';
  var BASE = 'https://toolaspect.com/new-tires-cost-calculator/';

  var PRICE = {
    s: { as: [70, 100, 150], to: [80, 115, 160], pe: [110, 150, 200], wi: [85, 120, 170], at: [130, 180, 260], hw: [120, 160, 230] },
    m: { as: [90, 130, 190], to: [100, 140, 200], pe: [140, 190, 290], wi: [110, 150, 220], at: [150, 210, 320], hw: [140, 180, 280] },
    l: { as: [120, 165, 250], to: [130, 180, 270], pe: [180, 250, 380], wi: [140, 185, 270], at: [180, 250, 380], hw: [170, 220, 330] },
    xl: { as: [160, 220, 320], to: [170, 240, 350], pe: [250, 340, 500], wi: [180, 240, 340], at: [220, 320, 500], hw: [200, 270, 420] }
  };

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
    + '.ta-embed-form-row.half{grid-template-columns:1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-form-row.half{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'new-tires-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="new-tires-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">New Tires Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Installed price for a set, by size and type</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Wheel size</label><select class="ta-size">'
    + '<option value="s">15&ndash;16 in</option><option value="m" selected>17&ndash;18 in</option>'
    + '<option value="l">19&ndash;20 in</option><option value="xl">20+ in / truck</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Tire type</label><select class="ta-type">'
    + '<option value="as" selected>All-season</option><option value="to">Touring</option>'
    + '<option value="pe">Performance</option><option value="wi">Winter</option>'
    + '<option value="at">All-terrain</option><option value="hw">Highway LT</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Tier</label><select class="ta-tier">'
    + '<option value="0">Budget</option><option value="1" selected>Mid</option><option value="2">Premium</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row half">'
    + '<div class="ta-embed-form-group"><label>Price per tire ($)</label><input type="number" class="ta-per" value="130" min="20" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Install per tire ($)</label><input type="number" class="ta-inst" value="34" min="0" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function preset() {
    var size = root.querySelector('.ta-size').value;
    var type = root.querySelector('.ta-type').value;
    var tier = parseInt(root.querySelector('.ta-tier').value, 10);
    root.querySelector('.ta-per').value = PRICE[size][type][tier];
    calc();
  }

  function calc() {
    var per = parseFloat(root.querySelector('.ta-per').value) || 0;
    var inst = parseFloat(root.querySelector('.ta-inst').value) || 0;
    var total = (per + inst) * 4;
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '</div>'
      + '<div class="ta-embed-sub">4 tires installed ($' + (per + inst).toFixed(2) + ' per tire)</div>'
      + '<div class="ta-embed-sub">Before sales tax and any alignment. National price bands; your quote varies.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', function (e) {
    if (e.target.classList.contains('ta-size') || e.target.classList.contains('ta-type') || e.target.classList.contains('ta-tier')) preset();
    else calc();
  });

  preset();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.newTiresCostCalculator = { recalc: calc };
})();
