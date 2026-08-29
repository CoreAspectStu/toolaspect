/*!
 * ToolAspect Business Card QR Generator Embed
 * Install: <div id="ta-business-card-qr"></div>
 *          <script src="https://toolaspect.com/embed/business-card-qr-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * QR engine: qrcode-generator 1.4.4 lazy-loaded from jsDelivr, rendered client-side.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-business-card-qr';
  var BASE = 'https://toolaspect.com/business-card-qr-generator/';
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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:9px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
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
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:480px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'business-card-qr');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="business-card-qr"]')) {
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
    + '<div class="ta-embed-title">Business Card QR Generator</div>'
    + '<div class="ta-embed-subtitle">vCard 3.0 with correct escaping, rendered in your browser</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>First name</label><input type="text" class="ta-first" value="Bao"></div>'
    + '<div class="ta-embed-form-group"><label>Last name</label><input type="text" class="ta-last" value="Nguyen"></div>'
    + '<div class="ta-embed-form-group"><label>Company</label><input type="text" class="ta-org" value="Nguyen Dental, LLC"></div>'
    + '<div class="ta-embed-form-group"><label>Job title</label><input type="text" class="ta-title" value="Owner &amp; DDS"></div>'
    + '<div class="ta-embed-form-group"><label>Phone</label><input type="tel" class="ta-tel" value="(512) 555-0134"></div>'
    + '<div class="ta-embed-form-group"><label>Email</label><input type="email" class="ta-email" value="bao@nguyendental.com"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-stage">'
    + '<div class="ta-embed-qrbox"><canvas class="ta-canvas" width="800" height="800"></canvas></div>'
    + '<div class="ta-embed-stats">'
    + '<div><span>vCard size</span><strong class="ta-octets">—</strong></div>'
    + '<div><span>QR version</span><strong class="ta-version">—</strong></div>'
    + '<div><span>Modules</span><strong class="ta-modules">—</strong></div>'
    + '</div>'
    + '</div>'
    + '<button type="button" class="ta-embed-btn ta-download">Download PNG</button>'
    + '<button type="button" class="ta-embed-btn ta-secondary ta-copy">Copy vCard</button>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  // ── vCard 3.0 builder (same engine as toolaspect.com/business-card-qr-generator) ──
  function escVcard(s) {
    return String(s || '').replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r\n|\r|\n/g, '\\n');
  }
  function buildVCard() {
    var v = function (c) { return root.querySelector(c).value.trim(); };
    var L = ['BEGIN:VCARD', 'VERSION:3.0'];
    L.push('N:' + [v('.ta-last'), v('.ta-first'), '', '', ''].map(escVcard).join(';'));
    L.push('FN:' + escVcard([v('.ta-first'), v('.ta-last')].filter(Boolean).join(' ') || 'Unnamed'));
    if (v('.ta-org')) L.push('ORG:' + escVcard(v('.ta-org')));
    if (v('.ta-title')) L.push('TITLE:' + escVcard(v('.ta-title')));
    if (v('.ta-tel')) L.push('TEL;TYPE=CELL:' + escVcard(v('.ta-tel')));
    if (v('.ta-email')) L.push('EMAIL;TYPE=INTERNET:' + escVcard(v('.ta-email')));
    L.push('END:VCARD');
    return L.join('\r\n');
  }

  var lastVc = '';
  function draw() {
    lastVc = buildVCard();
    if (!window.qrcode) return; // still loading
    try {
      var qr = window.qrcode(0, 'M');
      qr.addData(lastVc, 'Byte');
      qr.make();
      var n = qr.getModuleCount(), ver = (n - 17) / 4;
      var c = root.querySelector('.ta-canvas');
      c.width = c.height = n * 12 + 96;
      var ctx = c.getContext('2d'), cell = (n * 12 + 96) / n;
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = '#000000';
      for (var r = 0; r < n; r++) for (var col = 0; col < n; col++)
        if (qr.isDark(r, col)) ctx.fillRect(col * cell, r * cell, Math.ceil(cell), Math.ceil(cell));
      root.querySelector('.ta-octets').textContent = new Blob([lastVc]).size + ' octets';
      root.querySelector('.ta-version').textContent = 'v' + ver + ' (ECC M)';
      root.querySelector('.ta-modules').textContent = n + '\u00d7' + n;
    } catch (e) { /* payload too large */ }
  }

  // Lazy-load the QR engine, then render
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
    a.download = 'business-card-qr.png';
    a.href = c.toDataURL('image/png');
    a.click();
  });
  root.querySelector('.ta-copy').addEventListener('click', function () {
    if (lastVc && navigator.clipboard) {
      navigator.clipboard.writeText(lastVc);
      var b = this, orig = b.textContent;
      b.textContent = '\u2713 Copied';
      setTimeout(function () { b.textContent = orig; }, 1500);
    }
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.businessCardQr = { recalc: draw };
})();
