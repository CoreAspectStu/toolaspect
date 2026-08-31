/*!
 * ToolAspect Markdown Table Generator Embed
 * Install: <div id="ta-markdown-table-generator"></div>
 *          <script src="https://toolaspect.com/embed/markdown-table-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: markdown-table 3.0.4 (MIT, remark ecosystem), 2.2 KB, inlined here —
 * CSV/TSV/grid parsing and table serialization run in the visitor's browser.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-markdown-table-generator';
  var BASE = 'https://toolaspect.com/markdown-table-generator/';

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
    + '.ta-embed-card textarea{width:100%;min-height:130px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.8rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;line-height:1.5;outline:none;resize:vertical}'
    + '.ta-embed-card textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-row{display:flex;gap:8px;margin-top:10px}'
    + '.ta-embed-row select{flex:1;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.82rem;font-family:inherit}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:10px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-out{margin-top:12px;min-height:70px;white-space:pre;overflow-x:auto;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;'
    + 'font-size:.75rem;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px 12px;color:var(--ta-text)}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'markdown-table-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="markdown-table-generator"]')) {
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
    + '<div class="ta-embed-title">Markdown Table Generator</div>'
    + '<div class="ta-embed-subtitle">CSV or pasted grid in — padded GFM table out</div>'
    + '<div class="ta-embed-card">'
    + '<label>Data (CSV, TSV, or pipe rows)</label><textarea class="ta-in" spellcheck="false" placeholder="Tool,Cost&#10;Pingdom,$15"></textarea>'
    + '<div class="ta-embed-row">'
    + '<select class="ta-align1"><option value="">No alignment</option><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select>'
    + '<select class="ta-align2"><option value="">No alignment</option><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select>'
    + '<select class="ta-align3"><option value="">No alignment</option><option value="right" selected>Right</option><option value="center">Center</option><option value="left">Left</option></select>'
    + '</div>'
    + '<button class="ta-embed-btn" type="button">Generate table</button>'
    + '<div class="ta-embed-out"></div>'
    + '<div class="ta-embed-status">Paste data, then generate. Pipes are escaped, columns padded.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function escPipe(s){ return String(s).replace(/\|/g, '\\|'); }
  function sniffDelim(text){
    var line = text.split(/\r?\n/).filter(function(l){ return l.trim() !== ''; })[0] || '';
    if (line.indexOf('\t') !== -1) return '\t';
    var commas = (line.match(/,/g) || []).length;
    var semis = (line.match(/;/g) || []).length;
    var pipes = (line.match(/\|/g) || []).length;
    if (commas === 0 && semis === 0 && pipes === 0) return null;
    if (pipes > commas && pipes > semis) return '|';
    if (semis > commas) return ';';
    return ',';
  }
  function splitRow(line, d){
    if (d !== ',') return line.split(d).map(function(c){ return c.trim(); });
    var cells = [], cur = '', q = false;
    for (var i = 0; i < line.length; i++){
      var ch = line[i];
      if (q){ if (ch === '"'){ if (line[i+1] === '"'){ cur += '"'; i++; } else q = false; } else cur += ch; }
      else { if (ch === '"' && cur.trim() === '') q = true; else if (ch === ',') { cells.push(cur.trim()); cur = ''; } else cur += ch; }
    }
    cells.push(cur.trim());
    return cells;
  }

  var btn = root.querySelector('.ta-embed-btn');
  var status = root.querySelector('.ta-embed-status');
  var out = root.querySelector('.ta-embed-out');
  var inEl = root.querySelector('.ta-in');

  btn.addEventListener('click', function () {
    var text = inEl.value;
    if (!text.trim()) { status.textContent = 'Paste some CSV or grid data first.'; return; }
    var d = sniffDelim(text);
    var rows = text.split(/\r?\n/).filter(function(l){ return l.trim() !== ''; })
      .map(function(l){
        if (d === '|') return l.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(function(c){ return c.trim(); });
        return splitRow(l, d || '\n');
      })
      .map(function(r){ return r.map(escPipe); });
    var cols = rows.reduce(function(m, r){ return Math.max(m, r.length); }, 0);
    rows.forEach(function(r){ while (r.length < cols) r.push(''); });
    var aligns = ['ta-align1','ta-align2','ta-align3'].map(function(cls, i){
      var v = root.querySelector('.' + cls).value;
      return i < cols && v ? v : null;
    });
    var has = aligns.some(function(a){ return a; });
    var md = window.__taMarkdownTable.markdownTable(rows, { align: has ? aligns : null });
    out.textContent = md;
    status.textContent = rows.length + ' rows × ' + cols + ' columns — ' + md.length + ' characters of markdown.';
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.markdownTableGenerator = { version: '1.0' };
})();

/* ---- engine (inlined, byte-identical to the tool page vendor build) ---- */
/*! Bundled by ToolAspect from markdown-table v3.0.4 (MIT, (c) Titus Wormer). Source: github.com/wooorm/markdown-table — license text in vendor/LICENSE.txt */
var __taMarkdownTable=(()=>{var z=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var k=Object.prototype.hasOwnProperty;var A=(e,l)=>{for(var i in l)z(e,i,{get:l[i],enumerable:!0})},E=(e,l,i,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let g of M(l))!k.call(e,g)&&g!==i&&z(e,g,{get:()=>l[g],enumerable:!(a=L(l,g))||a.enumerable});return e};var P=e=>E(z({},"__esModule",{value:!0}),e);var B={};A(B,{markdownTable:()=>I});function T(e){return e.length}function I(e,l){let i=l||{},a=(i.align||[]).concat(),g=i.stringLength||T,m=[],u=[],x=[],h=[],d=0,o=-1;for(;++o<e.length;){let f=[],c=[],n=-1;for(e[o].length>d&&(d=e[o].length);++n<e[o].length;){let s=b(e[o][n]);if(i.alignDelimiters!==!1){let r=g(s);c[n]=r,(h[n]===void 0||r>h[n])&&(h[n]=r)}f.push(s)}u[o]=f,x[o]=c}let t=-1;if(typeof a=="object"&&"length"in a)for(;++t<d;)m[t]=C(a[t]);else{let f=C(a);for(;++t<d;)m[t]=f}t=-1;let D=[],j=[];for(;++t<d;){let f=m[t],c="",n="";f===99?(c=":",n=":"):f===108?c=":":f===114&&(n=":");let s=i.alignDelimiters===!1?1:Math.max(1,h[t]-c.length-n.length),r=c+"-".repeat(s)+n;i.alignDelimiters!==!1&&(s=c.length+s+n.length,s>h[t]&&(h[t]=s),j[t]=s),D[t]=r}u.splice(1,0,D),x.splice(1,0,j),o=-1;let S=[];for(;++o<u.length;){let f=u[o],c=x[o];t=-1;let n=[];for(;++t<d;){let s=f[t]||"",r="",w="";if(i.alignDelimiters!==!1){let p=h[t]-(c[t]||0),y=m[t];y===114?r=" ".repeat(p):y===99?p%2?(r=" ".repeat(p/2+.5),w=" ".repeat(p/2-.5)):(r=" ".repeat(p/2),w=r):w=" ".repeat(p)}i.delimiterStart!==!1&&!t&&n.push("|"),i.padding!==!1&&!(i.alignDelimiters===!1&&s==="")&&(i.delimiterStart!==!1||t)&&n.push(" "),i.alignDelimiters!==!1&&n.push(r),n.push(s),i.alignDelimiters!==!1&&n.push(w),i.padding!==!1&&n.push(" "),(i.delimiterEnd!==!1||t!==d-1)&&n.push("|")}S.push(i.delimiterEnd===!1?n.join("").replace(/ +$/,""):n.join(""))}return S.join(`
`)}function b(e){return e==null?"":String(e)}function C(e){let l=typeof e=="string"?e.codePointAt(0):0;return l===67||l===99?99:l===76||l===108?108:l===82||l===114?114:0}return P(B);})();
