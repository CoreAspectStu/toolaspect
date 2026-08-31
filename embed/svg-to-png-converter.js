/*!
 * ToolAspect SVG to PNG Converter Embed
 * Install: <div id="ta-svg-to-png-converter"></div>
 *          <script src="https://toolaspect.com/embed/svg-to-png-converter.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: rasterizer pipeline ported from vincerubinetti/svg-to-png (MIT),
 * commit 8231982ce96f. Runs 100% in the visitor's browser via
 * FileReader + DOMParser + canvas — no file ever reaches a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-svg-to-png-converter';
  var BASE = 'https://toolaspect.com/svg-to-png-converter/';

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
    + '.ta-embed-opt{display:flex;flex-direction:column;gap:4px;flex:1;min-width:110px}'
    + '.ta-embed-opt label{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-opt input,.ta-embed-opt select{padding:8px 10px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.85rem;font-family:inherit;width:100%}'
    + '.ta-embed-opts{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}'
    + '.ta-embed-status{margin-top:10px;font-size:.85rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'svg-to-png-converter');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="svg-to-png-converter"]')) {
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
    + '<div class="ta-embed-title">SVG to PNG Converter</div>'
    + '<div class="ta-embed-subtitle">Rasterize at any scale — no upload, keeps transparency</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop"><p>🖼️ Click or drag SVG files here</p></div>'
    + '<input type="file" accept=".svg,image/svg+xml" multiple style="display:none">'
    + '<div class="ta-embed-list"></div>'
    + '<div class="ta-embed-opts">'
    + '<div class="ta-embed-opt"><label>Scale factor (0.5–10)</label><input type="number" class="ta-embed-scale" value="2" min="0.5" max="10" step="0.5"></div>'
    + '<div class="ta-embed-opt"><label>Background</label><select class="ta-embed-bg"><option value="transparent">Transparent</option><option value="#ffffff">White</option><option value="#000000">Black</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-actions">'
    + '<button type="button" class="ta-embed-btn cv">Convert to PNG</button>'
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
  var cvBtn = root.querySelector('.cv');
  var clBtn = root.querySelector('.cl');
  var scaleEl = root.querySelector('.ta-embed-scale');
  var bgEl = root.querySelector('.ta-embed-bg');

  var files = [];

  // vincerubinetti/svg-to-png (MIT, commit 8231982ce96f) pipeline port:
  // CSS absolute units -> px, lenient parse, native-size inference, canvas draw.
  function unitsToPixels(string) {
    var units = { px: 1, in: 96, pc: 96 / 6, pt: 96 / 72, cm: 96 / 2.54, mm: 96 / 2.54 / 10, q: 96 / 2.54 / 40 };
    var m = String(string).match(/(\d+\.?\d*)\s*(\w*)/) || [];
    return Number(m[1] || 0) * (units[(m[2] || 'px').toLowerCase()] || 0);
  }
  function sourceToSvg(source) {
    var doc = new DOMParser().parseFromString(source, 'text/html');
    var svg = doc.querySelector('svg');
    if (!svg) throw new Error('no <svg> element');
    return svg;
  }
  function svgProps(source, filename) {
    var svg = sourceToSvg(source);
    var aw = unitsToPixels(svg.getAttribute('width') || '');
    var ah = unitsToPixels(svg.getAttribute('height') || '');
    var vb = (svg.getAttribute('viewBox') || '').split(/\s/).map(parseFloat);
    var vw = vb[2] || 0, vh = vb[3] || 0;
    var size = { width: 512, height: 512 };
    if (aw && ah) { size.width = aw; size.height = ah; }
    else if (aw && vw && vh) { size.width = aw; size.height = aw * (vh / vw); }
    else if (ah && vw && vh) { size.width = ah * (vw / vh); size.height = ah; }
    else if (vw && vh) { size.width = vw; size.height = vh; }
    else if (aw) { size.width = aw; size.height = aw; }
    else if (ah) { size.width = ah; size.height = ah; }
    return { name: (filename || 'image').replace(/\.svg$/i, ''), size: size };
  }
  function svgToImage(svg) {
    return new Promise(function (res, rej) {
      var img = new Image();
      img.onload = function () { res(img); };
      img.onerror = function () { rej(new Error('render failed')); };
      img.src = 'data:image/svg+xml;charset=utf8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
  }
  function readText(f) {
    return new Promise(function (res, rej) {
      var fr = new FileReader();
      fr.onload = function () { res(fr.result); };
      fr.onerror = function () { rej(new Error('unreadable')); };
      fr.readAsText(f);
    });
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function fmtSize(b) { return b >= 1048576 ? (b / 1048576).toFixed(1) + ' MB' : (b >= 1024 ? Math.round(b / 1024) + ' KB' : b + ' B'); }

  async function addFiles(fileList) {
    var arr = Array.prototype.slice.call(fileList).filter(function (f) { return /\.svg$/i.test(f.name) || f.type === 'image/svg+xml'; });
    for (var i = 0; i < arr.length; i++) {
      var entry = { file: arr[i], name: arr[i].name, props: null, err: null, out: null };
      files.push(entry);
      renderList();
      try { entry.props = svgProps(await readText(arr[i]), arr[i].name); }
      catch (e) { entry.err = String(e && e.message || e); }
      renderList();
    }
  }

  function renderList() {
    listEl.innerHTML = '';
    files.forEach(function (f, i) {
      var row = document.createElement('div');
      row.className = 'ta-embed-frow';
      var st = f.err ? '<span class="bad">' + esc(f.err) + '</span>'
        : (f.props ? '<span class="ok">' + Math.round(f.props.size.width) + '×' + Math.round(f.props.size.height) + '</span>' : '…');
      var dl = f.out ? '<a href="' + f.out.url + '" download="' + esc(f.out.name) + '">⬇ ' + esc(f.out.name) + '</a>' : '';
      row.innerHTML = '<span style="font-size:.72rem;color:var(--ta-muted)">' + (i + 1) + '.</span>'
        + '<span class="nm">' + esc(f.name) + '</span><span class="mt">' + st + (dl ? ' ' + dl : '') + '</span>'
        + '<button type="button" class="ta-embed-ib" data-a="r">✕</button>';
      row.addEventListener('click', function (e) {
        if (e.target.getAttribute && e.target.getAttribute('data-a') === 'r') { files.splice(i, 1); renderList(); }
      });
      listEl.appendChild(row);
    });
    cvBtn.disabled = !(files.length && files.every(function (f) { return f.props; }));
  }

  async function convert() {
    var scale = Math.min(10, Math.max(0.5, parseFloat(scaleEl.value) || 2));
    var bg = bgEl.value === 'transparent' ? null : bgEl.value;
    var made = 0;
    for (var i = 0; i < files.length; i++) {
      var f = files[i];
      if (!f.props) continue;
      try {
        var img = await svgToImage(sourceToSvg(await readText(f.file)));
        var w = Math.max(1, Math.round(f.props.size.width * scale));
        var h = Math.max(1, Math.round(f.props.size.height * scale));
        var canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        var ctx = canvas.getContext('2d');
        if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h); }
        ctx.drawImage(img, 0, 0, w, h);
        var blob = await new Promise(function (res) { canvas.toBlob(res, 'image/png'); });
        if (f.out) URL.revokeObjectURL(f.out.url);
        f.out = { url: URL.createObjectURL(blob), name: f.props.name + '-' + w + 'x' + h + '.png' };
        made++;
      } catch (e) { f.err = String(e && e.message || e); }
      renderList();
    }
    statusEl.innerHTML = made ? '✅ ' + made + ' PNG' + (made > 1 ? 's' : '') + ' ready at ' + scale + 'x — download above.' : '<span style="color:#dc2626">Nothing converted.</span>';
  }

  dropEl.addEventListener('click', function () { fileEl.click(); });
  dropEl.addEventListener('dragover', function (e) { e.preventDefault(); dropEl.classList.add('over'); });
  dropEl.addEventListener('dragleave', function () { dropEl.classList.remove('over'); });
  dropEl.addEventListener('drop', function (e) { e.preventDefault(); dropEl.classList.remove('over'); if (e.dataTransfer && e.dataTransfer.files.length) addFiles(e.dataTransfer.files); });
  fileEl.addEventListener('change', function (e) { addFiles(e.target.files); fileEl.value = ''; });
  cvBtn.addEventListener('click', convert);
  clBtn.addEventListener('click', function () { files.forEach(function (f) { if (f.out) URL.revokeObjectURL(f.out.url); }); files = []; statusEl.innerHTML = ''; renderList(); });
  renderList();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.svgToPngConverter = { recalc: renderList };
})();
