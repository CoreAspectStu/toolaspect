/*!
 * ToolAspect Slope Calculator Embed
 * Install: <div id="ta-slope-calculator"></div>
 *          <script src="https://toolaspect.com/embed/slope-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-slope-calculator';
  var BASE = 'https://toolaspect.com/slope-calculator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px 6px}'
    + '.ta-embed-cell .k{font-size:.7rem;color:var(--ta-muted);margin-bottom:3px;text-transform:uppercase;letter-spacing:.03em}'
    + '.ta-embed-cell .v{font-size:.95rem;font-weight:700;color:var(--ta-text);word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}.ta-embed-grid{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'slope-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="slope-calculator"]')) {
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
    + '<div class="ta-embed-title">Slope Calculator</div>'
    + '<div class="ta-embed-subtitle">Slope, y-intercept, and line equation from two points</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>x₁</label><input type="number" class="ta-x1" value="2" step="any"></div>'
    + '<div class="ta-embed-form-group"><label>y₁</label><input type="number" class="ta-y1" value="3" step="any"></div>'
    + '<div class="ta-embed-form-group"><label>x₂</label><input type="number" class="ta-x2" value="6" step="any"></div>'
    + '<div class="ta-embed-form-group"><label>y₂</label><input type="number" class="ta-y2" value="11" step="any"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function has(sel) {
    var el = root.querySelector(sel);
    return !!el && el.value !== '' && !isNaN(parseFloat(el.value));
  }
  function fmt(n) {
    var r = Math.round(n * 100) / 100;
    return (Object.is(r, -0) ? 0 : r).toString();
  }

  function calc() {
    if (!has('.ta-x1') || !has('.ta-y1') || !has('.ta-x2') || !has('.ta-y2')) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter both points</div>';
      return;
    }
    var x1 = val('.ta-x1'), y1 = val('.ta-y1'), x2 = val('.ta-x2'), y2 = val('.ta-y2');
    var dx = x2 - x1, dy = y2 - y1;
    var dist = Math.sqrt(dx * dx + dy * dy);
    var mid = '(' + fmt((x1 + x2) / 2) + ', ' + fmt((y1 + y2) / 2) + ')';
    if (dx === 0) {
      resultEl.innerHTML =
        '<div class="ta-embed-big">Undefined</div>'
        + '<div class="ta-embed-sub">Vertical line: x = ' + fmt(x1) + '</div>'
        + '<div class="ta-embed-grid">'
        + '<div class="ta-embed-cell"><div class="k">Distance</div><div class="v">' + fmt(dist) + '</div></div>'
        + '<div class="ta-embed-cell"><div class="k">Midpoint</div><div class="v">' + mid + '</div></div>'
        + '<div class="ta-embed-cell"><div class="k">Equation</div><div class="v">x = ' + fmt(x1) + '</div></div>'
        + '</div>';
      return;
    }
    var m = dy / dx, b = y1 - m * x1;
    resultEl.innerHTML =
      '<div class="ta-embed-big">m = ' + fmt(m) + '</div>'
      + '<div class="ta-embed-sub">y = ' + fmt(m) + 'x ' + (b < 0 ? '− ' : '+ ') + fmt(Math.abs(b)) + '</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><div class="k">Y-intercept</div><div class="v">' + fmt(b) + '</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Angle</div><div class="v">' + fmt(Math.atan(m) * 180 / Math.PI) + '°</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Distance</div><div class="v">' + fmt(dist) + '</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Midpoint</div><div class="v">' + mid + '</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Perpendicular</div><div class="v">' + (m === 0 ? 'Undefined' : fmt(-1 / m)) + '</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Grade</div><div class="v">' + fmt(m * 100) + '%</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.slopeCalculator = { recalc: calc };
})();
