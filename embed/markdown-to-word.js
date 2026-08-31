/*!
 * ToolAspect Markdown to Word Embed
 * Install: <div id="ta-markdown-to-word"></div>
 *          <script src="https://toolaspect.com/embed/markdown-to-word.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: markdown-docx 1.7.0 (MIT) on docx 9.5.1 (MIT, pinned), lazy-loaded
 * from toolaspect.com and run in the visitor's browser — documents are
 * assembled locally, never uploaded.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-markdown-to-word';
  var BASE = 'https://toolaspect.com/markdown-to-word/';
  var LIB = 'https://toolaspect.com/markdown-to-word/vendor/markdown-docx.iife.js';

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
    + '.ta-embed-card textarea{width:100%;min-height:150px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.8rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;line-height:1.5;outline:none;resize:vertical}'
    + '.ta-embed-card textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:10px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'markdown-to-word');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="markdown-to-word"]')) {
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
    + '<div class="ta-embed-title">Markdown to Word</div>'
    + '<div class="ta-embed-subtitle">One-click .docx — real OOXML, runs in the browser</div>'
    + '<div class="ta-embed-card">'
    + '<label>Markdown</label><textarea class="ta-md" spellcheck="false" placeholder="# Heading\n\nSome **bold** text and a [link](https://example.com)."></textarea>'
    + '<button class="ta-embed-btn" type="button">Download .docx</button>'
    + '<div class="ta-embed-status">Type markdown, then download. First use fetches the Word engine (~790 KB, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var libPromise = null;
  function loadLib() {
    if (window.__taMarkdownDocx) return Promise.resolve();
    if (libPromise) return libPromise;
    libPromise = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = LIB; s.onload = resolve; s.onerror = function () { reject(new Error('could not load ' + LIB)); };
      (document.head || document.documentElement).appendChild(s);
    });
    return libPromise;
  }

  function b64ToBlob(b64, mime){
    var bin = atob(b64), len = bin.length, bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
    return new Blob([bytes], { type: mime });
  }

  var btn = root.querySelector('.ta-embed-btn');
  var status = root.querySelector('.ta-embed-status');
  var mdEl = root.querySelector('.ta-md');

  btn.addEventListener('click', function () {
    var text = mdEl.value;
    if (!text.trim()) { status.textContent = 'Type some markdown first.'; return; }
    status.textContent = 'Loading Word engine…';
    loadLib().then(function () {
      var M = window.__taMarkdownDocx;
      return M.markdownDocx(text, {}).then(function (doc) {
        return M.Packer.toBase64String(doc);
      });
    }).then(function (b64) {
      var blob = b64ToBlob(b64, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = 'document.docx'; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
      status.textContent = '.docx downloaded — ' + (blob.size / 1024).toFixed(1) + ' KB of real OOXML.';
    }).catch(function (e) {
      status.textContent = 'Failed: ' + (e && e.message ? e.message : e) + '. Try the full tool at ' + BASE;
    });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.markdownToWord = { version: '1.0' };
})();
