/*!
 * ToolAspect Estimated Quarterly Tax Calculator Embed
 * Install: <div id="ta-estimated-quarterly-tax-calculator"></div>
 *          <script src="https://toolaspect.com/embed/estimated-quarterly-tax-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-estimated-quarterly-tax-calculator';
  var BASE = 'https://toolaspect.com/estimated-quarterly-tax-calculator/';
  var WAGE_BASE = 184500;
  var BR = {
    single: [[0,.10],[12400,.12],[50400,.22],[105700,.24],[201775,.32],[256225,.35],[640600,.37]],
    joint: [[0,.10],[24800,.12],[100800,.22],[211400,.24],[403550,.32],[512450,.35],[768700,.37]]
  };
  var STD = { single: 16100, joint: 32200 };

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card h4{font-size:.82rem;margin:0 0 10px;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;font-weight:600}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-breakdown{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px;text-align:center}'
    + '.ta-embed-breakdown div{background:var(--ta-bg);border-radius:8px;padding:8px}'
    + '.ta-embed-breakdown .k{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-breakdown .v{font-size:1rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '.ta-embed-legal{text-align:center;font-size:.68rem;color:var(--ta-muted);margin-top:6px;line-height:1.5}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-breakdown{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'estimated-quarterly-tax-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="estimated-quarterly-tax-calculator"]')) {
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
    + '<div class="ta-embed-title">Quarterly Tax Calculator</div>'
    + '<div class="ta-embed-subtitle">Four 2026 payments with the safe harbor that fits</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Net SE profit ($/yr)</label><input type="number" class="ta-profit" value="90000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>W-2 wages ($/yr)</label><input type="number" class="ta-wages" value="0" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Filing status</label><select class="ta-status">'
    + '<option value="single" selected>Single</option><option value="joint">Married joint</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Last year’s tax ($)</label><input type="number" class="ta-prior" value="18000" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Last year’s AGI ($)</label><input type="number" class="ta-agi" value="90000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>W-2 withholding ($/yr)</label><input type="number" class="ta-wh" value="0" min="0" step="100"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-legal">Federal estimate only, not tax advice. Deadlines: Apr 15, Jun 15, Sep 15, Jan 15.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function bracketTax(t, br) {
    var tax = 0;
    for (var i = 0; i < br.length; i++) {
      var lo = br[i][0], hi = (i + 1 < br.length) ? br[i + 1][0] : Infinity;
      if (t > lo) tax += (Math.min(t, hi) - lo) * br[i][1];
    }
    return tax;
  }

  function calc() {
    var net = val('.ta-profit'), wages = val('.ta-wages'), prior = val('.ta-prior'), agiIn = val('.ta-agi'), wh = val('.ta-wh');
    var single = root.querySelector('.ta-status').value === 'single';
    if (net <= 0 && wages <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your expected income</div>';
      return;
    }
    var base = Math.max(0, net) * 0.9235;
    var se = Math.min(base, Math.max(0, WAGE_BASE - Math.max(0, wages))) * 0.124 + base * 0.029
      + Math.max(0, base - ((single ? 200000 : 250000) - Math.max(0, wages))) * 0.009;
    var agi = Math.max(0, wages) + Math.max(0, net) - se / 2;
    var taxable = Math.max(0, agi - STD[single ? 'single' : 'joint']);
    var itax = bracketTax(taxable, BR[single ? 'single' : 'joint']);
    var total = se + itax;
    var need = Math.max(0, total - wh);
    var t90 = need * 0.9 / 4;
    var pct = agiIn > 150000 ? 1.1 : 1.0;
    var tSafe = Math.max(0, prior * pct - wh) / 4;
    var rec = Math.min(t90, tSafe);
    var which = (rec === tSafe && prior > 0) ? pct === 1.1 ? '110%' : '100%' : '90%';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(rec) + '/qtr</div>'
      + '<div class="ta-embed-sub">' + which + ' safe harbor · full-year federal tax ' + usd(total) + '</div>'
      + '<div class="ta-embed-breakdown">'
      + '<div><div class="k">SE tax</div><div class="v">' + usd(se) + '</div></div>'
      + '<div><div class="k">Income tax</div><div class="v">' + usd(itax) + '</div></div>'
      + '<div><div class="k">90% target / qtr</div><div class="v">' + usd(t90) + '</div></div>'
      + '<div><div class="k">Prior-year / qtr</div><div class="v">' + usd(tSafe) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.quarterlyTax = { recalc: calc };
})();
