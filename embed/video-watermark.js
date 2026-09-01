/*!
 * ToolAspect Video Watermark Size Planner Embed
 * Install: <div id="ta-video-watermark"></div>
 *          <script src="https://toolaspect.com/embed/video-watermark.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-video-watermark';
  var BASE = 'https://toolaspect.com/video-watermark/';

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
    + '.ta-embed-stats{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:4px}'
    + '.ta-embed-stat{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:10px;padding:12px 8px;text-align:center}'
    + '.ta-embed-stat .v{font-weight:700;font-size:1.05rem}'
    + '.ta-embed-stat .l{font-size:.68rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.03em;margin-top:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '.ta-embed-note{font-size:.72rem;color:var(--ta-muted);text-align:center;margin-top:8px}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-stats{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'video-watermark');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="video-watermark"]')) {
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
    + '<div class="ta-embed-title">Video Watermark Planner</div>'
    + '<div class="ta-embed-subtitle">Exact watermark pixel size and corner anchor for any resolution</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Video width (px)</label><input type="number" class="ta-w" value="1920" min="16" step="2"></div>'
    + '<div class="ta-embed-form-group"><label>Video height (px)</label><input type="number" class="ta-h" value="1080" min="16" step="2"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Watermark width (% of frame)</label><input type="number" class="ta-pct" value="10" min="1" max="40" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Edge margin (% of width)</label><input type="number" class="ta-mg" value="5" min="1" max="15" step="0.5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-stats">'
    + '<div class="ta-embed-stat"><div class="v ta-wm">—</div><div class="l">Watermark width</div></div>'
    + '<div class="ta-embed-stat"><div class="v ta-margin">—</div><div class="l">Edge margin</div></div>'
    + '<div class="ta-embed-stat"><div class="v ta-x">—</div><div class="l">Anchor x (bottom-right)</div></div>'
    + '<div class="ta-embed-stat"><div class="v ta-y">—</div><div class="l">Anchor y (bottom-right)</div></div>'
    + '</div>'
    + '<div class="ta-embed-note">Working range: 8-12% width at 40-70% opacity. Adding only — never removing.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function num(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function calc() {
    var w = Math.max(16, num('.ta-w'));
    var h = Math.max(16, num('.ta-h'));
    var pct = Math.max(1, num('.ta-pct'));
    var mg = Math.max(1, num('.ta-mg'));
    var wmW = Math.round(w * pct / 100);
    var margin = Math.round(w * mg / 100);
    root.querySelector('.ta-wm').textContent = wmW + ' px';
    root.querySelector('.ta-margin').textContent = margin + ' px';
    root.querySelector('.ta-x').textContent = (w - margin - wmW) + ' px';
    root.querySelector('.ta-y').textContent = (h - margin) + ' px';
  }

  root.querySelectorAll('input').forEach(function (el) { el.addEventListener('input', calc); });
  calc();
})();
