/*!
 * ToolAspect Vehicle Section 179 Calculator Embed
 * Install: <div id="ta-vehicle-section-179-calculator"></div>
 *          <script src="https://toolaspect.com/embed/vehicle-section-179-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-vehicle-section-179-calculator';
  var BASE = 'https://toolaspect.com/vehicle-section-179-calculator/';

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
    + '.ta-embed-line{display:flex;justify-content:space-between;font-size:.85rem;color:var(--ta-text);padding:6px 2px;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-line:last-child{border-bottom:none}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'vehicle-section-179-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="vehicle-section-179-calculator"]')) {
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
    + '<div class="ta-embed-title">Vehicle Section 179 Calculator</div>'
    + '<div class="ta-embed-subtitle">First-year expensing with the heavy-SUV cap</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Tax year</label><select class="ta-year">'
    + '<option value="2026" selected>2026</option><option value="2025">2025</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Vehicle price ($)</label><input type="number" class="ta-price" value="72000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Business use (%)</label><input type="number" class="ta-bus" value="100" min="0" max="100" step="5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row" style="margin-top:10px">'
    + '<div class="ta-embed-form-group" style="grid-column:1 / -1"><label>Vehicle class (GVWR, door-jamb sticker)</label><select class="ta-cls">'
    + '<option value="light">&le; 6,000 lbs (car, crossover, small SUV)</option>'
    + '<option value="suv" selected>6,001 &ndash; 14,000 lbs SUV (capped)</option>'
    + '<option value="truck">Over 6,000 lbs truck / cargo van</option>'
    + '<option value="heavy">Over 14,000 lbs</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two" style="margin-top:10px">'
    + '<div class="ta-embed-form-group"><label>Bonus depreciation (%)</label><select class="ta-bonus">'
    + '<option value="100" selected>100%</option><option value="80">80%</option><option value="60">60%</option>'
    + '<option value="40">40%</option><option value="0">0%</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Marginal tax rate (%)</label><input type="number" class="ta-mtr" value="24" min="0" max="50" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub"></div>'
    + '<div class="ta-embed-line"><span>Eligible basis</span><strong class="ta-basis">—</strong></div>'
    + '<div class="ta-embed-line"><span>Section 179</span><strong class="ta-179">—</strong></div>'
    + '<div class="ta-embed-line"><span>Bonus depreciation</span><strong class="ta-bon">—</strong></div>'
    + '<div class="ta-embed-line"><span>Est. federal tax value</span><strong class="ta-tax">—</strong></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var LIM = {
    2026: { lim: 2560000, th: 4090000, suv: 32000 },
    2025: { lim: 2500000, th: 4000000, suv: 31300 }
  };
  var AUTO_WITH_BONUS = 20400;

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var year = root.querySelector('.ta-year').value;
    var L = LIM[year];
    var price = val('.ta-price');
    var cls = root.querySelector('.ta-cls').value;
    var bus = val('.ta-bus');
    var bonusPct = val('.ta-bonus');
    var mtr = val('.ta-mtr');
    var basis = price * bus / 100;
    var effLim = L.lim;
    var firstYr, c179, bon, note;
    if (cls === 'light') {
      firstYr = Math.min(basis, AUTO_WITH_BONUS);
      c179 = 'in auto cap';
      bon = 'in auto cap';
      note = 'light-vehicle luxury-auto cap ≈ $20,400 incl. bonus';
    } else {
      var cap = cls === 'suv' ? L.suv : basis;
      c179 = Math.min(effLim, cap, basis);
      bon = (basis - c179) * bonusPct / 100;
      firstYr = c179 + bon;
      note = cls === 'suv' && basis > L.suv ? ('SUV cap ' + usd(L.suv) + ' + bonus on the rest') : 'no vehicle cap binding';
    }
    root.querySelector('.ta-embed-big').textContent = bus <= 50 ? 'Not eligible' : usd(firstYr);
    root.querySelector('.ta-embed-sub').textContent = bus <= 50 ? 'Section 179 needs > 50% business use' : 'First-year deduction — ' + note;
    root.querySelector('.ta-basis').textContent = usd(basis);
    root.querySelector('.ta-179').textContent = typeof c179 === 'string' ? c179 : usd(c179);
    root.querySelector('.ta-bon').textContent = typeof bon === 'string' ? bon : usd(bon);
    root.querySelector('.ta-tax').textContent = usd(firstYr * mtr / 100);
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.vehicleSection179Calculator = { recalc: calc };
})();
