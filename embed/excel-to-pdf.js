/*!
 * ToolAspect Excel to PDF Embed
 * Install: <div id="ta-excel-to-pdf"></div>
 *          <script src="https://toolaspect.com/embed/excel-to-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-excel-to-pdf';
  var BASE = 'https://toolaspect.com/excel-to-pdf/';
  var XLSX_URL = 'https://toolaspect.com/excel-to-pdf/vendor/xlsx.full.min.js';
  var PDFMAKE_URL = 'https://cdn.jsdelivr.net/npm/pdfmake@0.2.20/build/pdfmake.min.js';
  var VFS_URL = 'https://cdn.jsdelivr.net/npm/pdfmake@0.2.20/build/vfs_fonts.js';
  var H2P_URL = 'https://cdn.jsdelivr.net/npm/html-to-pdfmake@2.5.26/browser.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-btn{background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 16px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-file{display:inline-block;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 16px;font-size:.9rem;cursor:pointer;margin-right:8px}'
    + '.ta-embed-file input{display:none}'
    + '.ta-embed-select{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 10px;font-size:.85rem;margin:4px 4px 0 0;font-family:inherit}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-status.ok{color:var(--ta-ok)}.ta-embed-status.bad{color:var(--ta-bad)}'
    + '.ta-embed-sheets{margin-top:10px;font-size:.8rem}'
    + '.ta-embed-sheets label{display:block;margin:2px 0}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'excel-to-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="excel-to-pdf"]')) {
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
    + '<div class="ta-embed-title">Excel to PDF Converter</div>'
    + '<div class="ta-embed-subtitle">XLSX / XLS / CSV &rarr; PDF, one section per sheet &mdash; 100% in your visitor&rsquo;s browser</div>'
    + '<div class="ta-embed-card">'
    + '<label class="ta-embed-file">&#128194; Open spreadsheet<input type="file" class="ta-file" accept=".xlsx,.xls,.csv,.xlsm,.xlsb"></label>'
    + '<select class="ta-orient ta-embed-select"><option value="portrait">Portrait</option><option value="landscape">Landscape</option></select>'
    + '<select class="ta-size ta-embed-select"><option value="A4">A4</option><option value="LETTER">Letter</option></select>'
    + '<div class="ta-embed-sheets"></div>'
    + '<button type="button" class="ta-embed-btn ta-convert" style="margin-top:10px" disabled>Convert to PDF</button>'
    + '<div class="ta-embed-status">Files never leave the browser.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var loaded = {};
  function loadScript(url) {
    if (loaded[url]) return loaded[url];
    loaded[url] = new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = url; s.onload = res; s.onerror = function () { rej(new Error('Could not load ' + url)); };
      (document.head || document.documentElement).appendChild(s);
    });
    return loaded[url];
  }

  var wb = null, fileName = 'workbook';
  function status(msg, cls) {
    var s = root.querySelector('.ta-embed-status');
    s.textContent = msg; s.className = 'ta-embed-status' + (cls ? ' ' + cls : '');
  }

  root.querySelector('.ta-file').addEventListener('change', function (e) {
    var f = e.target.files[0];
    if (!f) return;
    fileName = f.name.replace(/\.(xlsx|xls|csv|xlsm|xlsb)$/i, '');
    status('Reading ' + f.name + ' …');
    var fr = new FileReader();
    fr.onload = function () {
      loadScript(XLSX_URL).then(function () {
        try { wb = XLSX.read(new Uint8Array(fr.result), { type: 'array', cellDates: true }); }
        catch (err) { wb = null; root.querySelector('.ta-convert').disabled = true; status('Could not read that file.', 'bad'); return; }
        var box = root.querySelector('.ta-embed-sheets');
        box.innerHTML = '';
        wb.SheetNames.forEach(function (name) {
          var l = document.createElement('label');
          var cb = document.createElement('input');
          cb.type = 'checkbox'; cb.checked = true; cb.setAttribute('data-sheet', name);
          l.appendChild(cb); l.appendChild(document.createTextNode(' ' + name));
          box.appendChild(l);
        });
        root.querySelector('.ta-convert').disabled = false;
        status(wb.SheetNames.length + ' sheet(s) loaded.', 'ok');
        loadScript(PDFMAKE_URL).then(function () { return loadScript(VFS_URL); }).then(function () { return loadScript(H2P_URL); }).catch(function () {});
      }).catch(function (err) { status(String(err && err.message || err), 'bad'); });
    };
    fr.readAsArrayBuffer(f);
  });

  var GRID_LAYOUT = {
    hLine: function () { return { color: '#c8c8d0', width: .5 }; },
    vLine: function () { return { color: '#c8c8d0', width: .5 }; },
    paddingLeft: function () { return 4; }, paddingRight: function () { return 4; },
    paddingTop: function () { return 2; }, paddingBottom: function () { return 2; }
  };
  function applyGrid(nodes) {
    (Array.isArray(nodes) ? nodes : [nodes]).forEach(function (n) {
      if (!n || typeof n !== 'object') return;
      if (n.table) {
        n.layout = GRID_LAYOUT;
        var cols = (n.table.body && n.table.body[0] || []).length;
        if (cols > 14) n.table.widths = Array.apply(null, Array(cols)).map(function () { return '*'; });
      }
      if (Array.isArray(n)) applyGrid(n);
    });
  }

  root.querySelector('.ta-convert').addEventListener('click', function () {
    if (!wb) return;
    var picked = [].slice.call(root.querySelectorAll('.ta-embed-sheets input:checked')).map(function (i) { return i.getAttribute('data-sheet'); });
    if (!picked.length) { status('Tick at least one sheet.', 'bad'); return; }
    status('Building PDF …');
    loadScript(PDFMAKE_URL).then(function () { return loadScript(VFS_URL); }).then(function () { return loadScript(H2P_URL); }).then(function () {
      var content = [];
      picked.forEach(function (name, idx) {
        var ws = wb.Sheets[name];
        if (!ws) return;
        var html = XLSX.utils.sheet_to_html(ws, { header: '', footer: '' });
        var tpl = document.createElement('template');
        tpl.innerHTML = html;
        var table = tpl.content.querySelector('table');
        if (!table) return;
        var nodes = htmlToPdfmake(table.outerHTML, { tableAutoSize: true, defaultStyle: { fontSize: 9 } });
        applyGrid(nodes);
        content.push(idx > 0 ? { text: name, style: 'sheetHeader', pageBreakBefore: true } : { text: name, style: 'sheetHeader' });
        content = content.concat(nodes);
      });
      if (!content.length) { status('The selected sheets are empty.', 'bad'); return; }
      var dd = {
        pageSize: root.querySelector('.ta-size').value,
        pageOrientation: root.querySelector('.ta-orient').value,
        pageMargins: [28, 28, 28, 28],
        defaultStyle: { font: 'Roboto', fontSize: 9 },
        styles: { sheetHeader: { fontSize: 13, bold: true, margin: [0, 0, 0, 8], color: '#1f2430' } },
        content: content
      };
      try {
        pdfMake.createPdf(dd).download(fileName + '.pdf');
        status('PDF downloaded.', 'ok');
      } catch (err) { status('PDF build failed: ' + (err && err.message || err), 'bad'); }
    }).catch(function (err) { status(String(err && err.message || err), 'bad'); });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.excelToPdf = {};
})();
