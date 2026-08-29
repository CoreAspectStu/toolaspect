/*!
 * ToolAspect Bolt Pattern Calculator Embed
 * Install: <div id="ta-bolt-pattern-calculator"></div>
 *          <script src="https://toolaspect.com/embed/bolt-pattern-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-bolt-pattern-calculator';
  var BASE = 'https://toolaspect.com/bolt-pattern-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:20px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.88rem;margin-top:6px}'
    + '.ta-embed-line{font-size:.92rem;margin-top:8px;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'bolt-pattern-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="bolt-pattern-calculator"]')) {
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
    + '<div class="ta-embed-title">Bolt Pattern Calculator</div>'
    + '<div class="ta-embed-subtitle">Decode PCD from a center-to-center measurement</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Studs</label><select class="ta-studs"><option value="4">4 lug</option><option value="5" selected>5 lug</option><option value="6">6 lug</option><option value="8">8 lug</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Measured</label><select class="ta-mode"><option value="adjacent" selected>Adjacent studs</option><option value="across">Across opposites</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Distance (mm)</label><input type="number" class="ta-measure" value="67.2" min="0" step="0.1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big ta-pat">—</div>'
    + '<div class="ta-embed-sub ta-how"></div>'
    + '<div class="ta-embed-line ta-mm"></div>'
    + '<div class="ta-embed-line ta-in"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var STANDARDS = { 4: [98, 100, 108, 110, 114.3], 5: [98, 100, 105, 108, 110, 112, 114.3, 115, 118, 120, 120.65, 127, 130, 132, 135, 139.7, 150, 155, 160, 165.1, 205], 6: [114.3, 127, 132, 135, 139.7, 170], 8: [165.1, 170, 180, 200, 210] };
  var FACTORS = { 4: 1.4142, 5: 1.7013, 6: 2.0, 8: 2.6131 };

  function calc() {
    var n = parseInt(root.querySelector('.ta-studs').value, 10);
    var mode = root.querySelector('.ta-mode').value;
    var m = parseFloat(root.querySelector('.ta-measure').value) || 0;
    var patEl = root.querySelector('.ta-pat'), howEl = root.querySelector('.ta-how'),
        mmEl = root.querySelector('.ta-mm'), inEl = root.querySelector('.ta-in');
    if (mode === 'across' && n % 2 !== 0) {
      patEl.textContent = '—';
      howEl.textContent = 'Odd lug counts have no opposite studs — measure adjacent studs.';
      mmEl.textContent = ''; inEl.textContent = '';
      return;
    }
    var pcd = mode === 'across' ? m : m * FACTORS[n];
    if (pcd <= 0) { patEl.textContent = '—'; howEl.textContent = 'Enter a measurement.'; mmEl.textContent = ''; inEl.textContent = ''; return; }
    var list = STANDARDS[n], best = null, bd = 1e9;
    list.forEach(function (s) { var d = Math.abs(s - pcd); if (d < bd) { bd = d; best = s; } });
    var match = bd <= 0.4 ? n + 'x' + best + ' ✓' : 'closest ' + n + 'x' + best + ' — re-measure';
    patEl.textContent = match;
    howEl.textContent = mode === 'across' ? 'across opposite studs = direct PCD' : 'adjacent × ' + FACTORS[n].toFixed(4);
    mmEl.innerHTML = 'PCD: <strong>' + pcd.toFixed(1) + ' mm</strong>';
    inEl.innerHTML = 'Inches: <strong>' + (pcd / 25.4).toFixed(3) + '"</strong>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.boltPatternCalculator = { recalc: calc };
})();
