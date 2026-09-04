/*!
 * ToolAspect LLC vs S Corp Calculator Embed
 * Install: <div id="ta-llc-vs-scorp-calculator"></div>
 *          <script src="https://toolaspect.com/embed/llc-vs-scorp-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-llc-vs-scorp-calculator';
  var BASE = 'https://toolaspect.com/llc-vs-scorp-calculator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-verdict{background:var(--ta-bg);border-radius:8px;padding:10px 14px;font-size:.82rem;color:var(--ta-text);text-align:left;margin-top:12px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-range,.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'llc-vs-scorp-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="llc-vs-scorp-calculator"]')) {
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
    + '<div class="ta-embed-title">LLC vs S Corp Calculator</div>'
    + '<div class="ta-embed-subtitle">Self-employment tax vs payroll tax, 2026 wage base</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Net profit ($/yr)</label><input type="number" class="ta-profit" value="120000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Owner salary ($/yr)</label><input type="number" class="ta-salary" value="60000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Added S corp costs ($/yr)</label><input type="number" class="ta-costs" value="1200" min="0" step="50"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var SS_BASE = 184500;

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  function seTax(p) { var b = Math.max(0, p) * 0.9235; return Math.min(b, SS_BASE) * 0.124 + b * 0.029; }
  function fica(s) { s = Math.max(0, s); return Math.min(s, SS_BASE) * 0.124 + s * 0.029; }

  function calc() {
    var p = num('.ta-profit'), s = num('.ta-salary'), c = num('.ta-costs');
    var se = seTax(p), fp = fica(s), gross = se - fp, net = gross - c;

    var verdict;
    if (p > 0 && s >= p) {
      verdict = 'Salary must be below profit — distributions are what escape payroll tax.';
    } else if (net > 3000) {
      verdict = 'S election wins clearly — about ' + money(net) + '/yr net of costs. Keep a reasonable-compensation memo.';
    } else if (net > 1000) {
      verdict = 'S election ahead by ' + money(net) + '/yr — real but thin; best when profit is stable.';
    } else if (net > 0) {
      verdict = 'Roughly a wash (' + money(net) + '/yr) — most owners keep the simpler default LLC at this level.';
    } else {
      verdict = 'Costs exceed the saving — keep default LLC taxation.';
    }
    if (p > 0 && s < p && s / p < 0.40) {
      verdict += ' Flag: salary under 40% of profit — reasonable-compensation risk.';
    }

    resultEl.innerHTML =
      '<div class="ta-embed-big">' + (s >= p && p > 0 ? '—' : (net >= 0 ? '+' : '') + money(net) + '/yr') + '</div>'
      + '<div class="ta-embed-sub">net saving from the S election, after added costs</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">SE tax (LLC)</div><div class="rv">' + money(se) + '</div></div>'
      + '<div><div class="rl">Payroll tax (S corp)</div><div class="rv">' + money(fp) + '</div></div>'
      + '<div><div class="rl">Gross saving</div><div class="rv">' + money(gross) + '</div></div>'
      + '</div>'
      + '<div class="ta-embed-verdict">' + verdict + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.llcVsScorpCalculator = { recalc: calc };
})();
