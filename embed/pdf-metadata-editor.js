/*!
 * ToolAspect PDF Metadata Editor Embed
 * Install: <div id="ta-pdf-metadata-editor"></div>
 *          <script src="https://toolaspect.com/embed/pdf-metadata-editor.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engines: pdf.js 3.11.174 reads, @cantoo/pdf-lib 2.9.1 writes — both from
 * pinned jsDelivr CDN and running in the visitor's browser. No upload, ever.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pdf-metadata-editor';
  var BASE = 'https://toolaspect.com/pdf-metadata-editor/';
  var PDFJS = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
  var PDFJS_WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  var PDFLIB = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.9.1/dist/pdf-lib.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-file{display:block;width:100%;padding:9px;background:var(--ta-bg);border:1px dashed var(--ta-border);border-radius:8px;color:var(--ta-text);font-size:.85rem;font-family:inherit}'
    + '.ta-embed-f{width:100%;margin-top:9px;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.84rem;font-family:inherit}'
    + '.ta-embed-f:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:12px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;text-align:center;text-decoration:none}'
    + '.ta-embed-btn.red{background:var(--ta-bad)}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-status a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pdf-metadata-editor');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pdf-metadata-editor"]')) {
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
    + '<div class="ta-embed-title">PDF Metadata Editor</div>'
    + '<div class="ta-embed-subtitle">Read, edit, or strip a PDF’s title, author &amp; keywords — in the browser</div>'
    + '<div class="ta-embed-card">'
    + '<label>PDF file</label><input class="ta-file" type="file" accept=".pdf,application/pdf">'
    + '<input class="ta-f ta-title" placeholder="Title — what browsers and Google display" disabled>'
    + '<div class="ta-embed-row">'
    + '<input class="ta-f ta-author" placeholder="Author" disabled>'
    + '<input class="ta-f ta-keywords" placeholder="Keywords (comma-separated)" disabled>'
    + '</div>'
    + '<div class="ta-embed-row">'
    + '<button class="ta-embed-btn ta-go" type="button" disabled>Apply &amp; Download</button>'
    + '<button class="ta-embed-btn red ta-strip" type="button" disabled>Strip All</button>'
    + '</div>'
    + '<div class="ta-embed-status">Open a PDF to load its metadata. Nothing is uploaded — engines run on this page.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var bytes = null;

  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = res;
      s.onerror = function () { rej(new Error('failed: ' + src)); };
      (document.head || document.documentElement).appendChild(s);
    });
  }
  function pdfjs() {
    if (window.pdfjsLib) return Promise.resolve();
    return loadScript(PDFJS).then(function () {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
    });
  }
  function pdfLib() {
    if (window.PDFLib) return Promise.resolve();
    return loadScript(PDFLIB).then(function () {
      if (!window.PDFLib) throw new Error('pdf-lib global missing');
    });
  }

  q('.ta-file').addEventListener('change', function () {
    var f = q('.ta-file').files[0];
    if (!f) return;
    var fr = new FileReader();
    fr.onload = function () {
      bytes = new Uint8Array(fr.result);
      q('.ta-embed-status').textContent = 'Reading metadata …';
      pdfjs().then(function () {
        return window.pdfjsLib.getDocument({ data: bytes.slice() }).promise;
      }).then(function (doc) {
        return doc.getMetadata();
      }).then(function (md) {
        var i = md.info || {};
        q('.ta-title').value = i.Title || '';
        q('.ta-author').value = i.Author || '';
        q('.ta-keywords').value = i.Keywords || '';
        ['.ta-title', '.ta-author', '.ta-keywords', '.ta-go', '.ta-strip'].forEach(function (c) { q(c).disabled = false; });
        q('.ta-embed-status').textContent = 'Loaded — pages untouched, edit any field. Fields found: '
          + ['Title', 'Author', 'Subject', 'Keywords', 'Creator', 'Producer', 'CreationDate', 'ModDate']
            .filter(function (k) { return i[k]; }).length + ' of 8 populated.';
      }).catch(function (e) {
        q('.ta-embed-status').textContent = ((e && e.name === 'PasswordException') ? 'Encrypted PDF — decrypt it first.' : 'Could not read PDF: ' + ((e && e.message) || e));
      });
    };
    fr.readAsArrayBuffer(f);
  });

  function apply(strip) {
    if (!bytes) return;
    var statusEl = q('.ta-embed-status');
    statusEl.textContent = 'Writing the updated file …';
    pdfLib().then(function () {
      var lib = window.PDFLib;
      return lib.PDFDocument.load(bytes, { ignoreEncryption: false }).then(function (doc) {
        if (strip) {
          doc.setTitle(''); doc.setAuthor(''); doc.setSubject(''); doc.setKeywords([]);
          doc.setProducer(''); doc.setCreator('');
        } else {
          doc.setTitle(q('.ta-title').value);
          doc.setAuthor(q('.ta-author').value);
          doc.setKeywords(String(q('.ta-keywords').value || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean));
        }
        doc.setModificationDate(new Date());
        return doc.save();
      });
    }).then(function (out) {
      var blob = new Blob([out], { type: 'application/pdf' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = strip ? 'stripped.pdf' : 'updated.pdf';
      a.textContent = 'Download ' + (strip ? 'stripped' : 'updated') + '.pdf (' + blob.size.toLocaleString('en-US') + ' bytes)';
      a.className = 'ta-embed-btn';
      statusEl.textContent = (strip ? 'Stripped' : 'Applied') + ' — pages untouched.';
      statusEl.appendChild(document.createElement('br'));
      statusEl.appendChild(a);
    }).catch(function (e) {
      statusEl.textContent = 'Failed: ' + ((e && e.message) || e);
    });
  }

  q('.ta-go').addEventListener('click', function () { apply(false); });
  q('.ta-strip').addEventListener('click', function () { apply(true); });
})();
