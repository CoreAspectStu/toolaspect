/*!
 * ToolAspect Coding Bootcamp ROI Calculator Embed
 * Install: <div id="ta-bootcamp-roi-calculator"></div>
 *          <script src="https://toolaspect.com/embed/bootcamp-roi-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-bootcamp-roi-calculator';
  var BASE = 'https://toolaspect.com/bootcamp-roi-calculator/';

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
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:8px;font-size:.85rem}'
    + '.ta-embed-cell strong{display:block;font-size:1.05rem}'
    + '.ta-embed-cell span{color:var(--ta-muted);font-size:.75rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'bootcamp-roi-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="bootcamp-roi-calculator"]')) {
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
    + '<div class="ta-embed-title">Coding Bootcamp ROI Calculator</div>'
    + '<div class="ta-embed-subtitle">Tuition plus forgone pay against the raise</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Format</label><select class="ta-format">'
    + '<option value="ft" selected>Full-time (quit working)</option>'
    + '<option value="pt">Part-time (keep working)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Tuition + fees ($)</label><input class="ta-tuition" type="number" value="14000" min="0" max="60000" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Program + job search (months)</label><input class="ta-months" type="number" value="5" min="1" max="36" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Placement rate (%)</label><input class="ta-place" type="number" value="80" min="10" max="100" step="5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Current salary ($/yr)</label><input class="ta-cur" type="number" value="45000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Post-bootcamp salary ($/yr)</label><input class="ta-post" type="number" value="70000" min="0" step="1000"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function val(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function sel2(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function yrMo(m) {
    if (!isFinite(m) || m <= 0) return 'Never';
    var y = Math.floor(m / 12), r = Math.round(m % 12);
    if (y === 0) return r + ' mo';
    if (r === 12) { y++; r = 0; }
    if (r === 0) return y + ' yr';
    return y + ' yr ' + r + ' mo';
  }

  function calc() {
    var ft = sel2('.ta-format') === 'ft';
    var tuition = val('.ta-tuition');
    var months = val('.ta-months');
    var place = val('.ta-place');
    var cur = val('.ta-cur');
    var post = val('.ta-post');
    var upliftMo = (post - cur) / 12;
    var expMo = upliftMo * place / 100;
    var forgone = ft ? (cur / 12 * months) : 0;
    var inv = tuition + forgone;
    if (expMo <= 0 || inv <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter a post-bootcamp salary above your current one</div>';
      return;
    }
    var be = inv / expMo;
    var net5 = 60 * expMo - inv;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + yrMo(be) + '</div>'
      + '<div class="ta-embed-sub">payback after starting the new job</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>All-in investment</span><strong>' + usd(inv) + '</strong></div>'
      + '<div class="ta-embed-cell"><span>5-year expected net</span><strong>' + usd(net5) + '</strong></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.bootcampRoiCalculator = { recalc: calc };
})();
