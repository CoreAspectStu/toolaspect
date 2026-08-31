/*!
 * ToolAspect PDF Merge Embed
 * Install: <div id="ta-pdf-merge"></div>
 *          <script src="https://toolaspect.com/embed/pdf-merge.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: @cantoo/pdf-lib (MIT), loaded on demand from jsdelivr — merges happen
 * entirely in the visitor's browser; no file ever reaches a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pdf-merge';
  var BASE = 'https://toolaspect.com/pdf-merge/';
  var LIB_URL = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.9.1/dist/pdf-lib.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-drop{border:2px dashed var(--ta-border);border-radius:12px;padding:26px;text-align:center;cursor:pointer}'
    + '.ta-embed-drop.over{border-color:var(--ta-accent)}'
    + '.ta-embed-drop p{color:var(--ta-muted);font-size:.85rem;margin:0}'
    + '.ta-embed-frow{display:flex;align-items:center;gap:8px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:7px 10px;margin-top:6px}'
    + '.ta-embed-frow .nm{flex:1;font-size:.8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
    + '.ta-embed-frow .mt{font-size:.72rem;color:var(--ta-muted);white-space:nowrap;font-family:ui-monospace,Menlo,Consolas,monospace}'
    + '.ta-embed-frow .mt .ok{color:#16a34a}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-frow .mt .ok{color:#4ade80}'
    + '.ta-embed-ib{background:none;border:1px solid var(--ta-border);border-radius:6px;color:var(--ta-muted);width:24px;height:24px;cursor:pointer;font-size:.72rem;line-height:1}'
    + '.ta-embed-btn{padding:10px 22px;border-radius:8px;border:none;background:var(--ta-accent);color:#fff;font-size:.88rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn:disabled{opacity:.4;cursor:not-allowed}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:12px}'
    + '.ta-embed-out{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);font-size:.85rem;padding:8px 10px;width:170px;font-family:inherit}'
    + '.ta-embed-status{margin-top:10px;font-size:.85rem}'
    + '.ta-embed-status a{color:var(--ta-accent);font-weight:600}'
    + '.ta-embed-err{color:#dc2626}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pdf-merge');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pdf-merge"]')) {
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
    + '<div class="ta-embed-title">Merge PDF Files</div>'
    + '<div class="ta-embed-subtitle">Combine PDFs in order — no upload, no watermark</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop"><p>📄 Click or drag PDF files here</p></div>'
    + '<input type="file" accept="application/pdf,.pdf" multiple style="display:none">'
    + '<div class="ta-embed-list"></div>'
    + '<div class="ta-embed-actions">'
    + '<input class="ta-embed-out" value="merged.pdf" aria-label="Output file name">'
    + '<button type="button" class="ta-embed-btn">Merge</button>'
    + '<button type="button" class="ta-embed-btn ghost">Clear</button>'
    + '</div>'
    + '<div class="ta-embed-status"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var dropEl = root.querySelector('.ta-embed-drop');
  var fileEl = root.querySelector('input[type="file"]');
  var listEl = root.querySelector('.ta-embed-list');
  var statusEl = root.querySelector('.ta-embed-status');
  var mergeBtn = root.querySelector('.ta-embed-btn');
  var clearBtn = root.querySelector('.ta-embed-btn.ghost');
  var outEl = root.querySelector('.ta-embed-out');

  var files = [];
  var libPromise = null;

  function loadLib() {
    if (window.PDFLib) return Promise.resolve(window.PDFLib);
    if (!libPromise) {
      libPromise = new Promise(function (res, rej) {
        var s = document.createElement('script');
        s.src = LIB_URL;
        s.onload = function () { res(window.PDFLib); };
        s.onerror = function () { libPromise = null; rej(new Error('pdf-lib failed to load')); };
        (document.head || document.documentElement).appendChild(s);
      });
    }
    return libPromise;
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function fmtSize(b) { return b >= 1048576 ? (b / 1048576).toFixed(1) + ' MB' : (b >= 1024 ? Math.round(b / 1024) + ' KB' : b + ' B'); }
  function readFile(f) {
    return new Promise(function (res, rej) {
      var fr = new FileReader();
      fr.onload = function () { res(new Uint8Array(fr.result)); };
      fr.onerror = function () { rej(new Error('unreadable')); };
      fr.readAsArrayBuffer(f);
    });
  }

  async function addFiles(fileList) {
    var arr = Array.prototype.slice.call(fileList).filter(function (f) { return /\.pdf$/i.test(f.name) || f.type === 'application/pdf'; });
    for (var i = 0; i < arr.length; i++) {
      var entry = { file: arr[i], name: arr[i].name, pages: null, err: null, doc: null };
      files.push(entry);
      renderList();
      try {
        var PDFLib = await loadLib();
        var bytes = await readFile(arr[i]);
        entry.doc = await PDFLib.PDFDocument.load(bytes);
        entry.pages = entry.doc.getPageCount();
      } catch (e) {
        entry.err = /encrypt/i.test(String(e && e.message || e)) ? 'encrypted' : 'unreadable';
      }
      renderList();
    }
  }

  function renderList() {
    listEl.innerHTML = '';
    files.forEach(function (f, i) {
      var row = document.createElement('div');
      row.className = 'ta-embed-frow';
      var st = f.err ? '<span style="color:#dc2626">' + esc(f.err) + '</span>' : (f.pages !== null ? '<span class="ok">' + f.pages + 'p</span>' : '…');
      row.innerHTML = '<span style="font-size:.72rem;color:var(--ta-muted)">' + (i + 1) + '.</span>'
        + '<span class="nm">' + esc(f.name) + '</span><span class="mt">' + fmtSize(f.file.size) + ' ' + st + '</span>'
        + '<button type="button" class="ta-embed-ib" data-a="u">↑</button><button type="button" class="ta-embed-ib" data-a="d">↓</button><button type="button" class="ta-embed-ib" data-a="r">✕</button>';
      row.addEventListener('click', function (e) {
        var a = e.target.getAttribute && e.target.getAttribute('data-a');
        if (!a) return;
        if (a === 'r') { files.splice(i, 1); }
        if (a === 'u' && i > 0) { var t = files[i]; files[i] = files[i - 1]; files[i - 1] = t; }
        if (a === 'd' && i < files.length - 1) { var t2 = files[i]; files[i] = files[i + 1]; files[i + 1] = t2; }
        renderList();
      });
      listEl.appendChild(row);
    });
    var ok = files.length > 1 && files.every(function (f) { return f.doc; });
    mergeBtn.disabled = !ok;
  }

  async function merge() {
    statusEl.innerHTML = '';
    try {
      var PDFLib = await loadLib();
      var out = await PDFLib.PDFDocument.create();
      for (var i = 0; i < files.length; i++) {
        var copied = await out.copyPages(files[i].doc, files[i].doc.getPageIndices());
        copied.forEach(function (p) { out.addPage(p); });
      }
      var bytes = await out.save();
      var name = outEl.value.trim() || 'merged.pdf';
      if (!/\.pdf$/i.test(name)) name += '.pdf';
      var url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
      statusEl.innerHTML = '✅ ' + files.length + ' files → ' + out.getPageCount() + ' pages (' + fmtSize(bytes.length) + ') — <a href="' + url + '" download="' + esc(name) + '">Download ' + esc(name) + '</a>';
    } catch (e) {
      statusEl.innerHTML = '<span class="ta-embed-err">Merge failed: ' + esc(String(e && e.message || e)) + '</span>';
    }
  }

  dropEl.addEventListener('click', function () { fileEl.click(); });
  dropEl.addEventListener('dragover', function (e) { e.preventDefault(); dropEl.classList.add('over'); });
  dropEl.addEventListener('dragleave', function () { dropEl.classList.remove('over'); });
  dropEl.addEventListener('drop', function (e) { e.preventDefault(); dropEl.classList.remove('over'); if (e.dataTransfer && e.dataTransfer.files.length) addFiles(e.dataTransfer.files); });
  fileEl.addEventListener('change', function (e) { addFiles(e.target.files); fileEl.value = ''; });
  mergeBtn.addEventListener('click', merge);
  clearBtn.addEventListener('click', function () { files = []; statusEl.innerHTML = ''; renderList(); });
  renderList();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.pdfMerge = { recalc: renderList };
})();
