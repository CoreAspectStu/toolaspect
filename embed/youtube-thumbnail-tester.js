/*!
 * ToolAspect YouTube Thumbnail Tester Embed
 * Install: <div id="ta-youtube-thumbnail-tester"></div>
 *          <script src="https://toolaspect.com/embed/youtube-thumbnail-tester.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Two-image compare with 0-100 attention scoring. All processing stays in the browser.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-youtube-thumbnail-tester';
  var BASE = 'https://toolaspect.com/youtube-thumbnail-tester/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-thumbs{display:grid;grid-template-columns:1fr 1fr;gap:12px}'
    + '.ta-slot{border:2px dashed var(--ta-border);border-radius:10px;padding:10px;text-align:center;color:var(--ta-muted);font-size:.82rem;cursor:pointer;transition:border-color .2s}'
    + '.ta-slot:hover{border-color:var(--ta-accent)}'
    + '.ta-slot.has{border-style:solid;cursor:default}'
    + '.ta-slot input{display:none}'
    + '.ta-slot img.full{width:100%;border-radius:8px;display:block}'
    + '.ta-slot img.feed{width:120px;border-radius:6px;display:block;margin:6px auto 0}'
    + '.ta-metric{display:flex;align-items:center;gap:8px;font-size:.72rem;color:var(--ta-muted);margin-top:5px}'
    + '.ta-metric .bar{flex:1;height:5px;background:var(--ta-bg);border-radius:3px;overflow:hidden}'
    + '.ta-metric .bar i{display:block;height:100%;background:var(--ta-accent)}'
    + '.ta-total{margin-top:8px;font-size:1rem;font-weight:800;color:var(--ta-text)}'
    + '.ta-total.win{color:#16a34a}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:480px){.ta-thumbs{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'youtube-thumbnail-tester');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="youtube-thumbnail-tester"]')) {
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
    + '<div class="ta-embed-title">YouTube Thumbnail Tester</div>'
    + '<div class="ta-embed-subtitle">Compare two designs — contrast, brightness, clutter, color</div>'
    + '<div class="ta-embed-card"><div class="ta-thumbs">'
    + '<div class="ta-slot" data-slot="A">Click or drop design A<input type="file" accept="image/*"></div>'
    + '<div class="ta-slot" data-slot="B">Click or drop design B<input type="file" accept="image/*"></div>'
    + '</div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function band(v, lo, hi, fallHi) {
    if (v >= lo && v <= hi) return 100;
    if (v < lo) return clamp((v / lo) * 100, 0, 100);
    return clamp(((fallHi - v) / (fallHi - hi)) * 100, 0, 100);
  }
  function score(m) {
    var b = band(m.lum, 0.35, 0.75, 1.0);
    var c = clamp((m.contrast / 0.18) * 100, 0, 100);
    var s = band(m.sat, 0.35, 0.75, 0.9);
    var e = band(m.edge, 0.05, 0.15, 0.25);
    return { b: b, c: c, s: s, e: e, total: 0.25 * b + 0.30 * c + 0.20 * s + 0.25 * e };
  }
  function analyze(img, cb) {
    var W = 128, H = 72, c = document.createElement('canvas');
    c.width = W; c.height = H;
    var ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0, W, H);
    var d = ctx.getImageData(0, 0, W, H).data;
    var lums = [], sats = 0;
    for (var i = 0; i < d.length; i += 4) {
      var r = d[i] / 255, g = d[i + 1] / 255, b = d[i + 2] / 255;
      lums.push(0.2126 * r + 0.7152 * g + 0.0722 * b);
      var mx = Math.max(r, g, b), mn = Math.min(r, g, b);
      sats += mx > 0 ? (mx - mn) / mx : 0;
    }
    var n = lums.length, mean = lums.reduce(function (a, b2) { return a + b2; }, 0) / n;
    var variance = lums.reduce(function (a, b2) { return a + (b2 - mean) * (b2 - mean); }, 0) / n;
    var edge = 0, ec = 0;
    for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
      var idx = y * W + x;
      if (x + 1 < W) { edge += Math.abs(lums[idx] - lums[idx + 1]); ec++; }
      if (y + 1 < H) { edge += Math.abs(lums[idx] - lums[idx + W]); ec++; }
    }
    cb({ lum: mean, contrast: Math.sqrt(variance), sat: sats / n, edge: edge / ec });
  }

  var results = {};

  function pickWinner() {
    var keys = Object.keys(results);
    if (keys.length < 2) return;
    var best = null;
    keys.forEach(function (k) { if (!best || results[k].s.total > results[best].s.total) best = k; });
    keys.forEach(function (k) {
      var t = root.querySelector('.ta-slot[data-slot="' + k + '"] .ta-total');
      if (t) t.classList.toggle('win', k === best);
    });
  }

  function wire(slot) {
    var input = slot.querySelector('input');
    function load(file) {
      if (!file || !/^image\//.test(file.type)) return;
      var rd = new FileReader();
      rd.onload = function () {
        var img = new Image();
        img.onload = function () {
          slot.classList.add('has');
          slot.innerHTML = '<img class="full" alt="thumbnail preview"><img class="feed" alt="feed size preview">';
          slot.querySelector('.full').src = img.src;
          slot.querySelector('.feed').src = img.src;
          analyze(img, function (m) {
            var s = score(m);
            results[slot.getAttribute('data-slot')] = { m: m, s: s };
            [['Contrast', s.c], ['Brightness', s.b], ['Clutter', s.e], ['Saturation', s.s]].forEach(function (rw) {
              var row = document.createElement('div');
              row.className = 'ta-metric';
              row.innerHTML = '<span style="width:66px;text-align:left">' + rw[0] + ' ' + Math.round(rw[1]) + '</span><div class="bar"><i style="width:' + Math.round(rw[1]) + '%"></i></div>';
              slot.appendChild(row);
            });
            var tot = document.createElement('div');
            tot.className = 'ta-total';
            tot.textContent = 'Attention: ' + s.total.toFixed(1) + '/100';
            slot.appendChild(tot);
            pickWinner();
          });
        };
        img.src = rd.result;
      };
      rd.readAsDataURL(file);
    }
    slot.addEventListener('click', function () { if (!slot.classList.contains('has')) input.click(); });
    input.addEventListener('change', function () { load(input.files[0]); });
    slot.addEventListener('dragover', function (e) { e.preventDefault(); });
    slot.addEventListener('drop', function (e) { e.preventDefault(); load(e.dataTransfer.files[0]); });
  }

  root.querySelectorAll('.ta-slot').forEach(wire);

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.youtubeThumbnailTester = {};
})();
