/*!
 * ToolAspect PDF to Text Embed
 * Install: <div id="ta-pdf-to-text"></div>
 *          <script src="https://toolaspect.com/embed/pdf-to-text.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pdf-to-text';
  var BASE = 'https://toolaspect.com/pdf-to-text/';
  var PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
  var PDFJS_WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-file{display:inline-block;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 16px;font-size:.9rem;cursor:pointer;margin:4px 6px 0 0}'
    + '.ta-embed-file input{display:none}'
    + '.ta-embed-btn{background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 16px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin:4px 4px 0 0}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-status.ok{color:var(--ta-ok)}.ta-embed-status.bad{color:var(--ta-bad)}'
    + '.ta-opts{display:flex;gap:10px;flex-wrap:wrap;margin-top:10px;font-size:.8rem;color:var(--ta-muted)}'
    + '.ta-opts select{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:6px;padding:4px 6px;font-family:inherit;font-size:.8rem}'
    + '.ta-out{width:100%;min-height:180px;margin-top:12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);padding:10px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.75rem;line-height:1.5;resize:vertical;display:none}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pdf-to-text');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pdf-to-text"]')) {
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
    + '<div class="ta-embed-title">PDF to Text</div>'
    + '<div class="ta-embed-subtitle">Extract the text layer as .txt or .md — all in your visitor&rsquo;s browser</div>'
    + '<div class="ta-embed-card">'
    + '<label class="ta-embed-file">&#128194; Open PDF<input type="file" class="ta-file" accept=".pdf,application/pdf"></label>'
    + '<button type="button" class="ta-embed-btn ghost ta-copy" disabled>Copy text</button>'
    + '<button type="button" class="ta-embed-btn ta-save" disabled>Download</button>'
    + '<div class="ta-opts">Format <select class="ta-mode"><option value="plain">Plain text</option><option value="markdown">Markdown</option></select>'
    + 'Pages <select class="ta-pages"><option value="all">All</option><option value="odd">Odd</option><option value="even">Even</option></select></div>'
    + '<div class="ta-embed-status">Files never leave the browser.</div>'
    + '<textarea class="ta-out" spellcheck="false" readonly aria-label="Extracted text"></textarea>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function status(msg, cls) {
    var s = root.querySelector('.ta-embed-status');
    s.textContent = msg; s.className = 'ta-embed-status' + (cls ? ' ' + cls : '');
  }
  var loaded = {};
  function loadScript(url) {
    if (loaded[url]) return loaded[url];
    loaded[url] = new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = url; s.onload = res; s.onerror = function () { rej(new Error('Could not load ' + url)); };
      (document.head || document.documentElement).appendChild(s);
    });
    return loaded[url];
  }

  function round2(n) { return Math.round(n * 100) / 100; }
  function buildText(pages, opt) {
    var pageTexts = [];
    for (var pi = 0; pi < pages.length; pi++) {
      var its = pages[pi].filter(function (it) { return it.str && it.str.length; });
      var lines = [];
      its.forEach(function (it) {
        var y = Math.round(it.transform[5]), size = round2(Math.hypot(it.transform[2], it.transform[3]));
        var L = null;
        for (var i = 0; i < lines.length; i++) { if (Math.abs(lines[i].y - y) <= 2) { L = lines[i]; break; } }
        if (!L) { L = { y: y, segs: [] }; lines.push(L); }
        L.segs.push({ x: it.transform[4], str: it.str, size: size });
      });
      lines.sort(function (a, b) { return b.y - a.y; });
      lines.forEach(function (L) {
        L.segs.sort(function (a, b) { return a.x - b.x; });
        L.text = L.segs.map(function (s) { return s.str; }).join(' ').replace(/\s+/g, ' ').trim();
        L.size = L.segs.reduce(function (m, s) { return Math.max(m, s.size); }, 0);
      });
      if (!lines.length) { pageTexts.push(''); continue; }
      var tally = {};
      lines.forEach(function (L) { var k = Math.round(L.size); tally[k] = (tally[k] || 0) + 1; });
      var body = 0, best = 0;
      for (var k in tally) { if (tally[k] > best) { best = tally[k]; body = +k; } }
      lines.forEach(function (L) { L.head = (opt.markdown && L.size >= body * 1.15); });
      var gaps = [];
      for (var i = 1; i < lines.length; i++) {
        if (lines[i].head || lines[i - 1].head) continue;
        var g = lines[i - 1].y - lines[i].y; if (g > 0 && g < 200) gaps.push(g);
      }
      var gt = {}, mg = 0, mgap = 12;
      gaps.forEach(function (g) { var kk = Math.round(g); gt[kk] = (gt[kk] || 0) + 1; if (gt[kk] > mg) mg = gt[kk]; });
      var cands = []; for (var kk in gt) { if (gt[kk] === mg) cands.push(+kk); }
      mgap = cands.length ? Math.min.apply(null, cands) : 12;
      var parts = [], prevWasHead = false;
      lines.forEach(function (L, i) {
        var t = L.text; if (!t) return;
        if (L.head) { parts.push((L.size >= body * 1.6 ? '##' : '###') + ' ' + t); prevWasHead = true; return; }
        if (i === 0 || prevWasHead || parts.length === 0) { parts.push(t); prevWasHead = false; return; }
        var prev = lines[i - 1], gap = prev.y - L.y;
        if (opt.dehyphenate && /[‐-]$/.test(parts[parts.length - 1])) {
          parts[parts.length - 1] = parts[parts.length - 1].replace(/[‐-]$/, '') + t;
        } else if (gap > mgap * 1.4) { parts.push(t); }
        else { parts[parts.length - 1] += ' ' + t; }
      });
      pageTexts.push(parts.join(opt.markdown ? '\n\n' : '\n'));
    }
    if (!opt.pageBreaks) return pageTexts.join('\n\n');
    return pageTexts.map(function (t, i) { return '--- Page ' + (i + 1) + ' ---\n' + t; }).join('\n\n');
  }

  var origName = 'document', lastText = '';
  root.querySelector('.ta-file').addEventListener('change', function (e) {
    var f = e.target.files[0];
    if (!f) return;
    origName = f.name.replace(/\.pdf$/i, '');
    status('Reading ' + f.name + ' …');
    var fr = new FileReader();
    fr.onload = function () {
      loadScript(PDFJS_URL).then(function () {
        pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
        return pdfjsLib.getDocument({ data: new Uint8Array(fr.result) }).promise;
      }).then(function (doc) {
        var perPage = [];
        var chain = Promise.resolve();
        var which = root.querySelector('.ta-pages').value;
        for (var n = 1; n <= doc.numPages; n++) {
          if (which === 'odd' && n % 2 === 0) continue;
          if (which === 'even' && n % 2 === 1) continue;
          (function (num) {
            chain = chain.then(function () {
              return doc.getPage(num).then(function (page) { return page.getTextContent(); }).then(function (tc) { perPage.push(tc.items); });
            });
          })(n);
        }
        return chain.then(function () {
          lastText = buildText(perPage, {
            markdown: root.querySelector('.ta-mode').value === 'markdown',
            dehyphenate: true,
            pageBreaks: false
          });
          var out = root.querySelector('.ta-out');
          out.style.display = 'block';
          out.value = lastText;
          root.querySelector('.ta-copy').disabled = false;
          root.querySelector('.ta-save').disabled = false;
          var words = lastText.split(/\s+/).filter(Boolean).length;
          if (!lastText.trim()) status('No text layer found — scanned PDFs need OCR first.', 'bad');
          else status('Extracted ' + words + ' words from ' + perPage.length + ' page(s).', 'ok');
        });
      }).catch(function (err) { status('Could not extract: ' + (err && err.message || err), 'bad'); });
    };
    fr.readAsArrayBuffer(f);
  });

  root.querySelector('.ta-copy').addEventListener('click', function () {
    if (!lastText) return;
    var done = function () { status('Text copied to clipboard.', 'ok'); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(lastText).then(done, done);
    else done();
  });
  root.querySelector('.ta-save').addEventListener('click', function () {
    if (!lastText) return;
    var md = root.querySelector('.ta-mode').value === 'markdown';
    var blob = new Blob([lastText], { type: 'text/plain;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = origName + (md ? '.md' : '.txt');
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
    status('Downloaded ' + a.download + '.', 'ok');
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.pdfToText = {};
})();
