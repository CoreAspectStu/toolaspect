/*!
 * ToolAspect Student Loan Marriage Calculator Embed
 * Install: <div id="ta-student-loan-marriage-calculator"></div>
 *          <script src="https://toolaspect.com/embed/student-loan-marriage-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-student-loan-marriage-calculator';
  var BASE = 'https://toolaspect.com/student-loan-marriage-calculator/';

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
    + '.ta-embed-check{display:flex;gap:16px;margin-top:2px}'
    + '.ta-embed-check label{display:flex;align-items:center;gap:6px;font-size:.82rem;color:var(--ta-text);cursor:pointer;font-weight:400;letter-spacing:0}'
    + '.ta-embed-check input{width:15px;height:15px;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-line{color:var(--ta-text);font-size:.9rem;margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'student-loan-marriage-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="student-loan-marriage-calculator"]')) {
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
    + '<div class="ta-embed-title">Student Loan Marriage Calculator</div>'
    + '<div class="ta-embed-subtitle">RAP payment, jointly vs separately, net of tax</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Your AGI ($/yr)</label><input type="number" class="ta-agi-a" value="85000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Spouse AGI ($/yr)</label><input type="number" class="ta-agi-b" value="45000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Dependents</label><input type="number" class="ta-deps" value="1" min="0" max="12" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Federal loans on RAP</label>'
    + '<div class="ta-embed-check">'
    + '<label><input type="checkbox" class="ta-loans-a" checked> You</label>'
    + '<label><input type="checkbox" class="ta-loans-b"> Spouse</label>'
    + '</div></div>'
    + '<div class="ta-embed-form-group"><label>Tax mode</label>'
    + '<select class="ta-taxmode"><option value="est">Estimate (2026 std ded.)</option><option value="manual">Manual MFS tax cost</option></select></div>'
    + '<div class="ta-embed-form-group ta-manual" style="display:none"><label>MFS tax cost ($/yr)</label><input type="number" class="ta-taxdiff" value="1850" step="50"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function rap(agi, deps) {
    if (agi <= 0) return 0;
    if (agi <= 10000) return 10;
    var p = Math.min(10, Math.ceil(agi / 10000) - 1);
    return Math.max(10, p / 100 * agi / 12 - 50 * deps);
  }
  var RATES = [.10, .12, .22, .24, .32, .35, .37];
  var BR = { MFJ: { std: 32200, c: [24800, 100800, 211400, 403550, 512450, 768700] }, MFS: { std: 16100, c: [12400, 50400, 105700, 201775, 256225, 384350] } };
  function tax(ti, br) {
    if (ti <= 0) return 0;
    var t = 0, prev = 0;
    for (var i = 0; i < br.c.length; i++) {
      var span = Math.min(ti, br.c[i]) - prev;
      if (span > 0) t += span * RATES[i];
      prev = br.c[i];
    }
    if (ti > br.c[br.c.length - 1]) t += (ti - br.c[br.c.length - 1]) * RATES[RATES.length - 1];
    return t;
  }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var a = parseFloat(root.querySelector('.ta-agi-a').value) || 0;
    var b = parseFloat(root.querySelector('.ta-agi-b').value) || 0;
    var deps = parseInt(root.querySelector('.ta-deps').value) || 0;
    var hasA = root.querySelector('.ta-loans-a').checked;
    var hasB = root.querySelector('.ta-loans-b').checked;
    var manual = root.querySelector('.ta-taxmode').value === 'manual';
    root.querySelector('.ta-manual').style.display = manual ? '' : 'none';
    if (!hasA && !hasB) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Mark who holds the federal loans</div>';
      return;
    }
    var mfj = 0, mfs = 0;
    if (hasA) { mfj += rap(a + b, deps); mfs += rap(a, deps); }
    if (hasB) { mfj += rap(a + b, hasA ? 0 : deps); mfs += rap(b, hasA ? 0 : deps); }
    var mfjTax = tax(a + b - BR.MFJ.std, BR.MFJ);
    var mfsTax = tax(a - BR.MFS.std, BR.MFS) + tax(b - BR.MFS.std, BR.MFS);
    var cost = manual ? (parseFloat(root.querySelector('.ta-taxdiff').value) || 0) : (mfsTax - mfjTax);
    var save = (mfj - mfs) * 12;
    var net = save - cost;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + (net >= 0 ? '+' : '−') + money(Math.abs(net)) + '/yr</div>'
      + '<div class="ta-embed-sub">' + (net >= 0 ? 'Filing separately wins' : 'Filing jointly wins') + '</div>'
      + '<div class="ta-embed-line">RAP payment: <strong>$' + mfj.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '/mo</strong> jointly vs <strong>$' + mfs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '/mo</strong> separately</div>'
      + '<div class="ta-embed-line">Payment savings: <strong>' + money(save) + '/yr</strong> · Extra MFS tax: <strong>' + money(cost) + '/yr</strong></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.studentLoanMarriageCalculator = { recalc: calc };
})();
