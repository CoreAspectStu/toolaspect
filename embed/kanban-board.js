/*!
 * ToolAspect Mini Kanban Board Embed
 * Install: <div id="ta-kanban-board"></div>
 *          <script src="https://toolaspect.com/embed/kanban-board.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-kanban-board';
  var BASE = 'https://toolaspect.com/kanban-board/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.3rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-kb-add{display:flex;gap:8px;margin-bottom:14px}'
    + '.ta-kb-add input{flex:1;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:9px 12px;font-size:.88rem;font-family:inherit;outline:none}'
    + '.ta-kb-add button{padding:9px 16px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-kb-board{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '@media(max-width:480px){.ta-kb-board{grid-template-columns:1fr}}'
    + '.ta-kb-col{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:10px;padding:10px;min-height:120px}'
    + '.ta-kb-col h4{font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;color:var(--ta-muted);margin:0 0 8px}'
    + '.ta-kb-item{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:8px;padding:7px 9px;font-size:.82rem;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;gap:6px;cursor:grab}'
    + '.ta-kb-item button{background:none;border:none;color:var(--ta-muted);cursor:pointer;font-size:.8rem;padding:0 2px;font-family:inherit}'
    + '.ta-kb-item button:hover{color:var(--ta-accent)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'kanban-board');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="kanban-board"]')) {
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
  root.innerHTML =
    '<div class="ta-embed-title">Mini Kanban Board</div>'
    + '<div class="ta-embed-subtitle">Add a task, then move it with ← → as it progresses</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-kb-add"><input id="ta-kb-in" placeholder="New task…"><button id="ta-kb-add">Add</button></div>'
    + '<div class="ta-kb-board">'
    + '<div class="ta-kb-col" data-col="0"><h4>To Do</h4><div class="ta-kb-cards"></div></div>'
    + '<div class="ta-kb-col" data-col="1"><h4>In Progress</h4><div class="ta-kb-cards"></div></div>'
    + '<div class="ta-kb-col" data-col="2"><h4>Done</h4><div class="ta-kb-cards"></div></div>'
    + '</div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect Kanban Board</a></div>';
  target.appendChild(root);

  var KEY = 'ta-kanban-embed-v1';
  var items;
  try { items = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
  if (!Array.isArray(items)) items = [];

  function save() { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {} }

  function render() {
    var cols = [[], [], []];
    items.forEach(function (it) { cols[it.c].push(it); });
    root.querySelectorAll('.ta-kb-col').forEach(function (col) {
      var c = +col.getAttribute('data-col');
      var box = col.querySelector('.ta-kb-cards');
      box.innerHTML = '';
      cols[c].forEach(function (it) {
        var d = document.createElement('div');
        d.className = 'ta-kb-item';
        d.draggable = true;
        var btns = '';
        if (c > 0) btns += '<button data-mv="-1" data-id="' + it.id + '">←</button>';
        if (c < 2) btns += '<button data-mv="1" data-id="' + it.id + '">→</button>';
        btns += '<button data-mv="x" data-id="' + it.id + '">×</button>';
        d.innerHTML = '<span></span><span>' + btns + '</span>';
        d.firstChild.textContent = it.t;
        d.addEventListener('dragstart', function (ev) { ev.dataTransfer.setData('text/plain', String(it.id)); });
        box.appendChild(d);
      });
    });
    save();
  }

  function find(id) { for (var i = 0; i < items.length; i++) if (String(items[i].id) === String(id)) return items[i]; return null; }
  function move(id, delta) {
    var it = find(id);
    if (!it) return;
    if (delta === 'x') { items = items.filter(function (x) { return String(x.id) !== String(id); }); }
    else { var nc = it.c + delta; if (nc >= 0 && nc <= 2) it.c = nc; }
    render();
  }

  document.getElementById('ta-kb-add').addEventListener('click', function () {
    var inp = document.getElementById('ta-kb-in');
    var v = inp.value.trim();
    if (!v) return;
    items.push({ id: Date.now(), t: v, c: 0 });
    inp.value = '';
    render();
  });
  document.getElementById('ta-kb-in').addEventListener('keydown', function (e) { if (e.key === 'Enter') document.getElementById('ta-kb-add').click(); });
  root.addEventListener('click', function (ev) {
    var t = ev.target;
    if (t.dataset && t.dataset.mv && t.dataset.id) move(t.dataset.id, t.dataset.mv === 'x' ? 'x' : +t.dataset.mv);
  });
  root.querySelectorAll('.ta-kb-col').forEach(function (col) {
    col.addEventListener('dragover', function (ev) { ev.preventDefault(); });
    col.addEventListener('drop', function (ev) {
      ev.preventDefault();
      var id = ev.dataTransfer.getData('text/plain');
      var it = find(id);
      if (it) { it.c = +col.getAttribute('data-col'); render(); }
    });
  });
  render();
})();
