/*!
 * ToolAspect Student Loan Interest Deduction Calculator Embed
 * Install: <div id="ta-student-loan-interest-deduction-calculator"></div>
 *          <script src="https://toolaspect.com/embed/student-loan-interest-deduction-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-student-loan-interest-deduction-calculator';
  var BASE = 'https://toolaspect.com/student-loan-interest-deduction-calculator/';

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
    + '.ta-embed-slider{width:100%;accent-color:var(--ta-accent);margin-top:4px}'
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
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'student-loan-interest-deduction-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="student-loan-interest-deduction-calculator"]')) {
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
    + '<div class="ta-embed-title">Student Loan Interest Deduction Calculator</div>'
    + '<div class="ta-embed-subtitle">$2,500 cap + MAGI phase-out — above the line, no itemizing</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Interest paid ($)</label><input type="number" class="ta-paid" value="2800" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Status</label><select class="ta-status">'
    + '<option value="single" selected>Single / HoH</option>'
    + '<option value="mfj">Married joint</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Bracket (%)</label><input type="number" class="ta-rate" value="22" min="0" max="50" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>MAGI: <span class="ta-magi-label" style="color:var(--ta-text);font-weight:700">$92,500</span></label>'
    + '<input type="range" class="ta-magi" min="50000" max="260000" value="92500" step="500">'
    + '<input type="number" class="ta-magi-num" value="92500" min="0" step="500" style="margin-top:6px"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var PH = { single2026: [85000, 100000], mfj2026: [175000, 205000], single2025: [85000, 100000], mfj2025: [170000, 200000] };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var paid = num('.ta-paid'), rate = num('.ta-rate'), magi = num('.ta-magi-num');
    var win = PH['single2026'];
    root.querySelector('.ta-magi-label').textContent = money(magi);
    var base = Math.min(paid, 2500);
    var frac = Math.max(0, Math.min(1, 1 - (magi - win[0]) / (win[1] - win[0])));
    var ded = Math.round(base * frac);
    var status;
    if (frac >= 1) status = 'full deduction (below $' + win[0].toLocaleString() + ')';
    else if (frac <= 0) status = 'fully phased out (above $' + win[1].toLocaleString() + ')';
    else status = Math.round(frac * 100) + '% survives the phase-out';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(ded) + '</div>'
      + '<div class="ta-embed-sub">deduction — ' + status + ' · saves ' + money(ded * rate / 100) + ' at ' + rate + '%</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Capped interest</div><div class="rv">' + money(base) + (paid > 2500 ? ' (cap)' : '') + '</div></div>'
      + '<div><div class="rl">Savings</div><div class="rv">' + money(ded * rate / 100) + '</div></div>'
      + '</div>';
  }

  root.querySelector('.ta-magi').addEventListener('input', function () {
    root.querySelector('.ta-magi-num').value = this.value;
    calc();
  });
  root.querySelector('.ta-magi-num').addEventListener('input', function () {
    var v = Math.max(50000, Math.min(260000, parseFloat(this.value) || 0));
    root.querySelector('.ta-magi').value = v;
    calc();
  });
  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.studentLoanInterestDeductionCalculator = { recalc: calc };
})();
