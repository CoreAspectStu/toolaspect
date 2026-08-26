/*!
 * ToolAspect Self-Employment Tax Calculator Embed
 * Install: <div id="ta-self-employment-tax-calculator"></div>
 *          <script src="https://toolaspect.com/embed/self-employment-tax-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-self-employment-tax-calculator';
  var BASE = 'https://toolaspect.com/self-employment-tax-calculator/';
  var WAGE_BASE = 184500;

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
  styleEl.setAttribute('data-ta-embed', 'self-employment-tax-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="self-employment-tax-calculator"]')) {
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
    + '<div class="ta-embed-title">Self-Employment Tax Calculator</div>'
    + '<div class="ta-embed-subtitle">Schedule SE tax: 12.4% + 2.9% + 0.9%, and your deductible half</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Net SE profit ($/yr)</label><input type="number" class="ta-profit" value="90000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>W-2 wages ($/yr)</label><input type="number" class="ta-wages" value="0" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Filing status</label><select class="ta-status">'
    + '<option value="single" selected>Single</option><option value="joint">Married joint</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-legal">Estimate only, not tax advice. 2026 Social Security wage base $184,500.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var net = val('.ta-profit'), wages = val('.ta-wages');
    var single = root.querySelector('.ta-status').value === 'single';
    if (net <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your net self-employment profit</div>';
      return;
    }
    var base = net * 0.9235;
    var ss = Math.min(base, Math.max(0, WAGE_BASE - Math.max(0, wages))) * 0.124;
    var medi = base * 0.029;
    var thr = (single ? 200000 : 250000) - Math.max(0, wages);
    var addl = Math.max(0, base - thr) * 0.009;
    var total = ss + medi + addl;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(total) + '</div>'
      + '<div class="ta-embed-sub">self-employment tax · effective ' + (total / net * 100).toFixed(2) + '% of profit</div>'
      + '<div class="ta-embed-breakdown">'
      + '<div><div class="k">Net earnings (92.35%)</div><div class="v">' + usd(base) + '</div></div>'
      + '<div><div class="k">Social Security 12.4%</div><div class="v">' + usd(ss) + '</div></div>'
      + '<div><div class="k">Medicare 2.9%</div><div class="v">' + usd(medi) + '</div></div>'
      + '<div><div class="k">Deductible half</div><div class="v">' + usd(total / 2) + '</div></div>'
      + '</div>'
      + (addl > 0 ? '<div class="ta-embed-sub">includes ' + usd(addl) + ' additional Medicare tax (0.9%)</div>' : '');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.selfEmploymentTax = { recalc: calc };
})();
