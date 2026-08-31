/*!
 * ToolAspect JavaScript Obfuscator Embed
 * Install: <div id="ta-js-obfuscator"></div>
 *          <script src="https://toolaspect.com/embed/js-obfuscator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: javascript-obfuscator 5.6.0 (BSD-2-Clause) official browser build,
 * lazy-loaded from toolaspect.com and run in the visitor's browser —
 * source code never hits a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-js-obfuscator';
  var BASE = 'https://toolaspect.com/js-obfuscator/';
  var LIB = 'https://toolaspect.com/js-obfuscator/vendor/index.browser.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-card textarea{width:100%;min-height:140px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.78rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;line-height:1.5;outline:none;resize:vertical;white-space:pre}'
    + '.ta-embed-card textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-row{display:flex;gap:8px;margin-top:10px;flex-wrap:wrap}'
    + '.ta-embed-row select{flex:1;min-width:120px;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.82rem;font-family:inherit}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:10px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-out{margin-top:12px;min-height:70px;white-space:pre;overflow-x:auto;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;'
    + 'font-size:.72rem;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px 12px;max-height:220px;overflow-y:auto;color:var(--ta-text)}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'js-obfuscator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="js-obfuscator"]')) {
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
    + '<div class="ta-embed-title">JavaScript Obfuscator</div>'
    + '<div class="ta-embed-subtitle">String arrays + control-flow flattening, in the browser</div>'
    + '<div class="ta-embed-card">'
    + '<label>Source JavaScript</label><textarea class="ta-in" spellcheck="false" placeholder="function greet(name){ return \'hi \' + name; }"></textarea>'
    + '<div class="ta-embed-row">'
    + '<select class="ta-preset"><option value="readable">Rename only</option><option value="balanced" selected>Balanced (string array)</option><option value="maximum">Maximum (flatten + RC4)</option></select>'
    + '</div>'
    + '<button class="ta-embed-btn" type="button">Obfuscate</button>'
    + '<div class="ta-embed-out"></div>'
    + '<div class="ta-embed-status">Paste code, then obfuscate. First run fetches the engine (~1.7 MB, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var libPromise = null;
  function loadLib() {
    if (window.JavaScriptObfuscator) return Promise.resolve();
    if (libPromise) return libPromise;
    libPromise = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = LIB; s.onload = resolve; s.onerror = function () { reject(new Error('could not load ' + LIB)); };
      (document.head || document.documentElement).appendChild(s);
    });
    return libPromise;
  }

  var btn = root.querySelector('.ta-embed-btn');
  var status = root.querySelector('.ta-embed-status');
  var out = root.querySelector('.ta-embed-out');
  var inEl = root.querySelector('.ta-in');

  btn.addEventListener('click', function () {
    var src = inEl.value;
    if (!src.trim()) { status.textContent = 'Paste some JavaScript first.'; return; }
    status.textContent = 'Loading engine…';
    loadLib().then(function () {
      var preset = root.querySelector('.ta-preset').value;
      var o = { compact: true, identifierNamesGenerator: 'hexadecimal', renameGlobals: false };
      if (preset === 'readable') {
        o.stringArray = false;
      } else if (preset === 'balanced') {
        o.stringArray = true; o.stringArrayEncoding = ['base64']; o.stringArrayThreshold = 1;
      } else {
        o.stringArray = true; o.stringArrayEncoding = ['rc4']; o.stringArrayThreshold = 1;
        o.controlFlowFlattening = true; o.controlFlowFlatteningThreshold = 1;
        o.deadCodeInjection = true; o.deadCodeInjectionThreshold = 0.5;
      }
      try {
        var result = window.JavaScriptObfuscator.obfuscate(src, o).getObfuscatedCode();
        out.textContent = result;
        status.textContent = 'Obfuscated — ' + result.length.toLocaleString('en-US') + ' bytes out (' + (result.length / Math.max(1, src.length)).toFixed(1) + '× source size).';
      } catch (e) {
        out.textContent = '';
        status.textContent = 'Obfuscation failed: ' + String(e && e.message ? e.message : e).slice(0, 160);
      }
    }).catch(function (e) {
      status.textContent = 'Failed: ' + (e && e.message ? e.message : e) + '. Try the full tool at ' + BASE;
    });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.jsObfuscator = { version: '1.0' };
})();
