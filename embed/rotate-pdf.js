/*!
 * ToolAspect Rotate PDF Embed
 * Install: <div id="ta-rotate-pdf"></div>
 *          <script src="https://toolaspect.com/embed/rotate-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-rotate-pdf';
  var BASE = 'https://toolaspect.com/rotate-pdf/';
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
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-status.ok{color:var(--ta-ok)}.ta-embed-status.bad{color:var(--ta-bad)}'
    + '.ta-spec{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:10px;font-size:.8rem;color:var(--ta-muted)}'
    + '.ta-spec input{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:6px;padding:6px 8px;font-family:inherit;font-size:.85rem;width:170px}'
    + '.ta-grid{margin-top:12px;display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px}'
    + '.ta-pcard{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:10px;padding:8px;text-align:center}'
    + '.ta-pcard.turnt{border-color:var(--ta-warn)}'
    + '.ta-pcard .thumb{background:#fff;border-radius:6px;overflow:hidden;display:flex;align-items:center;justify-content:center;height:130px}'
    + '.ta-pcard img{max-width:100%;max-height:130px;display:block}'
    + '.ta-pcard .lbl{font-size:.7rem;color:var(--ta-muted);margin:.3rem 0 .25rem}'
    + '.ta-pcard .lbl b{color:var(--ta-warn)}'
    + '.ta-pcard .ctl{display:flex;gap:4px;justify-content:center}'
    + '.ta-pcard .ctl button{width:30px;height:26px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:6px;color:var(--ta-text);cursor:pointer;font-size:.8rem;line-height:1}'
    + '.ta-pcard .ctl button:hover{border-color:var(--ta-accent)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'rotate-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="rotate-pdf"]')) {
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
    + '<div class="ta-embed-title">Rotate PDF</div>'
    + '<div class="ta-embed-subtitle">Permanent page turns, written into the file in your visitor&rsquo;s browser</div>'
    + '<div class="ta-embed-card">'
    + '<label class="ta-embed-file">&#128194; Open PDF<input type="file" class="ta-file" accept=".pdf,application/pdf"></label>'
    + '<button type="button" class="ta-embed-btn ghost ta-reset" disabled>Reset</button>'
    + '<button type="button" class="ta-embed-btn ta-save" disabled>Download rotated PDF</button>'
    + '<div class="ta-spec">Pages <input type="text" class="ta-specin" value="all" placeholder="all / 1-3, 5 / odd / even">'
    + '<button type="button" class="ta-embed-btn ta-cw" disabled>&#10227; 90&deg; CW</button>'
    + '<button type="button" class="ta-embed-btn ghost ta-ccw" disabled>&#10226; 90&deg; CCW</button></div>'
    + '<div class="ta-embed-status">Files never leave the browser.</div>'
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
  var turns = {};
  var thumbCache = {};

  function parseRanges(spec, n) {
    var s = [];
    spec = String(spec || 'all').toLowerCase().replace(/\s+/g, '');
    if (!spec) spec = 'all';
    for (var _i = 0, _arr = spec.split(','); _i < _arr.length; _i++) {
      var part = _arr[_i];
      if (!part) continue;
      if (part === 'all') { for (var i = 1; i <= n; i++) s.push(i); continue; }
      if (part === 'odd') { for (var i = 1; i <= n; i += 2) s.push(i); continue; }
      if (part === 'even') { for (var i = 2; i <= n; i += 2) s.push(i); continue; }
      var m = part.match(/^(\d+)(?:-(\d+))?$/);
      if (!m) throw new Error('Cannot read page spec: "' + part + '"');
      var a = +m[1], b = m[2] ? +m[2] : a;
      if (a < 1 || b < 1 || a > n || b > n) throw new Error('Page out of range 1-' + n + ': ' + part);
      if (a > b) { var t = a; a = b; b = t; }
      for (var i = a; i <= b; i++) s.push(i);
    }
    if (!s.length) throw new Error('No pages selected');
    return s;
  }

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
        pdf = doc; turns = {}; thumbCache = {};
        return renderGrid();
      }).then(function () {
        root.querySelector('.ta-cw').disabled = false;
        root.querySelector('.ta-ccw').disabled = false;
        root.querySelector('.ta-reset').disabled = false;
        root.querySelector('.ta-save').disabled = false;
        status('Loaded ' + pdf.numPages + ' pages. Turn singles below or use a page spec.', 'ok');
      }).catch(function (err) { status('Could not open that PDF: ' + (err && err.message || err), 'bad'); });
    };
    fr.readAsArrayBuffer(f);
  });

  function applyTurn(delta) {
    if (!pdf) return;
    var sel;
    try { sel = parseRanges(root.querySelector('.ta-specin').value, pdf.numPages); }
    catch (err) { status(err.message, 'bad'); return; }
    sel.forEach(function (p) { turns[p] = ((turns[p] || 0) + delta) % 360; });
    renderGrid().then(function () { status('Turned ' + sel.length + ' page(s) by ' + delta + '°.', 'ok'); });
  }
  root.querySelector('.ta-cw').addEventListener('click', function () { applyTurn(90); });
  root.querySelector('.ta-ccw').addEventListener('click', function () { applyTurn(270); });
  root.querySelector('.ta-reset').addEventListener('click', function () {
    if (!pdf) return;
    turns = {};
    renderGrid().then(function () { status('Cleared all extra turns.', 'ok'); });
  });

  function renderThumb(n, extra) {
    var key = n + '-' + (extra || 0);
    if (thumbCache[key]) return Promise.resolve(thumbCache[key]);
    return pdf.getPage(n).then(function (page) {
      var base = page.getViewport({ scale: 1 });
      var vp = page.getViewport({ scale: 120 / base.width, rotation: (page.rotate + (extra || 0)) % 360 });
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
    for (var p = 1; p <= pdf.numPages; p++) {
      (function (n) {
        chain = chain.then(function () {
          return renderThumb(n, turns[n]).then(function (src) {
            var card = document.createElement('div');
            card.className = 'ta-pcard' + (turns[n] ? ' turnt' : '');
            card.innerHTML = '<div class="thumb"><img alt="Page ' + n + '"></div>'
              + '<div class="lbl">Page ' + n + (turns[n] ? ' <b>+' + turns[n] + '&deg;</b>' : '') + '</div>'
              + '<div class="ctl"><button title="Rotate counterclockwise">&#10226;</button><button title="Rotate clockwise">&#10227;</button></div>';
            card.querySelector('img').src = src;
            var b = card.querySelectorAll('.ctl button');
            b[0].addEventListener('click', function () { turns[n] = ((turns[n] || 0) + 270) % 360; refreshCard(card, n); });
            b[1].addEventListener('click', function () { turns[n] = ((turns[n] || 0) + 90) % 360; refreshCard(card, n); });
            grid.appendChild(card);
          });
        });
      })(p);
    }
    return chain;
  }
  function refreshCard(card, n) {
    renderThumb(n, turns[n]).then(function (src) {
      card.querySelector('img').src = src;
      card.querySelector('.lbl').innerHTML = 'Page ' + n + (turns[n] ? ' <b>+' + turns[n] + '&deg;</b>' : '');
      card.className = 'ta-pcard' + (turns[n] ? ' turnt' : '');
    });
  }

  root.querySelector('.ta-save').addEventListener('click', function () {
    var btn = root.querySelector('.ta-save');
    btn.disabled = true;
    status('Writing rotations …');
    loadScript(PDFLIB_URL).then(function () {
      var PDFLib = window.PDFLib;
      return PDFLib.PDFDocument.load(origBytes.slice()).then(function (doc) {
        var pages = doc.getPages();
        for (var i = 0; i < pages.length; i++) {
          var extra = turns[i + 1] || 0;
          if (extra) pages[i].setRotation(PDFLib.degrees(((pages[i].getRotation().angle || 0) + extra) % 360));
        }
        return doc.save();
      });
    }).then(function (bytes) {
      var blob = new Blob([bytes], { type: 'application/pdf' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = origName + '-rotated.pdf';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      status('Downloaded ' + origName + '-rotated.pdf.', 'ok');
      btn.disabled = false;
    }).catch(function (err) { status('Export failed: ' + (err && err.message || err), 'bad'); btn.disabled = false; });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.rotatePdf = {};
})();
