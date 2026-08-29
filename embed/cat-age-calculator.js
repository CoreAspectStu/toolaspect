/*!
 * ToolAspect Cat Age Calculator Embed
 * Install: <div id="ta-cat-age-calculator"></div>
 *          <script src="https://toolaspect.com/embed/cat-age-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-cat-age-calculator';
  var BASE = 'https://toolaspect.com/cat-age-calculator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-breakdown{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;margin-top:12px;font-size:.82rem;color:var(--ta-muted)}'
    + '.ta-embed-breakdown strong{color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'cat-age-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="cat-age-calculator"]')) {
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
    + '<div class="ta-embed-title">Cat Age Calculator</div>'
    + '<div class="ta-embed-subtitle">Cat years to human years — year 1 = 15, year 2 = 24, then +4</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Cat’s age (years)</label><input type="number" class="ta-age" value="5" min="0.1" max="30" step="0.25"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function humanAge(a) {
    if (a <= 0) return 0;
    if (a <= 1) return a * 15;
    if (a <= 2) return 15 + 9 * (a - 1);
    return 24 + 4 * (a - 2);
  }
  function stageOf(a) {
    if (a < 1) return 'Kitten';
    if (a < 7) return 'Young adult';
    if (a < 10) return 'Mature adult';
    return 'Senior';
  }

  function calc() {
    var a = parseFloat(root.querySelector('.ta-age').value);
    if (isNaN(a) || a <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your cat’s age</div>';
      return;
    }
    var h = Math.round(humanAge(a));
    resultEl.innerHTML =
      '<div class="ta-embed-big">≈' + h + ' human years</div>'
      + '<div class="ta-embed-sub">' + a + '-year-old cat by the 15/9/4 formula</div>'
      + '<div class="ta-embed-breakdown">'
      + '<span>Old 7× rule: <strong>' + Math.round(a * 7) + '</strong></span>'
      + '<span>Life stage: <strong>' + stageOf(a) + '</strong></span>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.catAgeCalculator = { recalc: calc };
})();
