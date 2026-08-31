/*!
 * ToolAspect PDF to JPG Embed
 * Install: <div id="ta-pdf-to-jpg"></div>
 *          <script src="https://toolaspect.com/embed/pdf-to-jpg.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pdf-to-jpg';
  var BASE = 'https://toolaspect.com/pdf-to-jpg/';
  var PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
  var PDFJS_WORKER_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  var JSZIP_URL = 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '@media(max-width:520px){.ta-embed-row{grid-template-columns:1fr}}'
    + '.ta-embed-root label{font-size:.78rem;color:var(--ta-muted);font-weight:600;display:block;margin-bottom:3px}'
    + '.ta-embed-root input,.ta-embed-root select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 10px;font-size:.85rem;font-family:inherit;outline:none}'
    + '.ta-embed-root input:focus,.ta-embed-root select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-root input[type=file]{font-size:.75rem;cursor:pointer}'
    + '.ta-embed-btn{display:block;width:100%;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 12px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:8px}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-out{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:14px;font-size:.82rem;margin-bottom:12px}'
    + '.ta-out .ok{color:var(--ta-ok)}'
    + '.ta-embed-err{background:var(--ta-surface);border:1px solid var(--ta-bad);color:var(--ta-bad);border-radius:8px;padding:10px 12px;font-size:.8rem;margin-bottom:12px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pdf-to-jpg');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pdf-to-jpg"]')) {
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
    + '<div class="ta-embed-title">PDF to JPG</div>'
    + '<div class="ta-embed-subtitle">Render pages at 72&ndash;300 DPI, export JPG or PNG, ZIP for batches &mdash; zero uploads</div>'
    + '<div class="ta-embed-card">'
    + '<label>PDF file</label><input type="file" class="ta-file" accept="application/pdf,.pdf">'
    + '<div class="ta-embed-row" style="margin-top:10px">'
    + '<div><label>Resolution</label><select class="ta-dpi">'
    + '<option value="72">72 DPI</option><option value="96">96 DPI</option><option value="150" selected>150 DPI</option><option value="300">300 DPI</option></select></div>'
    + '<div><label>Format</label><select class="ta-fmt"><option value="jpeg" selected>JPEG</option><option value="png">PNG</option></select></div>'
    + '</div>'
    + '<div><label>Pages (e.g. 1-3,7 &mdash; empty = all)</label><input type="text" class="ta-range" placeholder="all pages"></div>'
    + '<button type="button" class="ta-embed-btn ta-go" disabled>Convert &amp; download</button>'
    + '</div>'
    + '<div class="ta-out" style="display:none"></div>'
    + '<div class="ta-embed-err" style="display:none"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function err(msg) {
    var e = root.querySelector('.ta-embed-err');
    e.style.display = msg ? 'block' : 'none';
    e.textContent = msg || '';
  }
  function out(html) {
    var o = root.querySelector('.ta-out');
    o.style.display = html ? 'block' : 'none';
    o.innerHTML = html || '';
  }
  function fmtBytes(n) {
    return n < 1024 ? n + ' B' : (n < 1048576 ? (n / 1024).toFixed(1) + ' KB' : (n / 1048576).toFixed(2) + ' MB');
  }
  function loadScript(url, test) {
    return test ? Promise.resolve() : new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = url; s.onload = res;
      s.onerror = function () { rej(new Error('could not load ' + url)); };
      (document.head || document.documentElement).appendChild(s);
    });
  }
  function ensurePdfJs() {
    return loadScript(PDFJS_URL, window.pdfjsLib).then(function () {
      if (!window.pdfjsLib.GlobalWorkerOptions.workerSrc) {
        return fetch(PDFJS_WORKER_URL).then(function (r) { return r.text(); }).then(function (t) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = URL.createObjectURL(new Blob([t], { type: 'text/javascript' }));
        }).catch(function () { window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL; });
      }
      return window.pdfjsLib;
    });
  }
  function parseRange(str, max) {
    if (!str || !str.trim()) return null;
    var set = {};
    str.split(',').forEach(function (part) {
      var m = part.trim().match(/^(\d+)(?:\s*-\s*(\d+))?$/);
      if (!m) return;
      var a = parseInt(m[1], 10), b = m[2] ? parseInt(m[2], 10) : a;
      if (a > b) { var t = a; a = b; b = t; }
      for (var i = a; i <= b; i++) if (i >= 1 && i <= max) set[i] = 1;
    });
    return Object.keys(set).map(Number).sort(function (a, b) { return a - b; });
  }

  var pdfBytes = null, numPages = 0;

  root.querySelector('.ta-file').addEventListener('change', async function () {
    var f = this.files && this.files[0];
    if (!f) return;
    err(''); out('');
    try {
      pdfBytes = new Uint8Array(await f.arrayBuffer());
      var pdfjs = await ensurePdfJs();
      var doc = await pdfjs.getDocument({ data: pdfBytes.slice(0) }).promise;
      numPages = doc.numPages;
      root.querySelector('.ta-go').disabled = false;
      out('Loaded <strong>' + f.name + '</strong> &middot; ' + numPages + ' page(s).');
    } catch (e) {
      pdfBytes = null;
      root.querySelector('.ta-go').disabled = true;
      err('Could not open PDF: ' + (e.message || e));
    }
  });

  root.querySelector('.ta-go').addEventListener('click', async function () {
    if (!pdfBytes) return;
    var btn = this;
    btn.disabled = true; err(''); out('Rendering&hellip;');
    try {
      var dpi = parseInt(root.querySelector('.ta-dpi').value, 10);
      var fmt = root.querySelector('.ta-fmt').value;
      var pages = parseRange(root.querySelector('.ta-range').value, numPages) || [];
      if (!pages.length) for (var i = 1; i <= numPages; i++) pages.push(i);
      var mime = fmt === 'png' ? 'image/png' : 'image/jpeg';
      var ext = fmt === 'png' ? 'png' : 'jpg';

      var pdfjs = await ensurePdfJs();
      var doc = await pdfjs.getDocument({ data: pdfBytes.slice(0) }).promise;
      var results = [];
      for (var k = 0; k < pages.length; k++) {
        var n = pages[k];
        out('Rendering page ' + n + ' of ' + pages.length + '&hellip;');
        var page = await doc.getPage(n);
        var vp = page.getViewport({ scale: dpi / 72 });
        var canvas = document.createElement('canvas');
        canvas.width = Math.round(vp.width); canvas.height = Math.round(vp.height);
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvasContext: ctx, viewport: vp }).promise;
        var blob = await new Promise(function (res) { canvas.toBlob(res, mime, fmt === 'jpeg' ? 0.85 : undefined); });
        results.push({ n: n, blob: blob, w: canvas.width, h: canvas.height });
      }
      var total = results.reduce(function (a, r) { return a + r.blob.size; }, 0);
      function save(blob, name) {
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = name;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      }
      if (results.length === 1) {
        save(results[0].blob, 'page-' + results[0].n + '.' + ext);
        out('<span class="ok">Done.</span> page-' + results[0].n + '.' + ext + ' &middot; ' + results[0].w + '&times;' + results[0].h + ' px &middot; ' + fmtBytes(results[0].blob.size));
      } else {
        var JSZip = await loadScript(JSZIP_URL, window.JSZip).then(function () { return window.JSZip; });
        var zip = new JSZip();
        results.forEach(function (r) { zip.file('page-' + r.n + '.' + ext, r.blob); });
        var zbuf = await zip.generateAsync({ type: 'blob', compression: 'STORE' });
        save(zbuf, 'pages-' + dpi + 'dpi.zip');
        out('<span class="ok">Done.</span> ' + results.length + ' images &middot; ' + results[0].w + '&times;' + results[0].h + ' px each &middot; ' + fmtBytes(zbuf.size) + ' ZIP');
      }
    } catch (e) {
      out('');
      err('Failed: ' + (e.message || e));
    }
    btn.disabled = false;
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.pdfToJpg = {};
})();
