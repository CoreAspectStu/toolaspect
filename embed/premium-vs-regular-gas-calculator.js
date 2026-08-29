/*!
 * ToolAspect Premium vs Regular Gas Calculator Embed
 * Install: <div id="ta-premium-vs-regular-gas-calculator"></div>
 *          <script src="https://toolaspect.com/embed/premium-vs-regular-gas-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-premium-vs-regular-gas-calculator';
  var BASE = 'https://toolaspect.com/premium-vs-regular-gas-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'premium-vs-regular-gas-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="premium-vs-regular-gas-calculator"]')) {
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
    + '<div class="ta-embed-title">Premium vs Regular Gas</div>'
    + '<div class="ta-embed-subtitle">Annual cost difference at your mileage and pump prices</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>What does your manual say?</label>'
    + '<select class="ta-mode">'
    + '<option value="regular">Runs on regular (87)</option>'
    + '<option value="recommended">Premium recommended</option>'
    + '<option value="required">Premium required</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Annual Miles</label><input type="number" class="ta-miles" value="12000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>MPG on Regular</label><input type="number" class="ta-mpg" value="28" min="1" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>MPG Change on Premium (%)</label><input type="number" class="ta-delta" value="0" step="0.5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Price/Gal Regular ($)</label><input type="number" class="ta-preg" value="3.20" min="0" step="0.01"></div>'
    + '<div class="ta-embed-form-group"><label>Price/Gal Premium ($)</label><input type="number" class="ta-pprem" value="3.85" min="0" step="0.01"></div>'
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
  function usd(n) { return '$' + Math.round(Math.abs(n)).toLocaleString('en-US'); }

  function calc() {
    var miles = val('.ta-miles');
    var mpg = val('.ta-mpg');
    var preg = val('.ta-preg');
    var pprem = val('.ta-pprem');
    var delta = val('.ta-delta');
    var mode = root.querySelector('.ta-mode').value;
    if (miles <= 0 || mpg <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your mileage and mpg</div>';
      return;
    }
    var mpgPrem = mpg * (1 + delta / 100);
    var costReg = (miles / mpg) * preg;
    var costPrem = (miles / mpgPrem) * pprem;
    var diff = costPrem - costReg;
    var be = preg > 0 ? (pprem / preg - 1) * 100 : 0;
    var verdict;
    if (mode === 'regular') {
      verdict = 'Your car is designed for regular: AAA found no benefit from premium, so this is pure waste.';
    } else if (mode === 'recommended') {
      verdict = delta > be && delta > 0
        ? 'Your mpg gain beats the +' + be.toFixed(1) + '% break-even bar, so premium pays for itself.'
        : 'Premium is only recommended: you would need more than +' + be.toFixed(1) + '% mpg for premium to break even.';
    } else {
      verdict = delta < 0
        ? 'Premium required, but regular saves money at this ' + delta + '% mpg penalty. Use premium for towing or extreme heat.'
        : 'Premium required and no mpg penalty modeled: follow the manual and use premium.';
    }
    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + (diff >= 0 ? '+' : '−') + usd(diff) + '/yr</div>'
      + '<div class="ta-embed-sub">Regular: ' + usd(costReg) + '/yr · Premium: ' + usd(costPrem) + '/yr</div>'
      + '<div class="ta-embed-sub">' + verdict + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.premiumVsRegularGas = { recalc: calc };
})();
