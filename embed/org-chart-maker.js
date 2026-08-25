/*!
 * ToolAspect Mini Org Chart Embed
 * Install: <div id="ta-org-chart-maker"></div>
 *          <script src="https://toolaspect.com/embed/org-chart-maker.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-org-chart-maker';
  var BASE = 'https://toolaspect.com/org-chart-maker/';

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
    + '.ta-embed-chart svg{display:block;height:auto}'
    + '.ta-embed-btn{display:block;width:100%;padding:11px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.95rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'org-chart-maker');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="org-chart-maker"]')) {
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
    '<div class="ta-embed-title">Mini Org Chart</div>'
    + '<div class="ta-embed-subtitle">Indented list in, org chart out</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>People (indent 2 spaces per level)</label><textarea id="ta-oc-in">Sam Rivera — CEO\n  Jo Lin — CTO\n    Ana Kim — Engineer\n    Raj Patel — Engineer\n  Mia Shaw — CMO</textarea></div>'
    + '<button class="ta-embed-btn" id="ta-oc-go">Draw chart</button>'
    + '<div class="ta-embed-chart" id="ta-oc-out" style="display:none;margin-top:12px"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect Org Chart Maker</a></div>';
  target.appendChild(root);

  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function parse(text) {
    var rootN = { name: '', children: [] }, stack = [{ node: rootN, depth: -1 }];
    text.split('\n').forEach(function (line) {
      if (!line.trim() || line.trim().charAt(0) === '#') return;
      var lead = line.match(/^[ \t]*/)[0];
      var depth = Math.round(lead.replace(/\t/g, '  ').length / 2);
      var parts = line.trim().split(/\s+[—–\-|]\s+|,\s+/);
      var node = { name: parts[0], title: parts.slice(1).join(', '), children: [] };
      while (stack.length > 1 && stack[stack.length - 1].depth >= depth) stack.pop();
      stack[stack.length - 1].node.children.push(node);
      stack.push({ node: node, depth: depth });
    });
    return rootN.children.length === 1 ? rootN.children[0] : rootN;
  }

  document.getElementById('ta-oc-go').addEventListener('click', function () {
    var rootN = parse(document.getElementById('ta-oc-in').value);
    var SLOT = 150, BW = 120, BH = 46, RG = 40, cur = { n: SLOT / 2 };
    (function layout(n, depth) {
      n.depth = depth;
      if (!n.children.length) { n.x = cur.n; cur.n += SLOT; return; }
      n.children.forEach(function (c) { layout(c, depth + 1); });
      n.x = (n.children[0].x + n.children[n.children.length - 1].x) / 2;
    })(rootN, 0);
    var maxD = 0;
    (function walk(n) { if (n.depth > maxD) maxD = n.depth; n.children.forEach(walk); })(rootN);
    var W = cur.n + SLOT / 2, H = (maxD + 1) * (BH + RG) + RG, s = '';
    (function lines(n) {
      var y = RG / 2 + n.depth * (BH + RG);
      n.children.forEach(function (k) {
        var ky = RG / 2 + k.depth * (BH + RG), mid = y + BH + RG / 2;
        s += '<path d="M' + n.x + ' ' + (y + BH) + ' L' + n.x + ' ' + mid + ' L' + k.x + ' ' + mid + ' L' + k.x + ' ' + ky + '" fill="none" stroke="#94a3b8" stroke-width="1.5"/>';
        lines(k);
      });
    })(rootN);
    (function boxes(n) {
      var y = RG / 2 + n.depth * (BH + RG), top = n.depth === 0;
      s += '<rect x="' + (n.x - BW / 2) + '" y="' + y + '" width="' + BW + '" height="' + BH + '" rx="7" fill="' + (top ? '#312e81' : '#fff') + '" stroke="' + (top ? '#312e81' : '#c7d2fe') + '" stroke-width="1.5"/>'
        + '<text x="' + n.x + '" y="' + (y + (n.title ? 20 : 29)) + '" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="' + (top ? '#fff' : '#1e293b') + '">' + esc(n.name.slice(0, 16)) + '</text>'
        + (n.title ? '<text x="' + n.x + '" y="' + (y + 35) + '" text-anchor="middle" font-family="Arial" font-size="9.5" fill="' + (top ? '#c7d2fe' : '#64748b') + '">' + esc(n.title.slice(0, 18)) + '</text>' : '');
      n.children.forEach(boxes);
    })(rootN);
    var out = document.getElementById('ta-oc-out');
    out.style.display = 'block';
    out.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '"><rect width="' + W + '" height="' + H + '" fill="#fff"/>' + s + '</svg>';
  });
})();
