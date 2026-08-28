/*!
 * ToolAspect Car Donation Tax Deduction Calculator Embed
 * Install: <div id="ta-car-donation-tax-deduction-calculator"></div>
 *          <script src="https://toolaspect.com/embed/car-donation-tax-deduction-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-car-donation-tax-deduction-calculator';
  var BASE = 'https://toolaspect.com/car-donation-tax-deduction-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-verdict{background:var(--ta-bg);border-radius:8px;padding:12px;font-size:.82rem;color:var(--ta-text);text-align:left;margin-top:12px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'car-donation-tax-deduction-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="car-donation-tax-deduction-calculator"]')) {
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
    + '<div class="ta-embed-title">Car Donation Tax Deduction Calculator</div>'
    + '<div class="ta-embed-subtitle">The real 1098-C deduction — and whether selling beats donating</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Fair market value ($)</label><input type="number" class="ta-fmv" value="3500" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Charity outcome</label><select class="ta-outcome">'
    + '<option value="sold" selected>Sells it (usual)</option>'
    + '<option value="kept">Keeps / uses / gifts it</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Gross proceeds ($)</label><input type="number" class="ta-proceeds" value="1800" min="0" step="100"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Other itemizables ($)</label><input type="number" class="ta-other" value="4000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Cash offer if sold ($)</label><input type="number" class="ta-offer" value="2500" min="0" step="100"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Status</label><select class="ta-status">'
    + '<option value="single" selected>Single</option>'
    + '<option value="mfj">Married joint</option>'
    + '<option value="hoh">Head of household</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Bracket (%)</label><input type="number" class="ta-rate" value="22" min="0" max="50" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var SD = { single2026: 16100, mfj2026: 32200, hoh2026: 24150, single2025: 15750, mfj2025: 31500, hoh2025: 23625 };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var fmv = num('.ta-fmv'), proceeds = num('.ta-proceeds'), other = num('.ta-other');
    var offer = num('.ta-offer'), rate = num('.ta-rate');
    var sd = SD[val('.ta-status') + '2026'];
    var ded;
    if (fmv <= 500) ded = fmv;
    else if (val('.ta-outcome') === 'kept') ded = fmv;
    else if (proceeds > 500) ded = Math.min(proceeds, fmv);
    else ded = Math.min(500, fmv);
    var itemTotal = other + ded;
    var added = other >= sd ? ded : Math.max(0, itemTotal - sd);
    var savings = added * rate / 100;
    var verdict;
    if (itemTotal <= sd) {
      verdict = 'Itemized total ' + money(itemTotal) + ' stays under the ' + money(sd) + ' standard deduction — the donation adds <strong>$0</strong>. Selling for ' + money(offer) + ' wins by ' + money(offer) + '.';
    } else {
      verdict = 'Donation saves <strong>' + money(savings) + '</strong> in tax. Selling for ' + money(offer) + ' still nets <strong>' + money(offer - savings) + '</strong> more — donate to support the charity, not the math.';
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(savings) + '</div>'
      + '<div class="ta-embed-sub">actual tax savings from a ' + money(ded) + ' deduction at ' + rate + '%</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Deduction allowed</div><div class="rv">' + money(ded) + '</div></div>'
      + '<div><div class="rl">Standard deduction (2026)</div><div class="rv">' + money(sd) + '</div></div>'
      + '</div>'
      + '<div class="ta-embed-verdict">' + verdict + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.carDonationTaxDeductionCalculator = { recalc: calc };
})();
