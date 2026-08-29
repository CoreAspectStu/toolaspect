/*!
 * ToolAspect Window Tint Cost Calculator Embed
 * Install: <div id="ta-window-tint-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/window-tint-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-window-tint-cost-calculator';
  var BASE = 'https://toolaspect.com/window-tint-cost-calculator/';

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
    + '.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-check{display:flex;align-items:center;gap:8px;font-size:.85rem;color:var(--ta-muted)}'
    + '.ta-embed-check input{width:16px;height:16px;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '.ta-embed-legal{font-size:.72rem;color:var(--ta-muted);text-align:center;margin-top:6px}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'window-tint-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="window-tint-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Window Tint Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Installed price by vehicle and film tier</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Vehicle</label><select class="ta-vehicle">'
    + '<option value="0.90">Coupe (2-door)</option><option value="1.00" selected>Sedan (4-door)</option>'
    + '<option value="1.15">SUV / crossover</option><option value="1.05">Pickup truck</option>'
    + '<option value="1.25">Van / large SUV</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Film</label><select class="ta-film">'
    + '<option value="150,300">Dyed (entry)</option><option value="250,600">Carbon</option>'
    + '<option value="400,900" selected>Ceramic</option><option value="700,1400">Premium ceramic</option></select></div>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-front"> Front two windows only</label>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-legal">Typical installed ranges; check your state’s VLT law before choosing a shade (not legal advice).</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var FRONT_PAIR = { '150,300': [80, 150], '250,600': [100, 250], '400,900': [150, 350], '700,1400': [200, 450] };
  var FILM_NAMES = { '150,300': 'Dyed', '250,600': 'Carbon', '400,900': 'Ceramic', '700,1400': 'Premium ceramic' };

  function r5(x) { return Math.round(x / 5) * 5; }
  function money(n) { return '$' + n.toLocaleString('en-US'); }

  function calc() {
    var mult = parseFloat(root.querySelector('.ta-vehicle').value) || 1;
    var key = root.querySelector('.ta-film').value;
    var bounds = key.split(',');
    var lo = parseFloat(bounds[0]), hi = parseFloat(bounds[1]);
    if (root.querySelector('.ta-front').checked) {
      var pair = FRONT_PAIR[key];
      lo = pair[0]; hi = pair[1];
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(r5(lo * mult)) + ' - ' + money(r5(hi * mult)) + '</div>'
      + '<div class="ta-embed-sub">installed, ' + (root.querySelector('.ta-front').checked ? 'front pair' : 'full vehicle')
      + ' · ' + FILM_NAMES[key] + ' film</div>';
  }

  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.windowTintCostCalculator = { recalc: calc };
})();
