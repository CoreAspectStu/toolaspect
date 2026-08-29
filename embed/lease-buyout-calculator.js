/*!
 * ToolAspect Lease Buyout Calculator Embed
 * Install: <div id="ta-lease-buyout-calculator"></div>
 *          <script src="https://toolaspect.com/embed/lease-buyout-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-lease-buyout-calculator';
  var BASE = 'https://toolaspect.com/lease-buyout-calculator/';

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
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-row{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:14px}'
    + '.ta-embed-chip{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 12px;font-size:.8rem}'
    + '.ta-embed-chip b{display:block;font-size:.66rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'lease-buyout-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="lease-buyout-calculator"]')) {
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
    + '<div class="ta-embed-title">Lease Buyout Calculator</div>'
    + '<div class="ta-embed-subtitle">Is buying your leased car worth it?</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Payoff amount ($)</label><input type="number" class="ta-payoff" value="18500" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Market value ($)</label><input type="number" class="ta-market" value="21500" min="0" step="100"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Sales tax (%)</label><input type="number" class="ta-tax" value="6" min="0" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Purchase fee + DMV ($)</label><input type="number" class="ta-fees" value="450" min="0" step="25"></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var usd = function (n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); };

  function calc() {
    var payoff = parseFloat(root.querySelector('.ta-payoff').value);
    var market = parseFloat(root.querySelector('.ta-market').value);
    var tax = parseFloat(root.querySelector('.ta-tax').value) || 0;
    var fees = parseFloat(root.querySelector('.ta-fees').value) || 0;
    if (isNaN(payoff) || isNaN(market) || payoff <= 0 || market <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your payoff and market value</div>';
      return;
    }
    var buyout = payoff + fees + (payoff + Math.min(fees, 300)) * tax / 100;
    var equity = market - buyout;
    var verdict = equity > 0 ? 'Buying wins' : 'Returning wins';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(equity) + '</div>'
      + '<div class="ta-embed-sub">Buyout equity — ' + verdict + '</div>'
      + '<div class="ta-embed-row">'
      + '<div class="ta-embed-chip"><b>All-in buyout</b>' + usd(buyout) + '</div>'
      + '<div class="ta-embed-chip"><b>Market value</b>' + usd(market) + '</div>'
      + '<div class="ta-embed-chip"><b>Verdict</b>' + verdict + '</div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.leaseBuyoutCalculator = { recalc: calc };
})();
