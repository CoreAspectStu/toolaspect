/*!
 * ToolAspect PDF Certificate Maker Embed
 * Install: <div id="ta-pdf-certificate-maker"></div>
 *          <script src="https://toolaspect.com/embed/pdf-certificate-maker.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: pdfme 6.1.12 (MIT) loaded from jsdelivr; the PDF is rendered
 * entirely in the visitor's browser — no upload, no watermark.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pdf-certificate-maker';
  var BASE = 'https://toolaspect.com/pdf-certificate-maker/';
  var PDFME = 'https://cdn.jsdelivr.net/npm/@pdfme/';
  var V = '6.1.12';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card label{display:block;font-size:.78rem;color:var(--ta-muted);margin:10px 0 5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-card input{width:100%;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.85rem;font-family:inherit}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:12px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;text-align:center;text-decoration:none}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pdf-certificate-maker');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pdf-certificate-maker"]')) {
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
    + '<div class="ta-embed-title">PDF Certificate Maker</div>'
    + '<div class="ta-embed-subtitle">Fill in, download a print-ready certificate — rendered locally</div>'
    + '<div class="ta-embed-card">'
    + '<label>Organization</label><input class="ta-org" value="ACME LEARNING ACADEMY">'
    + '<label>Recipient</label><input class="ta-name" value="Jane Doe">'
    + '<label>Course / achievement</label><input class="ta-course" value="Advanced Data Analysis">'
    + '<label>Date line</label><input class="ta-date" value="Completed on August 31, 2026">'
    + '<button class="ta-embed-btn ta-go" type="button">Download Certificate PDF</button>'
    + '<div class="ta-embed-status">A4 landscape, 12 mm margins, vector text. First click loads the engine (~1.5 MB, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var goBtn = q('.ta-go'), statusEl = q('.ta-embed-status');

  function certTemplate(v) {
    var t = function (name, content, x, y, w, h, extra) {
      return Object.assign({ name: name, type: 'text', content: content, position: { x: x, y: y }, width: w, height: h, fontSize: 13, alignment: 'center' }, extra || {});
    };
    return {
      basePdf: { width: 297, height: 210, padding: [12, 12, 12, 12] },
      schemas: [[
        { name: 'borderOuter', type: 'rectangle', position: { x: 12, y: 12 }, width: 273, height: 186, borderWidth: 2.5, borderColor: '#1d4ed8', color: '', radius: 0 },
        { name: 'borderInner', type: 'rectangle', position: { x: 16.5, y: 16.5 }, width: 264, height: 177, borderWidth: 0.75, borderColor: '#1d4ed8', color: '', radius: 0 },
        t('orgName', v.org, 60, 24, 177, 10, { fontSize: 15, characterSpacing: 2 }),
        t('title', 'CERTIFICATE', 40, 40, 217, 26, { fontSize: 44, characterSpacing: 6, fontColor: '#1d4ed8' }),
        t('subtitle', 'OF COMPLETION', 90, 66, 117, 10, { fontSize: 14, characterSpacing: 4 }),
        t('presented', 'This certificate is proudly presented to', 70, 84, 157, 8, { fontSize: 11 }),
        t('recipientName', v.name, 30, 94, 237, 20, { fontSize: 30 }),
        t('completedLine', 'for successfully completing', 75, 118, 147, 8, { fontSize: 11 }),
        t('courseName', v.course, 30, 127, 237, 16, { fontSize: 22, fontColor: '#1d4ed8' }),
        t('dateLine', v.date, 75, 150, 147, 8, { fontSize: 11 }),
        { name: 'sigRule1', type: 'line', position: { x: 36, y: 171 }, width: 70, height: 0, color: '#333333' },
        t('sig1Name', 'Program Director', 36, 173, 70, 7, { fontSize: 10, fontColor: '#333333' }),
        { name: 'sigRule2', type: 'line', position: { x: 191, y: 171 }, width: 70, height: 0, color: '#333333' },
        t('sig2Name', 'Academic Dean', 191, 173, 70, 7, { fontSize: 10, fontColor: '#333333' })
      ]]
    };
  }

  goBtn.addEventListener('click', function () {
    goBtn.disabled = true;
    statusEl.textContent = 'Loading the PDF engine (pdfme, cached after first use) …';
    var plugins, font;
    Promise.all([
      import(PDFME + 'schemas@' + V + '/+esm'),
      import(PDFME + 'common@' + V + '/+esm'),
      import(PDFME + 'generator@' + V + '/+esm')
    ]).then(function (mods) {
      var schemas = mods[0];
      plugins = { text: schemas.text, line: schemas.line, rectangle: schemas.rectangle };
      font = mods[1].getDefaultFont();
      var v = {
        org: q('.ta-org').value || ' ',
        name: q('.ta-name').value || ' ',
        course: q('.ta-course').value || ' ',
        date: q('.ta-date').value || ' '
      };
      var template = certTemplate(v);
      var inputs = {};
      template.schemas[0].forEach(function (sc) { if (sc.type === 'text') inputs[sc.name] = sc.content; });
      return mods[2].generate({ template: template, inputs: [inputs], plugins: plugins, options: { font: font } });
    }).then(function (pdf) {
      var bytes = new Uint8Array(pdf);
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
      a.download = 'certificate.pdf';
      a.textContent = 'Download certificate.pdf (' + bytes.length.toLocaleString('en-US') + ' B)';
      a.className = 'ta-embed-btn';
      statusEl.textContent = 'Certificate ready — print at 100% scale.';
      statusEl.appendChild(document.createElement('br'));
      statusEl.appendChild(a);
    }).catch(function (e) {
      statusEl.textContent = 'Could not generate: ' + ((e && e.message) || e);
    }).then(function () { goBtn.disabled = false; });
  });
})();
