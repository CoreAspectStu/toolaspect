/*!
 * ToolAspect Actual vs Standard Mileage Calculator Embed
 * Install: <div id="ta-actual-vs-standard-mileage-calculator"></div>
 *          <script src="https://toolaspect.com/embed/actual-vs-standard-mileage-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-actual-vs-standard-mileage-calculator';
  var BASE = 'https://toolaspect.com/actual-vs-standard-mileage-calculator/';

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
    + '.ta-embed-big{font-size:2rem;font-weight:700;color:#16a34a}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-big{color:#4ade80}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-mini-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;text-align:center;font-size:.85rem;margin-top:14px}'
    + '.ta-embed-mini-row strong{display:block;font-size:1.1rem;margin-top:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'actual-vs-standard-mileage-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="actual-vs-standard-mileage-calculator"]')) {
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
    if (window.console) console.warn('ToolAspect embed: no container #' + TARGET_ID + ' found.');
    return;
  }

  var RATES = { 2026: [0.725, 0.76], 2025: [0.70, 0.70], 2024: [0.67, 0.67] };

  var html = ''
    + '<div class="ta-embed-root">'
    + '<div class="ta-embed-title">Standard vs Actual Mileage</div>'
    + '<div class="ta-embed-subtitle">Which deduction method wins on your car?</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Year</label><select id="tam-year"><option>2026</option><option>2025</option><option>2024</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Business mi, Jan-Jun</label><input type="number" id="tam-h1" value="6000" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Business mi, Jul-Dec</label><input type="number" id="tam-h2" value="6000" min="0"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Total miles (all use)</label><input type="number" id="tam-total" value="18000" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Yearly car costs ($)</label><input type="number" id="tam-costs" value="9600" min="0"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Business parking &amp; tolls ($)</label><input type="number" id="tam-tolls" value="420" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>&nbsp;</label><div style="font-size:.75rem;color:var(--ta-muted);padding-top:8px">Costs = gas + repairs + insurance + depreciation + fees + loan interest</div></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tam-hero">—</div>'
    + '<div class="ta-embed-sub" id="tam-herosub"></div>'
    + '<div class="ta-embed-mini-row">'
    + '<div><span style="color:var(--ta-muted)">Standard</span><strong id="tam-std">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Actual</span><strong id="tam-act">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Business use</span><strong id="tam-pct">—</strong></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tam-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function calc() {
    var yr = parseInt(g('year').value) || 2026;
    var h1 = parseFloat(g('h1').value) || 0;
    var h2 = parseFloat(g('h2').value) || 0;
    var total = parseFloat(g('total').value) || 0;
    var costs = parseFloat(g('costs').value) || 0;
    var tolls = parseFloat(g('tolls').value) || 0;
    var rate = RATES[yr] || RATES[2026];
    var std = h1 * rate[0] + h2 * rate[1];
    var pct = total > 0 ? Math.min(1, (h1 + h2) / total) : 0;
    var actual = costs * pct + tolls;
    g('std').textContent = money(std);
    g('act').textContent = money(actual);
    g('pct').textContent = total > 0 ? (pct * 100).toFixed(1) + '%' : '—';
    if (h1 + h2 <= 0) {
      g('hero').textContent = '—';
      g('herosub').textContent = 'Enter your business miles';
    } else if (std >= actual) {
      g('hero').textContent = 'Standard wins by ' + money(std - actual);
      g('herosub').textContent = money(std) + ' at the IRS rate vs ' + money(actual) + ' from actual costs';
    } else {
      g('hero').textContent = 'Actual wins by ' + money(actual - std);
      g('herosub').textContent = money(actual) + ' from actual costs vs ' + money(std) + ' at the IRS rate';
    }
  }

  target.addEventListener('input', calc);
  target.addEventListener('change', calc);
  calc();
})();
