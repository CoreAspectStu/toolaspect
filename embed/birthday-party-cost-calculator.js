/*!
 * ToolAspect Birthday Party Cost Calculator Embed
 * Install: <div id="ta-birthday-party-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/birthday-party-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-birthday-party-cost-calculator';
  var BASE = 'https://toolaspect.com/birthday-party-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;gap:7px;font-size:.82rem;color:var(--ta-text);margin-top:2px}'
    + '.ta-embed-check input{width:auto;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'birthday-party-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="birthday-party-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Birthday Party Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Kids and adult party budgets by mode and guest count</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Party type</label><select class="ta-mode">'
    + '<option value="kidshome">Kids, at home</option>'
    + '<option value="kidsvenue" selected>Kids, at a venue</option>'
    + '<option value="adulthome">Adults, at home</option>'
    + '<option value="adultvenue">Adults, restaurant/bar</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Guests</label><input type="number" class="ta-guests" value="12" min="2" max="300" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-ent"> Entertainment</label>'
    + '<label class="ta-embed-check ta-alco-wrap" style="display:none"><input type="checkbox" class="ta-alco" checked> Drinks</label>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-bakery"> Bakery cake</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var RATES = {
    kidshome: { label: 'kids at home', food: [7, 12], fixed: [[30, 75], [30, 100]], favors: [3, 6], invites: [0, 25], ent: [150, 350] },
    kidsvenue: { label: 'kids at a venue', food: [18, 35], fixed: [[30, 75]], favors: [3, 6], invites: [0, 25], ent: [150, 350] },
    adulthome: { label: 'adults at home', food: [12, 25], fixed: [[40, 120], [25, 100]], drinks: [8, 18], ent: [200, 500] },
    adultvenue: { label: 'adults at a restaurant', food: [25, 60], fixed: [[40, 120]], drinks: [10, 25], ent: [200, 500] }
  };
  var BAKERY = [40, 100];

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var mode = val('.ta-mode');
    var r = RATES[mode];
    var g = Math.max(1, parseInt(val('.ta-guests'), 10) || 1);
    var ent = root.querySelector('.ta-ent').checked;
    var bakery = root.querySelector('.ta-bakery').checked;
    var alco = root.querySelector('.ta-alco').checked && mode.indexOf('adult') === 0;
    root.querySelector('.ta-alco-wrap').style.display = mode.indexOf('adult') === 0 ? '' : 'none';

    var fl = r.food[0] * g, fh = r.food[1] * g;
    if (alco) { fl += r.drinks[0] * g; fh += r.drinks[1] * g; }
    var ol = 0, oh = 0;
    r.fixed.forEach(function (f) { ol += f[0]; oh += f[1]; });
    if (r.favors) { ol += r.favors[0] * g; oh += r.favors[1] * g; }
    if (r.invites) { ol += r.invites[0]; oh += r.invites[1]; }
    if (ent) { ol += r.ent[0]; oh += r.ent[1]; }
    if (bakery) { ol += BAKERY[0]; oh += BAKERY[1]; }
    var lo = fl + ol, hi = fh + oh;

    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">' + g + ' guests, ' + r.label
      + (ent ? ', with entertainment' : '') + (bakery ? ', bakery cake' : '') + (alco ? ', with drinks' : '') + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Per guest</div><div class="rv">$' + Math.round(lo / g) + ' – $' + Math.round(hi / g) + '</div></div>'
      + '<div><div class="rl">Food &amp; venue lines</div><div class="rv">' + money(fl) + ' – ' + money(fh) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.birthdayPartyCostCalculator = { recalc: calc };
})();
