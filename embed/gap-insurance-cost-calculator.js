/*!
 * ToolAspect Gap Insurance Cost Calculator Embed
 * Install: <div id="ta-gap-insurance-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/gap-insurance-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-gap-insurance-cost-calculator';
  var BASE = 'https://toolaspect.com/gap-insurance-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}'
    + '@media(max-width:520px){.ta-embed-grid{grid-template-columns:1fr 1fr}}'
    + '.ta-embed-field{display:flex;flex-direction:column;gap:4px}'
    + '.ta-embed-field label{font-size:.76rem;color:var(--ta-muted);font-weight:600}'
    + '.ta-embed-field input,.ta-embed-field select{width:100%;padding:8px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;'
    + 'color:var(--ta-text);font-size:.9rem;outline:none;font-family:inherit}'
    + '.ta-embed-field input:focus,.ta-embed-field select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-box{background:var(--ta-bg);border-radius:10px;padding:12px;text-align:center}'
    + '.ta-embed-box .l{font-size:.74rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-box .v{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-verdict{margin-top:12px;background:var(--ta-bg);border-radius:10px;padding:12px;text-align:center;font-size:.88rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'gap-insurance-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="gap-insurance-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Gap Insurance Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Dealer one-time vs insurer add-on, plus your loan-balance gap</div>'
    + '<div class="ta-embed-card"><div class="ta-embed-grid">'
    + '<div class="ta-embed-field"><label>Car price ($)</label><input type="number" id="ta-gi-price" value="40000" min="0" step="500"></div>'
    + '<div class="ta-embed-field"><label>Down payment ($)</label><input type="number" id="ta-gi-down" value="4000" min="0" step="500"></div>'
    + '<div class="ta-embed-field"><label>Fees rolled in ($)</label><input type="number" id="ta-gi-fees" value="3000" min="0" step="100"></div>'
    + '<div class="ta-embed-field"><label>Loan APR (%)</label><input type="number" id="ta-gi-apr" value="7" min="0" step="0.1"></div>'
    + '<div class="ta-embed-field"><label>Term (months)</label><input type="number" id="ta-gi-term" value="72" min="1" max="120" step="12"></div>'
    + '<div class="ta-embed-field"><label>Months owned</label><input type="number" id="ta-gi-months" value="12" min="0" max="120" step="1"></div>'
    + '<div class="ta-embed-field"><label>Dealer quote ($ one-time)</label><input type="number" id="ta-gi-dealer" value="800" min="0" step="50"></div>'
    + '<div class="ta-embed-field"><label>Insurer add-on ($/yr)</label><input type="number" id="ta-gi-ins" value="30" min="0" step="5"></div>'
    + '<div class="ta-embed-field"><label>Dealer charge financed?</label><select id="ta-gi-fin"><option value="yes">Yes</option><option value="no">No, cash</option></select></div>'
    + '</div></div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="ta-gi-gap">—</div><div class="ta-embed-sub" id="ta-gi-gapsub"></div>'
    + '<div class="ta-embed-row">'
    + '<div class="ta-embed-box"><div class="l">Dealer route total</div><div class="v" id="ta-gi-dcost">—</div></div>'
    + '<div class="ta-embed-box"><div class="l">Insurer route total</div><div class="v" id="ta-gi-icost">—</div></div>'
    + '</div><div class="ta-embed-verdict" id="ta-gi-verdict"></div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function fmt(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  function pmt(P, annualPct, months) {
    var r = annualPct / 100 / 12;
    if (months <= 0 || P <= 0) return 0;
    if (r === 0) return P / months;
    return P * r / (1 - Math.pow(1 + r, -months));
  }
  function balAfter(P, annualPct, months, m) {
    var r = annualPct / 100 / 12;
    if (P <= 0) return 0;
    if (m >= months) return 0;
    if (r === 0) return Math.max(0, P * (1 - m / months));
    var b = P * Math.pow(1 + r, m) - pmt(P, annualPct, months) * ((Math.pow(1 + r, m) - 1) / r);
    return Math.max(0, b);
  }
  var RET = [[0, 1], [12, .80], [24, .69], [36, .60], [48, .52], [60, .45], [72, .39], [84, .34], [96, .30], [120, .26]];
  function retention(m) {
    if (m <= 0) return 1;
    for (var i = 1; i < RET.length; i++) {
      if (m <= RET[i][0]) {
        var a = RET[i - 1], b = RET[i];
        return a[1] + (b[1] - a[1]) * (m - a[0]) / (b[0] - a[0]);
      }
    }
    return 0.26;
  }
  function gv(id) { var v = parseFloat(root.querySelector('#' + id).value); return isNaN(v) ? 0 : v; }

  function calc() {
    var price = gv('ta-gi-price'), down = gv('ta-gi-down'), fees = gv('ta-gi-fees');
    var apr = gv('ta-gi-apr'), term = Math.round(gv('ta-gi-term')), months = Math.round(gv('ta-gi-months'));
    var dealer = gv('ta-gi-dealer'), insAnnual = gv('ta-gi-ins');
    var fin = root.querySelector('#ta-gi-fin').value === 'yes';
    var loan = Math.max(0, price - down + fees);
    var bal = balAfter(loan, apr, term, months);
    var val = price * retention(months);
    var gap = bal - val;
    if (price <= 0 || loan <= 0) {
      root.querySelector('#ta-gi-gap').textContent = '—';
      root.querySelector('#ta-gi-gapsub').textContent = 'Enter your loan details';
      root.querySelector('#ta-gi-dcost').textContent = '—';
      root.querySelector('#ta-gi-icost').textContent = '—';
      root.querySelector('#ta-gi-verdict').textContent = '';
      return;
    }
    root.querySelector('#ta-gi-gap').textContent = gap > 0 ? fmt(gap) : 'No gap';
    root.querySelector('#ta-gi-gapsub').textContent = gap > 0
      ? 'Upside down by ' + fmt(gap) + ' (balance ' + fmt(bal) + ' vs value ' + fmt(val) + ')'
      : 'Balance ' + fmt(bal) + ' is below value ' + fmt(val) + ' — equity, gap pays nothing';
    var dTotal, dMo;
    if (fin) { dMo = pmt(dealer, apr, term); dTotal = dMo * term; }
    else { dTotal = dealer; dMo = dealer / Math.max(1, term); }
    var iMo = insAnnual / 12, iTotal = iMo * term;
    root.querySelector('#ta-gi-dcost').textContent = fmt(dTotal) + ' (' + fmt(dMo) + '/mo)';
    root.querySelector('#ta-gi-icost').textContent = fmt(iTotal) + ' (' + fmt(iMo) + '/mo)';
    var v = root.querySelector('#ta-gi-verdict');
    if (dealer <= 0 && insAnnual <= 0) { v.textContent = ''; }
    else if (dTotal <= iTotal) { v.textContent = 'Dealer route is cheaper here by ' + fmt(iTotal - dTotal) + '.'; }
    else { v.textContent = 'Insurer add-on saves about ' + fmt(dTotal - iTotal) + ' over the loan.'; }
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.gapInsuranceCostCalculator = { recalc: calc };
})();
