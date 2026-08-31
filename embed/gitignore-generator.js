/*!
 * ToolAspect Gitignore Generator Embed
 * Install: <div id="ta-gitignore-generator"></div>
 *          <script src="https://toolaspect.com/embed/gitignore-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-gitignore-generator';
  var BASE = 'https://toolaspect.com/gitignore-generator/';
  var GH = 'https://cdn.jsdelivr.net/gh/github/gitignore@main/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-chiprow{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}'
    + '.ta-embed-pick{padding:5px 12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:999px;color:var(--ta-muted);font-size:.78rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-pick.on{border-color:var(--ta-accent);color:var(--ta-text);background:rgba(37,99,235,.10)}'
    + '.ta-embed-out{width:100%;height:220px;padding:10px 12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.7rem;line-height:1.5;white-space:pre;overflow:auto;margin-bottom:8px}'
    + '.ta-embed-btn{background:var(--ta-accent);border:none;color:#fff;border-radius:8px;padding:8px 18px;font-size:.82rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-note{text-align:center;color:var(--ta-muted);font-size:.78rem;margin:6px 0 0;min-height:1.2em}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'gitignore-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="gitignore-generator"]')) {
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

  var TPL = [
    ['Node', 'Node', 1], ['Python', 'Python', 0], ['Go', 'Go', 0], ['Rust', 'Rust', 0],
    ['Java', 'Java', 0], ['Ruby', 'Ruby', 0], ['Swift', 'Swift', 0], ['Kotlin', 'Kotlin', 0],
    ['macOS', 'Global/macOS', 1], ['Windows', 'Global/Windows', 0], ['Linux', 'Global/Linux', 0],
    ['VS Code', 'Global/VisualStudioCode', 1], ['JetBrains', 'Global/JetBrains', 0], ['Vim', 'Global/Vim', 0]
  ];

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Gitignore Generator</div>'
    + '<div class="ta-embed-subtitle">GitHub\'s official CC0 templates, merged into one file</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-chiprow" id="ta-gi-chips"></div>'
    + '<button type="button" class="ta-embed-btn" id="ta-gi-gen">Generate .gitignore</button> '
    + '<button type="button" class="ta-embed-btn ghost" id="ta-gi-copy">Copy</button>'
    + '<div class="ta-embed-out" id="ta-gi-out"></div>'
    + '<p class="ta-embed-note" id="ta-gi-note"></p>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var chips = root.querySelector('#ta-gi-chips'), out = root.querySelector('#ta-gi-out'), note = root.querySelector('#ta-gi-note');
  chips.innerHTML = TPL.map(function (t, i) {
    return '<button type="button" class="ta-embed-pick' + (t[2] ? ' on' : '') + '" data-i="' + i + '">' + t[0] + '</button>';
  }).join('');

  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }
  var cache = {};

  function sel() {
    return [].slice.call(chips.querySelectorAll('.ta-embed-pick.on')).map(function (b) { return TPL[parseInt(b.getAttribute('data-i'), 10)]; });
  }
  function fetchTpl(t, cb) {
    if (cache[t[1]] != null) { cb(cache[t[1]]); return; }
    fetch(GH + t[1] + '.gitignore').then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    }).then(function (txt) { cache[t[1]] = txt; cb(txt); })
      .catch(function () { cache[t[1]] = false; cb(false); });
  }
  function generate() {
    var picks = sel();
    if (!picks.length) { note.textContent = 'Pick at least one template.'; return; }
    note.textContent = 'Fetching ' + picks.length + ' template(s)…';
    var parts = new Array(picks.length), done = 0, fails = [];
    picks.forEach(function (t, ix) {
      fetchTpl(t, function (txt) {
        parts[ix] = txt === false ? null : '### ' + t[0] + ' ###\n' + String(txt).trimEnd();
        if (txt === false) fails.push(t[0]);
        if (++done === picks.length) {
          var body = parts.filter(Boolean).join('\n\n') + '\n';
          out.textContent = body;
          note.textContent = (picks.length - fails.length) + ' merged · ' + body.split('\n').length + ' lines'
            + (fails.length ? ' · failed: ' + fails.join(', ') : '');
        }
      });
    });
  }
  chips.addEventListener('click', function (e) {
    var b = e.target.closest('.ta-embed-pick');
    if (b) b.classList.toggle('on');
  });
  root.addEventListener('click', function (e) {
    if (e.target.id === 'ta-gi-gen') generate();
    if (e.target.id === 'ta-gi-copy') {
      var btn = e.target;
      var done = function () { btn.textContent = 'Copied ✓'; setTimeout(function () { btn.textContent = 'Copy'; }, 1500); };
      if (!out.textContent) return;
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(out.textContent).then(done, done);
      else { var ta = document.createElement('textarea'); ta.value = out.textContent; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (err) {} document.body.removeChild(ta); done(); }
    }
  });
  generate();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.gitignoreGenerator = { generate: generate };
})();
