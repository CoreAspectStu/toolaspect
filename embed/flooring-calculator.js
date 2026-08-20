/*!
 * ToolAspect Flooring Calculator Embed
 * Install: <div id="ta-flooring-calculator"></div>
 *          <script src="https://toolaspect.com/embed/flooring-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-flooring-calculator';
  var BASE = 'https://toolaspect.com/flooring-calculator/';

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'flooring-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="flooring-calculator"]')) {
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
    + '<div class="ta-embed-title">Flooring Calculator</div>'
    + '<div class="ta-embed-subtitle">Boxes of flooring, underlayment, and cost estimate</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Room Length (ft)</label><input type="number" class="ta-len" value="15" min="0" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Room Width (ft)</label><input type="number" class="ta-wid" value="12" min="0" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Waste Factor (%)</label><input type="number" class="ta-waste" value="10" min="0" max="30" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Box Coverage (sq ft/box)</label><input type="number" class="ta-boxcov" value="23.8" min="0.1" step="0.1"></div>'
    + '<div class="ta-embed-form-group"><label>Price per Box ($)</label><input type="number" class="ta-boxprice" value="55" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Underlayment Roll (sq ft)</label><input type="number" class="ta-rollcov" value="100" min="1" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Underlayment Price/Roll ($)</label><input type="number" class="ta-rollprice" value="35" min="0" step="1"></div>'
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

  function calc() {
    var len = val('.ta-len');
    var wid = val('.ta-wid');
    var waste = val('.ta-waste') / 100;
    var boxCov = val('.ta-boxcov');
    var boxPrice = val('.ta-boxprice');
    var rollCov = val('.ta-rollcov');
    var rollPrice = val('.ta-rollprice');

    var area = len * wid;
    if (area <= 0 || boxCov <= 0 || isNaN(area)) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your dimensions</div>';
      return;
    }

    var buyArea = area * (1 + waste);
    var boxes = Math.ceil((buyArea / boxCov) - 1e-9);
    var actualCov = boxes * boxCov;
    var rolls = rollCov > 0 ? Math.ceil((buyArea / rollCov) - 1e-9) : 0;
    var cost = boxes * boxPrice + rolls * rollPrice;

    resultEl.innerHTML =
      '<div class="ta-embed-big">' + boxes + ' boxes</div>'
      + '<div class="ta-embed-sub">' + area.toFixed(0) + ' sq ft room + ' + Math.round(waste * 100) + '% waste = ' + buyArea.toFixed(0) + ' sq ft to buy</div>'
      + '<div class="ta-embed-sub">Coverage purchased: ' + actualCov.toFixed(1) + ' sq ft</div>'
      + '<div class="ta-embed-sub">Underlayment: <strong>' + rolls + ' roll' + (rolls === 1 ? '' : 's') + '</strong> (' + rollCov + ' sq ft each)</div>'
      + (cost > 0 ? '<div class="ta-embed-sub">Material cost estimate: <strong>$' + cost.toFixed(0) + '</strong></div>' : '');
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.flooringCalculator = { recalc: calc };
})();
