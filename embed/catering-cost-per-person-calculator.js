/*!
 * ToolAspect Catering Cost Per Person Calculator Embed
 * Install: <div id="ta-catering-cost-per-person-calculator"></div>
 *          <script src="https://toolaspect.com/embed/catering-cost-per-person-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-catering-cost-per-person-calculator';
  var BASE = 'https://toolaspect.com/catering-cost-per-person-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}.ta-embed-range{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'catering-cost-per-person-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="catering-cost-per-person-calculator"]')) {
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
    + '<div class="ta-embed-title">Catering Cost Per Person</div>'
    + '<div class="ta-embed-subtitle">Food + bar + cake + service charge + tax</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guests</label><input type="number" class="ta-guests" value="120" min="1" max="1000" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Service Style</label><select class="ta-style">'
    + '<option value="plated">Plated dinner</option>'
    + '<option value="buffet">Buffet</option>'
    + '<option value="family">Family style</option>'
    + '<option value="stations">Food stations</option>'
    + '<option value="cocktail">Cocktail / heavy apps</option>'
    + '<option value="brunch">Brunch / lunch</option>'
    + '<option value="bbq">Backyard BBQ</option>'
    + '<option value="truck">Food truck</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Bar Package</label><select class="ta-bar">'
    + '<option value="0">None</option>'
    + '<option value="20">Beer &amp; wine ($15-$25)</option>'
    + '<option value="25">Limited ($20-$30)</option>'
    + '<option value="38" selected>Full open ($30-$45)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Service Charge (%)</label><input type="number" class="ta-svc" value="22" min="0" max="30" step="0.5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Cake / Dessert ($/person)</label><input type="number" class="ta-cake" value="8" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Sales Tax (%)</label><input type="number" class="ta-tax" value="7" min="0" max="12" step="0.125"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var STYLES = {
    plated: { lo: 70, typ: 100, hi: 150 },
    buffet: { lo: 40, typ: 60, hi: 80 },
    family: { lo: 50, typ: 70, hi: 90 },
    stations: { lo: 60, typ: 85, hi: 110 },
    cocktail: { lo: 30, typ: 50, hi: 70 },
    brunch: { lo: 30, typ: 45, hi: 60 },
    bbq: { lo: 25, typ: 35, hi: 50 },
    truck: { lo: 15, typ: 22, hi: 30 }
  };
  var BARS = [
    { v: 0, lo: 0, hi: 0 },
    { v: 20, lo: 15, hi: 25 },
    { v: 25, lo: 20, hi: 30 },
    { v: 38, lo: 30, hi: 45 }
  ];

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var g = num('.ta-guests'), svc = num('.ta-svc'), cake = num('.ta-cake'), tax = num('.ta-tax');
    var style = STYLES[val('.ta-style')] || STYLES.plated;
    var barV = parseFloat(val('.ta-bar')) || 0;
    var bar = BARS.reduce(function (a, b) { return Math.abs(b.v - barV) < Math.abs(a.v - barV) ? b : a; });
    if (g <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your guest count</div>';
      return;
    }
    function total(foodPP, barPP) {
      var f = foodPP * g, b = barPP * g, c = cake * g;
      var s = (f + b) * svc / 100, t = (f + b + c + s) * tax / 100;
      return f + b + c + s + t;
    }
    var lo = total(style.lo, bar.lo), ty = total(style.typ, bar.v), hi = total(style.hi, bar.hi);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(ty / g) + '/person</div>'
      + '<div class="ta-embed-sub">' + money(ty) + ' total for ' + g + ' guests</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Low</div><div class="rv">' + money(lo) + '</div></div>'
      + '<div><div class="rl">Typical</div><div class="rv">' + money(ty) + '</div></div>'
      + '<div><div class="rl">High</div><div class="rv">' + money(hi) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.cateringCostPerPersonCalculator = { recalc: calc };
})();
