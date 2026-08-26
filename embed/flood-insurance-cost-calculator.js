/*!
 * ToolAspect Flood Insurance Cost Calculator Embed
 * Install: <div id="ta-flood-insurance-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/flood-insurance-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-flood-insurance-cost-calculator';
  var BASE = 'https://toolaspect.com/flood-insurance-cost-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.7rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-rows{margin-top:12px;display:grid;gap:6px}'
    + '.ta-embed-row{display:flex;justify-content:space-between;gap:10px;padding:8px 12px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);text-align:left}'
    + '.ta-embed-row .k{font-size:.82rem;color:var(--ta-muted);font-weight:600}'
    + '.ta-embed-row .v{font-size:.9rem;font-weight:700;white-space:nowrap}'
    + '.ta-embed-note{text-align:center;font-size:.72rem;color:var(--ta-muted);margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'flood-insurance-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="flood-insurance-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Flood Insurance Cost</div>'
    + '<div class="ta-embed-subtitle">NFIP estimate by FEMA zone, with the 18% increase cap</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Flood Zone</label><select class="ta-zone">'
    + '<option value="X" selected>X (minimal)</option><option value="A">A (high)</option>'
    + '<option value="AE">AE (high)</option><option value="VE">VE (coastal)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Building ($)</label><input type="number" class="ta-bldg" value="250000" min="20000" max="250000" step="10000"></div>'
    + '<div class="ta-embed-form-group"><label>Contents ($)</label><input type="number" class="ta-cont" value="100000" min="0" max="100000" step="5000"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group" style="grid-column:span 2"><label>Zone Average Premium ($/yr)</label><input type="number" class="ta-base" value="600" min="100" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Years</label><input type="number" class="ta-yrs" value="5" min="1" max="10" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-note">Rough estimate from national zone averages, not a quote. Actual Risk Rating 2.0 pricing varies by property.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var zoneSel = root.querySelector('.ta-zone');

  var ZONES = {
    X: { base: 600, rng: '$400 – $700' },
    A: { base: 1000, rng: '$1,000 – $2,500' },
    AE: { base: 1900, rng: '$1,500 – $3,000' },
    VE: { base: 4500, rng: '$3,000 – $10,000' }
  };
  var lastZone = 'X';

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var z = zoneSel.value;
    if (z !== lastZone) {
      root.querySelector('.ta-base').value = ZONES[z].base;
      lastZone = z;
    }
    var base = val('.ta-base');
    var bldg = Math.min(250000, val('.ta-bldg'));
    var cont = Math.min(100000, val('.ta-cont'));
    var yrs = val('.ta-yrs');
    var est = base * (0.55 + 0.45 * bldg / 250000) + base * 0.10 * cont / 100000;
    var proj = est * Math.pow(1.18, yrs);
    resultEl.innerHTML = '<div class="ta-embed-big">' + fmt(est) + '/yr</div>'
      + '<div class="ta-embed-sub">zone ' + z + ' estimate, ' + fmt(bldg) + ' building + ' + fmt(cont) + ' contents</div>'
      + '<div class="ta-embed-rows">'
      + '<div class="ta-embed-row"><span class="k">Zone range (national)</span><span class="v">' + ZONES[z].rng + '</span></div>'
      + '<div class="ta-embed-row"><span class="k">Monthly</span><span class="v">$' + Math.round(est / 12) + '</span></div>'
      + '<div class="ta-embed-row"><span class="k">In ' + yrs + ' yrs at 18% cap</span><span class="v">' + fmt(proj) + '</span></div>'
      + '</div>';
  }

  root.addEventListener('input', function () { lastZone = zoneSel.value; calc(); });
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.floodInsurance = { recalc: calc };
})();
