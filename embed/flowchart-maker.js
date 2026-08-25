/*!
 * ToolAspect Mini Flowchart Embed
 * Install: <div id="ta-flowchart-maker"></div>
 *          <script src="https://toolaspect.com/embed/flowchart-maker.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-flowchart-maker';
  var BASE = 'https://toolaspect.com/flowchart-maker/';

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
    + '.ta-embed-chart svg{display:block;height:auto;margin:0 auto}'
    + '.ta-embed-btn{display:block;width:100%;padding:11px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.95rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'flowchart-maker');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="flowchart-maker"]')) {
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
    '<div class="ta-embed-title">Mini Flowchart</div>'
    + '<div class="ta-embed-subtitle">One step per line — start:/end:, ? decision, &gt; input</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Steps</label><textarea id="ta-fc-in">start: Form submitted\n> Validate email\n? Email valid?\nSend confirmation\nend: Done</textarea></div>'
    + '<button class="ta-embed-btn" id="ta-fc-go">Draw flowchart</button>'
    + '<div class="ta-embed-chart" id="ta-fc-out" style="display:none;margin-top:12px"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect Flowchart Maker</a></div>';
  target.appendChild(root);

  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  document.getElementById('ta-fc-go').addEventListener('click', function () {
    var nodes = [];
    document.getElementById('ta-fc-in').value.split('\n').forEach(function (line) {
      var raw = line.trim();
      if (!raw || raw.charAt(0) === '#') return;
      var type = 'process', label = raw;
      if (/^start:/i.test(raw)) { type = 'start'; label = raw.replace(/^start:\s*/i, ''); }
      else if (/^end:/i.test(raw)) { type = 'end'; label = raw.replace(/^end:\s*/i, ''); }
      else if (raw.charAt(0) === '?') { type = 'decision'; label = raw.slice(1).split('|')[0].trim(); }
      else if (raw.charAt(0) === '>') { type = 'io'; label = raw.slice(1).trim(); }
      nodes.push({ type: type, label: label });
    });
    var out = document.getElementById('ta-fc-out');
    if (!nodes.length) { out.style.display = 'block'; out.innerHTML = '<p style="color:#888;font-family:Arial;padding:10px;margin:0">Add steps above.</p>'; return; }
    var CW = 220, NH = 44, DIA = 68, GAP = 24, W = CW + 90, y = 18, s = '';
    nodes.forEach(function (n) { n.y = y; n.h = n.type === 'decision' ? DIA : NH; y += n.h + GAP; });
    var H = y + 6, cx = W / 2;
    s += '<rect width="' + W + '" height="' + H + '" fill="#fff"/>';
    nodes.forEach(function (n, i) {
      if (i < nodes.length - 1) {
        var b = nodes[i + 1];
        s += '<line x1="' + cx + '" y1="' + (n.y + n.h) + '" x2="' + cx + '" y2="' + (b.y - 7) + '" stroke="#475569" stroke-width="1.5"/>'
          + '<polygon points="' + cx + ',' + b.y + ' ' + (cx - 4.5) + ',' + (b.y - 8) + ' ' + (cx + 4.5) + ',' + (b.y - 8) + '" fill="#475569"/>';
        if (n.type === 'decision') s += '<text x="' + (cx + 7) + '" y="' + ((n.y + n.h + b.y) / 2 + 4) + '" font-family="Arial" font-size="10" font-weight="bold" fill="#16a34a">Yes</text>';
      }
    });
    nodes.forEach(function (n) {
      var fill = '#eef2ff', stroke = '#6366f1', bh = n.h;
      if (n.type === 'start') { fill = '#dcfce7'; stroke = '#16a34a'; }
      if (n.type === 'end') { fill = '#fee2e2'; stroke = '#dc2626'; }
      if (n.type === 'io') { fill = '#e0f2fe'; stroke = '#0284c7'; }
      if (n.type === 'decision') {
        var w = CW / 2, h = DIA / 2, cy = n.y + DIA / 2;
        s += '<polygon points="' + cx + ',' + n.y + ' ' + (cx + w) + ',' + cy + ' ' + cx + ',' + (n.y + DIA) + ' ' + (cx - w) + ',' + cy + '" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>'
          + '<text x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" font-family="Arial" font-size="10.5" fill="#1e293b">' + esc(n.label.slice(0, 16)) + '</text>'
          + '<text x="' + (cx + w + 6) + '" y="' + (cy - 5) + '" font-family="Arial" font-size="10" font-weight="bold" fill="#dc2626">No</text>';
      } else {
        var rx = n.type === 'start' || n.type === 'end' ? bh / 2 : 6;
        s += '<rect x="' + (cx - CW / 2) + '" y="' + n.y + '" width="' + CW + '" height="' + bh + '" rx="' + rx + '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.5"/>'
          + '<text x="' + cx + '" y="' + (n.y + bh / 2 + 4) + '" text-anchor="middle" font-family="Arial" font-size="11" fill="#1e293b">' + esc(n.label.slice(0, 26)) + '</text>';
      }
    });
    out.style.display = 'block';
    out.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '">' + s + '</svg>';
  });
})();
