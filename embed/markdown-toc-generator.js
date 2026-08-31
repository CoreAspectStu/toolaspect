/*!
 * ToolAspect Markdown TOC Generator Embed
 * Install: <div id="ta-markdown-toc-generator"></div>
 *          <script src="https://toolaspect.com/embed/markdown-toc-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: github-slugger 2.0.0 (ISC), vendored on toolaspect.com, lazy-loaded
 * on first use. Anchors match GitHub exactly; structure follows doctoc (MIT).
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-markdown-toc-generator';
  var BASE = 'https://toolaspect.com/markdown-toc-generator/';
  var LIB_URL = 'https://toolaspect.com/shared/vendor/github-slugger/dist/github-slugger.iife.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-io label{font-size:.7rem;color:var(--ta-muted);font-weight:600;display:block;margin-bottom:3px}'
    + '.ta-embed-ta,.ta-embed-out{width:100%;min-height:150px;padding:10px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.78rem;font-family:ui-monospace,Menlo,Consolas,monospace;box-sizing:border-box;resize:vertical}'
    + '.ta-embed-out{white-space:pre-wrap;word-break:break-word;overflow-y:auto;max-height:300px}'
    + '.ta-embed-io{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '@media(max-width:520px){.ta-embed-io{grid-template-columns:1fr}}'
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
  styleEl.setAttribute('data-ta-embed', 'markdown-toc-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="markdown-toc-generator"]')) {
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
    + '<div class="ta-embed-title">Markdown TOC Generator</div>'
    + '<div class="ta-embed-subtitle">GitHub-accurate anchors, duplicate handling</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-io">'
    + '<div><label>Markdown input</label><textarea class="ta-embed-in" spellcheck="false"></textarea></div>'
    + '<div><label>Table of contents</label><div class="ta-embed-out"></div></div>'
    + '</div>'
    + '<div class="ta-embed-opts">'
    + '<div class="ta-embed-opt"><label>Depth</label><select class="ta-embed-depth"><option value="2,6">H2–H6 (skip title)</option><option value="1,6" selected>All levels</option><option value="2,3">H2–H3</option><option value="1,3">H1–H3</option></select></div>'
    + '<div class="ta-embed-opt"><label>Title</label><input class="ta-embed-title-in" value="**Table of Contents**"></div>'
    + '<div class="ta-embed-opt"><label>.</label><label class="ta-embed-check"><input type="checkbox" class="ta-embed-ord"> Numbered (1. 2.)</label></div>'
    + '<div class="ta-embed-opt"><label>.</label><label class="ta-embed-check"><input type="checkbox" class="ta-embed-mark" checked> doctoc markers</label></div>'
    + '</div>'
    + '<div class="ta-embed-actions">'
    + '<button type="button" class="ta-embed-btn gen">Generate</button>'
    + '<button type="button" class="ta-embed-btn ghost cp">Copy TOC</button>'
    + '</div>'
    + '<div class="ta-embed-status">Anchors match GitHub exactly, including duplicates (-1, -2).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var inEl = root.querySelector('.ta-embed-in');
  var outEl = root.querySelector('.ta-embed-out');
  var depthEl = root.querySelector('.ta-embed-depth');
  var titleEl = root.querySelector('.ta-embed-title-in');
  var ordEl = root.querySelector('.ta-embed-ord');
  var markEl = root.querySelector('.ta-embed-mark');
  var statusEl = root.querySelector('.ta-embed-status');
  var libPromise = null;

  function loadLib() {
    if (window.GithubSlugger) return Promise.resolve(window.GithubSlugger);
    if (!libPromise) {
      libPromise = new Promise(function (res, rej) {
        var s = document.createElement('script');
        s.src = LIB_URL;
        s.onload = function () { res(window.GithubSlugger); };
        s.onerror = function () { libPromise = null; rej(new Error('slugger failed to load')); };
        (document.head || document.documentElement).appendChild(s);
      });
    }
    return libPromise;
  }

  var MT_START = '<!-- START doctoc generated TOC please keep comment here to allow auto update -->';
  var MT_NAMED = "<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->";
  var MT_END = '<!-- END doctoc generated TOC please keep comment here to allow auto update -->';
  function stripLinks(t) { return String(t).replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1'); }
  function slugSource(t) { return stripLinks(t).replace(/[*_`~]/g, '').trim(); }
  function displayText(t) { return stripLinks(t).replace(/\s+#+\s*$/, '').trim(); }
  function headings(md) {
    var lines = String(md).split('\n'), out = [], fence = null;
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var fm = line.match(/^\s*(```+|~~~+)/);
      if (fm) { if (fence && fm[1].slice(0, 3) === fence) fence = null; else if (!fence) fence = fm[1].slice(0, 3); continue; }
      if (fence) continue;
      var atx = line.match(/^(#{1,6})\s+(.*?)\s*#*\s*$/);
      if (atx) { out.push({ level: atx[1].length, text: atx[2] }); continue; }
      if (i + 1 < lines.length) {
        var nx = lines[i + 1];
        if (/^\s*=+\s*$/.test(nx) && line.trim()) { out.push({ level: 1, text: line }); i++; continue; }
        if (/^-{2,}\s*$/.test(nx) && line.trim() && !/^\s*[-*+]\s/.test(line) && !/^#{1,6}\s/.test(line)) { out.push({ level: 2, text: line }); i++; }
      }
    }
    return out;
  }
  function buildToc(GS, md, o) {
    var heads = headings(md).filter(function (h) { return h.level >= o.minH && h.level <= o.maxH; });
    if (!heads.length) return '';
    var min = Math.min.apply(null, heads.map(function (h) { return h.level; }));
    var slugger = new GS.BananaSlug();
    var counters = {};
    var rows = heads.map(function (h) {
      var slug = slugger.slug(slugSource(h.text));
      var indent = new Array(Math.max(0, h.level - min) + 1).join('  ');
      if (o.ordered) {
        counters[h.level] = (counters[h.level] || 0) + 1;
        for (var l = h.level + 1; l <= 6; l++) counters[l] = 0;
        return indent + counters[h.level] + '. [' + displayText(h.text) + '](#' + encodeURIComponent(slug) + ')';
      }
      return indent + '- [' + displayText(h.text) + '](#' + encodeURIComponent(slug) + ')';
    });
    var parts = o.markers ? [MT_START, MT_NAMED] : [];
    if (o.title) parts.push(o.title);
    parts.push('', rows.join('\n'));
    if (o.markers) parts.push('', MT_END);
    if (parts[0] === '') parts.shift();
    return parts.join('\n');
  }

  function generate() {
    var src = inEl.value;
    loadLib().then(function (GS) {
      var d = depthEl.value.split(',');
      var toc = buildToc(GS, src, { minH: parseInt(d[0], 10), maxH: parseInt(d[1], 10), ordered: ordEl.checked, title: titleEl.value, markers: markEl.checked });
      outEl.textContent = toc || '(no headings found)';
      var n = headings(src).length;
      statusEl.textContent = n ? ('Found ' + n + ' heading' + (n === 1 ? '' : 's') + '. Copy the TOC into your markdown file.') : 'No markdown headings found — looking for lines starting with #.';
    }).catch(function () {
      statusEl.innerHTML = '<span style="color:#dc2626">The slugger engine failed to load (offline?).</span>';
    });
  }

  root.querySelector('.gen').addEventListener('click', generate);
  root.querySelector('.cp').addEventListener('click', function () {
    if (!outEl.textContent) return;
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(outEl.textContent); statusEl.textContent = 'TOC copied to clipboard.'; }
  });
  [depthEl, titleEl, ordEl, markEl].forEach(function (el) {
    el.addEventListener('input', generate);
    el.addEventListener('change', generate);
  });
  inEl.addEventListener('input', generate);
  inEl.value = '# Project Docs\n\n## Getting Started\n\n### Install\n\n## Getting Started\n\n### Über café & co\n\n## 😂 tada';
  generate();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.markdownTocGenerator = { recalc: generate };
})();
