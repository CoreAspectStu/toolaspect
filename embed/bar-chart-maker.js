/*!
 * ToolAspect Bar Chart Embed
 * Install: <div id="ta-bar-chart-maker"></div>
 *          <script src="https://toolaspect.com/embed/bar-chart-maker.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-bar-chart-maker';
  var BASE = 'https://toolaspect.com/bar-chart-maker/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.3rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group textarea{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 12px;font-size:.85rem;font-family:ui-monospace,Menlo,Consolas,monospace;min-height:100px;resize:vertical;outline:none}'
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-chart{background:#fff;border:1px solid var(--ta-border);border-radius:8px;padding:8px;margin-bottom:8px}'
    + '.ta-embed-chart svg{display:block;width:100%;height:auto}'
    + '.ta-embed-btn{display:block;width:100%;padding:11px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.95rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'bar-chart-maker');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="bar-chart-maker"]')) {
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
  root.innerHTML =
    '<div class="ta-embed-title">Bar Chart Widget</div>'
    + '<div class="ta-embed-subtitle">Label, value per line — chart renders instantly</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Data</label><textarea id="ta-bc-in">Q1, 118\nQ2, 142\nQ3, 137\nQ4, 165</textarea></div>'
    + '<div class="ta-embed-form-group"><label>Chart title</label><input id="ta-bc-title" value="Sales by Quarter"></div>'
    + '<button class="ta-embed-btn" id="ta-bc-go">Draw chart</button>'
    + '<div class="ta-embed-chart" id="ta-bc-out" style="display:none;margin-top:12px"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect Bar Chart Maker</a></div>';
  target.appendChild(root);

  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function fmt(n) {
    if (Math.abs(n) >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    if (Math.abs(n) >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
    return String(Math.round(n * 100) / 100);
  }

  document.getElementById('ta-bc-go').addEventListener('click', function () {
    var rows = [];
    document.getElementById('ta-bc-in').value.split('\n').forEach(function (line) {
      var p = line.split(/[,;\t]/);
      if (p.length >= 2) {
        var v = parseFloat(p.slice(1).join('').replace(/[^0-9.\-]/g, ''));
        if (p[0].trim() && !isNaN(v)) rows.push({ label: p[0].trim(), value: v });
      }
    });
    var out = document.getElementById('ta-bc-out');
    if (!rows.length) { out.style.display = 'block'; out.innerHTML = '<p style="color:#888;font-family:Arial;padding:10px;margin:0">Enter label, value pairs.</p>'; return; }
    var W = 560, H = 330, padL = 50, padR = 16, padT = 44, padB = 42;
    var title = document.getElementById('ta-bc-title').value;
    var maxV = Math.max.apply(null, rows.map(function (r) { return r.value; }));
    var minV = Math.min(0, Math.min.apply(null, rows.map(function (r) { return r.value; })));
    var span = maxV - minV || 1;
    var plotW = W - padL - padR, plotH = H - padT - padB;
    var zeroY = padT + plotH * (maxV / span);
    var s = '<rect width="' + W + '" height="' + H + '" fill="#fff"/>';
    if (title) s += '<text x="' + (W / 2) + '" y="26" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#0f172a">' + esc(title) + '</text>';
    for (var i = 0; i <= 4; i++) {
      var v = minV + span * i / 4, gy = padT + plotH * (1 - i / 4);
      s += '<line x1="' + padL + '" y1="' + gy + '" x2="' + (padL + plotW) + '" y2="' + gy + '" stroke="#e2e8f0"/>'
        + '<text x="' + (padL - 6) + '" y="' + (gy + 3.5) + '" text-anchor="end" font-family="Arial" font-size="9.5" fill="#64748b">' + fmt(v) + '</text>';
    }
    rows.forEach(function (r, k) {
      var bw = Math.min(60, plotW / rows.length * 0.6), cx = padL + plotW * (k + 0.5) / rows.length;
      var hv = Math.abs(r.value) / span * plotH, y = r.value >= 0 ? zeroY - hv : zeroY;
      s += '<rect x="' + (cx - bw / 2) + '" y="' + y + '" width="' + bw + '" height="' + hv + '" rx="3" fill="#4f46e5"/>'
        + '<text x="' + cx + '" y="' + (r.value >= 0 ? y - 5 : y + hv + 12) + '" text-anchor="middle" font-family="Arial" font-size="10.5" font-weight="bold" fill="#334155">' + fmt(r.value) + '</text>'
        + '<text x="' + cx + '" y="' + (H - 20) + '" text-anchor="middle" font-family="Arial" font-size="10.5" fill="#1e293b">' + esc(r.label.slice(0, 12)) + '</text>';
    });
    s += '<line x1="' + padL + '" y1="' + zeroY + '" x2="' + (padL + plotW) + '" y2="' + zeroY + '" stroke="#94a3b8" stroke-width="1.5"/>';
    out.style.display = 'block';
    out.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '">' + s + '</svg>';
  });
})();
