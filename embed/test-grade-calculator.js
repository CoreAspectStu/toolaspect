/*!
 * ToolAspect Test Grade Calculator Embed
 * Install: <div id="ta-test-grade-calculator"></div>
 *          <script src="https://toolaspect.com/embed/test-grade-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-test-grade-calculator';
  var BASE = 'https://toolaspect.com/test-grade-calculator/';

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
    + '.ta-embed-chips{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px}'
    + '.ta-embed-chip{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:6px 12px;font-size:.8rem}'
    + '.ta-embed-chip strong{color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'test-grade-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="test-grade-calculator"]')) {
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
    + '<div class="ta-embed-title">Test Grade Calculator</div>'
    + '<div class="ta-embed-subtitle">Score to percentage, letter grade, and GPA</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Points earned</label><input type="number" class="ta-earned" value="21" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Points possible</label><input type="number" class="ta-possible" value="30" min="1" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Scale</label><select class="ta-scale">'
    + '<option value="pm">10-pt +/−</option><option value="plain">10-pt plain</option><option value="seven">7-pt</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var BANDS = {
    pm: [[97, 'A+', 4.0], [93, 'A', 4.0], [90, 'A−', 3.7], [87, 'B+', 3.3], [83, 'B', 3.0], [80, 'B−', 2.7], [77, 'C+', 2.3], [73, 'C', 2.0], [70, 'C−', 1.7], [67, 'D+', 1.3], [63, 'D', 1.0], [60, 'D−', 0.7], [0, 'F', 0.0]],
    plain: [[90, 'A', 4.0], [80, 'B', 3.0], [70, 'C', 2.0], [60, 'D', 1.0], [0, 'F', 0.0]],
    seven: [[97, 'A+', 4.0], [93, 'A', 4.0], [90, 'A−', 3.7], [87, 'B+', 3.3], [85, 'B', 3.0], [80, 'B−', 2.7], [77, 'C+', 2.3], [75, 'C', 2.0], [70, 'C−', 1.7], [67, 'D+', 1.3], [65, 'D', 1.0], [60, 'D−', 0.7], [0, 'F', 0.0]]
  };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function gradeOf(p, scale) {
    var bands = BANDS[scale] || BANDS.pm;
    for (var i = 0; i < bands.length; i++) {
      if (p >= bands[i][0]) return { letter: bands[i][1], gpa: bands[i][2] };
    }
    return { letter: 'F', gpa: 0 };
  }

  function fmtPct(p) {
    var s = (Math.round(p * 100) / 100).toFixed(2);
    return s.replace(/\.?0+$/, '') + '%';
  }

  function calc() {
    var e = val('.ta-earned'), t = val('.ta-possible');
    var scale = root.querySelector('.ta-scale').value;
    if (t < 1 || isNaN(e)) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter points earned and possible</div>';
      return;
    }
    var p = Math.max(0, e) / t * 100;
    var g = gradeOf(p, scale);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + fmtPct(p) + '</div>'
      + '<div class="ta-embed-sub"><strong>' + e + ' out of ' + t + '</strong></div>'
      + '<div class="ta-embed-chips">'
      + '<div class="ta-embed-chip">Letter: <strong>' + g.letter + '</strong></div>'
      + '<div class="ta-embed-chip">GPA: <strong>' + g.gpa.toFixed(1) + '</strong></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.testGradeCalculator = { recalc: calc };
})();
