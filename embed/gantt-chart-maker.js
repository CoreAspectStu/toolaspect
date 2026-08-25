/*!
 * ToolAspect Mini Gantt Chart Embed
 * Install: <div id="ta-gantt-chart-maker"></div>
 *          <script src="https://toolaspect.com/embed/gantt-chart-maker.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-gantt-chart-maker';
  var BASE = 'https://toolaspect.com/gantt-chart-maker/';

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
    + '.ta-embed-form-group textarea{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 12px;font-size:.85rem;font-family:ui-monospace,Menlo,Consolas,monospace;min-height:110px;resize:vertical;outline:none}'
    + '.ta-embed-chart{background:#fff;border:1px solid var(--ta-border);border-radius:8px;padding:8px;overflow-x:auto;margin-bottom:8px}'
    + '.ta-embed-chart svg{display:block;min-width:480px;width:100%;height:auto}'
    + '.ta-embed-btn{display:block;width:100%;padding:11px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.95rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'gantt-chart-maker');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="gantt-chart-maker"]')) {
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
    '<div class="ta-embed-title">Mini Gantt Chart</div>'
    + '<div class="ta-embed-subtitle">Task, start day, days — one per line</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Tasks (name, start day, days)</label><textarea id="ta-gt-in">Design, 0, 5\nBuild, 4, 10\nContent, 8, 7\nQA, 13, 5\nLaunch, 18, 2</textarea></div>'
    + '<button class="ta-embed-btn" id="ta-gt-go">Draw timeline</button>'
    + '<div class="ta-embed-chart" id="ta-gt-out" style="display:none;margin-top:12px"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect Gantt Chart Maker</a></div>';
  target.appendChild(root);

  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  document.getElementById('ta-gt-go').addEventListener('click', function () {
    var rows = [];
    document.getElementById('ta-gt-in').value.split('\n').forEach(function (line) {
      var p = line.split(',');
      if (p.length >= 3) {
        var s = parseInt(p[1], 10), d = parseInt(p[2], 10);
        if (p[0].trim() && !isNaN(s) && !isNaN(d) && d > 0) rows.push({ name: p[0].trim(), start: Math.max(0, s), days: d });
      }
    });
    var out = document.getElementById('ta-gt-out');
    if (!rows.length) { out.style.display = 'block'; out.innerHTML = '<p style="color:#888;font-family:Arial;padding:10px;margin:0">Enter name, start, days per line.</p>'; return; }
    var total = 7;
    rows.forEach(function (r) { total = Math.max(total, r.start + r.days); });
    total = Math.ceil((total + 2) / 7) * 7;
    var dayW = Math.max(14, Math.min(34, 560 / total));
    var LBL = 120, RH = 34, HH = 26;
    var W = LBL + total * dayW, H = HH + rows.length * RH + 16;
    var s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '">';
    s += '<rect width="' + W + '" height="' + H + '" fill="#fff"/>';
    for (var d = 0; d < total; d += 7) {
      var x = LBL + d * dayW;
      s += '<line x1="' + x + '" y1="' + HH + '" x2="' + x + '" y2="' + H + '" stroke="#e2e8f0"/>';
      s += '<text x="' + (x + 3) + '" y="17" font-family="Arial" font-size="10" fill="#64748b">day ' + d + '</text>';
    }
    rows.forEach(function (r, i) {
      var y = HH + i * RH;
      s += '<text x="6" y="' + (y + RH / 2 + 4) + '" font-family="Arial" font-size="11" fill="#1e293b">' + esc(r.name.slice(0, 18)) + '</text>';
      var bx = LBL + r.start * dayW, bw = r.days * dayW - 2;
      s += '<rect x="' + bx + '" y="' + (y + 7) + '" width="' + bw + '" height="' + (RH - 14) + '" rx="4" fill="#4f46e5" fill-opacity="0.75"/>';
      s += '<text x="' + (bx + bw / 2) + '" y="' + (y + RH / 2 + 4) + '" text-anchor="middle" font-family="Arial" font-size="9.5" font-weight="bold" fill="#fff">' + r.days + 'd</text>';
    });
    s += '</svg>';
    out.style.display = 'block';
    out.innerHTML = s;
  });
})();
