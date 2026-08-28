/*!
 * ToolAspect HELOC vs Cash-Out Refi Calculator Embed
 * Install: <div id="ta-heloc-vs-cash-out-refi-calculator"></div>
 *          <script src="https://toolaspect.com/embed/heloc-vs-cash-out-refi-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-heloc-vs-cash-out-refi-calculator';
  var BASE = 'https://toolaspect.com/heloc-vs-cash-out-refi-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card h4{margin:0 0 10px;font-size:.8rem;text-transform:uppercase;letter-spacing:.04em;color:var(--ta-muted)}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.45rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-compare{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-cell .k{font-size:.72rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.03em}'
    + '.ta-embed-cell .v{font-size:1.05rem;font-weight:700;margin-top:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}.ta-embed-compare{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'heloc-vs-cash-out-refi-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="heloc-vs-cash-out-refi-calculator"]')) {
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
    + '<div class="ta-embed-title">HELOC vs Cash-Out Refi</div>'
    + '<div class="ta-embed-subtitle">Keep your mortgage and add a HELOC, or refinance everything?</div>'
    + '<div class="ta-embed-card">'
    + '<h4>Your loan &amp; cash needed</h4>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Current balance ($)</label><input type="number" class="ta-bal" value="300000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Current rate (%)</label><input type="number" class="ta-crate" value="4.25" min="0" step="0.125"></div>'
    + '<div class="ta-embed-form-group"><label>Years left</label><input type="number" class="ta-cyrs" value="26" min="1" max="40" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Cash needed ($)</label><input type="number" class="ta-cash" value="50000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Compare over</label><select class="ta-horizon"><option value="36">3 years</option><option value="60" selected>5 years</option><option value="120">10 years</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Refi closing costs (%)</label><input type="number" class="ta-close" value="2" min="0" step="0.25"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<h4>Option A: HELOC on top</h4>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>HELOC rate (%)</label><input type="number" class="ta-hrate" value="8.5" min="0" step="0.125"></div>'
    + '<div class="ta-embed-form-group"><label>HELOC term (yrs)</label><input type="number" class="ta-hyrs" value="20" min="1" max="30" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>HELOC costs ($)</label><input type="number" class="ta-hcost" value="500" min="0" step="50"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<h4>Option B: cash-out refinance</h4>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Refi rate (%)</label><input type="number" class="ta-rrate" value="6.75" min="0" step="0.125"></div>'
    + '<div class="ta-embed-form-group"><label>Refi term (yrs)</label><input type="number" class="ta-ryrs" value="30" min="5" max="40" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>&nbsp;</label><input style="visibility:hidden" tabindex="-1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function fmt(n) { return '$' + Math.round(Math.abs(n)).toLocaleString('en-US'); }
  function pmt(P, rate, years) {
    var r = rate / 100 / 12, n = Math.round(years * 12);
    if (n <= 0 || P <= 0) return 0;
    if (r === 0) return P / n;
    return P * r / (1 - Math.pow(1 + r, -n));
  }
  function balAfter(P, rate, years, months) {
    var r = rate / 100 / 12, pay = pmt(P, rate, years), bal = P;
    for (var i = 0; i < months; i++) bal = bal + bal * r - pay;
    return bal;
  }

  function calc() {
    var bal = val('.ta-bal'), crate = val('.ta-crate'), cyrs = val('.ta-cyrs'), cash = val('.ta-cash');
    var H = parseInt((root.querySelector('.ta-horizon') || {}).value, 10) || 60;
    var closePct = val('.ta-close');
    var hrate = val('.ta-hrate'), hyrs = val('.ta-hyrs'), hcost = val('.ta-hcost');
    var rrate = val('.ta-rrate'), ryrs = val('.ta-ryrs');
    if (bal <= 0 || cash <= 0 || cyrs <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your balance, rate, and cash needed</div>';
      return;
    }
    var startDebt = bal + cash;
    var payA = pmt(bal, crate, cyrs) + pmt(cash, hrate, hyrs);
    var payB = pmt(startDebt, rrate, ryrs);
    var closeB = startDebt * closePct / 100;
    var balA = balAfter(bal, crate, cyrs, H) + balAfter(cash, hrate, hyrs, H);
    var balB = balAfter(startDebt, rrate, ryrs, H);
    var netA = H * payA + hcost - (startDebt - balA);
    var netB = H * payB + closeB - (startDebt - balB);
    var aWins = netA <= netB;
    var label = H / 12;
    var sub;
    if (aWins && payA <= payB) sub = 'Saves ' + fmt(payB - payA) + '/mo and ' + fmt(netB - netA) + ' over ' + label + ' years';
    else if (aWins) sub = 'Costs ' + fmt(payA - payB) + ' more/mo but saves ' + fmt(netB - netA) + ' over ' + label + ' years';
    else if (payB <= payA) sub = 'Saves ' + fmt(payA - payB) + '/mo and ' + fmt(netA - netB) + ' over ' + label + ' years';
    else sub = 'Costs ' + fmt(payB - payA) + ' more/mo but saves ' + fmt(netA - netB) + ' over ' + label + ' years';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + (aWins ? 'Keep mortgage + HELOC' : 'Cash-out refinance') + '</div>'
      + '<div class="ta-embed-sub">' + sub + '</div>'
      + '<div class="ta-embed-compare">'
      + '<div class="ta-embed-cell"><div class="k">A: payment / ' + label + '-yr cost</div><div class="v">' + fmt(payA) + ' / ' + fmt(netA) + '</div></div>'
      + '<div class="ta-embed-cell"><div class="k">B: payment / ' + label + '-yr cost</div><div class="v">' + fmt(payB) + ' / ' + fmt(netB) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.helocVsCashOutRefi = { recalc: calc };
})();
