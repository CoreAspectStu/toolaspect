/*!
 * ToolAspect Horse Trailer Cost Calculator Embed
 * Install: <div id="ta-horse-trailer-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/horse-trailer-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-horse-trailer-cost-calculator';
  var BASE = 'https://toolaspect.com/horse-trailer-cost-calculator/';

  var TYPES = {
    econ: { lo: 10000, typ: 13000, hi: 16000, name: 'Economy 2-horse BP (steel)' },
    stock: { lo: 8000, typ: 12000, hi: 18000, name: 'Stock / combo trailer' },
    mid: { lo: 20000, typ: 26000, hi: 33000, name: 'Mid 2-horse BP (aluminum)' },
    gn: { lo: 28000, typ: 34000, hi: 40000, name: '2-horse gooseneck' },
    lq2: { lo: 30000, typ: 42000, hi: 55000, name: '2-horse w/ living quarters' },
    lq3: { lo: 60000, typ: 85000, hi: 110000, name: '3-4 horse w/ full LQ' },
    lux: { lo: 100000, typ: 160000, hi: 250000, name: 'Luxury 4+ horse LQ' }
  };

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
  styleEl.setAttribute('data-ta-embed', 'horse-trailer-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="horse-trailer-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Horse Trailer Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Out-the-door price by type and condition</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Trailer type</label><select class="ta-type">'
    + '<option value="econ">Economy 2-horse BP</option><option value="stock">Stock / combo</option>'
    + '<option value="mid" selected>Mid 2-horse BP (alu)</option><option value="gn">2-horse gooseneck</option>'
    + '<option value="lq2">2-horse w/ LQ</option><option value="lq3">3-4 horse full LQ</option>'
    + '<option value="lux">Luxury 4+ horse LQ</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Condition</label><select class="ta-cond">'
    + '<option value="1">New</option><option value="0.75" selected>Used — like new</option>'
    + '<option value="0.55">Used — good</option><option value="0.35">Used — older</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Price level</label><select class="ta-band">'
    + '<option value="lo">Low</option><option value="typ" selected>Typical</option><option value="hi">High</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Sales tax (%)</label><input type="number" class="ta-tax" value="6" min="0" max="12" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Tow setup</label><select class="ta-tow">'
    + '<option value="0">Already equipped</option><option value="250" selected>Brake controller (+$250)</option>'
    + '<option value="1150">Gooseneck hitch + controller (+$1,150)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Delivery miles ($1.75/mi)</label><input type="number" class="ta-miles" value="0" min="0" step="25"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var t = root.querySelector('.ta-type').value;
    var c = parseFloat(root.querySelector('.ta-cond').value);
    var band = root.querySelector('.ta-band').value;
    var tax = parseFloat(root.querySelector('.ta-tax').value) || 0;
    var tow = parseFloat(root.querySelector('.ta-tow').value) || 0;
    var miles = parseFloat(root.querySelector('.ta-miles').value) || 0;
    var base = TYPES[t][band] * c;
    var otd = base * (1 + tax / 100) + 150 + tow + miles * 1.75;
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(otd).toLocaleString('en-US') + '</div>'
      + '<div class="ta-embed-sub">out-the-door · $' + Math.round(base).toLocaleString('en-US') + ' trailer + tax, title, setup & delivery</div>'
      + '<div class="ta-embed-sub">' + TYPES[t].name + ' · first year ≈ $' + Math.round(otd + 500).toLocaleString('en-US') + ' incl. insurance & maintenance</div>'
      + '<div class="ta-embed-sub">Dealer-listing price bands. Your market will vary.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.horseTrailerCostCalculator = { recalc: calc };
})();
