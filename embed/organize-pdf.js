/*!
 * ToolAspect Organize PDF Embed
 * Install: <div id="ta-organize-pdf"></div>
 *          <script src="https://toolaspect.com/embed/organize-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-organize-pdf';
  var BASE = 'https://toolaspect.com/organize-pdf/';
  var PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
  var PDFJS_WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  var PDFLIB_URL = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.5.1/dist/pdf-lib.min.js';
  var THUMB_WIDTH = 150;

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
    + '.ta-grid{margin-top:12px;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}'
    + '.ta-pcard{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:10px;padding:8px;text-align:center;cursor:grab}'
    + '.ta-pcard.dragover{border-color:var(--ta-accent);border-style:dashed}'
    + '.ta-pcard.dragging{opacity:.4}'
    + '.ta-pcard .thumb{background:#fff;border-radius:6px;overflow:hidden;display:flex;align-items:center;justify-content:center;height:170px}'
    + '.ta-pcard img{max-width:100%;max-height:170px;display:block}'
    + '.ta-pcard .lbl{font-size:.72rem;color:var(--ta-muted);margin:.35rem 0 .3rem}'
    + '.ta-pcard .ctl{display:flex;gap:4px;justify-content:center}'
    + '.ta-pcard .ctl button{width:30px;height:26px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:6px;color:var(--ta-text);cursor:pointer;font-size:.75rem;line-height:1}'
    + '.ta-pcard .ctl button.del:hover{border-color:var(--ta-bad);color:var(--ta-bad)}'
    + '.ta-delbar{margin-top:10px;display:flex;gap:.4rem;flex-wrap:wrap;align-items:center;font-size:.75rem;color:var(--ta-muted)}'
    + '.ta-delbar .chip{padding:.2rem .55rem;border:1px dashed var(--ta-border);border-radius:20px;cursor:pointer;color:var(--ta-accent)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'organize-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="organize-pdf"]')) {
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
    + '<div class="ta-embed-title">Organize PDF</div>'
    + '<div class="ta-embed-subtitle">Drag to reorder, delete, rotate &mdash; rebuilt in your visitor&rsquo;s browser</div>'
    + '<div class="ta-embed-card">'
    + '<label class="ta-embed-file">&#128194; Open PDF<input type="file" class="ta-file" accept=".pdf,application/pdf"></label>'
    + '<button type="button" class="ta-embed-btn ghost ta-reset" disabled>Reset</button>'
    + '<button type="button" class="ta-embed-btn ta-save" disabled>Download organized PDF</button>'
    + '<div class="ta-embed-status">Files never leave the browser.</div>'
    + '<div class="ta-delbar" style="display:none"></div>'
    + '<div class="ta-grid"></div>'
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

  var pdf = null, origBytes = null, origName = 'document';
  var pages = [];   // {n, rot, deleted}
  var thumbCache = {};
  var dragIdx = -1;

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
        pdf = doc;
        pages = [];
        for (var i = 1; i <= doc.numPages; i++) pages.push({ n: i, rot: 0, deleted: false });
        thumbCache = {};
        return renderGrid();
      }).then(function () {
        root.querySelector('.ta-reset').disabled = false;
        root.querySelector('.ta-save').disabled = false;
        status('Loaded ' + pdf.numPages + ' pages. Drag cards to reorder; use the buttons to move, rotate, or delete.', 'ok');
      }).catch(function (err) { status('Could not open that PDF: ' + (err && err.message || err), 'bad'); });
    };
    fr.readAsArrayBuffer(f);
  });

  root.querySelector('.ta-reset').addEventListener('click', function () {
    if (!pdf) return;
    pages = [];
    for (var i = 1; i <= pdf.numPages; i++) pages.push({ n: i, rot: 0, deleted: false });
    renderGrid();
  });

  function renderThumb(it) {
    var key = it.n + '-' + it.rot;
    if (thumbCache[key]) return Promise.resolve(thumbCache[key]);
    return pdf.getPage(it.n).then(function (page) {
      var base = page.getViewport({ scale: 1 });
      var vp = page.getViewport({ scale: THUMB_WIDTH / base.width, rotation: (page.rotate + it.rot) % 360 });
      var c = document.createElement('canvas');
      c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
      return page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise.then(function () {
        thumbCache[key] = c.toDataURL('image/png');
        return thumbCache[key];
      });
    });
  }

  function renderGrid() {
    var grid = root.querySelector('.ta-grid');
    grid.innerHTML = '';
    var chain = Promise.resolve();
    pages.forEach(function (it, i) {
      if (it.deleted) return;
      (function (item, idx) {
        chain = chain.then(function () {
          return renderThumb(item).then(function (src) {
            var card = document.createElement('div');
            card.className = 'ta-pcard';
            card.draggable = true;
            card.innerHTML = '<div class="thumb"><img alt="Page ' + item.n + '"></div>'
              + '<div class="lbl">Page ' + item.n + (item.rot ? ' (' + item.rot + '&deg;)' : '') + '</div>'
              + '<div class="ctl"><button title="Move left">&#8592;</button><button title="Move right">&#8594;</button>'
              + '<button title="Rotate">&#10227;</button><button class="del" title="Delete">&#10005;</button></div>';
            card.querySelector('img').src = src;
            var b = card.querySelectorAll('.ctl button');
            b[0].addEventListener('click', function () { movePage(idx, -1); });
            b[1].addEventListener('click', function () { movePage(idx, 1); });
            b[2].addEventListener('click', function () {
              item.rot = (item.rot + 90) % 360;
              renderThumb(item).then(function (s2) {
                card.querySelector('img').src = s2;
                card.querySelector('.lbl').innerHTML = 'Page ' + item.n + (item.rot ? ' (' + item.rot + '&deg;)' : '');
              });
            });
            b[3].addEventListener('click', function () { item.deleted = true; renderGrid(); });
            card.addEventListener('dragstart', function (e) {
              dragIdx = idx; card.classList.add('dragging');
              try { e.dataTransfer.setData('text/plain', String(idx)); } catch (_) {}
            });
            card.addEventListener('dragend', function () { dragIdx = -1; card.classList.remove('dragging'); });
            card.addEventListener('dragover', function (e) { e.preventDefault(); card.classList.add('dragover'); });
            card.addEventListener('dragleave', function () { card.classList.remove('dragover'); });
            card.addEventListener('drop', function (e) {
              e.preventDefault(); card.classList.remove('dragover');
              if (dragIdx < 0 || dragIdx === idx) return;
              var moved = pages.splice(dragIdx, 1)[0];
              pages.splice(idx, 0, moved);
              renderGrid();
            });
            grid.appendChild(card);
          });
        });
      })(it, i);
    });
    return chain.then(function () { renderDelbar(); updateStatus(); });
  }
  function movePage(masterIdx, dir) {
    var t = masterIdx + dir;
    while (t >= 0 && t < pages.length && pages[t].deleted) t += dir;
    if (t < 0 || t >= pages.length) return;
    var tmp = pages[masterIdx];
    pages[masterIdx] = pages[t];
    pages[t] = tmp;
    renderGrid();
  }
  function renderDelbar() {
    var bar = root.querySelector('.ta-delbar');
    var del = pages.filter(function (p) { return p.deleted; });
    if (!del.length) { bar.style.display = 'none'; bar.innerHTML = ''; return; }
    bar.style.display = 'flex';
    bar.innerHTML = '<span>' + del.length + ' deleted:</span>';
    del.forEach(function (item) {
      var chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = 'restore p' + item.n;
      chip.addEventListener('click', function () { item.deleted = false; renderGrid(); });
      bar.appendChild(chip);
    });
  }
  function updateStatus() {
    var kept = pages.filter(function (p) { return !p.deleted; }).length;
    root.querySelector('.ta-save').disabled = !kept;
    status(kept + ' of ' + pdf.numPages + ' pages will be in the output.', 'ok');
  }

  root.querySelector('.ta-save').addEventListener('click', function () {
    var kept = pages.filter(function (p) { return !p.deleted; });
    if (!kept.length) return;
    var btn = root.querySelector('.ta-save');
    btn.disabled = true;
    status('Rebuilding PDF …');
    loadScript(PDFLIB_URL).then(function () {
      var PDFLib = window.PDFLib;
      return PDFLib.PDFDocument.load(origBytes.slice()).then(function (src) {
        return PDFLib.PDFDocument.create().then(function (out) {
          return out.copyPages(src, kept.map(function (p) { return p.n - 1; })).then(function (copied) {
            copied.forEach(function (p, i) {
              p.setRotation(PDFLib.degrees(((p.getRotation().angle || 0) + kept[i].rot) % 360));
              out.addPage(p);
            });
            return out.save();
          });
        });
      });
    }).then(function (bytes) {
      var blob = new Blob([bytes], { type: 'application/pdf' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = origName + '-organized.pdf';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      status('Downloaded ' + origName + '-organized.pdf (' + kept.length + ' pages).', 'ok');
      btn.disabled = false;
    }).catch(function (err) { status('Export failed: ' + (err && err.message || err), 'bad'); btn.disabled = false; });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.organizePdf = {};
})();
