/*!
 * ToolAspect Pregnancy Weight Gain Calculator Embed
 * Install: <div id="ta-pregnancy-weight-gain-calculator"></div>
 *          <script src="https://toolaspect.com/embed/pregnancy-weight-gain-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pregnancy-weight-gain-calculator';
  var BASE = 'https://toolaspect.com/pregnancy-weight-gain-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.3rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-btn{display:block;width:100%;padding:11px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.95rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pregnancy-weight-gain-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pregnancy-weight-gain-calculator"]')) {
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
  root.innerHTML =
    '<div class="ta-embed-title">Pregnancy Weight Gain</div>'
    + '<div class="ta-embed-subtitle">IOM guideline range for your week, from pre-pregnancy BMI</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Height (in)</label><input id="ta-pw-h" type="number" value="64"></div>'
    + '<div class="ta-embed-form-group"><label>Pre-preg weight (lb)</label><input id="ta-pw-w" type="number" value="130"></div>'
    + '<div class="ta-embed-form-group"><label>Week</label><input id="ta-pw-k" type="number" value="20" min="1" max="42"></div>'
    + '</div>'
    + '<button class="ta-embed-btn" id="ta-pw-go">Calculate</button>'
    + '<div class="ta-embed-result" id="ta-pw-out" style="display:none;margin-top:12px"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect Pregnancy Weight Gain Calculator</a></div>';
  target.appendChild(root);

  var SING = {
    u: { total: [28, 40], rate: [1.0, 1.3] },
    n: { total: [25, 35], rate: [0.8, 1.0] },
    o: { total: [15, 25], rate: [0.5, 0.7] },
    b: { total: [11, 20], rate: [0.4, 0.6] }
  };

  function go() {
    var h = parseFloat(document.getElementById('ta-pw-h').value) || 0;
    var w = parseFloat(document.getElementById('ta-pw-w').value) || 0;
    var k = parseInt(document.getElementById('ta-pw-k').value, 10) || 0;
    var out = document.getElementById('ta-pw-out');
    if (h < 40 || w < 50) {
      out.style.display = 'block';
      out.innerHTML = '<div class="ta-embed-big" style="font-size:1.1rem;color:var(--ta-muted)">Enter height and pre-pregnancy weight.</div>';
      return;
    }
    var bmi = 703 * w / (h * h);
    var cat = bmi < 18.5 ? 'u' : (bmi < 25 ? 'n' : (bmi < 30 ? 'o' : 'b'));
    var g = SING[cat], after = Math.max(0, k - 13);
    var lo = Math.min(1.1 + g.rate[0] * after, g.total[0]);
    var hi = Math.min(4.4 + g.rate[1] * after, g.total[1]);
    var names = { u: 'underweight', n: 'normal', o: 'overweight', b: 'obese' };
    out.style.display = 'block';
    out.innerHTML = '<div class="ta-embed-big">' + lo.toFixed(1) + '–' + hi.toFixed(1) + ' lb</div>'
      + '<div class="ta-embed-sub">recommended gain by week ' + k + ' (BMI ' + bmi.toFixed(1) + ', ' + names[cat] + ') · total for pregnancy: ' + g.total[0] + '–' + g.total[1] + ' lb</div>';
  }
  document.getElementById('ta-pw-go').addEventListener('click', go);
  ['ta-pw-h', 'ta-pw-w', 'ta-pw-k'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', go);
  });
  go();
})();
