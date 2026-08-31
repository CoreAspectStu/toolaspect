/*!
 * ToolAspect Image to Text OCR Embed
 * Install: <div id="ta-image-to-text-ocr"></div>
 *          <script src="https://toolaspect.com/embed/image-to-text-ocr.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: tesseract.js@7.0.0 (Apache-2.0) + wasm core, lazy-loaded from
 * jsdelivr; models from tessdata.projectnaptha.com. Recognition runs in the
 * visitor's browser — images never reach a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-image-to-text-ocr';
  var BASE = 'https://toolaspect.com/image-to-text-ocr/';
  var TESS_JS = 'https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/tesseract.min.js';
  var TESS_WORKER = 'https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/worker.min.js';
  var TESS_CORE = 'https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0';
  var LANG_STD = 'https://tessdata.projectnaptha.com/4.0.0';
  var LANG_FAST = 'https://tessdata.projectnaptha.com/4.0.0_fast';

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
    + '.ta-embed-img{display:flex;align-items:center;gap:8px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:7px 10px;margin-top:6px;font-size:.8rem}'
    + '.ta-embed-img img{width:34px;height:34px;object-fit:cover;border-radius:6px}'
    + '.ta-embed-img .nm{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
    + '.ta-embed-img .mt{color:var(--ta-muted);font-size:.72rem;font-family:ui-monospace,Menlo,Consolas,monospace;white-space:nowrap}'
    + '.ta-embed-img .mt .ok{color:#16a34a}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-img .mt .ok{color:#4ade80}'
    + '.ta-embed-btn{padding:10px 22px;border-radius:8px;border:none;background:var(--ta-accent);color:#fff;font-size:.88rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn:disabled{opacity:.4;cursor:not-allowed}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:12px}'
    + '.ta-embed-opts{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}'
    + '.ta-embed-opt{display:flex;flex-direction:column;gap:3px}'
    + '.ta-embed-opt label{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-opt select{padding:8px 10px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.85rem;font-family:inherit;width:100%}'
    + '.ta-embed-out{width:100%;min-height:130px;padding:10px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.82rem;font-family:ui-monospace,Menlo,Consolas,monospace;margin-top:10px;box-sizing:border-box}'
    + '.ta-embed-status{margin-top:10px;font-size:.85rem;color:var(--ta-muted)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'image-to-text-ocr');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="image-to-text-ocr"]')) {
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
    + '<div class="ta-embed-title">Image to Text OCR</div>'
    + '<div class="ta-embed-subtitle">Read text from images — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop"><p>🖼️ Click or drag an image here (PNG, JPG, WebP)</p></div>'
    + '<input type="file" accept="image/*" style="display:none">'
    + '<div class="ta-embed-list"></div>'
    + '<div class="ta-embed-opts">'
    + '<div class="ta-embed-opt"><label>Language</label><select class="ta-embed-lang">'
    + '<option value="eng" selected>English</option><option value="spa">Spanish</option><option value="fra">French</option>'
    + '<option value="deu">German</option><option value="ita">Italian</option><option value="por">Portuguese</option>'
    + '<option value="rus">Russian</option><option value="chi_sim">Chinese (Simplified)</option>'
    + '<option value="jpn">Japanese</option><option value="kor">Korean</option><option value="ara">Arabic</option><option value="hin">Hindi</option></select></div>'
    + '<div class="ta-embed-opt"><label>Model</label><select class="ta-embed-q"><option value="fast">Fast</option><option value="standard">Standard (most accurate)</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-actions">'
    + '<button type="button" class="ta-embed-btn go" disabled>Recognize text</button>'
    + '<button type="button" class="ta-embed-btn ghost cl" disabled>Clear</button>'
    + '</div>'
    + '<textarea class="ta-embed-out" spellcheck="false" placeholder="Recognized text appears here…" aria-label="Recognized text"></textarea>'
    + '<div class="ta-embed-status">Images are processed locally in your browser.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var dropEl = root.querySelector('.ta-embed-drop');
  var fileEl = root.querySelector('input[type="file"]');
  var listEl = root.querySelector('.ta-embed-list');
  var outEl = root.querySelector('.ta-embed-out');
  var statusEl = root.querySelector('.ta-embed-status');
  var goBtn = root.querySelector('.go');
  var clearBtn = root.querySelector('.cl');
  var langEl = root.querySelector('.ta-embed-lang');
  var qEl = root.querySelector('.ta-embed-q');

  var files = [];
  var libPromise = null;

  function loadLib() {
    if (window.Tesseract) return Promise.resolve(window.Tesseract);
    if (!libPromise) {
      libPromise = new Promise(function (res, rej) {
        var s = document.createElement('script');
        s.src = TESS_JS;
        s.onload = function () { res(window.Tesseract); };
        s.onerror = function () { libPromise = null; rej(new Error('tesseract.js failed to load')); };
        (document.head || document.documentElement).appendChild(s);
      });
    }
    return libPromise;
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function addFiles(fileList) {
    var arr = Array.prototype.slice.call(fileList).filter(function (f) { return /^image\//.test(f.type) || /\.(png|jpe?g|webp|bmp|gif)$/i.test(f.name); });
    arr.forEach(function (f) {
      var entry = { file: f, name: f.name, thumb: URL.createObjectURL(f), canvas: null, text: null, err: null };
      files.push(entry);
      var img = new Image();
      img.onload = function () {
        var c = document.createElement('canvas');
        c.width = img.naturalWidth; c.height = img.naturalHeight;
        c.getContext('2d').drawImage(img, 0, 0);
        entry.canvas = c;
        renderList();
      };
      img.onerror = function () { entry.err = 'unreadable'; renderList(); };
      img.src = entry.thumb;
    });
    renderList();
  }

  function renderList() {
    listEl.innerHTML = '';
    files.forEach(function (f, i) {
      var row = document.createElement('div');
      row.className = 'ta-embed-img';
      var st = f.err ? '<span style="color:#dc2626">' + esc(f.err) + '</span>' : (f.text != null ? '<span class="ok">done</span>' : (f.canvas ? f.canvas.width + '×' + f.canvas.height : '…'));
      row.innerHTML = '<img src="' + f.thumb + '" alt=""><span class="nm">' + esc(f.name) + '</span><span class="mt">' + st + '</span><button type="button" data-r="' + i + '" style="background:none;border:1px solid var(--ta-border);border-radius:6px;color:var(--ta-muted);width:24px;height:24px;cursor:pointer;font-size:.72rem">✕</button>';
      row.addEventListener('click', function (e) {
        if (e.target.getAttribute('data-r')) { files.splice(i, 1); renderList(); }
      });
      listEl.appendChild(row);
    });
    goBtn.disabled = !files.length;
    clearBtn.disabled = !files.length;
  }

  async function go() {
    var work = files.filter(function (f) { return !f.err; });
    if (!work.length) return;
    goBtn.disabled = true;
    statusEl.textContent = 'Loading the OCR engine (one-time download, then cached) …';
    var worker = null;
    try {
      var T = await loadLib();
      worker = await T.createWorker(langEl.value, 1, {
        workerPath: TESS_WORKER, corePath: TESS_CORE,
        langPath: qEl.value === 'fast' ? LANG_FAST : LANG_STD,
        logger: function (m) { if (m && m.status) statusEl.textContent = m.status + (m.progress != null ? ' ' + Math.round(m.progress * 100) + '%' : ''); }
      });
      var all = [];
      for (var i = 0; i < work.length; i++) {
        while (!work[i].canvas) await new Promise(function (r) { setTimeout(r, 50); });
        statusEl.textContent = 'Recognizing ' + work[i].name + ' (' + (i + 1) + '/' + work.length + ') …';
        var r = await worker.recognize(work[i].canvas);
        work[i].text = (r && r.data && r.data.text != null) ? r.data.text : '';
        all.push('--- ' + work[i].name + ' ---\n' + work[i].text.trim());
      }
      await worker.terminate();
      outEl.value = all.join('\n\n');
      statusEl.textContent = 'Done — proofread digits and names; OCR is good, not psychic.';
    } catch (e) {
      if (worker && worker.terminate) try { await worker.terminate(); } catch (_) {}
      statusEl.innerHTML = '<span style="color:#dc2626">OCR failed: ' + esc(String(e && e.message || e)) + '</span>';
    }
    goBtn.disabled = false;
  }

  dropEl.addEventListener('click', function () { fileEl.click(); });
  dropEl.addEventListener('dragover', function (e) { e.preventDefault(); dropEl.classList.add('over'); });
  dropEl.addEventListener('dragleave', function () { dropEl.classList.remove('over'); });
  dropEl.addEventListener('drop', function (e) { e.preventDefault(); dropEl.classList.remove('over'); if (e.dataTransfer && e.dataTransfer.files.length) addFiles(e.dataTransfer.files); });
  fileEl.addEventListener('change', function (e) { addFiles(e.target.files); fileEl.value = ''; });
  goBtn.addEventListener('click', go);
  clearBtn.addEventListener('click', function () { files = []; outEl.value = ''; renderList(); statusEl.textContent = 'Images are processed locally in your browser.'; });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.imageToTextOcr = { recalc: renderList };
})();
