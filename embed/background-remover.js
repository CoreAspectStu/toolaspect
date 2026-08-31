/*!
 * ToolAspect Background Remover Embed
 * Install: <div id="ta-background-remover"></div>
 *          <script src="https://toolaspect.com/embed/background-remover.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Model: MODNet (Apache-2.0) via transformers.js (Apache-2.0) — runs on the visitor's device.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-background-remover';
  var BASE = 'https://toolaspect.com/background-remover/';
  var TRANSFORMERS_CDN = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1';

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
    + '.ta-embed-status{text-align:center;color:var(--ta-muted);font-size:.82rem;margin-top:10px;min-height:1.2em}'
    + '.ta-embed-bar{height:7px;background:var(--ta-bg);border-radius:6px;overflow:hidden;margin-top:8px;display:none}'
    + '.ta-embed-bar div{height:100%;width:0;background:var(--ta-accent);border-radius:6px;transition:width .2s}'
    + '.ta-embed-out{margin-top:14px;text-align:center;display:none}'
    + '.ta-embed-out canvas{max-width:100%;border:1px solid var(--ta-border);border-radius:10px;'
    + 'background-image:linear-gradient(45deg,#e2e8f0 25%,transparent 25%),linear-gradient(-45deg,#e2e8f0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e2e8f0 75%),linear-gradient(-45deg,transparent 75%,#e2e8f0 75%);'
    + 'background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-out canvas{background-image:linear-gradient(45deg,#334155 25%,transparent 25%),linear-gradient(-45deg,#334155 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#334155 75%),linear-gradient(-45deg,transparent 75%,#334155 75%)}'
    + '.ta-embed-btn{display:inline-block;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 22px;'
    + 'font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin:12px 4px 0}'
    + '.ta-embed-btn:hover{opacity:.92}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'background-remover');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="background-remover"]')) {
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
    + '<div class="ta-embed-title">Background Remover</div>'
    + '<div class="ta-embed-subtitle">AI cutout that runs on your visitor\'s device — nothing is uploaded</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop">Drop an image here or click to choose<br><small>JPG · PNG · WebP — first use downloads a 6.3 MB model</small></div>'
    + '<input type="file" accept="image/*" hidden>'
    + '<div class="ta-embed-bar"><div></div></div>'
    + '<div class="ta-embed-status"></div>'
    + '<div class="ta-embed-out"><canvas></canvas><br>'
    + '<button type="button" class="ta-embed-btn dl">Download PNG</button>'
    + '<button type="button" class="ta-embed-btn again">Another image</button></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var drop = root.querySelector('.ta-embed-drop');
  var fileInput = root.querySelector('input[type=file]');
  var bar = root.querySelector('.ta-embed-bar');
  var barFill = bar.firstElementChild;
  var status = root.querySelector('.ta-embed-status');
  var out = root.querySelector('.ta-embed-out');
  var canvas = root.querySelector('canvas');
  var dlBtn = root.querySelector('.dl');
  var againBtn = root.querySelector('.again');
  var pipePromise = null;
  var lastBlob = null;

  drop.addEventListener('click', function () { fileInput.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) run(e.dataTransfer.files[0]);
  });
  fileInput.addEventListener('change', function () { if (fileInput.files[0]) run(fileInput.files[0]); });

  function getPipe() {
    if (!pipePromise) {
      pipePromise = import(TRANSFORMERS_CDN).then(function (T) {
        return T.pipeline('background-removal', 'Xenova/modnet', {
          dtype: 'q8',
          progress_callback: function (p) {
            if (p.status === 'progress' && p.total) {
              bar.style.display = 'block';
              status.textContent = 'Downloading model — ' + Math.round(p.progress) + '%';
              barFill.style.width = Math.round(p.progress) + '%';
            }
          }
        });
      });
      pipePromise.catch(function () { pipePromise = null; });
    }
    return pipePromise;
  }

  function run(file) {
    if (!file.type || file.type.indexOf('image/') !== 0) { status.textContent = 'That file is not an image.'; return; }
    out.style.display = 'none';
    status.textContent = 'Loading model…';
    getPipe().then(function (pipe) {
      status.textContent = 'Removing background…';
      return pipe(file);
    }).then(function (res) {
      var img = Array.isArray(res) ? res[0] : res;
      var w, h, data;
      if (img && img.data && img.width) {
        w = img.width; h = img.height; data = img.data;
      } else {
        throw new Error('unexpected output');
      }
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').putImageData(new ImageData(new Uint8ClampedArray(data), w, h), 0, 0);
      bar.style.display = 'none';
      barFill.style.width = '0';
      status.textContent = 'Done — ' + w + '×' + h + ' transparent PNG, processed on-device.';
      out.style.display = 'block';
      canvas.toBlob(function (b) { lastBlob = b; }, 'image/png');
    }).catch(function (err) {
      status.textContent = 'Something went wrong: ' + (err && err.message ? err.message : err);
    });
  }

  dlBtn.addEventListener('click', function () {
    if (!lastBlob) return;
    var a = document.createElement('a');
    a.download = 'cutout.png';
    a.href = URL.createObjectURL(lastBlob);
    a.click();
  });
  againBtn.addEventListener('click', function () {
    out.style.display = 'none';
    fileInput.value = '';
    status.textContent = '';
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.backgroundRemover = {};
})();
