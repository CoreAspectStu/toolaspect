/*!
 * ToolAspect 529 College Savings Calculator Embed
 * Install: <div id="ta-529-college-savings-calculator"></div>
 *          <script src="https://toolaspect.com/embed/529-college-savings-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-529-college-savings-calculator';
  var BASE = 'https://toolaspect.com/529-college-savings-calculator/';

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
  styleEl.setAttribute('data-ta-embed', '529-college-savings-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="529-college-savings-calculator"]')) {
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
    + '<div class="ta-embed-title">529 College Savings</div>'
    + '<div class="ta-embed-subtitle">Monthly savings needed, with tuition inflation</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Child’s Age Now</label><input type="number" class="ta-age" value="8" min="0" max="18" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>School Type</label>'
    + '<select class="ta-school">'
    + '<option value="25350" selected>In-state (≈$25,350/yr)</option>'
    + '<option value="46100">Out-of-state (≈$46,100/yr)</option>'
    + '<option value="59900">Private (≈$59,900/yr)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Cost Inflation (%/yr)</label><input type="number" class="ta-infl" value="4" min="0" max="12" step="0.5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Current 529 ($)</label><input type="number" class="ta-bal" value="10000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Monthly Now ($)</label><input type="number" class="ta-mo" value="250" min="0" step="25"></div>'
    + '<div class="ta-embed-form-group"><label>Return (%/yr)</label><input type="number" class="ta-ret" value="6" min="0" max="15" step="0.5"></div>'
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
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var age = Math.min(18, Math.max(0, val('.ta-age')));
    var cost = parseFloat(root.querySelector('.ta-school').value) || 0;
    var infl = val('.ta-infl') / 100;
    var ret = val('.ta-ret') / 100;
    var bal = val('.ta-bal');
    var mo = val('.ta-mo');
    var yrs = 18 - age, n = yrs * 12, r = ret / 12;
    var total = 0;
    for (var k = 0; k < 4; k++) total += cost * Math.pow(1 + infl, yrs + k);
    var fv = bal * Math.pow(1 + r, n) + (r > 0 ? mo * ((Math.pow(1 + r, n) - 1) / r) : mo * n);
    var gap = Math.max(0, total - fv);
    var need = gap > 0 && r > 0 ? gap * r / (Math.pow(1 + r, n) - 1) : (gap > 0 ? gap / n : 0);
    if (total <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your details above</div>';
      return;
    }
    var html;
    if (fv >= total) {
      html = '<div class="ta-embed-big">On track</div>'
        + '<div class="ta-embed-sub">Projected ' + usd(fv) + ' covers the full ' + usd(total) + ' target</div>';
    } else {
      html = '<div class="ta-embed-big">' + usd(need) + '/mo</div>'
        + '<div class="ta-embed-sub">Extra needed to fully fund ' + usd(total) + '</div>'
        + '<div class="ta-embed-sub">Current path covers ' + Math.round(fv / total * 100) + '% (' + usd(fv) + ' of ' + usd(total) + ')</div>';
    }
    resultEl.innerHTML = html;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.college529 = { recalc: calc };
})();
