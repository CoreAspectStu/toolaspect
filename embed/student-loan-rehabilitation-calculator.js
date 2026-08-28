/*!
 * ToolAspect Student Loan Rehabilitation Calculator Embed
 * Install: <div id="ta-student-loan-rehabilitation-calculator"></div>
 *          <script src="https://toolaspect.com/embed/student-loan-rehabilitation-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-student-loan-rehabilitation-calculator';
  var BASE = 'https://toolaspect.com/student-loan-rehabilitation-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'student-loan-rehabilitation-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="student-loan-rehabilitation-calculator"]')) {
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
    + '<div class="ta-embed-title">Student Loan Rehabilitation Calculator</div>'
    + '<div class="ta-embed-subtitle">The 15%-of-discretionary-income payment to exit default</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>AGI ($/yr)</label><input type="number" class="ta-agi" value="42000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Family size</label>'
    + '<select class="ta-fam">'
    + '<option value="1" selected>1</option><option value="2">2</option><option value="3">3</option>'
    + '<option value="4">4</option><option value="5">5</option><option value="6">6</option>'
    + '<option value="7">7</option><option value="8">8+</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>State</label>'
    + '<select class="ta-region">'
    + '<option value="48" selected>48 states / DC</option>'
    + '<option value="AK">Alaska</option>'
    + '<option value="HI">Hawaii</option>'
    + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function fpl(n, region) {
    var inc = region === 'AK' ? 7100 : region === 'HI' ? 6532 : 5680;
    var base = region === 'AK' ? 19950 : region === 'HI' ? 18360 : 15960;
    return base + (n - 1) * inc;
  }
  function usd(n) { return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

  function calc() {
    var agi = parseFloat(root.querySelector('.ta-agi').value) || 0;
    var fam = parseInt(root.querySelector('.ta-fam').value, 10);
    var region = root.querySelector('.ta-region').value;
    var allowance = 1.5 * fpl(fam, region);
    var disc = Math.max(0, agi - allowance);
    var pmt = Math.max(5, disc * 0.15 / 12);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(pmt) + '/mo</div>'
      + '<div class="ta-embed-sub">15% of discretionary income ÷ 12 (2026 HHS guidelines)</div>'
      + '<div class="ta-embed-sub">Total over 9 payments: <strong>' + usd(pmt * 9) + '</strong> to clear the default</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.studentLoanRehabilitationCalculator = { recalc: calc };
})();
