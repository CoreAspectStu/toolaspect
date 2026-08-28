/*!
 * ToolAspect Dwelling Coverage Calculator Embed
 * Install: <div id="ta-homeowners-dwelling-coverage-calculator"></div>
 *          <script src="https://toolaspect.com/embed/homeowners-dwelling-coverage-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-homeowners-dwelling-coverage-calculator';
  var BASE = 'https://toolaspect.com/homeowners-dwelling-coverage-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'homeowners-dwelling-coverage-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="homeowners-dwelling-coverage-calculator"]')) {
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
    + '<div class="ta-embed-title">Dwelling Coverage Calculator</div>'
    + '<div class="ta-embed-subtitle">Coverage A from sq ft, region and finish level</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Square feet</label><input type="number" class="ta-sqft" value="2000" min="200" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Region</label><select class="ta-region">'
    + '<option value="145" selected>South</option><option value="155">Midwest</option>'
    + '<option value="170">Mountain West</option><option value="205">Northeast / Mid-Atlantic</option>'
    + '<option value="245">West Coast</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Finish level</label><select class="ta-tier">'
    + '<option value="0.85">Economy</option><option value="1" selected>Standard</option>'
    + '<option value="1.25">Custom / premium</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Extended replacement</label><select class="ta-ext">'
    + '<option value="0" selected>None</option><option value="0.25">+25%</option>'
    + '<option value="0.5">+50%</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var sqft = parseFloat(root.querySelector('.ta-sqft').value) || 0;
    var rate = parseFloat(root.querySelector('.ta-region').value);
    var tier = parseFloat(root.querySelector('.ta-tier').value);
    var ext = parseFloat(root.querySelector('.ta-ext').value);
    if (sqft <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your home square footage</div>';
      return;
    }
    var adjRate = rate * tier;
    var dwelling = sqft * adjRate;
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(dwelling).toLocaleString('en-US') + '</div>'
      + '<div class="ta-embed-sub">Estimated Coverage A at $' + adjRate.toFixed(0) + '/sq ft</div>'
      + '<div class="ta-embed-sub">Other structures (10%): $' + Math.round(dwelling * 0.1).toLocaleString('en-US') + '</div>'
      + (ext > 0 ? '<div class="ta-embed-sub">With +' + Math.round(ext * 100) + '% extended replacement: $' + Math.round(dwelling * (1 + ext)).toLocaleString('en-US') + '</div>' : '')
      + '<div class="ta-embed-sub">Planning estimate from typical 2025 regional rebuild rates. Confirm with your carrier.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.homeownersDwellingCoverageCalculator = { recalc: calc };
})();
