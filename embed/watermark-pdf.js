/*!
 * ToolAspect Watermark PDF Embed
 * Install: <div id="ta-watermark-pdf"></div>
 *          <script src="https://toolaspect.com/embed/watermark-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engines: @cantoo/pdf-lib 2.9.1 (MIT) draws the stamp, pdfstudio 0.4.0
 * (Apache-2.0, qpdf-wasm) applies it. Both load from toolaspect.com and run
 * in the visitor's browser — the PDF never hits a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-watermark-pdf';
  var BASE = 'https://toolaspect.com/watermark-pdf/';
  var LIB_PDFLIB = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.9.1/dist/pdf-lib.min.js';
  var LIB_PDFSTUDIO = 'https://toolaspect.com/shared/vendor/pdfstudio/dist/index.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-file{display:block;width:100%;padding:9px;background:var(--ta-bg);border:1px dashed var(--ta-border);border-radius:8px;color:var(--ta-text);font-size:.85rem;font-family:inherit}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}'
    + '.ta-embed-row input,.ta-embed-row select{width:100%;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.82rem;font-family:inherit}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:12px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;text-align:center;text-decoration:none}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'watermark-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="watermark-pdf"]')) {
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
    + '<div class="ta-embed-title">Watermark PDF</div>'
    + '<div class="ta-embed-subtitle">Stamp every page in the browser — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<label>PDF file</label><input class="ta-file" type="file" accept=".pdf,application/pdf">'
    + '<div class="ta-embed-row">'
    + '<div><label>Stamp text</label><input class="ta-text" type="text" value="CONFIDENTIAL" maxlength="40"></div>'
    + '<div><label>Preset</label><select class="ta-preset">'
    + '<option value="48|45|35|gray">Classic: 48pt · 45° · 35%</option>'
    + '<option value="60|45|50|red">Loud draft: 60pt · 45° · 50%</option>'
    + '<option value="24|45|30|blue">Tiled COPY: 24pt · 45° · 30%</option>'
    + '</select></div>'
    + '</div>'
    + '<button class="ta-embed-btn ta-go" type="button" disabled>Apply Watermark</button>'
    + '<div class="ta-embed-status">Open a PDF to begin. First use fetches the engines (~2.9 MB total, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var fileInput = q('.ta-file'), goBtn = q('.ta-go'), statusEl = q('.ta-embed-status');
  var targetBytes = null;

  fileInput.addEventListener('change', function () {
    var f = fileInput.files[0];
    if (!f) return;
    var fr = new FileReader();
    fr.onload = function () {
      targetBytes = new Uint8Array(fr.result);
      goBtn.disabled = false;
      statusEl.textContent = f.name + ' loaded (' + f.size.toLocaleString('en-US') + ' bytes). Hit Apply.';
    };
    fr.readAsArrayBuffer(f);
  });

  function setStatus(msg) { statusEl.textContent = msg; }
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = src; s.onload = res;
      s.onerror = function () { rej(new Error('failed to load ' + src)); };
      document.head.appendChild(s);
    });
  }
  function anchorForCenter(tw, th, rotDeg, cx, cy) {
    var r = rotDeg * Math.PI / 180;
    var dx = (tw / 2) * Math.cos(r) - (th / 2) * Math.sin(r);
    var dy = (tw / 2) * Math.sin(r) + (th / 2) * Math.cos(r);
    return { x: cx - dx, y: cy - dy };
  }

  goBtn.addEventListener('click', function () {
    if (!targetBytes) return;
    goBtn.disabled = true;
    setStatus('Loading engines …');
    Promise.resolve()
      .then(function () {
        return window.PDFLib ? window.PDFLib : loadScript(LIB_PDFLIB).then(function () { return window.PDFLib; });
      })
      .then(function (PDFLib) {
        return import(LIB_PDFSTUDIO).then(function (studio) {
          return { PDFLib: PDFLib, studio: studio };
        });
      })
      .then(function (eng) {
        var p = q('.ta-preset').value.split('|');
        var cfg = {
          text: q('.ta-text').value || 'CONFIDENTIAL',
          size: +p[0], rotation: +p[1], opacity: +p[2] / 100, color: p[3]
        };
        return eng.PDFLib.PDFDocument.load(targetBytes).then(function (src) {
          var size = src.getPage(0).getSize();
          return eng.PDFLib.PDFDocument.create().then(function (doc) {
            return doc.embedFont(eng.PDFLib.StandardFonts.HelveticaBold).then(function (font) {
              var page = doc.addPage([size.width, size.height]);
              var colors = { gray: eng.PDFLib.rgb(.5, .5, .5), red: eng.PDFLib.rgb(.86, .15, .15), blue: eng.PDFLib.rgb(.15, .3, .7) };
              var tw = font.widthOfTextAtSize(cfg.text, cfg.size);
              var th = font.heightAtSize(cfg.size);
              var a = anchorForCenter(tw, th, cfg.rotation, size.width / 2, size.height / 2);
              page.drawText(cfg.text, { x: a.x, y: a.y, size: cfg.size, font: font, color: colors[cfg.color] || colors.gray, opacity: cfg.opacity, rotate: eng.PDFLib.degrees(cfg.rotation) });
              return doc.save();
            });
          }).then(function (stampBytes) {
            setStatus('Stamping ' + src.getPageCount() + ' page(s) with qpdf-wasm …');
            return eng.studio.createPdfToolkit().then(function (tk) {
              return tk.watermark(targetBytes, stampBytes, { mode: 'overlay', repeat: '1' });
            });
          });
        });
      })
      .then(function (out) {
        var bytes = new Uint8Array(out);
        var blob = new Blob([bytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url; a.download = 'watermarked.pdf'; a.textContent = 'Download watermarked.pdf (' + bytes.length.toLocaleString('en-US') + ' bytes)';
        a.className = 'ta-embed-btn';
        statusEl.textContent = 'Done.';
        statusEl.appendChild(document.createElement('br'));
        statusEl.appendChild(a);
      })
      .catch(function (e) { setStatus('Failed: ' + ((e && e.message) || e)); })
      .then(function () { goBtn.disabled = false; });
  });
})();
