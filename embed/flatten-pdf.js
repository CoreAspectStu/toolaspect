/*!
 * ToolAspect Flatten PDF Embed
 * Install: <div id="ta-flatten-pdf"></div>
 *          <script src="https://toolaspect.com/embed/flatten-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-flatten-pdf';
  var BASE = 'https://toolaspect.com/flatten-pdf/';
  var PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
  var PDFJS_WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  var PDFLIB_URL = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.5.1/dist/pdf-lib.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;--ta-warn:#d97706;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171;--ta-warn:#fbbf24}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-file{display:inline-block;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 16px;font-size:.9rem;cursor:pointer;margin:4px 6px 0 0}'
    + '.ta-embed-file input{display:none}'
    + '.ta-embed-btn{background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 16px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin:4px 4px 0 0}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-status.ok{color:var(--ta-ok)}.ta-embed-status.bad{color:var(--ta-bad)}'
    + '.ta-modes{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;font-size:.82rem}'
    + '.ta-modes label{display:flex;align-items:center;gap:6px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:7px 10px;cursor:pointer}'
    + '.ta-modes label.sel{border-color:var(--ta-accent)}'
    + '.ta-fcount{font-size:.78rem;color:var(--ta-warn);margin-top:8px;display:none}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'flatten-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="flatten-pdf"]')) {
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
    + '<div class="ta-embed-title">Flatten PDF</div>'
    + '<div class="ta-embed-subtitle">Bake form fields into the page &mdash; done in your visitor&rsquo;s browser</div>'
    + '<div class="ta-embed-card">'
    + '<label class="ta-embed-file">&#128194; Open PDF<input type="file" class="ta-file" accept=".pdf,application/pdf"></label>'
    + '<button type="button" class="ta-embed-btn ta-go" disabled>Flatten &amp; download</button>'
    + '<div class="ta-modes">'
    + '<label class="sel ta-m-forms"><input type="radio" name="ta-fmode" value="forms" checked> Forms (keep text)</label>'
    + '<label class="ta-m-press"><input type="radio" name="ta-fmode" value="press"> Press (rasterize)</label>'
    + '</div>'
    + '<div class="ta-fcount ta-fcount-el"></div>'
    + '<div class="ta-embed-status">Files never leave the browser. Flattening is one-way &mdash; keep your original.</div>'
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
  function dataURLToBytes(dataUrl) {
    var b64 = atob(dataUrl.split(',')[1]);
    var bytes = new Uint8Array(b64.length);
    for (var i = 0; i < b64.length; i++) bytes[i] = b64.charCodeAt(i);
    return bytes;
  }

  var origBytes = null, origName = 'document';
  root.querySelectorAll('input[name=ta-fmode]').forEach(function (r) {
    r.addEventListener('change', function () {
      root.querySelector('.ta-m-forms').classList.toggle('sel', r.value === 'forms' && r.checked);
      root.querySelector('.ta-m-press').classList.toggle('sel', r.value === 'press' && r.checked);
    });
  });

  root.querySelector('.ta-file').addEventListener('change', function (e) {
    var f = e.target.files[0];
    if (!f) return;
    origName = f.name.replace(/\.pdf$/i, '');
    status('Reading ' + f.name + ' …');
    var fr = new FileReader();
    fr.onload = function () {
      origBytes = new Uint8Array(fr.result);
      loadScript(PDFLIB_URL).then(function () {
        return window.PDFLib.PDFDocument.load(origBytes.slice(), { ignoreEncryption: true });
      }).then(function (doc) {
        var n = doc.getForm().getFields().length;
        var fc = root.querySelector('.ta-fcount-el');
        fc.style.display = 'block';
        fc.textContent = n ? n + ' interactive field(s) detected — they will be baked into the page.' : 'No form fields detected — Press mode flattens annotations and layers instead.';
        root.querySelector('.ta-go').disabled = false;
        status('Loaded ' + doc.getPageCount() + '-page PDF. Pick a mode and flatten.', 'ok');
      }).catch(function (err) { status('Could not open that PDF: ' + (err && err.message || err), 'bad'); });
    };
    fr.readAsArrayBuffer(f);
  });

  root.querySelector('.ta-go').addEventListener('click', function () {
    if (!origBytes) return;
    var btn = root.querySelector('.ta-go');
    btn.disabled = true;
    var mode = root.querySelector('input[name=ta-fmode]:checked').value;
    function deliver(bytes, label) {
      var blob = new Blob([bytes], { type: 'application/pdf' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = origName + '-flattened.pdf';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      status('Downloaded ' + a.download + ' — ' + label + '.', 'ok');
      btn.disabled = false;
    }
    if (mode === 'forms') {
      status('Baking form fields …');
      loadScript(PDFLIB_URL).then(function () {
        return window.PDFLib.PDFDocument.load(origBytes.slice(), { ignoreEncryption: true }).then(function (doc) {
          var form = doc.getForm();
          var n = form.getFields().length;
          form.flatten();
          return doc.save().then(function (bytes) { deliver(bytes, n + ' field(s) baked into the page'); });
        });
      }).catch(function (err) { status('Flatten failed: ' + (err && err.message || err), 'bad'); btn.disabled = false; });
    } else {
      status('Rasterizing pages …');
      Promise.all([loadScript(PDFJS_URL), loadScript(PDFLIB_URL)]).then(function () {
        pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
        var scale = 200 / 72;
        return pdfjsLib.getDocument({ data: origBytes.slice() }).promise.then(function (src) {
          return window.PDFLib.PDFDocument.create().then(function (out) {
            var chain = Promise.resolve();
            for (var p = 1; p <= src.numPages; p++) {
              (function (n) {
                chain = chain.then(function () {
                  return src.getPage(n).then(function (page) {
                    var vp = page.getViewport({ scale: scale });
                    var c = document.createElement('canvas');
                    c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
                    return page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise.then(function () {
                      return out.embedJpg(dataURLToBytes(c.toDataURL('image/jpeg', 0.92))).then(function (img) {
                        var w = c.width / scale, h = c.height / scale;
                        out.addPage([w, h]).drawImage(img, { x: 0, y: 0, width: w, height: h });
                      });
                    });
                  });
                });
              })(p);
            }
            return chain.then(function () { return out.save(); }).then(function (bytes) {
              deliver(bytes, src.numPages + ' page(s) rasterized at 200 DPI — fully flat');
            });
          });
        });
      }).catch(function (err) { status('Flatten failed: ' + (err && err.message || err), 'bad'); btn.disabled = false; });
    }
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.flattenPdf = {};
})();
