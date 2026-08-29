/*!
 * ToolAspect Weighted GPA Calculator Embed
 * Install: <div id="ta-weighted-gpa-calculator"></div>
 *          <script src="https://toolaspect.com/embed/weighted-gpa-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-weighted-gpa-calculator';
  var BASE = 'https://toolaspect.com/weighted-gpa-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:2fr 1fr 1.3fr .8fr;gap:10px;margin-bottom:8px;align-items:end}'
    + '.ta-embed-form-group{margin-bottom:0}'
    + '.ta-embed-form-group label{display:block;font-size:.72rem;color:var(--ta-muted);margin-bottom:4px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:9px 10px;font-size:.88rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-del{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;height:38px;width:34px;cursor:pointer;font-size:1rem}'
    + '.ta-embed-del:hover{border-color:#dc2626;color:#dc2626}'
    + '.ta-embed-btn{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 14px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn:hover{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:20px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-pair{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-box{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px}'
    + '.ta-embed-box .lbl{font-size:.72rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em}'
    + '.ta-embed-box .val{font-size:1.25rem;font-weight:700;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:560px){.ta-embed-form-row{grid-template-columns:1fr 1fr}.ta-embed-form-group.course{grid-column:1/-1}.ta-embed-pair{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'weighted-gpa-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="weighted-gpa-calculator"]')) {
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
    + '<div class="ta-embed-title">Weighted GPA Calculator</div>'
    + '<div class="ta-embed-subtitle">AP/IB +1.0, honors +0.5, on the 4.0 base scale</div>'
    + '<div class="ta-embed-card"><div class="ta-embed-rows"></div>'
    + '<button type="button" class="ta-embed-btn ta-add">+ Add course</button></div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your courses</div>'
    + '<div class="ta-embed-pair">'
    + '<div class="ta-embed-box"><div class="lbl">Unweighted</div><div class="val uw">—</div></div>'
    + '<div class="ta-embed-box"><div class="lbl">Credits</div><div class="val cr">—</div></div>'
    + '</div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var PTS = { 'A': 4, 'A-': 3.7, 'B+': 3.3, 'B': 3, 'B-': 2.7, 'C+': 2.3, 'C': 2, 'C-': 1.7, 'D+': 1.3, 'D': 1, 'D-': 0.7, 'F': 0 };
  var LEVELS = { 'Regular': 0, 'Honors': 0.5, 'AP/IB': 1 };
  var rows = [['AP Calculus BC', 'A', 'AP/IB', 1], ['AP US History', 'B+', 'AP/IB', 1], ['Honors English', 'A', 'Honors', 1], ['Spanish 3', 'A', 'Regular', 1]];
  var rowsEl = root.querySelector('.ta-embed-rows');
  var resultEl = root.querySelector('.ta-embed-result');

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

  function render() {
    rowsEl.innerHTML = rows.map(function (r, i) {
      var g = Object.keys(PTS).map(function (k) { return '<option' + (r[1] === k ? ' selected' : '') + '>' + k + '</option>'; }).join('');
      var l = Object.keys(LEVELS).map(function (k) { return '<option' + (r[2] === k ? ' selected' : '') + '>' + k + '</option>'; }).join('');
      return '<div class="ta-embed-form-row">'
        + '<div class="ta-embed-form-group course"><label>Course</label><input type="text" value="' + esc(r[0]) + '" data-i="' + i + '" data-f="0" placeholder="Course name"></div>'
        + '<div class="ta-embed-form-group"><label>Grade</label><select data-i="' + i + '" data-f="1">' + g + '</select></div>'
        + '<div class="ta-embed-form-group"><label>Level</label><select data-i="' + i + '" data-f="2">' + l + '</select></div>'
        + '<div class="ta-embed-form-group"><label>Credits</label><input type="number" min="0" step="0.5" value="' + r[3] + '" data-i="' + i + '" data-f="3"></div>'
        + '<div class="ta-embed-form-group"><label>&nbsp;</label><button type="button" class="ta-embed-del" data-del="' + i + '" aria-label="Remove">&times;</button></div>'
        + '</div>';
    }).join('');
  }

  function calc() {
    var qw = 0, qu = 0, cr = 0;
    rows.forEach(function (r) {
      var p = PTS[r[1]] || 0, b = LEVELS[r[2]] || 0, c = parseFloat(r[3]) || 0;
      if (p <= 0) b = 0; // failing grades carry no weight bump
      qw += (p + b) * c; qu += p * c; cr += c;
    });
    if (cr <= 0) {
      resultEl.querySelector('.ta-embed-big').textContent = '—';
      resultEl.querySelector('.ta-embed-sub').textContent = 'Enter your courses';
      resultEl.querySelector('.uw').textContent = '—';
      resultEl.querySelector('.cr').textContent = '—';
      return;
    }
    resultEl.querySelector('.ta-embed-big').textContent = (qw / cr).toFixed(2);
    resultEl.querySelector('.ta-embed-sub').textContent = 'weighted GPA, vs ' + (qu / cr).toFixed(2) + ' unweighted';
    resultEl.querySelector('.uw').textContent = (qu / cr).toFixed(2);
    resultEl.querySelector('.cr').textContent = cr % 1 === 0 ? String(cr) : cr.toFixed(1);
  }

  rowsEl.addEventListener('input', function (e) {
    var t = e.target;
    if (t.dataset.i !== undefined) { rows[+t.dataset.i][+t.dataset.f] = t.value; calc(); }
  });
  rowsEl.addEventListener('change', function (e) {
    var t = e.target;
    if (t.tagName === 'SELECT' && t.dataset.i !== undefined) { rows[+t.dataset.i][+t.dataset.f] = t.value; calc(); }
  });
  rowsEl.addEventListener('click', function (e) {
    var b = e.target.closest('[data-del]');
    if (b) { rows.splice(+b.dataset.del, 1); render(); calc(); }
  });
  root.querySelector('.ta-add').addEventListener('click', function () {
    rows.push(['', 'A', 'Regular', 1]);
    render();
    var ins = rowsEl.querySelectorAll('input[type="text"]');
    if (ins.length) ins[ins.length - 1].focus();
  });

  render();
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weightedGpaCalculator = { recalc: calc };
})();
