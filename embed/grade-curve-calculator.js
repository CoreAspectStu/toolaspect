/*!
 * ToolAspect Grade Curve Calculator Embed
 * Install: <div id="ta-grade-curve-calculator"></div>
 *          <script src="https://toolaspect.com/embed/grade-curve-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-grade-curve-calculator';
  var BASE = 'https://toolaspect.com/grade-curve-calculator/';

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
    + '.ta-embed-form-group input,.ta-embed-form-group select,.ta-embed-form-group textarea{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group textarea{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;resize:vertical}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus,.ta-embed-form-group textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px}'
    + '.ta-embed-stat{text-align:center;background:var(--ta-bg);border-radius:8px;padding:10px 6px}'
    + '.ta-embed-stat .k{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-stat .v{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-table{width:100%;border-collapse:collapse;font-size:.85rem;margin-bottom:4px}'
    + '.ta-embed-table th,.ta-embed-table td{padding:6px 8px;border:1px solid var(--ta-border);text-align:left}'
    + '.ta-embed-table th{background:var(--ta-bg)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-stats{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'grade-curve-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="grade-curve-calculator"]')) {
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
    + '<div class="ta-embed-title">Grade Curve Calculator</div>'
    + '<div class="ta-embed-subtitle">Linear (mean + SD) and square-root curves for any score list</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Exam scores (comma or space separated)</label><textarea class="ta-scores" rows="3">58, 72, 66, 44, 80</textarea></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Target mean</label><input type="number" class="ta-tm" value="75" min="0" max="100" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Target SD</label><input type="number" class="ta-tsd" value="10" min="0.5" max="40" step="0.5"></div>'
    + '</div>'
    + '<div class="ta-embed-stats">'
    + '<div class="ta-embed-stat"><div class="k">Count</div><div class="v ta-n">—</div></div>'
    + '<div class="ta-embed-stat"><div class="k">Mean</div><div class="v ta-m">—</div></div>'
    + '<div class="ta-embed-stat"><div class="k">SD</div><div class="v ta-s">—</div></div>'
    + '</div>'
    + '<table class="ta-embed-table"><thead><tr><th>Raw</th><th>Linear</th><th>√ curve</th></tr></thead><tbody class="ta-body"></tbody></table>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function txt(sel) {
    return root.querySelector(sel) ? root.querySelector(sel).value : '';
  }

  function calc() {
    var a = txt('.ta-scores').split(/[\s,;]+/).map(parseFloat).filter(function (x) { return isFinite(x) && x >= 0; });
    var M = val('.ta-tm') || 75;
    var s = val('.ta-tsd') || 10;
    var body = root.querySelector('.ta-body');
    if (a.length < 2) {
      body.innerHTML = '<tr><td colspan="3">Enter at least two scores.</td></tr>';
      root.querySelector('.ta-n').textContent = '—';
      root.querySelector('.ta-m').textContent = '—';
      root.querySelector('.ta-s').textContent = '—';
      return;
    }
    var m = a.reduce(function (t, x) { return t + x; }, 0) / a.length;
    var ss = 0;
    for (var i = 0; i < a.length; i++) ss += (a[i] - m) * (a[i] - m);
    var sd = Math.sqrt(ss / a.length);
    root.querySelector('.ta-n').textContent = a.length;
    root.querySelector('.ta-m').textContent = m.toFixed(1);
    root.querySelector('.ta-s').textContent = sd.toFixed(1);
    var h = '';
    for (var j = 0; j < a.length; j++) {
      var z = sd > 0 ? (a[j] - m) / sd : 0;
      var lin = Math.min(100, M + z * s);
      var sq = Math.min(100, 10 * Math.sqrt(a[j]));
      h += '<tr><td>' + a[j] + '</td><td><strong>' + Math.round(lin) + '</strong></td><td>' + Math.round(sq) + '</td></tr>';
    }
    body.innerHTML = h;
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.gradeCurveCalculator = { recalc: calc };
})();
