/*!
 * ToolAspect Matrix Calculator Embed
 * Install: <div id="ta-matrix-calculator"></div>
 *          <script src="https://toolaspect.com/embed/matrix-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-matrix-calculator';
  var BASE = 'https://toolaspect.com/matrix-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-mode-toggle{display:flex;gap:6px;margin-bottom:14px;justify-content:center;flex-wrap:wrap}'
    + '.ta-embed-mode-btn{background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;'
    + 'padding:7px 16px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode-btn.ta-active{background:rgba(37,99,235,.1);border-color:var(--ta-accent);color:var(--ta-text);font-weight:600}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-mode-btn.ta-active{background:rgba(96,165,250,.12)}'
    + '.ta-embed-grid{display:inline-grid;gap:6px;padding:10px;border:2px solid var(--ta-border);border-left:6px solid var(--ta-border);'
    + 'border-right:6px solid var(--ta-border);border-radius:6px;background:var(--ta-bg)}'
    + '.ta-embed-grid input{width:64px;padding:8px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:6px;'
    + 'color:var(--ta-text);font-size:.95rem;text-align:center;outline:none;font-family:inherit}'
    + '.ta-embed-grid input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-center{text-align:center}'
    + '.ta-embed-blk-label{font-size:.78rem;color:var(--ta-muted);margin:6px 0 4px;font-weight:600}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-mat{font-size:1.05rem;font-weight:700;color:var(--ta-accent);line-height:1.8}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'matrix-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="matrix-calculator"]')) {
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
    + '<div class="ta-embed-title">Matrix Calculator</div>'
    + '<div class="ta-embed-subtitle">Determinant and inverse, 2×2 and 3×3</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-mode-toggle">'
    + '<button type="button" class="ta-embed-mode-btn ta-active" data-size="2">2×2</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-size="3">3×3</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-op="det">Determinant</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-op="inv">Inverse</button>'
    + '</div>'
    + '<div class="ta-embed-center"><div class="ta-blk" id="ta-mat-a"><div class="ta-embed-blk-label">Matrix A</div></div></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var blockA = root.querySelector('#ta-mat-a');
  var size = 2, op = 'det';

  var DEFAULTS = {
    2: [[4, 7], [2, 6]],
    3: [[2, 1, 3], [0, 4, 5], [1, 2, 6]]
  };

  function fmt(n) {
    var r = Math.round(n * 10000) / 10000;
    if (Object.is(r, -0)) r = 0;
    return String(r);
  }

  function buildGrid() {
    var vals = DEFAULTS[size], h = '<div class="ta-embed-grid" style="grid-template-columns:repeat(' + size + ',64px)">';
    for (var i = 0; i < size; i++) for (var j = 0; j < size; j++) {
      h += '<input type="number" step="any" data-i="' + i + '" data-j="' + j + '" value="' + vals[i][j] + '">';
    }
    blockA.innerHTML = '<div class="ta-embed-blk-label">Matrix A</div>' + h + '</div>';
  }

  function readGrid() {
    var inputs = blockA.querySelectorAll('input'), M = [];
    for (var i = 0; i < size; i++) { M.push([]); for (var j = 0; j < size; j++) {
      var v = parseFloat(inputs[i * size + j].value);
      M[i].push(isNaN(v) ? 0 : v);
    }}
    return M;
  }

  function det(A) {
    if (size === 2) return A[0][0] * A[1][1] - A[0][1] * A[1][0];
    return A[0][0] * (A[1][1] * A[2][2] - A[1][2] * A[2][1])
         - A[0][1] * (A[1][0] * A[2][2] - A[1][2] * A[2][0])
         + A[0][2] * (A[1][0] * A[2][1] - A[1][1] * A[2][0]);
  }

  function inverse(A) {
    var n = size;
    var M = A.map(function (r, i) {
      var row = r.slice();
      for (var j = 0; j < n; j++) row.push(j === i ? 1 : 0);
      return row;
    });
    for (var c = 0; c < n; c++) {
      var p = c;
      for (var r2 = c + 1; r2 < n; r2++) { if (Math.abs(M[r2][c]) > Math.abs(M[p][c])) p = r2; }
      if (Math.abs(M[p][c]) < 1e-12) return null;
      if (p !== c) { var t = M[p]; M[p] = M[c]; M[c] = t; }
      var pv = M[c][c];
      for (var k = 0; k < 2 * n; k++) M[c][k] /= pv;
      for (var r3 = 0; r3 < n; r3++) {
        if (r3 === c) continue;
        var f = M[r3][c];
        if (f === 0) continue;
        for (var k2 = 0; k2 < 2 * n; k2++) M[r3][k2] -= f * M[c][k2];
      }
    }
    return M.map(function (r) { return r.slice(n); });
  }

  function matHtml(M) {
    return '<div class="ta-embed-mat">' + M.map(function (r) { return '[' + r.map(fmt).join(', ') + ']'; }).join('<br>') + '</div>';
  }

  function calc() {
    var A = readGrid();
    if (op === 'det') {
      var d = det(A);
      resultEl.innerHTML =
        '<div class="ta-embed-big">det = ' + fmt(d) + '</div>'
        + '<div class="ta-embed-sub">' + (Math.abs(d) < 1e-12 ? 'det = 0 → singular, no inverse exists' : 'Nonzero, so an inverse exists') + '</div>';
    } else {
      var inv = inverse(A);
      resultEl.innerHTML = inv === null
        ? '<div class="ta-embed-big">Singular</div><div class="ta-embed-sub">det = 0, so A⁻¹ does not exist</div>'
        : matHtml(inv) + '<div class="ta-embed-sub">A × A⁻¹ = I</div>';
    }
  }

  root.addEventListener('input', function (e) {
    if (e.target.closest('.ta-embed-grid')) calc();
  });
  root.querySelector('.ta-embed-mode-toggle').addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-mode-btn');
    if (!btn) return;
    var s = btn.getAttribute('data-size'), o = btn.getAttribute('data-op');
    root.querySelectorAll('.ta-embed-mode-btn').forEach(function (b) {
      if (b === btn) return;
      if (s && b.getAttribute('data-size')) b.classList.remove('ta-active');
      if (o && b.getAttribute('data-op')) b.classList.remove('ta-active');
    });
    btn.classList.add('ta-active');
    if (s) { size = +s; buildGrid(); }
    if (o) { op = o; }
    calc();
  });

  buildGrid();
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.matrixCalculator = { recalc: calc };
})();
