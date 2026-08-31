/*!
 * ToolAspect Compress PDF Embed
 * Install: <div id="ta-compress-pdf"></div>
 *          <script src="https://toolaspect.com/embed/compress-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-compress-pdf';
  var BASE = 'https://toolaspect.com/compress-pdf/';
  var PDFLIB_URL = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.9.1/dist/pdf-lib.min.js';
  var PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
  var PDFJS_WORKER_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-root label{font-size:.78rem;color:var(--ta-muted);font-weight:600;display:block;margin-bottom:3px}'
    + '.ta-embed-root input,.ta-embed-root select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 10px;font-size:.85rem;font-family:inherit;outline:none}'
    + '.ta-embed-root input:focus,.ta-embed-root select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-root input[type=file]{font-size:.75rem;cursor:pointer}'
    + '.ta-modes{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:10px 0}'
    + '.ta-mode{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 10px;font-size:.8rem;cursor:pointer;font-family:inherit;color:var(--ta-muted);text-align:center}'
    + '.ta-mode.active{border-color:var(--ta-accent);color:var(--ta-text);font-weight:600;background:rgba(37,99,235,.08)}'
    + '.ta-mode small{display:block;font-weight:400;font-size:.7rem;margin-top:2px}'
    + '.ta-embed-btn{display:block;width:100%;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 12px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:8px}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-out{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:14px;font-size:.82rem;margin-bottom:12px}'
    + '.ta-out .big{font-size:1.15rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-err{background:var(--ta-surface);border:1px solid var(--ta-bad);color:var(--ta-bad);border-radius:8px;padding:10px 12px;font-size:.8rem;margin-bottom:12px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'compress-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="compress-pdf"]')) {
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
    + '<div class="ta-embed-title">Compress PDF</div>'
    + '<div class="ta-embed-subtitle">Lossless repack or rerender-downscale &mdash; zero uploads, in-browser</div>'
    + '<div class="ta-embed-card">'
    + '<label>PDF file</label><input type="file" class="ta-file" accept="application/pdf,.pdf">'
    + '<div class="ta-modes">'
    + '<button type="button" class="ta-mode active" data-mode="lossless">Lossless<small>keeps every pixel</small></button>'
    + '<button type="button" class="ta-mode" data-mode="rerender">Rerender<small>biggest cuts on scans</small></button>'
    + '</div>'
    + '<label class="ta-rer" style="display:none">Rerender DPI</label>'
    + '<select class="ta-rer ta-dpi" style="display:none;margin-bottom:10px">'
    + '<option value="72">72 DPI</option><option value="96">96 DPI</option><option value="150" selected>150 DPI</option><option value="300">300 DPI</option></select>'
    + '<button type="button" class="ta-embed-btn ta-go" disabled>Compress &amp; download</button>'
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
  function ensurePdfLib() {
    return loadScript(PDFLIB_URL, window.PDFLib).then(function () { return window.PDFLib; });
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

  var mode = 'lossless', pdfBytes = null, origSize = 0, outName = 'compressed.pdf';
  root.querySelectorAll('.ta-mode').forEach(function (b) {
    b.addEventListener('click', function () {
      mode = b.getAttribute('data-mode');
      root.querySelectorAll('.ta-mode').forEach(function (x) { x.classList.toggle('active', x === b); });
      var rer = mode === 'rerender';
      root.querySelectorAll('.ta-rer').forEach(function (el) { el.style.display = rer ? '' : 'none'; });
    });
  });

  root.querySelector('.ta-file').addEventListener('change', async function () {
    var f = this.files && this.files[0];
    if (!f) return;
    err(''); out('');
    try {
      pdfBytes = new Uint8Array(await f.arrayBuffer());
      origSize = f.size;
      outName = f.name.replace(/\.pdf$/i, '') + '-compressed.pdf';
      root.querySelector('.ta-go').disabled = false;
      out('Loaded <strong>' + f.name + '</strong> &middot; ' + fmtBytes(f.size) + '. Pick a mode and compress.');
    } catch (e) {
      pdfBytes = null;
      root.querySelector('.ta-go').disabled = true;
      err('Could not read file: ' + (e.message || e));
    }
  });

  root.querySelector('.ta-go').addEventListener('click', async function () {
    if (!pdfBytes) return;
    var btn = this;
    btn.disabled = true; err(''); out('Working&hellip;');
    try {
      var result;
      if (mode === 'lossless') {
        var PDFLib = await ensurePdfLib();
        var doc = await PDFLib.PDFDocument.load(pdfBytes.slice(0), { ignoreEncryption: true });
        result = await doc.save({ useObjectStreams: true });
      } else {
        var dpi = parseInt(root.querySelector('.ta-dpi').value, 10);
        var PDFLib2 = await ensurePdfLib();
        var pdfjs = await ensurePdfJs();
        var src = await pdfjs.getDocument({ data: pdfBytes.slice(0) }).promise;
        var newDoc = await PDFLib2.PDFDocument.create();
        for (var i = 1; i <= src.numPages; i++) {
          out('Rerendering page ' + i + ' of ' + src.numPages + '&hellip;');
          var page = await src.getPage(i);
          var vp = page.getViewport({ scale: dpi / 72 });
          var canvas = document.createElement('canvas');
          canvas.width = Math.round(vp.width); canvas.height = Math.round(vp.height);
          var ctx = canvas.getContext('2d');
          ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
          await page.render({ canvasContext: ctx, viewport: vp }).promise;
          var blob = await new Promise(function (res) { canvas.toBlob(res, 'image/jpeg', 0.75); });
          var img = await newDoc.embedJpg(new Uint8Array(await blob.arrayBuffer()));
          var pg = newDoc.addPage([img.width, img.height]);
          pg.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
        }
        result = await newDoc.save({ useObjectStreams: true });
      }
      var pct = (1 - result.length / origSize) * 100;
      var blobOut = new Blob([result], { type: 'application/pdf' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blobOut); a.download = outName;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      out('<span class="big">' + (pct >= 0 ? pct.toFixed(1) + '% smaller' : 'grew ' + (-pct).toFixed(1) + '%') + '</span><br>'
        + fmtBytes(origSize) + ' &rarr; ' + fmtBytes(result.length) + ' &middot; downloaded ' + outName);
    } catch (e) {
      out('');
      err('Failed: ' + (e.message || e));
    }
    btn.disabled = false;
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.compressPdf = {};
})();
