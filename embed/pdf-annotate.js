/*!
 * ToolAspect PDF Annotate Embed
 * Install: <div id="ta-pdf-annotate"></div>
 *          <script src="https://toolaspect.com/embed/pdf-annotate.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pdf-annotate';
  var BASE = 'https://toolaspect.com/pdf-annotate/';
  var PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
  var PDFJS_VIEWER_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/web/pdf_viewer.min.js';
  var PDFJS_WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  var SUBMITTY_URL = 'https://cdn.jsdelivr.net/npm/@submitty/pdf-annotate.js@24.6.6/dist/pdf-annotate.min.js';
  var PDFLIB_URL = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.5.1/dist/pdf-lib.min.js';
  var SCALE = 1.3;

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-btn{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 12px;font-size:.82rem;cursor:pointer;font-family:inherit;margin:3px 3px 0 0}'
    + '.ta-embed-btn:hover{border-color:var(--ta-accent)}'
    + '.ta-embed-btn.active{border-color:var(--ta-accent);color:var(--ta-accent);outline:1px solid var(--ta-accent)}'
    + '.ta-embed-btn.save{background:var(--ta-accent);color:#fff;border:none;font-weight:600}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-file{display:inline-block;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 12px;font-size:.85rem;cursor:pointer;margin:3px 3px 0 0}'
    + '.ta-embed-file input{display:none}'
    + '.ta-embed-select{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:6px 8px;font-size:.8rem;margin:3px 3px 0 0;font-family:inherit}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-status.ok{color:var(--ta-ok)}.ta-embed-status.bad{color:var(--ta-bad)}'
    + '.ta-viewer{margin-top:12px;display:flex;flex-direction:column;gap:14px;align-items:center}'
    + '.ta-viewer .page{position:relative;background:#fff;box-shadow:0 2px 10px rgba(0,0,0,.25)}'
    + '.ta-viewer .page canvas{display:block;max-width:100%}'
    + '.ta-viewer .annotationLayer{position:absolute;top:0;left:0}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pdf-annotate');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pdf-annotate"]')) {
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
    + '<div class="ta-embed-title">PDF Annotate</div>'
    + '<div class="ta-embed-subtitle">Highlight, strike, draw, text &amp; notes &rarr; real PDF annotations, 100% in-browser</div>'
    + '<div class="ta-embed-card">'
    + '<label class="ta-embed-file">&#128194; Open PDF<input type="file" class="ta-file" accept=".pdf,application/pdf"></label>'
    + '<button type="button" class="ta-embed-btn ta-t" data-tool="cursor" disabled>Select</button>'
    + '<button type="button" class="ta-embed-btn ta-t" data-tool="highlight" disabled>Highlight</button>'
    + '<button type="button" class="ta-embed-btn ta-t" data-tool="strike" disabled>Strike</button>'
    + '<button type="button" class="ta-embed-btn ta-t" data-tool="draw" disabled>Draw</button>'
    + '<button type="button" class="ta-embed-btn ta-t" data-tool="text" disabled>Text</button>'
    + '<button type="button" class="ta-embed-btn ta-t" data-tool="note" disabled>Note</button>'
    + '<select class="ta-penw ta-embed-select"><option>1</option><option>2</option><option>3</option></select>'
    + '<select class="ta-penc ta-embed-select"><option value="FF0000">Red</option><option value="0000FF">Blue</option><option value="000000">Black</option></select>'
    + '<select class="ta-texts ta-embed-select"><option>10</option><option>12</option><option>16</option><option>24</option></select>'
    + '<button type="button" class="ta-embed-btn save ta-save" disabled>Save annotated PDF</button>'
    + '<div class="ta-embed-status">Files never leave the browser.</div>'
    + '<div class="ta-viewer"></div>'
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

  var pdf = null, origBytes = null, origName = 'document', documentId = 'ta-' + Math.random().toString(36).slice(2);
  var store = { anns: [], comments: {} };
  var A = null, UI = null;
  var RENDER_OPTIONS = null;

  root.querySelector('.ta-file').addEventListener('change', function (e) {
    var f = e.target.files[0];
    if (!f) return;
    origName = f.name.replace(/\.pdf$/i, '');
    status('Loading ' + f.name + ' …');
    var fr = new FileReader();
    fr.onload = function () {
      origBytes = new Uint8Array(fr.result);
      loadScript(PDFJS_URL).then(function () { return loadScript(PDFJS_VIEWER_URL); }).then(function () { return loadScript(SUBMITTY_URL); }).then(function () {
        A = window.PDFAnnotate; UI = A.UI;
        RENDER_OPTIONS = { documentId: documentId, pdfDocument: null, scale: SCALE, rotate: 0 };
        pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
        A.setStoreAdapter(new A.StoreAdapter({
          getAnnotations: function (did, pageNumber) {
            return Promise.resolve({ pageNumber: pageNumber, annotations: store.anns.filter(function (a) { return +a.page === +pageNumber; }) });
          },
          getAnnotation: function (did, id) { return Promise.resolve(store.anns.filter(function (a) { return a.uuid === id; })[0] || null); },
          addAnnotation: function (did, pageNumber, annotation) { annotation.page = pageNumber; store.anns.push(annotation); return Promise.resolve(annotation); },
          editAnnotation: function (did, a, b) {
            var idx = -1;
            store.anns.forEach(function (x, i) { if (x.uuid === (typeof a === 'string' ? a : a.uuid)) idx = i; });
            if (idx > -1 && b && b.uuid) store.anns[idx] = b;
            return Promise.resolve(store.anns[idx] || null);
          },
          deleteAnnotation: function (did, id) {
            store.anns = store.anns.filter(function (a) { return a.uuid !== id; });
            delete store.comments[id];
            return Promise.resolve(null);
          },
          addComment: function (did, id, content) { store.comments[id] = content; return Promise.resolve({ annotation: id, content: content }); },
          deleteComment: function (did, id) { delete store.comments[id]; return Promise.resolve(null); }
        }));
        return pdfjsLib.getDocument({ data: origBytes.slice() }).promise;
      }).then(function (doc) {
        pdf = doc; RENDER_OPTIONS.pdfDocument = doc;
        var viewer = root.querySelector('.ta-viewer');
        viewer.innerHTML = '';
        for (var i = 1; i <= doc.numPages; i++) viewer.appendChild(UI.createPage(i));
        var chain = Promise.resolve();
        for (var j = 1; j <= doc.numPages; j++) {
          (function (n) { chain = chain.then(function () { return UI.renderPage(n, RENDER_OPTIONS); }); })(j);
        }
        return chain;
      }).then(function () {
        [].slice.call(root.querySelectorAll('.ta-t')).forEach(function (b) { b.disabled = false; });
        root.querySelector('.ta-save').disabled = false;
        status(pdf.numPages + ' page(s) loaded. Pick a tool and mark up.', 'ok');
        loadScript(PDFLIB_URL).catch(function () {});
      }).catch(function (err) { status('Could not open that PDF: ' + (err && err.message || err), 'bad'); });
    };
    fr.readAsArrayBuffer(f);
  });

  [].slice.call(root.querySelectorAll('.ta-t')).forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!UI) return;
      UI.disableRect && UI.disableRect(); UI.disablePen && UI.disablePen(); UI.disableText && UI.disableText(); UI.disablePoint && UI.disablePoint();
      [].slice.call(root.querySelectorAll('.ta-t')).forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var name = btn.getAttribute('data-tool');
      if (name === 'highlight') UI.enableRect('highlight');
      else if (name === 'strike') UI.enableRect('strikeout');
      else if (name === 'draw') { UI.setPen(parseFloat(root.querySelector('.ta-penw').value, 10) || 1, root.querySelector('.ta-penc').value); UI.enablePen(); }
      else if (name === 'text') { UI.setText(parseInt(root.querySelector('.ta-texts').value, 10) || 12, '000000'); UI.enableText(); }
      else if (name === 'note') UI.enablePoint();
    });
  });

  UI_ready_events();
  function UI_ready_events() {
    // annotation events attach once the library is present
    var t = setInterval(function () {
      if (window.PDFAnnotate && window.PDFAnnotate.UI) {
        clearInterval(t);
        window.PDFAnnotate.UI.addEventListener('annotation:add', tick);
        window.PDFAnnotate.UI.addEventListener('annotation:edit', tick);
        window.PDFAnnotate.UI.addEventListener('comment:add', tick);
      }
    }, 400);
    setTimeout(function () { clearInterval(t); }, 60000);
  }
  function tick() {
    root.querySelector('.ta-save').disabled = !store.anns.length;
  }

  // annotation-dict writer (node-verified — identical to the tool page's engine)
  function writePdfAnnotations(PDFLib, pdfDoc, annotations, commentLookup) {
    var ctx = pdfDoc.context;
    var PDFName = PDFLib.PDFName, PDFString = PDFLib.PDFString, PDFHexString = PDFLib.PDFHexString;
    function hexToRgb(h) { h = String(h || '000000').replace('#', ''); return [0, 2, 4].map(function (i) { return parseInt((h.substr(i, 2) || '0'), 16) / 255; }); }
    annotations.forEach(function (a) {
      var dict = null;
      if (a.type === 'highlight' || a.type === 'strikeout') {
        var rects = a.rectangles || [];
        if (!rects.length) return;
        var quads = [];
        rects.forEach(function (r) { quads.push(r.xL, r.yT, r.xR, r.yT, r.xL, r.yB, r.xR, r.yB); });
        var xs = [], ys = [];
        rects.forEach(function (r) { xs.push(r.xL, r.xR); ys.push(r.yT, r.yB); });
        var col = hexToRgb(a.color);
        dict = ctx.obj({ Type: 'Annot', Subtype: a.type === 'highlight' ? 'Highlight' : 'StrikeOut',
          Rect: [Math.min.apply(null, xs), Math.min.apply(null, ys), Math.max.apply(null, xs), Math.max.apply(null, ys)],
          QuadPoints: quads, IC: col, C: col, CA: 0.5 });
      } else if (a.type === 'drawing') {
        var pts = a.ink || [];
        if (pts.length < 2) return;
        var xs2 = [], ys2 = [];
        pts.forEach(function (p) { xs2.push(p[0]); ys2.push(p[1]); });
        dict = ctx.obj({ Type: 'Annot', Subtype: 'Ink',
          Rect: [Math.min.apply(null, xs2), Math.min.apply(null, ys2), Math.max.apply(null, xs2), Math.max.apply(null, ys2)],
          InkList: [pts.reduce(function (acc, p) { return acc.concat(p); }, [])],
          C: hexToRgb(a.color), BS: ctx.obj({ W: Math.max(0.1, a.width || 1), S: 'S' }) });
      } else if (a.type === 'textbox') {
        var r2 = a.rect || { xL: 0, yB: 0, xR: 0, yT: 0 };
        var c = hexToRgb(a.color);
        var da = '/Helv ' + (a.size || 12) + ' Tf ' + c[0] + ' ' + c[1] + ' ' + c[2] + ' rg';
        dict = ctx.obj({ Type: 'Annot', Subtype: 'FreeText', Rect: [r2.xL, r2.yB, r2.xR, r2.yT],
          DA: PDFString.of(da), Contents: PDFHexString.fromText(a.content || ''), F: 4 });
      } else if (a.type === 'point') {
        var p2 = a.point || { x: 0, y: 0 };
        dict = ctx.obj({ Type: 'Annot', Subtype: 'Text', Rect: [p2.x - 11, p2.y - 11, p2.x + 11, p2.y + 11],
          Name: 'Comment', Contents: PDFHexString.fromText(commentLookup(a.uuid) || ''), F: 4, Open: false });
      }
      if (!dict) return;
      var pg = Math.max(0, (parseInt(a.pageIdx, 10) || 0));
      if (pg >= pdfDoc.getPageCount()) return;
      var page = pdfDoc.getPage(pg);
      var ref = ctx.register(dict);
      var annots = page.node.lookup(PDFName.of('Annots'));
      if (!annots) { annots = ctx.obj([]); page.node.set(PDFName.of('Annots'), annots); }
      annots.push(ref);
    });
  }

  root.querySelector('.ta-save').addEventListener('click', function () {
    if (!pdf || !store.anns.length) return;
    var btn = root.querySelector('.ta-save');
    btn.disabled = true;
    status('Saving ' + store.anns.length + ' annotation(s) …');
    var views = {};
    var chain = Promise.resolve();
    for (var i = 1; i <= pdf.numPages; i++) {
      (function (n) { chain = chain.then(function () { return pdf.getPage(n).then(function (p) { views[n] = p.getViewport({ scale: SCALE }); }); }); })(i);
    }
    chain.then(function () {
      var pdfSpace = store.anns.map(function (a) {
        var vp = views[a.page];
        var b = { type: a.type, color: a.color, pageIdx: (+a.page || 1) - 1, uuid: a.uuid, width: a.width };
        if (!vp) return null;
        if (a.type === 'highlight' || a.type === 'strikeout') {
          b.rectangles = (a.rectangles || []).map(function (r) {
            var p1 = vp.convertToPdfPoint(r.x, r.y), p2 = vp.convertToPdfPoint(r.x + r.width, r.y + r.height);
            return { xL: Math.min(p1[0], p2[0]), yT: Math.max(p1[1], p2[1]), xR: Math.max(p1[0], p2[0]), yB: Math.min(p1[1], p2[1]) };
          });
        } else if (a.type === 'drawing') {
          b.ink = (a.lines || []).map(function (pt) { return vp.convertToPdfPoint(pt[0], pt[1]); });
        } else if (a.type === 'textbox') {
          var p1 = vp.convertToPdfPoint(a.x, a.y + (a.height || 20)), p2 = vp.convertToPdfPoint(a.x + (a.width || 200), a.y);
          b.rect = { xL: p1[0], yB: p1[1], xR: p2[0], yT: p2[1] };
          b.size = (a.size || 12) / SCALE;
          b.content = a.content || '';
        } else if (a.type === 'point') {
          b.point = vp.convertToPdfPoint(a.x, a.y);
        }
        return b;
      }).filter(Boolean);
      return loadScript(PDFLIB_URL).then(function () {
        var PDFLib = window.PDFLib;
        return PDFLib.PDFDocument.load(origBytes.slice()).then(function (doc) {
          writePdfAnnotations(PDFLib, doc, pdfSpace, function (id) { return store.comments[id]; });
          return doc.save();
        });
      });
    }).then(function (bytes) {
      var blob = new Blob([bytes], { type: 'application/pdf' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = origName + '-annotated.pdf';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      status('Downloaded ' + origName + '-annotated.pdf with real PDF annotations.', 'ok');
      btn.disabled = false;
    }).catch(function (err) { status('Save failed: ' + (err && err.message || err), 'bad'); btn.disabled = false; });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.pdfAnnotate = {};
})();
