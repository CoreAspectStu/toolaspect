/*!
 * ToolAspect Compare PDFs Embed
 * Install: <div id="ta-compare-pdf"></div>
 *          <script src="https://toolaspect.com/embed/compare-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-compare-pdf';
  var BASE = 'https://toolaspect.com/compare-pdf/';
  var PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
  var PDFJS_WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  var DIFF_URL = 'https://cdn.jsdelivr.net/npm/diff@5.2.0/dist/diff.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;--ta-del:#fee2e2;--ta-del-t:#b91c1c;--ta-add:#dcfce7;--ta-add-t:#15803d;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171;--ta-del:rgba(239,68,68,.22);--ta-del-t:#fca5a5;--ta-add:rgba(34,197,94,.2);--ta-add-t:#86efac}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-picks{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-pick{border:1px dashed var(--ta-border);border-radius:10px;padding:10px;text-align:center}'
    + '.ta-pick .fname{font-size:.72rem;color:var(--ta-accent);margin-top:5px;word-break:break-all;min-height:1em}'
    + '.ta-embed-file{display:inline-block;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 12px;font-size:.8rem;cursor:pointer}'
    + '.ta-embed-file input{display:none}'
    + '.ta-embed-btn{background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 16px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:10px}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-select{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:6px 8px;font-size:.8rem;margin:6px 4px 0 0;font-family:inherit}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-status.ok{color:var(--ta-ok)}.ta-embed-status.bad{color:var(--ta-bad)}'
    + '.ta-summary{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:14px 16px;margin:12px 0}'
    + '.ta-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px}'
    + '.ta-stat{background:var(--ta-bg);border-radius:8px;padding:8px;text-align:center}'
    + '.ta-stat .n{font-size:1.2rem;font-weight:800;color:var(--ta-accent)}'
    + '.ta-stat.rem .n{color:var(--ta-bad)}.ta-stat.add .n{color:var(--ta-ok)}'
    + '.ta-stat .l{font-size:.68rem;color:var(--ta-muted)}'
    + '.ta-pair{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--ta-border);border-radius:10px;overflow:hidden;margin:10px 0}'
    + '.ta-pane .ph{background:var(--ta-bg);padding:5px 8px;font-size:.68rem;color:var(--ta-muted);border-bottom:1px solid var(--ta-border)}'
    + '.ta-pane:first-child .ph{border-right:1px solid var(--ta-border)}'
    + '.ta-pane .pt{padding:8px;font-size:.74rem;line-height:1.7;white-space:pre-wrap;word-break:break-word;max-height:320px;overflow-y:auto}'
    + '.ta-embed-root del.d{background:var(--ta-del);color:var(--ta-del-t);text-decoration:line-through;border-radius:3px;padding:0 1px}'
    + '.ta-embed-root ins.a{background:var(--ta-add);color:var(--ta-add-t);text-decoration:none;border-radius:3px;padding:0 1px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'compare-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="compare-pdf"]')) {
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
    + '<div class="ta-embed-title">Compare PDFs</div>'
    + '<div class="ta-embed-subtitle">Side-by-side word-level PDF diff, 100% in your visitor&rsquo;s browser</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-picks">'
    + '<div class="ta-pick"><label class="ta-embed-file">&#128196; Original<input type="file" class="ta-fileA" accept=".pdf,application/pdf"></label><div class="fname fa"></div></div>'
    + '<div class="ta-pick"><label class="ta-embed-file">&#128196; Revised<input type="file" class="ta-fileB" accept=".pdf,application/pdf"></label><div class="fname fb"></div></div>'
    + '</div>'
    + '<select class="ta-mode ta-embed-select"><option value="words" selected>Word diff</option><option value="lines">Line diff</option></select>'
    + '<button type="button" class="ta-embed-btn ta-compare" disabled>Compare PDFs</button>'
    + '<button type="button" class="ta-embed-btn ghost ta-clear">Clear</button>'
    + '<div class="ta-embed-status">Files never leave the browser.</div>'
    + '</div>'
    + '<div class="ta-out"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function status(msg, cls) {
    var s = root.querySelector('.ta-embed-status');
    s.textContent = msg; s.className = 'ta-embed-status' + (cls ? ' ' + cls : '');
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
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
  function wc(s) { return s.trim() ? s.trim().split(/\s+/).filter(Boolean).length : 0; }

  var docs = { A: null, B: null };
  function readFile(file, slot, label) {
    var fr = new FileReader();
    fr.onload = function () {
      loadScript(PDFJS_URL).then(function () {
        pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
        return pdfjsLib.getDocument({ data: new Uint8Array(fr.result) }).promise;
      }).then(function (doc) {
        docs[slot] = doc;
        root.querySelector(label).textContent = file.name + ' — ' + doc.numPages + ' page(s)';
        updateBtn();
      }).catch(function (err) {
        docs[slot] = null; root.querySelector(label).textContent = '';
        status('Could not open ' + file.name + '.', 'bad');
        updateBtn();
      });
    };
    fr.readAsArrayBuffer(file);
  }
  function updateBtn() {
    root.querySelector('.ta-compare').disabled = !(docs.A && docs.B);
    if (docs.A && docs.B) status('Both files loaded. Hit Compare.', 'ok');
  }
  root.querySelector('.ta-fileA').addEventListener('change', function (e) { if (e.target.files[0]) readFile(e.target.files[0], 'A', '.fa'); });
  root.querySelector('.ta-fileB').addEventListener('change', function (e) { if (e.target.files[0]) readFile(e.target.files[0], 'B', '.fb'); });
  root.querySelector('.ta-clear').addEventListener('click', function () {
    docs = { A: null, B: null };
    root.querySelector('.ta-fileA').value = ''; root.querySelector('.ta-fileB').value = '';
    root.querySelector('.fa').textContent = ''; root.querySelector('.fb').textContent = '';
    root.querySelector('.ta-out').innerHTML = '';
    root.querySelector('.ta-compare').disabled = true;
    status('Open both PDFs to begin.');
  });

  function extractPages(doc) {
    var out = [];
    var chain = Promise.resolve();
    for (var i = 1; i <= doc.numPages; i++) {
      (function (n) {
        chain = chain.then(function () {
          return doc.getPage(n).then(function (page) {
            return page.getTextContent().then(function (tc) {
              var text = '';
              (tc.items || []).forEach(function (it) { text += it.str + (it.hasEOL ? '\n' : ''); });
              out.push(text.replace(/[ \t]+/g, ' ').trim());
            });
          });
        });
      })(i);
    }
    return chain.then(function () { return out; });
  }

  root.querySelector('.ta-compare').addEventListener('click', function () {
    var btn = root.querySelector('.ta-compare');
    btn.disabled = true;
    status('Extracting text …');
    var pagesA, pagesB;
    loadScript(DIFF_URL).then(function () {
      return extractPages(docs.A);
    }).then(function (p) {
      pagesA = p; return extractPages(docs.B);
    }).then(function (p) {
      pagesB = p;
      status('Diffing …');
      setTimeout(function () {
        runDiff(pagesA, pagesB);
        btn.disabled = false;
      }, 30);
    }).catch(function (err) { status('Failed: ' + (err && err.message || err), 'bad'); btn.disabled = false; });
  });

  function runDiff(pagesA, pagesB) {
    var mode = root.querySelector('.ta-mode').value;
    var differ = mode === 'lines' ? Diff.diffLines : Diff.diffWords;
    var totalRem = 0, totalAdd = 0, onlyA = 0, onlyB = 0, totalWordsA = 0;
    pagesA.forEach(function (t) { totalWordsA += wc(t); });
    var out = root.querySelector('.ta-out');
    out.innerHTML = '';
    var pairs = Math.max(pagesA.length, pagesB.length);
    for (var i = 0; i < pairs; i++) {
      var ta = pagesA[i], tb = pagesB[i];
      var hasA = typeof ta === 'string', hasB = typeof tb === 'string';
      var lh, rh, lHead, rHead;
      if (hasA && !hasB) {
        onlyA++;
        lHead = 'Original — Page ' + (i + 1) + ' (removed)'; rHead = 'Revision — Page ' + (i + 1);
        lh = '<del class="d">' + esc(ta) + '</del>'; rh = '—';
        totalRem += wc(ta);
      } else if (hasB && !hasA) {
        onlyB++;
        lHead = 'Original — Page ' + (i + 1); rHead = 'Revision — Page ' + (i + 1) + ' (new)';
        lh = '—'; rh = '<ins class="a">' + esc(tb) + '</ins>';
        totalAdd += wc(tb);
      } else {
        lHead = 'Original — Page ' + (i + 1) + (ta ? '' : ' (no text layer)');
        rHead = 'Revision — Page ' + (i + 1) + (tb ? '' : ' (no text layer)');
        var parts = differ(ta, tb);
        lh = ''; rh = '';
        parts.forEach(function (p) {
          if (p.added) { rh += '<ins class="a">' + esc(p.value) + '</ins>'; totalAdd += wc(p.value); }
          else if (p.removed) { lh += '<del class="d">' + esc(p.value) + '</del>'; totalRem += wc(p.value); }
          else { lh += esc(p.value); rh += esc(p.value); }
        });
      }
      var pair = document.createElement('div');
      pair.className = 'ta-pair';
      pair.innerHTML = '<div class="ta-pane"><div class="ph">' + lHead + '</div><div class="pt">' + (lh || '<em style="color:var(--ta-muted)">(empty)</em>') + '</div></div>'
        + '<div class="ta-pane"><div class="ph">' + rHead + '</div><div class="pt">' + (rh || '<em style="color:var(--ta-muted)">(empty)</em>') + '</div></div>';
      out.appendChild(pair);
    }
    var churn = totalWordsA ? Math.round((totalRem + totalAdd) / totalWordsA * 100) : 0;
    var summary = document.createElement('div');
    summary.className = 'ta-summary';
    summary.innerHTML = '<div class="ta-stats">'
      + '<div class="ta-stat rem"><div class="n">' + totalRem + '</div><div class="l">words removed</div></div>'
      + '<div class="ta-stat add"><div class="n">' + totalAdd + '</div><div class="l">words added</div></div>'
      + '<div class="ta-stat"><div class="n">' + churn + '%</div><div class="l">of ' + totalWordsA + ' words changed</div></div>'
      + '<div class="ta-stat"><div class="n">' + onlyA + '</div><div class="l">pages only in original</div></div>'
      + '<div class="ta-stat"><div class="n">' + onlyB + '</div><div class="l">pages only in revision</div></div>'
      + '</div>';
    out.insertBefore(summary, out.firstChild);
    status('Done.', 'ok');
  }

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.comparePdf = {};
})();
