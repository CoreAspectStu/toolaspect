/*!
 * ToolAspect Tire Load Index Chart Embed
 * Install: <div id="ta-tire-load-index-chart"></div>
 *          <script src="https://toolaspect.com/embed/tire-load-index-chart.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-tire-load-index-chart';
  var BASE = 'https://toolaspect.com/tire-load-index-chart/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-breakdown{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;margin-top:12px;font-size:.82rem;color:var(--ta-muted)}'
    + '.ta-embed-breakdown strong{color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'tire-load-index-chart');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="tire-load-index-chart"]')) {
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
    + '<div class="ta-embed-title">Tire Load Index Chart</div>'
    + '<div class="ta-embed-subtitle">Decode any service description — 102H, 121S, 95V</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Load index</label><select class="ta-li"><option value="102" selected>102</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Speed rating</label><select class="ta-sr">'
    + '<option value="T">T — 118 mph</option><option value="H" selected>H — 130 mph</option><option value="V">V — 149 mph</option>'
    + '<option value="S">S — 112 mph</option><option value="W">W — 168 mph</option><option value="Y">Y — 186 mph</option>'
    + '<option value="R">R — 106 mph</option><option value="Q">Q — 99 mph</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var LI = { 71: 345, 75: 387, 76: 400, 77: 412, 78: 425, 80: 450, 81: 462, 82: 475, 83: 487, 84: 500, 85: 515, 86: 530, 87: 545, 88: 560, 89: 580, 90: 600, 91: 615, 92: 630, 93: 650, 94: 670, 95: 690, 96: 710, 97: 730, 98: 750, 99: 775, 100: 800, 101: 825, 102: 850, 103: 875, 104: 900, 105: 925, 106: 950, 107: 975, 108: 1000, 109: 1030, 110: 1060, 111: 1090, 112: 1120, 113: 1150, 114: 1180, 115: 1215, 116: 1250, 117: 1285, 118: 1320, 119: 1360, 120: 1400, 121: 1450, 122: 1500, 123: 1550, 124: 1600, 125: 1650, 126: 1700 };
  var SPEED = { L: 75, M: 81, N: 87, P: 93, Q: 99, R: 106, S: 112, T: 118, H: 130, V: 149, W: 168, Y: 186 };

  // populate the index dropdown
  var liSel = root.querySelector('.ta-li');
  Object.keys(LI).map(Number).sort(function (a, b) { return a - b; }).forEach(function (k) {
    var o = document.createElement('option');
    o.value = k;
    o.textContent = k + ' — ' + Math.round(LI[k] * 2.20462).toLocaleString('en-US') + ' lb';
    liSel.appendChild(o);
  });

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? el.value : '';
  }

  function calc() {
    var k = parseInt(val('.ta-li'), 10);
    var sr = val('.ta-sr');
    var kg = LI[k];
    if (!kg) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Pick a load index</div>';
      return;
    }
    var lbv = Math.round(kg * 2.20462);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + k + sr + ' = ' + lbv.toLocaleString('en-US') + ' lb</div>'
      + '<div class="ta-embed-sub">max load per tire, at max sidewall pressure</div>'
      + '<div class="ta-embed-breakdown">'
      + '<span>Metric: <strong>' + kg.toLocaleString('en-US') + ' kg</strong></span>'
      + '<span>Set of 4: <strong>' + (lbv * 4).toLocaleString('en-US') + ' lb</strong></span>'
      + '<span>Speed ' + sr + ': <strong>' + SPEED[sr] + ' mph</strong></span>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.tireLoadIndexChart = { recalc: calc };
})();
