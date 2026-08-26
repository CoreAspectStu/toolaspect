/*!
 * ToolAspect Invisalign Cost Calculator Embed
 * Install: <div id="ta-invisalign-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/invisalign-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-invisalign-cost-calculator';
  var BASE = 'https://toolaspect.com/invisalign-cost-calculator/';

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
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-note{color:var(--ta-muted);font-size:.75rem;margin-top:10px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'invisalign-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="invisalign-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Invisalign Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Tier, insurance, and FSA/HSA tax savings</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Treatment tier</label><select class="ta-tier">'
    + '<option value="2800,4500">Lite — mild crowding</option>'
    + '<option value="3000,5000">Moderate</option>'
    + '<option value="4500,7000" selected>Comprehensive</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Cost of living</label><select class="ta-region">'
    + '<option value="0.92">Smaller city / rural</option>'
    + '<option value="1" selected>Average US market</option>'
    + '<option value="1.12">Major metro</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Insurance ortho max ($)</label><input type="number" class="ta-ins" value="1500" min="0" step="100"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>FSA/HSA applied ($)</label><input type="number" class="ta-fsa" value="2000" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Marginal tax rate (%)</label><input type="number" class="ta-tax" value="30" min="0" max="50" step="1"></div>'
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

  function fmt(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calc() {
    var band = (root.querySelector('.ta-tier').value || '4500,7000').split(',');
    var lo = parseFloat(band[0]), hi = parseFloat(band[1]);
    var region = parseFloat(root.querySelector('.ta-region').value) || 1;
    var ins = val('.ta-ins');
    var fsa = val('.ta-fsa');
    var tax = Math.min(50, Math.max(0, val('.ta-tax'))) / 100;

    var feeLo = lo * region, feeHi = hi * region;
    var balLo = feeLo - Math.min(ins, feeLo);
    var balHi = feeHi - Math.min(ins, feeHi);
    var saveLo = Math.min(fsa, balLo) * tax;
    var saveHi = Math.min(fsa, balHi) * tax;
    var oopLo = balLo - saveLo + 300;
    var oopHi = balHi - saveHi + 300;

    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + fmt(oopLo) + ' – ' + fmt(oopHi) + '</div>'
      + '<div class="ta-embed-sub">Estimated out of pocket incl. retainers</div>'
      + '<div class="ta-embed-sub">Fee ' + fmt(feeLo) + '–' + fmt(feeHi) + ' · after insurance ' + fmt(balLo) + '–' + fmt(balHi) + '</div>'
      + '<div class="ta-embed-sub">FSA/HSA tax savings ' + fmt(saveLo) + '–' + fmt(saveHi) + ' · ~' + fmt(oopLo / 24) + '–' + fmt(oopHi / 24) + '/mo over 24 months</div>'
      + '<div class="ta-embed-note">Estimate only, not a dental quote. US full range runs $3,000-$8,000; average insurance contribution $1,772 (Invisalign published data).</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.invisalignCostCalculator = { recalc: calc };
})();
