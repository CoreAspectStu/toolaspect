/*!
 * ToolAspect Extract PDF Pages Embed
 * Install: <div id="ta-extract-pdf-pages"></div>
 *          <script src="https://toolaspect.com/embed/extract-pdf-pages.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-extract-pdf-pages';
  var BASE = 'https://toolaspect.com/extract-pdf-pages/';
  var PDFLIB_URL = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.5.1/dist/pdf-lib.min.js';

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
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-file{display:inline-block;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 16px;font-size:.9rem;cursor:pointer;margin:4px 4px 0 0}'
    + '.ta-embed-file input{display:none}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-status.ok{color:var(--ta-ok)}.ta-embed-status.bad{color:var(--ta-bad)}'
    + '.ta-spec{width:100%;padding:10px 12px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:1rem;font-family:ui-monospace,Menlo,monospace;margin-top:10px}'
    + '.ta-spec:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-order{display:flex;align-items:center;gap:6px;font-size:.82rem;margin-top:8px;color:var(--ta-muted)}'
    + '.ta-order input{accent-color:var(--ta-accent)}'
    + '.ta-chips{margin-top:10px;display:flex;gap:4px;flex-wrap:wrap;font-size:.75rem;color:var(--ta-muted)}'
    + '.ta-chips .chip{padding:2px 8px;border:1px solid var(--ta-border);border-radius:20px;color:var(--ta-accent);background:var(--ta-bg)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'extract-pdf-pages');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="extract-pdf-pages"]')) {
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
    + '<div class="ta-embed-title">Extract PDF Pages</div>'
    + '<div class="ta-embed-subtitle">Type 2,5-7 &mdash; get a new PDF with just those pages</div>'
    + '<div class="ta-embed-card">'
    + '<label class="ta-embed-file">&#128194; Open PDF<input type="file" class="ta-file" accept=".pdf,application/pdf"></label>'
    + '<input type="text" class="ta-spec" placeholder="e.g. 2,5-7 or 4-end" autocomplete="off" spellcheck="false">'
    + '<div class="ta-order"><input type="checkbox" class="ta-doc-order" id="ta-xpp-order"><label for="ta-xpp-order">Keep document order</label></div>'
    + '<button type="button" class="ta-embed-btn ta-save" disabled>Download extracted PDF</button>'
    + '<div class="ta-chips"></div>'
    + '<div class="ta-embed-status">Files never leave the browser.</div>'
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

  function parsePageSpec(spec, numPages) {
    var out = [], seen = {}, i, part;
    var cleaned = String(spec || '').replace(/[\s–—]/g, function (c) { return c === '–' || c === '—' ? '-' : ''; });
    if (!cleaned) return { pages: out, error: 'Type the pages to extract, like 2,5-7' };
    var parts = cleaned.split(',');
    for (i = 0; i < parts.length; i++) {
      part = parts[i];
      if (!part) continue;
      var m = /^(\d+)(?:-(\d+|end|last))?$/.exec(part);
      if (!m) return { pages: out, error: '"' + part + '" is not a page number or range' };
      var a = parseInt(m[1], 10);
      if (a < 1) return { pages: out, error: 'Pages start at 1, not ' + a };
      if (a > numPages) return { pages: out, error: 'Page ' + a + ' is past the last page (' + numPages + ')' };
      if (m[2] === undefined) {
        if (!seen[a]) { seen[a] = 1; out.push(a); }
        continue;
      }
      var b = m[2] === 'end' || m[2] === 'last' ? numPages : parseInt(m[2], 10);
      if (b < 1) return { pages: out, error: 'Pages start at 1, not ' + b };
      if (b > numPages) return { pages: out, error: 'Page ' + b + ' is past the last page (' + numPages + ')' };
      if (b < a) return { pages: out, error: 'Range ' + a + '-' + b + ' is backwards' };
      for (var p = a; p <= b; p++) if (!seen[p]) { seen[p] = 1; out.push(p); }
    }
    if (!out.length) return { pages: out, error: 'Nothing selected yet' };
    return { pages: out, error: null };
  }

  var origBytes = null, origName = 'document', numPages = 0;

  root.querySelector('.ta-file').addEventListener('change', function (e) {
    var f = e.target.files[0];
    if (!f) return;
    origName = f.name.replace(/\.pdf$/i, '');
    status('Reading ' + f.name + ' …');
    var fr = new FileReader();
    fr.onload = function () {
      origBytes = new Uint8Array(fr.result);
      loadScript(PDFLIB_URL).then(function () {
        var PDFLib = window.PDFLib;
        return PDFLib.PDFDocument.load(origBytes.slice(), { ignoreEncryption: true });
      }).then(function (doc) {
        numPages = doc.getPageCount();
        status('Loaded ' + numPages + ' pages. Type which ones to keep.', 'ok');
        updateLive();
      }).catch(function (err) { status('Could not open that PDF: ' + (err && err.message || err), 'bad'); });
    };
    fr.readAsArrayBuffer(f);
  });

  function chosenPages() {
    var res = parsePageSpec(root.querySelector('.ta-spec').value, numPages);
    if (res.error) return res;
    var pages = res.pages.slice();
    if (root.querySelector('.ta-doc-order').checked) pages.sort(function (a, b) { return a - b; });
    return { pages: pages, error: null };
  }

  function updateLive() {
    if (!numPages) return;
    var r = chosenPages();
    var bar = root.querySelector('.ta-chips');
    if (r.error) {
      bar.innerHTML = '';
      root.querySelector('.ta-save').disabled = true;
      if (root.querySelector('.ta-spec').value.trim()) status(r.error, 'bad');
      return;
    }
    bar.innerHTML = '<span>' + r.pages.length + ' selected:</span>';
    r.pages.forEach(function (p) {
      var c = document.createElement('span'); c.className = 'chip'; c.textContent = 'p' + p; bar.appendChild(c);
    });
    root.querySelector('.ta-save').disabled = false;
    status(r.pages.length + ' of ' + numPages + ' pages will be in the output.', 'ok');
  }

  root.querySelector('.ta-spec').addEventListener('input', updateLive);
  root.querySelector('.ta-doc-order').addEventListener('change', updateLive);

  root.querySelector('.ta-save').addEventListener('click', function () {
    var r = chosenPages();
    if (r.error || !r.pages.length) { status(r.error || 'Nothing selected', 'bad'); return; }
    var btn = root.querySelector('.ta-save');
    btn.disabled = true;
    status('Building a ' + r.pages.length + '-page PDF …');
    loadScript(PDFLIB_URL).then(function () {
      var PDFLib = window.PDFLib;
      return PDFLib.PDFDocument.load(origBytes.slice(), { ignoreEncryption: true }).then(function (src) {
        return PDFLib.PDFDocument.create().then(function (out) {
          return out.copyPages(src, r.pages.map(function (p) { return p - 1; })).then(function (copied) {
            copied.forEach(function (p) { out.addPage(p); });
            return out.save();
          });
        });
      });
    }).then(function (bytes) {
      var blob = new Blob([bytes], { type: 'application/pdf' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = origName + '-extracted.pdf';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      status('Downloaded ' + origName + '-extracted.pdf (' + r.pages.length + ' pages).', 'ok');
      btn.disabled = false;
    }).catch(function (err) { status('Export failed: ' + (err && err.message || err), 'bad'); btn.disabled = false; });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.extractPdfPages = {};
})();
