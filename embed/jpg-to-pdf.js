/*!
 * ToolAspect JPG to PDF Embed
 * Install: <div id="ta-jpg-to-pdf"></div>
 *          <script src="https://toolaspect.com/embed/jpg-to-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-jpg-to-pdf';
  var BASE = 'https://toolaspect.com/jpg-to-pdf/';
  var PDFLIB_URL = 'https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.9.1/dist/pdf-lib.min.js';
  var SIZES = { 'a4': [595.28, 841.89], 'letter': [612, 792], 'legal': [612, 1008], 'a5': [419.53, 595.28], 'a3': [841.89, 1190.55] };

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '@media(max-width:520px){.ta-embed-row{grid-template-columns:1fr}}'
    + '.ta-embed-root label{font-size:.78rem;color:var(--ta-muted);font-weight:600;display:block;margin-bottom:3px}'
    + '.ta-embed-root input,.ta-embed-root select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 10px;font-size:.85rem;font-family:inherit;outline:none}'
    + '.ta-embed-root input:focus,.ta-embed-root select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-root input[type=file]{font-size:.75rem;cursor:pointer}'
    + '.ta-embed-btn{display:block;width:100%;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 12px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:8px}'
    + '.ta-embed-btn:disabled{opacity:.5;cursor:not-allowed}'
    + '.ta-list{margin-top:8px;font-size:.78rem;color:var(--ta-muted);max-height:120px;overflow:auto}'
    + '.ta-list div{padding:3px 0;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-out{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:14px;font-size:.82rem;margin-bottom:12px}'
    + '.ta-out .ok{color:var(--ta-ok)}'
    + '.ta-embed-err{background:var(--ta-surface);border:1px solid var(--ta-bad);color:var(--ta-bad);border-radius:8px;padding:10px 12px;font-size:.8rem;margin-bottom:12px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'jpg-to-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="jpg-to-pdf"]')) {
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
    + '<div class="ta-embed-title">JPG to PDF</div>'
    + '<div class="ta-embed-subtitle">Combine photos &amp; scans into one PDF &mdash; zero uploads, no recompression</div>'
    + '<div class="ta-embed-card">'
    + '<label>Images (JPG / PNG / WebP, multiple OK)</label><input type="file" class="ta-files" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" multiple>'
    + '<div class="ta-embed-row" style="margin-top:10px">'
    + '<div><label>Page size</label><select class="ta-size">'
    + '<option value="fit" selected>Fit to image</option><option value="a4">A4</option><option value="letter">Letter</option>'
    + '<option value="legal">Legal</option><option value="a5">A5</option><option value="a3">A3</option></select></div>'
    + '<div><label>Margin</label><select class="ta-margin"><option value="0" selected>None</option><option value="18">0.25 in</option><option value="36">0.5 in</option><option value="72">1 in</option></select></div>'
    + '</div>'
    + '<div class="ta-list"></div>'
    + '<button type="button" class="ta-embed-btn ta-go" disabled>Create PDF</button>'
    + '</div>'
    + '<div class="ta-out" style="display:none"></div>'
    + '<div class="ta-embed-err" style="display:none"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function err(msg) {
    var e = root.querySelector('.ta-embed-err');
    e.style.display = msg ? 'block' : 'none';
    e.textContent = msg || '';
  }
  function out(html) {
    var o = root.querySelector('.ta-out');
    o.style.display = html ? 'block' : 'none';
    o.innerHTML = html || '';
  }
  function fmtBytes(n) {
    return n < 1024 ? n + ' B' : (n < 1048576 ? (n / 1024).toFixed(1) + ' KB' : (n / 1048576).toFixed(2) + ' MB');
  }
  function loadScript(url, test) {
    return test ? Promise.resolve() : new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = url; s.onload = res;
      s.onerror = function () { rej(new Error('could not load ' + url)); };
      (document.head || document.documentElement).appendChild(s);
    });
  }

  var files = [];
  root.querySelector('.ta-files').addEventListener('change', function () {
    var list = Array.prototype.slice.call(this.files || []);
    if (!list.length) return;
    err(''); out('');
    files = files.concat(list);
    var box = root.querySelector('.ta-list');
    box.innerHTML = files.map(function (f) {
      return '<div>' + String(f.name).replace(/&/g, '&amp;').replace(/</g, '&lt;') + ' &middot; ' + fmtBytes(f.size) + '</div>';
    }).join('');
    root.querySelector('.ta-go').disabled = false;
  });

  function reencode(file) {
    return new Promise(function (res, rej) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        var c = document.createElement('canvas');
        c.width = img.naturalWidth; c.height = img.naturalHeight;
        c.getContext('2d').drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        c.toBlob(function (blob) {
          if (!blob) return rej(new Error('re-encode failed'));
          blob.arrayBuffer().then(function (ab) { res(new Uint8Array(ab)); });
        }, 'image/jpeg', 0.92);
      };
      img.onerror = function () { URL.revokeObjectURL(url); rej(new Error('could not decode ' + file.name)); };
      img.src = url;
    });
  }

  root.querySelector('.ta-go').addEventListener('click', async function () {
    var btn = this;
    btn.disabled = true; err(''); out('Building PDF&hellip;');
    try {
      var PDFLib = await loadScript(PDFLIB_URL, window.PDFLib).then(function () { return window.PDFLib; });
      var doc = await PDFLib.PDFDocument.create();
      var sizeMode = root.querySelector('.ta-size').value;
      var margin = parseFloat(root.querySelector('.ta-margin').value);
      var ok = 0, failed = [];
      for (var i = 0; i < files.length; i++) {
        var f = files[i];
        try {
          var isJpg = f.type === 'image/jpeg' || /\.jpe?g$/i.test(f.name);
          var isPng = f.type === 'image/png' || /\.png$/i.test(f.name);
          var img = isJpg ? await doc.embedJpg(new Uint8Array(await f.arrayBuffer()))
            : isPng ? await doc.embedPng(new Uint8Array(await f.arrayBuffer()))
            : await doc.embedJpg(await reencode(f));
          var pw, ph;
          if (sizeMode === 'fit') { pw = img.width; ph = img.height; }
          else {
            var s = SIZES[sizeMode];
            var landscape = img.width > img.height;
            pw = landscape ? s[1] : s[0]; ph = landscape ? s[0] : s[1];
          }
          var page = doc.addPage([pw, ph]);
          var sc = Math.min((pw - 2 * margin) / img.width, (ph - 2 * margin) / img.height);
          page.drawImage(img, {
            x: (pw - img.width * sc) / 2, y: (ph - img.height * sc) / 2,
            width: img.width * sc, height: img.height * sc
          });
          ok++;
        } catch (e) { failed.push(f.name); }
      }
      if (!ok) throw new Error('no images converted');
      var bytes = await doc.save({ useObjectStreams: true });
      var blob = new Blob([bytes], { type: 'application/pdf' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = 'images.pdf';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      out('<span class="ok">Done.</span> ' + ok + ' page(s) &middot; ' + fmtBytes(bytes.length) +
        ' downloaded.' + (failed.length ? ' Skipped: ' + failed.join(', ') : ''));
      files = [];
      root.querySelector('.ta-list').innerHTML = '';
      root.querySelector('.ta-go').disabled = true;
      root.querySelector('.ta-files').value = '';
    } catch (e) {
      out('');
      err('Failed: ' + (e.message || e));
    }
    btn.disabled = false;
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.jpgToPdf = {};
})();
