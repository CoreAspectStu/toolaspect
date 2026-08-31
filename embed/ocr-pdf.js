/*!
 * ToolAspect OCR PDF Embed
 * Install: <div id="ta-ocr-pdf"></div>
 *          <script src="https://toolaspect.com/embed/ocr-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-ocr-pdf';
  var BASE = 'https://toolaspect.com/ocr-pdf/';
  var PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
  var PDFJS_WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  var TESS_JS = 'https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/tesseract.min.js';
  var TESS_WORKER = 'https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/worker.min.js';
  var TESS_CORE = 'https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0';
  var LANG_ROOT = 'https://tessdata.projectnaptha.com/4.0.0_fast';

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
    + '.ta-ocr-select{display:flex;gap:8px;flex-wrap:wrap;align-items:center;font-size:.82rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-ocr-select select{padding:6px 8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.85rem;font-family:inherit}'
    + '.ta-ocr-out{margin-top:12px;width:100%;min-height:160px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.85rem;padding:10px 12px;font-family:inherit;white-space:pre-wrap;max-height:320px;overflow-y:auto}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'ocr-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="ocr-pdf"]')) {
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
    + '<div class="ta-embed-title">OCR PDF</div>'
    + '<div class="ta-embed-subtitle">Scanned PDF &rarr; text, recognized in your visitor&rsquo;s browser</div>'
    + '<div class="ta-embed-card">'
    + '<label class="ta-embed-file">&#128194; Open PDF<input type="file" class="ta-file" accept=".pdf,application/pdf"></label>'
    + '<div class="ta-ocr-select">'
    + 'Language <select class="ta-lang"><option value="eng" selected>English</option><option value="spa">Spanish</option><option value="fra">French</option><option value="deu">German</option></select>'
    + 'DPI <select class="ta-dpi"><option value="150">150</option><option value="300" selected>300</option></select>'
    + '</div>'
    + '<button type="button" class="ta-embed-btn ta-go" disabled>&#128269; Recognize text</button>'
    + '<div class="ta-ocr-out" hidden></div>'
    + '<div class="ta-embed-status">Files never leave the browser. First run downloads the OCR engine (~6 MB, cached).</div>'
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
        root.querySelector('.ta-go').dataset.numPages = String(doc.numPages);
        root._taPdf = doc;
        root.querySelector('.ta-go').disabled = false;
        status('Loaded ' + doc.numPages + ' pages. Press Recognize to OCR them.', 'ok');
      }).catch(function (err) { status('Could not open that PDF: ' + (err && err.message || err), 'bad'); });
    };
    fr.readAsArrayBuffer(f);
  });

  root.querySelector('.ta-go').addEventListener('click', function () {
    var pdfDoc = root._taPdf;
    if (!pdfDoc) return;
    var btn = root.querySelector('.ta-go');
    btn.disabled = true;
    var lang = root.querySelector('.ta-lang').value;
    var dpi = parseInt(root.querySelector('.ta-dpi').value, 10);
    var out = root.querySelector('.ta-ocr-out');
    out.hidden = false; out.textContent = '';
    status('Loading the OCR engine (one-time, cached) …');
    loadScript(TESS_JS).then(function () {
      var opts = {
        workerPath: TESS_WORKER, corePath: TESS_CORE, langPath: LANG_ROOT,
        logger: function (m) { if (m && m.status) status(m.status + (m.progress != null ? ' ' + Math.round(m.progress * 100) + '%' : '')); }
      };
      var worker;
      return Tesseract.createWorker(lang, 1, opts).then(function (w) {
        worker = w;
        var texts = [];
        var chain = Promise.resolve();
        for (var n = 1; n <= pdfDoc.numPages; n++) {
          (function (pageNum) {
            chain = chain.then(function () {
              return pdfDoc.getPage(pageNum).then(function (page) {
                var vp = page.getViewport({ scale: dpi / 72 });
                var c = document.createElement('canvas');
                c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
                return page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise.then(function () {
                  status('Recognizing page ' + pageNum + ' of ' + pdfDoc.numPages + ' …');
                  return worker.recognize(c);
                }).then(function (r) {
                  texts.push('--- Page ' + pageNum + ' ---\n' + ((r && r.data && r.data.text) || '').trim());
                });
              });
            });
          })(n);
        }
        return chain.then(function () { return worker.terminate().then(function () { return texts.join('\n\n'); }); });
      }).catch(function (err) {
        if (worker && worker.terminate) { try { worker.terminate(); } catch (_) {} }
        throw err;
      });
    }).then(function (text) {
      out.textContent = text || '(no text recognized)';
      status('Done. Copy the text below.', 'ok');
      btn.disabled = false;
    }).catch(function (err) { status('OCR failed: ' + (err && err.message || err), 'bad'); btn.disabled = false; });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.ocrPdf = {};
})();
