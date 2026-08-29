/*!
 * ToolAspect CSV to SQL Converter Embed
 * Install: <div id="ta-csv-to-sql"></div>
 *          <script src="https://toolaspect.com/embed/csv-to-sql.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-csv-to-sql';
  var BASE = 'https://toolaspect.com/csv-to-sql/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:16px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-form-group{margin-bottom:0}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select,.ta-embed-form-group textarea{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:9px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group textarea{font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:.82rem;min-height:110px;resize:vertical}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus,.ta-embed-form-group textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-check{display:flex;align-items:center;font-size:.8rem;color:var(--ta-text);cursor:pointer;gap:6px}'
    + '.ta-embed-check input{width:auto;accent-color:var(--ta-accent)}'
    + '.ta-embed-out{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:12px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;'
    + 'font-size:.78rem;line-height:1.5;white-space:pre;overflow-x:auto;max-height:260px;overflow-y:auto;margin-bottom:12px;color:var(--ta-text)}'
    + '.ta-embed-btn{display:inline-block;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:9px 18px;font-size:.88rem;'
    + 'cursor:pointer;font-family:inherit;font-weight:600;margin:0 6px 10px 0}'
    + '.ta-embed-btn.ta-secondary{background:var(--ta-surface);color:var(--ta-text);border:1px solid var(--ta-border)}'
    + '.ta-embed-stats{font-size:.75rem;color:var(--ta-muted);margin-bottom:10px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'csv-to-sql');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="csv-to-sql"]')) {
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
    + '<div class="ta-embed-title">CSV to SQL Converter</div>'
    + '<div class="ta-embed-subtitle">CREATE TABLE + INSERT statements from CSV, in your browser</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Dialect</label><select class="ta-dialect"><option value="mysql">MySQL</option><option value="postgres">PostgreSQL</option><option value="sqlite">SQLite</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Table name</label><input type="text" class="ta-table" value="my_table" spellcheck="false"></div>'
    + '<div class="ta-embed-form-group"><label>Rows per INSERT</label><input type="number" class="ta-batch" value="500" min="1" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label class="ta-embed-check"><input type="checkbox" class="ta-header" checked> First row is header</label></div>'
    + '<div class="ta-embed-form-group"><label class="ta-embed-check"><input type="checkbox" class="ta-createtable" checked> Include CREATE TABLE</label></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>CSV input</label><textarea class="ta-csv" placeholder="id,name,hired&#10;1,Alice,2021-03-15&#10;2,Bob,2022-11-02" spellcheck="false"></textarea></div>'
    + '</div>'
    + '<div class="ta-embed-stats">—</div>'
    + '<div class="ta-embed-out">-- SQL output will appear here</div>'
    + '<button type="button" class="ta-embed-btn ta-convert">Convert</button>'
    + '<button type="button" class="ta-embed-btn ta-secondary ta-copy">Copy SQL</button>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var outEl = root.querySelector('.ta-embed-out');
  var statsEl = root.querySelector('.ta-embed-stats');

  // ── RFC 4180 parser (same engine as toolaspect.com/csv-to-sql) ──
  function parseCSV(text, delimiter) {
    var rows = [], row = [], field = '', q = false, i = 0, len = text.length;
    while (i < len) {
      var ch = text[i];
      if (q) {
        if (ch === '"') {
          if (i + 1 < len && text[i + 1] === '"') { field += '"'; i += 2; }
          else { q = false; i++; }
        } else { field += ch; i++; }
      } else {
        if (ch === '"') { q = true; i++; }
        else if (ch === delimiter) { row.push(field); field = ''; i++; }
        else if (ch === '\r' || ch === '\n') {
          row.push(field); field = ''; rows.push(row); row = [];
          if (ch === '\r' && text[i + 1] === '\n') i += 2; else i++;
        } else { field += ch; i++; }
      }
    }
    if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
    if (rows.length && rows[rows.length - 1].length === 1 && rows[rows.length - 1][0] === '') rows.pop();
    return rows;
  }

  var RE_INT = /^-?(0|[1-9]\d*)$/, RE_NUM = /^-?(0|[1-9]\d*)(\.\d+)?$/, RE_DATE = /^\d{4}-\d{2}-\d{2}$/, RE_TS = /^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}(:\d{2})?$/;

  function inferType(values) {
    var ne = values.filter(function (v) { return v !== ''; });
    if (!ne.length) return { base: 'TEXT' };
    var all = function (re) { return ne.every(function (v) { return re.test(v); }); };
    if (all(RE_DATE)) return { base: 'DATE' };
    if (all(RE_TS)) return { base: 'TIMESTAMP' };
    if (ne.every(function (v) { return v === 'true' || v === 'false'; })) return { base: 'BOOLEAN' };
    if (all(RE_INT)) {
      var big = ne.some(function (v) { return Math.abs(Number(v)) >= 2147483648; });
      return { base: big ? 'BIGINT' : 'INTEGER' };
    }
    if (all(RE_NUM)) {
      var mi = 0, md = 0;
      ne.forEach(function (v) {
        var m = v.match(/^-?(\d*)(?:\.(\d+))?$/);
        var ip = (m[1] || '').replace(/^0+(?=\d)/, '').length, dp = (m[2] || '').length;
        if (ip > mi) mi = ip; if (dp > md) md = dp;
      });
      return { base: 'DECIMAL', p: mi + md, s: md };
    }
    var ml = 1;
    ne.forEach(function (v) { if (v.length > ml) ml = v.length; });
    return { base: 'VARCHAR', len: ml };
  }

  var TYPE_MAP = {
    mysql: { INTEGER: 'INTEGER', BIGINT: 'BIGINT', DECIMAL: function (t) { return 'DECIMAL(' + t.p + ',' + t.s + ')'; }, VARCHAR: function (t) { return 'VARCHAR(' + Math.max(t.len, 1) + ')'; }, DATE: 'DATE', TIMESTAMP: 'DATETIME', BOOLEAN: 'TINYINT(1)' },
    postgres: { INTEGER: 'INTEGER', BIGINT: 'BIGINT', DECIMAL: function (t) { return 'NUMERIC(' + t.p + ',' + t.s + ')'; }, VARCHAR: function (t) { return 'VARCHAR(' + Math.max(t.len, 1) + ')'; }, DATE: 'DATE', TIMESTAMP: 'TIMESTAMP', BOOLEAN: 'BOOLEAN' },
    sqlite: { INTEGER: 'INTEGER', BIGINT: 'INTEGER', DECIMAL: 'REAL', VARCHAR: 'TEXT', DATE: 'TEXT', TIMESTAMP: 'TEXT', BOOLEAN: 'INTEGER' }
  };

  function sanitize(name) {
    var s = name.trim().toLowerCase().replace(/[^a-z0-9_]+/g, '_').replace(/^_+|_+$/g, '');
    if (/^\d/.test(s)) s = 'c_' + s;
    return s || 'col';
  }
  function qi(id, d) { return d === 'mysql' ? '`' + id + '`' : '"' + id + '"'; }
  function lit(v, t, d) {
    if (v === '') return t.base === 'VARCHAR' ? "''" : 'NULL';
    if (t.base === 'BOOLEAN') return d === 'postgres' ? (v === 'true' ? 'TRUE' : 'FALSE') : (v === 'true' ? '1' : '0');
    if (t.base === 'INTEGER' || t.base === 'BIGINT' || t.base === 'DECIMAL') return v;
    return "'" + v.replace(/'/g, "''") + "'";
  }

  var lastSql = '';

  function calc() {
    var input = root.querySelector('.ta-csv').value;
    var d = root.querySelector('.ta-dialect').value;
    var table = sanitize(root.querySelector('.ta-table').value || 'my_table');
    var batchSize = Math.max(1, parseInt(root.querySelector('.ta-batch').value, 10) || 500);
    var hasHeader = root.querySelector('.ta-header').checked;
    var createTable = root.querySelector('.ta-createtable').checked;
    if (!input.trim()) {
      outEl.textContent = '-- SQL output will appear here';
      statsEl.textContent = '—';
      lastSql = '';
      return;
    }
    try {
      var rows = parseCSV(input, ',');
      if (!rows.length) { outEl.textContent = '-- no rows found'; lastSql = ''; return; }
      var headers = hasHeader ? rows[0].map(sanitize) : rows[0].map(function (_, i) { return 'col_' + (i + 1); });
      var data = hasHeader ? rows.slice(1) : rows;
      var types = headers.map(function (_, c) { return inferType(data.map(function (r) { return r[c] !== undefined ? r[c] : ''; })); });
      var tm = TYPE_MAP[d], lines = [];
      if (createTable) {
        lines.push('CREATE TABLE ' + qi(table, d) + ' (');
        lines.push(headers.map(function (h, i) {
          var t = types[i], decl = tm[t.base];
          return '  ' + qi(h, d) + ' ' + (typeof decl === 'function' ? decl(t) : decl);
        }).join(',\n'));
        lines.push(');');
        lines.push('');
      }
      var batches = [];
      for (var i = 0; i < data.length; i += batchSize) batches.push(data.slice(i, i + batchSize));
      batches.forEach(function (batch) {
        lines.push('INSERT INTO ' + qi(table, d) + ' (' + headers.map(function (h) { return qi(h, d); }).join(', ') + ') VALUES');
        lines.push(batch.map(function (r) {
          return '(' + headers.map(function (_, c) { return lit(r[c] !== undefined ? r[c] : '', types[c], d); }).join(', ') + ')';
        }).join(',\n') + ';');
      });
      lastSql = lines.join('\n');
      outEl.textContent = lastSql;
      outEl.scrollTop = 0;
      statsEl.textContent = data.length + ' rows · ' + headers.length + ' cols · ' + ((createTable ? 1 : 0) + batches.length) + ' statements · ' + d;
    } catch (e) {
      outEl.textContent = '-- Error: ' + e.message;
      statsEl.textContent = 'Error';
      lastSql = '';
    }
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  root.querySelector('.ta-convert').addEventListener('click', calc);
  root.querySelector('.ta-copy').addEventListener('click', function () {
    if (lastSql && navigator.clipboard) {
      navigator.clipboard.writeText(lastSql);
      var b = this, orig = b.textContent;
      b.textContent = '✓ Copied';
      setTimeout(function () { b.textContent = orig; }, 1500);
    }
  });

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.csvToSql = { recalc: calc };
})();
