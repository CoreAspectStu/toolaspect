/*!
 * ToolAspect Excel Diff Embed
 * Install: <div id="ta-excel-diff"></div>
 *          <script src="https://toolaspect.com/embed/excel-diff.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: SheetJS Community Edition 0.20.3 (Apache-2.0), vendored at
 * toolaspect.com/xlsx-to-csv/vendor/ — loaded on demand; the comparison
 * runs entirely in the visitor's browser. No upload, ever.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-excel-diff';
  var BASE = 'https://toolaspect.com/excel-diff/';
  var LIB_URL = 'https://toolaspect.com/xlsx-to-csv/vendor/xlsx.full.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;--ta-warn:#d97706;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171;--ta-warn:#facc15}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-fl{display:block;width:100%;padding:9px;background:var(--ta-bg);border:1px dashed var(--ta-border);border-radius:8px;color:var(--ta-text);font-size:.82rem;font-family:inherit}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:12px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;text-align:center;text-decoration:none}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-counts{display:flex;gap:8px;margin-top:10px}'
    + '.ta-embed-pill{flex:1;text-align:center;border:1px solid var(--ta-border);border-radius:8px;padding:6px;font-size:.78rem;color:var(--ta-muted)}'
    + '.ta-embed-pill b{display:block;font-size:1.2rem;color:var(--ta-text)}'
    + '.ta-embed-pill.chg b{color:var(--ta-warn)}'
    + '.ta-embed-pill.add b{color:var(--ta-ok)}'
    + '.ta-embed-pill.rem b{color:var(--ta-bad)}'
    + '.ta-drow{display:grid;grid-template-columns:52px 62px 1fr 1fr;gap:6px;font-size:.74rem;padding:5px 6px;margin-top:5px;border:1px solid var(--ta-border);border-radius:7px;background:var(--ta-bg);word-break:break-all}'
    + '.ta-drow .r{font-family:ui-monospace,Menlo,monospace;color:var(--ta-accent);font-weight:600}'
    + '.ta-drow .k{font-weight:700}.ta-drow .k.changed{color:var(--ta-warn)}.ta-drow .k.added{color:var(--ta-ok)}.ta-drow .k.removed{color:var(--ta-bad)}'
    + '.ta-drow .o{color:var(--ta-bad)}.ta-drow .n{color:var(--ta-ok)}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'excel-diff');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="excel-diff"]')) {
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
    + '<div class="ta-embed-title">Excel Diff</div>'
    + '<div class="ta-embed-subtitle">Compare two spreadsheets cell by cell — in the browser, no upload</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-row">'
    + '<input class="ta-fa" type="file" accept=".xlsx,.xlsm,.xlsb,.xls,.ods,.csv" title="File A — original">'
    + '<input class="ta-fb" type="file" accept=".xlsx,.xlsm,.xlsb,.xls,.ods,.csv" title="File B — new version">'
    + '</div>'
    + '<button class="ta-embed-btn ta-go" type="button" disabled>Compare Files</button>'
    + '<div class="ta-out"></div>'
    + '<div class="ta-embed-status">Supports .xlsx, .xls, .ods and .csv. First click fetches the engine (~900 KB, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var wbA = null, wbB = null, libPromise = null;

  function getLib() {
    if (libPromise) return libPromise;
    libPromise = new Promise(function (res, rej) {
      if (window.XLSX) return res(window.XLSX);
      var s = document.createElement('script');
      s.src = LIB_URL;
      s.onload = function () { window.XLSX ? res(window.XLSX) : rej(new Error('XLSX global missing')); };
      s.onerror = function () { rej(new Error('engine failed to load')); };
      (document.head || document.documentElement).appendChild(s);
    });
    return libPromise;
  }

  function loadWb(input, which) {
    var f = input.files[0];
    if (!f) return;
    var fr = new FileReader();
    fr.onload = function () {
      getLib().then(function (XLSX) {
        var wb = XLSX.read(new Uint8Array(fr.result), { type: 'array', cellDates: true });
        if (which === 'A') wbA = wb; else wbB = wb;
        q('.ta-embed-status').textContent = f.name + ' loaded (' + wb.SheetNames.length + ' sheet' + (wb.SheetNames.length > 1 ? 's' : '') + '). ' + (wbA && wbB ? 'Hit Compare.' : 'Open the other file.');
        q('.ta-go').disabled = !(wbA && wbB);
      }).catch(function (e) {
        q('.ta-embed-status').textContent = 'Could not read ' + f.name + ': ' + ((e && e.message) || e);
      });
    };
    fr.readAsArrayBuffer(f);
  }
  q('.ta-fa').addEventListener('change', function () { loadWb(this, 'A'); });
  q('.ta-fb').addEventListener('change', function () { loadWb(this, 'B'); });

  q('.ta-go').addEventListener('click', function () {
    if (!wbA || !wbB) return;
    var XLSX = window.XLSX;
    var out = q('.ta-out');
    var statusEl = q('.ta-embed-status');
    statusEl.textContent = 'Comparing cell by cell …';
    var sheetsA = wbA.SheetNames, sheetsB = wbB.SheetNames;
    var addedSheets = sheetsB.filter(function (s) { return sheetsA.indexOf(s) < 0; });
    var removedSheets = sheetsA.filter(function (s) { return sheetsB.indexOf(s) < 0; });
    var changed = 0, added = 0, removed = 0, rows = [], CAP = 12;
    sheetsA.filter(function (s) { return sheetsB.indexOf(s) >= 0; }).forEach(function (name) {
      var ra = XLSX.utils.sheet_to_json(wbA.Sheets[name], { header: 1, defval: null, raw: true });
      var rb = XLSX.utils.sheet_to_json(wbB.Sheets[name], { header: 1, defval: null, raw: true });
      for (var r = 0; r < Math.max(ra.length, rb.length); r++) {
        var ca = ra[r] || [], cb = rb[r] || [];
        for (var c = 0; c < Math.max(ca.length, cb.length); c++) {
          var va = ca[c] == null ? '' : ca[c], vb = cb[c] == null ? '' : cb[c];
          if (String(va) === String(vb)) continue;
          var kind = va === '' ? 'added' : vb === '' ? 'removed' : 'changed';
          if (kind === 'changed') changed++; else if (kind === 'added') added++; else removed++;
          if (rows.length < CAP) rows.push({ sheet: name, ref: XLSX.utils.encode_cell({ r: r, c: c }), kind: kind, from: va, to: vb });
        }
      }
    });
    var html = '<div class="ta-embed-counts"><div class="ta-embed-pill chg"><b>' + changed + '</b>changed</div>'
      + '<div class="ta-embed-pill add"><b>' + added + '</b>added</div>'
      + '<div class="ta-embed-pill rem"><b>' + removed + '</b>removed</div></div>';
    if (addedSheets.length) html += '<div style="font-size:.76rem;color:var(--ta-ok);margin-top:8px">Sheets only in B: ' + addedSheets.join(', ') + '</div>';
    if (removedSheets.length) html += '<div style="font-size:.76rem;color:var(--ta-bad);margin-top:8px">Sheets only in A: ' + removedSheets.join(', ') + '</div>';
    rows.forEach(function (x) {
      html += '<div class="ta-drow"><span class="r">' + x.ref + '</span><span class="k ' + x.kind + '">' + x.kind
        + '</span><span class="o">' + String(x.from === '' ? '(empty)' : x.from) + '</span><span class="n">' + String(x.to === '' ? '(empty)' : x.to) + '</span></div>';
    });
    var total = changed + added + removed;
    if (total > CAP) html += '<div style="font-size:.74rem;color:var(--ta-muted);margin-top:6px">+' + (total - CAP) + ' more — full list on the tool page.</div>';
    out.innerHTML = html;
    statusEl.textContent = total === 0 ? 'No differences — identical values.' : (total + ' differing cell' + (total === 1 ? '' : 's') + ' found, all computed locally.');
  });
})();
