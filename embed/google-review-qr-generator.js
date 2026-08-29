/*!
 * ToolAspect Google Review QR Generator Embed
 * Install: <div id="ta-google-review-qr"></div>
 *          <script src="https://toolaspect.com/embed/google-review-qr-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * QR engine: qrcode-generator 1.4.4 lazy-loaded from jsDelivr, rendered client-side.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-google-review-qr';
  var BASE = 'https://toolaspect.com/google-review-qr-generator/';
  var LIB = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:16px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:9px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-out{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;'
    + 'font-size:.75rem;word-break:break-all;color:#16a34a;margin-bottom:12px}'
    + '.ta-embed-stage{display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;margin-bottom:12px}'
    + '.ta-embed-qrbox{background:#fff;padding:10px;border-radius:8px;line-height:0;flex-shrink:0}'
    + '.ta-embed-qrbox canvas{width:200px;height:200px;image-rendering:pixelated}'
    + '.ta-embed-stats{flex:1;min-width:200px;font-size:.8rem;color:var(--ta-muted)}'
    + '.ta-embed-stats div{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--ta-border)}'
    + '.ta-embed-btn{display:inline-block;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:9px 18px;font-size:.88rem;'
    + 'cursor:pointer;font-family:inherit;font-weight:600;margin:0 6px 10px 0}'
    + '.ta-embed-btn.ta-secondary{background:var(--ta-surface);color:var(--ta-text);border:1px solid var(--ta-border)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'google-review-qr');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="google-review-qr"]')) {
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
    + '<div class="ta-embed-title">Google Review QR Generator</div>'
    + '<div class="ta-embed-subtitle">Static QR from a Place ID, g.page link, or Maps URL</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Place ID, g.page review link, writereview link, or Maps URL</label>'
    + '<input type="text" class="ta-place" value="ChIJN1t_tDeuEmsRUsoyG83frY4" spellcheck="false"></div>'
    + '<div class="ta-embed-out">—</div>'
    + '</div>'
    + '<div class="ta-embed-stage">'
    + '<div class="ta-embed-qrbox"><canvas class="ta-canvas" width="800" height="800"></canvas></div>'
    + '<div class="ta-embed-stats">'
    + '<div><span>URL length</span><strong class="ta-len">—</strong></div>'
    + '<div><span>QR version</span><strong class="ta-version">—</strong></div>'
    + '<div><span>Modules</span><strong class="ta-modules">—</strong></div>'
    + '</div>'
    + '</div>'
    + '<button type="button" class="ta-embed-btn ta-download">Download PNG</button>'
    + '<button type="button" class="ta-embed-btn ta-secondary ta-open">Open link to test</button>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  // ── link builder (same engine as toolaspect.com/google-review-qr-generator) ──
  function extractPlaceId(raw) {
    raw = raw.trim();
    if (!raw) return '';
    var m;
    if (m = raw.match(/g\.page\/r\/([A-Za-z0-9_-]+)/i)) return 'https://g.page/r/' + m[1] + '/review';
    if (m = raw.match(/[?&]placeid=([^&\s]+)/i)) return 'https://search.google.com/local/writereview?placeid=' + m[1];
    if (m = raw.match(/(ChIJ[A-Za-z0-9_-]{8,})/)) return 'https://search.google.com/local/writereview?placeid=' + m[1];
    if (/^[A-Za-z0-9_-]{20,40}$/.test(raw)) return 'https://search.google.com/local/writereview?placeid=' + raw;
    if (/^https?:\/\//i.test(raw)) return raw;
    return '';
  }

  var lastUrl = '';
  function draw() {
    lastUrl = extractPlaceId(root.querySelector('.ta-place').value);
    root.querySelector('.ta-embed-out').textContent = lastUrl || '—';
    if (!lastUrl || !window.qrcode) return;
    try {
      var qr = window.qrcode(0, 'M');
      qr.addData(lastUrl);
      qr.make();
      var n = qr.getModuleCount(), ver = (n - 17) / 4;
      var c = root.querySelector('.ta-canvas');
      c.width = c.height = n * 12 + 96;
      var ctx = c.getContext('2d'), cell = (n * 12 + 96) / n;
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = '#000000';
      for (var r = 0; r < n; r++) for (var col = 0; col < n; col++)
        if (qr.isDark(r, col)) ctx.fillRect(col * cell, r * cell, Math.ceil(cell), Math.ceil(cell));
      root.querySelector('.ta-len').textContent = lastUrl.length + ' chars';
      root.querySelector('.ta-version').textContent = 'v' + ver + ' (ECC M)';
      root.querySelector('.ta-modules').textContent = n + '×' + n;
    } catch (e) { /* too long */ }
  }

  if (window.qrcode) { draw(); }
  else {
    var s = document.createElement('script');
    s.src = LIB;
    s.onload = draw;
    s.onerror = function () { if (window.console) console.error('[ToolAspect] could not load QR engine.'); };
    (document.head || document.documentElement).appendChild(s);
  }

  root.addEventListener('input', draw);
  root.querySelector('.ta-download').addEventListener('click', function () {
    var c = root.querySelector('.ta-canvas');
    var a = document.createElement('a');
    a.download = 'google-review-qr.png';
    a.href = c.toDataURL('image/png');
    a.click();
  });
  root.querySelector('.ta-open').addEventListener('click', function () {
    if (lastUrl) window.open(lastUrl, '_blank', 'noopener');
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.googleReviewQr = { recalc: draw };
})();
