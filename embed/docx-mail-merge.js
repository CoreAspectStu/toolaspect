/*!
 * ToolAspect DOCX Mail Merge Embed
 * Install: <div id="ta-docx-mail-merge"></div>
 *          <script src="https://toolaspect.com/embed/docx-mail-merge.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: easy-template-x 7.2.8 (MIT) + JSZip 3.10.1 (MIT) via jsdelivr;
 * templates and data are merged entirely in the visitor's browser.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-docx-mail-merge';
  var BASE = 'https://toolaspect.com/docx-mail-merge/';
  var ETX_URL = 'https://cdn.jsdelivr.net/npm/easy-template-x@7.2.8/+esm';

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
    + '.ta-embed-file{display:block;width:100%;padding:9px;background:var(--ta-bg);border:1px dashed var(--ta-border);border-radius:8px;color:var(--ta-text);font-size:.85rem;font-family:inherit}'
    + '.ta-embed-csv{width:100%;min-height:120px;margin-top:2px;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.78rem;font-family:ui-monospace,Menlo,monospace;font-family:inherit;resize:vertical}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:12px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;text-align:center;text-decoration:none}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'docx-mail-merge');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="docx-mail-merge"]')) {
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
    + '<div class="ta-embed-title">DOCX Mail Merge</div>'
    + '<div class="ta-embed-subtitle">Word template with {{tags}} + CSV rows — merged locally</div>'
    + '<div class="ta-embed-card">'
    + '<label>Template (.docx with {{tags}})</label><input class="ta-file" type="file" accept=".docx">'
    + '<label>CSV data (header row first)</label><textarea class="ta-csv" spellcheck="false">name,role\nJane Doe,Senior Analyst\nMarcus Lee,Data Engineer</textarea>'
    + '<button class="ta-embed-btn ta-go" type="button" disabled>Merge</button>'
    + '<div class="ta-embed-status">Each CSV row becomes one filled-in .docx. Nothing is uploaded.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var fileInput = q('.ta-file'), goBtn = q('.ta-go'), statusEl = q('.ta-embed-status'), csvEl = q('.ta-csv');
  var tplBuf = null, tplName = '';

  fileInput.addEventListener('change', function () {
    var f = fileInput.files[0];
    if (!f) return;
    var fr = new FileReader();
    fr.onload = function () {
      tplBuf = fr.result;
      tplName = f.name;
      goBtn.disabled = false;
      statusEl.textContent = tplName + ' loaded (' + f.size.toLocaleString('en-US') + ' B). Hit Merge.';
    };
    fr.readAsArrayBuffer(f);
  });

  function parseCsv(text) {
    var rows = [], row = [], cur = '', inQ = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (inQ) {
        if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else inQ = false; }
        else cur += c;
      } else if (c === '"') inQ = true;
      else if (c === ',') { row.push(cur); cur = ''; }
      else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(cur); cur = ''; if (row.length > 1 || row[0] !== '') { rows.push(row); row = []; } }
      else cur += c;
    }
    row.push(cur);
    if (row.length > 1 || row[0] !== '') rows.push(row);
    return rows;
  }

  goBtn.addEventListener('click', function () {
    if (!tplBuf) return;
    goBtn.disabled = true;
    statusEl.textContent = 'Loading the merge engine (easy-template-x, cached after first use) …';
    import(ETX_URL).then(function (etx) {
      var rows = parseCsv(csvEl.value);
      if (rows.length < 2) throw new Error('paste at least a header row and one data row');
      var head = rows[0].map(function (h) { return h.trim(); });
      var records = rows.slice(1).filter(function (r) { return r.some(function (cc) { return cc.trim() !== ''; }); }).map(function (r) {
        var o = {}; head.forEach(function (h, i) { o[h] = r[i] !== undefined ? r[i] : ''; }); return o;
      });
      var bytes = new Uint8Array(tplBuf);
      var ab = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
      var handler = new etx.TemplateHandler({ delimiters: { tagStart: '{{', tagEnd: '}}' } });
      var outs = [], names = [];
      var chain = Promise.resolve();
      records.forEach(function (rec) {
        chain = chain.then(function () {
          return handler.process(ab, rec).then(function (out) {
            outs.push(new Uint8Array(out));
            names.push(String(rec.name || rec.Name || 'document').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'document');
          });
        });
      });
      return chain.then(function () {
        if (outs.length === 1) {
          var a = document.createElement('a');
          a.href = URL.createObjectURL(new Blob([outs[0]], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }));
          a.download = names[0] + '.docx';
          a.textContent = 'Download ' + names[0] + '.docx (' + outs[0].length.toLocaleString('en-US') + ' B)';
          a.className = 'ta-embed-btn';
          statusEl.textContent = 'Merged. Open it and check the tags are filled.';
          statusEl.appendChild(document.createElement('br'));
          statusEl.appendChild(a);
        } else {
          return import('https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm').then(function (JSZipNS) {
            var JSZip = JSZipNS.default || JSZipNS;
            var zip = new JSZip();
            outs.forEach(function (o, i) { zip.file(names[i] + '.docx', o); });
            return zip.generateAsync({ type: 'uint8array', compression: 'DEFLATE' });
          }).then(function (zb) {
            var za = document.createElement('a');
            za.href = URL.createObjectURL(new Blob([zb], { type: 'application/zip' }));
            za.download = 'merged-documents.zip';
            za.textContent = 'Download merged-documents.zip (' + outs.length + ' docs, ' + zb.length.toLocaleString('en-US') + ' B)';
            za.className = 'ta-embed-btn';
            statusEl.textContent = 'Merged ' + outs.length + ' documents.';
            statusEl.appendChild(document.createElement('br'));
            statusEl.appendChild(za);
          });
        }
      });
    }).catch(function (e) {
      statusEl.textContent = 'Merge failed: ' + ((e && e.message) || e);
    }).then(function () { goBtn.disabled = false; });
  });
})();
