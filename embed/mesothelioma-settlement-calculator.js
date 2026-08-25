/*!
 * ToolAspect Mesothelioma Settlement Calculator Embed
 * Install: <div id="ta-mesothelioma-settlement-calculator"></div>
 *          <script src="https://toolaspect.com/embed/mesothelioma-settlement-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-mesothelioma-settlement-calculator';
  var BASE = 'https://toolaspect.com/mesothelioma-settlement-calculator/';

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
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-note{color:var(--ta-muted);font-size:.75rem;margin-top:10px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'mesothelioma-settlement-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="mesothelioma-settlement-calculator"]')) {
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
    + '<div class="ta-embed-title">Mesothelioma Settlement Calculator</div>'
    + '<div class="ta-embed-subtitle">Published ranges for claims like this</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Age at diagnosis</label><input type="number" class="ta-age" value="68" min="18" max="100" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Annual income ($)</label><input type="number" class="ta-income" value="60000" min="0" step="5000"></div>'
    + '<div class="ta-embed-form-group"><label>Planned retirement age</label><input type="number" class="ta-retire" value="67" min="50" max="80" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Medical costs, so far + projected ($)</label><input type="number" class="ta-medical" value="400000" min="0" step="25000"></div>'
    + '<div class="ta-embed-form-group"><label>Trusts you may qualify for</label><input type="number" class="ta-trusts" value="8" min="1" max="20" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Military veteran</label><select class="ta-vet"><option value="no" selected>No</option><option value="yes">Yes</option></select></div>'
    + '</div>'
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
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calc() {
    var age = val('.ta-age');
    var income = val('.ta-income');
    var retire = val('.ta-retire');
    var medical = val('.ta-medical');
    var trusts = Math.min(Math.max(Math.round(val('.ta-trusts')) || 1, 1), 20);
    var vetEl = root.querySelector('.ta-vet');
    var vet = vetEl ? vetEl.value === 'yes' : false;

    var lost = Math.max(0, retire - age) * income;
    var economic = lost + medical;
    var trustLow = trusts * 10000;
    var trustHigh = trusts * 50000;

    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + fmt(trustLow) + ' – ' + fmt(1400000) + '</div>'
      + '<div class="ta-embed-sub">Documented economic losses: <strong>' + fmt(economic) + '</strong></div>'
      + '<div class="ta-embed-sub">Typical combined trust range: <strong>' + fmt(trustLow) + ' – ' + fmt(trustHigh) + '</strong></div>'
      + '<div class="ta-embed-sub">Published settlement average: <strong>$1,000,000 – $1,400,000</strong> (Mealey’s)</div>'
      + (vet ? '<div class="ta-embed-sub">VA disability at a 100% rating (2026): <strong>$3,938.58/mo</strong></div>' : '')
      + '<div class="ta-embed-note">Routes stack: trust claims + a lawsuit + VA benefits are not mutually exclusive. Education only, not legal advice.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.mesotheliomaSettlementCalculator = { recalc: calc };
})();
