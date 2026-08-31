/*!
 * ToolAspect Image Upscaler Embed
 * Install: <div id="ta-image-upscaler"></div>
 *          <script src="https://toolaspect.com/embed/image-upscaler.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: UpscalerJS (MIT) esrgan-slim 2x/4x on TensorFlow.js — runs on the visitor's device.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-image-upscaler';
  var BASE = 'https://toolaspect.com/image-upscaler/';
  var MODEL_BASE = 'https://cdn.jsdelivr.net/npm/@upscalerjs/esrgan-slim@1.0.0';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-drop{border:2px dashed var(--ta-border);border-radius:10px;padding:26px 12px;text-align:center;cursor:pointer;color:var(--ta-muted);font-size:.92rem}'
    + '.ta-embed-drop:hover{border-color:var(--ta-accent)}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-row label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600}'
    + '.ta-embed-row select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:9px 11px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-bar{height:7px;background:var(--ta-bg);border-radius:6px;overflow:hidden;margin-top:10px;display:none}'
    + '.ta-embed-bar div{height:100%;width:0;background:var(--ta-accent);border-radius:6px;transition:width .15s}'
    + '.ta-embed-status{text-align:center;color:var(--ta-muted);font-size:.82rem;margin-top:10px;min-height:1.2em}'
    + '.ta-embed-out{margin-top:14px;text-align:center;display:none}'
    + '.ta-embed-out img{max-width:100%;border:1px solid var(--ta-border);border-radius:10px}'
    + '.ta-embed-btn{display:inline-block;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 22px;'
    + 'font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin:12px 4px 0}'
    + '.ta-embed-btn:hover{opacity:.92}'
    + '.ta-embed-btn:disabled{opacity:.45;cursor:not-allowed}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'image-upscaler');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="image-upscaler"]')) {
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
    + '<div class="ta-embed-title">Image Upscaler</div>'
    + '<div class="ta-embed-subtitle">2x / 4x ESRGAN enlargement that runs on your visitor\'s device</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop">Drop an image or click to choose<br><small>best under 1200 px on the long side for 4x</small></div>'
    + '<input type="file" accept="image/*" hidden>'
    + '<div class="ta-embed-row">'
    + '<div><label>Scale</label><select class="ta-scale"><option value="2">2x — 800×600 → 1600×1200</option><option value="4">4x — 800×600 → 3200×2400</option></select></div>'
    + '<div><label>&nbsp;</label><button type="button" class="ta-embed-btn go" style="margin:0;width:100%" disabled>Upscale</button></div>'
    + '</div>'
    + '<div class="ta-embed-bar"><div></div></div>'
    + '<div class="ta-embed-status"></div>'
    + '<div class="ta-embed-out"><img alt="Upscaled result"><br><button type="button" class="ta-embed-btn dl">Download</button></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var drop = root.querySelector('.ta-embed-drop');
  var fileInput = root.querySelector('input[type=file]');
  var goBtn = root.querySelector('.go');
  var dlBtn = root.querySelector('.dl');
  var bar = root.querySelector('.ta-embed-bar');
  var barFill = bar.firstElementChild;
  var status = root.querySelector('.ta-embed-status');
  var out = root.querySelector('.ta-embed-out');
  var outImg = root.querySelector('img');
  var srcBitmap = null;
  var outBlob = null;
  var upscalers = {};

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('failed to load ' + src)); };
      (document.head || document.documentElement).appendChild(s);
    });
  }
  function getUpscaler(scale) {
    if (upscalers[scale]) return Promise.resolve(upscalers[scale]);
    status.textContent = 'Loading engine + model (cached after first use)…';
    var p = loadScript('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js')
      .then(function () { return loadScript('https://cdn.jsdelivr.net/npm/upscaler@1.0.0/dist/browser/umd/upscaler.min.js'); })
      .then(function () { return loadScript(MODEL_BASE + '/dist/umd/models/esrgan-slim/src/x' + scale + '/index.min.js'); })
      .then(function () {
        var global = window['ESRGANSlim' + scale + 'x'];
        if (!window.Upscaler || !global) throw new Error('model unavailable');
        var model = Object.assign({}, global, { path: MODEL_BASE + '/models/x' + scale + '/model.json' });
        upscalers[scale] = new window.Upscaler({ model: model });
        return upscalers[scale];
      });
    p.catch(function () { upscalers[scale] = null; });
    return p;
  }

  drop.addEventListener('click', function () { fileInput.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) accept(e.dataTransfer.files[0]);
  });
  fileInput.addEventListener('change', function () { if (fileInput.files[0]) accept(fileInput.files[0]); });

  function accept(f) {
    if (!f.type || f.type.indexOf('image/') !== 0) { status.textContent = 'That file is not an image.'; return; }
    createImageBitmap(f).then(function (bmp) {
      srcBitmap = bmp;
      drop.textContent = f.name + ' — ' + bmp.width + '×' + bmp.height;
      goBtn.disabled = false;
      out.style.display = 'none';
      status.textContent = 'Ready.';
    }).catch(function () { status.textContent = 'Could not decode that image.'; });
  }

  goBtn.addEventListener('click', function () {
    if (!srcBitmap) return;
    var scale = root.querySelector('.ta-scale').value;
    var long = Math.max(srcBitmap.width, srcBitmap.height);
    var cap = scale === '4' ? 1200 : 2000;
    if (long > cap) {
      status.textContent = 'Too large for ' + scale + 'x in-browser (cap ' + cap + ' px long side).';
      return;
    }
    goBtn.disabled = true;
    bar.style.display = 'block';
    status.textContent = 'Upscaling…';
    var c = document.createElement('canvas');
    c.width = srcBitmap.width; c.height = srcBitmap.height;
    c.getContext('2d').drawImage(srcBitmap, 0, 0);
    getUpscaler(scale).then(function (up) {
      return up.upscale(c, { output: 'base64', patchSize: 64, padding: 2, progress: function (r) { barFill.style.width = Math.round(r * 100) + '%'; } });
    }).then(function (dataUrl) {
      var img = new Image();
      return new Promise(function (res) { img.onload = function () { res(img); }; img.src = dataUrl; });
    }).then(function (img) {
      var c2 = document.createElement('canvas');
      c2.width = img.width; c2.height = img.height;
      c2.getContext('2d').drawImage(img, 0, 0);
      return new Promise(function (res) { c2.toBlob(res, 'image/png'); });
    }).then(function (blob) {
      outBlob = blob;
      outImg.src = URL.createObjectURL(blob);
      out.style.display = 'block';
      bar.style.display = 'none';
      barFill.style.width = '0';
      status.textContent = 'Done — ' + imgDims(srcBitmap) + ' → ' + blobSizePx(blob);
      goBtn.disabled = false;
    }).catch(function (err) {
      bar.style.display = 'none';
      status.textContent = 'Upscale failed: ' + (err && err.message ? err.message : err);
      goBtn.disabled = false;
    });
  });
  function imgDims(b) { return b.width + '×' + b.height; }
  function blobSizePx(blob) { return (blob.size / 1024).toFixed(0) + ' KB PNG'; }

  dlBtn.addEventListener('click', function () {
    if (!outBlob) return;
    var a = document.createElement('a');
    a.download = 'upscaled.png';
    a.href = URL.createObjectURL(outBlob);
    a.click();
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.imageUpscaler = {};
})();
