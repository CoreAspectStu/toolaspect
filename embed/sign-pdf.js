/*!
 * ToolAspect Signature Pad Embed (draw → PNG)
 * Install: <div id="ta-sign-pdf"></div>
 *          <script src="https://toolaspect.com/embed/sign-pdf.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: szimek/signature_pad (MIT). Full PDF signing lives on the tool page.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-sign-pdf';
  var BASE = 'https://toolaspect.com/sign-pdf/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-pad{background:#fff;border:1px solid var(--ta-border);border-radius:10px;position:relative;touch-action:none}'
    + '.ta-embed-pad canvas{width:100%;height:180px;display:block;border-radius:10px;cursor:crosshair}'
    + '.ta-embed-pad span{position:absolute;left:12px;top:50%;transform:translateY(-50%);color:#cbd5e1;font-size:.85rem;pointer-events:none}'
    + '.ta-embed-row{display:flex;gap:10px;margin-top:12px;align-items:center;justify-content:center;flex-wrap:wrap}'
    + '.ta-embed-row select{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:9px 11px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-btn{display:inline-block;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 22px;'
    + 'font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:12px}'
    + '.ta-embed-btn:hover{opacity:.92}'
    + '.ta-embed-btn.ghost{background:transparent;border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-status{text-align:center;color:var(--ta-muted);font-size:.82rem;margin-top:10px;min-height:1.2em}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'sign-pdf');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="sign-pdf"]')) {
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
    + '<div class="ta-embed-title">Signature Pad</div>'
    + '<div class="ta-embed-subtitle">Draw an e-signature, download a transparent PNG — nothing uploaded</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-pad"><canvas></canvas><span>sign here</span></div>'
    + '<div class="ta-embed-row">'
    + '<select class="ta-ink"><option value="#000000">Black ink</option><option value="#1d4ed8">Blue ink</option></select>'
    + '<button type="button" class="ta-embed-btn ghost clear">Clear</button>'
    + '</div>'
    + '<button type="button" class="ta-embed-btn dl">Download PNG</button>'
    + '<div class="ta-embed-status">Draw with mouse, trackpad, or finger.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Place it on a PDF with <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect Sign PDF</a></div>';
  target.appendChild(root);

  var canvas = root.querySelector('canvas');
  var hint = root.querySelector('.ta-embed-pad span');
  var CAP_W = 1800, CAP_H = 540; // 600x180 CSS at 3x
  canvas.width = CAP_W; canvas.height = CAP_H;

  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/signature_pad@5.1.4/dist/signature_pad.umd.min.js';
  s.onload = init;
  (document.head || document.documentElement).appendChild(s);

  function init() {
    var pad = new SignaturePad(canvas, { penColor: '#000000', minWidth: 1.2, maxWidth: 3.4, backgroundColor: 'rgba(255,255,255,0)' });
    root.querySelector('.ta-ink').addEventListener('change', function (e) {
      pad.penColor = e.target.value;
    });
    root.querySelector('.clear').addEventListener('click', function () {
      pad.clear();
      hint.style.display = '';
      root.querySelector('.ta-embed-status').textContent = 'Cleared — draw again.';
    });
    pad.addEventListener('endStroke', function () {
      hint.style.display = 'none';
      root.querySelector('.ta-embed-status').textContent = 'Nice. Download the PNG or keep refining.';
    });
    root.querySelector('.dl').addEventListener('click', function () {
      if (pad.isEmpty()) {
        root.querySelector('.ta-embed-status').textContent = 'Draw something first.';
        return;
      }
      var a = document.createElement('a');
      a.download = 'signature.png';
      a.href = pad.toDataURL('image/png');
      a.click();
    });
    window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
    window.ToolAspectEmbeds.signPdf = { pad: pad };
  }
})();
