/*!
 * ToolAspect Document Metadata Remover Embed
 * Install: <div id="ta-document-metadata-remover"></div>
 *          <script src="https://toolaspect.com/embed/document-metadata-remover.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: JSZip 3.10.1 + @cantoo/pdf-lib 2.9.1 (both MIT) loaded from jsdelivr;
 * files are unzipped, scrubbed and rebuilt entirely in the visitor's browser.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-document-metadata-remover';
  var BASE = 'https://toolaspect.com/document-metadata-remover/';
  var JSZIP_URL = 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js';
  var PDFLIB_URL = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.9.1/dist/pdf-lib.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-file{display:block;width:100%;padding:9px;background:var(--ta-bg);border:1px dashed var(--ta-border);border-radius:8px;color:var(--ta-text);font-size:.85rem;font-family:inherit}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:12px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;text-align:center;text-decoration:none}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'document-metadata-remover');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="document-metadata-remover"]')) {
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
    + '<div class="ta-embed-title">Document Metadata Remover</div>'
    + '<div class="ta-embed-subtitle">Strip author, company &amp; hidden properties — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<input class="ta-file" type="file" accept=".docx,.xlsx,.pptx,.pdf" multiple>'
    + '<button class="ta-embed-btn ta-go" type="button" disabled>Clean Metadata</button>'
    + '<div class="ta-embed-status">Open .docx / .xlsx / .pptx / .pdf files. Everything runs locally.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var fileInput = q('.ta-file'), goBtn = q('.ta-go'), statusEl = q('.ta-embed-status');
  var files = [];

  fileInput.addEventListener('change', function () {
    files = [].slice.call(fileInput.files || []);
    goBtn.disabled = !files.length;
    statusEl.textContent = files.length + ' file' + (files.length > 1 ? 's' : '') + ' loaded. Hit Clean.';
  });

  function loadScript(url) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = url; s.onload = res;
      s.onerror = function () { rej(new Error('Could not load ' + url)); };
      (document.head || document.documentElement).appendChild(s);
    });
  }

  goBtn.addEventListener('click', function () {
    if (!files.length) return;
    goBtn.disabled = true;
    statusEl.textContent = 'Loading engines (JSZip + pdf-lib, cached after first use) …';
    var JSZip = window.JSZip, PDFLib = window.PDFLib;
    Promise.resolve()
      .then(function () { return JSZip ? null : loadScript(JSZIP_URL); })
      .then(function () { JSZip = window.JSZip; return files[0].arrayBuffer(); })
      .then(function (buf) {
        var bytes = new Uint8Array(buf);
        var ext = (files[0].name.split('.').pop() || '').toLowerCase();
        if (ext === 'pdf') {
          return (PDFLib ? Promise.resolve() : loadScript(PDFLIB_URL)).then(function () {
            PDFLib = window.PDFLib;
            return PDFLib.PDFDocument.load(buf, { updateMetadata: false }).then(function (doc) {
              var infoRef = doc.context.trailerInfo.Info;
              var info = infoRef ? doc.context.lookup(infoRef) : null;
              if (info) { [...info.keys()].forEach(function (k) { info.delete(k); }); }
              if (doc.catalog.dict.has(PDFLib.PDFName.of('Metadata'))) doc.catalog.dict.delete(PDFLib.PDFName.of('Metadata'));
              doc.getPages().forEach(function (p) { if (p.node.dict.has(PDFLib.PDFName.of('Metadata'))) p.node.dict.delete(PDFLib.PDFName.of('Metadata')); });
              return doc.save();
            });
          }).then(function (out) { return { out: new Uint8Array(out), type: 'application/pdf' }; });
        }
        if (ext !== 'docx' && ext !== 'xlsx' && ext !== 'pptx') {
          throw new Error('.' + ext + ' not supported — save as modern Office format or PDF first');
        }
        return JSZip.loadAsync(bytes).then(function (zip) {
          var MIN_CORE = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\\r\\n<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/>';
          var MIN_APP = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\\r\\n<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Office</Application></Properties>';
          if (zip.file('docProps/core.xml')) zip.file('docProps/core.xml', MIN_CORE);
          if (zip.file('docProps/app.xml')) zip.file('docProps/app.xml', MIN_APP);
          ['docProps/custom.xml', 'docProps/thumbnail.jpeg', 'docProps/thumbnail.wmf', 'docProps/thumbnail.png'].forEach(function (v) { if (zip.file(v)) zip.remove(v); });
          return Promise.all([
            zip.file('[Content_Types].xml') ? zip.file('[Content_Types].xml').async('string').then(function (xml) {
              zip.file('[Content_Types].xml', xml.replace(/<Override [^>]*PartName="\/docProps\/(custom\.xml|thumbnail\.[a-z]+)"[^>]*\/>/g, ''));
            }) : Promise.resolve(),
            zip.file('_rels/.rels') ? zip.file('_rels/.rels').async('string').then(function (xml) {
              zip.file('_rels/.rels', xml.replace(/<Relationship [^>]*Target="docProps\/(custom\.xml|thumbnail\.[a-z]+)"[^>]*\/>/g, ''));
            }) : Promise.resolve()
          ]).then(function () { return zip.generateAsync({ type: 'uint8array', compression: 'DEFLATE' }); });
        }).then(function (out) { return { out: new Uint8Array(out), type: 'application/octet-stream' }; });
      })
      .then(function (res) {
        var cleanName = files[0].name.replace(/(\.[a-z]+)?$/i, function (m) { return '-clean' + (m || ''); });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([res.out], { type: res.type }));
        a.download = cleanName;
        a.textContent = 'Download ' + cleanName + ' (' + res.out.length.toLocaleString('en-US') + ' B)';
        a.className = 'ta-embed-btn';
        statusEl.textContent = 'Cleaned — author, company, custom properties and thumbnails removed.';
        statusEl.appendChild(document.createElement('br'));
        statusEl.appendChild(a);
      })
      .catch(function (e) {
        statusEl.textContent = 'Could not clean: ' + ((e && e.message) || e);
      })
      .then(function () { goBtn.disabled = false; });
  });
})();
