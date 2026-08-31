/*!
 * ToolAspect PDF Page Numbers Embed
 * Install: <div id="ta-pdf-page-numbers"></div>
 *          <script src="https://toolaspect.com/embed/pdf-page-numbers.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: @cantoo/pdf-lib (MIT), loaded on demand from jsdelivr — numbering
 * happens entirely in the visitor's browser; no file ever reaches a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pdf-page-numbers';
  var BASE = 'https://toolaspect.com/pdf-page-numbers/';
  var LIB_URL = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.9.1/dist/pdf-lib.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-drop{border:2px dashed var(--ta-border);border-radius:12px;padding:26px;text-align:center;cursor:pointer}'
    + '.ta-embed-drop.over{border-color:var(--ta-accent)}'
    + '.ta-embed-drop p{color:var(--ta-muted);font-size:.85rem;margin:0}'
    + '.ta-embed-btn{padding:10px 22px;border-radius:8px;border:none;background:var(--ta-accent);color:#fff;font-size:.88rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn:disabled{opacity:.4;cursor:not-allowed}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:12px}'
    + '.ta-embed-opts{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}'
    + '.ta-embed-opt{display:flex;flex-direction:column;gap:3px}'
    + '.ta-embed-opt label{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-opt input,.ta-embed-opt select{padding:8px 10px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.85rem;font-family:inherit;width:100%}'
    + '.ta-embed-check{display:flex;align-items:center;gap:6px;font-size:.78rem;color:var(--ta-muted);padding:6px 0;cursor:pointer}'
    + '.ta-embed-preview{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 10px;margin-top:10px;font-size:.78rem;font-family:ui-monospace,Menlo,Consolas,monospace;color:var(--ta-muted)}'
    + '.ta-embed-status{margin-top:10px;font-size:.85rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pdf-page-numbers');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pdf-page-numbers"]')) {
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
    + '<div class="ta-embed-title">PDF Page Numbers</div>'
    + '<div class="ta-embed-subtitle">Number PDFs in the browser — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop"><p>📄 Click or drag a PDF here</p></div>'
    + '<input type="file" accept="application/pdf,.pdf" style="display:none">'
    + '<div class="ta-embed-opts">'
    + '<div class="ta-embed-opt"><label>Position</label><select class="ta-embed-pos">'
    + '<option value="br">Bottom right</option><option value="bc">Bottom center</option><option value="bl">Bottom left</option>'
    + '<option value="tr">Top right</option><option value="tc">Top center</option><option value="tl">Top left</option>'
    + '<option value="mr">Middle right</option><option value="mc">Middle center</option><option value="ml">Middle left</option></select></div>'
    + '<div class="ta-embed-opt"><label>Format</label><select class="ta-embed-fmt">'
    + '<option value="plain">1</option><option value="slash">1/24</option><option value="of">1 of 24</option>'
    + '<option value="page">Page 1</option><option value="pageOf" selected>Page 1 of 24</option></select></div>'
    + '<div class="ta-embed-opt"><label>Start at</label><input class="ta-embed-start" type="number" value="1" min="1"></div>'
    + '<div class="ta-embed-opt"><label style="visibility:hidden">.</label><label class="ta-embed-check"><input type="checkbox" class="ta-embed-skip"> Skip first page</label></div>'
    + '</div>'
    + '<div class="ta-embed-preview"></div>'
    + '<div class="ta-embed-actions">'
    + '<button type="button" class="ta-embed-btn go" disabled>Add numbers</button>'
    + '<button type="button" class="ta-embed-btn ghost cl" disabled>Clear</button>'
    + '</div>'
    + '<div class="ta-embed-status"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var dropEl = root.querySelector('.ta-embed-drop');
  var fileEl = root.querySelector('input[type="file"]');
  var statusEl = root.querySelector('.ta-embed-status');
  var goBtn = root.querySelector('.go');
  var clearBtn = root.querySelector('.cl');
  var posEl = root.querySelector('.ta-embed-pos');
  var fmtEl = root.querySelector('.ta-embed-fmt');
  var startEl = root.querySelector('.ta-embed-start');
  var skipEl = root.querySelector('.ta-embed-skip');
  var previewEl = root.querySelector('.ta-embed-preview');

  var bytes = null, pages = 0, name = '';
  var libPromise = null;

  function loadLib() {
    if (window.PDFLib) return Promise.resolve(window.PDFLib);
    if (!libPromise) {
      libPromise = new Promise(function (res, rej) {
        var s = document.createElement('script');
        s.src = LIB_URL;
        s.onload = function () { res(window.PDFLib); };
        s.onerror = function () { libPromise = null; rej(new Error('pdf-lib failed to load')); };
        (document.head || document.documentElement).appendChild(s);
      });
    }
    return libPromise;
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function readFile(f) {
    return new Promise(function (res, rej) {
      var fr = new FileReader();
      fr.onload = function () { res(new Uint8Array(fr.result)); };
      fr.onerror = function () { rej(new Error('unreadable')); };
      fr.readAsArrayBuffer(f);
    });
  }
  function opts() {
    return { position: posEl.value, format: fmtEl.value, start: Math.max(1, parseInt(startEl.value, 10) || 1), skipFirst: skipEl.checked };
  }
  function label(p, N, o) {
    var num = String(o.start + p - 1);
    if (o.format === 'plain') return num;
    if (o.format === 'slash') return num + '/' + N;
    if (o.format === 'of') return num + ' of ' + N;
    if (o.format === 'page') return 'Page ' + num;
    return 'Page ' + num + ' of ' + N;
  }
  function slotXY(pos, w, h, tw, size, margin) {
    var x = pos[1] === 'r' ? w - margin - tw : (pos[1] === 'l' ? margin : (w - tw) / 2);
    var y = pos[0] === 'b' ? margin : (pos[0] === 't' ? h - margin - size : (h - size) / 2);
    return [x, y];
  }

  async function loadFile(file) {
    statusEl.innerHTML = '';
    try {
      var PDFLib = await loadLib();
      bytes = await readFile(file);
      name = file.name;
      pages = (await PDFLib.PDFDocument.load(bytes)).getPageCount();
      updatePreview();
    } catch (e) {
      var msg = String(e && e.message || e);
      statusEl.innerHTML = '<span style="color:#dc2626">' + esc(/encrypt/i.test(msg) ? 'That PDF is password-protected.' : 'Could not open that PDF.') + '</span>';
    }
  }

  function updatePreview() {
    if (!pages) { previewEl.textContent = 'Load a PDF to preview the numbering'; return; }
    var o = opts();
    var N = pages - (o.skipFirst ? 1 : 0);
    previewEl.innerHTML = 'Page 2 prints as <strong>' + esc(label(2, N, o)) + '</strong> · last: <strong>' + esc(label(N, N, o)) + '</strong> (' + N + ' of ' + pages + ' numbered)';
    goBtn.disabled = false;
    clearBtn.disabled = false;
  }

  async function go() {
    if (!pages) return;
    try {
      var PDFLib = await loadLib();
      var o = opts();
      var doc = await PDFLib.PDFDocument.load(bytes);
      var font = await doc.embedFont(PDFLib.StandardFonts.Helvetica);
      var pl = doc.getPages();
      var N = pl.length - (o.skipFirst ? 1 : 0);
      var p = 0;
      for (var i = 0; i < pl.length; i++) {
        if (o.skipFirst && i === 0) continue;
        p++;
        var text = label(p, N, o);
        var page = pl[i];
        var tw = font.widthOfTextAtSize(text, 10);
        var xy = slotXY(o.position, page.getWidth(), page.getHeight(), tw, 10, 36);
        page.drawText(text, { x: xy[0], y: xy[1], size: 10, font: font, color: PDFLib.rgb(0.2, 0.2, 0.2) });
      }
      var out = await doc.save();
      var url = URL.createObjectURL(new Blob([out], { type: 'application/pdf' }));
      var fname = name.replace(/\.pdf$/i, '') + '-numbered.pdf';
      statusEl.innerHTML = '✅ Numbered ' + p + ' pages — <a href="' + url + '" download="' + esc(fname) + '" style="color:#16a34a;font-weight:600">⬇ ' + esc(fname) + '</a>';
    } catch (e) {
      statusEl.innerHTML = '<span style="color:#dc2626">Numbering failed: ' + esc(String(e && e.message || e)) + '</span>';
    }
  }

  dropEl.addEventListener('click', function () { fileEl.click(); });
  dropEl.addEventListener('dragover', function (e) { e.preventDefault(); dropEl.classList.add('over'); });
  dropEl.addEventListener('dragleave', function () { dropEl.classList.remove('over'); });
  dropEl.addEventListener('drop', function (e) { e.preventDefault(); dropEl.classList.remove('over'); if (e.dataTransfer && e.dataTransfer.files.length) loadFile(e.dataTransfer.files[0]); });
  fileEl.addEventListener('change', function (e) { if (e.target.files.length) loadFile(e.target.files[0]); fileEl.value = ''; });
  goBtn.addEventListener('click', go);
  clearBtn.addEventListener('click', function () { bytes = null; pages = 0; name = ''; statusEl.innerHTML = ''; goBtn.disabled = true; clearBtn.disabled = true; updatePreview(); });
  [posEl, fmtEl, startEl, skipEl].forEach(function (el) {
    el.addEventListener('input', updatePreview);
    el.addEventListener('change', updatePreview);
  });
  updatePreview();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.pdfPageNumbers = { recalc: updatePreview };
})();
