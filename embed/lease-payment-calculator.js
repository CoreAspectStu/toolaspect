/*!
 * ToolAspect Lease Payment Calculator Embed
 * Install: <div id="ta-lease-payment-calculator"></div>
 *          <script src="https://toolaspect.com/embed/lease-payment-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-lease-payment-calculator';
  var BASE = 'https://toolaspect.com/lease-payment-calculator/';

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'lease-payment-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="lease-payment-calculator"]')) {
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
    + '<div class="ta-embed-title">Lease Payment Calculator</div>'
    + '<div class="ta-embed-subtitle">Depreciation + rent charge + tax</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>MSRP ($)</label><input type="number" class="ta-msrp" value="45000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Cap cost ($)</label><input type="number" class="ta-cap" value="43000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Down payment ($)</label><input type="number" class="ta-down" value="0" min="0" step="250"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Term (mo)</label><select class="ta-term">'
    + '<option>24</option><option>27</option><option selected>36</option><option>39</option><option>48</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Residual (% MSRP)</label><input type="number" class="ta-resid" value="60" min="20" max="90" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Money factor</label><input type="number" class="ta-mf" value="0.0025" min="0" max="0.02" step="0.00005"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Sales tax (%)</label><input type="number" class="ta-tax" value="8" min="0" max="12" step="0.125"></div>'
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

  function calc() {
    var msrp = val('.ta-msrp');
    var cap = val('.ta-cap');
    var down = val('.ta-down');
    var term = val('.ta-term') || 36;
    var residPct = val('.ta-resid');
    var mf = val('.ta-mf');
    var tax = val('.ta-tax');
    if (msrp <= 0 || cap <= 0 || residPct <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter MSRP, cap cost, and residual</div>';
      return;
    }
    var adjCap = Math.max(0, cap - down);
    var resid = msrp * residPct / 100;
    var dep = (adjCap - resid) / term;
    var rent = (adjCap + resid) * mf;
    var pre = dep + rent;
    var mo = pre * (1 + tax / 100);
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + mo.toFixed(2) + '/mo</div>'
      + '<div class="ta-embed-sub">$' + pre.toFixed(2) + ' pre-tax (' + (mf * 2400).toFixed(2) + '% APR equivalent)</div>'
      + '<div class="ta-embed-sub">depreciation $' + dep.toFixed(2) + ' + rent charge $' + rent.toFixed(2) + (tax > 0 ? ' + tax $' + (pre * tax / 100).toFixed(2) : '') + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.leasePaymentCalculator = { recalc: calc };
})();
