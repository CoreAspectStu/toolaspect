/*!
 * ToolAspect XML to JSON Embed
 * Install: <div id="ta-xml-to-json"></div>
 *          <script src="https://toolaspect.com/embed/xml-to-json.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: xml-js 1.6.11 (MIT) + sax 1.6.1 (BlueOak), loaded from toolaspect.com
 * and executed in the visitor's browser — XML never hits a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-xml-to-json';
  var BASE = 'https://toolaspect.com/xml-to-json/';
  var LIB = 'https://toolaspect.com/xml-to-json/vendor/xml-js.iife.js';

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
    + '.ta-embed-card textarea{width:100%;min-height:130px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.8rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;line-height:1.5;outline:none;resize:vertical}'
    + '.ta-embed-card textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-row{display:flex;gap:8px;margin-top:10px}'
    + '.ta-embed-row select{flex:1;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.82rem;font-family:inherit}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:10px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-out{margin-top:12px;min-height:80px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;'
    + 'font-size:.78rem;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px 12px;max-height:220px;overflow:auto;color:var(--ta-text)}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'xml-to-json');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="xml-to-json"]')) {
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
    + '<div class="ta-embed-title">XML to JSON</div>'
    + '<div class="ta-embed-subtitle">Two-way conversion, runs in the browser — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<label>Input</label><textarea class="ta-in" spellcheck="false" placeholder="&lt;catalog&gt;&lt;book id=&quot;bk101&quot;/&gt;&lt;/catalog&gt;"></textarea>'
    + '<div class="ta-embed-row">'
    + '<select class="ta-dir"><option value="x2j">XML → JSON</option><option value="j2x">JSON → XML</option></select>'
    + '<select class="ta-spaces"><option value="0">Minified</option><option value="2" selected>2-space</option><option value="4">4-space</option></select>'
    + '</div>'
    + '<button class="ta-embed-btn" type="button">Convert</button>'
    + '<div class="ta-embed-out"></div>'
    + '<div class="ta-embed-status">Paste XML or JSON. First convert fetches the parser (~36 KB, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var libPromise = null;
  function loadLib() {
    if (window.__taXmlJs) return Promise.resolve();
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
    var text = inEl.value;
    if (!text.trim()) { status.textContent = 'Paste some XML or JSON first.'; return; }
    status.textContent = 'Loading parser…';
    loadLib().then(function () {
      var X = window.__taXmlJs;
      var spaces = parseInt(root.querySelector('.ta-spaces').value, 10);
      var o = { compact: true, spaces: spaces, ignoreDeclaration: true };
      try {
        out.textContent = root.querySelector('.ta-dir').value === 'x2j'
          ? X.xml2json(text, o)
          : X.json2xml(text, o);
        status.textContent = 'Converted — ' + out.textContent.length.toLocaleString('en-US') + ' characters out.';
      } catch (e) {
        out.textContent = '';
        status.textContent = 'Parse error: ' + String(e && e.message ? e.message : e).slice(0, 160);
      }
    }).catch(function (e) {
      status.textContent = 'Failed: ' + (e && e.message ? e.message : e) + '. Try the full tool at ' + BASE;
    });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.xmlToJson = { version: '1.0' };
})();
