/*!
 * ToolAspect CGPA to GPA Converter Embed
 * Install: <div id="ta-cgpa-to-gpa-converter"></div>
 *          <script src="https://toolaspect.com/embed/cgpa-to-gpa-converter.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-cgpa-to-gpa-converter';
  var BASE = 'https://toolaspect.com/cgpa-to-gpa-converter/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:16px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group{margin-bottom:0}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none;cursor:pointer}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px;text-align:center}'
    + '.ta-embed-cell .cl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-cell .cv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'cgpa-to-gpa-converter');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="cgpa-to-gpa-converter"]')) {
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
    + '<div class="ta-embed-title">CGPA to GPA Converter</div>'
    + '<div class="ta-embed-subtitle">Indian 10-point CGPA to US 4.0 and percentage</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Direction</label><select class="ta-dir"><option value="cgpa">CGPA → GPA</option><option value="gpa">GPA → CGPA</option></select></div>'
    + '<div class="ta-embed-form-group"><label class="ta-in-label">CGPA (0–10)</label><input type="number" class="ta-val" value="8.5" min="0" max="10" step="0.01"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group" style="grid-column:1/-1"><label>Percentage convention</label><select class="ta-method"><option value="cbse">CBSE: CGPA × 9.5</option><option value="ten">Simple: CGPA × 10</option><option value="tech">Technical univ: (CGPA − 0.75) × 10</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-grid"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var gridEl = root.querySelector('.ta-embed-grid');

  function letter(g) {
    if (g >= 3.85) return 'A'; if (g >= 3.5) return 'A−'; if (g >= 3.15) return 'B+'; if (g >= 2.85) return 'B';
    if (g >= 2.5) return 'B−'; if (g >= 2.15) return 'C+'; if (g >= 1.85) return 'C'; if (g >= 1.5) return 'D'; return 'F';
  }
  function pctFrom(cgpa, method) {
    if (method === 'ten') return cgpa * 10;
    if (method === 'tech') return Math.max(0, cgpa - 0.75) * 10;
    return cgpa * 9.5;
  }

  function calc() {
    var dir = root.querySelector('.ta-dir').value;
    var method = root.querySelector('.ta-method').value;
    var inEl = root.querySelector('.ta-val');
    var labelEl = root.querySelector('.ta-in-label');
    var v = parseFloat(inEl.value);
    labelEl.textContent = dir === 'cgpa' ? 'CGPA (0–10)' : 'GPA (0–4)';
    inEl.max = dir === 'cgpa' ? 10 : 4;
    if (isNaN(v) || v < 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter a value above</div>';
      gridEl.innerHTML = '';
      return;
    }
    var gpa, pct;
    if (dir === 'cgpa') {
      gpa = Math.min(4, v / 10 * 4);
      pct = pctFrom(v, method);
      resultEl.innerHTML = '<div class="ta-embed-big">' + gpa.toFixed(2) + '</div><div class="ta-embed-sub">US GPA (4.0 scale) — (' + v.toFixed(2) + ' ÷ 10) × 4</div>';
    } else {
      gpa = v;
      var cgpa = Math.min(10, v / 4 * 10);
      pct = pctFrom(cgpa, method);
      resultEl.innerHTML = '<div class="ta-embed-big">' + cgpa.toFixed(2) + '</div><div class="ta-embed-sub">CGPA (10-point scale) — (' + v.toFixed(2) + ' ÷ 4) × 10</div>';
    }
    gridEl.innerHTML =
      '<div class="ta-embed-cell"><div class="cl">Percentage</div><div class="cv">' + pct.toFixed(2) + '%</div></div>'
      + '<div class="ta-embed-cell"><div class="cl">US letter equivalent</div><div class="cv">' + letter(gpa) + '</div></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.cgpaToGpa = { recalc: calc };
})();
