/*!
 * ToolAspect Online Vet Cost Comparison Embed
 * Install: <div id="ta-online-vet-cost-comparison"></div>
 *          <script src="https://toolaspect.com/embed/online-vet-cost-comparison.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-online-vet-cost-comparison';
  var BASE = 'https://toolaspect.com/online-vet-cost-comparison/';

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
    + '.ta-embed-big{font-size:2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-table{width:100%;border-collapse:collapse;font-size:.82rem;margin-top:8px}'
    + '.ta-embed-table th,.ta-embed-table td{padding:6px 8px;border-bottom:1px solid var(--ta-border);text-align:left;color:var(--ta-text)}'
    + '.ta-embed-table th{color:var(--ta-muted);font-weight:600}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'online-vet-cost-comparison');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="online-vet-cost-comparison"]')) {
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
    + '<div class="ta-embed-title">Online Vet Cost Comparison</div>'
    + '<div class="ta-embed-subtitle">Subscriptions vs pay-per-visit at your usage</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Online vet visits / month</label><input type="number" class="ta-vpm" value="1" min="0" max="10" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>In-person exam ($)</label><input type="number" class="ta-person" value="90" min="30" max="300" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function money(n) { return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }); }

  function calc() {
    var vpm = parseFloat(root.querySelector('.ta-vpm').value) || 0;
    var person = parseFloat(root.querySelector('.ta-person').value) || 90;
    var visits = vpm * 12;
    var opts = [
      { name: 'Pawp', cost: 99 },
      { name: 'Dutch (5 pets)', cost: 132 },
      { name: 'Vetster plan', cost: 120 + Math.max(0, visits - 4) * 35 },
      { name: 'Airvet', cost: 420 },
      { name: 'Chewy video', cost: visits * 49.99 },
      { name: 'In-person', cost: visits * person }
    ].sort(function (a, b) { return a.cost - b.cost; });
    var rows = opts.map(function (o) {
      return '<tr><td>' + o.name + '</td><td>' + money(o.cost) + '/yr</td></tr>';
    }).join('');
    var best = visits === 0
      ? 'Free vet tech chat (Chewy)'
      : opts[0].name + ' &mdash; ' + money(opts[0].cost) + '/yr';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + best + '</div>'
      + '<div class="ta-embed-sub">' + (visits === 0 ? 'No visits planned: pay nothing for access' : (visits) + ' visits/yr &middot; ' + '$' + (opts[0].cost / Math.max(1, visits)).toFixed(2) + ' per visit effective') + '</div>'
      + '<table class="ta-embed-table"><tr><th>Option</th><th>Annual</th></tr>' + rows + '</table>'
      + '<div class="ta-embed-sub">Published late-2026 list prices; verify before subscribing.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.onlineVetCostComparison = { recalc: calc };
})();
