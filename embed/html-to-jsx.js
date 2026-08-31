/*!
 * ToolAspect HTML to JSX Embed
 * Install: <div id="ta-html-to-jsx"></div>
 *          <script src="https://toolaspect.com/embed/html-to-jsx.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: htmltojsx@0.3.0 (BSD-3-Clause, reactjs/react-magic), lazy-loaded
 * from jsdelivr — conversion runs entirely in the visitor's browser.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-html-to-jsx';
  var BASE = 'https://toolaspect.com/html-to-jsx/';
  var LIB_URL = 'https://cdn.jsdelivr.net/npm/htmltojsx@0.3.0/.publish/htmltojsx.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-tabs{display:flex;gap:6px;margin-bottom:10px}'
    + '.ta-embed-tab{padding:5px 14px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:999px;color:var(--ta-muted);font-size:.8rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-tab.active{background:var(--ta-accent);border-color:var(--ta-accent);color:#fff}'
    + '.ta-embed-io{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '@media(max-width:520px){.ta-embed-io{grid-template-columns:1fr}}'
    + '.ta-embed-io label{font-size:.7rem;color:var(--ta-muted);font-weight:600;display:block;margin-bottom:3px}'
    + '.ta-embed-ta,.ta-embed-out{width:100%;min-height:140px;padding:10px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.78rem;font-family:ui-monospace,Menlo,Consolas,monospace;box-sizing:border-box;resize:vertical}'
    + '.ta-embed-out{white-space:pre-wrap;word-break:break-word;overflow-y:auto;max-height:300px}'
    + '.ta-embed-opts{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}'
    + '.ta-embed-opt{display:flex;flex-direction:column;gap:3px}'
    + '.ta-embed-opt label{font-size:.72rem;color:var(--ta-muted);margin:0}'
    + '.ta-embed-opt input,.ta-embed-opt select{padding:8px 10px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.85rem;font-family:inherit;width:100%}'
    + '.ta-embed-check{display:flex;align-items:center;gap:6px;font-size:.78rem;color:var(--ta-muted);padding:6px 0;cursor:pointer}'
    + '.ta-embed-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:12px}'
    + '.ta-embed-btn{padding:10px 22px;border-radius:8px;border:none;background:var(--ta-accent);color:#fff;font-size:.88rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-status{margin-top:10px;font-size:.85rem;color:var(--ta-muted)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'html-to-jsx');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="html-to-jsx"]')) {
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
    + '<div class="ta-embed-title">HTML to JSX</div>'
    + '<div class="ta-embed-subtitle">Convert HTML or SVG to React JSX — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-tabs"><button type="button" class="ta-embed-tab html active">HTML → JSX</button><button type="button" class="ta-embed-tab svg">SVG → JSX</button></div>'
    + '<div class="ta-embed-io">'
    + '<div><label>Input</label><textarea class="ta-embed-in" spellcheck="false"></textarea></div>'
    + '<div><label>JSX output</label><div class="ta-embed-out"></div></div>'
    + '</div>'
    + '<div class="ta-embed-opts">'
    + '<div class="ta-embed-opt"><label>Output</label><select class="ta-embed-mode"><option value="jsx">JSX only</option><option value="function" selected>Function component</option><option value="arrow">Arrow + export</option></select></div>'
    + '<div class="ta-embed-opt"><label>Component name</label><input class="ta-embed-name" value="Component"></div>'
    + '<div class="ta-embed-opt"><label>.</label><label class="ta-embed-check"><input type="checkbox" class="ta-embed-ts"> TypeScript props</label></div>'
    + '<div class="ta-embed-opt"><label>.</label><label class="ta-embed-check"><input type="checkbox" class="ta-embed-spread"> Spread {...props} on root</label></div>'
    + '</div>'
    + '<div class="ta-embed-actions">'
    + '<button type="button" class="ta-embed-btn go">Convert</button>'
    + '<button type="button" class="ta-embed-btn ghost ex">Load example</button>'
    + '<button type="button" class="ta-embed-btn ghost cp">Copy JSX</button>'
    + '</div>'
    + '<div class="ta-embed-status">Converted locally in your browser.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var tab = 'html';
  var inEl = root.querySelector('.ta-embed-in');
  var outEl = root.querySelector('.ta-embed-out');
  var modeEl = root.querySelector('.ta-embed-mode');
  var nameEl = root.querySelector('.ta-embed-name');
  var tsEl = root.querySelector('.ta-embed-ts');
  var spreadEl = root.querySelector('.ta-embed-spread');
  var statusEl = root.querySelector('.ta-embed-status');
  var libPromise = null;

  var examples = {
    html: '<div class="hero" id="top">\n  <h1 style="color:red">Hello</h1>\n  <input type="text" value="a" disabled>\n</div>',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">\n  <polyline points="3 17 9 11 13 15 21 7"></polyline>\n</svg>'
  };

  function loadLib() {
    if (window.HTMLtoJSX) return Promise.resolve(window.HTMLtoJSX);
    if (!libPromise) {
      libPromise = new Promise(function (res, rej) {
        var s = document.createElement('script');
        s.src = LIB_URL;
        s.onload = function () { res(window.HTMLtoJSX); };
        s.onerror = function () { libPromise = null; rej(new Error('engine failed to load')); };
        (document.head || document.documentElement).appendChild(s);
      });
    }
    return libPromise;
  }

  var SVG_ATTRS = {
    'xlink:href': 'xlinkHref', 'xlink:title': 'xlinkTitle', 'xmlns:xlink': 'xmlnsXlink', 'xml:space': 'xmlSpace', 'xml:lang': 'xmlLang',
    'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin',
    'stroke-dasharray': 'strokeDasharray', 'stroke-dashoffset': 'strokeDashoffset', 'stroke-miterlimit': 'strokeMiterlimit', 'stroke-opacity': 'strokeOpacity',
    'fill-opacity': 'fillOpacity', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'clip-path': 'clipPath',
    'font-family': 'fontFamily', 'font-size': 'fontSize', 'font-weight': 'fontWeight',
    'text-anchor': 'textAnchor', 'dominant-baseline': 'dominantBaseline', 'alignment-baseline': 'alignmentBaseline', 'baseline-shift': 'baselineShift',
    'stop-color': 'stopColor', 'stop-opacity': 'stopOpacity',
    'marker-start': 'markerStart', 'marker-mid': 'markerMid', 'marker-end': 'markerEnd',
    'paint-order': 'paintOrder', 'pointer-events': 'pointerEvents', 'shape-rendering': 'shapeRendering', 'vector-effect': 'vectorEffect',
    'letter-spacing': 'letterSpacing', 'word-spacing': 'wordSpacing', 'writing-mode': 'writingMode', 'vertical-align': 'verticalAlign', 'enable-background': 'enableBackground'
  };
  function normalizeSvg(jsx) {
    return String(jsx).replace(/(^|\s)([a-zA-Z][a-zA-Z0-9]*(?:(?:-[a-zA-Z][a-zA-Z0-9]*)+|:[a-zA-Z][a-zA-Z0-9:-]*))=/g, function (m, pre, key) {
      return SVG_ATTRS.hasOwnProperty(key) ? pre + SVG_ATTRS[key] + '=' : m;
    });
  }
  function sanitizeName(name, fallback) {
    var parts = String(name || '').split(/[^A-Za-z0-9]+/).filter(Boolean);
    if (!parts.length) parts = [fallback];
    var n = parts.map(function (p) { return p.charAt(0).toUpperCase() + p.slice(1); }).join('');
    if (/^[0-9]/.test(n)) n = 'C' + n;
    return n;
  }
  function dedent(text) {
    var lines = String(text).replace(/^\s*\n/, '').replace(/\s+$/, '').split('\n');
    var min = Infinity;
    lines.forEach(function (l) { if (l.trim()) { var w = l.match(/^\s*/)[0].length; if (w < min) min = w; } });
    if (!isFinite(min)) min = 0;
    return lines.map(function (l) { return l.slice(min); }).join('\n');
  }
  function insertProps(body) {
    var gt = body.indexOf('>');
    if (gt < 0) return body;
    var sc = body.charAt(gt - 1) === '/';
    var at = sc ? gt - 1 : gt;
    return body.slice(0, at) + ' {...props}' + body.slice(at);
  }
  function wrap(jsx, o) {
    var body = dedent(jsx);
    if (o.spread) body = insertProps(body);
    var name = sanitizeName(o.name, o.svg ? 'Icon' : 'Component');
    var tsType = o.svg ? 'React.SVGProps<SVGSVGElement>' : 'React.HTMLAttributes<HTMLElement>';
    var lines = body.split('\n');
    if (o.mode === 'jsx') return body;
    if (o.mode === 'arrow') return 'const ' + name + ' = (' + (o.ts ? 'props: ' + tsType : '') + ') => (\n' + lines.map(function (l) { return '  ' + l; }).join('\n') + '\n);\n\nexport default ' + name + ';';
    return 'export default function ' + name + '(' + (o.spread ? 'props' + (o.ts ? ': ' + tsType : '') : '') + ') {\n  return (\n' + lines.map(function (l) { return '    ' + l; }).join('\n') + '\n  );\n}';
  }

  function convert() {
    var src = inEl.value;
    if (!src.trim()) { outEl.textContent = ''; return; }
    loadLib().then(function (E) {
      try {
        var conv = new E({ createClass: false, indent: '  ' });
        var jsx = conv.convert(src);
        if (tab === 'svg') jsx = normalizeSvg(jsx);
        outEl.textContent = wrap(jsx, { mode: modeEl.value, name: nameEl.value, ts: tsEl.checked, spread: spreadEl.checked, svg: tab === 'svg' });
        statusEl.textContent = (tab === 'svg' ? 'SVG' : 'HTML') + ' converted' + (tab === 'svg' ? ' (React SVG attribute renames applied)' : '') + '.';
      } catch (e) {
        outEl.textContent = '';
        statusEl.innerHTML = '<span style="color:#dc2626">Could not parse that markup: ' + String(e && e.message || e).slice(0, 80) + '</span>';
      }
    }).catch(function () {
      statusEl.innerHTML = '<span style="color:#dc2626">The converter engine failed to load (offline?).</span>';
    });
  }

  function setTab(t) {
    tab = t;
    root.querySelector('.ta-embed-tab.html').classList.toggle('active', t === 'html');
    root.querySelector('.ta-embed-tab.svg').classList.toggle('active', t === 'svg');
    nameEl.value = t === 'svg' ? 'ActivityIcon' : 'Component';
    inEl.value = examples[t];
    convert();
  }

  root.querySelector('.ta-embed-tab.html').addEventListener('click', function () { setTab('html'); });
  root.querySelector('.ta-embed-tab.svg').addEventListener('click', function () { setTab('svg'); });
  root.querySelector('.ex').addEventListener('click', function () { inEl.value = examples[tab]; convert(); });
  root.querySelector('.go').addEventListener('click', convert);
  root.querySelector('.cp').addEventListener('click', function () {
    if (!outEl.textContent) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(outEl.textContent);
      statusEl.textContent = 'Copied to clipboard.';
    }
  });
  [modeEl, nameEl, tsEl, spreadEl].forEach(function (el) {
    el.addEventListener('input', convert);
    el.addEventListener('change', convert);
  });
  inEl.addEventListener('input', convert);
  inEl.value = examples.html;
  convert();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.htmlToJsx = { recalc: convert };
})();
