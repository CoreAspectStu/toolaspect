/*!
 * ToolAspect HTML to Word Embed
 * Install: <div id="ta-html-to-word"></div>
 *          <script src="https://toolaspect.com/embed/html-to-word.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: docshift 0.0.73 (MIT, bundles docx), loaded from toolaspect.com;
 * the conversion runs entirely in the visitor's browser — no upload, ever.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-html-to-word';
  var BASE = 'https://toolaspect.com/html-to-word/';
  var LIB_URL = 'https://toolaspect.com/html-to-word/vendor/docshift.min.js';

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
    + '.ta-embed-ta{width:100%;min-height:110px;padding:9px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);'
    + 'font-size:.8rem;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;line-height:1.55;resize:vertical}'
    + '.ta-embed-ta:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:12px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;text-align:center;text-decoration:none}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-status a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'html-to-word');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="html-to-word"]')) {
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
    + '<div class="ta-embed-title">HTML to Word</div>'
    + '<div class="ta-embed-subtitle">Paste HTML, download a real .docx — runs in the browser</div>'
    + '<div class="ta-embed-card">'
    + '<label>HTML</label>'
    + '<textarea class="ta-in" spellcheck="false">&lt;h1&gt;Quarterly Report&lt;/h1&gt;\n&lt;p&gt;Revenue grew &lt;strong&gt;18%&lt;/strong&gt; to &lt;em&gt;$4.2M&lt;/em&gt;.&lt;/p&gt;</textarea>'
    + '<button class="ta-embed-btn ta-go" type="button">Convert to .docx</button>'
    + '<div class="ta-embed-status">Headings, tables, lists, and links become native Word elements. First click fetches the engine (~870 KB, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var libPromise = null;

  function getLib() {
    if (libPromise) return libPromise;
    libPromise = new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = LIB_URL;
      s.onload = function () {
        var d = window.docshift;
        if (d && d.toDocx) res(d); else rej(new Error('docshift global missing'));
      };
      s.onerror = function () { rej(new Error('engine failed to load')); };
      (document.head || document.documentElement).appendChild(s);
    });
    return libPromise;
  }

  q('.ta-go').addEventListener('click', function () {
    var statusEl = q('.ta-embed-status');
    var html = q('.ta-in').value;
    if (!html.trim()) { statusEl.textContent = 'Paste some HTML first.'; return; }
    statusEl.textContent = 'Loading the engine (~870 KB, cached after first use) …';
    getLib().then(function (d) {
      statusEl.textContent = 'Building the .docx …';
      return d.toDocx(html);
    }).then(function (blob) {
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'document.docx';
      a.textContent = 'Download document.docx (' + blob.size.toLocaleString('en-US') + ' bytes)';
      a.className = 'ta-embed-btn';
      statusEl.textContent = '';
      statusEl.appendChild(document.createElement('br'));
      statusEl.appendChild(a);
    }).catch(function (e) {
      statusEl.textContent = 'Conversion failed: ' + ((e && e.message) || e);
    });
  });
})();
