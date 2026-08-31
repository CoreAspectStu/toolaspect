/*!
 * ToolAspect JSON Viewer Embed
 * Install: <div id="ta-json-viewer"></div>
 *          <script src="https://toolaspect.com/embed/json-viewer.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: jsoneditor (Apache-2.0, josdejong) v10.4.3, CSS + JS loaded on demand
 * from jsdelivr. Pasting happens in the visitor's browser — nothing is uploaded.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-json-viewer';
  var BASE = 'https://toolaspect.com/json-viewer/';
  var LIB_URL = 'https://cdn.jsdelivr.net/npm/jsoneditor@10.4.3/dist/jsoneditor.min.js';
  var CSS_URL = 'https://cdn.jsdelivr.net/npm/jsoneditor@10.4.3/dist/jsoneditor.min.css';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:680px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-area{width:100%;min-height:130px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:10px;color:var(--ta-text);'
    + 'font-size:.82rem;font-family:ui-monospace,Menlo,Consolas,monospace;padding:10px;resize:vertical;outline:none;box-sizing:border-box}'
    + '.ta-embed-area:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-btn{padding:9px 20px;border-radius:8px;border:none;background:var(--ta-accent);color:#fff;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}'
    + '.ta-embed-stats{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px;font-size:.74rem;color:var(--ta-muted);font-family:ui-monospace,Menlo,Consolas,monospace}'
    + '.ta-embed-stats b{color:var(--ta-text)}'
    + '.ta-embed-jehost{background:#fff;border-radius:10px;overflow:hidden;margin-top:12px;min-height:260px;color:#1a1a1a}'
    + '.ta-embed-err{margin-top:8px;font-size:.8rem;color:#dc2626;font-family:ui-monospace,Menlo,Consolas,monospace;word-break:break-all}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'json-viewer');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="json-viewer"]')) {
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
    + '<div class="ta-embed-title">JSON Viewer</div>'
    + '<div class="ta-embed-subtitle">Tree &amp; table exploration with structure stats — no upload</div>'
    + '<div class="ta-embed-card">'
    + '<textarea class="ta-embed-area" spellcheck="false" placeholder=\'{"paste":"any JSON"}\'></textarea>'
    + '<div class="ta-embed-actions">'
    + '<button type="button" class="ta-embed-btn">View JSON</button>'
    + '<button type="button" class="ta-embed-btn ghost">Minify &amp; copy</button>'
    + '<button type="button" class="ta-embed-btn ghost">Clear</button>'
    + '</div>'
    + '<div class="ta-embed-stats"></div>'
    + '<div class="ta-embed-jehost"></div>'
    + '<div class="ta-embed-err"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var areaEl = root.querySelector('.ta-embed-area');
  var hostEl = root.querySelector('.ta-embed-jehost');
  var statsEl = root.querySelector('.ta-embed-stats');
  var errEl = root.querySelector('.ta-embed-err');
  var viewBtn = root.querySelectorAll('.ta-embed-btn')[0];
  var minBtn = root.querySelectorAll('.ta-embed-btn')[1];
  var clearBtn = root.querySelectorAll('.ta-embed-btn')[2];

  var editor = null;
  var libPromise = null;

  function loadLib() {
    if (window.JSONEditor) return Promise.resolve(window.JSONEditor);
    if (!libPromise) {
      libPromise = new Promise(function (res, rej) {
        if (!document.querySelector('link[data-je-css]')) {
          var link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = CSS_URL;
          link.setAttribute('data-je-css', '1');
          document.head.appendChild(link);
        }
        var s = document.createElement('script');
        s.src = LIB_URL;
        s.onload = function () { res(window.JSONEditor); };
        s.onerror = function () { libPromise = null; rej(new Error('jsoneditor failed to load')); };
        (document.head || document.documentElement).appendChild(s);
      });
    }
    return libPromise;
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function stats(obj) {
    var s = { values: 0, keys: 0, depth: 0 };
    (function walk(v, d) {
      s.values++; if (d > s.depth) s.depth = d;
      if (Array.isArray(v)) { for (var i = 0; i < v.length; i++) walk(v[i], d + 1); }
      else if (v !== null && typeof v === 'object') { var ks = Object.keys(v); s.keys += ks.length; for (var k = 0; k < ks.length; k++) walk(v[ks[k]], d + 1); }
    })(obj, 1);
    s.minBytes = new Blob([JSON.stringify(obj)]).size;
    return s;
  }

  function view() {
    errEl.innerHTML = '';
    var value;
    try { value = JSON.parse(areaEl.value.replace(/^﻿/, '')); }
    catch (e) { errEl.textContent = '✗ ' + (e && e.message || e); if (editor) { editor.destroy(); editor = null; } statsEl.innerHTML = ''; return; }
    var s = stats(value);
    statsEl.innerHTML = '<span><b>' + s.values + '</b> values</span><span><b>' + s.keys + '</b> keys</span><span>depth <b>' + s.depth + '</b></span><span><b>' + s.minBytes + '</b> B minified</span>';
    loadLib().then(function (JSONEditor) {
      if (editor) { editor.destroy(); editor = null; }
      editor = new JSONEditor(hostEl, { modes: ['tree', 'table', 'text'], mode: 'tree', onError: function (err) { errEl.textContent = '✗ ' + err; } });
      editor.set(value);
    }).catch(function (e) { errEl.textContent = 'Renderer unavailable (' + e.message + ') — validation and stats still work.'; });
  }

  viewBtn.addEventListener('click', view);
  areaEl.addEventListener('change', view);
  minBtn.addEventListener('click', function () {
    try {
      var t = JSON.stringify(editor ? editor.get() : JSON.parse(areaEl.value));
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t);
      areaEl.value = t;
    } catch (e) { errEl.textContent = '✗ ' + (e && e.message || e); }
  });
  clearBtn.addEventListener('click', function () {
    areaEl.value = ''; statsEl.innerHTML = ''; errEl.innerHTML = '';
    if (editor) { editor.destroy(); editor = null; }
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.jsonViewer = { recalc: view };
})();
