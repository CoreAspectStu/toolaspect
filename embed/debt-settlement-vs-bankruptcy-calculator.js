/*!
 * ToolAspect Debt Settlement vs Bankruptcy Calculator Embed
 * Install: <div id="ta-debt-settlement-vs-bankruptcy-calculator"></div>
 *          <script src="https://toolaspect.com/embed/debt-settlement-vs-bankruptcy-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-debt-settlement-vs-bankruptcy-calculator';
  var BASE = 'https://toolaspect.com/debt-settlement-vs-bankruptcy-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.4rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-rows{margin-top:14px;text-align:left;font-size:.88rem}'
    + '.ta-embed-rows div{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--ta-border)}'
    + '.ta-embed-rows div:last-child{border-bottom:none;font-weight:700}'
    + '.ta-embed-note{text-align:left;background:var(--ta-bg);border-radius:8px;padding:12px 14px;margin-top:14px;font-size:.82rem;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'debt-settlement-vs-bankruptcy-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="debt-settlement-vs-bankruptcy-calculator"]')) {
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
    + '<div class="ta-embed-title">Debt Settlement vs Bankruptcy Calculator</div>'
    + '<div class="ta-embed-subtitle">Total out-of-pocket for settlement, Chapter 7, and Chapter 13</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Total unsecured debt ($)</label><input type="number" class="ta-debt" value="30000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Marginal tax bracket (%)</label><input type="number" class="ta-tax" value="22" min="0" max="50" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Creditors accept (% of balance)</label><input type="number" class="ta-settle" value="50" min="10" max="100" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Settlement fee (% of enrolled debt)</label><input type="number" class="ta-fee" value="20" min="0" max="30" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Ch. 7 attorney fee ($)</label><input type="number" class="ta-ch7atty" value="1500" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Ch. 13 attorney fee ($)</label><input type="number" class="ta-ch13atty" value="3500" min="0" step="100"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">&nbsp;</div>'
    + '<div class="ta-embed-rows">'
    + '<div><span>Debt settlement (incl. 1099-C tax)</span><span class="ta-r-settle">—</span></div>'
    + '<div><span>Chapter 7 (atty + $338 + counseling)</span><span class="ta-r-ch7">—</span></div>'
    + '<div><span>Chapter 13 (atty + $313 + plan)</span><span class="ta-r-ch13">—</span></div>'
    + '</div>'
    + '<div class="ta-embed-note ta-verdict"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var debt = val('.ta-debt'), tax = val('.ta-tax') / 100;
    var settlePct = val('.ta-settle') / 100, feePct = val('.ta-fee') / 100;
    var settled = debt * settlePct;
    var fee = debt * feePct;
    var taxOwed = Math.max(0, debt - settled) * tax;
    var settleTotal = settled + fee + taxOwed;
    var ch7 = val('.ta-ch7atty') + 338 + 75;
    var ch13 = val('.ta-ch13atty') + 313 + 250 * 60;
    root.querySelector('.ta-r-settle').textContent = fmt(settleTotal);
    root.querySelector('.ta-r-ch7').textContent = fmt(ch7);
    root.querySelector('.ta-r-ch13').textContent = fmt(ch13);
    var opts = [['debt settlement', settleTotal], ['Chapter 7', ch7], ['Chapter 13', ch13]];
    opts.sort(function (a, b) { return a[1] - b[1]; });
    root.querySelector('.ta-embed-big').textContent = opts[0][0] + ' wins';
    root.querySelector('.ta-embed-sub').textContent = fmt(opts[0][1]) + ' total vs ' + fmt(opts[1][1]) + ' for the next-cheapest (' + opts[1][0] + ')';
    var v = 'Forgiven debt of $600+ per creditor usually triggers a 1099-C taxed as ordinary income (' + fmt(taxOwed) + ' here) — insolvent filers can exclude it with Form 982. Chapter 7 total assumes $75 for the two required counseling courses; Chapter 13 assumes a $250/mo plan over 60 months.';
    root.querySelector('.ta-verdict').textContent = 'Estimate, not legal or tax advice — means testing, disposable income, and creditor participation all move these numbers. ' + v;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.debtSettlementVsBankruptcyCalculator = { recalc: calc };
})();
