/*!
 * ToolAspect Mini Mind Map Embed
 * Install: <div id="ta-mind-map-maker"></div>
 *          <script src="https://toolaspect.com/embed/mind-map-maker.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-mind-map-maker';
  var BASE = 'https://toolaspect.com/mind-map-maker/';

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
    + '.ta-embed-form-group input,.ta-embed-form-group textarea{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group textarea{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.85rem;min-height:100px;resize:vertical}'
    + '.ta-embed-chart{background:#fff;border:1px solid var(--ta-border);border-radius:8px;padding:8px;overflow-x:auto;margin-bottom:8px}'
    + '.ta-embed-chart svg{display:block;height:auto}'
    + '.ta-embed-btn{display:block;width:100%;padding:11px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.95rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'mind-map-maker');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="mind-map-maker"]')) {
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
    '<div class="ta-embed-title">Mini Mind Map</div>'
    + '<div class="ta-embed-subtitle">Topic plus branches — instant radial map</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Central topic</label><input id="ta-mm-topic" value="Quarterly Goals"></div>'
    + '<div class="ta-embed-form-group"><label>Branches (indent 2 spaces for sub-branches)</label><textarea id="ta-mm-in">Revenue\n  Renewals\n  Upsell\nProduct\n  Ship v2\n  Fix onboarding\nTeam\n  Hire PM\n  Onboard engineer</textarea></div>'
    + '<button class="ta-embed-btn" id="ta-mm-go">Draw mind map</button>'
    + '<div class="ta-embed-chart" id="ta-mm-out" style="display:none;margin-top:12px"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect Mind Map Maker</a></div>';
  target.appendChild(root);

  var PAL = ['#6366f1', '#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#a855f7'];
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  document.getElementById('ta-mm-go').addEventListener('click', function () {
    var topic = document.getElementById('ta-mm-topic').value || 'Topic';
    var mains = [];
    document.getElementById('ta-mm-in').value.split('\n').forEach(function (line) {
      if (!line.trim()) return;
      var lead = line.match(/^[ \t]*/)[0];
      var depth = Math.round(lead.replace(/\t/g, '  ').length / 2);
      if (depth === 0) mains.push({ label: line.trim(), subs: [] });
      else if (mains.length) mains[mains.length - 1].subs.push(line.trim());
    });
    var out = document.getElementById('ta-mm-out');
    if (!mains.length) { out.style.display = 'block'; out.innerHTML = '<p style="color:#888;font-family:Arial;padding:10px;margin:0">Add branches above.</p>'; return; }
    var half = Math.ceil(mains.length / 2);
    var right = mains.slice(0, half), left = mains.slice(half);
    function nRows(a) { var n = 0; a.forEach(function (m) { n += Math.max(1, m.subs.length); }); return n || 1; }
    var nR = nRows(right), nL = nRows(left);
    var rowH = 32, W = 860, H = Math.max(nR, nL) * rowH + 90, CX = W / 2, CY = H / 2;
    var cw = Math.max(130, topic.length * 8 + 26);
    var s = '<rect width="' + W + '" height="' + H + '" fill="#fff"/>';
    s += '<rect x="' + (CX - cw / 2) + '" y="' + (CY - 21) + '" width="' + cw + '" height="42" rx="21" fill="#312e81"/>'
      + '<text x="' + CX + '" y="' + (CY + 4) + '" text-anchor="middle" font-family="Arial" font-size="12.5" font-weight="bold" fill="#fff">' + esc(topic.slice(0, 22)) + '</text>';
    function side(arr, sd, off) {
      var i = 0;
      arr.forEach(function (m, mi) {
        var color = PAL[(mi + off) % PAL.length], n = Math.max(1, m.subs.length);
        i += n;
        var y0 = 36 + (i - n) * rowH + n * rowH / 2, dir = sd === 'r' ? 1 : -1;
        var bx = CX + dir * (cw / 2 + 46), tw = Math.max(56, m.label.length * 6.8 + 20);
        s += '<path d="M' + (CX + dir * cw / 2) + ' ' + CY + ' C' + (bx - dir * 36) + ' ' + CY + ' ' + (bx - dir * 36) + ' ' + y0 + ' ' + bx + ' ' + y0 + '" fill="none" stroke="' + color + '" stroke-width="2.2"/>';
        s += '<rect x="' + (sd === 'r' ? bx : bx - tw) + '" y="' + (y0 - 13) + '" width="' + tw + '" height="26" rx="13" fill="' + color + '"/>'
          + '<text x="' + bx + '" y="' + (y0 + 4) + '" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#fff">' + esc(m.label.slice(0, 18)) + '</text>';
        m.subs.forEach(function (sub, si) {
          var sy = y0 + (si - (m.subs.length - 1) / 2) * rowH, sx = bx + dir * (tw + 30);
          s += '<path d="M' + (sd === 'r' ? bx + tw : bx - tw) + ' ' + y0 + ' C' + (sx - dir * 18) + ' ' + y0 + ' ' + (sx - dir * 18) + ' ' + sy + ' ' + sx + ' ' + sy + '" fill="none" stroke="' + color + '" stroke-width="1.2" stroke-opacity="0.6"/>';
          s += '<circle cx="' + sx + '" cy="' + sy + '" r="3" fill="' + color + '"/>'
            + '<text x="' + (sx + dir * 7) + '" y="' + (sy + 4) + '" text-anchor="' + (sd === 'r' ? 'start' : 'end') + '" font-family="Arial" font-size="10.5" fill="#334155">' + esc(sub.slice(0, 24)) + '</text>';
        });
      });
    }
    side(right, 'r', 0);
    side(left, 'l', half);
    out.style.display = 'block';
    out.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '">' + s + '</svg>';
  });
})();
