/*!
 * ToolAspect Mileage Reimbursement Calculator Embed
 * Install: <div id="ta-mileage-reimbursement-calculator"></div>
 *          <script src="https://toolaspect.com/embed/mileage-reimbursement-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-mileage-reimbursement-calculator';
  var BASE = 'https://toolaspect.com/mileage-reimbursement-calculator/';

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
    + '.ta-embed-breakdown{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;margin-top:12px;font-size:.82rem;color:var(--ta-muted)}'
    + '.ta-embed-breakdown strong{color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'mileage-reimbursement-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="mileage-reimbursement-calculator"]')) {
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
    + '<div class="ta-embed-title">Mileage Reimbursement Calculator</div>'
    + '<div class="ta-embed-subtitle">Miles × IRS standard mileage rate</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Purpose</label><select class="ta-purpose">'
    + '<option value="b" selected>Business</option><option value="m">Medical / moving</option><option value="c">Charitable</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Rate period</label><select class="ta-period">'
    + '<option value="2026H2" selected>2026 (Jul 1 – Dec 31)</option><option value="2026H1">2026 (Jan 1 – Jun 30)</option>'
    + '<option value="2025">2025</option><option value="2024">2024</option><option value="2023">2023</option>'
    + '<option value="2022H2">2022 (Jul–Dec)</option><option value="2022H1">2022 (Jan–Jun)</option>'
    + '<option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Miles driven</label><input type="number" class="ta-miles" value="1200" min="0" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var RATES = {
    '2026H2': { b: 0.76, m: 0.235, c: 0.14, label: '2026 Jul–Dec' },
    '2026H1': { b: 0.725, m: 0.205, c: 0.14, label: '2026 Jan–Jun' },
    '2025': { b: 0.70, m: 0.21, c: 0.14, label: '2025' },
    '2024': { b: 0.67, m: 0.21, c: 0.14, label: '2024' },
    '2023': { b: 0.655, m: 0.22, c: 0.14, label: '2023' },
    '2022H2': { b: 0.625, m: 0.22, c: 0.14, label: '2022 Jul–Dec' },
    '2022H1': { b: 0.585, m: 0.18, c: 0.14, label: '2022 Jan–Jun' },
    '2021': { b: 0.56, m: 0.16, c: 0.14, label: '2021' },
    '2020': { b: 0.575, m: 0.17, c: 0.14, label: '2020' },
    '2019': { b: 0.58, m: 0.20, c: 0.14, label: '2019' }
  };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? el.value : '';
  }
  function num(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function usd(n) {
    return '$' + n.toLocaleString('en-US', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 });
  }
  function cents(r) {
    return (r * 100).toLocaleString('en-US', { maximumFractionDigits: 1 }) + '¢';
  }

  function calc() {
    var purpose = val('.ta-purpose');
    var period = RATES[val('.ta-period')];
    var miles = num('.ta-miles');
    var rate = period ? period[purpose] : 0;
    var total = miles * rate;
    if (miles <= 0 || !rate) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your miles</div>';
      return;
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(Math.round(total * 100) / 100) + '</div>'
      + '<div class="ta-embed-sub">' + miles.toLocaleString('en-US') + ' miles × ' + cents(rate) + '</div>'
      + '<div class="ta-embed-breakdown">'
      + '<span>Rate applied: <strong>' + cents(rate) + '</strong></span>'
      + '<span>Every 100 mi: <strong>' + usd(rate * 100) + '</strong></span>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.mileageReimbursementCalculator = { recalc: calc };
})();
