/*!
 * ToolAspect IVF Cost Calculator Embed
 * Install: <div id="ta-ivf-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/ivf-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-ivf-cost-calculator';
  var BASE = 'https://toolaspect.com/ivf-cost-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'ivf-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="ivf-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">IVF Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Cycle stack: clinic fee, meds, ICSI, PGT-A, FET</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Fresh cycles</label><input type="number" class="ta-cyc" value="1" min="1" max="6" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Base fee/cycle ($)</label><input type="number" class="ta-base" value="13500" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Med protocol</label><select class="ta-meds">'
    + '<option value="0">None / oral</option><option value="2500">Minimal (+$2,500)</option>'
    + '<option value="5500" selected>Standard (+$5,500)</option><option value="8500">High-dose (+$8,500)</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>ICSI</label><select class="ta-icsi">'
    + '<option value="0">No</option><option value="1800" selected>Yes (+$1,800)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>PGT-A testing</label><select class="ta-pg">'
    + '<option value="0">No</option><option value="3000" selected>Yes (+$3,000)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Frozen transfers</label><input type="number" class="ta-fet" value="1" min="0" max="6" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var cyc = parseFloat(root.querySelector('.ta-cyc').value) || 1;
    var base = parseFloat(root.querySelector('.ta-base').value) || 0;
    var meds = parseFloat(root.querySelector('.ta-meds').value) || 0;
    var icsi = parseFloat(root.querySelector('.ta-icsi').value) || 0;
    var pg = parseFloat(root.querySelector('.ta-pg').value) || 0;
    var fet = parseFloat(root.querySelector('.ta-fet').value) || 0;
    var perCycle = base + meds + icsi + pg + 600;
    var total = cyc * perCycle + fet * 2500;
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(total).toLocaleString('en-US') + '</div>'
      + '<div class="ta-embed-sub">total program cost · $' + Math.round(perCycle).toLocaleString('en-US') + ' per fresh cycle</div>'
      + '<div class="ta-embed-sub">Includes $600 anesthesia per retrieval and $2,500 per frozen transfer</div>'
      + '<div class="ta-embed-sub">National average ranges; clinic quotes vary. Not medical advice.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.ivfCostCalculator = { recalc: calc };
})();
