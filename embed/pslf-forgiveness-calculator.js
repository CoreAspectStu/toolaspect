/*!
 * ToolAspect PSLF Forgiveness Calculator Embed
 * Install: <div id="ta-pslf-forgiveness-calculator"></div>
 *          <script src="https://toolaspect.com/embed/pslf-forgiveness-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pslf-forgiveness-calculator';
  var BASE = 'https://toolaspect.com/pslf-forgiveness-calculator/';

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
    + '.ta-embed-form-row.three{grid-template-columns:1fr 1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row.three{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pslf-forgiveness-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pslf-forgiveness-calculator"]')) {
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
    + '<div class="ta-embed-title">PSLF Forgiveness Calculator</div>'
    + '<div class="ta-embed-subtitle">120-payment projection vs standard and refinance payoff</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Loan balance ($)</label><input type="number" class="ta-bal" value="80000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Avg rate (%)</label><input type="number" class="ta-rate" value="6.53" min="0" max="20" step="0.01"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Qualifying payments made</label><input type="number" class="ta-made" value="30" min="0" max="119" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>AGI ($/yr)</label><input type="number" class="ta-agi" value="55000" min="0" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Family size</label>'
    + '<select class="ta-fam">'
    + '<option value="1" selected>1</option><option value="2">2</option><option value="3">3</option>'
    + '<option value="4">4</option><option value="5">5</option><option value="6">6</option>'
    + '<option value="7">7</option><option value="8">8+</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>IBR formula</label>'
    + '<select class="ta-pct">'
    + '<option value="0.10" selected>10% (new borrower)</option>'
    + '<option value="0.15">15% (older borrower)</option>'
    + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function fpl(n) { return 15960 + (n - 1) * 5680; }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function val(sel) { return parseFloat(root.querySelector(sel).value) || 0; }

  function calc() {
    var bal = val('.ta-bal');
    var rate = val('.ta-rate');
    var made = Math.min(119, Math.max(0, parseInt(root.querySelector('.ta-made').value, 10) || 0));
    var agi = val('.ta-agi');
    var fam = parseInt(root.querySelector('.ta-fam').value, 10);
    var pct = parseFloat(root.querySelector('.ta-pct').value);
    var disc = Math.max(0, agi - 1.5 * fpl(fam));
    var pmt = pct * disc / 12;
    var r = rate / 100 / 12;
    var months = 120 - made;
    var b = bal;
    for (var m = 0; m < months; m++) { b = b * (1 + r) - pmt; if (b < 0) { b = 0; break; } }
    var forgiven = Math.max(0, b);
    var paid = 120 * pmt;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(forgiven) + '</div>'
      + '<div class="ta-embed-sub">projected balance forgiven, tax-free, at payment 120</div>'
      + '<div class="ta-embed-sub">Qualifying payment: <strong>$' + pmt.toFixed(2) + '/mo</strong> · '
      + months + ' payments remaining</div>'
      + '<div class="ta-embed-sub">Total paid by forgiveness: <strong>' + usd(paid) + '</strong></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.pslfForgivenessCalculator = { recalc: calc };
})();
