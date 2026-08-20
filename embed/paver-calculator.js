/*!
 * ToolAspect Paver Calculator Embed
 * Install: <div id="ta-paver-calculator"></div>
 *          <script src="https://toolaspect.com/embed/paver-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-paver-calculator';
  var BASE = 'https://toolaspect.com/paver-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'paver-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="paver-calculator"]')) {
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
    + '<div class="ta-embed-title">Paver Calculator</div>'
    + '<div class="ta-embed-subtitle">Paver count plus sand and base material estimates</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Area Length (ft)</label><input type="number" class="ta-len" value="20" min="0" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Area Width (ft)</label><input type="number" class="ta-wid" value="10" min="0" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Waste Factor (%)</label><input type="number" class="ta-waste" value="10" min="5" max="15" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Paver Length (in)</label><input type="number" class="ta-plen" value="6" min="0.5" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Paver Width (in)</label><input type="number" class="ta-pwid" value="6" min="0.5" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Sand Depth (in)</label><input type="number" class="ta-sand" value="1" min="0.25" step="0.25"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Base Depth (in, gravel)</label><input type="number" class="ta-base" value="4" min="0.5" step="0.5"></div>'
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
    var waste = val('.ta-waste');
    if (waste < 5) waste = 5;
    if (waste > 15) waste = 15;
    var plen = val('.ta-plen');
    var pwid = val('.ta-pwid');
    var sandD = val('.ta-sand');
    var baseD = val('.ta-base');

    var area = len * wid; // sq ft
    if (area <= 0 || plen <= 0 || pwid <= 0 || isNaN(area)) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your dimensions</div>';
      return;
    }

    var paverArea = (plen * pwid) / 144; // sq ft per paver
    var pavers = Math.ceil((area / paverArea) * (1 + waste / 100) - 1e-9);
    // sand: 1 yd³ ≈ 1.35 tons; base gravel ≈ 1.4 tons/yd³; bags of paver sand ≈ 0.5 ft³ each
    var sandCf = area * (sandD / 12);
    var baseCf = area * (baseD / 12);
    var sandYd = sandCf / 27;
    var baseYd = baseCf / 27;
    var sandTons = sandYd * 1.35;
    var baseTons = baseYd * 1.4;
    var sandBags = Math.ceil(sandCf / 0.5);

    resultEl.innerHTML =
      '<div class="ta-embed-big">' + pavers.toLocaleString() + ' pavers</div>'
      + '<div class="ta-embed-sub">' + area.toFixed(0) + ' sq ft area (includes ' + Math.round(waste) + '% waste)</div>'
      + '<div class="ta-embed-sub">Paver sand: <strong>' + sandYd.toFixed(2) + ' yd³</strong> (~' + sandTons.toFixed(2) + ' tons, or ' + sandBags + ' × 0.5 ft³ bags)</div>'
      + '<div class="ta-embed-sub">Gravel base (' + baseD + '"): <strong>' + baseYd.toFixed(2) + ' yd³</strong> (~' + baseTons.toFixed(2) + ' tons crushed stone)</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.paverCalculator = { recalc: calc };
})();
