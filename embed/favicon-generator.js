/*!
 * ToolAspect Favicon Generator Embed
 * Install: <div id="ta-favicon-generator"></div>
 *          <script src="https://toolaspect.com/embed/favicon-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Pipeline follows ruisaraiva19/favycon (MIT); canvas + ICO writer run locally.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-favicon-generator';
  var BASE = 'https://toolaspect.com/favicon-generator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-drop{border:2px dashed var(--ta-border);border-radius:10px;padding:22px 12px;text-align:center;color:var(--ta-muted);cursor:pointer;font-size:.9rem}'
    + '.ta-embed-drop:hover{border-color:var(--ta-accent)}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:10px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-previews{display:flex;gap:12px;align-items:flex-end;justify-content:center;margin-top:12px;flex-wrap:wrap}'
    + '.ta-embed-previews img{background:repeating-conic-gradient(#d8dee9 0 25%,#f1f5f9 0 50%) 0 0/12px 12px;border-radius:4px}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-status a{color:var(--ta-accent)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'favicon-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="favicon-generator"]')) {
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
    + '<div class="ta-embed-title">Favicon Generator</div>'
    + '<div class="ta-embed-subtitle">One image in, the full favicon set out — runs locally</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop">Click to choose a square image (512×512+)</div>'
    + '<input type="file" accept="image/*" style="display:none">'
    + '<button class="ta-embed-btn" type="button" style="display:none">Generate favicon.ico + PNGs</button>'
    + '<div class="ta-embed-previews"></div>'
    + '<div class="ta-embed-status">Pick a square image, ideally 512×512 or larger.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var drop = root.querySelector('.ta-embed-drop');
  var input = root.querySelector('input');
  var btn = root.querySelector('.ta-embed-btn');
  var previews = root.querySelector('.ta-embed-previews');
  var status = root.querySelector('.ta-embed-status');
  var sourceImg = null;

  drop.addEventListener('click', function () { input.click(); });
  input.addEventListener('change', function () {
    var file = input.files && input.files[0];
    if (!file) return;
    var url = URL.createObjectURL(file);
    var img = new Image();
    img.onload = function () {
      sourceImg = img;
      drop.style.display = 'none';
      btn.style.display = '';
      status.textContent = 'Loaded ' + file.name + ' (' + img.width + '×' + img.height + '). Click generate.';
    };
    img.onerror = function () { status.textContent = 'Could not decode that file as an image.'; };
    img.src = url;
  });

  function drawIcon(size) {
    var c = document.createElement('canvas');
    c.width = size; c.height = size;
    var ctx = c.getContext('2d');
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, size, size);
    var src = sourceImg, r = src.width / src.height, box = size * 0.88, dw, dh;
    if (r >= 1) { dw = box; dh = box / r; } else { dh = box; dw = box * r; }
    ctx.drawImage(src, (size - dw) / 2, (size - dh) / 2, dw, dh);
    return c;
  }
  function pngBlob(c) {
    return new Promise(function (res, rej) { c.toBlob(function (b) { b ? res(b) : rej(new Error('png export failed')); }, 'image/png'); });
  }
  function buildIco(frames) {
    var n = frames.length, headerBytes = 6 + 16 * n, offset = headerBytes, total = headerBytes;
    frames.forEach(function (f) { total += f.data.length; });
    var buf = new Uint8Array(total), dv = new DataView(buf.buffer);
    dv.setUint16(0, 0, true); dv.setUint16(2, 1, true); dv.setUint16(4, n, true);
    frames.forEach(function (f, i) {
      var e = 6 + 16 * i;
      buf[e] = f.size >= 256 ? 0 : f.size; buf[e + 1] = buf[e];
      dv.setUint16(e + 4, 1, true); dv.setUint16(e + 6, 32, true);
      dv.setUint32(e + 8, f.data.length, true); dv.setUint32(e + 12, offset, true);
      buf.set(f.data, offset); offset += f.data.length;
    });
    return new Blob([buf], { type: 'image/x-icon' });
  }

  btn.addEventListener('click', async function () {
    if (!sourceImg) return;
    status.textContent = 'Generating…';
    try {
      var frames = [];
      for (var i = 0; i < 3; i++) {
        var s = [16, 32, 48][i];
        frames.push({ size: s, data: new Uint8Array(await (await pngBlob(drawIcon(s))).arrayBuffer()) });
      }
      var icoBlob = buildIco(frames);
      var png32 = await pngBlob(drawIcon(32));
      var png180 = await pngBlob(drawIcon(180));
      previews.innerHTML = ''
        + '<img src="' + URL.createObjectURL(icoBlob) + '" width="48" height="48" alt="favicon.ico preview">'
        + '<img src="' + URL.createObjectURL(png32) + '" width="32" height="32" alt="32px preview">'
        + '<img src="' + URL.createObjectURL(png180) + '" width="64" height="64" alt="apple touch preview">';
      var dl = function (blob, name) {
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = name;
        document.body.appendChild(a); a.click(); a.remove();
      };
      dl(icoBlob, 'favicon.ico');
      dl(png32, 'favicon-32x32.png');
      dl(png180, 'apple-touch-icon.png');
      status.innerHTML = 'Downloaded favicon.ico (' + (icoBlob.size / 1024).toFixed(1) + ' KB), favicon-32x32.png and apple-touch-icon.png. The full set — 192/512 manifest icons, maskable, webmanifest, HTML — is at <a href="' + BASE + '" target="_blank" rel="noopener">the complete tool</a>.';
    } catch (e) {
      status.textContent = 'Generation failed: ' + (e && e.message ? e.message : e);
    }
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.faviconGenerator = { version: '1.0' };
})();
