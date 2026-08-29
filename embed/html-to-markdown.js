/*!
 * ToolAspect HTML to Markdown Embed
 * Install: <div id="ta-html-to-markdown"></div>
 *          <script src="https://toolaspect.com/embed/html-to-markdown.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-html-to-markdown';
  var BASE = 'https://toolaspect.com/html-to-markdown/';

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
    + '.ta-embed-card textarea{width:100%;min-height:150px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.85rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;line-height:1.5;outline:none;resize:vertical}'
    + '.ta-embed-card textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:10px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'html-to-markdown');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="html-to-markdown"]')) {
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
    + '<div class="ta-embed-title">HTML to Markdown</div>'
    + '<div class="ta-embed-subtitle">Paste HTML, copy GitHub-Flavored Markdown</div>'
    + '<div class="ta-embed-card">'
    + '<label>HTML</label><textarea class="ta-in" spellcheck="false" placeholder="<h2>Hello</h2>..."></textarea>'
    + '<label>Markdown</label><textarea class="ta-out" spellcheck="false" readonly placeholder="## Hello..."></textarea>'
    + '<button class="ta-embed-btn" type="button">Copy Markdown</button>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  /* --- compact GFM converter --- */
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEMPLATE: 1, HEAD: 1, TITLE: 1, META: 1, LINK: 1 };
  function rep(n, count) { return new Array(count + 1).join(n); }
  function inlineMd(node) {
    var out = '';
    node.childNodes.forEach(function (ch) {
      if (ch.nodeType === 3) { out += ch.nodeValue.replace(/\s+/g, ' '); }
      else if (ch.nodeType === 1) {
        var t = ch.tagName, s;
        if (SKIP[t]) return;
        else if (t === 'STRONG' || t === 'B') { s = inlineMd(ch).trim(); if (s) out += '**' + s + '**'; }
        else if (t === 'EM' || t === 'I') { s = inlineMd(ch).trim(); if (s) out += '*' + s + '*'; }
        else if (t === 'DEL' || t === 'S' || t === 'STRIKE') { s = inlineMd(ch).trim(); if (s) out += '~~' + s + '~~'; }
        else if (t === 'CODE') { s = ch.textContent.replace(/\s+/g, ' ').trim(); if (s) out += '`' + s + '`'; }
        else if (t === 'A') {
          s = inlineMd(ch).trim(); var href = (ch.getAttribute('href') || '').trim();
          if (s && href && href.indexOf('javascript:') !== 0) out += '[' + s + '](' + href + ')'; else out += s;
        }
        else if (t === 'IMG') { out += '![' + (ch.getAttribute('alt') || '') + '](' + (ch.getAttribute('src') || '') + ')'; }
        else if (t === 'BR') { out += '\n'; }
        else { out += inlineMd(ch); }
      }
    });
    return out;
  }
  function listMd(el, depth, ordered) {
    var out = '', idx = 0;
    el.childNodes.forEach(function (li) {
      if (li.nodeType !== 1 || li.tagName !== 'LI') return;
      idx++;
      var marker = ordered ? (idx + '. ') : '- ';
      var pad = rep('  ', depth);
      var run = '', subs = [];
      li.childNodes.forEach(function (c) {
        if (c.nodeType === 3) { run += c.nodeValue.replace(/\s+/g, ' '); }
        else if (c.nodeType !== 1) return;
        else if (c.tagName === 'UL' || c.tagName === 'OL') { subs.push(listMd(c, depth + 1, c.tagName === 'OL')); }
        else if (c.tagName === 'P') { var p = inlineMd(c).trim().replace(/ *\n/g, '  \n'); if (p) { run += (run.trim() ? ' ' : '') + p; } }
        else if (c.tagName === 'PRE') { subs.push(fence(c)); }
        else { run += inlineMd(c); }
      });
      out += pad + marker + (run.trim() || '') + '\n';
      subs.forEach(function (s) { s.split('\n').forEach(function (line) { if (line) out += pad + '  ' + line + '\n'; }); });
    });
    return out;
  }
  function fence(pre) {
    var lang = '';
    var codeEl = pre.querySelector('code');
    var cls = codeEl ? codeEl.className : (pre.className || '');
    var m = cls.match(/language-([\w+-]+)/);
    if (m) lang = m[1];
    var code = (codeEl ? codeEl.textContent : pre.textContent).replace(/\n+$/, '');
    return '```' + lang + '\n' + code + '\n```';
  }
  function tableMd(tb) {
    var rows = [];
    tb.querySelectorAll('tr').forEach(function (tr) {
      var cells = [];
      tr.childNodes.forEach(function (c) {
        if (c.nodeType !== 1) return;
        if (c.tagName === 'TD' || c.tagName === 'TH') cells.push(inlineMd(c).trim().replace(/\|/g, '\\|').replace(/\n/g, ' '));
      });
      if (cells.length) rows.push(cells);
    });
    if (!rows.length) return '';
    var cols = 0; rows.forEach(function (r) { cols = Math.max(cols, r.length); });
    rows.forEach(function (r) { while (r.length < cols) r.push(''); });
    var head = rows.shift();
    var out = '| ' + head.join(' | ') + ' |\n|' + head.map(function () { return ' --- |'; }).join('') + '\n';
    rows.forEach(function (r) { out += '| ' + r.join(' | ') + ' |\n'; });
    return out.replace(/\n$/, '');
  }
  function blocksMd(parent) {
    var out = [];
    parent.childNodes.forEach(function (ch) {
      if (ch.nodeType === 3) { var t = ch.nodeValue.trim(); if (t) out.push(t); return; }
      if (ch.nodeType !== 1) return;
      var tag = ch.tagName;
      if (SKIP[tag]) return;
      else if (/^H[1-6]$/.test(tag)) { var h = inlineMd(ch).trim(); if (h) out.push(rep('#', +tag[1]) + ' ' + h); }
      else if (tag === 'P') { var p = inlineMd(ch).trim().replace(/ *\n/g, '  \n'); if (p) out.push(p); }
      else if (tag === 'HR') out.push('---');
      else if (tag === 'PRE') out.push(fence(ch));
      else if (tag === 'UL' || tag === 'OL') { var l = listMd(ch, 0, tag === 'OL'); if (l) out.push(l.replace(/\n$/, '')); }
      else if (tag === 'BLOCKQUOTE') {
        var inner = blocksMd(ch).trim();
        if (inner) out.push(inner.split('\n').map(function (line) { return line ? '> ' + line : '>'; }).join('\n'));
      }
      else if (tag === 'TABLE') { var tbmd = tableMd(ch); if (tbmd) out.push(tbmd); }
      else if (tag === 'DIV' || tag === 'SECTION' || tag === 'ARTICLE' || tag === 'FIGURE' || tag === 'MAIN' || tag === 'HEADER' || tag === 'FOOTER' || tag === 'NAV' || tag === 'ASIDE' || tag === 'FIGCAPTION') {
        var b = blocksMd(ch); if (b) out.push(b);
      }
      else { var i = inlineMd(ch).trim(); if (i) out.push(i); }
    });
    return out.filter(function (b) { return b; }).join('\n\n');
  }

  var inEl = root.querySelector('.ta-in'), outEl = root.querySelector('.ta-out'), btn = root.querySelector('.ta-embed-btn');
  function render() {
    var v = inEl.value;
    if (!v.trim()) { outEl.value = ''; return; }
    var doc = new DOMParser().parseFromString(v, 'text/html');
    outEl.value = blocksMd(doc.body).replace(/\n{3,}/g, '\n\n').trim();
  }
  inEl.addEventListener('input', render);
  btn.addEventListener('click', function () {
    outEl.select();
    try { document.execCommand('copy'); btn.textContent = 'Copied!'; setTimeout(function () { btn.textContent = 'Copy Markdown'; }, 1500); } catch (e) {}
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.htmlToMarkdown = { convert: render };
})();
