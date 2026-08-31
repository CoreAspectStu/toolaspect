/*!
 * ToolAspect Redact PDF Embed
 * Install: <div id="ta-redact-pdf"></div>
 *          <script src="https://toolaspect.com/embed/redact-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-redact-pdf';
  var BASE = 'https://toolaspect.com/redact-pdf/';
  var PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
  var PDFJS_WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  var PDFLIB_URL = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.5.1/dist/pdf-lib.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#dc2626;--ta-btn:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-btn:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-btn{background:var(--ta-btn);color:#fff;border:none;border-radius:8px;padding:10px 16px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin:4px 4px 0 0}'
    + '.ta-embed-btn.red{background:var(--ta-accent)}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-file{display:inline-block;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 16px;font-size:.9rem;cursor:pointer;margin:4px 4px 0 0}'
    + '.ta-embed-file input{display:none}'
    + '.ta-embed-select{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 10px;font-size:.85rem;margin:4px 4px 0 0;font-family:inherit}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-status.ok{color:var(--ta-ok)}.ta-embed-status.bad{color:var(--ta-bad)}'
    + '.ta-viewer{margin-top:12px;display:flex;flex-direction:column;gap:16px;align-items:center}'
    + '.ta-pg{position:relative;box-shadow:0 2px 12px rgba(0,0,0,.25);max-width:100%}'
    + '.ta-pg canvas{display:block;max-width:100%;height:auto}'
    + '.ta-ov{position:absolute;inset:0;touch-action:none}'
    + '.ta-ov.draw{cursor:crosshair}'
    + '.ta-ov .box{position:absolute;border:1px dashed #fff;background:rgba(0,0,0,.85)}'
    + '.ta-ov .box.white{background:#fff;border:1px dashed #888}'
    + '.ta-ov .ghost{position:absolute;border:1px dashed #fff;background:rgba(0,0,0,.4)}'
    + '.ta-embed-note{font-size:.72rem;color:var(--ta-muted);text-align:center;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-btn);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'redact-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="redact-pdf"]')) {
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
    + '<div class="ta-embed-title">Redact PDF</div>'
    + '<div class="ta-embed-subtitle">Draw boxes &rarr; rebuilt file where covered text is destroyed, not hidden &mdash; 100% in-browser</div>'
    + '<div class="ta-embed-card">'
    + '<label class="ta-embed-file">&#128194; Open PDF<input type="file" class="ta-file" accept=".pdf,application/pdf"></label>'
    + '<button type="button" class="ta-embed-btn ta-draw" disabled>&#9999;&#65039; Draw boxes</button>'
    + '<select class="ta-dpi ta-embed-select"><option value="150">150 DPI</option><option value="200" selected>200 DPI</option><option value="300">300 DPI</option></select>'
    + '<select class="ta-color ta-embed-select"><option value="black">Black boxes</option><option value="white">White boxes</option></select>'
    + '<button type="button" class="ta-embed-btn red ta-apply" disabled>Apply &amp; download</button>'
    + '<div class="ta-embed-status">Files never leave the browser.</div>'
    + '<div class="ta-viewer"></div>'
    + '</div>'
    + '<div class="ta-embed-note">Covered content is destroyed by rasterizing every page and rebuilding the PDF. The output has no text layer &mdash; verify before sharing.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

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
  function status(msg, cls) {
    var s = root.querySelector('.ta-embed-status');
    s.textContent = msg; s.className = 'ta-embed-status' + (cls ? ' ' + cls : '');
  }

  var pdfDoc = null, origName = 'document', drawMode = false;
  var boxes = []; // {page, rect:[x1,y1,x2,y2]} PDF points
  var DISPLAY_SCALE = 1.3;

  root.querySelector('.ta-file').addEventListener('change', function (e) {
    var f = e.target.files[0];
    if (!f) return;
    origName = f.name.replace(/\.pdf$/i, '');
    status('Loading ' + f.name + ' …');
    var fr = new FileReader();
    fr.onload = function () {
      loadScript(PDFJS_URL).then(function () {
        pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
        return pdfjsLib.getDocument({ data: new Uint8Array(fr.result) }).promise;
      }).then(function (doc) {
        pdfDoc = doc;
        var viewer = root.querySelector('.ta-viewer');
        viewer.innerHTML = '';
        var chain = Promise.resolve();
        for (var i = 1; i <= doc.numPages; i++) {
          (function (n) { chain = chain.then(function () { return renderPage(n, viewer); }); })(i);
        }
        return chain;
      }).then(function () {
        root.querySelector('.ta-draw').disabled = false;
        status(doc_pages() + ' page(s) loaded. Enable drawing, drag over sensitive content, then apply.', 'ok');
      }).catch(function (err) { status('Could not open that PDF: ' + (err && err.message || err), 'bad'); });
    };
    fr.readAsArrayBuffer(f);
  });
  function doc_pages() { return pdfDoc ? pdfDoc.numPages : 0; }

  function renderPage(n, viewer) {
    return pdfDoc.getPage(n).then(function (page) {
      var vp = page.getViewport({ scale: DISPLAY_SCALE });
      var wrap = document.createElement('div');
      wrap.className = 'ta-pg';
      wrap.style.width = vp.width + 'px';
      var canvas = document.createElement('canvas');
      canvas.width = Math.floor(vp.width); canvas.height = Math.floor(vp.height);
      var ov = document.createElement('div');
      ov.className = 'ta-ov';
      wrap.appendChild(canvas); wrap.appendChild(ov);
      viewer.appendChild(wrap);
      return page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise.then(function () {
        attachOverlay(ov, n, vp);
        redrawBoxes(n, ov, vp);
      });
    });
  }
  function attachOverlay(ov, n, vp) {
    var start = null, ghost = null;
    ov.addEventListener('pointerdown', function (e) {
      if (!drawMode) return;
      e.preventDefault();
      var r = ov.getBoundingClientRect();
      start = { x: e.clientX - r.left, y: e.clientY - r.top };
      ghost = document.createElement('div');
      ghost.className = 'ghost';
      ov.appendChild(ghost);
      ov.setPointerCapture(e.pointerId);
    });
    ov.addEventListener('pointermove', function (e) {
      if (!drawMode || !start || !ghost) return;
      var r = ov.getBoundingClientRect();
      var x = e.clientX - r.left, y = e.clientY - r.top;
      ghost.style.left = Math.min(start.x, x) + 'px'; ghost.style.top = Math.min(start.y, y) + 'px';
      ghost.style.width = Math.abs(x - start.x) + 'px'; ghost.style.height = Math.abs(y - start.y) + 'px';
    });
    ov.addEventListener('pointerup', function (e) {
      if (!drawMode || !start || !ghost) return;
      var r = ov.getBoundingClientRect();
      var x = e.clientX - r.left, y = e.clientY - r.top;
      var l = Math.min(start.x, x), t = Math.min(start.y, y), w = Math.abs(x - start.x), h = Math.abs(y - start.y);
      ov.removeChild(ghost); ghost = null; start = null;
      if (w < 8 || h < 8) return;
      var p1 = vp.convertToPdfPoint(l, t), p2 = vp.convertToPdfPoint(l + w, t + h);
      boxes.push({ page: n, rect: [Math.min(p1[0], p2[0]), Math.min(p1[1], p2[1]), Math.max(p1[0], p2[0]), Math.max(p1[1], p2[1])] });
      redrawBoxes(n, ov, vp);
      root.querySelector('.ta-apply').disabled = !boxes.length;
      status(boxes.length + ' box(es) drawn.', 'ok');
    });
  }
  function redrawBoxes(n, ov, vp) {
    [].slice.call(ov.querySelectorAll('.box')).forEach(function (b) { ov.removeChild(b); });
    var white = root.querySelector('.ta-color').value === 'white';
    boxes.filter(function (b) { return b.page === n; }).forEach(function (b) {
      var q = vp.convertToViewportRectangle(b.rect);
      var d = document.createElement('div');
      d.className = 'box' + (white ? ' white' : '');
      d.style.left = Math.min(q[0], q[2]) + 'px'; d.style.top = Math.min(q[1], q[3]) + 'px';
      d.style.width = Math.abs(q[2] - q[0]) + 'px'; d.style.height = Math.abs(q[3] - q[1]) + 'px';
      ov.appendChild(d);
    });
  }
  root.querySelector('.ta-color').addEventListener('change', refreshOverlays);
  function refreshOverlays() {
    if (!pdfDoc) return;
    [].slice.call(root.querySelectorAll('.ta-pg')).forEach(function (wrap, i) {
      pdfDoc.getPage(i + 1).then(function (page) {
        redrawBoxes(i + 1, wrap.querySelector('.ta-ov'), page.getViewport({ scale: DISPLAY_SCALE }));
      });
    });
  }
  root.querySelector('.ta-draw').addEventListener('click', function () {
    drawMode = !drawMode;
    var b = root.querySelector('.ta-draw');
    b.textContent = drawMode ? '✏️ Drawing on' : '✏️ Draw boxes';
    [].slice.call(root.querySelectorAll('.ta-ov')).forEach(function (o) { o.classList.toggle('draw', drawMode); });
  });

  root.querySelector('.ta-apply').addEventListener('click', function () {
    if (!pdfDoc || !boxes.length) return;
    var dpi = parseInt(root.querySelector('.ta-dpi').value, 10) || 200;
    var color = root.querySelector('.ta-color').value;
    var btn = root.querySelector('.ta-apply');
    btn.disabled = true;
    loadScript(PDFLIB_URL).then(function () {
      var PDFLib = window.PDFLib;
      var out = PDFLib.PDFDocument.create();
      function dataURLToBytes(u) {
        var b = atob(u.split(',')[1]), outB = new Uint8Array(b.length);
        for (var i = 0; i < b.length; i++) outB[i] = b.charCodeAt(i);
        return outB;
      }
      function step(n) {
        if (n > pdfDoc.numPages) return Promise.resolve();
        status('Rasterizing page ' + n + ' of ' + pdfDoc.numPages + ' …');
        return pdfDoc.getPage(n).then(function (page) {
          var scale = dpi / 72;
          var vp = page.getViewport({ scale: scale });
          var c = document.createElement('canvas');
          c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
          return page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise.then(function () {
            var ctx = c.getContext('2d');
            ctx.fillStyle = color;
            boxes.filter(function (b) { return b.page === n; }).forEach(function (b) {
              var q = vp.convertToViewportRectangle(b.rect);
              ctx.fillRect(Math.min(q[0], q[2]) - .5, Math.min(q[1], q[3]) - .5, Math.abs(q[2] - q[0]) + 1, Math.abs(q[3] - q[1]) + 1);
            });
            return out.embedJpg(dataURLToBytes(c.toDataURL('image/jpeg', 0.92))).then(function (img) {
              var w = c.width / scale, h = c.height / scale;
              out.addPage([w, h]).drawImage(img, { x: 0, y: 0, width: w, height: h });
            });
          }).then(function () { return step(n + 1); });
        });
      }
      return step(1).then(function () { return out.save(); });
    }).then(function (bytes) {
      var blob = new Blob([bytes], { type: 'application/pdf' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = origName + '-redacted.pdf';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      status('Downloaded ' + origName + '-redacted.pdf. Verify the covered text is gone.', 'ok');
      root.querySelector('.ta-apply').disabled = false;
    }).catch(function (err) {
      status('Export failed: ' + (err && err.message || err), 'bad');
      root.querySelector('.ta-apply').disabled = false;
    });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.redactPdf = {};
})();
