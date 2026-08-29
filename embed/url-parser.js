/*!
 * ToolAspect URL Parser Embed
 * Install: <div id="ta-url-parser"></div>
 *          <script src="https://toolaspect.com/embed/url-parser.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-url-parser';
  var BASE = 'https://toolaspect.com/url-parser/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-parts{display:grid;grid-template-columns:1fr 1fr;gap:8px}'
    + '.ta-embed-part{background:var(--ta-bg);border-radius:8px;padding:8px 10px;overflow:hidden}'
    + '.ta-embed-part .k{font-size:.68rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px}'
    + '.ta-embed-part .v{font-size:.78rem;font-weight:600;word-break:break-all;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}'
    + '.ta-embed-params{width:100%;border-collapse:collapse;font-size:.8rem;margin-top:4px}'
    + '.ta-embed-params th,.ta-embed-params td{padding:6px 8px;border:1px solid var(--ta-border);text-align:left;word-break:break-all}'
    + '.ta-embed-params th{background:var(--ta-bg);font-size:.7rem;text-transform:uppercase;letter-spacing:.03em;color:var(--ta-muted)}'
    + '.ta-embed-note{color:var(--ta-muted);font-size:.78rem;margin:6px 0 0}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-parts{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'url-parser');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="url-parser"]')) {
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
    + '<div class="ta-embed-title">URL Parser</div>'
    + '<div class="ta-embed-subtitle">Native WHATWG parsing — protocol, host, port, path, decoded params</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>URL</label>'
    + '<input type="text" class="ta-url" value="https://www.example.com:8443/products/search?sort=price&tag=summer%20sale&q=10%25%20off" spellcheck="false"></div>'
    + '<div class="ta-embed-parts ta-parts"></div>'
    + '</div>'
    + '<div class="ta-embed-card"><div class="ta-embed-form-group"><label>Query parameters (decoded)</label></div>'
    + '<table class="ta-embed-params"><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody class="ta-params-body"></tbody></table>'
    + '<p class="ta-embed-note">Edit and rebuild the URL on the full tool.</p></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var urlIn = root.querySelector('.ta-url');
  var partsEl = root.querySelector('.ta-parts');
  var paramsBody = root.querySelector('.ta-params-body');
  var DEFAULT_PORTS = { 'http:': '80', 'https:': '443', 'ftp:': '21', 'ws:': '80', 'wss:': '443' };

  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }
  function part(k, v) {
    return '<div class="ta-embed-part"><div class="k">' + k + '</div><div class="v">' + esc(v || '—') + '</div></div>';
  }

  function calc() {
    var raw = urlIn.value.trim();
    partsEl.innerHTML = '';
    paramsBody.innerHTML = '';
    if (!raw) return;
    var u;
    try { u = new URL(raw); } catch (e) {
      partsEl.innerHTML = part('Error', 'Invalid URL — include the scheme (https://…)');
      return;
    }
    var dp = DEFAULT_PORTS[u.protocol] || '';
    partsEl.innerHTML =
      part('Protocol', u.protocol) +
      part('Host', u.host) +
      part('Port', u.port || (dp ? 'default ' + dp : '—')) +
      part('Path', u.pathname) +
      part('Query', u.search || '(none)') +
      part('Fragment', u.hash || '(none)');
    var rows = [];
    new URLSearchParams(u.search).forEach(function (v, k) {
      rows.push('<tr><td>' + esc(k) + '</td><td>' + esc(v) + '</td></tr>');
    });
    paramsBody.innerHTML = rows.length ? rows.join('') :
      '<tr><td colspan="2" style="color:var(--ta-muted);text-align:center">No query parameters</td></tr>';
  }

  urlIn.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.urlParser = { recalc: calc };
})();
