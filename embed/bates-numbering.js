/*!
 * ToolAspect Bates Numbering Embed
 * Install: <div id="ta-bates-numbering"></div>
 *          <script src="https://toolaspect.com/embed/bates-numbering.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: @cantoo/pdf-lib (MIT), loaded on demand from jsdelivr — stamping
 * happens entirely in the visitor's browser; no file ever reaches a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-bates-numbering';
  var BASE = 'https://toolaspect.com/bates-numbering/';
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
    + '.ta-embed-frow{display:flex;align-items:center;gap:8px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:7px 10px;margin-top:6px}'
    + '.ta-embed-frow .nm{flex:1;font-size:.8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
    + '.ta-embed-frow .mt{font-size:.72rem;color:var(--ta-muted);white-space:nowrap;font-family:ui-monospace,Menlo,Consolas,monospace}'
    + '.ta-embed-frow .mt .ok{color:#16a34a}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-frow .mt .ok{color:#4ade80}'
    + '.ta-embed-frow .mt a{color:#16a34a;font-weight:600;text-decoration:none}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-frow .mt a{color:#4ade80}'
    + '.ta-embed-frow .mt .bad{color:#dc2626}'
    + '.ta-embed-ib{background:none;border:1px solid var(--ta-border);border-radius:6px;color:var(--ta-muted);width:24px;height:24px;cursor:pointer;font-size:.72rem;line-height:1}'
    + '.ta-embed-btn{padding:10px 22px;border-radius:8px;border:none;background:var(--ta-accent);color:#fff;font-size:.88rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn:disabled{opacity:.4;cursor:not-allowed}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:12px}'
    + '.ta-embed-opts{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}'
    + '.ta-embed-opt{display:flex;flex-direction:column;gap:3px}'
    + '.ta-embed-opt label{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-opt input,.ta-embed-opt select{padding:8px 10px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.85rem;font-family:inherit;width:100%}'
    + '.ta-embed-preview{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 10px;margin-top:10px;font-size:.78rem;font-family:ui-monospace,Menlo,Consolas,monospace;color:var(--ta-muted)}'
    + '.ta-embed-status{margin-top:10px;font-size:.85rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'bates-numbering');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="bates-numbering"]')) {
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
    + '<div class="ta-embed-title">Bates Numbering</div>'
    + '<div class="ta-embed-subtitle">Sequential stamps across PDFs — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop"><p>📄 Click or drag PDF files here (order matters)</p></div>'
    + '<input type="file" accept="application/pdf,.pdf" multiple style="display:none">'
    + '<div class="ta-embed-list"></div>'
    + '<div class="ta-embed-opts">'
    + '<div class="ta-embed-opt"><label>Prefix</label><input class="ta-embed-prefix" value="BATES-"></div>'
    + '<div class="ta-embed-opt"><label>Start number</label><input class="ta-embed-start" type="number" value="1" min="0"></div>'
    + '<div class="ta-embed-opt"><label>Digits</label><input class="ta-embed-digits" type="number" value="6" min="4" max="10"></div>'
    + '<div class="ta-embed-opt"><label>Position</label><select class="ta-embed-pos"><option value="br">Bottom right</option><option value="bc">Bottom center</option><option value="bl">Bottom left</option><option value="tr">Top right</option><option value="tc">Top center</option><option value="tl">Top left</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-preview"></div>'
    + '<div class="ta-embed-actions">'
    + '<button type="button" class="ta-embed-btn st">Stamp PDFs</button>'
    + '<button type="button" class="ta-embed-btn ghost cl">Clear</button>'
    + '</div>'
    + '<div class="ta-embed-status"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var dropEl = root.querySelector('.ta-embed-drop');
  var fileEl = root.querySelector('input[type="file"]');
  var listEl = root.querySelector('.ta-embed-list');
  var statusEl = root.querySelector('.ta-embed-status');
  var stampBtn = root.querySelector('.st');
  var clearBtn = root.querySelector('.cl');
  var prefixEl = root.querySelector('.ta-embed-prefix');
  var startEl = root.querySelector('.ta-embed-start');
  var digitsEl = root.querySelector('.ta-embed-digits');
  var posEl = root.querySelector('.ta-embed-pos');

  var files = [];
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
    return {
      prefix: prefixEl.value,
      start: parseInt(startEl.value, 10) || 0,
      digits: Math.min(10, Math.max(4, parseInt(digitsEl.value, 10) || 6)),
      position: posEl.value
    };
  }

  async function addFiles(fileList) {
    var arr = Array.prototype.slice.call(fileList).filter(function (f) { return /\.pdf$/i.test(f.name) || f.type === 'application/pdf'; });
    for (var i = 0; i < arr.length; i++) {
      var entry = { file: arr[i], name: arr[i].name, bytes: null, pages: null, err: null, out: null };
      files.push(entry);
      renderList();
      try {
        var PDFLib = await loadLib();
        entry.bytes = await readFile(arr[i]);
        entry.pages = (await PDFLib.PDFDocument.load(entry.bytes)).getPageCount();
      } catch (e) {
        entry.err = /encrypt/i.test(String(e && e.message || e)) ? 'encrypted' : 'unreadable';
      }
      renderList();
    }
  }

  function renderList() {
    listEl.innerHTML = '';
    files.forEach(function (f, i) {
      var row = document.createElement('div');
      row.className = 'ta-embed-frow';
      var st = f.err ? '<span class="bad">' + esc(f.err) + '</span>' : (f.pages !== null ? '<span class="ok">' + f.pages + 'p</span>' : '…');
      var dl = f.out ? ' <a href="' + f.out.url + '" download="' + esc(f.out.name) + '">⬇ ' + esc(f.out.name) + '</a>' : '';
      row.innerHTML = '<span style="font-size:.72rem;color:var(--ta-muted)">' + (i + 1) + '.</span>'
        + '<span class="nm">' + esc(f.name) + '</span><span class="mt">' + st + dl + '</span>'
        + '<button type="button" class="ta-embed-ib" data-a="u">↑</button><button type="button" class="ta-embed-ib" data-a="d">↓</button><button type="button" class="ta-embed-ib" data-a="r">✕</button>';
      row.addEventListener('click', function (e) {
        var a = e.target.getAttribute && e.target.getAttribute('data-a');
        if (!a) return;
        if (a === 'r') { files.splice(i, 1); }
        if (a === 'u' && i > 0) { var t = files[i]; files[i] = files[i - 1]; files[i - 1] = t; }
        if (a === 'd' && i < files.length - 1) { var t2 = files[i]; files[i] = files[i + 1]; files[i + 1] = t2; }
        renderList();
      });
      listEl.appendChild(row);
    });
    updatePreview();
  }

  function updatePreview() {
    var o = opts();
    var total = files.reduce(function (a, f) { return a + (f.pages || 0); }, 0);
    var last = total ? o.start + total - 1 : o.start;
    root.querySelector('.ta-embed-preview').innerHTML = 'First: <strong>' + esc(o.prefix + String(o.start).padStart(o.digits, '0')) + '</strong>'
      + (total ? ' · Last: <strong>' + esc(o.prefix + String(last).padStart(o.digits, '0')) + '</strong> (' + total + ' pages)' : '');
  }

  async function stamp() {
    statusEl.innerHTML = '';
    if (!files.length || files.some(function (f) { return f.err; })) return;
    try {
      var PDFLib = await loadLib();
      var o = opts();
      var counter = o.start;
      var fontCache = {};
      for (var i = 0; i < files.length; i++) {
        var f = files[i];
        var doc = await PDFLib.PDFDocument.load(f.bytes);
        if (!fontCache.f) fontCache.f = await doc.embedFont(PDFLib.StandardFonts.Helvetica);
        var font = fontCache.f;
        var pages = doc.getPages();
        for (var p = 0; p < pages.length; p++) {
          var label = o.prefix + String(counter).padStart(o.digits, '0');
          var tw = font.widthOfTextAtSize(label, 9);
          var page = pages[p];
          var w = page.getWidth(), h = page.getHeight();
          var x = (o.position === 'br' || o.position === 'tr') ? w - 36 - tw : (o.position === 'bl' || o.position === 'tl') ? 36 : (w - tw) / 2;
          var y = o.position[0] === 'b' ? 36 : h - 36 - 9;
          page.drawText(label, { x: x, y: y, size: 9, font: font, color: PDFLib.rgb(0.15, 0.15, 0.15) });
          counter++;
        }
        var bytes = await doc.save();
        if (f.out) URL.revokeObjectURL(f.out.url);
        f.out = { url: URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' })), name: f.name.replace(/\.pdf$/i, '') + '-bates.pdf' };
        renderList();
      }
      statusEl.innerHTML = '✅ Stamped ' + (counter - o.start) + ' pages — download links above.';
    } catch (e) {
      statusEl.innerHTML = '<span style="color:#dc2626">Stamping failed: ' + esc(String(e && e.message || e)) + '</span>';
    }
  }

  dropEl.addEventListener('click', function () { fileEl.click(); });
  dropEl.addEventListener('dragover', function (e) { e.preventDefault(); dropEl.classList.add('over'); });
  dropEl.addEventListener('dragleave', function () { dropEl.classList.remove('over'); });
  dropEl.addEventListener('drop', function (e) { e.preventDefault(); dropEl.classList.remove('over'); if (e.dataTransfer && e.dataTransfer.files.length) addFiles(e.dataTransfer.files); });
  fileEl.addEventListener('change', function (e) { addFiles(e.target.files); fileEl.value = ''; });
  stampBtn.addEventListener('click', stamp);
  clearBtn.addEventListener('click', function () { files = []; statusEl.innerHTML = ''; renderList(); });
  [prefixEl, startEl, digitsEl, posEl].forEach(function (el) {
    el.addEventListener('input', updatePreview);
    el.addEventListener('change', updatePreview);
  });
  renderList();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.batesNumbering = { recalc: renderList };
})();
