/*!
 * ToolAspect Teen Driver Car Insurance Cost Calculator Embed
 * Install: <div id="ta-teen-driver-car-insurance-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/teen-driver-car-insurance-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-teen-driver-car-insurance-cost-calculator';
  var BASE = 'https://toolaspect.com/teen-driver-car-insurance-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#4f46e5;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#818cf8}'
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
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-line{display:flex;justify-content:space-between;font-size:.88rem;padding:6px 0;border-bottom:1px solid var(--ta-border)}'
    + '.ta-embed-line:last-child{border-bottom:none}'
    + '.ta-embed-line .k{color:var(--ta-muted)}'
    + '.ta-embed-line .v{font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'teen-driver-car-insurance-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="teen-driver-car-insurance-cost-calculator"]')) {
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

  var html = ''
    + '<div class="ta-embed-root">'
    + '<div class="ta-embed-title">Teen Driver Car Insurance Cost</div>'
    + '<div class="ta-embed-subtitle">What adding a 16-19 year old does to your premium</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Your annual premium ($)</label><input type="number" id="tatd-base" value="2189" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Teen age</label><select id="tatd-age"><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Gender</label><select id="tatd-gender"><option value="male">Male</option><option value="female">Female</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Good student (%)</label><input type="number" id="tatd-gs" value="10" min="0" max="25" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Driver training (%)</label><input type="number" id="tatd-dt" value="0" min="0" max="15" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tatd-added">&mdash;</div>'
    + '<div class="ta-embed-sub" id="tatd-addedsub">added per year</div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-line"><span class="k">New total annual premium</span><span class="v" id="tatd-total">&mdash;</span></div>'
    + '<div class="ta-embed-line"><span class="k">Increase</span><span class="v" id="tatd-pct">&mdash;</span></div>'
    + '<div class="ta-embed-line"><span class="k">Added per month</span><span class="v" id="tatd-mo">&mdash;</span></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  var ZEBRA_BASE = 2189;
  var ZEBRA_MALE = { 16: 8003, 17: 6981, 18: 6506, 19: 5690 };
  var GAP = { 16: 0.09, 17: 0.068, 18: 0.046, 19: 0.025 };

  function g(id) { return target.querySelector('#tatd-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function calc() {
    var base = parseFloat(g('base').value) || 0;
    var age = parseInt(g('age').value) || 16;
    var gender = g('gender').value;
    var gs = (parseFloat(g('gs').value) || 0) / 100;
    var dt = (parseFloat(g('dt').value) || 0) / 100;
    if (base <= 0) return;
    var policy = gender === 'male' ? ZEBRA_MALE[age] : ZEBRA_MALE[age] / (1 + GAP[age]);
    var share = policy - ZEBRA_BASE;
    var added = share * (1 - Math.min(0.9, gs + dt));
    g('added').textContent = money(added);
    g('addedsub').textContent = gender + ' age ' + age + ', added per year (before/after discounts shown in total)';
    g('total').textContent = money(base + added);
    g('pct').textContent = '+' + (added / base * 100).toFixed(0) + '%';
    g('mo').textContent = money(added / 12);
  }

  ['base', 'gs', 'dt'].forEach(function (id) { g(id).addEventListener('input', calc); });
  ['age', 'gender'].forEach(function (id) { g(id).addEventListener('change', calc); });
  calc();
})();
