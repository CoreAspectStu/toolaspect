/*!
 * ToolAspect XLSX to CSV Converter Embed
 * Install: <div id="ta-xlsx-to-csv"></div>
 *          <script src="https://toolaspect.com/embed/xlsx-to-csv.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: SheetJS Community Edition 0.20.3 (Apache-2.0), vendored at
 * toolaspect.com/xlsx-to-csv/vendor/ — loaded on demand; the conversion
 * runs entirely in the visitor's browser, nothing is uploaded.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-xlsx-to-csv';
  var BASE = 'https://toolaspect.com/xlsx-to-csv/';
  var LIB_URL = 'https://toolaspect.com/xlsx-to-csv/vendor/xlsx.full.min.js';

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
    + '.ta-embed-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}'
    + '.ta-embed-tab{padding:5px 12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:999px;color:var(--ta-muted);font-size:.78rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-tab.active{border-color:var(--ta-accent);color:var(--ta-accent);font-weight:600}'
    + '.ta-embed-prev{overflow:auto;margin-top:10px;border:1px solid var(--ta-border);border-radius:8px;max-height:220px;display:none}'
    + '.ta-embed-prev table{width:100%;border-collapse:collapse;font-size:.72rem;font-family:ui-monospace,Menlo,Consolas,monospace}'
    + '.ta-embed-prev th,.ta-embed-prev td{padding:3px 7px;border:1px solid var(--ta-border);text-align:left;white-space:nowrap;color:var(--ta-text)}'
    + '.ta-embed-prev th{background:var(--ta-bg);color:var(--ta-muted);font-weight:500}'
    + '.ta-embed-btn{padding:10px 22px;border-radius:8px;border:none;background:var(--ta-accent);color:#fff;font-size:.88rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn:disabled{opacity:.4;cursor:not-allowed}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:12px}'
    + '.ta-embed-check{display:flex;align-items:center;gap:6px;font-size:.78rem;color:var(--ta-muted);cursor:pointer}'
    + '.ta-embed-check input{accent-color:var(--ta-accent)}'
    + '.ta-embed-status{margin-top:10px;font-size:.85rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'xlsx-to-csv');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="xlsx-to-csv"]')) {
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
    + '<div class="ta-embed-title">XLSX to CSV Converter</div>'
    + '<div class="ta-embed-subtitle">Pick any sheet, download CSV — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop"><p>📊 Click or drag an Excel file (.xlsx, .xlsm, .xlsb, .xls, .ods)</p></div>'
    + '<input type="file" accept=".xlsx,.xlsm,.xlsb,.xls,.ods" style="display:none">'
    + '<div class="ta-embed-tabs"></div>'
    + '<div class="ta-embed-prev"><table></table></div>'
    + '<div class="ta-embed-actions">'
    + '<button type="button" class="ta-embed-btn dl" disabled>Download CSV</button>'
    + '<button type="button" class="ta-embed-btn ghost cl">Clear</button>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-embed-bom" checked>UTF-8 BOM for Excel</label>'
    + '</div>'
    + '<div class="ta-embed-status"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var dropEl = root.querySelector('.ta-embed-drop');
  var fileEl = root.querySelector('input[type="file"]');
  var tabsEl = root.querySelector('.ta-embed-tabs');
  var prevEl = root.querySelector('.ta-embed-prev');
  var tableEl = root.querySelector('.ta-embed-prev table');
  var statusEl = root.querySelector('.ta-embed-status');
  var dlBtn = root.querySelector('.dl');
  var clBtn = root.querySelector('.cl');
  var bomEl = root.querySelector('.ta-embed-bom');

  var wb = null, fileName = null, active = 0, libPromise = null;

  function loadLib() {
    if (window.XLSX) return Promise.resolve(window.XLSX);
    if (!libPromise) {
      libPromise = new Promise(function (res, rej) {
        var s = document.createElement('script');
        s.src = LIB_URL;
        s.onload = function () { res(window.XLSX); };
        s.onerror = function () { libPromise = null; rej(new Error('engine failed to load')); };
        (document.head || document.documentElement).appendChild(s);
      });
    }
    return libPromise;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function readFile(f) {
    return new Promise(function (res, rej) {
      var fr = new FileReader();
      fr.onload = function () { res(new Uint8Array(fr.result)); };
      fr.onerror = function () { rej(new Error('unreadable')); };
      fr.readAsArrayBuffer(f);
    });
  }
  function csvOf(name) { return window.XLSX.utils.sheet_to_csv(wb.Sheets[name]); }

  function render() {
    tabsEl.innerHTML = '';
    if (!wb) return;
    wb.SheetNames.forEach(function (name, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'ta-embed-tab' + (i === active ? ' active' : '');
      b.textContent = name;
      b.addEventListener('click', function () { active = i; render(); });
      tabsEl.appendChild(b);
    });
    var name = wb.SheetNames[active];
    var grid = window.XLSX.utils.sheet_to_json(wb.Sheets[name], { header: 1, defval: '' }).slice(0, 10);
    var maxCols = grid.reduce(function (m, r) { return Math.max(m, r.length); }, 0);
    var html = '';
    grid.forEach(function (row, ri) {
      html += '<tr>';
      for (var c = 0; c < maxCols; c++) html += '<td>' + esc(row[c] !== undefined ? String(row[c]) : '') + '</td>';
      html += '</tr>';
    });
    tableEl.innerHTML = html;
    prevEl.style.display = 'block';
    dlBtn.disabled = false;
    var rows = window.XLSX.utils.sheet_to_json(wb.Sheets[name], { header: 1 }).length;
    statusEl.innerHTML = wb.SheetNames.length + ' sheet' + (wb.SheetNames.length > 1 ? 's' : '') + ' · sheet <strong>' + esc(name) + '</strong> · ' + rows + ' rows';
  }

  async function load(fileList) {
    var f = Array.prototype.slice.call(fileList).filter(function (x) { return /\.(xlsx|xlsm|xlsb|xls|ods)$/i.test(x.name); })[0];
    if (!f) return;
    try {
      var XLSX = await loadLib();
      fileName = f.name;
      wb = XLSX.read(await readFile(f), { type: 'array' });
      active = 0;
      render();
    } catch (e) {
      statusEl.innerHTML = '<span style="color:#dc2626">Could not read the workbook: ' + esc(String(e && e.message || e)) + '</span>';
    }
  }

  function download() {
    if (!wb) return;
    var name = wb.SheetNames[active];
    var bom = bomEl.checked ? '\uFEFF' : '';
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([bom + csvOf(name)], { type: 'text/csv;charset=utf-8' }));
    a.download = name + '.csv';
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
  }

  dropEl.addEventListener('click', function () { fileEl.click(); });
  dropEl.addEventListener('dragover', function (e) { e.preventDefault(); dropEl.classList.add('over'); });
  dropEl.addEventListener('dragleave', function () { dropEl.classList.remove('over'); });
  dropEl.addEventListener('drop', function (e) { e.preventDefault(); dropEl.classList.remove('over'); if (e.dataTransfer && e.dataTransfer.files.length) load(e.dataTransfer.files); });
  fileEl.addEventListener('change', function (e) { load(e.target.files); fileEl.value = ''; });
  dlBtn.addEventListener('click', download);
  clBtn.addEventListener('click', function () { wb = null; fileName = null; active = 0; tabsEl.innerHTML = ''; tableEl.innerHTML = ''; prevEl.style.display = 'none'; dlBtn.disabled = true; statusEl.innerHTML = ''; });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.xlsxToCsv = { recalc: render };
})();
