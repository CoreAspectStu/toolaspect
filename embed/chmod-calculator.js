/*!
 * ToolAspect Chmod Calculator Embed
 * Install: <div id="ta-chmod-calculator"></div>
 *          <script src="https://toolaspect.com/embed/chmod-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-chmod-calculator';
  var BASE = 'https://toolaspect.com/chmod-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:auto 1fr 1fr 1fr;gap:8px;align-items:center;font-size:.88rem}'
    + '.ta-embed-grid .who{font-weight:600;color:var(--ta-text)}'
    + '.ta-embed-grid label{display:flex;align-items:center;gap:6px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 10px;cursor:pointer;user-select:none;color:var(--ta-text)}'
    + '.ta-embed-grid input,.ta-embed-special input{accent-color:var(--ta-accent);width:15px;height:15px;cursor:pointer}'
    + '.ta-embed-special{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}'
    + '.ta-embed-special label{display:flex;align-items:center;gap:6px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 10px;font-size:.8rem;cursor:pointer;color:var(--ta-text)}'
    + '.ta-embed-result{text-align:center;padding:20px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.1rem;font-weight:700;color:var(--ta-accent);letter-spacing:.08em;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:1rem;margin-top:4px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}'
    + '.ta-embed-cmd{margin-top:12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px 14px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.95rem;color:#16a34a;word-break:break-all}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-cmd{color:#4ade80}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-grid{font-size:.8rem}.ta-embed-grid label{padding:7px 8px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'chmod-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="chmod-calculator"]')) {
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
    + '<div class="ta-embed-title">Chmod Calculator</div>'
    + '<div class="ta-embed-subtitle">Numeric ⇄ symbolic Unix permissions</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-grid">'
    + '<div class="who">Owner</div>'
    + '<label><input type="checkbox" class="ta-ur"> read</label>'
    + '<label><input type="checkbox" class="ta-uw"> write</label>'
    + '<label><input type="checkbox" class="ta-ux"> exec</label>'
    + '<div class="who">Group</div>'
    + '<label><input type="checkbox" class="ta-gr"> read</label>'
    + '<label><input type="checkbox" class="ta-gw"> write</label>'
    + '<label><input type="checkbox" class="ta-gx"> exec</label>'
    + '<div class="who">Others</div>'
    + '<label><input type="checkbox" class="ta-or"> read</label>'
    + '<label><input type="checkbox" class="ta-ow"> write</label>'
    + '<label><input type="checkbox" class="ta-ox"> exec</label>'
    + '</div>'
    + '<div class="ta-embed-special">'
    + '<label><input type="checkbox" class="ta-su"> setuid</label>'
    + '<label><input type="checkbox" class="ta-sg"> setgid</label>'
    + '<label><input type="checkbox" class="ta-st"> sticky</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">755</div>'
    + '<div class="ta-embed-sub">rwxr-xr-x</div>'
    + '<div class="ta-embed-cmd">chmod 755 file.txt</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function checked(sel) {
    var el = root.querySelector(sel);
    return el ? el.checked : false;
  }

  function calc() {
    var val = function (r, w, x) { return (r ? 4 : 0) + (w ? 2 : 0) + (x ? 1 : 0); };
    var u = val(checked('.ta-ur'), checked('.ta-uw'), checked('.ta-ux'));
    var g = val(checked('.ta-gr'), checked('.ta-gw'), checked('.ta-gx'));
    var o = val(checked('.ta-or'), checked('.ta-ow'), checked('.ta-ox'));
    var sp = (checked('.ta-su') ? 4 : 0) + (checked('.ta-sg') ? 2 : 0) + (checked('.ta-st') ? 1 : 0);
    var oct = (sp ? String(sp) : '') + u + g + o;
    var triad = function (n, sb, lower, upper) {
      var s = (n & 4 ? 'r' : '-') + (n & 2 ? 'w' : '-');
      s += !(n & 1) ? (sb ? upper : '-') : (sb ? lower : 'x');
      return s;
    };
    var sym = triad(u, checked('.ta-su'), 's', 'S') + triad(g, checked('.ta-sg'), 's', 'S')
      + ((o & 4 ? 'r' : '-') + (o & 2 ? 'w' : '-') + (!(o & 1) ? (checked('.ta-st') ? 'T' : '-') : (checked('.ta-st') ? 't' : 'x')));
    root.querySelector('.ta-embed-big').textContent = oct;
    root.querySelector('.ta-embed-sub').textContent = sym;
    root.querySelector('.ta-embed-cmd').textContent = 'chmod ' + oct + ' file.txt';
  }

  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.chmodCalculator = { recalc: calc };
})();
