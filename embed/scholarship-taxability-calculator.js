/*!
 * ToolAspect Scholarship Taxability Calculator Embed
 * Install: <div id="ta-scholarship-taxability-calculator"></div>
 *          <script src="https://toolaspect.com/embed/scholarship-taxability-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-scholarship-taxability-calculator';
  var BASE = 'https://toolaspect.com/scholarship-taxability-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#10b981;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#34d399}'
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
    + '.ta-embed-mini-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;text-align:center;font-size:.85rem;margin-top:14px}'
    + '.ta-embed-mini-row strong{display:block;font-size:1.15rem;margin-top:2px}'
    + '.ta-embed-note{text-align:center;font-size:.7rem;margin-top:8px;color:var(--ta-muted)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-mini-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'scholarship-taxability-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="scholarship-taxability-calculator"]')) {
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
    + '<div class="ta-embed-title">Scholarship Taxability Calculator</div>'
    + '<div class="ta-embed-subtitle">Tax-free vs taxable split using IRS Pub 970 rules</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Total scholarship ($)</label><input type="number" id="tast-sch" value="14000" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Tuition + fees ($)</label><input type="number" id="tast-tuition" value="9500" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Required books ($)</label><input type="number" id="tast-books" value="700" min="0" step="50"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Wages / other income ($)</label><input type="number" id="tast-wages" value="6000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Filing status</label><select id="tast-status">'
    + '<option value="dep" selected>Dependent student</option>'
    + '<option value="single">Single (independent)</option>'
    + '<option value="mfj">Married filing jointly</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tast-taxable">—</div>'
    + '<div class="ta-embed-sub" id="tast-sub">taxable scholarship portion</div>'
    + '<div class="ta-embed-mini-row">'
    + '<div><span style="color:var(--ta-muted)">Tax-free</span><strong id="tast-free">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Est. federal tax</span><strong id="tast-tax">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Std deduction</span><strong id="tast-std">—</strong></div>'
    + '</div>'
    + '<div class="ta-embed-note">Estimate only — 2025 federal rules; not tax advice. Source: IRS Pub 970.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tast-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function fedTax(ti, status) {
    var b = status === 'mfj'
      ? [[23850, 0.10], [96950, 0.12], [206700, 0.22]]
      : [[11925, 0.10], [48475, 0.12], [103350, 0.22]];
    if (ti <= 0) return 0;
    var tax = 0, prev = 0;
    for (var i = 0; i < b.length; i++) {
      if (ti > b[i][0]) { tax += (b[i][0] - prev) * b[i][1]; prev = b[i][0]; }
      else { return tax + (ti - prev) * b[i][1]; }
    }
    return tax + (ti - prev) * b[i - 1][1];
  }

  function calc() {
    var sch = parseFloat(g('sch').value) || 0;
    var tuition = parseFloat(g('tuition').value) || 0;
    var books = parseFloat(g('books').value) || 0;
    var wages = parseFloat(g('wages').value) || 0;
    var status = g('status').value;
    var qualified = tuition + books;
    var taxable = Math.max(0, sch - qualified);
    var free = Math.min(sch, qualified);
    var std = status === 'single' ? 15000 : status === 'mfj' ? 30000
      : Math.min(15000, Math.max(1350, wages + 1450));
    var ti = Math.max(0, taxable + wages - std);
    g('taxable').textContent = money(taxable);
    g('sub').textContent = money(free) + ' tax-free' + (sch > 0 ? ' (' + Math.round(free / sch * 100) + '% of award)' : '');
    g('free').textContent = money(free);
    g('tax').textContent = money(fedTax(ti, status));
    g('std').textContent = money(std);
  }

  ['sch', 'tuition', 'books', 'wages'].forEach(function (id) {
    g(id).addEventListener('input', calc);
  });
  g('status').addEventListener('change', calc);
  calc();
})();
