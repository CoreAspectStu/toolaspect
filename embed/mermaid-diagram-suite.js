/*!
 * ToolAspect Mermaid Diagram Suite Embed
 * Install: <div id="ta-mermaid-diagram-suite"></div>
 *          <script src="https://toolaspect.com/embed/mermaid-diagram-suite.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-mermaid-diagram-suite';
  var BASE = 'https://toolaspect.com/mermaid-diagram-suite/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:16px;margin-bottom:12px}'
    + '.ta-embed-bar{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px}'
    + '.ta-embed-btn{background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:8px 14px;font-size:.82rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn.ghost{background:transparent;border:1px solid var(--ta-border);color:var(--ta-text);font-weight:500}'
    + '.ta-embed-code{width:100%;min-height:150px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;'
    + 'font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.78rem;line-height:1.5;padding:10px;resize:vertical;outline:none}'
    + '.ta-embed-preview{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;min-height:170px;padding:10px;overflow:auto;text-align:center}'
    + '.ta-embed-preview svg{max-width:100%;height:auto}'
    + '.ta-embed-status{font-size:.74rem;color:var(--ta-muted);margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'mermaid-diagram-suite');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="mermaid-diagram-suite"]')) {
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

  var SAMPLE = 'flowchart LR\n  A[Markdown file] --> B{Has mermaid block?}\n  B -->|yes| C[Render diagram]\n  B -->|no| D[Plain text]';

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Mermaid Diagram Widget</div>'
    + '<div class="ta-embed-subtitle">Type text, get a flowchart — rendered live</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-bar"><button type="button" class="ta-embed-btn ta-go">Render</button>'
    + '<button type="button" class="ta-embed-btn ghost ta-svg">Get SVG</button></div>'
    + '<textarea class="ta-embed-code" spellcheck="false"></textarea>'
    + '<div class="ta-embed-status">Renderer loads on first use.</div>'
    + '<div class="ta-embed-preview"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var codeEl = root.querySelector('.ta-embed-code');
  var prevEl = root.querySelector('.ta-embed-preview');
  var statEl = root.querySelector('.ta-embed-status');
  codeEl.value = SAMPLE;

  var rc = 0;

  function ensureLib(cb) {
    if (window.mermaid && window.mermaid.render) { cb(); return; }
    statEl.textContent = 'Loading Mermaid (MIT) from CDN…';
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js';
    s.onload = function () {
      mermaid.initialize({ startOnLoad: false, securityLevel: 'loose', fontFamily: 'inherit' });
      cb();
    };
    s.onerror = function () { statEl.textContent = 'Could not load Mermaid from CDN on this page.'; };
    (document.head || document.documentElement).appendChild(s);
  }

  function render() {
    ensureLib(function () {
      var src = codeEl.value;
      if (!src.trim()) { statEl.textContent = 'Editor is empty.'; return; }
      rc++;
      mermaid.render('ta-mmd-' + rc, src).then(function (res) {
        prevEl.innerHTML = res.svg;
        statEl.textContent = 'Rendered in-browser. Nothing uploaded.';
      }).catch(function (e) {
        statEl.textContent = String(e.message || e).slice(0, 160);
      });
    });
  }

  root.querySelector('.ta-go').addEventListener('click', render);
  root.querySelector('.ta-svg').addEventListener('click', function () {
    var svg = prevEl.querySelector('svg');
    if (!svg) { statEl.textContent = 'Render a diagram first.'; return; }
    var ser = '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(svg);
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ser], { type: 'image/svg+xml' }));
    a.download = 'diagram.svg';
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  });

  var deb;
  codeEl.addEventListener('input', function () { clearTimeout(deb); deb = setTimeout(render, 500); });

  render();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.mermaidDiagramSuite = { recalc: render };
})();
