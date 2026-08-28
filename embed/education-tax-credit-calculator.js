/*!
 * ToolAspect Education Tax Credit Calculator Embed
 * Install: <div id="ta-education-tax-credit-calculator"></div>
 *          <script src="https://toolaspect.com/embed/education-tax-credit-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-education-tax-credit-calculator';
  var BASE = 'https://toolaspect.com/education-tax-credit-calculator/';

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
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'education-tax-credit-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="education-tax-credit-calculator"]')) {
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
    + '<div class="ta-embed-title">Education Tax Credit Calculator</div>'
    + '<div class="ta-embed-subtitle">AOTC vs Lifetime Learning Credit for your MAGI and tuition</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Filing status</label><select class="ta-status">'
    + '<option value="single" selected>Single / HoH</option><option value="mfj">Married joint</option></select></div>'
    + '<div class="ta-embed-form-group"><label>MAGI ($)</label><input type="number" class="ta-magi" value="78000" min="0" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Student type</label><select class="ta-student">'
    + '<option value="ug" selected>Undergrad, first 4 yrs</option><option value="other">Grad / job-skills</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Tuition + fees + books ($)</label><input type="number" class="ta-exp" value="6500" min="0" step="100"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function aotcBase(exp) { return Math.min(2000, exp) + 0.25 * Math.min(2000, Math.max(0, exp - 2000)); }
  function llcBase(exp) { return 0.20 * Math.min(10000, exp); }
  function frac(magi, lo, hi) {
    if (magi <= lo) return 1;
    if (magi >= hi) return 0;
    return (hi - magi) / (hi - lo);
  }

  function calc() {
    var range = val('.ta-status') === 'mfj' ? [160000, 180000] : [80000, 90000];
    var f = frac(num('.ta-magi'), range[0], range[1]);
    var ug = val('.ta-student') === 'ug';
    var exp = num('.ta-exp');
    var aotc = ug ? aotcBase(exp) * f : 0;
    var llc = llcBase(exp) * f;

    if (exp <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter qualified tuition, fees, and books</div>';
      return;
    }
    var head, sub;
    if (aotc > llc) {
      head = 'AOTC ' + money(aotc);
      sub = 'Beats the LLC by ' + money(aotc - llc) + ' · up to ' + money(aotc * 0.4) + ' refundable';
    } else if (llc > aotc) {
      head = 'LLC ' + money(llc);
      sub = ug ? 'Beats the AOTC by ' + money(llc - aotc) : 'Grad/job-skill students only qualify for the LLC';
    } else {
      head = money(aotc);
      sub = 'Both credits pay the same here';
    }
    if (f === 0) sub += ' · fully phased out above ' + money(range[1]);
    else if (f < 1) sub += ' · ' + Math.round(f * 100) + '% survives the phase-out';

    resultEl.innerHTML =
      '<div class="ta-embed-big">' + head + '</div>'
      + '<div class="ta-embed-sub">' + sub + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">AOTC</div><div class="rv">' + (ug ? money(aotc) : 'n/a') + '</div></div>'
      + '<div><div class="rl">Lifetime Learning</div><div class="rv">' + money(llc) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.educationTaxCreditCalculator = { recalc: calc };
})();
