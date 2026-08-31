/*!
 * ToolAspect Robots.txt Validator Embed
 * Install: <div id="ta-robots-txt-validator"></div>
 *          <script src="https://toolaspect.com/embed/robots-txt-validator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: robots-parser 3.0.1 (MIT), loaded from toolaspect.com;
 * matching runs entirely in the visitor's browser — no upload, ever.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-robots-txt-validator';
  var BASE = 'https://toolaspect.com/robots-txt-validator/';
  var LIB_URL = 'https://toolaspect.com/robots-txt-validator/vendor/robots-parser.iife.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-ta{width:100%;min-height:120px;padding:9px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);'
    + 'font-size:.82rem;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;line-height:1.55;resize:vertical}'
    + '.ta-embed-ta:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}'
    + '.ta-embed-inp,.ta-embed-sel{width:100%;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.84rem;font-family:inherit}'
    + '.ta-embed-inp:focus,.ta-embed-sel:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:12px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;text-align:center;text-decoration:none}'
    + '.ta-embed-verdict{margin-top:10px;padding:12px;border-radius:10px;font-size:.88rem;line-height:1.6}'
    + '.ta-embed-verdict.ok{background:rgba(22,163,74,.09);border:1px solid rgba(22,163,74,.4);color:var(--ta-ok)}'
    + '.ta-embed-verdict.bad{background:rgba(220,38,38,.08);border:1px solid rgba(220,38,38,.4);color:var(--ta-bad)}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'robots-txt-validator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="robots-txt-validator"]')) {
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
    + '<div class="ta-embed-title">Robots.txt Validator</div>'
    + '<div class="ta-embed-subtitle">Is this URL blocked? Which rule matched? Checked in the browser</div>'
    + '<div class="ta-embed-card">'
    + '<label>robots.txt contents</label>'
    + '<textarea class="ta-rt" spellcheck="false">User-agent: *\nDisallow: /admin\nDisallow: /*.pdf$\n\nUser-agent: GPTBot\nDisallow: /\n\nSitemap: https://example.com/sitemap.xml</textarea>'
    + '<div class="ta-embed-row">'
    + '<div><label>Site</label><input class="ta-site" value="https://example.com"></div>'
    + '<div><label>URL to test</label><input class="ta-url" value="/admin/settings"></div>'
    + '</div>'
    + '<div class="ta-embed-row">'
    + '<div><label>User-agent</label><select class="ta-ua"><option>Googlebot</option><option>Bingbot</option><option>GPTBot</option><option>ClaudeBot</option><option>PerplexityBot</option><option>*</option></select></div>'
    + '<div style="align-self:end"><button class="ta-embed-btn ta-go" type="button">Check URL</button></div>'
    + '</div>'
    + '<div class="ta-verdict"></div>'
    + '<div class="ta-embed-status">Runs locally in this page — the file is never uploaded. First click fetches the ~11 KB engine.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var libPromise = null;

  function getLib() {
    if (libPromise) return libPromise;
    libPromise = new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = LIB_URL;
      s.onload = function () { res(window.robotsParser); };
      s.onerror = function () { rej(new Error('engine failed to load')); };
      (document.head || document.documentElement).appendChild(s);
    });
    return libPromise;
  }

  q('.ta-go').addEventListener('click', function () {
    var statusEl = q('.ta-embed-status'), vEl = q('.ta-verdict');
    statusEl.textContent = 'Loading the matcher engine …';
    getLib().then(function (robotsParser) {
      var site = q('.ta-site').value.trim().replace(/\/+$/, '') || 'https://example.com';
      var raw = q('.ta-url').value.trim();
      var url = /^https?:\/\//i.test(raw) ? raw : site + (raw.charAt(0) === '/' ? raw : '/' + raw);
      var ua = q('.ta-ua').value;
      var R = robotsParser(site + '/robots.txt', q('.ta-rt').value);
      var allowed = R.isAllowed(url, ua);
      var line = R.getMatchingLineNumber(url, ua);
      var rule = line > 0 ? (q('.ta-rt').value.split(/\r?\n/)[line - 1] || '').trim() : '';
      if (allowed === undefined) {
        vEl.className = 'ta-embed-verdict bad';
        vEl.innerHTML = '<b>Undecided</b> — check that the URL belongs to the site above.';
      } else if (allowed) {
        vEl.className = 'ta-embed-verdict ok';
        vEl.innerHTML = '<b>✅ Allowed</b> for ' + ua + (line > 0 ? ' — allowed by the rule on line ' + line : ' — no blocking rule matched') + (rule ? '<br><code>' + rule + '</code>' : '');
      } else {
        vEl.className = 'ta-embed-verdict bad';
        vEl.innerHTML = '<b>⛔ Blocked</b> for ' + ua + ' by line ' + line + (rule ? ' — <code>' + rule + '</code>' : '');
      }
      statusEl.textContent = 'Checked locally against ' + (q('.ta-rt').value.split(/\r?\n/).length) + ' lines of robots.txt.';
    }).catch(function (e) {
      statusEl.textContent = 'Engine failed to load: ' + ((e && e.message) || e);
    });
  });
})();
