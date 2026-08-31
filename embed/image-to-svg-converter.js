/*!
 * ToolAspect Image to SVG Converter Embed
 * Install: <div id="ta-image-to-svg-converter"></div>
 *          <script src="https://toolaspect.com/embed/image-to-svg-converter.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: imagetracerjs 1.2.6 (public domain, Unlicense), loaded on demand
 * from jsdelivr — tracing happens entirely in the visitor's browser.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-image-to-svg-converter';
  var BASE = 'https://toolaspect.com/image-to-svg-converter/';
  var LIB_URL = 'https://cdn.jsdelivr.net/npm/imagetracerjs@1.2.6/imagetracer_v1.2.6.js';

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
    + '.ta-embed-preview{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-pane{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:6px;text-align:center}'
    + '.ta-embed-pane .lbl{font-size:.68rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.05em;margin:2px 0 4px}'
    + '.ta-embed-pane .box{height:150px;display:flex;align-items:center;justify-content:center;background:repeating-conic-gradient(#e2e8f0 0% 25%,#f8fafc 0% 50%) 50%/12px 12px;border-radius:6px;overflow:hidden}'
    + '.ta-embed-pane img,.ta-embed-pane svg{max-width:100%;max-height:150px}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-pane .box{background:repeating-conic-gradient(#334155 0% 25%,#1e293b 0% 50%) 50%/12px 12px}'
    + '.ta-embed-stats{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;justify-content:center;font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-stats span{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:6px;padding:3px 8px}'
    + '.ta-embed-stats strong{color:var(--ta-text)}'
    + '.ta-embed-status{margin-top:10px;font-size:.85rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'image-to-svg-converter');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="image-to-svg-converter"]')) {
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
    + '<div class="ta-embed-title">Image to SVG Converter</div>'
    + '<div class="ta-embed-subtitle">Trace PNG/JPG to real vector paths — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop"><p>🖼️ Click or drag an image here</p></div>'
    + '<input type="file" accept="image/*" style="display:none">'
    + '<div class="ta-embed-opts">'
    + '<div class="ta-embed-opt"><label>Colors (2–64)</label><input class="ta-embed-colors" type="number" value="16" min="2" max="64"></div>'
    + '<div class="ta-embed-opt"><label>Ignore specks (0–32)</label><input class="ta-embed-omit" type="number" value="8" min="0" max="32"></div>'
    + '</div>'
    + '<div class="ta-embed-actions">'
    + '<button type="button" class="ta-embed-btn tr">Trace to SVG</button>'
    + '<button type="button" class="ta-embed-btn ghost dl" disabled>Download SVG</button>'
    + '</div>'
    + '<div class="ta-embed-preview" style="display:none">'
    + '<div class="ta-embed-pane"><div class="lbl">Original</div><div class="box ob"></div></div>'
    + '<div class="ta-embed-pane"><div class="lbl">Traced SVG</div><div class="box tb"></div></div>'
    + '</div>'
    + '<div class="ta-embed-stats" style="display:none"></div>'
    + '<div class="ta-embed-status"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var dropEl = root.querySelector('.ta-embed-drop');
  var fileEl = root.querySelector('input[type="file"]');
  var statusEl = root.querySelector('.ta-embed-status');
  var traceBtn = root.querySelector('.tr');
  var dlBtn = root.querySelector('.dl');
  var colorsEl = root.querySelector('.ta-embed-colors');
  var omitEl = root.querySelector('.ta-embed-omit');
  var previewEl = root.querySelector('.ta-embed-preview');
  var statsEl = root.querySelector('.ta-embed-stats');
  var origBox = root.querySelector('.ob');
  var traceBox = root.querySelector('.tb');

  var file = null, img = null, svg = null, libPromise = null;

  function loadLib() {
    if (window.ImageTracer) return Promise.resolve(window.ImageTracer);
    if (!libPromise) {
      libPromise = new Promise(function (res, rej) {
        var s = document.createElement('script');
        s.src = LIB_URL;
        s.onload = function () { res(window.ImageTracer); };
        s.onerror = function () { libPromise = null; rej(new Error('tracer engine failed to load')); };
        (document.head || document.documentElement).appendChild(s);
      });
    }
    return libPromise;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function fmtSize(b) { return b >= 1048576 ? (b / 1048576).toFixed(2) + ' MB' : (b >= 1024 ? (b / 1024).toFixed(1) + ' KB' : b + ' B'); }
  function readImg(f) {
    return new Promise(function (res, rej) {
      var img = new Image();
      img.onload = function () { res(img); };
      img.onerror = function () { rej(new Error('not a readable image')); };
      img.src = URL.createObjectURL(f);
    });
  }
  function imgdata(image) {
    var c = document.createElement('canvas');
    c.width = image.naturalWidth || image.width;
    c.height = image.naturalHeight || image.height;
    var ctx = c.getContext('2d');
    ctx.drawImage(image, 0, 0);
    return ctx.getImageData(0, 0, c.width, c.height);
  }

  async function load(fileList) {
    var f = Array.prototype.slice.call(fileList).filter(function (x) { return /^image\//.test(x.type) || /\.(png|jpe?g|webp|gif|bmp)$/i.test(x.name); })[0];
    if (!f) return;
    file = f; svg = null;
    dlBtn.disabled = true;
    try {
      img = await readImg(f);
      origBox.innerHTML = '';
      var mi = document.createElement('img');
      mi.src = img.src;
      origBox.appendChild(mi);
      traceBox.innerHTML = '';
      previewEl.style.display = 'grid';
      statsEl.style.display = 'none';
    } catch (e) {
      statusEl.innerHTML = '<span style="color:#dc2626">' + esc(String(e && e.message || e)) + '</span>';
    }
  }

  async function trace() {
    statusEl.innerHTML = '';
    if (!img) return;
    try {
      var ImageTracer = await loadLib();
      var imgd = imgdata(img);
      var opts = { numberofcolors: Math.min(64, Math.max(2, parseInt(colorsEl.value, 10) || 16)), pathomit: Math.min(32, Math.max(0, parseInt(omitEl.value, 10) || 0)) };
      svg = ImageTracer.imagedataToSVG(imgd, opts);
      traceBox.innerHTML = svg;
      dlBtn.disabled = false;
      var paths = (svg.match(/<path/g) || []).length;
      var bytes = new Blob([svg]).size;
      statsEl.style.display = 'flex';
      statsEl.innerHTML = '<span>' + imgd.width + '×' + imgd.height + '</span><span>' + paths + ' paths</span><span><strong>' + fmtSize(bytes) + '</strong> SVG</span>';
    } catch (e) {
      statusEl.innerHTML = '<span style="color:#dc2626">Tracing failed: ' + esc(String(e && e.message || e)) + '</span>';
    }
  }

  dropEl.addEventListener('click', function () { fileEl.click(); });
  dropEl.addEventListener('dragover', function (e) { e.preventDefault(); dropEl.classList.add('over'); });
  dropEl.addEventListener('dragleave', function () { dropEl.classList.remove('over'); });
  dropEl.addEventListener('drop', function (e) { e.preventDefault(); dropEl.classList.remove('over'); if (e.dataTransfer && e.dataTransfer.files.length) load(e.dataTransfer.files); });
  fileEl.addEventListener('change', function (e) { load(e.target.files); fileEl.value = ''; });
  traceBtn.addEventListener('click', trace);
  dlBtn.addEventListener('click', function () {
    if (!svg) return;
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
    a.download = (file ? file.name.replace(/\.[^.]+$/, '') : 'traced') + '.svg';
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.imageToSvgConverter = { recalc: function () {} };
})();
