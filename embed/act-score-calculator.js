/*!
 * ToolAspect ACT Score Calculator Embed
 * Install: <div id="ta-act-score-calculator"></div>
 *          <script src="https://toolaspect.com/embed/act-score-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-act-score-calculator';
  var BASE = 'https://toolaspect.com/act-score-calculator/';

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
    + '.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}'
    + '.ta-embed-form-row input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:1rem;font-family:inherit;outline:none;text-align:center}'
    + '.ta-embed-form-row input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'act-score-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="act-score-calculator"]')) {
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
    + '<div class="ta-embed-title">ACT Score Calculator</div>'
    + '<div class="ta-embed-subtitle">Section scores to composite and percentile</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Test format</label>'
    + '<select class="ta-fmt"><option value="classic">Classic ACT (Science in composite)</option><option value="enhanced">Enhanced ACT (Science optional)</option></select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>English</label><input type="number" class="ta-e" value="29" min="1" max="36" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Math</label><input type="number" class="ta-m" value="25" min="1" max="36" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Reading</label><input type="number" class="ta-r" value="27" min="1" max="36" step="1"></div>'
    + '<div class="ta-embed-form-group"><label class="ta-sci-l">Science</label><input type="number" class="ta-s" value="24" min="1" max="36" step="1"></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var PCT = { 36: 100, 35: 99, 34: 99, 33: 98, 32: 97, 31: 95, 30: 93, 29: 91, 28: 89, 27: 86, 26: 82, 25: 78, 24: 74, 23: 69, 22: 63, 21: 56, 20: 49, 19: 42, 18: 35, 17: 29, 16: 23, 15: 18, 14: 13, 13: 9, 12: 6, 11: 4, 10: 2 };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? parseFloat(el.value) : NaN;
  }

  function calc() {
    var fmt = root.querySelector('.ta-fmt').value;
    var e = val('.ta-e'), m = val('.ta-m'), r = val('.ta-r'), s = val('.ta-s');
    var sciLabel = root.querySelector('.ta-sci-l');
    sciLabel.textContent = fmt === 'classic' ? 'Science' : 'Science (not in composite)';
    var scores = fmt === 'classic' ? [e, m, r, s] : [e, m, r];
    var n = scores.length;
    var have = scores.filter(function (x) { return !isNaN(x) && x > 0; });
    if (have.length < n || n === 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter ' + n + ' section scores (1–36)</div>';
      return;
    }
    var scoresSafe = scores.map(function (x) { return Math.min(36, Math.max(1, Math.round(x))); });
    var sum = scoresSafe.reduce(function (a, b) { return a + b; }, 0);
    var comp = Math.round(sum / n); // Math.round rounds .5 up, matching ACT
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + comp + '</div>'
      + '<div class="ta-embed-sub">composite — ' + (sum / n) + ' average, rounded</div>'
      + '<div class="ta-embed-sub">~' + (PCT[comp] || 1) + (function(v){var e=v%10,t=v%100;if(e===1&&t!==11)return 'st';if(e===2&&t!==12)return 'nd';if(e===3&&t!==13)return 'rd';return 'th';})(PCT[comp] || 1) + ' percentile nationally</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.actScoreCalculator = { recalc: calc };
})();
