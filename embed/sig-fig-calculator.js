/*!
 * ToolAspect Sig Fig Calculator Embed
 * Install: <div id="ta-sig-fig-calculator"></div>
 *          <script src="https://toolaspect.com/embed/sig-fig-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-sig-fig-calculator';
  var BASE = 'https://toolaspect.com/sig-fig-calculator/';

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
    + '.ta-embed-form-row.two{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row.two{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'sig-fig-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="sig-fig-calculator"]')) {
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
    + '<div class="ta-embed-title">Sig Fig Calculator</div>'
    + '<div class="ta-embed-subtitle">Round to significant figures and count them</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Number (e.g. 0.004578)</label><input type="text" class="ta-num" value="0.004578" autocomplete="off" spellcheck="false"></div>'
    + '<div class="ta-embed-form-group"><label>Round to N sig figs</label><input type="number" class="ta-sf" value="2" min="1" max="20" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function countSF(raw) {
    var s = String(raw).trim().replace(/^[+-]/, '');
    if (!/^[0-9.]*([eE][+-]?[0-9]+)?$/.test(s)) return null;
    var mant = s.toLowerCase().split('e')[0];
    if (!/\d/.test(mant)) return null;
    var digits = mant.replace(/[^0-9]/g, '');
    if (mant.indexOf('.') >= 0) return digits.replace(/^0+/, '').length;
    var noTrail = digits.replace(/0+$/, '');
    return noTrail.length || digits.length;
  }
  function sciPretty(p) { return p.replace('e+', ' × 10^').replace('e-', ' × 10^-'); }

  function calc() {
    var raw = root.querySelector('.ta-num').value;
    var sf = parseInt(root.querySelector('.ta-sf').value, 10);
    var x = parseFloat(raw);
    var count = countSF(raw);
    if (count === null || !isFinite(x)) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter a valid number (try 6.02e23)</div>';
      return;
    }
    if (sf >= 1 && sf <= count) {
      var p = x.toPrecision(sf);
      resultEl.innerHTML =
        '<div class="ta-embed-big">' + sciPretty(p) + '</div>'
        + '<div class="ta-embed-sub">' + sf + ' sig figs · your input has ' + count + '</div>';
    } else {
      resultEl.innerHTML =
        '<div class="ta-embed-big">' + count + '</div>'
        + '<div class="ta-embed-sub">sig figs in your input' + (sf > count ? ' · already at ' + count + ' sf, showing unrounded' : '') + '</div>';
    }
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.sigFigCalculator = { recalc: calc };
})();
