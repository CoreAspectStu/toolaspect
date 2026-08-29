/*!
 * ToolAspect User Agent Parser Embed
 * Install: <div id="ta-user-agent-parser"></div>
 *          <script src="https://toolaspect.com/embed/user-agent-parser.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-user-agent-parser';
  var BASE = 'https://toolaspect.com/user-agent-parser/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-ua{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px 12px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.76rem;word-break:break-all;margin:0 0 10px;color:var(--ta-text)}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px;text-align:center}'
    + '.ta-embed-cell .k{font-size:.7rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px}'
    + '.ta-embed-cell .v{font-size:.92rem;font-weight:700;color:var(--ta-text)}'
    + '.ta-embed-copy{display:block;margin:0 auto;background:var(--ta-accent);border:none;color:#fff;border-radius:8px;padding:8px 18px;font-size:.82rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-note{text-align:center;color:var(--ta-muted);font-size:.78rem;margin:4px 0 0}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-grid{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'user-agent-parser');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="user-agent-parser"]')) {
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
    + '<div class="ta-embed-title">Your User Agent</div>'
    + '<div class="ta-embed-subtitle">Decoded in your browser — nothing uploaded</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-ua" id="ta-ua-string">Reading…</div>'
    + '<button type="button" class="ta-embed-copy" id="ta-ua-copy">Copy UA string</button>'
    + '</div>'
    + '<div class="ta-embed-card"><div class="ta-embed-grid" id="ta-ua-grid"></div>'
    + '<p class="ta-embed-note">Parse any UA string, detect bots, and see token-by-token breakdowns on the full tool.</p></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var ua = (navigator.userAgent || '').trim();
  document.getElementById('ta-ua-string').textContent = ua || '(empty user agent string)';
  var grid = document.getElementById('ta-ua-grid');

  function render(parsed) {
    var cells;
    if (parsed) {
      var b = parsed.browser || {}, o = parsed.os || {}, p = parsed.platform || {};
      cells = [
        ['Browser', (b.name || 'Unknown') + (b.version ? ' ' + b.version : '')],
        ['OS', (o.name || 'Unknown') + (o.versionName ? ' ' + o.versionName : '')],
        ['Device', p.type ? String(p.type) : '—']
      ];
    } else {
      cells = [['Browser', '—'], ['OS', '—'], ['Device', '—']];
    }
    grid.innerHTML = cells.map(function (c) {
      return '<div class="ta-embed-cell"><div class="k">' + c[0] + '</div><div class="v">' + c[1].replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</div></div>';
    }).join('');
  }
  render(null);

  // Lazy-load bowser (MIT) UMD build, then parse
  function tryParse() {
    if (window.bowser && typeof window.bowser.parse === 'function') {
      try { render(window.bowser.parse(ua)); return true; } catch (e) { return false; }
    }
    return false;
  }
  if (!tryParse()) {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/bowser@2.11.0/es5.js';
    s.async = true;
    s.onload = tryParse;
    s.onerror = function () { render(null); };
    (document.head || document.documentElement).appendChild(s);
  }

  document.getElementById('ta-ua-copy').addEventListener('click', function () {
    var btn = this;
    var done = function () { btn.textContent = 'Copied ✓'; setTimeout(function () { btn.textContent = 'Copy UA string'; }, 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(ua).then(done, done);
    } else {
      var ta = document.createElement('textarea');
      ta.value = ua; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta); done();
    }
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.userAgentParser = { reparse: tryParse };
})();
