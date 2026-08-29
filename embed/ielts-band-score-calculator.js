/*!
 * ToolAspect IELTS Band Score Calculator Embed
 * Install: <div id="ta-ielts-band-score-calculator"></div>
 *          <script src="https://toolaspect.com/embed/ielts-band-score-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-ielts-band-score-calculator';
  var BASE = 'https://toolaspect.com/ielts-band-score-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-form-group{margin-bottom:0}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.6rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:14px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px;text-align:center}'
    + '.ta-embed-cell .cl{font-size:.7rem;color:var(--ta-muted);margin-bottom:3px;text-transform:uppercase;letter-spacing:.03em}'
    + '.ta-embed-cell .cv{font-size:1rem;font-weight:700;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}.ta-embed-grid{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'ielts-band-score-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="ielts-band-score-calculator"]')) {
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
    + '<div class="ta-embed-title">IELTS Band Score Calculator</div>'
    + '<div class="ta-embed-subtitle">Four section scores → overall band with half-band rounding</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Listening</label><input type="number" class="ta-l" value="6.5" min="0" max="9" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Reading</label><input type="number" class="ta-r" value="6.5" min="0" max="9" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Writing</label><input type="number" class="ta-w" value="6" min="0" max="9" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Speaking</label><input type="number" class="ta-s" value="6" min="0" max="9" step="0.5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">&nbsp;</div>'
    + '<div class="ta-embed-grid">'
    + '<div class="ta-embed-cell"><div class="cl">Unrounded avg</div><div class="cv ta-avg">—</div></div>'
    + '<div class="ta-embed-cell"><div class="cl">Rounding rule</div><div class="cv ta-rule">—</div></div>'
    + '<div class="ta-embed-cell"><div class="cl">CEFR</div><div class="cv ta-cefr">—</div></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultBig = root.querySelector('.ta-embed-big');
  var resultSub = root.querySelector('.ta-embed-sub');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function snapHalf(v) { v = Math.min(9, Math.max(0, v)); return Math.round(v * 2) / 2; }

  function cefr(b) {
    if (b >= 8.5) return 'C2';
    if (b >= 7) return 'C1';
    if (b >= 5.5) return 'B2';
    if (b >= 4) return 'B1';
    return 'Below B1';
  }

  function calc() {
    var l = snapHalf(val('.ta-l')), r = snapHalf(val('.ta-r')), w = snapHalf(val('.ta-w')), s = snapHalf(val('.ta-s'));
    var mean = (l + r + w + s) / 4;
    var overall = Math.round(mean * 2) / 2;
    var frac = Math.round((mean - Math.floor(mean)) * 1000) / 1000;
    var rule;
    if (Math.abs(frac - 0.25) < 0.001 || Math.abs(frac - 0.75) < 0.001) rule = '.25/.75 rounds up';
    else if (frac > 0.5) rule = 'Nearest .5, up';
    else rule = 'Nearest .5, down';
    resultBig.textContent = overall.toFixed(1);
    resultSub.textContent = 'Overall band ' + overall.toFixed(1);
    root.querySelector('.ta-avg').textContent = mean.toFixed(3);
    root.querySelector('.ta-rule').textContent = rule;
    root.querySelector('.ta-cefr').textContent = cefr(overall);
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.ieltsBandScoreCalculator = { recalc: calc };
})();
