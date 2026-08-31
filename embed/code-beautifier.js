/*!
 * ToolAspect Code Beautifier Embed
 * Install: <div id="ta-code-beautifier"></div>
 *          <script src="https://toolaspect.com/embed/code-beautifier.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-code-beautifier';
  var BASE = 'https://toolaspect.com/code-beautifier/';
  var CDNV = 'https://cdn.jsdelivr.net/npm/js-beautify@1.15.4/js/lib/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:10px}'
    + '.ta-embed-mode{padding:6px 14px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-muted);font-size:.82rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode.on{border-color:var(--ta-accent);color:var(--ta-text)}'
    + '.ta-embed-area{width:100%;min-height:130px;padding:10px 12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.74rem;line-height:1.5;resize:vertical;margin-bottom:8px}'
    + '.ta-embed-area:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-embed-btn{background:var(--ta-accent);border:none;color:#fff;border-radius:8px;padding:8px 18px;font-size:.82rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-note{text-align:center;color:var(--ta-muted);font-size:.78rem;margin:6px 0 0;min-height:1.2em}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'code-beautifier');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="code-beautifier"]')) {
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
    + '<div class="ta-embed-title">Code Beautifier</div>'
    + '<div class="ta-embed-subtitle">JS · CSS · HTML — formatted in your browser by js-beautify</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-row">'
    + '<button type="button" class="ta-embed-mode on" data-m="js">JavaScript</button>'
    + '<button type="button" class="ta-embed-mode" data-m="css">CSS</button>'
    + '<button type="button" class="ta-embed-mode" data-m="html">HTML</button>'
    + '</div>'
    + '<textarea class="ta-embed-area" id="ta-cb-in" spellcheck="false" placeholder="Paste minified or messy code…"></textarea>'
    + '<textarea class="ta-embed-area" id="ta-cb-out" spellcheck="false" readonly placeholder="Beautified output appears here…"></textarea>'
    + '<div class="ta-embed-row">'
    + '<button type="button" class="ta-embed-btn" id="ta-cb-run">Beautify</button>'
    + '<button type="button" class="ta-embed-btn ghost" id="ta-cb-copy">Copy</button>'
    + '</div>'
    + '<p class="ta-embed-note" id="ta-cb-note">2-space indent · brace options and downloads on the full tool.</p>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var mode = 'js';
  var inA = root.querySelector('#ta-cb-in'), outA = root.querySelector('#ta-cb-out'),
      note = root.querySelector('#ta-cb-note');
  var loadedSrc = {};

  function engine() {
    if (mode === 'js') return window.js_beautify || null;
    if (mode === 'css') return window.css_beautify || null;
    return window.html_beautify || null;
  }
  function loadEngine(cb) {
    var g = engine();
    if (g) { cb(g); return; }
    var src = mode === 'js' ? CDNV + 'beautify.js' : mode === 'css' ? CDNV + 'beautify-css.js' : CDNV + 'beautify-html.js';
    if (loadedSrc[src]) { setTimeout(function () { loadEngine(cb); }, 50); return; }
    loadedSrc[src] = true;
    note.textContent = 'Loading formatter engine…';
    var s = document.createElement('script');
    s.src = src; s.async = true;
    s.onload = function () { cb(engine()); };
    s.onerror = function () { note.textContent = 'Could not load the engine — check connectivity.'; };
    (document.head || document.documentElement).appendChild(s);
  }
  function beautify() {
    var v = inA.value;
    if (!v.trim()) { outA.value = ''; note.textContent = 'Paste some code first.'; return; }
    loadEngine(function (fn) {
      if (!fn) return;
      try {
        outA.value = fn(v, { indent_size: 2 });
        var lines = outA.value.split('\n').length;
        note.textContent = v.split('\n').length + ' line(s) in → ' + lines + ' lines out · js-beautify 1.15.4';
      } catch (e) {
        outA.value = '';
        note.textContent = 'Could not beautify: ' + e.message;
      }
    });
  }
  root.addEventListener('click', function (e) {
    var m = e.target.closest('.ta-embed-mode');
    if (m) {
      mode = m.getAttribute('data-m');
      [].forEach.call(root.querySelectorAll('.ta-embed-mode'), function (b) { b.classList.toggle('on', b === m); });
      beautify();
      return;
    }
    if (e.target.id === 'ta-cb-run') beautify();
    if (e.target.id === 'ta-cb-copy') {
      var btn = e.target;
      var done = function () { btn.textContent = 'Copied ✓'; setTimeout(function () { btn.textContent = 'Copy'; }, 1500); };
      if (!outA.value) return;
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(outA.value).then(done, done);
      else { outA.select(); try { document.execCommand('copy'); } catch (err) {} done(); }
    }
  });
  inA.addEventListener('input', function () { clearTimeout(window.__taCbT); window.__taCbT = setTimeout(beautify, 400); });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.codeBeautifier = { beautify: beautify };
})();
