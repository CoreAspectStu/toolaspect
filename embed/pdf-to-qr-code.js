/*!
 * ToolAspect PDF-to-QR Code Embed
 * Install: <div id="ta-pdf-to-qr-code"></div>
 *          <script src="https://toolaspect.com/embed/pdf-to-qr-code.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Note: loads qrcode-generator 1.4.4 from jsDelivr once.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pdf-to-qr-code';
  var BASE = 'https://toolaspect.com/pdf-to-qr-code/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{display:grid;grid-template-columns:180px 1fr;gap:16px;align-items:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-qrwrap{text-align:center}'
    + '.ta-embed-qrwrap canvas{background:#fff;border-radius:8px;padding:6px;max-width:100%;height:auto}'
    + '.ta-embed-big{font-size:1.15rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.85rem;margin-top:6px;line-height:1.5}'
    + '.ta-embed-btn{display:inline-block;padding:9px 18px;background:var(--ta-accent);border:none;border-radius:8px;color:#fff;font-weight:600;font-size:.85rem;cursor:pointer;font-family:inherit;margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-result{grid-template-columns:1fr;justify-items:center}.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pdf-to-qr-code');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pdf-to-qr-code"]')) {
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
    + '<div class="ta-embed-title">PDF to QR Code</div>'
    + '<div class="ta-embed-subtitle">Paste your PDF’s hosted link, get a printable QR</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>PDF URL (Drive, Dropbox, or any https:// link)</label><input type="url" class="ta-url" placeholder="https://drive.google.com/file/d/…/view" spellcheck="false"></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Error correction</label><select class="ta-ec"><option value="M" selected>M — 15%</option><option value="L">L — 7%</option><option value="Q">Q — 25%</option><option value="H">H — 30%</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Export size (px)</label><select class="ta-size"><option>400</option><option selected>600</option><option>1000</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-qrwrap"><canvas class="ta-canvas" width="200" height="200"></canvas></div>'
    + '<div><div class="ta-embed-big ta-status">Paste a link to start</div><div class="ta-embed-sub ta-note"></div><button type="button" class="ta-btn ta-dl" style="display:none">Download PNG</button></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var statusEl = root.querySelector('.ta-status');
  var noteEl = root.querySelector('.ta-note');
  var dlBtn = root.querySelector('.ta-dl');
  var canvas = root.querySelector('.ta-canvas');
  var ready = false;

  function cleanLink(u) {
    var m = u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=)([\w-]{10,})/);
    if (m) return { url: 'https://drive.google.com/uc?export=download&id=' + m[1], note: 'Drive link converted to direct download.' };
    if (/dropbox\.com/.test(u)) {
      if (/[?&]dl=0/.test(u)) return { url: u.replace(/([?&])dl=0/, '$1dl=1'), note: 'Dropbox link switched to direct download.' };
      if (!/[?&]dl=1/.test(u)) return { url: u + (u.indexOf('?') > -1 ? '&' : '?') + 'dl=1', note: 'Dropbox link switched to direct download.' };
    }
    return { url: u, note: '' };
  }

  function render() {
    if (!ready) { statusEl.textContent = 'QR library loading…'; return; }
    var raw = root.querySelector('.ta-url').value.trim();
    var ctx = canvas.getContext('2d');
    if (!raw) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      statusEl.textContent = 'Paste a link to start';
      noteEl.textContent = '';
      dlBtn.style.display = 'none';
      return;
    }
    var c2 = cleanLink(raw);
    try {
      var qr = qrcode(0, root.querySelector('.ta-ec').value);
      qr.addData(c2.url);
      qr.make();
      var size = parseInt(root.querySelector('.ta-size').value, 10);
      var count = qr.getModuleCount();
      canvas.width = size; canvas.height = size;
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = '#111';
      for (var r = 0; r < count; r++) for (var col = 0; col < count; col++) {
        if (qr.isDark(r, col)) ctx.fillRect(Math.floor(col * size / count), Math.floor(r * size / count), Math.ceil(size / count), Math.ceil(size / count));
      }
      statusEl.textContent = count + '×' + count + ' modules · ' + c2.url.length + ' chars';
      noteEl.textContent = c2.note;
      dlBtn.style.display = 'inline-block';
    } catch (e) {
      statusEl.textContent = 'Link too long to encode';
      noteEl.textContent = 'Use a shortened URL.';
      dlBtn.style.display = 'none';
    }
  }

  function loadLib(cb) {
    if (typeof qrcode !== 'undefined') return cb();
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js';
    s.onload = cb;
    s.onerror = function () { statusEl.textContent = 'Could not load the QR library.'; };
    (document.head || document.documentElement).appendChild(s);
  }

  dlBtn.addEventListener('click', function () {
    var a = document.createElement('a');
    a.download = 'pdf-qr-code.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  });

  root.addEventListener('input', render);
  root.addEventListener('change', render);
  loadLib(function () { ready = true; render(); });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.pdfToQrCode = { recalc: render };
})();
