/*!
 * ToolAspect Hydration by Weight Calculator Embed
 * Install: <div id="ta-hydration-needs-by-weight"></div>
 *          <script src="https://toolaspect.com/embed/hydration-needs-by-weight.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-hydration-needs-by-weight';
  var BASE = 'https://toolaspect.com/hydration-needs-by-weight/';

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
    + '.ta-embed-form-row3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-extra{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:12px}'
    + '.ta-embed-box{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:12px;text-align:center}'
    + '.ta-embed-box .k{font-size:.72rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em}'
    + '.ta-embed-box .v{font-size:1.15rem;font-weight:700;color:var(--ta-text);margin-top:3px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-form-row3,.ta-embed-extra{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'hydration-needs-by-weight');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="hydration-needs-by-weight"]')) {
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
    + '<div class="ta-embed-title">Hydration Calculator by Weight</div>'
    + '<div class="ta-embed-subtitle">Half your body weight in ounces, plus exercise and climate</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row3">'
    + '<div class="ta-embed-form-group"><label>Body weight</label><input type="number" class="ta-w" value="180" min="40" max="700" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Units</label><select class="ta-units"><option value="lb">lb</option><option value="kg">kg</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Exercise (min/day)</label><input type="number" class="ta-ex" value="30" min="0" max="600" step="5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group" style="margin-bottom:0"><label>Climate</label><select class="ta-cl">'
    + '<option value="1">Temperate</option>'
    + '<option value="1.1">Hot / humid</option>'
    + '<option value="1.05">Dry / high altitude</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-extra">'
    + '<div class="ta-embed-box"><div class="k">Cups</div><div class="v ta-cups">—</div></div>'
    + '<div class="ta-embed-box"><div class="k">Liters</div><div class="v ta-lit">—</div></div>'
    + '<div class="ta-embed-box"><div class="k">16.9 oz bottles</div><div class="v ta-bot">—</div></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var w = parseFloat(root.querySelector('.ta-w').value);
    var lb = (root.querySelector('.ta-units').value === 'kg') ? w * 2.2046 : w;
    var ex = parseFloat(root.querySelector('.ta-ex').value) || 0;
    var cl = parseFloat(root.querySelector('.ta-cl').value) || 1;
    if (isNaN(w) || w <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your body weight</div>';
      return;
    }
    var oz = (lb * 0.5 + ex * 0.4) * cl;
    resultEl.innerHTML = '<div class="ta-embed-big">' + Math.round(oz) + ' oz/day</div>'
      + '<div class="ta-embed-sub">baseline ' + Math.round(lb * 0.5) + ' oz + ' + Math.round(ex * 0.4) + ' oz exercise'
      + (cl > 1 ? ' × ' + cl + ' climate' : '') + '</div>';
    root.querySelector('.ta-cups').textContent = Math.round(oz / 8) + '';
    root.querySelector('.ta-lit').textContent = (Math.round(oz * 0.0295735 * 10) / 10) + '';
    root.querySelector('.ta-bot').textContent = Math.round(oz / 16.9) + '';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.hydrationNeedsByWeight = { recalc: calc };
})();
