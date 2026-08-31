/*!
 * ToolAspect Minify HTML Embed
 * Install: <div id="ta-minify-js"></div>
 *          <script src="https://toolaspect.com/embed/minify-js.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine:  terser 5.51.2 (BSD-2-Clause), lazy-loaded from CDN, runs locally.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-minify-html';
  var BASE = 'https://toolaspect.com/minify-html/';
  var URLS = [
    'https://toolaspect.com/minify-html/vendor/htmlminifier.iife.js',
    '/minify-html/vendor/htmlminifier.iife.js'
  ];
  var QUIET = { log: function () {} };
  var PRESETS = {
    conservative: { label: 'Conservative', opts: { collapseWhitespace: true, removeComments: true, keepClosingSlash: true } },
    aggressive: { label: 'Aggressive (trim attributes)', opts: { collapseWhitespace: true, removeComments: true, removeAttributeQuotes: true, removeRedundantAttributes: true, removeScriptTypeAttributes: true, removeStyleLinkTypeAttributes: true, keepClosingSlash: true } }
  };

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-root label{font-size:.78rem;color:var(--ta-muted);font-weight:600;display:block;margin-bottom:3px}'
    + '.ta-embed-root select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 10px;font-size:.85rem;font-family:inherit;outline:none;margin-bottom:10px}'
    + '.ta-embed-root textarea{width:100%;min-height:120px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px;font-size:.78rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;line-height:1.5;outline:none;resize:vertical}'
    + '.ta-embed-root textarea:focus,.ta-embed-root select:focus{border-color:var(--ta-accent)}'
    + '.ta-stats{display:flex;gap:14px;flex-wrap:wrap;font-size:.8rem;color:var(--ta-muted);margin:8px 0}'
    + '.ta-stats b{color:var(--ta-text)}'
    + '.ta-btns{display:flex;gap:8px;flex-wrap:wrap}'
    + '.ta-btn{flex:1;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:9px 12px;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-btn.ghost{background:transparent;border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-note{text-align:center;font-size:.78rem;color:var(--ta-muted);margin-top:8px;min-height:1.2em}'
    + '.ta-note.ok{color:var(--ta-ok)}.ta-note.bad{color:var(--ta-bad)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'minify-html');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="minify-html"]')) {
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
    + '<div class="ta-embed-title">Minify HTML</div>'
    + '<div class="ta-embed-subtitle">html-minifier 4.0.0 in the visitor&rsquo;s browser &mdash; nothing uploads</div>'
    + '<div class="ta-embed-card">'
    + '<label>Preset</label><select class="ta-preset">'
    + '<option value="conservative" selected>Conservative (comments + whitespace)</option>'
    + '<option value="aggressive">Aggressive (trim attributes)</option>'
    + '</select>'
    + '<label>HTML in</label><textarea class="ta-src" spellcheck="false" placeholder="Paste HTML here&hellip;"></textarea>'
    + '<label style="margin-top:10px">Minified out</label><textarea class="ta-out" spellcheck="false" readonly placeholder="Minified output&hellip;"></textarea>'
    + '<div class="ta-stats"><span>In: <b class="ta-in">—</b></span><span>Out: <b class="ta-res">—</b></span><span>Saved: <b class="ta-saved">—</b></span></div>'
    + '<div class="ta-btns">'
    + '<button type="button" class="ta-btn ghost ta-copy">Copy output</button>'
    + '<button type="button" class="ta-btn ghost ta-dl">Download .js</button>'
    + '</div>'
    + '<div class="ta-note">Idle.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function note(msg, cls) {
    var n = root.querySelector('.ta-note');
    n.textContent = msg;
    n.className = 'ta-note' + (cls ? ' ' + cls : '');
  }
  function bytes(s) { return new TextEncoder().encode(s).length; }
  function nfmt(n) { return n.toLocaleString('en-US') + ' B'; }

  var loaded = null;
  function loadEngine() {
    if (loaded) return loaded;
    var i = 0;
    var tryNext = function () {
      if (i >= URLS.length) return Promise.reject(new Error('CDN unreachable'));
      var url = URLS[i++];
      return new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = url; s.onload = resolve;
        s.onerror = function () { tryNext().then(resolve, reject); };
        (document.head || document.documentElement).appendChild(s);
      });
    };
    loaded = tryNext().then(function () {
      if (!window.HTMLMinifier) throw new Error('html-minifier global missing');
      return window.HTMLMinifier;
    });
    return loaded;
  }

  var timer = null;
  function go() {
    var code = root.querySelector('.ta-src').value;
    var n = bytes(code);
    root.querySelector('.ta-in').textContent = n ? nfmt(n) : '—';
    if (!code.trim()) {
      root.querySelector('.ta-out').value = '';
      root.querySelector('.ta-res').textContent = '—';
      root.querySelector('.ta-saved').textContent = '—';
      return note('Paste HTML to minify.');
    }
    note('Minifying…');
    loadEngine().then(function (H) {
      var out = H.minify(code, Object.assign({}, QUIET, PRESETS[root.querySelector('.ta-preset').value].opts));
      var m = bytes(out);
      root.querySelector('.ta-out').value = out;
      root.querySelector('.ta-res').textContent = nfmt(m);
      root.querySelector('.ta-saved').textContent = nfmt(n - m) + ' (' + ((n - m) / n * 100).toFixed(1) + '%)';
      note('Done — html-minifier (MIT) ran locally.', 'ok');
    }).catch(function (e) {
      root.querySelector('.ta-out').value = '';
      root.querySelector('.ta-res').textContent = '—';
      root.querySelector('.ta-saved').textContent = '—';
      note('Cannot minify: ' + (e && e.message ? e.message : e), 'bad');
    });
  }

  root.querySelector('.ta-src').addEventListener('input', function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(go, 250);
  });
  root.querySelector('.ta-preset').addEventListener('change', go);
  root.querySelector('.ta-copy').addEventListener('click', function () {
    var out = root.querySelector('.ta-out').value;
    if (!out) return note('Nothing to copy yet.', 'bad');
    (navigator.clipboard ? navigator.clipboard.writeText(out) : Promise.reject()).then(
      function () { note('Minified output copied.', 'ok'); },
      function () { note('Clipboard blocked.', 'bad'); }
    );
  });
  root.querySelector('.ta-dl').addEventListener('click', function () {
    var out = root.querySelector('.ta-out').value;
    if (!out) return note('Nothing to download yet.', 'bad');
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([out], { type: 'text/html' }));
    a.download = 'minified.html';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
    note('Downloaded minified.html.', 'ok');
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.minifyHtml = { run: go };
})();
