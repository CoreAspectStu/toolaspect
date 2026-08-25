/*!
 * ToolAspect Form Builder Embed
 * Install: <div id="ta-form-builder"></div>
 *          <script src="https://toolaspect.com/embed/form-builder.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-form-builder';
  var BASE = 'https://toolaspect.com/form-builder/';

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
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-pal{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}'
    + '.ta-embed-pal button{padding:6px 12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-pal button:hover{border-color:var(--ta-accent)}'
    + '.ta-embed-out{background:#0f172a;color:#a5f3fc;border:1px solid var(--ta-border);border-radius:8px;padding:12px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.76rem;white-space:pre;overflow-x:auto;margin-top:12px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'form-builder');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="form-builder"]')) {
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
    '<div class="ta-embed-title">HTML Form Snippet Generator</div>'
    + '<div class="ta-embed-subtitle">Add fields, get clean semantic HTML to paste anywhere</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-pal">'
    + '<button data-t="text">Text</button><button data-t="email">Email</button><button data-t="number">Number</button>'
    + '<button data-t="date">Date</button><button data-t="textarea">Long text</button><button data-t="select">Dropdown</button><button data-t="checkbox">Checkbox</button>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Field label (for the last field you added)</label><input id="ta-fb-label" placeholder="Email address"></div>'
    + '<div class="ta-embed-form-group"><label>Required? <input type="checkbox" id="ta-fb-req" style="width:auto"></label></div>'
    + '<div class="ta-embed-out" id="ta-fb-out" style="display:none"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect Form Builder</a></div>';
  target.appendChild(root);

  var fields = [];
  function slug(s) {
    return String(s || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'field';
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  }
  function render() {
    var out = document.getElementById('ta-fb-out');
    if (!fields.length) { out.style.display = 'none'; return; }
    var h = '<form action="#" method="POST">\n';
    fields.forEach(function (f) {
      var nm = esc(slug(f.label));
      var fid = 'f_' + nm;
      var req = f.required ? ' required' : '';
      if (f.type === 'checkbox') {
        h += '  <label for="' + fid + '"><input type="checkbox" id="' + fid + '" name="' + nm + '"' + req + '> ' + esc(f.label) + '</label>\n';
      } else if (f.type === 'textarea') {
        h += '  <label for="' + fid + '">' + esc(f.label) + '</label>\n  <textarea id="' + fid + '" name="' + nm + '" rows="4"' + req + '></textarea>\n';
      } else if (f.type === 'select') {
        h += '  <label for="' + fid + '">' + esc(f.label) + '</label>\n  <select id="' + fid + '" name="' + nm + '"' + req + '>\n    <option>Option 1</option>\n    <option>Option 2</option>\n  </select>\n';
      } else {
        h += '  <label for="' + fid + '">' + esc(f.label) + '</label>\n  <input type="' + f.type + '" id="' + fid + '" name="' + nm + '"' + req + '>\n';
      }
    });
    h += '  <button type="submit">Submit</button>\n</form>';
    out.style.display = 'block';
    out.textContent = h;
  }
  root.querySelector('.ta-embed-pal').addEventListener('click', function (ev) {
    var t = ev.target;
    if (t.dataset && t.dataset.t) {
      fields.push({ type: t.dataset.t, label: document.getElementById('ta-fb-label').value.trim() || t.dataset.t + ' field', required: document.getElementById('ta-fb-req').checked });
      document.getElementById('ta-fb-label').value = '';
      document.getElementById('ta-fb-req').checked = false;
      render();
    }
  });
})();
