/*!
 * ToolAspect Final Grade Calculator Embed
 * Install: <div id="ta-final-grade-calculator"></div>
 *          <script src="https://toolaspect.com/embed/final-grade-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-final-grade-calculator';
  var BASE = 'https://toolaspect.com/final-grade-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#6366f1;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#818cf8}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.4rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-big.warn{color:#dc2626}'
    + '.ta-embed-big.safe{color:#16a34a}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-mini-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;text-align:center;font-size:.85rem;margin-top:14px}'
    + '.ta-embed-mini-row strong{display:block;font-size:1.15rem;margin-top:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'final-grade-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="final-grade-calculator"]')) {
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
    if (window.console) console.warn('ToolAspect embed: no container #' + TARGET_ID + ' found.');
    return;
  }

  var html = ''
    + '<div class="ta-embed-root">'
    + '<div class="ta-embed-title">Final Grade Calculator</div>'
    + '<div class="ta-embed-subtitle">What do you need on the final exam?</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Current grade (%)</label><input type="number" id="tafg-current" value="78" min="0" step="0.1"></div>'
    + '<div class="ta-embed-form-group"><label>Final worth (%)</label><input type="number" id="tafg-weight" value="25" min="0.1" max="100" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Target grade (%)</label><input type="number" id="tafg-target" value="80" min="0" step="0.1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tafg-need">&mdash;</div>'
    + '<div class="ta-embed-sub" id="tafg-sub">score needed on the final</div>'
    + '<div class="ta-embed-mini-row">'
    + '<div><span style="color:var(--ta-muted)">If you ace it</span><strong id="tafg-best">&mdash;</strong></div>'
    + '<div><span style="color:var(--ta-muted)">If you bomb it</span><strong id="tafg-zero">&mdash;</strong></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tafg-' + id); }
  function fmt1(n) { return (Math.round(n * 10) / 10).toString(); }

  function calc() {
    var cur = parseFloat(g('current').value);
    var w = parseFloat(g('weight').value) / 100;
    var tgt = parseFloat(g('target').value);
    var big = g('need'), sub = g('sub');
    if (isNaN(cur) || isNaN(w) || isNaN(tgt) || w <= 0) { big.textContent = '—'; big.className = 'ta-embed-big'; sub.textContent = 'enter your grades'; return; }
    var needed = (tgt - cur * (1 - w)) / w;
    var best = cur * (1 - w) + 100 * w;
    var zero = cur * (1 - w);
    g('best').textContent = fmt1(best) + '%';
    g('zero').textContent = fmt1(zero) + '%';
    if (needed > 100) {
      big.textContent = fmt1(needed) + '%';
      big.className = 'ta-embed-big warn';
      sub.textContent = 'out of reach — even a 100 caps you at ' + fmt1(best) + '%';
    } else if (needed <= 0) {
      big.textContent = 'You\'re in';
      big.className = 'ta-embed-big safe';
      sub.textContent = 'already secured — a 0 still leaves ' + fmt1(Math.max(0, zero)) + '%';
    } else {
      big.textContent = fmt1(needed) + '%';
      big.className = 'ta-embed-big';
      sub.textContent = 'on the final gets you ' + fmt1(tgt) + '%';
    }
  }

  ['current', 'weight', 'target'].forEach(function (id) {
    g(id).addEventListener('input', calc);
  });
  calc();
})();
