/*!
 * ToolAspect SQL Playground Embed
 * Install: <div id="ta-sql-playground"></div>
 *          <script src="https://toolaspect.com/embed/sql-playground.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-sql-playground';
  var BASE = 'https://toolaspect.com/sql-playground/';
  var SQLJS = 'https://cdn.jsdelivr.net/npm/sql.js@1.13.0/dist/sql-wasm.js';
  var WASM_BASE = 'https://cdn.jsdelivr.net/npm/sql.js@1.13.0/dist/';

  var SCHEMA_SQL = [
    "CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT, city TEXT, signup TEXT);",
    "INSERT INTO customers (name, city, signup) VALUES",
    " ('Ada Lovelace','London','2025-01-14'),",
    " ('Grace Hopper','New York','2025-02-03'),",
    " ('Linus Torvalds','Helsinki','2025-02-21'),",
    " ('Margaret Hamilton','Boston','2025-03-09'),",
    " ('Ken Thompson','New York','2025-04-17'),",
    " ('Barbara Liskov','Boston','2025-05-26');",
    "CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT, category TEXT, price REAL);",
    "INSERT INTO products (name, category, price) VALUES",
    " ('Mechanical Keyboard','Hardware',129.00),",
    " ('USB-C Hub','Hardware',49.50),",
    " ('4K Monitor','Hardware',349.99),",
    " ('Noise-Cancelling Headphones','Audio',249.00),",
    " ('USB Microphone','Audio',89.99),",
    " ('Standing Desk','Furniture',549.00),",
    " ('Ergonomic Chair','Furniture',329.00),",
    " ('Desk Mat','Furniture',25.00);",
    "CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER, order_date TEXT, status TEXT);",
    "INSERT INTO orders (customer_id, order_date, status) VALUES",
    " (1,'2025-06-02','shipped'),(2,'2025-06-04','delivered'),(3,'2025-06-11','shipped'),",
    " (1,'2025-06-19','delivered'),(4,'2025-06-25','cancelled'),(5,'2025-07-02','delivered'),",
    " (6,'2025-07-08','shipped'),(2,'2025-07-15','delivered'),(4,'2025-07-22','delivered');",
    "CREATE TABLE order_items (order_id INTEGER, product_id INTEGER, qty INTEGER);",
    "INSERT INTO order_items VALUES",
    " (1,1,1),(1,5,1),(2,3,1),(2,8,2),(3,2,3),(3,6,1),(4,7,1),(5,4,1),(6,1,1),(6,8,1),",
    " (7,5,2),(7,3,1),(8,6,1),(8,2,1),(9,4,1),(9,7,1);"
  ].join('\n');

  var SAMPLES = [
    'SELECT p.category, COUNT(*) AS items, ROUND(SUM(p.price*oi.qty),2) AS revenue FROM order_items oi JOIN products p ON p.id=oi.product_id JOIN orders o ON o.id=oi.order_id WHERE o.status != \'cancelled\' GROUP BY p.category ORDER BY revenue DESC;',
    'SELECT city, COUNT(*) AS customers FROM customers GROUP BY city ORDER BY customers DESC, city;',
    'SELECT name, price FROM products WHERE price > 200 ORDER BY price DESC;'
  ];

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-area{width:100%;height:80px;padding:10px 12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.72rem;line-height:1.5;resize:vertical;margin-bottom:8px}'
    + '.ta-embed-area:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-embed-btn{background:var(--ta-accent);border:none;color:#fff;border-radius:8px;padding:8px 18px;font-size:.82rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-sel{padding:7px 10px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);font-size:.8rem;font-family:inherit;margin-right:6px}'
    + '.ta-embed-tablewrap{overflow-x:auto;margin-top:10px;border:1px solid var(--ta-border);border-radius:8px}'
    + '.ta-embed-table{border-collapse:collapse;width:100%;font-size:.76rem}'
    + '.ta-embed-table th,.ta-embed-table td{padding:5px 9px;border:1px solid var(--ta-border);text-align:left;white-space:nowrap}'
    + '.ta-embed-table th{background:var(--ta-bg)}'
    + '.ta-embed-note{text-align:center;color:var(--ta-muted);font-size:.78rem;margin:6px 0 0;min-height:1.2em}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'sql-playground');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="sql-playground"]')) {
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
    + '<div class="ta-embed-title">SQL Playground</div>'
    + '<div class="ta-embed-subtitle">Real SQLite in your browser — sample store database</div>'
    + '<div class="ta-embed-card">'
    + '<select class="ta-embed-sel" id="ta-sq-sel">'
    + '<option value="0">Revenue by category</option>'
    + '<option value="1">Customers per city</option>'
    + '<option value="2">Products over $200</option>'
    + '</select>'
    + '<button type="button" class="ta-embed-btn" id="ta-sq-run">▶ Run</button>'
    + '<textarea class="ta-embed-area" id="ta-sq-in" spellcheck="false"></textarea>'
    + '<div id="ta-sq-out"></div>'
    + '<p class="ta-embed-note" id="ta-sq-note">Engine loads on first run (~650 KB, then instant).</p>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var sel = root.querySelector('#ta-sq-sel'), inA = root.querySelector('#ta-sq-in'),
      out = root.querySelector('#ta-sq-out'), note = root.querySelector('#ta-sq-note');
  var db = null, SQL = null;

  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }
  function ensureEngine(cb) {
    if (SQL) { cb(); return; }
    note.textContent = 'Loading SQLite WebAssembly (~650 KB, once)…';
    var s = document.createElement('script');
    s.src = SQLJS; s.async = true;
    s.onload = function () {
      window.initSqlJs({ locateFile: function (f) { return WASM_BASE + f; } }).then(function (engine) {
        SQL = engine;
        db = new SQL.Database();
        db.run(SCHEMA_SQL);
        cb();
      }).catch(function (e) { note.textContent = 'Could not start SQLite: ' + e.message; });
    };
    s.onerror = function () { note.textContent = 'Could not load the sql.js engine.'; };
    (document.head || document.documentElement).appendChild(s);
  }
  function run() {
    ensureEngine(function () {
      var sql = inA.value.trim();
      if (!sql) { note.textContent = 'Write a query first.'; return; }
      try {
        var results = db.exec(sql), last = null;
        for (var i = 0; i < results.length; i++) if (results[i].columns && results[i].columns.length) last = results[i];
        if (last) {
          var html = '<div class="ta-embed-tablewrap"><table class="ta-embed-table"><thead><tr>';
          last.columns.forEach(function (c) { html += '<th>' + esc(c) + '</th>'; });
          html += '</tr></thead><tbody>';
          last.values.forEach(function (row) {
            html += '<tr>';
            row.forEach(function (v) { html += '<td>' + (v == null ? '<span style="opacity:.5">NULL</span>' : esc(typeof v === 'number' ? Math.round(v * 100) / 100 : v)) + '</td>'; });
            html += '</tr>';
          });
          html += '</tbody></table></div>';
          out.innerHTML = html;
          note.textContent = last.values.length + ' row(s) · SQLite 3.49.1 (WebAssembly) · ran locally';
        } else {
          out.innerHTML = '';
          note.textContent = results.length + ' statement(s) executed · no SELECT result.';
        }
      } catch (e) {
        out.innerHTML = '';
        note.textContent = 'SQL error: ' + e.message;
      }
    });
  }
  function loadSample() { inA.value = SAMPLES[parseInt(sel.value, 10)]; }
  sel.addEventListener('change', function () { loadSample(); run(); });
  root.addEventListener('click', function (e) { if (e.target.id === 'ta-sq-run') run(); });
  loadSample();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.sqlPlayground = { run: run };
})();
