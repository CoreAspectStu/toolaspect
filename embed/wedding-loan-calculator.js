/*!
 * ToolAspect Wedding Loan Calculator Embed
 * Install: <div id="ta-wedding-loan-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-loan-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-loan-calculator';
  var BASE = 'https://toolaspect.com/wedding-loan-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}'
    + '@media(max-width:520px){.ta-embed-grid{grid-template-columns:1fr 1fr}}'
    + '.ta-embed-field{display:flex;flex-direction:column;gap:4px}'
    + '.ta-embed-field label{font-size:.76rem;color:var(--ta-muted);font-weight:600}'
    + '.ta-embed-field input{width:100%;padding:8px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;'
    + 'color:var(--ta-text);font-size:.9rem;outline:none;font-family:inherit}'
    + '.ta-embed-field input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '@media(max-width:520px){.ta-embed-row{grid-template-columns:1fr 1fr}}'
    + '.ta-embed-box{background:var(--ta-bg);border-radius:10px;padding:12px;text-align:center}'
    + '.ta-embed-box .l{font-size:.74rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-box .v{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-verdict{margin-top:12px;background:var(--ta-bg);border-radius:10px;padding:12px;text-align:center;font-size:.88rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-loan-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-loan-calculator"]')) {
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

  function field(id, label, val, step) {
    return '<div class="ta-embed-field"><label>' + label + '</label>'
      + '<input type="number" id="' + id + '" value="' + val + '" min="0" step="' + step + '"></div>';
  }

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Wedding Loan Calculator</div>'
    + '<div class="ta-embed-subtitle">What borrowing for the big day really costs</div>'
    + '<div class="ta-embed-card"><div class="ta-embed-grid">'
    + field('ta-wl-amount', 'Loan amount ($)', 20000, 500)
    + field('ta-wl-apr', 'APR (%)', 13.99, 0.1)
    + field('ta-wl-term', 'Term (months)', 36, 6)
    + '</div></div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="ta-wl-hero">—</div><div class="ta-embed-sub" id="ta-wl-herosub"></div>'
    + '<div class="ta-embed-row">'
    + '<div class="ta-embed-box"><div class="l">Total interest</div><div class="v" id="ta-wl-int">—</div></div>'
    + '<div class="ta-embed-box"><div class="l">Total repaid</div><div class="v" id="ta-wl-tot">—</div></div>'
    + '<div class="ta-embed-box"><div class="l">Save-first months</div><div class="v" id="ta-wl-save">—</div></div>'
    + '</div><div class="ta-embed-verdict" id="ta-wl-verdict"></div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function fmt(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  function pmt(P, annualPct, months) {
    var r = annualPct / 100 / 12;
    if (months <= 0 || P <= 0) return 0;
    if (r === 0) return P / months;
    return P * r / (1 - Math.pow(1 + r, -months));
  }
  function gv(id) { var v = parseFloat(root.querySelector('#' + id).value); return isNaN(v) ? 0 : v; }

  function calc() {
    var P = Math.max(0, gv('ta-wl-amount')), apr = Math.max(0, gv('ta-wl-apr'));
    var n = Math.max(1, Math.round(gv('ta-wl-term') || 36));
    if (P <= 0) {
      root.querySelector('#ta-wl-hero').textContent = 'No loan';
      root.querySelector('#ta-wl-herosub').textContent = 'Enter a loan amount';
      root.querySelector('#ta-wl-int').textContent = '—';
      root.querySelector('#ta-wl-tot').textContent = '—';
      root.querySelector('#ta-wl-save').textContent = '—';
      root.querySelector('#ta-wl-verdict').textContent = '';
      return;
    }
    var pay = pmt(P, apr, n), tot = pay * n, int = tot - P;
    root.querySelector('#ta-wl-hero').textContent = fmt(pay) + '/mo';
    root.querySelector('#ta-wl-herosub').textContent = fmt(P) + ' at ' + apr + '% APR for ' + n + ' months';
    root.querySelector('#ta-wl-int').textContent = fmt(int);
    root.querySelector('#ta-wl-tot').textContent = fmt(tot);
    root.querySelector('#ta-wl-save').textContent = Math.ceil(P / pay) + ' mo';
    root.querySelector('#ta-wl-verdict').textContent = 'Borrowing adds ' + fmt(int) + ' (' + (int / P * 100).toFixed(1) + '%). Saving ' + fmt(pay) + '/mo first reaches the same sum in ~' + Math.ceil(P / pay) + ' months, interest-free.';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingLoanCalculator = { recalc: calc };
})();
