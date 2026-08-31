/*!
 * ToolAspect Image Color Picker Embed
 * Install: <div id="ta-image-color-picker"></div>
 *          <script src="https://toolaspect.com/embed/image-color-picker.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: ColorThief (MIT, lokesh/color-thief) v2.6.0 loaded on demand from
 * jsdelivr — the image is processed in the visitor's browser and never uploaded.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-image-color-picker';
  var BASE = 'https://toolaspect.com/image-color-picker/';
  var LIB_URL = 'https://cdn.jsdelivr.net/npm/colorthief@2.6.0/dist/color-thief.umd.js';

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
    + '.ta-embed-imgwrap{margin-top:12px;text-align:center}'
    + '.ta-embed-imgwrap img{max-width:100%;border-radius:10px;border:1px solid var(--ta-border);cursor:crosshair}'
    + '.ta-embed-hover{display:flex;align-items:center;gap:8px;justify-content:center;margin-top:8px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.76rem;color:var(--ta-muted)}'
    + '.ta-embed-hover .sw{width:20px;height:20px;border-radius:6px;border:1px solid var(--ta-border)}'
    + '.ta-embed-pick{display:flex;gap:14px;align-items:center;margin-top:12px;flex-wrap:wrap}'
    + '.ta-embed-big{width:84px;height:84px;border-radius:10px;border:1px solid var(--ta-border);flex:none}'
    + '.ta-embed-vals{flex:1;min-width:200px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.82rem}'
    + '.ta-embed-vals div{margin:2px 0}'
    + '.ta-embed-vals button{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:6px;color:var(--ta-text);font-family:inherit;font-size:.72rem;padding:2px 8px;margin-left:6px;cursor:pointer}'
    + '.ta-embed-pal{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}'
    + '.ta-embed-pal .p{width:52px;border-radius:8px;border:1px solid var(--ta-border);cursor:pointer;overflow:hidden}'
    + '.ta-embed-pal .f{height:42px}'
    + '.ta-embed-pal .c{display:block;text-align:center;font-size:.58rem;font-family:ui-monospace,Menlo,Consolas,monospace;padding:2px 0;background:var(--ta-bg);color:var(--ta-muted)}'
    + '.ta-embed-hint{color:var(--ta-muted);font-size:.76rem;margin:8px 0 0}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'image-color-picker');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="image-color-picker"]')) {
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
    + '<div class="ta-embed-title">Image Color Picker</div>'
    + '<div class="ta-embed-subtitle">Eyedropper + dominant palette — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop"><p>🖼️ Click or drag an image here</p></div>'
    + '<input type="file" accept="image/*" style="display:none">'
    + '<div class="ta-embed-area"></div>'
    + '<div class="ta-embed-out"></div>'
    + '<p class="ta-embed-hint">Hover to preview, click a pixel to copy its HEX.</p>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var dropEl = root.querySelector('.ta-embed-drop');
  var fileEl = root.querySelector('input[type="file"]');
  var areaEl = root.querySelector('.ta-embed-area');
  var outEl = root.querySelector('.ta-embed-out');

  var state = { img: null, w: 0, h: 0 };
  var libPromise = null;

  function loadLib() {
    if (window.ColorThief) return Promise.resolve();
    if (!libPromise) {
      libPromise = new Promise(function (res, rej) {
        var s = document.createElement('script');
        s.src = LIB_URL;
        s.onload = res;
        s.onerror = function () { libPromise = null; rej(new Error('ColorThief failed to load')); };
        (document.head || document.documentElement).appendChild(s);
      });
    }
    return libPromise;
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g,'&lt;'); }
  function hex(r, g, b) { var n = (1 << 24) + (r << 16) + (g << 8) + b; return '#' + n.toString(16).slice(1).toUpperCase(); }

  function copyText(t) {
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t); return; }
    var ta = document.createElement('textarea'); ta.value = t; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  function pixelAt(e) {
    var imgEl = areaEl.querySelector('img');
    var rect = imgEl.getBoundingClientRect();
    var x = Math.max(0, Math.min(state.w - 1, Math.round((e.clientX - rect.left) * (state.w / rect.width))));
    var y = Math.max(0, Math.min(state.h - 1, Math.round((e.clientY - rect.top) * (state.h / rect.height))));
    var c = document.createElement('canvas'); c.width = state.w; c.height = state.h;
    var ctx = c.getContext('2d'); ctx.drawImage(state.img, 0, 0);
    var d = ctx.getImageData(x, y, 1, 1).data;
    return [d[0], d[1], d[2]];
  }

  function renderColor(rgb) {
    var h = hex(rgb[0], rgb[1], rgb[2]);
    var pal = outEl.querySelector('.ta-embed-pal');
    var pick = document.createElement('div');
    pick.className = 'ta-embed-pick';
    pick.innerHTML = '<div class="ta-embed-big" style="background:' + h + '" title="' + h + '"></div>'
      + '<div class="ta-embed-vals">'
      + '<div>HEX ' + h + ' <button data-t="' + h + '">copy</button></div>'
      + '<div>RGB rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ') <button data-t="rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')">copy</button></div>'
      + '</div>';
    pick.addEventListener('click', function (e) {
      var t = e.target.getAttribute && e.target.getAttribute('data-t');
      if (t) copyText(t);
    });
    outEl.innerHTML = '';
    outEl.appendChild(pick);
    if (pal) outEl.appendChild(pal);
  }

  function extractPalette() {
    loadLib().then(function () {
      try {
        var pal = new ColorThief().getPalette(state.img, 6, 5);
        if (!pal || !pal.length) return;
        var row = document.createElement('div');
        row.className = 'ta-embed-pal';
        row.innerHTML = '<div style="width:100%;font-size:.72rem;color:var(--ta-muted)">Dominant palette:</div>';
        pal.forEach(function (p) {
          var h = hex(p[0], p[1], p[2]);
          var d = document.createElement('div');
          d.className = 'p';
          d.innerHTML = '<div class="f" style="background:' + h + '"></div><span class="c">' + h + '</span>';
          d.addEventListener('click', function () { copyText(h); renderColor(p); });
          row.appendChild(d);
        });
        outEl.appendChild(row);
        renderColor(pal[0]);
      } catch (e) { /* palette best-effort */ }
    }).catch(function () { /* eyedropper still works */ });
  }

  function loadImage(file) {
    if (!/^image\//.test(file.type)) return;
    var url = URL.createObjectURL(file);
    var img = new Image();
    img.onload = function () {
      state = { img: img, w: img.naturalWidth, h: img.naturalHeight };
      areaEl.innerHTML = '<div class="ta-embed-imgwrap"><img alt="preview"></div>'
        + '<div class="ta-embed-hover"><span class="sw"></span><span class="hv">hover the image, click to pick</span></div>';
      var pv = areaEl.querySelector('img');
      pv.src = url;
      pv.addEventListener('mousemove', function (e) {
        try {
          var rgb = pixelAt(e);
          var h = hex(rgb[0], rgb[1], rgb[2]);
          areaEl.querySelector('.sw').style.background = h;
          areaEl.querySelector('.hv').textContent = h;
        } catch (err) {}
      });
      pv.addEventListener('click', function (e) {
        try { renderColor(pixelAt(e)); } catch (err) {}
      });
      outEl.innerHTML = '';
      extractPalette();
    };
    img.src = url;
  }

  dropEl.addEventListener('click', function () { fileEl.click(); });
  dropEl.addEventListener('dragover', function (e) { e.preventDefault(); dropEl.classList.add('over'); });
  dropEl.addEventListener('dragleave', function () { dropEl.classList.remove('over'); });
  dropEl.addEventListener('drop', function (e) { e.preventDefault(); dropEl.classList.remove('over'); if (e.dataTransfer && e.dataTransfer.files.length) loadImage(e.dataTransfer.files[0]); });
  fileEl.addEventListener('change', function (e) { if (e.target.files.length) loadImage(e.target.files[0]); fileEl.value = ''; });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.imageColorPicker = {};
})();
