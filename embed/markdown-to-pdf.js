/*!
 * ToolAspect Markdown to PDF Embed
 * Install: <div id="ta-markdown-to-pdf"></div>
 *          <script src="https://toolaspect.com/embed/markdown-to-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Pipeline adapted from realdennis/md2pdf (MIT); remarkable 1.7.4 (MIT) parses,
 * pdfmake 0.2.20 (MIT) writes the PDF. All three load from toolaspect.com and
 * run in the visitor's browser — markdown never hits a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-markdown-to-pdf';
  var BASE = 'https://toolaspect.com/markdown-to-pdf/';
  var LIB_REMARKABLE = 'https://toolaspect.com/markdown-to-pdf/vendor/remarkable.min.js';
  var LIB_PDFMAKE = 'https://toolaspect.com/markdown-to-pdf/vendor/pdfmake.min.js';
  var LIB_VFS = 'https://toolaspect.com/markdown-to-pdf/vendor/vfs_fonts.js';

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
    + 'border-radius:8px;padding:10px 12px;font-size:.8rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;line-height:1.5;outline:none;resize:vertical}'
    + '.ta-embed-card textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-row{display:flex;gap:8px;margin-top:10px}'
    + '.ta-embed-row select{flex:1;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.82rem;font-family:inherit}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:10px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'markdown-to-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="markdown-to-pdf"]')) {
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
    + '<div class="ta-embed-title">Markdown to PDF</div>'
    + '<div class="ta-embed-subtitle">One-click PDF — runs in the browser, no upload</div>'
    + '<div class="ta-embed-card">'
    + '<label>Markdown</label><textarea class="ta-md" spellcheck="false" placeholder="# Heading\n\nSome **bold** text…"></textarea>'
    + '<div class="ta-embed-row">'
    + '<select class="ta-page"><option value="LETTER">Letter</option><option value="A4">A4</option><option value="A5">A5</option></select>'
    + '<select class="ta-size"><option value="10">10 pt</option><option value="11" selected>11 pt</option><option value="12">12 pt</option></select>'
    + '<select class="ta-margin"><option value="narrow">Narrow</option><option value="normal" selected>Normal</option><option value="wide">Wide</option></select>'
    + '</div>'
    + '<button class="ta-embed-btn" type="button">Download PDF</button>'
    + '<div class="ta-embed-status">Type markdown, then download. First use fetches the PDF engine (~2.3 MB, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var libPromise = null;
  function loadLibs() {
    if (window.pdfMake && window.pdfMake.vfsLoaded) return Promise.resolve();
    if (libPromise) return libPromise;
    libPromise = new Promise(function (resolve, reject) {
      var load = function (src, cb) {
        var s = document.createElement('script');
        s.src = src; s.onload = cb; s.onerror = function () { reject(new Error('could not load ' + src)); };
        (document.head || document.documentElement).appendChild(s);
      };
      load(LIB_REMARKABLE, function () {
        load(LIB_PDFMAKE, function () {
          load(LIB_VFS, function () {
            if (window.pdfMake && window.pdfMake.addVirtualFileSystem && typeof vfs !== 'undefined') {
              window.pdfMake.addVirtualFileSystem(vfs.pdfMake ? vfs.pdfMake.vfs : vfs);
            }
            resolve();
          });
        });
      });
    });
    return libPromise;
  }

  var btn = root.querySelector('.ta-embed-btn');
  var status = root.querySelector('.ta-embed-status');
  var mdEl = root.querySelector('.ta-md');

  btn.addEventListener('click', function () {
    var text = mdEl.value;
    if (!text.trim()) { status.textContent = 'Type some markdown first.'; return; }
    status.textContent = 'Loading PDF engine…';
    loadLibs().then(function () {
      var opts = {
        pageSize: root.querySelector('.ta-page').value,
        fontSize: parseInt(root.querySelector('.ta-size').value, 10),
        margin: root.querySelector('.ta-margin').value,
        title: 'document'
      };
      var dd = window.ToolAspectMd2Pdf.toDocDefinition(text, opts);
      window.pdfMake.createPdf(dd).getBlob(function (blob) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url; a.download = 'document.pdf'; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
        status.textContent = 'PDF downloaded — ' + (blob.size / 1024).toFixed(1) + ' KB.';
      });
    }).catch(function (e) {
      status.textContent = 'Failed: ' + (e && e.message ? e.message : e) + '. Try the full tool at ' + BASE;
    });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.markdownToPdf = { version: '1.0' };
})();

/* ---- conversion core (identical to the tool page) ---- */
/*
 * ToolAspect markdown-to-pdf core.
 * Pipeline adapted from realdennis/md2pdf (MIT): markdown -> HTML via remarkable,
 * then HTML -> pdfmake docDefinition -> one-click PDF download (no print dialog).
 * Vendored deps: remarkable 1.7.4 (MIT), pdfmake 0.2.20 (MIT).
 * Plain data transformation, no DOM — runs identically in the browser and Node.
 */
(function (root) {
  'use strict';

  var PAGE_SIZES = { LETTER: [612, 792], A4: [595.28, 841.89], A5: [419.53, 595.28] };
  var MARGINS = { narrow: 36, normal: 72, wide: 108 };
  var HEAD_SCALE = { 1: 2.0, 2: 1.55, 3: 1.3, 4: 1.12, 5: 1.0, 6: 1.0 };

  function unesc(s) {
    return s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'");
  }

  /* ---------- tiny parser over remarkable's HTML output ---------- */
  function tagAt(html, i) {
    var m = /^<(\w+)((?:[^>"']|"[^"]*"|'[^']*')*)>/.exec(html.slice(i));
    return m ? { name: m[1].toLowerCase(), attrs: m[2], len: m[0].length } : null;
  }
  function findClose(html, contentStart, name) {
    // close tag of the element whose content starts at `contentStart`; nested same-name elements counted
    var depth = 0, i = contentStart, t;
    while (i < html.length) {
      if (html[i] === '<') {
        if (html[i + 1] === '/') {
          t = /^<\/(\w+)\s*>/.exec(html.slice(i));
          if (t) {
            var n = t[1].toLowerCase();
            if (depth === 0 && n === name) return [i, i + t[0].length];
            if (n === name) depth--;
            i += t[0].length; continue;
          }
        } else {
          t = tagAt(html, i);
          if (t) {
            if (t.name === name && html[i + t.len - 2] !== '/') depth++;
            i += t.len; continue;
          }
        }
      }
      i++;
    }
    return [html.length, html.length];
  }

  function parseInline(s) {
    var out = [];
    function push(text, extra) {
      if (text === '' || text == null) return;
      out.push(extra ? Object.assign({ text: text }, extra) : { text: text });
    }
    var i = 0, buf = '', bold = 0, ital = 0, strike = 0, code = false, link = null;
    function flush() {
      if (!buf) return;
      var o = {};
      if (bold) o.bold = true;
      if (ital) o.italics = true;
      if (strike) o.decoration = 'lineThrough';
      if (code) { o.color = '#953800'; o.background = '#eef1f4'; }
      if (link) { o.link = link; o.color = '#1155cc'; o.decoration = o.decoration || 'underline'; }
      push(unesc(buf), Object.keys(o).length ? o : null);
      buf = '';
    }
    while (i < s.length) {
      if (s[i] === '<') {
        var m = /^<(\/?)(\w+)((?:[^>"']|"[^"]*"|'[^']*')*)>/.exec(s.slice(i));
        if (m) {
          var name = m[2].toLowerCase(), closing = m[1] === '/';
          if (name === 'strong' || name === 'b') { flush(); bold += closing ? -1 : 1; }
          else if (name === 'em' || name === 'i') { flush(); ital += closing ? -1 : 1; }
          else if (name === 'del' || name === 's') { flush(); strike += closing ? -1 : 1; }
          else if (name === 'code') { flush(); code = !closing; }
          else if (name === 'a') {
            flush();
            if (!closing) { var href = /href="([^"]*)"/.exec(m[3]); link = href ? unesc(href[1]) : null; }
            else link = null;
          } else if (name === 'br') {
            flush(); out.push({ text: '\n' });
          } else if (name === 'img') {
            flush();
            var src = /src="([^"]*)"/.exec(m[3]), alt = /alt="([^"]*)"/.exec(m[3]);
            if (src && src[1].slice(0, 5) === 'data:') out.push({ image: src[1], fit: [440, 300] });
            else if (src && /^https?:/.test(src[1])) out.push({ text: (alt ? unesc(alt[1]) + ': ' : '') + src[1], color: '#888888', italics: true });
            else if (alt) push(unesc(alt[1]), { italics: true });
          }
          i += m[0].length; continue;
        }
      }
      buf += s[i]; i++;
    }
    flush();
    if (!out.length) out.push({ text: '' });
    return out.length === 1 ? out[0] : out;
  }

  function parseList(inner) {
    var items = [], i = 0;
    while (i < inner.length) {
      if (inner[i] !== '<') { i++; continue; }
      var t = tagAt(inner, i);
      if (!t) { i++; continue; }
      if (t.name !== 'li') { i += t.len; continue; }
      var close = findClose(inner, i + t.len, 'li');
      var liHtml = inner.slice(i + t.len, close[0]);
      var nested = null, m = /<(ul|ol)>/.exec(liHtml), textHtml = liHtml;
      if (m) {
        textHtml = liHtml.slice(0, m.index);
        var nClose = findClose(liHtml, m.index + m[0].length, m[1]);
        nested = { list: parseList(liHtml.slice(m.index + m[0].length, nClose[0])) };
      }
      var flat = textHtml.replace(/<\/p>\s*<p>/g, '\n').replace(/<\/?p>/g, '').trim();
      var item = [parseInline(flat)];
      if (nested) item.push(nested);
      items.push(item.length === 1 ? item[0] : item);
      i = close[1];
    }
    return items;
  }

  function parseTable(inner) {
    var rows = [], aligns = [];
    var i = 0;
    while (i < inner.length) {
      if (inner[i] !== '<') { i++; continue; }
      var t = tagAt(inner, i);
      if (!t) { i++; continue; }
      if (t.name === 'th' || t.name === 'td') {
        var close = findClose(inner, i + t.len, t.name);
        if (!rows.length) rows.push([]);
        rows[rows.length - 1].push(parseInline(inner.slice(i + t.len, close[0])));
        if (t.name === 'th') {
          var a = /text-align:(\w+)/.exec(t.attrs);
          aligns.push(a ? a[1] : 'left');
        }
        i = close[1]; continue;
      }
      if (t.name === 'tr') { rows.push([]); i += t.len; continue; }
      i += t.len;
    }
    if (rows.length && rows[0].length === 0) rows.shift();
    return { rows: rows, aligns: aligns };
  }

  function parseBlocks(html) {
    var blocks = [], i = 0;
    while (i < html.length) {
      if (html[i] !== '<') { i++; continue; }
      if (html.slice(i, i + 4) === '<!--') { i = html.indexOf('-->', i); i = i < 0 ? html.length : i + 3; continue; }
      var t = tagAt(html, i);
      if (!t) { i++; continue; }
      var selfClose = t.attrs.slice(-1) === '/';
      var close = selfClose ? [i + t.len, i + t.len] : findClose(html, i + t.len, t.name);
      var inner = html.slice(i + t.len, close[0]);
      if (/^h[1-6]$/.test(t.name)) blocks.push({ t: 'h', level: +t.name[1], text: parseInline(inner) });
      else if (t.name === 'p') blocks.push({ t: 'p', text: parseInline(inner) });
      else if (t.name === 'ul' || t.name === 'ol') blocks.push({ t: t.name, items: parseList(inner) });
      else if (t.name === 'pre') {
        var lang = /class="language-([\w#+.-]+)"/.exec(inner);
        var codeM = /<code[^>]*>([\s\S]*?)<\/code>/.exec(inner);
        blocks.push({ t: 'code', lang: lang ? lang[1] : '', text: codeM ? codeM[1] : inner });
      }
      else if (t.name === 'blockquote') blocks.push({ t: 'quote', blocks: parseBlocks(inner) });
      else if (t.name === 'table') blocks.push({ t: 'table', table: parseTable(inner) });
      else if (t.name === 'hr') blocks.push({ t: 'hr' });
      else blocks.push({ t: 'p', text: parseInline(inner) });
      i = close[1];
    }
    return blocks;
  }

  /* ---------- blocks -> pdfmake content ---------- */
  function mapBlocks(blocks, fs, contentWidth) {
    var out = [];
    blocks.forEach(function (b) {
      if (b.t === 'h') {
        out.push({
          text: b.text,
          fontSize: +(fs * HEAD_SCALE[b.level]).toFixed(1),
          bold: true,
          margin: b.level <= 2 ? [0, b.level === 1 ? 0 : 14, 0, b.level === 1 ? 10 : 6] : [0, 10, 0, 4],
          pageBreakBefore: b.level === 1 && out.length > 0 && false
        });
      } else if (b.t === 'p') {
        out.push({ text: b.text, margin: [0, 0, 0, 8], alignment: 'left' });
      } else if (b.t === 'ul' || b.t === 'ol') {
        out.push(mapList(b, fs));
      } else if (b.t === 'code') {
        out.push({
          table: {
            widths: ['*'],
            body: [[{
              text: b.text.replace(/\n$/, ''),
              fontSize: +(fs - 1).toFixed(1),
              color: '#333333',
              lineHeight: 1.15,
              margin: [8, 6, 8, 6]
            }]]
          },
          layout: {
            fillColor: function () { return '#f6f8fa'; },
            hLineColor: function () { return '#d0d7de'; },
            vLineColor: function () { return '#d0d7de'; },
            paddingLeft: function () { return 0; }, paddingRight: function () { return 0; },
            paddingTop: function () { return 0; }, paddingBottom: function () { return 0; }
          },
          margin: [0, 4, 0, 10]
        });
      } else if (b.t === 'quote') {
        var innerContent = mapBlocks(b.blocks, fs, contentWidth - 16);
        innerContent.forEach(function (c) {
          c.color = '#5f6368'; c.italics = c.italics !== undefined ? c.italics : true;
          c.margin = [14, 0, 0, 6];
        });
        out = out.concat(innerContent);
      } else if (b.t === 'table') {
        var rows = b.table.rows;
        if (!rows.length) return;
        var widths = [];
        for (var c = 0; c < rows[0].length; c++) widths.push('*');
        var body = rows.map(function (r, ri) {
          return r.map(function (cell) {
            var o = typeof cell === 'object' && cell.text !== undefined ? JSON.parse(JSON.stringify(cell)) : { text: String(cell) };
            if (ri === 0) o.bold = true;
            o.fontSize = +(fs - 1).toFixed(1);
            o.margin = [4, 4, 4, 4];
            return o;
          });
        });
        out.push({
          table: { widths: widths, body: body },
          layout: {
            fillColor: function (ri) { return ri === 0 ? '#eef1f4' : null; },
            hLineColor: function () { return '#c9ccd1'; },
            vLineColor: function () { return '#c9ccd1'; }
          },
          margin: [0, 4, 0, 10]
        });
      } else if (b.t === 'hr') {
        out.push({
          canvas: [{ type: 'line', x1: 0, y1: 4, x2: contentWidth, y2: 4, lineWidth: 0.75, lineColor: '#bbbbbb' }],
          margin: [0, 8, 0, 12]
        });
      }
    });
    return out;
  }

  function mapList(b, fs) {
    var base = b.t === 'ol'
      ? { ol: b.items.map(function (it) { return normItem(it, fs); }) }
      : { ul: b.items.map(function (it) { return normItem(it, fs); }) };
    base.margin = [0, 0, 0, 8];
    return base;
  }
  function normItem(it, fs) {
    if (Array.isArray(it)) {
      // [text, {list:...}] -> stacked content
      return { stack: it.map(function (part) {
        return part.list ? normList(part.list, fs) : { text: part.text !== undefined ? part.text : part };
      }) };
    }
    return it;
  }
  function normList(items, fs) {
    return { ul: items.map(function (it) { return normItem(it, fs); }), margin: [12, 2, 0, 4] };
  }

  /* ---------- public API ---------- */
  function renderHtml(markdown) {
    var md = new root.Remarkable('default');
    md.set({ html: false, linkify: true, breaks: false });
    return md.render(markdown);
  }

  function toDocDefinition(markdown, opts) {
    opts = opts || {};
    var fs = opts.fontSize || 11;
    var pageSize = opts.pageSize || 'LETTER';
    var margin = MARGINS[opts.margin || 'normal'];
    var size = PAGE_SIZES[pageSize];
    var contentWidth = size[0] - 2 * margin;
    var blocks = parseBlocks(renderHtml(markdown));
    return {
      pageSize: pageSize,
      pageMargins: [margin, margin, margin, margin],
      defaultStyle: { font: 'Roboto', fontSize: fs, lineHeight: 1.25, color: '#222222' },
      footer: opts.pageNumbers !== false ? function (pg, pages) {
        return { text: pg + ' / ' + pages, alignment: 'center', fontSize: 9, color: '#888888', margin: [0, 14, 0, 0] };
      } : undefined,
      info: { title: opts.title || 'Document', creator: 'ToolAspect Markdown to PDF', producer: 'pdfmake 0.2.20' },
      content: mapBlocks(blocks, fs, contentWidth)
    };
  }

  var api = {
    PAGE_SIZES: PAGE_SIZES,
    MARGINS: MARGINS,
    HEAD_SCALE: HEAD_SCALE,
    renderHtml: renderHtml,
    parseBlocks: parseBlocks,
    toDocDefinition: toDocDefinition
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.ToolAspectMd2Pdf = api;
})(typeof window !== 'undefined' ? window : globalThis);
