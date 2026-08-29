/*!
 * ToolAspect Honeymoon Registry Fee Calculator Embed
 * Install: <div id="ta-honeymoon-registry-fee-calculator"></div>
 *          <script src="https://toolaspect.com/embed/honeymoon-registry-fee-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-honeymoon-registry-fee-calculator';
  var BASE = 'https://toolaspect.com/honeymoon-registry-fee-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}'
    + '.ta-embed-stat{text-align:center;background:var(--ta-bg);border-radius:8px;padding:10px 6px}'
    + '.ta-embed-stat .k{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-stat .v{font-size:1rem;font-weight:700}'
    + '.ta-embed-table{width:100%;border-collapse:collapse;font-size:.83rem;margin-top:14px}'
    + '.ta-embed-table th,.ta-embed-table td{padding:6px 8px;border:1px solid var(--ta-border);text-align:left}'
    + '.ta-embed-table th{background:var(--ta-bg)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-stats{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'honeymoon-registry-fee-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="honeymoon-registry-fee-calculator"]')) {
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

  var PLATFORMS = [
    { name: 'Honeyfund (offline)', pct: 0, fx: 0 },
    { name: 'Zola cash fund', pct: 0.025, fx: 0 },
    { name: "Traveler's Joy", pct: 0.0295, fx: 0 },
    { name: 'Honeyfund (card)', pct: 0.035, fx: 0.59 },
    { name: 'Honeymoon Wishes', pct: 0.0965, fx: 0 }
  ];

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Honeymoon Registry Fee Calculator</div>'
    + '<div class="ta-embed-subtitle">What your cash fund actually pays out after platform fees</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Fund total ($)</label><input type="number" class="ta-fund" value="5000" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Number of gifts</label><input type="number" class="ta-gifts" value="50" min="1" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big ta-best">—</div>'
    + '<div class="ta-embed-sub ta-bestsub"></div>'
    + '<div class="ta-embed-stats">'
    + '<div class="ta-embed-stat"><div class="k">Lowest fee</div><div class="v ta-lo">—</div></div>'
    + '<div class="ta-embed-stat"><div class="k">Highest fee</div><div class="v ta-hi">—</div></div>'
    + '<div class="ta-embed-stat"><div class="k">Spread</div><div class="v ta-sp">—</div></div>'
    + '</div>'
    + '<table class="ta-embed-table"><thead><tr><th>Platform</th><th>Fees</th><th>You get</th></tr></thead><tbody class="ta-body"></tbody></table>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Fee schedules as of mid-2026, verify current rates. Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var fund = val('.ta-fund');
    var gifts = Math.max(1, val('.ta-gifts'));
    var body = root.querySelector('.ta-body');
    var h = '', lo = null, hi = null, loNet = 0, hiNet = 0;
    for (var i = 0; i < PLATFORMS.length; i++) {
      var p = PLATFORMS[i];
      var fee = fund * p.pct + gifts * p.fx;
      var net = fund - fee;
      if (lo === null || fee < lo) { lo = fee; loNet = net; }
      if (hi === null || fee > hi) { hi = fee; hiNet = net; }
      h += '<tr><td>' + p.name + '</td><td>' + money(fee) + '</td><td><strong>' + money(net) + '</strong></td></tr>';
    }
    body.innerHTML = h;
    root.querySelector('.ta-best').textContent = money(loNet);
    root.querySelector('.ta-bestsub').textContent = 'best-case net on a ' + money(fund) + ' fund';
    root.querySelector('.ta-lo').textContent = money(lo);
    root.querySelector('.ta-hi').textContent = money(hi);
    root.querySelector('.ta-sp').textContent = money(hi - lo);
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.honeymoonRegistryFeeCalculator = { recalc: calc };
})();
