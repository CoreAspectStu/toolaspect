/*!
 * ToolAspect HEIC to JPG Embed
 * Install: <div id="ta-heic-to-jpg-converter"></div>
 *          <script src="https://toolaspect.com/embed/heic-to-jpg-converter.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Decoder: hoppergee/heic-to (LGPL-3.0), loaded unmodified from toolaspect.com and
 * executed in the visitor's browser. Photos never touch a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-heic-to-jpg-converter';
  var BASE = 'https://toolaspect.com/heic-to-jpg-converter/';
  var LIB = 'https://toolaspect.com/heic-to-jpg-converter/vendor/heic-to.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-drop{border:2px dashed var(--ta-border);border-radius:10px;padding:22px 12px;text-align:center;color:var(--ta-muted);cursor:pointer;font-size:.9rem}'
    + '.ta-embed-drop:hover{border-color:var(--ta-accent)}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:10px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;text-align:center;text-decoration:none}'
    + '.ta-embed-row{display:flex;gap:10px;margin-top:10px}'
    + '.ta-embed-row select{flex:1;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.85rem;font-family:inherit}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-status a{color:var(--ta-accent)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'heic-to-jpg-converter');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="heic-to-jpg-converter"]')) {
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
    + '<div class="ta-embed-title">HEIC to JPG Converter</div>'
    + '<div class="ta-embed-subtitle">Runs in your browser — photos never upload</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-drop">Click to choose a .heic / .heif photo</div>'
    + '<input type="file" accept=".heic,.heif,image/heic,image/heif" style="display:none">'
    + '<div class="ta-embed-row">'
    + '<select class="ta-format"><option value="image/jpeg">JPG</option><option value="image/png">PNG</option></select>'
    + '<select class="ta-quality"><option value="0.9">Quality 0.9</option><option value="0.75">Quality 0.75</option><option value="1">Quality 1.0</option><option value="0.5">Quality 0.5</option></select>'
    + '</div>'
    + '<div class="ta-embed-status">Pick a file to convert.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var drop = root.querySelector('.ta-embed-drop');
  var input = root.querySelector('input');
  var status = root.querySelector('.ta-embed-status');
  var libPromise = null;

  drop.addEventListener('click', function () { input.click(); });

  input.addEventListener('change', async function () {
    var file = input.files && input.files[0];
    if (!file) return;
    status.textContent = 'Loading decoder (about 3 MB, cached after first use)…';
    try {
      if (!libPromise) libPromise = import(LIB);
      var lib = await libPromise;
      status.textContent = 'Converting ' + file.name + '…';
      var opts = { blob: file, type: root.querySelector('.ta-format').value };
      if (opts.type === 'image/jpeg') opts.quality = parseFloat(root.querySelector('.ta-quality').value);
      var out = await lib.heicTo(opts);
      var url = URL.createObjectURL(out);
      var name = file.name.replace(/\.(heic|heif)$/i, '') + (opts.type === 'image/png' ? '.png' : '.jpg');
      var kbIn = (file.size / 1048576).toFixed(2), kbOut = (out.size / 1048576).toFixed(2);
      status.innerHTML = 'Done — ' + name + ' (' + kbIn + ' MB in, ' + kbOut + ' MB out). <a href="' + url + '" download="' + name + '">Download</a>';
    } catch (e) {
      status.textContent = 'Could not convert: ' + (e && e.message ? e.message : e) + '. If the decoder was blocked, try the full tool at ' + BASE;
    }
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.heicToJpg = { version: '1.0' };
})();
