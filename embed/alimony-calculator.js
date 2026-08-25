/*!
 * ToolAspect Alimony Calculator Embed
 * Install: <div id="ta-alimony-calculator"></div>
 *          <script src="https://toolaspect.com/embed/alimony-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-alimony-calculator';
  var BASE = 'https://toolaspect.com/alimony-calculator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-legal{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:6px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'alimony-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="alimony-calculator"]')) {
    (document.head || document.documentElement).appendChild(styleEl);
  }

  function findTarget() {
    var el = document.getElementById(TARGET_ID);
    if (el) return el;
    // fallback: div immediately preceding this script
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
    + '<div class="ta-embed-title">Alimony Calculator</div>'
    + '<div class="ta-embed-subtitle">Common 30/20 guideline estimate with duration</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Payer gross annual income ($)</label><input type="number" class="ta-payor" value="120000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Recipient gross annual income ($)</label><input type="number" class="ta-payee" value="40000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Years married</label><input type="number" class="ta-years" value="12" min="0" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-legal">Not legal advice. Guideline estimate only; real awards depend on your state and judge.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function fmt(n) {
    return '$' + Math.abs(Math.round(n)).toLocaleString('en-US');
  }

  function taCompute(payor, payee, years) {
    var annual = Math.max(0, 0.30 * payor - 0.20 * payee);
    var duration = null;
    var durationText = '';
    if (years < 3) { duration = years * 0.3; }
    else if (years < 10) { duration = years * 0.5; }
    else if (years < 20) { duration = years * 0.75; }
    else { durationText = '15+ years, often indefinite'; }
    if (duration !== null) {
      var d = Math.round(duration * 100) / 100;
      durationText = d + (d === 1 ? ' year' : ' years');
    }
    return { annual: annual, monthly: annual / 12, duration: duration, durationText: durationText };
  }

  function calc() {
    var payor = val('.ta-payor');
    var payee = val('.ta-payee');
    var years = val('.ta-years');
    if (payor <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter the payer\'s income</div>';
      return;
    }
    var r = taCompute(payor, payee, years);
    if (r.annual <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">$0/mo</div>'
        + '<div class="ta-embed-sub">No guideline alimony at these incomes (30% of payer minus 20% of recipient is zero or less)</div>';
      return;
    }
    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + fmt(r.monthly) + '/mo</div>'
      + '<div class="ta-embed-sub">' + fmt(r.annual) + ' per year under the 30/20 guideline</div>'
      + '<div class="ta-embed-sub">Estimated duration: <strong>' + r.durationText + '</strong>'
      + (r.duration !== null ? ' · total ' + fmt(r.annual * r.duration) : '') + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.alimonyCalculator = { recalc: calc };
})();
