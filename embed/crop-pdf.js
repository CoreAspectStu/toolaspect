/*!
 * ToolAspect Crop PDF Embed
 * Install: <div id="ta-crop-pdf"></div>
 *          <script src="https://toolaspect.com/embed/crop-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-crop-pdf';
  var BASE = 'https://toolaspect.com/crop-pdf/';
  var PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
  var PDFJS_WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  var PDFLIB_URL = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.5.1/dist/pdf-lib.min.js';
  var DET_SCALE = 1.5;

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
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-file{display:inline-block;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 16px;font-size:.9rem;cursor:pointer;margin:4px 4px 0 0}'
    + '.ta-embed-file input{display:none}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-status.ok{color:var(--ta-ok)}.ta-embed-status.bad{color:var(--ta-bad)}'
    + '.ta-crop-row{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:12px 0 4px;font-size:.85rem}'
    + '.ta-crop-row label{display:flex;align-items:center;gap:4px;cursor:pointer}'
    + '.ta-crop-row input[type=radio]{accent-color:var(--ta-accent)}'
    + '.ta-crop-input{display:flex;gap:8px;align-items:center;font-size:.85rem;color:var(--ta-muted);flex-wrap:wrap;margin-bottom:6px}'
    + '.ta-crop-input input{width:70px;padding:6px 8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.9rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'crop-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="crop-pdf"]')) {
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
    + '<div class="ta-embed-title">Crop PDF</div>'
    + '<div class="ta-embed-subtitle">Auto-trim white borders or cut fixed margins &mdash; in your visitor&rsquo;s browser</div>'
    + '<div class="ta-embed-card">'
    + '<label class="ta-embed-file">&#128194; Open PDF<input type="file" class="ta-file" accept=".pdf,application/pdf"></label>'
    + '<button type="button" class="ta-embed-btn ghost ta-save" disabled>Download cropped PDF</button>'
    + '<div class="ta-crop-row">'
    + '<label><input type="radio" name="ta-crop-mode" value="auto" checked> Auto-trim</label>'
    + '<label><input type="radio" name="ta-crop-mode" value="fixed"> Fixed margins</label>'
    + '</div>'
    + '<div class="ta-crop-input">Padding / margin: <input type="number" class="ta-pad" value="12" min="0" max="144" step="1"> pt (72 pt = 1 in)</div>'
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

  function pxBoundsToPdfBox(b, scale, view) {
    return [view[0] + b[0] / scale, view[3] - b[3] / scale, view[0] + b[2] / scale, view[3] - b[1] / scale];
  }
  function detectInkBounds(img, threshold) {
    var x0 = img.width, y0 = img.height, x1 = -1, y1 = -1;
    for (var y = 0; y < img.height; y++) {
      for (var x = 0; x < img.width; x++) {
        var i = (y * img.width + x) * 4;
        if (img.data[i + 3] < 10) continue;
        var lum = 0.299 * img.data[i] + 0.587 * img.data[i + 1] + 0.114 * img.data[i + 2];
        if (lum < threshold) {
          if (x < x0) x0 = x; if (x + 1 > x1) x1 = x + 1; if (y < y0) y0 = y; if (y + 1 > y1) y1 = y + 1;
        }
      }
    }
    return x1 < 0 ? null : [x0, y0, x1, y1];
  }

  var origBytes = null, origName = 'document';

  root.querySelector('.ta-file').addEventListener('change', function (e) {
    var f = e.target.files[0];
    if (!f) return;
    origName = f.name.replace(/\.pdf$/i, '');
    status('Loading ' + f.name + ' …');
    var fr = new FileReader();
    fr.onload = function () {
      origBytes = new Uint8Array(fr.result);
      loadScript(PDFJS_URL).then(function () {
        pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
        return pdfjsLib.getDocument({ data: origBytes.slice() }).promise;
      }).then(function (doc) {
        root.querySelector('.ta-save').disabled = false;
        status('Loaded ' + doc.numPages + ' pages. Cropping ' + (mode() === 'auto' ? 'auto-detected bounds' : 'fixed margins') + ' on every page.', 'ok');
      }).catch(function (err) { status('Could not open that PDF: ' + (err && err.message || err), 'bad'); });
    };
    fr.readAsArrayBuffer(f);
  });

  function mode() {
    var r = root.querySelector('input[name="ta-crop-mode"]:checked');
    return r ? r.value : 'auto';
  }

  root.querySelector('.ta-save').addEventListener('click', function () {
    if (!origBytes) return;
    var btn = root.querySelector('.ta-save');
    btn.disabled = true;
    status('Scanning pages and writing CropBoxes …');
    var pad = parseFloat(root.querySelector('.ta-pad').value) || 0;
    loadScript(PDFJS_URL).then(function () {
      pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
      return pdfjsLib.getDocument({ data: origBytes.slice() }).promise;
    }).then(function (doc) {
      var PDFLib = window.PDFLib;
      return loadScript(PDFLIB_URL).then(function () {
        return PDFLib.PDFDocument.load(origBytes.slice()).then(function (out) {
          var chain = Promise.resolve();
          var _loop = function (n) {
            chain = chain.then(function () {
              return doc.getPage(n).then(function (page) {
                var vp = page.getViewport({ scale: 1, rotation: 0 });
                var view = [vp.view[0], vp.view[1], vp.view[0] + vp.width, vp.view[1] + vp.height];
                var m = mode() === 'fixed' ? pad : 0;
                var box = [view[0] + m, view[1] + m, view[2] - m, view[3] - m];
                if (mode() !== 'fixed') {
                  var c = document.createElement('canvas');
                  var v2 = page.getViewport({ scale: DET_SCALE, rotation: 0 });
                  c.width = Math.floor(v2.width); c.height = Math.floor(v2.height);
                  return page.render({ canvasContext: c.getContext('2d', { willReadFrequently: true }), viewport: v2 }).promise.then(function () {
                    var img = c.getContext('2d').getImageData(0, 0, c.width, c.height);
                    var b = detectInkBounds(img, 245);
                    if (b) {
                      var raw = pxBoundsToPdfBox(b, DET_SCALE, view);
                      box = [Math.max(view[0], raw[0] - pad), Math.max(view[1], raw[1] - pad), Math.min(view[2], raw[2] + pad), Math.min(view[3], raw[3] + pad)];
                    }
                    return applyBox(out, n, box);
                  });
                }
                return applyBox(out, n, box);
              });
            });
          };
          function applyBox(out, n, box) {
            if (box[2] > box[0] && box[3] > box[1]) out.getPage(n - 1).setCropBox(box[0], box[1], box[2] - box[0], box[3] - box[1]);
            return null;
          }
          for (var n = 1; n <= doc.numPages; n++) _loop(n);
          return chain.then(function () { return out.save(); }).then(function (bytes) {
            var blob = new Blob([bytes], { type: 'application/pdf' });
            var a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = origName + '-cropped.pdf';
            a.click();
            setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
            status('Downloaded ' + origName + '-cropped.pdf.', 'ok');
            btn.disabled = false;
          });
        });
      });
    }).catch(function (err) { status('Export failed: ' + (err && err.message || err), 'bad'); btn.disabled = false; });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.cropPdf = {};
})();
