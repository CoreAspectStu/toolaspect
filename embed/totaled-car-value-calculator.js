/*!
 * ToolAspect Totaled Car Value Calculator Embed
 * Install: <div id="ta-totaled-car-value-calculator"></div>
 *          <script src="https://toolaspect.com/embed/totaled-car-value-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-totaled-car-value-calculator';
  var BASE = 'https://toolaspect.com/totaled-car-value-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1rem;font-weight:700}'
    + '.ta-embed-verdict{margin-top:12px;padding:10px;border-radius:8px;font-size:.9rem;font-weight:600}'
    + '.ta-embed-verdict.totaled{background:rgba(239,68,68,.1);border:1px solid #ef4444;color:#dc2626}'
    + '.ta-embed-verdict.ok{background:rgba(34,197,94,.1);border:1px solid #22c55e;color:#16a34a}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-form-row.three{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'totaled-car-value-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="totaled-car-value-calculator"]')) {
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
    + '<div class="ta-embed-title">Totaled Car Value Calculator</div>'
    + '<div class="ta-embed-subtitle">ACV estimate + your state&rsquo;s total-loss threshold</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row three">'
    + '<div class="ta-embed-form-group"><label>Price new ($)</label><input type="number" class="ta-msrp" value="32000" min="500" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Age (yrs)</label><input type="number" class="ta-age" value="7" min="0" max="30"></div>'
    + '<div class="ta-embed-form-group"><label>Mileage</label><input type="number" class="ta-miles" value="78000" min="0" step="1000"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row three">'
    + '<div class="ta-embed-form-group"><label>Condition</label><select class="ta-cond">'
    + '<option value="1.10">Excellent</option><option value="1.00">Good</option><option value="0.92" selected>Average</option><option value="0.80">Rough</option></select></div>'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state">'
    + '<option value="75">75% state (NY, AL, MI...)</option><option value="70">70% state (AR, IA, MN...)</option>'
    + '<option value="80">80% state (FL, MO, OR)</option><option value="65">65% (NV)</option><option value="60">60% (OK)</option>'
    + '<option value="100">100% (CO, TX)</option><option value="tlf" selected>TLF state (CA, GA, IL...)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Repair est. ($)</label><input type="number" class="ta-repair" value="8200" min="0" step="100"></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var RET = [1, .80, .68, .58, .50, .43, .38, .34, .30, .27, .24, .22, .20, .18, .16, .14];

  function retained(age) {
    age = Math.max(0, Math.min(30, age));
    if (age < RET.length) return RET[age];
    return Math.max(.08, RET[RET.length - 1] - (age - RET.length + 1) * .01);
  }
  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n + 1e-6).toLocaleString('en-US'); }

  function calc() {
    var msrp = num('.ta-msrp'), age = num('.ta-age'), miles = num('.ta-miles');
    var cond = parseFloat(val('.ta-cond')) || 1;
    var repair = num('.ta-repair'), st = val('.ta-state');
    var base = msrp * retained(age);
    var mileAdj = Math.max(-.20, Math.min(.20, (12000 * age - miles) / 10000 * .05));
    var acv = Math.max(0, base * (1 + mileAdj) * cond);
    var ratio = acv > 0 ? repair / acv * 100 : 0;
    var verdict, vClass;
    if (st === 'tlf') {
      var trig = acv * 0.78; // salvage assumed 22% of ACV
      if (repair >= trig) { verdict = 'Totaled under the TLF formula'; vClass = 'totaled'; }
      else if ((trig - repair) / acv * 100 <= 5) { verdict = 'Borderline — one supplement can flip it'; vClass = 'totaled'; }
      else { verdict = 'Repairable under the TLF formula'; vClass = 'ok'; }
      resultEl.innerHTML = ''
        + '<div class="ta-embed-big">' + money(acv) + '</div>'
        + '<div class="ta-embed-sub">estimated actual cash value · trigger: ' + money(trig) + ' (ACV &minus; 22% salvage)</div>'
        + '<div class="ta-embed-range">'
        + '<div><div class="rl">Value range (±10%)</div><div class="rv">' + money(acv * .9) + ' – ' + money(acv * 1.1) + '</div></div>'
        + '<div><div class="rl">Repair vs trigger</div><div class="rv">' + money(repair) + ' vs ' + money(trig) + '</div></div>'
        + '</div><div class="ta-embed-verdict ' + vClass + '">' + verdict + '</div>';
    } else {
      var pct = parseFloat(st);
      if (ratio >= pct) { verdict = 'Totaled: ' + ratio.toFixed(1) + '% ≥ ' + pct + '% threshold'; vClass = 'totaled'; }
      else if (pct - ratio <= 5) { verdict = 'Borderline: ratio ' + ratio.toFixed(1) + '% vs ' + pct + '%'; vClass = 'totaled'; }
      else { verdict = 'Repairable: ratio ' + ratio.toFixed(1) + '% vs ' + pct + '%'; vClass = 'ok'; }
      resultEl.innerHTML = ''
        + '<div class="ta-embed-big">' + money(acv) + '</div>'
        + '<div class="ta-embed-sub">estimated actual cash value · totals at ' + money(acv * pct / 100) + ' repair (' + pct + '%)</div>'
        + '<div class="ta-embed-range">'
        + '<div><div class="rl">Value range (±10%)</div><div class="rv">' + money(acv * .9) + ' – ' + money(acv * 1.1) + '</div></div>'
        + '<div><div class="rl">Damage ratio</div><div class="rv">' + ratio.toFixed(1) + '%</div></div>'
        + '</div><div class="ta-embed-verdict ' + vClass + '">' + verdict + '</div>';
    }
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.totaledCarValueCalculator = { recalc: calc };
})();
