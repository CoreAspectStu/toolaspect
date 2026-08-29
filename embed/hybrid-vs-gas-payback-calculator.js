/*!
 * ToolAspect Hybrid vs Gas Payback Calculator Embed
 * Install: <div id="ta-hybrid-vs-gas-payback-calculator"></div>
 *          <script src="https://toolaspect.com/embed/hybrid-vs-gas-payback-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-hybrid-vs-gas-payback-calculator';
  var BASE = 'https://toolaspect.com/hybrid-vs-gas-payback-calculator/';

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'hybrid-vs-gas-payback-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="hybrid-vs-gas-payback-calculator"]')) {
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
    + '<div class="ta-embed-title">Hybrid vs Gas Payback Calculator</div>'
    + '<div class="ta-embed-subtitle">When does the hybrid premium pay for itself?</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Hybrid premium ($)</label><input type="number" class="ta-prem" value="3400" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Gas car MPG</label><input type="number" class="ta-gmpg" value="30" min="1" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Hybrid MPG</label><input type="number" class="ta-hmpg" value="39" min="1" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Miles per year</label><input type="number" class="ta-miles" value="13500" min="1000" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Gas price ($/gal)</label><input type="number" class="ta-fuel" value="3.40" min="0.5" step="0.05"></div>'
    + '<div class="ta-embed-form-group"><label>Maint. saved ($/yr)</label><input type="number" class="ta-maint" value="100" min="0" step="25"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var prem = parseFloat(root.querySelector('.ta-prem').value) || 0;
    var gMpg = parseFloat(root.querySelector('.ta-gmpg').value) || 0;
    var hMpg = parseFloat(root.querySelector('.ta-hmpg').value) || 0;
    var miles = parseFloat(root.querySelector('.ta-miles').value) || 0;
    var fuel = parseFloat(root.querySelector('.ta-fuel').value) || 0;
    var maint = parseFloat(root.querySelector('.ta-maint').value) || 0;
    if (gMpg <= 0 || hMpg <= 0 || miles <= 0 || fuel <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter MPG, miles, and fuel price</div>';
      return;
    }
    var moMiles = miles / 12;
    var gMo = moMiles / gMpg * fuel;
    var hMo = moMiles / hMpg * fuel;
    var moBenefit = gMo - hMo + maint / 12;
    var html = '';
    if (moBenefit <= 0) {
      html = '<div class="ta-embed-big">Never</div><div class="ta-embed-sub">No monthly savings at these settings</div>';
    } else {
      var mo = prem / moBenefit;
      var y = Math.floor(mo / 12), r = Math.round(mo % 12);
      var label = mo < 12 ? Math.round(mo) + ' mo' : (y + ' yr ' + (r ? r + ' mo' : '')).trim();
      html = '<div class="ta-embed-big">' + label + '</div>'
        + '<div class="ta-embed-sub">$' + moBenefit.toFixed(2) + '/mo saved ($' + (moBenefit * 12).toFixed(0) + '/yr)</div>'
        + '<div class="ta-embed-sub">Gas $' + gMo.toFixed(2) + '/mo vs hybrid $' + hMo.toFixed(2) + '/mo in fuel</div>';
    }
    resultEl.innerHTML = html
      + '<div class="ta-embed-sub">Estimate based on your inputs; combined EPA MPG works best.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.hybridVsGasPaybackCalculator = { recalc: calc };
})();
