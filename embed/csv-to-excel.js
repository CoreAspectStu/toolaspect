/*!
 * ToolAspect CSV to Excel Converter Embed
 * Install: <div id="ta-csv-to-excel"></div>
 *          <script src="https://toolaspect.com/embed/csv-to-excel.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Note: ExcelJS (~950KB) is loaded from jsDelivr on first conversion, then the
 * workbook is built entirely in the visitor's browser. CSV text is never uploaded.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-csv-to-excel';
  var BASE = 'https://toolaspect.com/csv-to-excel/';
  var EXCELJS_URL = 'https://cdn.jsdelivr.net/npm/exceljs@4.4.0/dist/exceljs.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group textarea{width:100%;min-height:130px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.82rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;outline:none;resize:vertical}'
    + '.ta-embed-form-group textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-form-group select,.ta-embed-form-group input[type="text"]{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group select:focus,.ta-embed-form-group input[type="text"]:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-btn{display:block;width:100%;background:var(--ta-accent);border:none;color:#fff;border-radius:10px;padding:12px;'
    + 'font-size:.95rem;font-weight:600;font-family:inherit;cursor:pointer;margin-top:4px}'
    + '.ta-embed-btn:hover{filter:brightness(1.08)}'
    + '.ta-embed-btn:disabled{opacity:.55;cursor:wait}'
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.5rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-status{color:var(--ta-muted);font-size:.8rem;text-align:center;margin-bottom:10px;min-height:1.2em}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'csv-to-excel');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="csv-to-excel"]')) {
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
    + '<div class="ta-embed-title">CSV to Excel Converter</div>'
    + '<div class="ta-embed-subtitle">Free .xlsx conversion, runs in the browser</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Paste your CSV</label><textarea class="ta-csv" spellcheck="false" placeholder="name,city,amount&#10;Ada,London,94500&#10;Grace,New York,105000"></textarea></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Delimiter</label><select class="ta-delim">'
    + '<option value="auto" selected>Auto-detect</option><option value=",">Comma</option><option value=";">Semicolon</option><option value="\t">Tab</option><option value="|">Pipe</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Sheet name</label><input type="text" class="ta-sheet" value="Sheet1" maxlength="31"></div>'
    + '</div>'
    + '<button type="button" class="ta-embed-btn">Convert to Excel</button>'
    + '</div>'
    + '<div class="ta-embed-status">Nothing is uploaded — conversion happens locally.</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">Paste CSV above and convert</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var exceljsPromise = null;

  function status(t) { root.querySelector('.ta-embed-status').textContent = t; }

  function loadExcelJS() {
    if (window.ExcelJS) return Promise.resolve(window.ExcelJS);
    if (exceljsPromise) return exceljsPromise;
    exceljsPromise = new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = EXCELJS_URL;
      s.onload = function () { window.ExcelJS ? res(window.ExcelJS) : rej(new Error('ExcelJS unavailable')); };
      s.onerror = function () { exceljsPromise = null; rej(new Error('CDN unreachable')); };
      (document.head || document.documentElement).appendChild(s);
    });
    return exceljsPromise;
  }

  function sniffDelim(text) {
    var firstLine = (text.split(/\r?\n/)[0] || '');
    var cands = [',', ';', '\t', '|'];
    var best = ',', bestC = -1;
    cands.forEach(function (d) {
      var c = firstLine.split(d).length - 1;
      if (c > bestC) { bestC = c; best = d; }
    });
    return best;
  }

  function parseCSV(text, delim) {
    var rows = [], row = [], cur = '', q = false;
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (q) {
        if (ch === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; }
        else cur += ch;
      } else {
        if (ch === '"') q = true;
        else if (ch === delim) { row.push(cur); cur = ''; }
        else if (ch === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
        else if (ch !== '\r') cur += ch;
      }
    }
    if (cur !== '' || row.length) { row.push(cur); rows.push(row); }
    if (rows.length && rows[rows.length - 1].length === 1 && rows[rows.length - 1][0] === '') rows.pop();
    return rows;
  }

  function typed(v) {
    if (typeof v !== 'string') return { v: v, t: 'str' };
    if (/^-?\d+(\.\d+)?$/.test(v) && !/^0\d/.test(v) && !/^-0\d/.test(v)) {
      var n = Number(v);
      if (Math.abs(n) <= 1e15) return { v: n, t: 'num' };
    }
    return { v: v, t: 'str' };
  }

  var btn = root.querySelector('.ta-embed-btn');

  function convert() {
    var raw = root.querySelector('.ta-csv').value;
    if (!raw.trim()) { status('Paste some CSV first.'); return; }
    var d = root.querySelector('.ta-delim').value;
    if (d === 'auto') d = sniffDelim(raw);
    if (d === '') d = ',';
    var rows = parseCSV(raw, d === 'tab' ? '\t' : d);
    if (!rows.length) { status('No rows found.'); return; }
    var sheetName = (root.querySelector('.ta-sheet').value || 'Sheet1').replace(/[\\/*?:[\]]/g, '').slice(0, 31) || 'Sheet1';
    btn.disabled = true;
    status('Building workbook…');
    loadExcelJS().then(function (ExcelJS) {
      var wb = new ExcelJS.Workbook();
      var ws = wb.addWorksheet(sheetName);
      ws.columns = Array.from({ length: rows[0].length }, function () { return { width: 16 }; });
      rows.forEach(function (r) {
        ws.addRow(r.map(function (c) { return typed(c).t === 'num' ? Number(c) : c; }));
      });
      var hr = ws.getRow(1);
      hr.font = { bold: true };
      return wb.xlsx.writeBuffer().then(function (buf) {
        var nCells = rows.reduce(function (a, r) { return a + r.length; }, 0);
        root.querySelector('.ta-embed-big').textContent = rows.length + ' rows × ' + rows[0].length + ' cols';
        root.querySelector('.ta-embed-sub').textContent = sheetName + '.xlsx (' + (buf.byteLength / 1024).toFixed(1) + ' KB) · ' + nCells.toLocaleString() + ' cells';
        var blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = sheetName + '.xlsx';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
        status('Downloaded ' + sheetName + '.xlsx.');
      });
    }).catch(function (e) {
      status('Conversion failed: ' + e.message);
    }).finally(function () { btn.disabled = false; });
  }

  btn.addEventListener('click', convert);

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.csvToExcel = { convert: convert };
})();
