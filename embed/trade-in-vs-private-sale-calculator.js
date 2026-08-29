/*!
 * ToolAspect Trade-In vs Private Sale Calculator Embed
 * Install: <div id="ta-trade-in-vs-private-sale-calculator"></div>
 *          <script src="https://toolaspect.com/embed/trade-in-vs-private-sale-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-trade-in-vs-private-sale-calculator';
  var BASE = 'https://toolaspect.com/trade-in-vs-private-sale-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'trade-in-vs-private-sale-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="trade-in-vs-private-sale-calculator"]')) {
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
    + '<div class="ta-embed-title">Trade-In vs Private Sale</div>'
    + '<div class="ta-embed-subtitle">Net proceeds both ways, tax credit included</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Private-Party Value ($)</label><input type="number" class="ta-priv" value="20000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Dealer Offer ($)</label><input type="number" class="ta-offer" value="17400" min="0" step="100"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Selling Costs ($)</label><input type="number" class="ta-cost" value="450" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Sales Tax Rate (%)</label><input type="number" class="ta-rate" value="7" min="0" max="12" step="0.125"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Trade-In Tax Credit?</label><select class="ta-credit">'
    + '<option value="yes">Yes — taxed on the difference</option>'
    + '<option value="no">No — taxed on full price (CA, HI, KY, MI, VA, DC)</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var priv = num('.ta-priv'), offer = num('.ta-offer'), cost = num('.ta-cost'), rate = num('.ta-rate');
    var credit = val('.ta-credit') === 'yes';
    if (priv <= 0 || offer <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your private-party value and dealer offer</div>';
      return;
    }
    var t = rate / 100;
    var privNet = priv - cost;
    var taxSave = (credit ? offer : 0) * t;
    var tradeNet = offer + taxSave;
    var diff = privNet - tradeNet;
    var be = privNet / (1 + (credit ? t : 0));
    var verdict = Math.abs(diff) < 25 ? 'Dead heat' : (diff > 0 ? 'Sell privately' : 'Trade in');
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + verdict + '</div>'
      + '<div class="ta-embed-sub">' + (Math.abs(diff) < 25 ? 'both within $25' : 'wins by ' + money(Math.abs(diff))) + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Private-Sale Net</div><div class="rv">' + money(privNet) + '</div></div>'
      + '<div><div class="rl">Trade-In Effective Net</div><div class="rv">' + money(tradeNet) + '</div></div>'
      + '<div><div class="rl">Tax Credit Value</div><div class="rv">' + money(taxSave) + '</div></div>'
      + '<div><div class="rl">Breakeven Offer</div><div class="rv">' + money(be) + ' (' + (be / priv * 100).toFixed(1) + '%)</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.tradeInVsPrivateSaleCalculator = { recalc: calc };
})();
