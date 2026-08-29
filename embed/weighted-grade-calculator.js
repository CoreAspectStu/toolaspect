/*!
 * ToolAspect Weighted Grade Calculator Embed
 * Install: <div id="ta-weighted-grade-calculator"></div>
 *          <script src="https://toolaspect.com/embed/weighted-grade-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-weighted-grade-calculator';
  var BASE = 'https://toolaspect.com/weighted-grade-calculator/';

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
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-row{display:grid;grid-template-columns:2fr 1fr 1fr 34px;gap:8px;margin-bottom:8px;align-items:end}'
    + '.ta-embed-row button{padding:10px 0;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;font-size:1rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-add{width:100%;background:var(--ta-bg);border:1px dashed var(--ta-border);color:var(--ta-muted);border-radius:8px;padding:9px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-add:hover{border-color:var(--ta-accent);color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:8px;font-size:.85rem}'
    + '.ta-embed-cell strong{display:block;font-size:1.05rem}'
    + '.ta-embed-cell span{color:var(--ta-muted);font-size:.75rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-row{grid-template-columns:1fr 1fr 34px}.ta-embed-row .ta-embed-name{grid-column:1/3}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'weighted-grade-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="weighted-grade-calculator"]')) {
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
    + '<div class="ta-embed-title">Weighted Grade Calculator</div>'
    + '<div class="ta-embed-subtitle">Score x weight for each category, summed and renormalized</div>'
    + '<div class="ta-embed-card"><div class="ta-embed-rows"></div>'
    + '<button type="button" class="ta-embed-add">+ Add another category</button></div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var rowsEl = root.querySelector('.ta-embed-rows');
  var resultEl = root.querySelector('.ta-embed-result');

  function letter(g) { return g >= 90 ? 'A' : g >= 80 ? 'B' : g >= 70 ? 'C' : g >= 60 ? 'D' : 'F'; }

  function addRow(name, score, weight) {
    if (rowsEl.children.length >= 8) return;
    var d = document.createElement('div');
    d.className = 'ta-embed-row';
    d.innerHTML = ''
      + '<div class="ta-embed-name"><label>Category</label><input type="text" class="r-name" value="' + name + '"></div>'
      + '<div><label>Score %</label><input type="number" class="r-score" min="0" max="150" step="0.1" value="' + score + '"></div>'
      + '<div><label>Weight %</label><input type="number" class="r-weight" min="0" max="100" step="1" value="' + weight + '"></div>'
      + '<div><button type="button" title="Remove">&times;</button></div>';
    d.querySelector('button').addEventListener('click', function () { d.remove(); calc(); });
    rowsEl.appendChild(d);
  }

  function calc() {
    var rows = Array.prototype.slice.call(rowsEl.children);
    var totalW = 0, points = 0;
    rows.forEach(function (r) {
      var s = parseFloat(r.querySelector('.r-score').value);
      var w = parseFloat(r.querySelector('.r-weight').value);
      if (!isNaN(s) && !isNaN(w) && w > 0) { totalW += w; points += s * w; }
    });
    if (totalW <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">enter a score and a weight</div>';
      return;
    }
    var grade = points / totalW;
    var note = Math.abs(totalW - 100) < 0.01
      ? 'weights total 100% — final standing'
      : 'weights total ' + totalW.toFixed(0) + '% — grade on completed work (renormalized)';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + grade.toFixed(1) + '%</div>'
      + '<div class="ta-embed-sub">' + note + '</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Letter grade</span><strong>' + letter(grade) + '</strong></div>'
      + '<div class="ta-embed-cell"><span>Weight entered</span><strong>' + totalW.toFixed(0) + '%</strong></div>'
      + '</div>';
  }

  [['Homework', 92, 20], ['Midterms', 84, 30], ['Final', 78, 50]].forEach(function (r) { addRow(r[0], r[1], r[2]); });
  root.addEventListener('input', calc);
  root.querySelector('.ta-embed-add').addEventListener('click', function () { addRow('New category', 90, 10); calc(); });
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weightedGradeCalculator = { recalc: calc };
})();
