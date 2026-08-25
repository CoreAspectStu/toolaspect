/*!
 * ToolAspect Cover Letter Snippet Generator Embed
 * Install: <div id="ta-cover-letter-generator"></div>
 *          <script src="https://toolaspect.com/embed/cover-letter-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-cover-letter-generator';
  var BASE = 'https://toolaspect.com/cover-letter-generator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-out{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:14px;font-size:.92rem;margin-top:12px;white-space:pre-wrap;font-family:Georgia,serif;color:var(--ta-text)}'
    + '.ta-embed-btn{display:block;width:100%;padding:11px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.95rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'cover-letter-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="cover-letter-generator"]')) {
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
    '<div class="ta-embed-title">Cover Letter Opening Paragraph</div>'
    + '<div class="ta-embed-subtitle">The four sentences hiring managers actually read</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Company</label><input id="ta-cl-co" placeholder="Northwind Labs"></div>'
    + '<div class="ta-embed-form-group"><label>Role</label><input id="ta-cl-role" placeholder="Senior Product Manager"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Years of relevant experience</label><input id="ta-cl-yrs" type="number" value="5" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Best measurable achievement</label><input id="ta-cl-win" placeholder="lifted checkout conversion 18% in two quarters"></div>'
    + '<button class="ta-embed-btn" id="ta-cl-go">Generate opening</button>'
    + '<div class="ta-embed-out" id="ta-cl-out" style="display:none"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect Cover Letter Generator</a></div>';
  target.appendChild(root);

  document.getElementById('ta-cl-go').addEventListener('click', function () {
    var co = document.getElementById('ta-cl-co').value.trim() || 'your company';
    var role = document.getElementById('ta-cl-role').value.trim() || 'this role';
    var yrs = parseInt(document.getElementById('ta-cl-yrs').value, 10) || 0;
    var win = document.getElementById('ta-cl-win').value.trim().replace(/\.$/, '');
    var yrPhrase = yrs === 1 ? 'a year' : yrs + ' years';
    var text = 'Dear Hiring Manager,\n\n'
      + 'I’m applying for the ' + role + ' position at ' + co + '. I bring ' + yrPhrase + ' of directly relevant experience, '
      + (win ? 'most recently ' + win + '. ' : '')
      + 'That work is the core of what your posting describes, and it’s the kind of outcome I’d expect to repeat on your team.\n\n'
      + 'I’d welcome the chance to walk through the details. Thank you for your time and consideration.';
    var out = document.getElementById('ta-cl-out');
    out.style.display = 'block';
    out.textContent = text;
  });
})();
