/*!
 * ToolAspect HTML to PDF Embed
 * Install: <div id="ta-html-to-pdf"></div>
 *          <script src="https://toolaspect.com/embed/html-to-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: html-to-pdfmake (MIT) on pdfmake (MIT) — typesets in the visitor's browser.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-html-to-pdf';
  var BASE = 'https://toolaspect.com/html-to-pdf/';
  var SCRIPTS = [
    'https://cdn.jsdelivr.net/npm/pdfmake@0.2.20/build/pdfmake.min.js',
    'https://cdn.jsdelivr.net/npm/pdfmake@0.2.20/build/vfs_fonts.js',
    'https://cdn.jsdelivr.net/npm/html-to-pdfmake@2.5.34/browser.js'
  ];

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-ta{width:100%;min-height:160px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.8rem;line-height:1.5;padding:10px;border-radius:8px;resize:vertical;outline:none}'
    + '.ta-embed-ta:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-row label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600}'
    + '.ta-embed-row select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:9px 11px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-status{text-align:center;color:var(--ta-muted);font-size:.82rem;margin-top:10px;min-height:1.2em}'
    + '.ta-embed-btn{display:inline-block;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 22px;'
    + 'font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin:12px 4px 0}'
    + '.ta-embed-btn:hover{opacity:.92}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'html-to-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="html-to-pdf"]')) {
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
    + '<div class="ta-embed-title">HTML to PDF</div>'
    + '<div class="ta-embed-subtitle">Paste markup, download a typeset PDF — rendered in the visitor\'s browser</div>'
    + '<div class="ta-embed-card">'
    + '<textarea class="ta-html" spellcheck="false" placeholder="Paste HTML — headings, tables, links carry over">&lt;h2&gt;Hello&lt;/h2&gt;&lt;p&gt;Paste your HTML here.&lt;/p&gt;</textarea>'
    + '<div class="ta-embed-row">'
    + '<div><label>Page size</label><select class="ta-size"><option value="LETTER">US Letter</option><option value="A4">A4</option><option value="LEGAL">US Legal</option></select></div>'
    + '<div><label>Orientation</label><select class="ta-orient"><option value="portrait">Portrait</option><option value="landscape">Landscape</option></select></div>'
    + '</div>'
    + '<button type="button" class="ta-embed-btn go">Convert to PDF</button>'
    + '<div class="ta-embed-status"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var ta = root.querySelector('.ta-html');
  var goBtn = root.querySelector('.go');
  var status = root.querySelector('.ta-embed-status');
  var libsLoaded = null;

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('failed to load ' + src)); };
      (document.head || document.documentElement).appendChild(s);
    });
  }
  function loadLibs() {
    if (!libsLoaded) {
      status.textContent = 'Loading engine (cached after first use)…';
      libsLoaded = SCRIPTS.reduce(function (p, src) {
        return p.then(function () { return loadScript(src); });
      }, Promise.resolve()).then(function () {
        if (!window.htmlToPdfmake || !window.pdfMake) throw new Error('engine unavailable');
      });
      libsLoaded.catch(function () { libsLoaded = null; });
    }
    return libsLoaded;
  }

  goBtn.addEventListener('click', function () {
    var html = ta.value.trim();
    if (!html) { status.textContent = 'Paste some HTML first.'; return; }
    goBtn.disabled = true;
    status.textContent = 'Converting…';
    loadLibs().then(function () {
      var landscape = root.querySelector('.ta-orient').value === 'landscape';
      var dd = {
        content: window.htmlToPdfmake(html, { tableAutoSize: true }),
        pageSize: root.querySelector('.ta-size').value,
        pageOrientation: landscape ? 'landscape' : undefined,
        pageMargins: [40, 40, 40, 40],
        defaultStyle: { fontSize: 11, lineHeight: 1.25 },
        styles: {
          h1: { fontSize: 20, bold: true, margin: [0, 12, 0, 6] },
          h2: { fontSize: 16, bold: true, margin: [0, 10, 0, 5] },
          h3: { fontSize: 13, bold: true, margin: [0, 8, 0, 4] },
          th: { bold: true, fillColor: '#eeeeee' }
        }
      };
      return new Promise(function (resolve) {
        window.pdfMake.createPdf(dd).getBlob(function (blob) {
          var a = document.createElement('a');
          a.download = 'document.pdf';
          a.href = URL.createObjectURL(blob);
          a.click();
          resolve(blob.size);
        });
      });
    }).then(function (size) {
      status.textContent = 'Saved — ' + (size / 1024).toFixed(0) + ' KB PDF, typeset on this device.';
      goBtn.disabled = false;
    }).catch(function (err) {
      status.textContent = 'Conversion failed: ' + (err && err.message ? err.message : err);
      goBtn.disabled = false;
    });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.htmlToPdf = {};
})();
