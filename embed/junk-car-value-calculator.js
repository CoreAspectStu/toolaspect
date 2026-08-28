/*!
 * ToolAspect Junk Car Value Calculator Embed
 * Install: <div id="ta-junk-car-value-calculator"></div>
 *          <script src="https://toolaspect.com/embed/junk-car-value-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-junk-car-value-calculator';
  var BASE = 'https://toolaspect.com/junk-car-value-calculator/';

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
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'junk-car-value-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="junk-car-value-calculator"]')) {
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
    + '<div class="ta-embed-title">Junk Car Value Calculator</div>'
    + '<div class="ta-embed-subtitle">Scrap steel x curb weight, adjusted for condition</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Curb weight (lb)</label><input type="number" class="ta-w" value="3300" min="800" max="12000" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Steel ($/ton)</label><input type="number" class="ta-steel" value="150" min="50" max="400" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Runs &amp; drives?</label><select class="ta-run"><option value="yes" selected>Yes</option><option value="no">No, needs tow</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Converter</label><select class="ta-cat"><option value="yes" selected>On the car</option><option value="no">Removed</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Title</label><select class="ta-title"><option value="yes" selected>Clean title</option><option value="no">No title</option></select></div>'
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

  function money(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calc() {
    var lb = val('.ta-w');
    var steel = val('.ta-steel');
    var running = root.querySelector('.ta-run').value === 'yes';
    var hasCat = root.querySelector('.ta-cat').value === 'yes';
    var hasTitle = root.querySelector('.ta-title').value === 'yes';
    if (lb <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter the vehicle weight</div>';
      return;
    }
    var tons = lb / 2000;
    var scrap = tons * steel;
    var prem = running ? 150 + tons * 60 : 0;
    var adj = (hasCat ? 0 : -100);
    var mid = scrap + prem + adj;
    if (!hasTitle) mid *= 0.85;
    var low = Math.round(mid * 0.8), high = Math.round(mid * 1.25);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(mid) + '</div>'
      + '<div class="ta-embed-sub">likely offer range <strong>' + money(low) + ' – ' + money(high) + '</strong></div>'
      + '<div class="ta-embed-sub">' + tons.toFixed(2) + ' tons × $' + Math.round(steel) + '/ton = ' + money(scrap) + ' scrap'
      + (prem > 0 ? ' + ' + money(prem) + ' running premium' : '')
      + (adj !== 0 || !hasTitle ? ' · deductions applied' : '') + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.junkCarValueCalculator = { recalc: calc };
})();
