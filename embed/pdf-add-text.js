/*!
 * ToolAspect PDF Add Text Embed
 * Install: <div id="ta-pdf-add-text"></div>
 *          <script src="https://toolaspect.com/embed/pdf-add-text.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pdf-add-text';
  var BASE = 'https://toolaspect.com/pdf-add-text/';
  var PDFLIB_URL = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.9.1/dist/pdf-lib.min.js';

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
    + '.ta-embed-row.three{grid-template-columns:1fr 1fr 1fr}'
    + '@media(max-width:520px){.ta-embed-row,.ta-embed-row.three{grid-template-columns:1fr}}'
    + '.ta-embed-root label{font-size:.78rem;color:var(--ta-muted);font-weight:600;display:block;margin-bottom:3px}'
    + '.ta-embed-root input,.ta-embed-root select,.ta-embed-root textarea{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:8px 10px;font-size:.85rem;font-family:inherit;outline:none}'
    + '.ta-embed-root input:focus,.ta-embed-root select:focus,.ta-embed-root textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-root input[type=file]{font-size:.75rem;cursor:pointer}'
    + '.ta-embed-root input[type=color]{height:34px;padding:2px;cursor:pointer}'
    + '.ta-embed-btn{display:block;width:100%;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 12px;'
    + 'font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:8px}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-out{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:14px;font-size:.82rem;margin-bottom:12px}'
    + '.ta-embed-out .ok{color:var(--ta-ok)}'
    + '.ta-embed-err{background:var(--ta-surface);border:1px solid var(--ta-bad);color:var(--ta-bad);border-radius:8px;padding:10px 12px;font-size:.8rem;margin-bottom:12px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pdf-add-text');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pdf-add-text"]')) {
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
    + '<div class="ta-embed-title">PDF Add Text</div>'
    + '<div class="ta-embed-subtitle">Stamp text at exact page coordinates &mdash; 100% in-browser, nothing uploads</div>'
    + '<div class="ta-embed-card">'
    + '<label>PDF file</label><input type="file" class="ta-file" accept="application/pdf,.pdf">'
    + '<div class="ta-embed-row" style="margin-top:10px">'
    + '<div><label>Text</label><textarea class="ta-text" rows="2">APPROVED</textarea></div>'
    + '<div><label>Placement (X, Y in points)</label><input type="text" class="ta-xy" value="72, 720" placeholder="x, y from bottom-left"></div>'
    + '</div>'
    + '<div class="ta-embed-row three">'
    + '<div><label>Size (pt)</label><input type="number" class="ta-size" value="14" min="6" max="72"></div>'
    + '<div><label>Color</label><input type="color" class="ta-color" value="#d93025"></div>'
    + '<div><label>Pages</label><select class="ta-scope"><option value="page">This page</option><option value="all">All pages</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-row">'
    + '<div><label>Page number</label><input type="number" class="ta-page" value="1" min="1"></div>'
    + '<div><label>Font</label><select class="ta-font"><option>Helvetica</option><option selected>Helvetica-Bold</option><option>Times-Roman</option><option>Courier</option></select></div>'
    + '</div>'
    + '<button type="button" class="ta-embed-btn ta-go" disabled>Add text &amp; download</button>'
    + '</div>'
    + '<div class="ta-out" style="display:none"></div>'
    + '<div class="ta-err" style="display:none"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function err(msg) {
    var e = root.querySelector('.ta-err');
    e.style.display = msg ? 'block' : 'none';
    e.textContent = msg || '';
  }
  function out(html) {
    var o = root.querySelector('.ta-out');
    o.style.display = html ? 'block' : 'none';
    o.innerHTML = html || '';
  }

  function loadScript(url, test) {
    return test ? Promise.resolve() : new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = url; s.onload = res;
      s.onerror = function () { rej(new Error('could not load ' + url)); };
      (document.head || document.documentElement).appendChild(s);
    });
  }
  function ensurePdfLib() {
    return loadScript(PDFLIB_URL, window.PDFLib).then(function () { return window.PDFLib; });
  }

  var origBytes = null;

  root.querySelector('.ta-file').addEventListener('change', async function () {
    var f = this.files && this.files[0];
    if (!f) return;
    err(''); out('');
    try {
      var buf = new Uint8Array(await f.arrayBuffer());
      var PDFLib = await ensurePdfLib();
      var doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
      origBytes = buf.slice(0);
      root.querySelector('.ta-go').disabled = false;
      out('Loaded <strong>' + f.name + '</strong> &middot; ' + doc.getPageCount() + ' page(s). Enter text + X/Y (origin bottom-left, 1pt = 1/72 in) and press the button.');
    } catch (e) {
      origBytes = null;
      root.querySelector('.ta-go').disabled = true;
      err('Could not open PDF: ' + (e.message || e));
    }
  });

  root.querySelector('.ta-go').addEventListener('click', async function () {
    if (!origBytes) return;
    err(''); out('Working…');
    try {
      var PDFLib = await ensurePdfLib();
      var text = root.querySelector('.ta-text').value;
      if (!text.trim()) throw new Error('type some text first');
      var m = root.querySelector('.ta-xy').value.split(',').map(Number);
      if (m.length < 2 || !isFinite(m[0]) || !isFinite(m[1])) throw new Error('placement must look like "72, 720" (X, Y points)');
      var hex = root.querySelector('.ta-color').value;
      var rgb = PDFLib.rgb(parseInt(hex.slice(1, 3), 16) / 255, parseInt(hex.slice(3, 5), 16) / 255, parseInt(hex.slice(5, 7), 16) / 255);
      var size = Math.min(72, Math.max(6, parseFloat(root.querySelector('.ta-size').value) || 14));
      var scope = root.querySelector('.ta-scope').value;
      var pageIdx = Math.max(1, parseInt(root.querySelector('.ta-page').value, 10) || 1) - 1;
      var fontName = root.querySelector('.ta-font').value;

      var doc = await PDFLib.PDFDocument.load(origBytes.slice(0), { ignoreEncryption: true });
      if (pageIdx >= doc.getPageCount()) throw new Error('page number must be 1-' + doc.getPageCount());
      var font = await doc.embedFont(PDFLib.StandardFonts[fontName]);
      var targets = scope === 'all' ? doc.getPages() : [doc.getPage(pageIdx)];
      targets.forEach(function (p) {
        p.drawText(text, { x: m[0], y: m[1], size: size, font: font, color: rgb, lineHeight: size * 1.35 });
      });
      var bytes = await doc.save({ useObjectStreams: true });

      var blob = new Blob([bytes], { type: 'application/pdf' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'stamped.pdf';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      out('<span class="ok">Done.</span> Text drawn at (' + m[0] + ', ' + m[1] + ') pt on ' +
        (scope === 'all' ? 'all ' + doc.getPageCount() + ' pages' : 'page ' + (pageIdx + 1)) +
        ' &middot; ' + bytes.length.toLocaleString() + ' bytes downloaded.');
    } catch (e) {
      out('');
      err('Failed: ' + (e.message || e));
    }
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.pdfAddText = {};
})();
