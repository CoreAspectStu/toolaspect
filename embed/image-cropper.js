/*!
 * ToolAspect Image Cropper Embed (Cropper.js)
 * Install: <div id="ta-image-cropper"></div>
 *          <script src="https://toolaspect.com/embed/image-cropper.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: fengyuanchen/cropperjs v1.6.2 (MIT), loaded from toolaspect.com.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-image-cropper';
  var BASE = 'https://toolaspect.com/image-cropper/';
  var LIB_JS = 'https://toolaspect.com/image-cropper/vendor/cropper.min.js';
  var LIB_CSS = 'https://toolaspect.com/image-cropper/vendor/cropper.min.css';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-presets{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}'
    + '.ta-embed-presets button{padding:6px 10px;border:1px solid var(--ta-border);background:var(--ta-bg);color:var(--ta-text);border-radius:8px;font-size:.78rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-presets button.on{border-color:var(--ta-accent);color:var(--ta-accent);font-weight:600}'
    + '.ta-embed-drop{border:2px dashed var(--ta-border);border-radius:10px;padding:22px 12px;text-align:center;color:var(--ta-muted);cursor:pointer;font-size:.9rem}'
    + '.ta-embed-drop:hover{border-color:var(--ta-accent)}'
    + '.ta-embed-stage{max-width:100%;height:360px;background:#111;overflow:hidden;border-radius:8px;margin-top:12px}'
    + '.ta-embed-stage img{display:block;max-width:100%}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:10px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'image-cropper');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="image-cropper"]')) {
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

  var PRESETS = [
    { label: 'YT 1280×720', w: 1280, h: 720 },
    { label: 'IG 1080×1080', w: 1080, h: 1080 },
    { label: 'Story 1080×1920', w: 1080, h: 1920 },
    { label: 'LinkedIn 1584×396', w: 1584, h: 396 },
    { label: 'X 1500×500', w: 1500, h: 500 }
  ];

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Image Cropper</div>'
    + '<div class="ta-embed-subtitle">Crop to exact social sizes — runs in the browser</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-presets"></div>'
    + '<div class="ta-embed-drop">Click to choose an image</div>'
    + '<input type="file" accept="image/*" style="display:none">'
    + '<div class="ta-embed-stage" style="display:none"><img alt="crop source"></div>'
    + '<button class="ta-embed-btn" type="button" style="display:none">Download Crop</button>'
    + '<div class="ta-embed-status">Pick a size, then an image.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var presetWrap = root.querySelector('.ta-embed-presets');
  var active = PRESETS[0];
  PRESETS.forEach(function (p, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = p.label;
    if (i === 0) b.className = 'on';
    b.addEventListener('click', function () {
      active = p;
      presetWrap.querySelectorAll('button').forEach(function (x) { x.className = ''; });
      b.className = 'on';
      applyRatio();
    });
    presetWrap.appendChild(b);
  });

  var drop = root.querySelector('.ta-embed-drop');
  var input = root.querySelector('input');
  var stage = root.querySelector('.ta-embed-stage');
  var img = stage.querySelector('img');
  var btn = root.querySelector('.ta-embed-btn');
  var status = root.querySelector('.ta-embed-status');
  var cropper = null, objectUrl = null, currentFile = null;

  function applyRatio() {
    if (cropper) cropper.setAspectRatio(active.w / active.h);
  }

  function loadLib(cb) {
    if (window.Cropper) return cb();
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = LIB_CSS;
    document.head.appendChild(link);
    var s = document.createElement('script');
    s.src = LIB_JS;
    s.onload = cb;
    s.onerror = function () { status.textContent = 'Could not load Cropper.js. Try the full tool at ' + BASE; };
    (document.head || document.documentElement).appendChild(s);
  }

  drop.addEventListener('click', function () { input.click(); });

  input.addEventListener('change', function () {
    var file = input.files && input.files[0];
    if (!file) return;
    currentFile = file;
    status.textContent = 'Loading Cropper.js…';
    loadLib(function () {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      objectUrl = URL.createObjectURL(file);
      drop.style.display = 'none';
      stage.style.display = '';
      btn.style.display = '';
      if (cropper) { cropper.destroy(); cropper = null; }
      img.src = objectUrl;
      img.onload = function () {
        cropper = new window.Cropper(img, {
          viewMode: 1, dragMode: 'move', autoCropArea: 1, background: false, responsive: true,
          ready: applyRatio
        });
        status.textContent = 'Drag the crop box, then download at ' + active.w + '×' + active.h + '.';
      };
    });
  });

  btn.addEventListener('click', function () {
    if (!cropper) return;
    var canvas = cropper.getCroppedCanvas({ width: active.w, height: active.h, imageSmoothingEnabled: true, imageSmoothingQuality: 'high' });
    if (!canvas) { status.textContent = 'Crop region is empty.'; return; }
    var type = 'image/jpeg';
    canvas.toBlob(function (blob) {
      var url = URL.createObjectURL(blob);
      var name = (currentFile.name.replace(/\.[^.]+$/, '') + '-' + active.w + 'x' + active.h + '.jpg');
      var a = document.createElement('a');
      a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
      status.textContent = 'Exported ' + name + ' (' + (blob.size / 1024).toFixed(0) + ' KB).';
    }, type, 0.9);
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.imageCropper = { version: '1.0' };
})();
