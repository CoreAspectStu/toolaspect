/*!
 * ToolAspect Car Depreciation Calculator Embed
 * Install: <div id="ta-car-depreciation-calculator"></div>
 *          <script src="https://toolaspect.com/embed/car-depreciation-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-car-depreciation-calculator';
  var BASE = 'https://toolaspect.com/car-depreciation-calculator/';

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
    + '.ta-embed-form-row.two{grid-template-columns:2fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:20px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-pair{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-box{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px}'
    + '.ta-embed-box .lbl{font-size:.72rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em}'
    + '.ta-embed-box .val{font-size:1.15rem;font-weight:700;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'car-depreciation-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="car-depreciation-calculator"]')) {
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
    + '<div class="ta-embed-title">Car Depreciation Calculator</div>'
    + '<div class="ta-embed-subtitle">Estimated value year by year, by segment</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Purchase price ($)</label><input type="number" class="ta-p" value="42000" min="500" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Years</label><input type="number" class="ta-y" value="5" min="1" max="10" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Segment</label><select class="ta-s">'
    + '<option value="compact">Compact car</option><option value="sedan">Sedan</option><option value="suv" selected>SUV / crossover</option>'
    + '<option value="truck">Pickup truck</option><option value="minivan">Minivan</option><option value="sports">Sports car</option>'
    + '<option value="luxury">Luxury</option><option value="ev">Electric</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Annual miles</label><input type="number" class="ta-m" value="12000" min="0" step="500"></div>'
    + '</div></div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div><div class="ta-embed-sub main">Enter your details</div>'
    + '<div class="ta-embed-pair">'
    + '<div class="ta-embed-box"><div class="lbl">After year 1</div><div class="val v1">—</div></div>'
    + '<div class="ta-embed-box"><div class="lbl">Total loss</div><div class="val vl">—</div></div>'
    + '</div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var SEG = {
    compact: { r1: .82, r2: .89 }, sedan: { r1: .78, r2: .88 }, suv: { r1: .82, r2: .90 },
    truck: { r1: .85, r2: .92 }, minivan: { r1: .80, r2: .89 }, sports: { r1: .85, r2: .91 },
    luxury: { r1: .75, r2: .87 }, ev: { r1: .75, r2: .85 }
  };

  function val(sel) { var el = root.querySelector(sel); return el ? parseFloat(el.value) : 0; }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function mileAdj(m, t) { var ex = Math.max(0, m - 12000) * t; return Math.max(0.75, 1 - ex / 1000 * 0.003); }

  function calc() {
    var p = val('.ta-p'), y = Math.min(10, Math.max(1, Math.round(val('.ta-y') || 5)));
    var seg = SEG[root.querySelector('.ta-s').value], m = val('.ta-m');
    if (!(p > 0)) {
      root.querySelector('.ta-embed-big').textContent = '—';
      root.querySelector('.main').textContent = 'Enter a purchase price';
      return;
    }
    var vAt = function (t) { return p * (t >= 1 ? seg.r1 * Math.pow(seg.r2, t - 1) : 1) * 0.94 * mileAdj(m, t); };
    var vn = vAt(y), v1 = vAt(1);
    root.querySelector('.ta-embed-big').textContent = usd(vn);
    root.querySelector('.main').textContent = 'estimated value after ' + y + ' year' + (y > 1 ? 's' : '') + ' (' + (vn / p * 100).toFixed(0) + '% retained)';
    root.querySelector('.v1').textContent = usd(v1);
    root.querySelector('.vl').textContent = usd(p - vn);
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.carDepreciationCalculator = { recalc: calc };
})();
