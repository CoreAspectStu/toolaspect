/*!
 * ToolAspect Barcode Generator Embed
 * Install: <div id="ta-barcode-generator"></div>
 *          <script src="https://toolaspect.com/embed/barcode-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-barcode-generator';
  var BASE = 'https://toolaspect.com/barcode-generator/';
  var ETIKET_URLS = [
    'https://cdn.jsdelivr.net/npm/etiket@0.12.0/dist/index.mjs',
    'https://unpkg.com/etiket@0.12.0/dist/index.mjs'
  ];

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '@media(max-width:520px){.ta-embed-row{grid-template-columns:1fr}}'
    + '.ta-embed-root label{font-size:.78rem;color:var(--ta-muted);font-weight:600;display:block;margin-bottom:3px}'
    + '.ta-embed-root input,.ta-embed-root select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 10px;font-size:.85rem;font-family:inherit;outline:none}'
    + '.ta-embed-root input:focus,.ta-embed-root select:focus{border-color:var(--ta-accent)}'
    + '.ta-check{display:flex;align-items:center;gap:6px;font-size:.8rem;color:var(--ta-text);margin-bottom:6px}'
    + '.ta-check input{width:15px;height:15px;accent-color:var(--ta-accent)}'
    + '.ta-stage{background:#fff;border:1px solid var(--ta-border);border-radius:10px;padding:14px;margin-bottom:10px;display:flex;justify-content:center;overflow-x:auto;min-height:60px;align-items:center}'
    + '.ta-stage svg{max-width:100%;height:auto}'
    + '.ta-stage .ta-wait{color:#94a3b8;font-size:.82rem}'
    + '.ta-stage .ta-bad{color:#b91c1c;font-size:.82rem}'
    + '.ta-btns{display:flex;gap:8px;flex-wrap:wrap}'
    + '.ta-btn{flex:1;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:9px 12px;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-btn.ghost{background:transparent;border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-note{text-align:center;font-size:.78rem;color:var(--ta-muted);margin-top:8px;min-height:1.2em}'
    + '.ta-note.ok{color:var(--ta-ok)}.ta-note.bad{color:var(--ta-bad)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'barcode-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="barcode-generator"]')) {
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
    + '<div class="ta-embed-title">Barcode Generator</div>'
    + '<div class="ta-embed-subtitle">Code 128, EAN-13/8, UPC-A/E, Code 39 &mdash; vector SVG + PNG, zero uploads</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-row">'
    + '<div><label>Symbology</label><select class="ta-type">'
    + '<option value="code128" selected>Code 128</option><option value="ean13">EAN-13</option><option value="ean8">EAN-8</option>'
    + '<option value="upca">UPC-A</option><option value="upce">UPC-E</option><option value="code39">Code 39</option><option value="itf14">ITF-14</option>'
    + '</select></div>'
    + '<div><label>Data</label><input type="text" class="ta-data" value="ToolAspect-2026" spellcheck="false"></div>'
    + '</div>'
    + '<div class="ta-embed-row">'
    + '<div><label>Bar height (px)</label><input type="number" class="ta-height" value="80" min="20" max="300" step="5"></div>'
    + '<div><label>Bar color</label><input type="color" class="ta-color" value="#000000" style="height:36px;padding:2px;cursor:pointer"></div>'
    + '</div>'
    + '<label class="ta-check"><input type="checkbox" class="ta-show" checked> Show human-readable text</label>'
    + '<div class="ta-stage"><span class="ta-wait">Loading engine&hellip;</span></div>'
    + '<div class="ta-btns">'
    + '<button type="button" class="ta-btn ta-svg">SVG</button>'
    + '<button type="button" class="ta-btn ta-png">PNG</button>'
    + '<button type="button" class="ta-btn ghost ta-copy">Copy SVG</button>'
    + '</div>'
    + '<div class="ta-note">Rendering locally with etiket (MIT).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function note(msg, cls) {
    var n = root.querySelector('.ta-note');
    n.textContent = msg;
    n.className = 'ta-note' + (cls ? ' ' + cls : '');
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function download(name, blob) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
  }

  var etiket = null, currentSVG = '';
  function loadEtiket() {
    if (etiket) return Promise.resolve(etiket);
    var p = Promise.reject();
    ETIKET_URLS.forEach(function (url) {
      p = p.catch(function () { return import(url); });
    });
    return p.then(function (mod) { etiket = mod; return mod; })
      .catch(function () { throw new Error('could not load barcode engine from CDN'); });
  }

  var PRESETS = {
    'code128': 'ToolAspect-2026', 'ean13': '400638133393', 'ean8': '9638507', 'upca': '03600029145',
    'upce': '01234565', 'code39': 'TOOLASPECT-1', 'itf14': '0001234567890'
  };

  function opts() {
    return {
      type: root.querySelector('.ta-type').value,
      height: parseFloat(root.querySelector('.ta-height').value) || 80,
      barWidth: 2,
      color: root.querySelector('.ta-color').value,
      showText: root.querySelector('.ta-show').checked
    };
  }

  function render() {
    if (!etiket) return;
    var stage = root.querySelector('.ta-stage');
    var data = root.querySelector('.ta-data').value;
    var o = opts();
    if (!data.trim()) { stage.innerHTML = '<span class="ta-wait">Type data to render</span>'; currentSVG = ''; return; }
    try {
      var v = etiket.validateBarcode(data, o.type);
      if (v && v.valid === false) throw new Error(v.error || 'invalid input');
      currentSVG = etiket.barcode(data, o);
      stage.innerHTML = currentSVG;
      var extra = '';
      if (o.type === 'ean13' && /^\d{12}$/.test(data)) extra = ' (check digit ' + etiket.calculateEANCheckDigit(data) + ' appended)';
      if (o.type === 'upca' && /^\d{11}$/.test(data)) extra = ' (check digit ' + etiket.calculateEANCheckDigit(data) + ' appended)';
      note('Rendered ' + o.type + extra + '.', 'ok');
    } catch (e) {
      currentSVG = '';
      stage.innerHTML = '<span class="ta-bad">' + esc(String(e.message || e)) + '</span>';
      note('Invalid input for ' + o.type + '.', 'bad');
    }
  }

  root.addEventListener('input', render);
  root.addEventListener('change', render);
  root.querySelector('.ta-type').addEventListener('change', function () {
    var p = PRESETS[this.value];
    if (p) root.querySelector('.ta-data').value = p;
    render();
  });
  root.querySelector('.ta-svg').addEventListener('click', function () {
    if (!currentSVG) return note('Nothing rendered yet.', 'bad');
    download('barcode.svg', new Blob([currentSVG], { type: 'image/svg+xml' }));
    note('Downloaded barcode.svg.', 'ok');
  });
  root.querySelector('.ta-png').addEventListener('click', function () {
    if (!etiket || !currentSVG) return note('Nothing rendered yet.', 'bad');
    try {
      var uri = etiket.barcodePNGDataURI(root.querySelector('.ta-data').value, opts());
      var b = atob(uri.split(',')[1]), u = new Uint8Array(b.length);
      for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i);
      download('barcode.png', new Blob([u], { type: 'image/png' }));
      note('Downloaded barcode.png.', 'ok');
    } catch (e) { note('PNG failed: ' + (e.message || e), 'bad'); }
  });
  root.querySelector('.ta-copy').addEventListener('click', function () {
    if (!currentSVG) return note('Nothing rendered yet.', 'bad');
    (navigator.clipboard ? navigator.clipboard.writeText(currentSVG) : Promise.reject()).then(
      function () { note('SVG markup copied.', 'ok'); },
      function () { note('Clipboard blocked — use the SVG button.', 'bad'); }
    );
  });

  loadEtiket().then(render, function (e) {
    root.querySelector('.ta-stage').innerHTML = '<span class="ta-bad">' + esc(String(e.message || e)) + '</span>';
    note('Engine failed to load.', 'bad');
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.barcodeGenerator = { render: render };
})();
