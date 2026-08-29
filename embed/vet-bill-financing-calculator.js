/*!
 * ToolAspect Vet Bill Financing Calculator Embed
 * Install: <div id="ta-vet-bill-financing-calculator"></div>
 *          <script src="https://toolaspect.com/embed/vet-bill-financing-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-vet-bill-financing-calculator';
  var BASE = 'https://toolaspect.com/vet-bill-financing-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
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
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-big.ok{color:var(--ta-ok)}'
    + '.ta-embed-big.bad{color:var(--ta-bad)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-line{display:flex;justify-content:space-between;font-size:.85rem;color:var(--ta-text);padding:6px 2px;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-line:last-child{border-bottom:none}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'vet-bill-financing-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="vet-bill-financing-calculator"]')) {
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
    + '<div class="ta-embed-title">Vet Bill Financing Calculator</div>'
    + '<div class="ta-embed-subtitle">The deferred-interest math behind 0% vet payment plans</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Vet bill ($)</label><input type="number" class="ta-amt" value="4000" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Promo months</label><select class="ta-promo">'
    + '<option value="6">6</option><option value="12" selected>12</option><option value="18">18</option><option value="24">24</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Card APR</label><select class="ta-apr">'
    + '<option value="32.99" selected>32.99%</option><option value="26.99">26.99%</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two" style="margin-top:10px">'
    + '<div class="ta-embed-form-group"><label>Planned payment ($/mo)</label><input type="number" class="ta-pay" value="250" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>&nbsp;</label><button type="button" class="ta-fill" style="width:100%;padding:10px 12px;border-radius:8px;border:1px solid var(--ta-border);background:var(--ta-bg);color:var(--ta-text);font-family:inherit;font-size:.85rem;cursor:pointer">Use the clearing payment</button></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub"></div>'
    + '<div class="ta-embed-line"><span>Payment that clears the promo</span><strong class="ta-req">—</strong></div>'
    + '<div class="ta-embed-line"><span>Deferred interest if you fall short</span><strong class="ta-int">—</strong></div>'
    + '<div class="ta-embed-line"><span>Balance left at promo end</span><strong class="ta-left">—</strong></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function clearingPayment(amt, mo) { return Math.ceil(amt / mo * 100) / 100; }
  function money2(n) { return '$' + n.toFixed(2); }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var amt = parseFloat(root.querySelector('.ta-amt').value) || 0;
    var mo = parseInt(root.querySelector('.ta-promo').value, 10);
    var apr = parseFloat(root.querySelector('.ta-apr').value);
    var pay = parseFloat(root.querySelector('.ta-pay').value) || 0;
    var req = clearingPayment(amt, mo);
    var r = apr / 100 / 12;
    var bal = amt, accrued = 0, m = 0;
    while (m < mo && bal > 0) { m++; accrued += bal * r; bal = Math.max(0, bal - pay); }
    var big = root.querySelector('.ta-embed-big');
    big.classList.remove('ok', 'bad');
    root.querySelector('.ta-req').textContent = money2(req) + '/mo';
    if (amt <= 0) {
      big.textContent = '—';
      root.querySelector('.ta-embed-sub').textContent = 'Enter your vet bill';
      root.querySelector('.ta-int').textContent = '—';
      root.querySelector('.ta-left').textContent = '—';
      return;
    }
    if (bal <= 0) {
      big.classList.add('ok');
      big.textContent = '$0 — promo cleared';
      root.querySelector('.ta-embed-sub').textContent = 'Paying ' + money2(pay) + '/mo retires the bill in ' + mo + ' months';
      root.querySelector('.ta-int').textContent = '$0';
      root.querySelector('.ta-left').textContent = '$0';
    } else {
      big.classList.add('bad');
      big.textContent = usd(accrued);
      root.querySelector('.ta-embed-sub').textContent = 'Back interest charged in one lump at promo end';
      root.querySelector('.ta-int').textContent = usd(accrued);
      root.querySelector('.ta-left').textContent = usd(bal);
    }
  }

  root.querySelector('.ta-fill').addEventListener('click', function () {
    var amt = parseFloat(root.querySelector('.ta-amt').value) || 0;
    var mo = parseInt(root.querySelector('.ta-promo').value, 10);
    root.querySelector('.ta-pay').value = clearingPayment(amt, mo).toFixed(2);
    calc();
  });
  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.vetBillFinancingCalculator = { recalc: calc };
})();
