/*!
 * ToolAspect A1c to Glucose Converter Embed
 * Install: <div id="ta-glucose-a1c-converter"></div>
 *          <script src="https://toolaspect.com/embed/glucose-a1c-converter.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-glucose-a1c-converter';
  var BASE = 'https://toolaspect.com/glucose-a1c-converter/';

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
    + '.ta-embed-mode{display:flex;gap:8px;margin-bottom:12px}'
    + '.ta-embed-mode button{flex:1;padding:8px;border:1px solid var(--ta-border);background:var(--ta-bg);color:var(--ta-muted);'
    + 'border-radius:8px;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode button.on{background:var(--ta-accent);border-color:var(--ta-accent);color:#fff}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-cat{display:inline-block;padding:3px 12px;border-radius:999px;font-size:.78rem;font-weight:600;margin-top:10px}'
    + '.ta-embed-cat.ok{background:rgba(34,197,94,.14);color:#16a34a}'
    + '.ta-embed-cat.pre{background:rgba(245,158,11,.14);color:#b45309}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-cat.ok{color:#4ade80}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-cat.pre{color:#fbbf24}'
    + '.ta-embed-cat.dia{background:rgba(239,68,68,.14);color:#dc2626}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-cat.dia{color:#f87171}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '.ta-embed-hide{display:none}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'glucose-a1c-converter');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="glucose-a1c-converter"]')) {
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
    + '<div class="ta-embed-title">A1c to Glucose Converter</div>'
    + '<div class="ta-embed-subtitle">ADAG formula: eAG = 28.7 × A1c − 46.7</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-mode">'
    + '<button type="button" class="ta-fwd on">A1c → Glucose</button>'
    + '<button type="button" class="ta-rev">Glucose → A1c</button>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group ta-grp-a"><label>HbA1c (%)</label><input type="number" class="ta-a1c" value="7" min="3" max="20" step="0.1"></div>'
    + '<div class="ta-embed-form-group ta-grp-g ta-embed-hide"><label>Average glucose</label><input type="number" class="ta-gl" value="154" min="20" max="600" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Units</label><select class="ta-units"><option value="mg">mg/dL</option><option value="mmol">mmol/L</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var fwd = true;
  var EPS = 1e-9;

  function rd(n) { return Math.round(n + EPS); }
  function r1(n) { return Math.round((n + EPS) * 10) / 10; }

  function setMode(f) {
    fwd = f;
    root.querySelector('.ta-fwd').className = 'ta-fwd' + (f ? ' on' : '');
    root.querySelector('.ta-rev').className = 'ta-rev' + (f ? '' : ' on');
    root.querySelector('.ta-grp-a').className = 'ta-embed-form-group ta-grp-a' + (f ? '' : ' ta-embed-hide');
    root.querySelector('.ta-grp-g').className = 'ta-embed-form-group ta-grp-g' + (f ? ' ta-embed-hide' : '');
    calc();
  }

  root.querySelector('.ta-fwd').addEventListener('click', function () { setMode(true); });
  root.querySelector('.ta-rev').addEventListener('click', function () { setMode(false); });

  function calc() {
    var units = root.querySelector('.ta-units').value;
    var a1c, mg;
    if (fwd) {
      a1c = parseFloat(root.querySelector('.ta-a1c').value);
      if (isNaN(a1c) || a1c <= 0) {
        resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your A1c</div>';
        return;
      }
      mg = 28.7 * a1c - 46.7;
      paint(rd(mg) + ' mg/dL', r1(mg / 18) + ' mmol/L · A1c ' + a1c + '%', a1c);
    } else {
      var g = parseFloat(root.querySelector('.ta-gl').value);
      if (isNaN(g) || g <= 0) {
        resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your average glucose</div>';
        return;
      }
      mg = (units === 'mmol') ? g * 18 : g;
      a1c = (mg + 46.7) / 28.7;
      paint(r1(a1c) + '% A1c', 'from an average of ' + rd(mg) + ' mg/dL (' + r1(mg / 18) + ' mmol/L)', a1c);
    }
  }

  function paint(big, sub, a1c) {
    var cls, label;
    if (a1c < 5.7) { cls = 'ok'; label = 'Normal'; }
    else if (a1c < 6.5) { cls = 'pre'; label = 'Prediabetes'; }
    else { cls = 'dia'; label = 'Diabetes range'; }
    resultEl.innerHTML = '<div class="ta-embed-big">' + big + '</div>'
      + '<div class="ta-embed-sub">' + sub + '</div>'
      + '<span class="ta-embed-cat ' + cls + '">' + label + '</span>';
  }

  root.addEventListener('input', calc);
  root.querySelector('.ta-units').addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.glucoseA1cConverter = { recalc: calc };
})();
