/*!
 * ToolAspect Color Contrast Checker Embed
 * Install: <div id="ta-color-contrast-checker"></div>
 *          <script src="https://toolaspect.com/embed/color-contrast-checker.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-color-contrast-checker';
  var BASE = 'https://toolaspect.com/color-contrast-checker/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;--ta-warn:#d97706;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171;--ta-warn:#fbbf24}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-fields{display:grid;grid-template-columns:1fr 1fr;gap:12px}'
    + '.ta-field label{display:block;font-size:.75rem;color:var(--ta-muted);margin-bottom:5px}'
    + '.ta-cwrap{display:flex;gap:6px;align-items:center}'
    + '.ta-cwrap input[type=color]{width:42px;height:42px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);padding:2px;cursor:pointer}'
    + '.ta-cwrap input[type=text]{flex:1;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);padding:8px 10px;font-size:1rem;font-family:ui-monospace,Menlo,Consolas,monospace;min-width:0}'
    + '.ta-btnrow{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px}'
    + '.ta-embed-btn{background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:9px 14px;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-ratio{text-align:center;margin-top:14px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:10px;padding:12px}'
    + '.ta-ratio .big{font-size:2rem;font-weight:700}'
    + '.ta-ratio .lum{font-size:.72rem;color:var(--ta-muted);margin-top:2px}'
    + '.ta-chips{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:10px}'
    + '.ta-chip{padding:4px 10px;border-radius:20px;font-size:.75rem;font-weight:600;border:1px solid var(--ta-border);background:transparent}'
    + '.ta-chip.pass{border-color:var(--ta-ok);color:var(--ta-ok)}'
    + '.ta-chip.fail{border-color:var(--ta-bad);color:var(--ta-bad)}'
    + '.ta-preview{margin-top:12px;border:1px solid var(--ta-border);border-radius:10px;padding:16px}'
    + '.ta-preview .t1{font-size:1.4rem;font-weight:700}'
    + '.ta-preview .t2{font-size:.88rem}'
    + '.ta-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;text-align:center}'
    + '.ta-status.ok{color:var(--ta-ok)}'
    + '.ta-fixnote{font-size:.78rem;color:var(--ta-warn);margin-top:8px;text-align:center;display:none}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'color-contrast-checker');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="color-contrast-checker"]')) {
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
    + '<div class="ta-embed-title">Color Contrast Checker</div>'
    + '<div class="ta-embed-subtitle">WCAG 2.x ratio + AA/AAA verdicts, computed in your visitor&rsquo;s browser</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-fields">'
    + '<div class="ta-field"><label>Foreground (text)</label><div class="ta-cwrap"><input type="color" class="ta-fgsw" value="#767676"><input type="text" class="ta-fgtxt" value="#767676" spellcheck="false" aria-label="Foreground hex"></div></div>'
    + '<div class="ta-field"><label>Background</label><div class="ta-cwrap"><input type="color" class="ta-bgsw" value="#ffffff"><input type="text" class="ta-bgtxt" value="#ffffff" spellcheck="false" aria-label="Background hex"></div></div>'
    + '</div>'
    + '<div class="ta-btnrow">'
    + '<button type="button" class="ta-embed-btn ta-fix">Fix to nearest AA pass</button>'
    + '<button type="button" class="ta-embed-btn ghost ta-swap">Swap</button>'
    + '</div>'
    + '<div class="ta-ratio"><div class="big ta-big">4.54:1</div><div class="lum ta-lum"></div><div class="ta-chips ta-chipsbox"></div></div>'
    + '<div class="ta-preview"><div class="t1">Large text 24px</div><div class="t2">Normal text 16px needs 4.5:1 against its background.</div></div>'
    + '<div class="ta-fixnote ta-fixnote-el"></div>'
    + '<div class="ta-status">WCAG AA: 4.5:1 normal / 3:1 large &middot; AAA: 7:1 / 4.5:1</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function normalizeHex(v) {
    v = String(v || '').trim().replace(/^#/, '');
    if (/^[0-9a-fA-F]{3}$/.test(v)) v = v[0] + v[0] + v[1] + v[1] + v[2] + v[2];
    if (!/^[0-9a-fA-F]{6}$/.test(v)) return null;
    return '#' + v.toLowerCase();
  }
  function chan(c) { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); }
  function lum(hex) {
    var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return 0.2126 * chan(r) + 0.7152 * chan(g) + 0.0722 * chan(b);
  }
  function ratio(f, b) {
    var L1 = Math.max(lum(f), lum(b)), L2 = Math.min(lum(f), lum(b));
    return (L1 + 0.05) / (L2 + 0.05);
  }
  function mixHex(f, b, t) {
    var out = '#';
    for (var i = 0; i < 3; i++) {
      var a = parseInt(f.substr(1 + i * 2, 2), 16), c = parseInt(b.substr(1 + i * 2, 2), 16);
      out += Math.round(a + (c - a) * t).toString(16).padStart(2, '0');
    }
    return out;
  }

  var fg = '#767676', bg = '#ffffff';
  function compute() {
    var note = root.querySelector('.ta-fixnote-el');
    note.style.display = 'none';
    var r = ratio(fg, bg);
    root.querySelector('.ta-big').textContent = r.toFixed(2) + ':1';
    root.querySelector('.ta-lum').textContent = 'L(' + fg + ') = ' + lum(fg).toFixed(4) + ' · L(' + bg + ') = ' + lum(bg).toFixed(4);
    var verdicts = [['AA normal', r >= 4.5], ['AA large', r >= 3], ['AAA normal', r >= 7], ['AAA large', r >= 4.5], ['UI 3:1', r >= 3]];
    root.querySelector('.ta-chipsbox').innerHTML = verdicts.map(function (v) {
      return '<span class="ta-chip ' + (v[1] ? 'pass' : 'fail') + '">' + (v[1] ? '✓ ' : '✕ ') + v[0] + '</span>';
    }).join('');
    var pv = root.querySelector('.ta-preview');
    pv.style.background = bg; pv.style.color = fg;
    var st = root.querySelector('.ta-status');
    st.className = 'ta-status' + (r >= 4.5 ? ' ok' : '');
    st.textContent = r >= 4.5 ? 'Passes AA normal text (' + r.toFixed(2) + ':1).' : 'Fails AA normal text (' + r.toFixed(2) + ':1 < 4.5:1).';
  }
  function bind(side, txtSel, swSel) {
    var txt = root.querySelector(txtSel), sw = root.querySelector(swSel);
    txt.addEventListener('input', function () {
      var n = normalizeHex(txt.value);
      if (n) { window[side] = n; sw.value = n; compute(); }
    });
    txt.addEventListener('blur', function () { txt.value = window[side]; });
    sw.addEventListener('input', function () { window[side] = sw.value; txt.value = sw.value; compute(); });
  }
  bind('fg', '.ta-fgtxt', '.ta-fgsw');
  bind('bg', '.ta-bgtxt', '.ta-bgsw');

  root.querySelector('.ta-swap').addEventListener('click', function () {
    var t = fg; fg = bg; bg = t;
    root.querySelector('.ta-fgtxt').value = fg; root.querySelector('.ta-fgsw').value = fg;
    root.querySelector('.ta-bgtxt').value = bg; root.querySelector('.ta-bgsw').value = bg;
    compute();
  });
  root.querySelector('.ta-fix').addEventListener('click', function () {
    var note = root.querySelector('.ta-fixnote-el');
    if (ratio(fg, bg) >= 4.5) {
      note.style.display = 'block';
      note.textContent = 'Already passes AA normal at ' + ratio(fg, bg).toFixed(2) + ':1.';
      return;
    }
    var towardWhite = ratio('#ffffff', bg) >= ratio('#000000', bg);
    var end = towardWhite ? '#ffffff' : '#000000';
    var lo = 0, hi = 1;
    for (var i = 0; i < 24; i++) {
      var mid = (lo + hi) / 2;
      if (ratio(mixHex(fg, end, mid), bg) >= 4.5) hi = mid; else lo = mid;
    }
    fg = mixHex(fg, end, hi);
    root.querySelector('.ta-fgtxt').value = fg; root.querySelector('.ta-fgsw').value = fg;
    compute();
    note.style.display = 'block';
    note.textContent = 'Foreground nudged to ' + fg.toUpperCase() + ' (' + ratio(fg, bg).toFixed(2) + ':1) — smallest move that passes AA.';
  });
  compute();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.colorContrastChecker = {};
})();
