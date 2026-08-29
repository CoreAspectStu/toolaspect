/*!
 * ToolAspect Marriage Tax Penalty Calculator Embed
 * Install: <div id="ta-marriage-tax-penalty-calculator"></div>
 *          <script src="https://toolaspect.com/embed/marriage-tax-penalty-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-marriage-tax-penalty-calculator';
  var BASE = 'https://toolaspect.com/marriage-tax-penalty-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-good:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-good:#4ade80;--ta-bad:#f87171}'
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
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:flex;justify-content:center;gap:26px;margin-top:12px;flex-wrap:wrap}'
    + '.ta-embed-range div{font-size:.82rem;color:var(--ta-muted)}'
    + '.ta-embed-range strong{display:block;font-size:1.05rem;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-range{gap:14px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'marriage-tax-penalty-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="marriage-tax-penalty-calculator"]')) {
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
    + '<div class="ta-embed-title">Marriage Tax Penalty Calculator</div>'
    + '<div class="ta-embed-subtitle">MFJ vs MFS vs two singles, 2026 brackets</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Your income ($/yr)</label><input type="number" class="ta-i1" value="120000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Spouse income ($/yr)</label><input type="number" class="ta-i2" value="45000" min="0" step="1000"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var RATES = [.10, .12, .22, .24, .32, .35, .37];
  var BR = {
    S: { std: 16100, c: [12400, 50400, 105700, 201775, 256225, 640600] },
    MFJ: { std: 32200, c: [24800, 100800, 211400, 403550, 512450, 768700] },
    MFS: { std: 16100, c: [12400, 50400, 105700, 201775, 256225, 384350] }
  };
  function tax(ti, br) {
    if (ti <= 0) return 0;
    var t = 0, prev = 0;
    for (var i = 0; i < br.c.length; i++) {
      var span = Math.min(ti, br.c[i]) - prev;
      if (span > 0) t += span * RATES[i];
      prev = br.c[i];
    }
    if (ti > br.c[br.c.length - 1]) t += (ti - br.c[br.c.length - 1]) * RATES[RATES.length - 1];
    return t;
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function calc() {
    var i1 = val('.ta-i1'), i2 = val('.ta-i2');
    var mfj = tax(i1 + i2 - BR.MFJ.std, BR.MFJ);
    var mfs = tax(i1 - BR.MFS.std, BR.MFS) + tax(i2 - BR.MFS.std, BR.MFS);
    var singles = tax(i1 - BR.S.std, BR.S) + tax(i2 - BR.S.std, BR.S);
    var d = mfj - singles;
    var big = root.querySelector('.ta-embed-big');
    big.style.color = d > 0 ? 'var(--ta-bad)' : 'var(--ta-good)';
    big.textContent = (d > 0 ? '+' : '−') + usd(Math.abs(d));
    root.querySelector('.ta-embed-result').innerHTML =
      '<div class="ta-embed-big">' + big.textContent + '</div>'
      + '<div class="ta-embed-sub">' + (d > 0 ? 'marriage penalty' : 'marriage bonus') + ' vs two singles (' + usd(Math.abs(d) / 12) + '/mo)</div>'
      + '<div class="ta-embed-range">'
      + '<div>Jointly<strong>' + usd(mfj) + '</strong></div>'
      + '<div>Separately<strong>' + usd(mfs) + '</strong></div>'
      + '<div>Two singles<strong>' + usd(singles) + '</strong></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.marriageTaxPenaltyCalculator = { recalc: calc };
})();
