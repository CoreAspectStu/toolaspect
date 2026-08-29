/*!
 * ToolAspect GPA Scale Converter Embed
 * Install: <div id="ta-gpa-scale-converter"></div>
 *          <script src="https://toolaspect.com/embed/gpa-scale-converter.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-gpa-scale-converter';
  var BASE = 'https://toolaspect.com/gpa-scale-converter/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:20px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.1rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-cells{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px;text-align:center}'
    + '.ta-embed-cell .k{font-size:.68rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px}'
    + '.ta-embed-cell .v{font-size:1rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-cells{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'gpa-scale-converter');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="gpa-scale-converter"]')) {
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
    + '<div class="ta-embed-title">GPA Scale Converter</div>'
    + '<div class="ta-embed-subtitle">Percentage to letter grade to the 4.0 scale</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Percentage grade</label><input type="number" class="ta-pct" value="89" min="0" max="100" step="0.1"></div>'
    + '<div class="ta-embed-form-group"><label>Course type</label><select class="ta-course">'
    + '<option value="0" selected>Regular</option><option value="0.5">Honors (+0.5)</option><option value="1">AP / IB (+1.0)</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  // Standard 13-band scale (same as the full converter; percentages round to nearest whole)
  var SCALE = [
    ['A+', 97, 100, 4.0], ['A', 93, 96, 4.0], ['A-', 90, 92, 3.7], ['B+', 87, 89, 3.3], ['B', 83, 86, 3.0],
    ['B-', 80, 82, 2.7], ['C+', 77, 79, 2.3], ['C', 73, 76, 2.0], ['C-', 70, 72, 1.7],
    ['D+', 67, 69, 1.3], ['D', 63, 66, 1.0], ['D-', 60, 62, 0.7], ['F', 0, 59, 0.0]];

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var p = parseFloat(root.querySelector('.ta-pct').value);
    var extra = parseFloat(root.querySelector('.ta-course').value) || 0;
    if (isNaN(p)) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter a percentage</div>';
      return;
    }
    p = Math.round(Math.max(0, Math.min(100, p)));
    var row = null;
    for (var i = 0; i < SCALE.length; i++) {
      if (p >= SCALE[i][1] && p <= SCALE[i][2]) { row = SCALE[i]; break; }
    }
    var w = row[3] === 0 ? 0 : row[3] + extra;
    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + w.toFixed(1) + '</div>'
      + '<div class="ta-embed-sub">on the 4.0 scale' + (extra ? ' (weighted)' : '') + '</div>'
      + '<div class="ta-embed-cells">'
      + '<div class="ta-embed-cell"><div class="k">Letter</div><div class="v">' + row[0] + '</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Percent band</div><div class="v">' + row[1] + '-' + row[2] + '%</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Unweighted</div><div class="v">' + row[3].toFixed(1) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.gpaScaleConverter = { recalc: calc };
})();
