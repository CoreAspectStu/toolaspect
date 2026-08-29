/*!
 * ToolAspect Trade School Cost Calculator Embed
 * Install: <div id="ta-trade-school-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/trade-school-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-trade-school-cost-calculator';
  var BASE = 'https://toolaspect.com/trade-school-cost-calculator/';

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
    + '.ta-embed-chips{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px}'
    + '.ta-embed-chip{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:6px 12px;font-size:.8rem}'
    + '.ta-embed-chip strong{color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'trade-school-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="trade-school-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Trade School Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Net cost after wages earned while training, vs the 4-year path</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Program preset</label><select class="ta-program">'
    + '<option value="cdl">CDL Class A</option><option value="welding">Welding certificate</option>'
    + '<option value="hvac" selected>HVAC certificate</option><option value="cosmo">Cosmetology</option>'
    + '<option value="elec">Electrician apprenticeship</option><option value="custom">Custom</option></select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Tuition ($)</label><input type="number" class="ta-tuition" value="8000" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Fees &amp; supplies ($)</label><input type="number" class="ta-fees" value="800" min="0" step="50"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Length (months)</label><input type="number" class="ta-months" value="12" min="1" max="72" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Take-home/mo while enrolled ($)</label><input type="number" class="ta-monthly" value="1200" min="0" step="100"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>4-year comparison: cost per year, all-in ($)</label><input type="number" class="ta-college" value="24000" min="0" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var PRESETS = {
    cdl: { tuition: 5000, fees: 300, months: 1, monthly: 0 },
    welding: { tuition: 10000, fees: 1200, months: 9, monthly: 800 },
    hvac: { tuition: 8000, fees: 800, months: 12, monthly: 1200 },
    cosmo: { tuition: 10000, fees: 1500, months: 14, monthly: 600 },
    elec: { tuition: 1200, fees: 800, months: 48, monthly: 2600 },
    custom: { tuition: 8000, fees: 800, months: 12, monthly: 0 }
  };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function usd(n) {
    var neg = n < 0;
    n = Math.round(Math.abs(n));
    return (neg ? '-$' : '$') + n.toLocaleString('en-US');
  }

  function calc() {
    var gross = val('.ta-tuition') + val('.ta-fees');
    var months = Math.max(1, val('.ta-months'));
    var earned = val('.ta-monthly') * months;
    var net = gross - earned;
    var college = val('.ta-college') * 4;
    var gap = college - net;
    var head = Math.max(0, Math.round(48 - months));
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + (net < 0 ? '+' + usd(-net) : usd(net)) + '</div>'
      + '<div class="ta-embed-sub">' + (net < 0 ? 'net in your favor — wages beat tuition' : 'net cost after training wages') + '</div>'
      + '<div class="ta-embed-chips">'
      + '<div class="ta-embed-chip">Tuition + fees: <strong>' + usd(gross) + '</strong></div>'
      + '<div class="ta-embed-chip">Earned: <strong>' + usd(earned) + '</strong></div>'
      + '<div class="ta-embed-chip">vs 4-yr (' + usd(college) + '): <strong>+' + usd(gap) + '</strong></div>'
      + '<div class="ta-embed-chip">Head start: <strong>' + head + ' mo</strong></div>'
      + '</div>';
  }

  root.querySelector('.ta-program').addEventListener('change', function () {
    var p = PRESETS[this.value];
    root.querySelector('.ta-tuition').value = p.tuition;
    root.querySelector('.ta-fees').value = p.fees;
    root.querySelector('.ta-months').value = p.months;
    root.querySelector('.ta-monthly').value = p.monthly;
    calc();
  });
  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.tradeSchoolCostCalculator = { recalc: calc };
})();
