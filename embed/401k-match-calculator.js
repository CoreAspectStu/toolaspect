/*!
 * ToolAspect 401(k) Match Calculator Embed
 * Install: <div id="ta-401k-match-calculator"></div>
 *          <script src="https://toolaspect.com/embed/401k-match-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-401k-match-calculator';
  var BASE = 'https://toolaspect.com/401k-match-calculator/';

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
  styleEl.setAttribute('data-ta-embed', '401k-match-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="401k-match-calculator"]')) {
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
    + '<div class="ta-embed-title">401(k) Match Calculator</div>'
    + '<div class="ta-embed-subtitle">What your employer contributes, per year and per paycheck</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Annual salary ($)</label><input type="number" class="ta-salary" value="75000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Your contribution (%)</label><input type="number" class="ta-contrib" value="6" min="0" max="100" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Paychecks / yr</label><select class="ta-freq">'
    + '<option value="26" selected>26</option><option value="24">24</option><option value="12">12</option><option value="52">52</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Match type</label><select class="ta-type">'
    + '<option value="dollar" selected>100% of first __%</option>'
    + '<option value="partial">50% of first __%</option>'
    + '<option value="tiered">100% of 3% + 50% of 2%</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Match cap (%)</label><input type="number" class="ta-cap" value="3" min="0.5" max="25" step="0.5"></div>'
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

  function matchPct(contribPct, type, cap) {
    if (type === 'tiered') {
      return Math.min(contribPct, 3) + 0.5 * Math.max(0, Math.min(contribPct, 5) - 3);
    }
    var rate = type === 'partial' ? 0.5 : 1;
    return Math.min(contribPct, cap) * rate;
  }

  function calc() {
    var salary = val('.ta-salary');
    var contrib = val('.ta-contrib');
    var checks = val('.ta-freq') || 26;
    var type = root.querySelector('.ta-type').value;
    var cap = val('.ta-cap');
    if (salary <= 0 || contrib <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter salary and contribution</div>';
      return;
    }
    var mp = matchPct(contrib, type, cap);
    var annual = salary * mp / 100;
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(annual).toLocaleString('en-US') + '/yr</div>'
      + '<div class="ta-embed-sub">employer match — ' + mp.toFixed(2) + '% of salary</div>'
      + '<div class="ta-sub2 ta-embed-sub"><strong>$' + Math.round(annual / checks).toLocaleString('en-US') + '</strong> per paycheck</div>'
      + '<div class="ta-embed-sub">you contribute $' + Math.round(salary * contrib / 100).toLocaleString('en-US') + '/yr</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds['401kMatchCalculator'] = { recalc: calc };
})();
