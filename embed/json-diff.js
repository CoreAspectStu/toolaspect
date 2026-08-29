/*!
 * ToolAspect JSON Diff Embed
 * Install: <div id="ta-json-diff"></div>
 *          <script src="https://toolaspect.com/embed/json-diff.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-json-diff';
  var BASE = 'https://toolaspect.com/json-diff/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-add:#16a34a;--ta-del:#dc2626;--ta-mod:#ca8a04;--ta-mov:#0284c7;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-add:#4ade80;--ta-del:#f87171;--ta-mod:#facc15;--ta-mov:#38bdf8}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-panes{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-panes label{display:block;font-size:.72rem;color:var(--ta-muted);margin-bottom:4px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-panes textarea{width:100%;min-height:150px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px;font-size:.8rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;line-height:1.5;outline:none;resize:vertical}'
    + '.ta-embed-panes textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-btn{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 14px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn:hover{border-color:var(--ta-accent)}'
    + '.ta-embed-btn.primary{background:var(--ta-accent);border-color:var(--ta-accent);color:#fff;font-weight:600}'
    + '.ta-embed-check{display:inline-flex;align-items:center;gap:6px;font-size:.8rem;color:var(--ta-muted);cursor:pointer;margin-left:6px}'
    + '.ta-embed-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:10px}'
    + '.ta-embed-stat{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px;text-align:center}'
    + '.ta-embed-stat .n{font-size:1.2rem;font-weight:700}'
    + '.ta-embed-stat .l{font-size:.65rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em}'
    + '.ta-embed-stat.a .n{color:var(--ta-add)}.ta-embed-stat.d .n{color:var(--ta-del)}.ta-embed-stat.m .n{color:var(--ta-mod)}.ta-embed-stat.v .n{color:var(--ta-mov)}'
    + '.ta-embed-out{display:flex;flex-direction:column;gap:6px;max-height:280px;overflow-y:auto}'
    + '.ta-embed-row{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:7px 9px;font-size:.76rem;line-height:1.5}'
    + '.ta-embed-row .p{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-weight:600;word-break:break-all}'
    + '.ta-embed-row .t{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--ta-muted);word-break:break-all}'
    + '.ta-embed-tag{display:inline-block;font-size:.62rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;padding:1px 6px;border-radius:5px;margin-right:5px}'
    + '.ta-embed-tag.added{background:rgba(22,163,74,.12);color:var(--ta-add)}'
    + '.ta-embed-tag.removed{background:rgba(220,38,38,.12);color:var(--ta-del)}'
    + '.ta-embed-tag.modified{background:rgba(202,138,4,.12);color:var(--ta-mod)}'
    + '.ta-embed-tag.moved{background:rgba(2,132,199,.12);color:var(--ta-mov)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-panes{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'json-diff');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="json-diff"]')) {
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
    + '<div class="ta-embed-title">JSON Diff</div>'
    + '<div class="ta-embed-subtitle">Structural comparison with array-move detection</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-panes">'
    + '<div><label>Original JSON</label><textarea class="ta-a" spellcheck="false" placeholder="{ }"></textarea></div>'
    + '<div><label>Changed JSON</label><textarea class="ta-b" spellcheck="false" placeholder="{ }"></textarea></div>'
    + '</div>'
    + '<button type="button" class="ta-embed-btn primary ta-go">Compare</button>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-ord"> Ignore array order</label>'
    + '</div>'
    + '<div class="ta-embed-stats">'
    + '<div class="ta-embed-stat a"><div class="n ta-na">0</div><div class="l">added</div></div>'
    + '<div class="ta-embed-stat d"><div class="n ta-nd">0</div><div class="l">removed</div></div>'
    + '<div class="ta-embed-stat m"><div class="n ta-nm">0</div><div class="l">modified</div></div>'
    + '<div class="ta-embed-stat v"><div class="n ta-nv">0</div><div class="l">moved</div></div>'
    + '</div>'
    + '<div class="ta-embed-out ta-out"><div class="ta-embed-row"><span class="t">Paste two documents and press Compare. Runs entirely client-side.</span></div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function typeOf(v){ if (v === null) return 'null'; if (Array.isArray(v)) return 'array'; return typeof v; }
  function stableStr(v){
    if (typeOf(v) === 'object') {
      var ks = Object.keys(v).sort(), parts = [];
      for (var i = 0; i < ks.length; i++) parts.push(JSON.stringify(ks[i]) + ':' + stableStr(v[ks[i]]));
      return '{' + parts.join(',') + '}';
    }
    if (typeOf(v) === 'array') { var a = []; for (var j = 0; j < v.length; j++) a.push(stableStr(v[j])); return '[' + a.join(',') + ']'; }
    return JSON.stringify(v);
  }
  function diff(a, b, path, out, ignoreOrder){
    path = path || '$'; out = out || [];
    var ta = typeOf(a), tb = typeOf(b);
    if (ta !== tb) { out.push({ op: 'modified', path: path, from: a, to: b }); return out; }
    if (ta === 'object') {
      var keys = {}; Object.keys(a).forEach(function(k){ keys[k] = 1; }); Object.keys(b).forEach(function(k){ keys[k] = 1; });
      Object.keys(keys).forEach(function(k){
        var p = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k) ? path + '.' + k : path + '[' + JSON.stringify(k) + ']';
        if (!(k in b)) out.push({ op: 'removed', path: p, from: a[k] });
        else if (!(k in a)) out.push({ op: 'added', path: p, to: b[k] });
        else diff(a[k], b[k], p, out, ignoreOrder);
      });
      return out;
    }
    if (ta === 'array') return diffArrays(a, b, path, out, ignoreOrder);
    if (stableStr(a) !== stableStr(b)) out.push({ op: 'modified', path: path, from: a, to: b });
    return out;
  }
  function diffArrays(a, b, path, out, ignoreOrder){
    var inA = {}, inB = {};
    a.forEach(function(v, i){ var h = stableStr(v); (inA[h] = inA[h] || []).push(i); });
    b.forEach(function(v, j){ var h = stableStr(v); (inB[h] = inB[h] || []).push(j); });
    Object.keys(inA).forEach(function(h){
      var ai = inA[h], bi = inB[h] || [];
      var n = Math.min(ai.length, bi.length);
      for (var k = 0; k < n; k++) {
        if (ai[k] !== bi[k] && !ignoreOrder) out.push({ op: 'moved', path: path + '[' + bi[k] + ']', fromIdx: ai[k], toIdx: bi[k] });
      }
      for (var r = n; r < ai.length; r++) out.push({ op: 'removed', path: path + '[' + ai[r] + ']', from: a[ai[r]] });
    });
    Object.keys(inB).forEach(function(h){
      var bi = inB[h], ai = inA[h] || [];
      for (var s = ai.length; s < bi.length; s++) out.push({ op: 'added', path: path + '[' + bi[s] + ']', to: b[bi[s]] });
    });
    return out;
  }
  function esc(s){ return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function run(){
    var out = root.querySelector('.ta-out');
    var a, b;
    try { a = JSON.parse(root.querySelector('.ta-a').value); }
    catch (e) { out.innerHTML = '<div class="ta-embed-row"><span class="ta-embed-tag removed">error</span><span class="t">Original: ' + esc(e.message) + '</span></div>'; return; }
    try { b = JSON.parse(root.querySelector('.ta-b').value); }
    catch (e) { out.innerHTML = '<div class="ta-embed-row"><span class="ta-embed-tag removed">error</span><span class="t">Changed: ' + esc(e.message) + '</span></div>'; return; }
    var d = diff(a, b, '$', [], root.querySelector('.ta-ord').checked);
    var c = { added: 0, removed: 0, modified: 0, moved: 0 };
    d.forEach(function(x){ c[x.op]++; });
    root.querySelector('.ta-na').textContent = c.added;
    root.querySelector('.ta-nd').textContent = c.removed;
    root.querySelector('.ta-nm').textContent = c.modified;
    root.querySelector('.ta-nv').textContent = c.moved;
    if (!d.length) {
      out.innerHTML = '<div class="ta-embed-row"><span class="t" style="color:var(--ta-add)">Structurally identical.</span></div>';
      return;
    }
    out.innerHTML = d.slice(0, 200).map(function(x){
      var t = '';
      if (x.op === 'added') t = JSON.stringify(x.to) + ' added';
      else if (x.op === 'removed') t = JSON.stringify(x.from) + ' removed';
      else if (x.op === 'modified') t = JSON.stringify(x.from) + ' → ' + JSON.stringify(x.to);
      else t = 'index ' + x.fromIdx + ' → ' + x.toIdx;
      return '<div class="ta-embed-row"><span class="ta-embed-tag ' + x.op + '">' + x.op + '</span><span class="p">' + esc(x.path) + '</span><br><span class="t">' + esc(t) + '</span></div>';
    }).join('') + (d.length > 200 ? '<div class="ta-embed-row"><span class="t">… ' + (d.length - 200) + ' more changes</span></div>' : '');
  }

  root.querySelector('.ta-go').addEventListener('click', run);
  root.addEventListener('change', function(e){ if (e.target.classList.contains('ta-ord')) run(); });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.jsonDiff = { recalc: run };
})();
