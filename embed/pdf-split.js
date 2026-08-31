/*!
 * ToolAspect PDF Split Embed
 * Install: <div id="ta-pdf-split"></div>
 *          <script src="https://toolaspect.com/embed/pdf-split.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: @cantoo/pdf-lib (MIT), loaded on demand from jsdelivr — splits happen
 * entirely in the visitor's browser; no file ever reaches a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pdf-split';
  var BASE = 'https://toolaspect.com/pdf-split/';
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
    + '.ta-embed-drop{border:2px dashed var(--ta-border);border-radius:12px;padding:24px;text-align:center;cursor:pointer}'
    + '.ta-embed-drop.over{border-color:var(--ta-accent)}'
    + '.ta-embed-drop p{color:var(--ta-muted);font-size:.85rem;margin:0}'
    + '.ta-embed-modes{display:flex;gap:6px;flex-wrap:wrap;margin:12px 0}'
    + '.ta-embed-mode{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;padding:6px 12px;font-size:.8rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode.on{border-color:var(--ta-accent);color:var(--ta-text);font-weight:600}'
    + '.ta-embed-input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:9px 12px;font-size:.9rem;font-family:ui-monospace,Menlo,Consolas,monospace;outline:none;box-sizing:border-box}'
    + '.ta-embed-input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-hint{color:var(--ta-muted);font-size:.76rem;margin:5px 0 0}'
    + '.ta-embed-btn{padding:10px 22px;border-radius:8px;border:none;background:var(--ta-accent);color:#fff;font-size:.88rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn:disabled{opacity:.4;cursor:not-allowed}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:12px}'
    + '.ta-embed-plan{font-size:.8rem;color:var(--ta-muted);margin-top:8px}'
    + '.ta-embed-status{margin-top:10px;font-size:.85rem}'
    + '.ta-embed-status a{color:var(--ta-accent);font-weight:600;display:inline-block;margin:3px 8px 0 0}'
    + '.ta-embed-err{color:#dc2626}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pdf-split');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pdf-split"]')) {
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
    + '<div class="ta-embed-title">Split PDF</div>'
    + '<div class="ta-embed-subtitle">Page ranges, fixed chunks, or burst — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop"><p>📄 Click or drag a PDF here</p></div>'
    + '<input type="file" accept="application/pdf,.pdf" style="display:none">'
    + '<div class="ta-embed-body" style="display:none">'
    + '<div class="ta-embed-modes">'
    + '<button type="button" class="ta-embed-mode on" data-mode="ranges">Ranges</button>'
    + '<button type="button" class="ta-embed-mode" data-mode="chunk">Every N pages</button>'
    + '<button type="button" class="ta-embed-mode" data-mode="burst">Burst</button>'
    + '</div>'
    + '<div class="ta-embed-ranges"><input class="ta-embed-input" value="1-3, 5" spellcheck="false" aria-label="Page ranges"><p class="ta-embed-hint">1-3, 5, 8-10 · open-ended 9-</p></div>'
    + '<div class="ta-embed-chunk" style="display:none"><input class="ta-embed-input" style="width:110px" type="number" value="5" min="1" aria-label="Pages per file"><p class="ta-embed-hint">pages per file</p></div>'
    + '<div class="ta-embed-plan"></div>'
    + '<div class="ta-embed-actions"><button type="button" class="ta-embed-btn">Split</button><button type="button" class="ta-embed-btn ghost">Clear</button></div>'
    + '</div>'
    + '<div class="ta-embed-status"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var dropEl = root.querySelector('.ta-embed-drop');
  var fileEl = root.querySelector('input[type="file"]');
  var bodyEl = root.querySelector('.ta-embed-body');
  var statusEl = root.querySelector('.ta-embed-status');
  var planEl = root.querySelector('.ta-embed-plan');
  var rangeWrap = root.querySelector('.ta-embed-ranges');
  var chunkWrap = root.querySelector('.ta-embed-chunk');
  var rangeInput = rangeWrap.querySelector('input');
  var chunkInput = chunkWrap.querySelector('input');
  var splitBtn = root.querySelector('.ta-embed-btn');
  var clearBtn = root.querySelector('.ta-embed-btn.ghost');

  var state = { doc: null, name: '', pages: 0, mode: 'ranges' };
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

  function parseRanges(str, max) {
    var parts = String(str).split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    if (!parts.length) throw new Error('type at least one page or range');
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      var m = p.match(/^(\d+)?\s*-\s*(\d+)?$/);
      if (m) {
        var s = m[1] ? parseInt(m[1], 10) : 1;
        var e = m[2] ? parseInt(m[2], 10) : max;
        if (s < 1 || e < 1 || s > max || e > max) throw new Error('"' + p + '" is outside 1-' + max);
        if (e < s) throw new Error('"' + p + '" ends before it starts');
        out.push([s, e]);
      } else if (/^\d+$/.test(p)) {
        var n = parseInt(p, 10);
        if (n < 1 || n > max) throw new Error('"' + p + '" is outside 1-' + max);
        out.push([n, n]);
      } else {
        throw new Error('"' + p + '" is not a page or range');
      }
    }
    return out;
  }
  function chunks(total, n) {
    if (n < 1) throw new Error('pages per file must be at least 1');
    var out = [];
    for (var s = 1; s <= total; s += n) out.push([s, Math.min(s + n - 1, total)]);
    return out;
  }
  function plan() {
    if (state.mode === 'ranges') return parseRanges(rangeInput.value, state.pages);
    if (state.mode === 'chunk') return chunks(state.pages, parseInt(chunkInput.value, 10) || 1);
    var burst = [];
    for (var i = 1; i <= state.pages; i++) burst.push([i, i]);
    return burst;
  }

  function renderPlan() {
    var p;
    try { p = plan(); }
    catch (e) { planEl.innerHTML = '<span class="ta-embed-err">' + esc(e.message) + '</span>'; splitBtn.disabled = true; return; }
    var covered = p.reduce(function (a, r) { return a + (r[1] - r[0] + 1); }, 0);
    planEl.innerHTML = p.length + ' file' + (p.length > 1 ? 's' : '') + ' · ' + covered + ' of ' + state.pages + ' pages selected';
    splitBtn.disabled = false;
  }

  async function loadFile(file) {
    statusEl.innerHTML = '';
    try {
      var PDFLib = await loadLib();
      var fr = new FileReader();
      var bytes = await new Promise(function (res, rej) { fr.onload = function () { res(new Uint8Array(fr.result)); }; fr.onerror = function () { rej(new Error('unreadable')); }; fr.readAsArrayBuffer(file); });
      state.doc = await PDFLib.PDFDocument.load(bytes);
      state.pages = state.doc.getPageCount();
      state.name = file.name.replace(/\.pdf$/i, '');
      dropEl.querySelector('p').textContent = '📄 ' + file.name + ' — ' + state.pages + ' pages';
      bodyEl.style.display = '';
      renderPlan();
    } catch (e) {
      var msg = String(e && e.message || e);
      statusEl.innerHTML = '<span class="ta-embed-err">' + (/encrypt/i.test(msg) ? 'This PDF is encrypted — unlock it first.' : 'Could not read: ' + esc(msg)) + '</span>';
      bodyEl.style.display = 'none';
    }
  }

  async function split() {
    statusEl.innerHTML = '';
    if (!state.doc) return;
    var p;
    try { p = plan(); }
    catch (e) { statusEl.innerHTML = '<span class="ta-embed-err">' + esc(e.message) + '</span>'; return; }
    try {
      var PDFLib = await loadLib();
      var links = '';
      for (var i = 0; i < p.length; i++) {
        var out = await PDFLib.PDFDocument.create();
        var idxs = [];
        for (var pg = p[i][0]; pg <= p[i][1]; pg++) idxs.push(pg - 1);
        var copied = await out.copyPages(state.doc, idxs);
        copied.forEach(function (x) { out.addPage(x); });
        var bytes = await out.save();
        var name = (state.name || 'part') + '-' + (i + 1) + '.pdf';
        links += '<a href="' + URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' })) + '" download="' + esc(name) + '">⬇ ' + esc(name) + '</a>';
      }
      statusEl.innerHTML = '✅ ' + p.length + ' file' + (p.length > 1 ? 's' : '') + ' ready: ' + links;
    } catch (e) {
      statusEl.innerHTML = '<span class="ta-embed-err">Split failed: ' + esc(String(e && e.message || e)) + '</span>';
    }
  }

  dropEl.addEventListener('click', function () { fileEl.click(); });
  dropEl.addEventListener('dragover', function (e) { e.preventDefault(); dropEl.classList.add('over'); });
  dropEl.addEventListener('dragleave', function () { dropEl.classList.remove('over'); });
  dropEl.addEventListener('drop', function (e) { e.preventDefault(); dropEl.classList.remove('over'); if (e.dataTransfer && e.dataTransfer.files.length) loadFile(e.dataTransfer.files[0]); });
  fileEl.addEventListener('change', function (e) { if (e.target.files.length) loadFile(e.target.files[0]); fileEl.value = ''; });
  root.querySelectorAll('.ta-embed-mode').forEach(function (b) {
    b.addEventListener('click', function () {
      root.querySelectorAll('.ta-embed-mode').forEach(function (x) { x.classList.remove('on'); });
      b.classList.add('on');
      state.mode = b.getAttribute('data-mode');
      rangeWrap.style.display = state.mode === 'ranges' ? '' : 'none';
      chunkWrap.style.display = state.mode === 'chunk' ? '' : 'none';
      if (state.doc) renderPlan();
    });
  });
  rangeInput.addEventListener('input', function () { if (state.doc) renderPlan(); });
  chunkInput.addEventListener('input', function () { if (state.doc) renderPlan(); });
  splitBtn.addEventListener('click', split);
  clearBtn.addEventListener('click', function () {
    state = { doc: null, name: '', pages: 0, mode: 'ranges' };
    statusEl.innerHTML = ''; planEl.innerHTML = '';
    bodyEl.style.display = 'none';
    dropEl.querySelector('p').textContent = '📄 Click or drag a PDF here';
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.pdfSplit = { recalc: renderPlan };
})();
