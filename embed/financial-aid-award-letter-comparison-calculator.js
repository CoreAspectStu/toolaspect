/*!
 * ToolAspect Financial Aid Award Letter Comparison Embed
 * Install: <div id="ta-financial-aid-award-letter-comparison-calculator"></div>
 *          <script src="https://toolaspect.com/embed/financial-aid-award-letter-comparison-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-financial-aid-award-letter-comparison-calculator';
  var BASE = 'https://toolaspect.com/financial-aid-award-letter-comparison-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#6366f1;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#818cf8}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.75rem;color:var(--ta-muted);margin-bottom:4px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:9px 11px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-school{font-size:.85rem;font-weight:700;margin:4px 0 10px;color:var(--ta-accent)}'
    + '.ta-embed-compare{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-side{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:10px;padding:12px;text-align:center}'
    + '.ta-embed-side .side-label{font-size:.75rem;color:var(--ta-muted);font-weight:600;letter-spacing:.03em}'
    + '.ta-embed-side .side-pay{font-size:1.4rem;font-weight:700;color:var(--ta-accent);margin-top:2px}'
    + '.ta-embed-side .side-sub{font-size:.78rem;color:var(--ta-muted);margin-top:2px}'
    + '.ta-embed-result{text-align:center;padding:16px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.8rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'financial-aid-award-letter-comparison-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="financial-aid-award-letter-comparison-calculator"]')) {
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
    if (window.console) console.warn('ToolAspect embed: no container #' + TARGET_ID + ' found.');
    return;
  }

  function schoolBlock(n, coa, grants) {
    return '<div class="ta-embed-school">School ' + n + '</div>'
      + '<div class="ta-embed-form-row">'
      + '<div class="ta-embed-form-group"><label>COA ($/yr)</label><input type="number" id="tafac-coa' + n + '" value="' + coa + '" min="0" step="100"></div>'
      + '<div class="ta-embed-form-group"><label>Grants ($/yr)</label><input type="number" id="tafac-grants' + n + '" value="' + grants + '" min="0" step="100"></div>'
      + '<div class="ta-embed-form-group"><label>Loans ($/yr)</label><input type="number" id="tafac-loans' + n + '" value="6500" min="0" step="100"></div>'
      + '</div>';
  }

  var html = ''
    + '<div class="ta-embed-root">'
    + '<div class="ta-embed-title">Financial Aid Comparison</div>'
    + '<div class="ta-embed-subtitle">Net price beats sticker price — compare two award letters</div>'
    + '<div class="ta-embed-card">'
    + schoolBlock('A', 25350, 9000)
    + schoolBlock('B', 46100, 14000)
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-compare">'
    + '<div class="ta-embed-side"><div class="side-label">SCHOOL A NET PRICE</div><div class="side-pay" id="tafac-npA">&mdash;</div><div class="side-sub" id="tafac-gapA">&nbsp;</div></div>'
    + '<div class="ta-embed-side"><div class="side-label">SCHOOL B NET PRICE</div><div class="side-pay" id="tafac-npB">&mdash;</div><div class="side-sub" id="tafac-gapB">&nbsp;</div></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tafac-win">&mdash;</div>'
    + '<div class="ta-embed-sub" id="tafac-winsub">lower net price per year</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tafac-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function calc() {
    var rows = ['A', 'B'].map(function (n) {
      var coa = parseFloat(g('coa' + n).value) || 0;
      var grants = parseFloat(g('grants' + n).value) || 0;
      var loans = parseFloat(g('loans' + n).value) || 0;
      var np = coa - grants;
      g('np' + n).textContent = money(np);
      g('gap' + n).textContent = money(np - loans) + ' before loans';
      return { n: n, np: np, coa: coa };
    });
    if (rows[0].coa <= 0 || rows[1].coa <= 0) { g('win').textContent = '—'; return; }
    var win = rows[0].np <= rows[1].np ? 'A' : 'B';
    var lose = win === 'A' ? 'B' : 'A';
    var diff = Math.abs(rows[0].np - rows[1].np);
    g('win').textContent = 'School ' + win + ' wins by ' + money(diff) + '/yr';
    g('winsub').textContent = 'School ' + win + ' net price ' + money(win === 'A' ? rows[0].np : rows[1].np) + ' vs School ' + lose + ' ' + money(lose === 'A' ? rows[0].np : rows[1].np);
  }

  ['coaA', 'grantsA', 'loansA', 'coaB', 'grantsB', 'loansB'].forEach(function (id) {
    g(id).addEventListener('input', calc);
  });
  calc();
})();
