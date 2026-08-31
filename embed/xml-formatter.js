/*!
 * ToolAspect XML Formatter Embed
 * Install: <div id="ta-xml-formatter"></div>
 *          <script src="https://toolaspect.com/embed/xml-formatter.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engines: xml-formatter 3.7.0 + xml-js 1.6.11 (MIT/BlueOak), loaded from
 * toolaspect.com — everything runs in the visitor's browser.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-xml-formatter';
  var BASE = 'https://toolaspect.com/xml-formatter/';
  var LIB_FORMATTER = 'https://toolaspect.com/xml-formatter/vendor/xml-formatter.iife.js';
  var LIB_JS = 'https://toolaspect.com/xml-formatter/vendor/xml-js.iife.js';

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
    + '.ta-embed-btns{display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap}'
    + '.ta-embed-btns button{flex:1;padding:8px 10px;border:1px solid var(--ta-border);background:var(--ta-bg);color:var(--ta-text);border-radius:8px;font-size:.82rem;cursor:pointer;font-family:inherit;font-weight:600}'
    + '.ta-embed-btns button.pri{background:var(--ta-accent);border-color:var(--ta-accent);color:#fff}'
    + '.ta-embed-card textarea{width:100%;min-height:140px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.8rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;line-height:1.5;outline:none;resize:vertical}'
    + '.ta-embed-card textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-status .ok{color:#16a34a}.ta-embed-status .bad{color:#dc2626}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'xml-formatter');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="xml-formatter"]')) {
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
    + '<div class="ta-embed-title">XML Formatter</div>'
    + '<div class="ta-embed-subtitle">Format, minify, and validate — runs in the browser</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-btns">'
    + '<button type="button" class="pri" data-mode="format">Format</button>'
    + '<button type="button" data-mode="minify">Minify</button>'
    + '<button type="button" data-mode="validate">Validate</button>'
    + '</div>'
    + '<label>XML</label><textarea class="ta-in" spellcheck="false" placeholder="<root>…</root>"></textarea>'
    + '<label>Result</label><textarea class="ta-out" spellcheck="false" readonly></textarea>'
    + '<div class="ta-embed-status">Paste XML, then pick a mode.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function loadScript(src, cb) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = cb;
    (document.head || document.documentElement).appendChild(s);
  }
  var libState = 0; // 0 = not loading, 1 = loading, 2 = ready
  var pending = [];
  function withLibs(cb) {
    if (libState === 2) return cb();
    pending.push(cb);
    if (libState === 1) return;
    libState = 1;
    loadScript(LIB_JS, function () {
      loadScript(LIB_FORMATTER, function () {
        libState = 2;
        pending.splice(0).forEach(function (f) { f(); });
      });
    });
  }

  var inEl = root.querySelector('.ta-in'), outEl = root.querySelector('.ta-out'), status = root.querySelector('.ta-embed-status');

  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  function run(mode) {
    var xml = inEl.value;
    if (!xml.trim()) { status.innerHTML = '<span class="bad">Paste some XML first.</span>'; return; }
    withLibs(function () {
      var XF = window.__taXmlFormatter, XJ = window.__taXmlJs;
      try {
        var parsed = XJ.xml2js(xml, { compact: false });
        if (mode === 'validate') {
          var els = 0, attrs = 0, depth = 0;
          (function walk(n, d) {
            if (Array.isArray(n)) { n.forEach(function (c) { walk(c, d); }); return; }
            if (!n || typeof n !== 'object') return;
            if (n.type === 'element') { els++; attrs += n.attributes ? Object.keys(n.attributes).length : 0; depth = Math.max(depth, d); }
            (n.elements || []).forEach(function (c) { walk(c, d + 1); });
          })(parsed.elements, 1);
          outEl.value = '';
          status.innerHTML = '<span class="ok">Well-formed.</span> ' + els + ' elements, ' + attrs + ' attributes, max depth ' + depth + '.';
          return;
        }
        if (mode === 'minify') {
          var min = XF.minify(xml);
          outEl.value = min;
          var save = ((1 - min.length / xml.length) * 100).toFixed(1);
          status.innerHTML = '<span class="ok">Minified.</span> ' + xml.length + ' → ' + min.length + ' chars (' + save + '% smaller).';
        } else {
          var pretty = XF.format(xml, { indentation: '  ', collapseContent: true, lineSeparator: '\n' });
          outEl.value = pretty;
          status.innerHTML = '<span class="ok">Formatted.</span> ' + xml.trim().split('\n').length + ' lines in → ' + pretty.trim().split('\n').length + ' lines out.';
        }
      } catch (e) {
        outEl.value = '';
        status.innerHTML = '<span class="bad">Not well-formed:</span> ' + esc(String(e.message).split('\n').slice(0, 3).join(' — '));
      }
    });
  }

  root.querySelectorAll('.ta-embed-btns button').forEach(function (b) {
    b.addEventListener('click', function () { run(b.getAttribute('data-mode')); });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.xmlFormatter = { format: function () { run('format'); } };
})();
