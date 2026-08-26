/*!
 * ToolAspect Solar Savings Calculator Embed
 * Install: <div id="ta-solar-savings-calculator"></div>
 *          <script src="https://toolaspect.com/embed/solar-savings-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-solar-savings-calculator';
  var BASE = 'https://toolaspect.com/solar-savings-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.7rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-rows{margin-top:12px;display:grid;gap:6px}'
    + '.ta-embed-row{display:flex;justify-content:space-between;gap:10px;padding:8px 12px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);text-align:left}'
    + '.ta-embed-row .k{font-size:.82rem;color:var(--ta-muted);font-weight:600}'
    + '.ta-embed-row .v{font-size:.9rem;font-weight:700;white-space:nowrap}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'solar-savings-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="solar-savings-calculator"]')) {
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
    + '<div class="ta-embed-title">Solar Savings</div>'
    + '<div class="ta-embed-subtitle">System size, cost, and 25-year payback from your electric bill</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Monthly Bill ($)</label><input type="number" class="ta-bill" value="200" min="10" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Rate ($/kWh)</label><input type="number" class="ta-rate" value="0.175" min="0.05" step="0.005"></div>'
    + '<div class="ta-embed-form-group"><label>Sun Hours/Day</label><input type="number" class="ta-psh" value="4.5" min="2" max="7" step="0.1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Cost per Watt ($)</label><input type="number" class="ta-perw" value="2.60" min="1" step="0.05"></div>'
    + '<div class="ta-embed-form-group"><label>Escalation (%/yr)</label><input type="number" class="ta-esc" value="3" min="0" max="10" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Credit (% or $)</label><input type="number" class="ta-credit" value="0" step="0.5"></div>'
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
  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var bill = val('.ta-bill'), rate = val('.ta-rate'), psh = val('.ta-psh');
    var perW = val('.ta-perw'), esc = val('.ta-esc'), credit = val('.ta-credit');
    if (bill <= 0 || rate <= 0 || psh <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your bill, rate, and sun hours</div>';
      return;
    }
    var yrKwh = bill / rate * 12;
    var pf = 0.80;
    var sizeKW = yrKwh / (psh * 365 * pf);
    var gross = sizeKW * 1000 * perW;
    var creditAmt = credit <= 1 ? gross * credit : credit;
    var net = Math.max(0, gross - creditAmt);
    var yr1 = yrKwh * rate;
    var cum = 0, pb = 0, tot = 0;
    for (var t = 0; t < 25; t++) {
      var s = yr1 * Math.pow(1 + esc / 100, t) * Math.pow(0.995, t);
      tot += s;
      if (pb === 0) { cum += s; if (cum >= net && net > 0) pb = t + 1; }
    }
    resultEl.innerHTML = '<div class="ta-embed-big">' + fmt(tot - net) + '</div>'
      + '<div class="ta-embed-sub">net 25-year savings (federal credit expired Dec 2025)</div>'
      + '<div class="ta-embed-rows">'
      + '<div class="ta-embed-row"><span class="k">System size</span><span class="v">' + sizeKW.toFixed(1) + ' kW (' + Math.ceil(sizeKW * 1000 / 425) + ' panels)</span></div>'
      + '<div class="ta-embed-row"><span class="k">Net cost</span><span class="v">' + fmt(net) + '</span></div>'
      + '<div class="ta-embed-row"><span class="k">Year-one savings</span><span class="v">' + fmt(yr1) + '</span></div>'
      + '<div class="ta-embed-row"><span class="k">Payback</span><span class="v">' + (pb ? pb + ' yrs' : 'beyond 25 yrs') + '</span></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.solarSavings = { recalc: calc };
})();
