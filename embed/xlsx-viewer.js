/*!
 * ToolAspect XLSX Viewer Embed
 * Install: <div id="ta-xlsx-viewer"></div>
 *          <script src="https://toolaspect.com/embed/xlsx-viewer.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: SheetJS CE 0.20.3 (Apache-2.0), vendored on toolaspect.com and run
 * in the visitor's browser — the spreadsheet never hits a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-xlsx-viewer';
  var BASE = 'https://toolaspect.com/xlsx-viewer/';
  var LIB_XLSX = 'https://toolaspect.com/excel-to-pdf/vendor/xlsx.full.min.js';

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
    + '.ta-embed-chk{display:flex;align-items:center;gap:6px;margin-top:10px;font-size:.8rem;color:var(--ta-muted)}'
    + '.ta-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}'
    + '.ta-tab{padding:4px 10px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:7px;color:var(--ta-muted);font-size:.75rem;cursor:pointer;font-family:inherit}'
    + '.ta-tab.on{border-color:var(--ta-accent);color:var(--ta-text)}'
    + '.ta-grid-head{display:flex;background:var(--ta-bg);border:1px solid var(--ta-border);border-bottom:none;border-radius:8px 8px 0 0;margin-top:10px;overflow:hidden}'
    + '.ta-grid-head span{flex:0 0 96px;width:96px;padding:4px 6px;font-size:.68rem;color:var(--ta-muted);text-align:center;border-right:1px solid var(--ta-border)}'
    + '.ta-grid-head span:first-child{flex:0 0 40px;width:40px}'
    + '.ta-grid-body{position:relative;height:340px;overflow:auto;background:var(--bg,#fff);border:1px solid var(--ta-border);border-radius:0 0 8px 8px}'
    + '.ta-grid-row{display:flex;position:absolute;left:0;right:0;border-bottom:1px solid var(--ta-border)}'
    + '.ta-cell{flex:0 0 96px;width:96px;padding:0 6px;height:26px;line-height:26px;font-size:.72rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-right:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-cell.num{text-align:right}'
    + '.ta-cell.rownum{flex:0 0 40px;width:40px;text-align:center;color:var(--ta-muted);font-size:.68rem}'
    + '.ta-cell.formula{color:var(--ta-accent)}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'xlsx-viewer');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="xlsx-viewer"]')) {
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
    + '<div class="ta-embed-title">XLSX Viewer</div>'
    + '<div class="ta-embed-subtitle">Open spreadsheets in the browser — nothing uploaded</div>'
    + '<div class="ta-embed-card">'
    + '<label>Spreadsheet (.xlsx .xls .xlsb .ods .csv)</label><input class="ta-file" type="file" accept=".xlsx,.xlsm,.xlsb,.xls,.ods,.fods,.csv,.txt">'
    + '<div class="ta-embed-chk"><input type="checkbox" class="ta-f"><span>Formula view</span></div>'
    + '<div class="ta-tabs" style="display:none"></div>'
    + '<div class="ta-grid-head" style="display:none"></div>'
    + '<div class="ta-grid-body" style="display:none"><div class="ta-inner" style="position:relative"></div></div>'
    + '<div class="ta-embed-status">Open a file to view it. First use fetches the parser (~900 KB, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var statusEl = q('.ta-embed-status');
  var ROW_H = 26, VIEW_H = 340, OVERSCAN = 6;
  var wb = null, active = '', range = null;

  function colName(c) { var s = ''; c = c + 1; while (c > 0) { var m = (c - 1) % 26; s = String.fromCharCode(65 + m) + s; c = Math.floor((c - 1) / 26); } return s; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function cellDisplay(cell, fm) {
    if (!cell) return '';
    if (fm && cell.f) return '=' + cell.f;
    if (cell.t === 'd' || cell.v instanceof Date) {
      var d = cell.v, p2 = function (n) { return (n < 10 ? '0' : '') + n };
      return d.getFullYear() + '-' + p2(d.getMonth() + 1) + '-' + p2(d.getDate());
    }
    if (cell.w != null) return cell.w;
    return cell.v == null ? '' : String(cell.v);
  }

  q('.ta-file').addEventListener('change', function () {
    var f = q('.ta-file').files[0];
    if (!f) return;
    statusEl.textContent = 'Loading parser and reading ' + f.name + ' …';
    var loadLib = window.XLSX ? Promise.resolve(window.XLSX) : new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = LIB_XLSX;
      s.onload = function () { res(window.XLSX); };
      s.onerror = function () { rej(new Error('parser failed to load')); };
      document.head.appendChild(s);
    });
    loadLib.then(function (XLSX) {
      var fr = new FileReader();
      fr.onload = function () {
        try {
          wb = XLSX.read(new Uint8Array(fr.result), { type: 'array', cellFormula: true, cellDates: true });
          var tabs = q('.ta-tabs');
          tabs.style.display = '';
          tabs.innerHTML = wb.SheetNames.map(function (n, i) {
            return '<button type="button" class="ta-tab' + (i === 0 ? ' on' : '') + '" data-i="' + i + '">' + esc(n.length > 18 ? n.slice(0, 17) + '…' : n) + '</button>';
          }).join('');
          Array.prototype.forEach.call(tabs.querySelectorAll('.ta-tab'), function (t) {
            t.addEventListener('click', function () {
              tabs.querySelectorAll('.ta-tab').forEach(function (x) { x.classList.remove('on'); });
              t.classList.add('on');
              show(wb.SheetNames[+t.getAttribute('data-i')]);
            });
          });
          q('.ta-grid-head').style.display = '';
          q('.ta-grid-body').style.display = '';
          show(wb.SheetNames[0]);
          statusEl.textContent = f.name + ' — ' + f.size.toLocaleString('en-US') + ' bytes, ' + wb.SheetNames.length + ' sheet(s). Scrolling is virtualized; files stay on your machine.';
        } catch (e) {
          statusEl.textContent = 'Could not read this file: ' + ((e && e.message) || e);
        }
      };
      fr.readAsArrayBuffer(f);
    }).catch(function (e) { statusEl.textContent = 'Failed: ' + ((e && e.message) || e); });
  });

  q('.ta-f').addEventListener('change', function () { if (wb) show(active); });

  function show(name) {
    active = name;
    var XLSX = window.XLSX, sh = wb.Sheets[name];
    range = XLSX.utils.decode_range(sh['!ref'] || 'A1');
    var head = '<span>#</span>';
    for (var c = range.s.c; c <= Math.min(range.e.c, range.s.c + 9); c++) head += '<span>' + colName(c) + '</span>';
    q('.ta-grid-head').innerHTML = head;
    var body = q('.ta-grid-body');
    q('.ta-inner').style.height = ((range.e.r - range.s.r + 1) * ROW_H) + 'px';
    body.scrollTop = 0;
    render();
  }

  function render() {
    var XLSX = window.XLSX, sh = wb.Sheets[active], fm = q('.ta-f').checked;
    var total = range.e.r - range.s.r + 1;
    var st = q('.ta-grid-body').scrollTop;
    var first = Math.max(0, Math.floor(st / ROW_H) - OVERSCAN);
    var last = Math.min(total - 1, Math.ceil((st + VIEW_H) / ROW_H) + OVERSCAN);
    var maxC = Math.min(range.e.c, range.s.c + 9);
    var html = '';
    for (var ri = first; ri <= last; ri++) {
      var r = range.s.r + ri;
      html += '<div class="ta-grid-row" style="top:' + (ri * ROW_H) + 'px"><div class="ta-cell rownum">' + (r + 1) + '</div>';
      for (var c = range.s.c; c <= maxC; c++) {
        var cell = sh[XLSX.utils.encode_cell({ r: r, c: c })];
        var txt = cellDisplay(cell, fm);
        html += '<div class="ta-cell' + ((cell && cell.t === 'n' && !fm) ? ' num' : '') + ((fm && cell && cell.f) ? ' formula' : '') + '">' + esc(txt) + '</div>';
      }
      html += '</div>';
    }
    q('.ta-inner').innerHTML = html;
  }

  q('.ta-grid-body').addEventListener('scroll', function () {
    if (window.requestAnimationFrame) window.requestAnimationFrame(render); else render();
  });
})();
