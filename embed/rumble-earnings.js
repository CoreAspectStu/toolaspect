/*!
 * ToolAspect Rumble Earnings Calculator Embed
 * Install: <div id="ta-rumble-earnings"></div>
 *          <script src="https://toolaspect.com/embed/rumble-earnings.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-rumble-earnings';
  var BASE = 'https://toolaspect.com/rumble-earnings/';

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
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:12px;text-align:center}'
    + '.ta-embed-stat{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:10px;padding:10px 6px}'
    + '.ta-embed-stat .v{font-weight:700;font-size:.95rem}'
    + '.ta-embed-stat .l{font-size:.68rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.03em}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '.ta-embed-note{font-size:.72rem;color:var(--ta-muted);text-align:center;margin-top:8px}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-stats{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'rumble-earnings');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="rumble-earnings"]')) {
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
    + '<div class="ta-embed-title">Rumble Earnings Calculator</div>'
    + '<div class="ta-embed-subtitle">Views × rate, with the $2-$10 band and $50 payout floor</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Monthly views</label><input type="number" class="ta-views" value="100000" min="0" step="5000"></div>'
    + '<div class="ta-embed-form-group"><label>$ per 1,000 views</label><input type="number" class="ta-rate" value="5" min="0" step="0.5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Licensing &amp; flat deals ($/mo, optional)</label><input type="number" class="ta-lic" value="0" min="0" step="50"></div>'
    + '</div>'
    + '<div class="ta-embed-result"><div class="ta-embed-big ta-mo">—</div><div class="ta-embed-sub ta-sub">enter your monthly views</div>'
    + '<div class="ta-embed-stats">'
    + '<div class="ta-embed-stat"><div class="v ta-low">—</div><div class="l">at $2 / 1k</div></div>'
    + '<div class="ta-embed-stat"><div class="v ta-high">—</div><div class="l">at $10 / 1k</div></div>'
    + '<div class="ta-embed-stat"><div class="v ta-pay">—</div><div class="l">$50 payout</div></div>'
    + '</div></div>'
    + '<div class="ta-embed-note">Estimates only — Rumble publishes no fixed rate; $2-$10 per 1,000 views is the analyst band.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function num(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function money(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calc() {
    var views = num('.ta-views');
    var rate = num('.ta-rate');
    var lic = num('.ta-lic');
    var mo = views / 1000 * rate + lic;
    if (views > 0) {
      root.querySelector('.ta-mo').textContent = money(mo) + '/mo';
      root.querySelector('.ta-sub').textContent = money(mo * 12) + ' per year';
      root.querySelector('.ta-low').textContent = money(views / 1000 * 2 + lic);
      root.querySelector('.ta-high').textContent = money(views / 1000 * 10 + lic);
      root.querySelector('.ta-pay').textContent = mo >= 50 ? 'cleared monthly' : (mo > 0 ? 'month ' + Math.ceil(50 / mo) : '—');
    } else {
      root.querySelector('.ta-mo').textContent = '—';
      root.querySelector('.ta-sub').textContent = 'enter your monthly views';
      ['ta-low', 'ta-high', 'ta-pay'].forEach(function (c) { root.querySelector('.' + c).textContent = '—'; });
    }
  }

  root.querySelectorAll('input').forEach(function (el) { el.addEventListener('input', calc); });
  calc();
})();
