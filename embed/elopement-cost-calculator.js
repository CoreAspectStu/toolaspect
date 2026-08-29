/*!
 * ToolAspect Elopement Cost Calculator Embed
 * Install: <div id="ta-elopement-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/elopement-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-elopement-cost-calculator';
  var BASE = 'https://toolaspect.com/elopement-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:7px 0;border-bottom:1px solid var(--ta-border)}'
    + '.ta-embed-row:last-child{border-bottom:none}'
    + '.ta-embed-row label{font-size:.88rem;color:var(--ta-text)}'
    + '.ta-embed-row select{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:6px 8px;font-size:.8rem;font-family:inherit;outline:none}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'elopement-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="elopement-cost-calculator"]')) {
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

  var ITEMS = [
    { key: 'lic', label: 'Marriage license', lo: 25, ty: 60, hi: 125, on: 'ty' },
    { key: 'off', label: 'Officiant / civil ceremony', lo: 0, ty: 250, hi: 500, on: 'ty', replaced: true },
    { key: 'pho', label: 'Photographer (1-3 hrs)', lo: 400, ty: 800, hi: 2500, on: 'ty', replaced: true },
    { key: 'loc', label: 'Location / permit', lo: 0, ty: 200, hi: 600, on: 'ty', replaced: true },
    { key: 'att', label: 'Attire, both partners', lo: 250, ty: 500, hi: 1500, on: 'ty' },
    { key: 'flo', label: 'Bouquet & boutonniere', lo: 50, ty: 100, hi: 250, on: 'ty', replaced: true },
    { key: 'hmu', label: 'Hair & makeup', lo: 100, ty: 150, hi: 300, on: 'ty' },
    { key: 'din', label: 'Dinner & drinks for two', lo: 100, ty: 200, hi: 400, on: 'ty' },
    { key: 'trv', label: 'Travel & lodging', lo: 0, ty: 500, hi: 2000, on: 'skip' },
    { key: 'pkg', label: 'All-inclusive package (replaces officiant, photo, florals, location)', lo: 1500, ty: 3500, hi: 8000, on: 'skip', isPkg: true }
  ];

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  var rowsHtml = ITEMS.map(function (it, i) {
    return '<div class="ta-embed-row" data-i="' + i + '"><label>' + it.label + '</label>'
      + '<select class="ta-tier">'
      + '<option value="skip"' + (it.on === 'skip' ? ' selected' : '') + '>Skip</option>'
      + '<option value="lo"' + (it.on === 'lo' ? ' selected' : '') + '>$' + it.lo + '</option>'
      + '<option value="ty"' + (it.on === 'ty' ? ' selected' : '') + '>$' + it.ty + '</option>'
      + '<option value="hi"' + (it.on === 'hi' ? ' selected' : '') + '>$' + it.hi + '</option>'
      + '</select></div>';
  }).join('');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Elopement Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Itemize the day, compare to a $34,200 average wedding</div>'
    + '<div class="ta-embed-card">' + rowsHtml + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var selects = root.querySelectorAll('.ta-tier');
    var pkgOn = selects[ITEMS.findIndex(function (i) { return i.isPkg; })].value !== 'skip';
    var total = 0;
    selects.forEach(function (sel, i) {
      var it = ITEMS[i];
      var row = sel.closest('.ta-embed-row');
      var replaced = pkgOn && it.replaced;
      row.style.opacity = replaced ? '.45' : '1';
      if (sel.value !== 'skip' && !replaced) total += it[sel.value];
    });
    var saved = 34200 - total;
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + total.toLocaleString('en-US') + '</div>'
      + '<div class="ta-embed-sub">Elopement total</div>'
      + '<div class="ta-embed-sub"><strong>$' + Math.round(saved).toLocaleString('en-US') + '</strong> less than the $34,200 average wedding (' + (total / 34200 * 100).toFixed(1) + '% of it)</div>';
  }

  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.elopementCostCalculator = { recalc: calc };
})();
