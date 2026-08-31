/*!
 * ToolAspect Asset Tag Generator Embed
 * Install: <div id="ta-asset-tag-generator"></div>
 *          <script src="https://toolaspect.com/embed/asset-tag-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-asset-tag-generator';
  var BASE = 'https://toolaspect.com/asset-tag-generator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-row.two{grid-template-columns:2fr 1fr}'
    + '.ta-embed-form-group{margin-bottom:0}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.5rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.88rem;margin-top:6px}'
    + '.ta-embed-btn{display:inline-block;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 22px;'
    + 'font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:12px}'
    + '.ta-embed-btn:hover{opacity:.92}'
    + '.ta-embed-sheet{background:#fff;border-radius:8px;padding:14px 10px;margin-top:12px;box-shadow:0 2px 10px rgba(0,0,0,.15)}'
    + '.ta-embed-grid{display:flex;flex-wrap:wrap;gap:5px;justify-content:center}'
    + '.ta-embed-plabel{background:#fff;border:1px dashed #cbd5e1;border-radius:2px;display:flex;align-items:center;justify-content:center;overflow:hidden}'
    + '.ta-embed-plabel span{font-weight:700;color:#111;font-family:Helvetica,Arial,sans-serif;font-size:9px;white-space:nowrap}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'asset-tag-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="asset-tag-generator"]')) {
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
    + '<div class="ta-embed-title">Asset Tag Generator</div>'
    + '<div class="ta-embed-subtitle">Sequential tags with Code 39 barcodes, printed on Avery-compatible sheets</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Prefix</label><input type="text" class="ta-prefix" value="ACME-IT" maxlength="14"></div>'
    + '<div class="ta-embed-form-group"><label>How many</label><input type="number" class="ta-count" value="60" min="1" max="3000"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Start number</label><input type="number" class="ta-start" value="1" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Digits</label><input type="number" class="ta-pad" value="4" min="1" max="8"></div>'
    + '<div class="ta-embed-form-group"><label>Sheet preset</label><select class="ta-preset">'
    + '<option value="5160">5160 — 30/sheet</option><option value="5163">5163 — 10/sheet</option><option value="5167">5167 — 80/sheet</option>'
    + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big ta-range">—</div>'
    + '<div class="ta-sub ta-sheets">—</div>'
    + '<button type="button" class="ta-embed-btn ta-pdf">Download label PDF</button>'
    + '</div>'
    + '<div class="ta-embed-sheet"><div class="ta-embed-grid"></div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var PRESETS = {
    '5160': { cols: 3, rows: 10, w: 189, h: 72, left: 13.5, top: 36, px: 198, py: 72, name: '5160/8160' },
    '5163': { cols: 2, rows: 5, w: 288, h: 144, left: 11.25, top: 36, px: 301.5, py: 144, name: '5163/8163' },
    '5167': { cols: 4, rows: 20, w: 126, h: 36, left: 20.25, top: 36, px: 148.5, py: 36, name: '5167/8167' }
  };
  var SAFE = 6.5;
  var C39 = {
    '0': 'nnnwwnwnn', '1': 'wnnwnnnnw', '2': 'nnwwnnnnw', '3': 'wnwwnnnnn', '4': 'nnnwwnnnw',
    '5': 'wnnwwnnnn', '6': 'nnwwwnnnn', '7': 'nnnwnnwnw', '8': 'wnnwnnwnn', '9': 'nnwwnnwnn',
    'A': 'wnnnnwnnw', 'B': 'nnwnnwnnw', 'C': 'wnwnnwnnn', 'D': 'nnnnwwnnw', 'E': 'wnnnwwnnn',
    'F': 'nnwnwwnnn', 'G': 'nnnnnwwnw', 'H': 'wnnnnwwnn', 'I': 'nnwnnwwnn', 'J': 'nnnnwwwnn',
    'K': 'wnnnnnnww', 'L': 'nnwnnnnww', 'M': 'wnwnnnnwn', 'N': 'nnnnwnnww', 'O': 'wnnnwnnwn',
    'P': 'nnwnwnnwn', 'Q': 'nnnnnnwww', 'R': 'wnnnnnwwn', 'S': 'nnwnnnwwn', 'T': 'nnnnwnwwn',
    'U': 'wwnnnnnnw', 'V': 'nwwnnnnnw', 'W': 'wwwnnnnnn', 'X': 'nwnnwnnnw', 'Y': 'wwnnwnnnn',
    'Z': 'nwwnwnnnn', '-': 'nwnnnnwnw', '.': 'wwnnnnwnn', ' ': 'nwwnnnwnn',
    '$': 'nwnwnwnnn', '/': 'nwnwnnnwn', '+': 'nwnnnwnwn', '%': 'nnnwnwnwn', '*': 'nwnnwnwnn'
  };
  function c39Runs(text) {
    var t = ('*' + text + '*').toUpperCase(), runs = [], mods = 0;
    for (var i = 0; i < t.length; i++) {
      var pat = C39[t[i]];
      if (!pat) return null;
      for (var k = 0; k < 9; k++) { var wide = pat[k] === 'w'; runs.push({ space: k % 2 === 1, w: wide ? 3 : 1 }); mods += wide ? 3 : 1; }
      if (i < t.length - 1) { runs.push({ space: true, w: 1 }); mods += 1; }
    }
    return { runs: runs, modules: mods };
  }
  function val(sel) {
    var el = root.querySelector(sel);
    return el ? el.value : '';
  }
  function num(sel, dflt) {
    var el = root.querySelector(sel);
    var n = el ? parseInt(el.value, 10) : NaN;
    return isNaN(n) ? dflt : n;
  }
  function buildTags() {
    var prefix = val('.ta-prefix').trim().toUpperCase();
    var start = Math.max(0, num('.ta-start', 0));
    var count = Math.max(1, Math.min(3000, num('.ta-count', 60)));
    var pad = Math.max(1, Math.min(8, num('.ta-pad', 4)));
    var tags = [];
    for (var i = 0; i < count; i++) {
      var s = String(start + i);
      while (s.length < pad) s = '0' + s;
      tags.push((prefix ? prefix + '-' : '') + s);
    }
    return tags;
  }
  function escPdf(s) { return String(s).replace(/[^\x20-\x7E]/g, '?').replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)'); }
  function labelContent(tag, p) {
    var w = p.w - 2 * SAFE, h = p.h - 2 * SAFE, s = '';
    if (p.cols * p.rows !== 80) {
      var m = c39Runs(tag.replace(/[^0-9A-Za-z\-. $/+%]/g, ''));
      if (m) {
        var N = w / (m.modules + 20);
        var barH = Math.min(h * 0.60, 40);
        var cx = (w - m.modules * N) / 2;
        for (var k = 0; k < m.runs.length; k++) {
          var r = m.runs[k];
          if (!r.space) s += cx.toFixed(2) + ' ' + (h - barH).toFixed(2) + ' ' + (r.w * N).toFixed(2) + ' ' + barH.toFixed(2) + ' re f\n';
          cx += r.w * N;
        }
        var tSize = p.h >= 144 ? 15 : 10;
        var tw = tag.length * tSize * 0.6;
        s += 'BT /F2 ' + tSize + ' Tf ' + ((w - tw) / 2).toFixed(2) + ' 2 Td (' + escPdf(tag) + ') Tj ET\n';
        return s;
      }
    }
    var t2 = p.h >= 72 ? 11 : 8.5;
    var tw2 = tag.length * t2 * 0.6;
    s += 'BT /F2 ' + t2 + ' Tf ' + ((w - tw2) / 2).toFixed(2) + ' ' + Math.max(1, h / 2 - t2 / 2).toFixed(2) + ' Td (' + escPdf(tag) + ') Tj ET\n';
    return s;
  }
  function buildPdf(tags) {
    var p = PRESETS[val('.ta-preset')] || PRESETS['5160'];
    var perSheet = p.cols * p.rows;
    var pages = Math.ceil(tags.length / perSheet) || 1;
    var pageObjs = [];
    for (var pg = 0; pg < pages; pg++) {
      var content = '';
      for (var i = 0; i < perSheet; i++) {
        var idx = pg * perSheet + i;
        if (idx >= tags.length) break;
        var lx = p.left + (i % p.cols) * p.px, ly = 792 - p.top - p.h - Math.floor(i / p.cols) * p.py;
        content += 'q 1 0 0 1 ' + (lx + SAFE).toFixed(2) + ' ' + (ly + SAFE).toFixed(2) + ' cm\n0 g\n' + labelContent(tags[idx], p) + 'Q\n';
      }
      pageObjs.push(content);
    }
    var objs = [], kids = [];
    for (var i2 = 0; i2 < pageObjs.length; i2++) kids.push((5 + i2 * 2) + ' 0 R');
    objs[1] = '<< /Type /Catalog /Pages 2 0 R >>';
    objs[2] = '<< /Type /Pages /Kids [' + kids.join(' ') + '] /Count ' + pageObjs.length + ' >>';
    objs[3] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
    objs[4] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';
    for (var i3 = 0; i3 < pageObjs.length; i3++) {
      objs[5 + i3 * 2] = '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ' + (6 + i3 * 2) + ' 0 R >>';
      objs[6 + i3 * 2] = '<< /Length ' + pageObjs[i3].length + ' >>\nstream\n' + pageObjs[i3] + '\nendstream';
    }
    var parts = ['%PDF-1.4\n'], offsets = [];
    for (var j = 1; j < objs.length; j++) {
      offsets[j] = parts.reduce(function (a, p2) { return a + p2.length; }, 0);
      parts.push(j + ' 0 obj\n' + objs[j] + '\nendobj\n');
    }
    var xrefPos = parts.reduce(function (a, p2) { return a + p2.length; }, 0);
    var xref = 'xref\n0 ' + objs.length + '\n0000000000 65535 f \n';
    for (var k = 1; k < objs.length; k++) xref += ('0000000000' + (offsets[k] || 0)).slice(-10) + ' 00000 n \n';
    xref += 'trailer\n<< /Size ' + objs.length + ' /Root 1 0 R >>\nstartxref\n' + xrefPos + '\n%%EOF';
    parts.push(xref);
    var pdfStr = parts.join('');
    var bytes = new Uint8Array(pdfStr.length);
    for (var b = 0; b < pdfStr.length; b++) bytes[b] = pdfStr.charCodeAt(b) & 0xff;
    return bytes;
  }
  function render() {
    var tags = buildTags();
    var p = PRESETS[val('.ta-preset')] || PRESETS['5160'];
    var perSheet = p.cols * p.rows;
    var sheets = Math.ceil(tags.length / perSheet);
    root.querySelector('.ta-range').textContent = tags[0] + ' → ' + tags[tags.length - 1];
    root.querySelector('.ta-sheets').textContent = tags.length.toLocaleString() + ' tags · ' + sheets + ' sheet' + (sheets > 1 ? 's' : '') + ' of ' + p.name + ' (' + (sheets * perSheet - tags.length) + ' positions unused)';
    var grid = root.querySelector('.ta-embed-grid');
    grid.innerHTML = '';
    var show = Math.min(10, tags.length);
    for (var i = 0; i < show; i++) {
      var d = document.createElement('div');
      d.className = 'ta-embed-plabel';
      var scale = Math.min(1.5, 130 / p.w);
      d.style.width = (p.w * scale) + 'px';
      d.style.height = (p.h * scale) + 'px';
      var sp = document.createElement('span');
      sp.textContent = tags[i];
      d.appendChild(sp);
      grid.appendChild(d);
    }
  }
  root.addEventListener('input', render);
  root.addEventListener('change', render);
  root.querySelector('.ta-pdf').addEventListener('click', function () {
    var tags = buildTags();
    var a = document.createElement('a');
    a.download = 'asset-tags-' + (val('.ta-prefix').trim().toLowerCase() || 'sheet') + '-' + tags.length + '.pdf';
    a.href = URL.createObjectURL(new Blob([buildPdf(tags)], { type: 'application/pdf' }));
    a.click();
  });

  render();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.assetTagGenerator = { recalc: render };
})();
