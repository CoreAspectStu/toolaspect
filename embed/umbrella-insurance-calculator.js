/*!
 * ToolAspect Umbrella Insurance Calculator Embed
 * Install: <div id="ta-umbrella-insurance-calculator"></div>
 *          <script src="https://toolaspect.com/embed/umbrella-insurance-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-umbrella-insurance-calculator';
  var BASE = 'https://toolaspect.com/umbrella-insurance-calculator/';

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
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-group input[type="checkbox"]{width:auto}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-check{display:flex;align-items:center;font-size:.85rem;color:var(--ta-text);cursor:pointer}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'umbrella-insurance-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="umbrella-insurance-calculator"]')) {
    (document.head || document.documentElement).appendChild(styleEl);
  }

  function findTarget() {
    var el = document.getElementById(TARGET_ID);
    if (el) return el;
    // fallback: div immediately preceding this script
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
    + '<div class="ta-embed-title">Umbrella Insurance Calculator</div>'
    + '<div class="ta-embed-subtitle">Recommended coverage and typical annual premium</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Home equity ($)</label><input type="number" class="ta-equity" value="150000" min="0" step="5000"></div>'
    + '<div class="ta-embed-form-group"><label>Savings &amp; investments ($)</label><input type="number" class="ta-savings" value="100000" min="0" step="5000"></div>'
    + '<div class="ta-embed-form-group"><label>Annual income ($)</label><input type="number" class="ta-income" value="90000" min="0" step="1000"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label class="ta-embed-check"><input type="checkbox" class="ta-future" checked style="margin-right:6px"> Include future income protection (5 &times; income)</label></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function fmt(n) {
    return '$' + Math.abs(Math.round(n)).toLocaleString('en-US');
  }

  function calc() {
    var equity = val('.ta-equity');
    var savings = val('.ta-savings');
    var income = val('.ta-income');
    var futureEl = root.querySelector('.ta-future');
    var future = futureEl ? futureEl.checked : false;

    var exposed = equity + savings + (future ? income * 5 : 0);
    var units = Math.max(1, Math.ceil(exposed / 1000000));
    var capped = units > 10;
    if (capped) units = 10;

    var mid = 240;
    for (var i = 2; i <= units; i++) mid += (i <= 5 ? 85 : 55);
    var low = mid * 0.65;
    var high = mid * 1.35;

    resultEl.innerHTML =
      '<div class="ta-embed-big">' + fmt(units * 1000000) + '</div>'
      + '<div class="ta-embed-sub">Recommended umbrella coverage</div>'
      + '<div class="ta-embed-sub">Assets a judgment could reach: <strong>' + fmt(exposed) + '</strong></div>'
      + '<div class="ta-embed-sub">Typically <strong>' + fmt(low) + ' &ndash; ' + fmt(high) + '</strong> a year (~' + fmt(mid / 12) + '/mo, 2025 averages)</div>'
      + (capped ? '<div class="ta-embed-sub">Exposure tops $10M, the practical ceiling for personal umbrellas; ask a carrier about excess liability.</div>' : '');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', function (e) {
    if (e.target.classList.contains('ta-future')) calc();
  });

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.umbrellaInsuranceCalculator = { recalc: calc };
})();
