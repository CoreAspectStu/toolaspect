/*!
 * ToolAspect DOCX Viewer Embed
 * Install: <div id="ta-docx-viewer"></div>
 *          <script src="https://toolaspect.com/embed/docx-viewer.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-docx-viewer';
  var BASE = 'https://toolaspect.com/docx-viewer/';
  var JSZIP_URL = 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js';
  var DOCXP_URL = 'https://cdn.jsdelivr.net/npm/docx-preview@0.4.0/dist/docx-preview.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-btn{background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 16px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin:4px 4px 0 0}'
    + '.ta-embed-file{display:inline-block;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 16px;font-size:.9rem;cursor:pointer;margin:4px 4px 0 0}'
    + '.ta-embed-file input{display:none}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-status.ok{color:var(--ta-ok)}.ta-embed-status.bad{color:var(--ta-bad)}'
    + '.ta-viewer{margin-top:14px;background:#525659;border-radius:10px;padding:14px;max-height:60vh;overflow:auto}'
    + '.ta-viewer:empty{display:none}'
    + '.ta-docx-body .docx-wrapper{background:transparent!important;padding:0!important;display:block!important}'
    + '.ta-docx-body .docx-wrapper>section.docx{background:#fff;box-shadow:0 3px 10px rgba(0,0,0,.4);margin:0 auto 12px;box-sizing:border-box}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'docx-viewer');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="docx-viewer"]')) {
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
    + '<div class="ta-embed-title">DOCX Viewer</div>'
    + '<div class="ta-embed-subtitle">Read Word files with formatting &mdash; rendered in your visitor&rsquo;s browser</div>'
    + '<div class="ta-embed-card">'
    + '<label class="ta-embed-file">&#128194; Open .docx<input type="file" class="ta-file" accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"></label>'
    + '<div class="ta-viewer"><div class="ta-docx-body"></div></div>'
    + '<div class="ta-embed-status">Files never leave the browser. Renderer loads on first file (~170 KB).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function status(msg, cls) {
    var s = root.querySelector('.ta-embed-status');
    s.textContent = msg; s.className = 'ta-embed-status' + (cls ? ' ' + cls : '');
  }
  var loaded = {};
  function loadScript(url) {
    if (loaded[url]) return loaded[url];
    loaded[url] = new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = url; s.onload = res; s.onerror = function () { rej(new Error('Could not load ' + url)); };
      (document.head || document.documentElement).appendChild(s);
    });
    return loaded[url];
  }
  function ensureEngines() {
    return loadScript(JSZIP_URL).then(function () { return loadScript(DOCXP_URL); });
  }

  root.querySelector('.ta-file').addEventListener('change', function (e) {
    var f = e.target.files[0];
    if (!f) return;
    if (!/\.docx$/i.test(f.name)) { status('This viewer reads .docx files (Word 2007+), not legacy .doc.', 'bad'); return; }
    var body = root.querySelector('.ta-docx-body');
    body.innerHTML = '';
    status('Reading ' + f.name + ' …');
    ensureEngines().then(function () {
      var fr = new FileReader();
      fr.onload = function () {
        status('Rendering …');
        window.docx.renderAsync(fr.result, body, null, {
          inWrapper: true, breakPages: true, renderHeaders: true, renderFooters: true, useBase64URL: true
        }).then(function () {
          var blocks = body.querySelectorAll('section.docx').length;
          status('Rendered ' + blocks + ' page block' + (blocks === 1 ? '' : 's') + '. Nothing was uploaded.', 'ok');
        }).catch(function (err) { status('Render failed: ' + (err && err.message || err), 'bad'); });
      };
      fr.onerror = function () { status('Could not read the file from disk.', 'bad'); };
      fr.readAsArrayBuffer(f);
    }).catch(function (err) { status('Could not load the renderer: ' + (err && err.message || err), 'bad'); });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.docxViewer = {};
})();
