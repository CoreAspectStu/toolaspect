/*!
 * ToolAspect SVG Editor Embed — runs the unmodified SVG-Edit (MIT) engine
 * Install: <div id="ta-svg-editor"></div>
 *          <script src="https://toolaspect.com/embed/svg-editor.js"></script>
 * Options: add data-theme="dark" to the container div for dark chrome.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-svg-editor';
  var BASE = 'https://toolaspect.com/svg-editor/';
  var V = '7.4.2';
  var CDN = 'https://cdn.jsdelivr.net/npm/svgedit@' + V + '/dist/editor';

  var CSS = ''
    + '.ta-embed-root{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;'
    + 'line-height:1.6;max-width:860px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px;color:#0f172a}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px}'
    + '.ta-embed-subtitle{text-align:center;color:#64748b;margin-bottom:16px;font-size:.9rem}'
    + '.ta-editor-shell{background:#fff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;position:relative;min-height:560px}'
    + '.ta-editor-host{width:100%;height:560px}'
    + '.ta-boot{position:absolute;inset:0;display:flex;flex-direction:column;gap:8px;align-items:center;justify-content:center;color:#334155;background:#f8fafc;font-size:.9rem}'
    + '.ta-boot.err{color:#b91c1c}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:#64748b}'
    + '.ta-embed-attrib a{color:#2563eb;text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'svg-editor');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="svg-editor"]')) {
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
  root.innerHTML = ''
    + '<div class="ta-embed-title">SVG Editor</div>'
    + '<div class="ta-embed-subtitle">Open-source SVG-Edit, unmodified &mdash; drawing and saving happen in your visitor&rsquo;s browser</div>'
    + '<div class="ta-editor-shell">'
    + '<div class="ta-editor-host" id="ta-svg-editor-host"></div>'
    + '<div class="ta-boot" id="ta-svg-editor-boot"><span>Loading SVG-Edit ' + V + ' (~2.7 MB)&hellip;</span></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a> &middot; engine <a href="https://github.com/SVG-Edit/svgedit" target="_blank" rel="noopener">SVG-Edit (MIT)</a></div>';
  target.appendChild(root);

  /* svgedit's own stylesheet, loaded once */
  if (!document.querySelector('link[data-ta-svgedit-css]')) {
    var link = document.createElement('link');
    link.setAttribute('data-ta-svgedit-css', 'svg-editor');
    link.rel = 'stylesheet';
    link.href = CDN + '/svgedit.css';
    (document.head || document.documentElement).appendChild(link);
  }

  /* dynamic import of the unmodified engine build */
  import(CDN + '/Editor.js').then(function (mod) {
    var Editor = mod.default;
    var svgEditor = new Editor(document.getElementById('ta-svg-editor-host'));
    svgEditor.setConfig({
      allowInitialUserOverride: false,
      noDefaultExtensions: false,
      imgPath: CDN + '/images',
      extPath: CDN + '/extensions'
    });
    var boot = document.getElementById('ta-svg-editor-boot');
    if (boot) boot.remove();
  }).catch(function (e) {
    var boot = document.getElementById('ta-svg-editor-boot');
    if (boot) {
      boot.className = 'ta-boot err';
      boot.innerHTML = '<span>The editor failed to load from the CDN &mdash; reload or check ad-blocker settings.</span>';
    }
    if (window.console) console.error('[ToolAspect svg-editor]', e);
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.svgEditor = {};
})();
