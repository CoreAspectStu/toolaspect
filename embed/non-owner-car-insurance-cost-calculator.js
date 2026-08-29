/*!
 * ToolAspect Non-Owner Car Insurance Cost Calculator Embed
 * Install: <div id="ta-non-owner-car-insurance-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/non-owner-car-insurance-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-non-owner-car-insurance-cost-calculator';
  var BASE = 'https://toolaspect.com/non-owner-car-insurance-cost-calculator/';

  var STATES = [
    ['Alabama', 469], ['Alaska', 296], ['Arizona', 652], ['Arkansas', 440],
    ['California', 500], ['Colorado', 506], ['Connecticut', 1054], ['Delaware', 936],
    ['Washington, D.C.', 661], ['Florida', 668], ['Georgia', 510], ['Hawaii', 389],
    ['Idaho', 297], ['Illinois', 518], ['Indiana', 320], ['Iowa', 280],
    ['Kansas', 408], ['Kentucky', 499], ['Louisiana', 410], ['Maine', 271],
    ['Maryland', 516], ['Massachusetts', 686], ['Michigan', 855], ['Minnesota', 352],
    ['Mississippi', 474], ['Missouri', 346], ['Montana', 412], ['Nebraska', 402],
    ['Nevada', 823], ['New Hampshire', 437], ['New Jersey', 1141], ['New Mexico', 413],
    ['New York', 606], ['North Carolina', 681], ['North Dakota', 353], ['Ohio', 291],
    ['Oklahoma', 477], ['Oregon', 644], ['Pennsylvania', 279], ['Rhode Island', 511],
    ['South Carolina', 448], ['South Dakota', 216], ['Tennessee', 507], ['Texas', 564],
    ['Utah', 658], ['Vermont', 460], ['Virginia', 549], ['Washington', 516],
    ['West Virginia', 442], ['Wisconsin', 398], ['Wyoming', 270]
  ];
  var AGES = [[16, 1660], [19, 884], [22, 645], [25, 551], [30, 508], [40, 486], [50, 466], [65, 477], [75, 556]];
  var NATL = 486;

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'non-owner-car-insurance-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="non-owner-car-insurance-cost-calculator"]')) {
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

  var stateOpts = STATES.map(function (s, i) {
    return '<option value="' + i + '"' + (s[0] === 'Ohio' ? ' selected' : '') + '>' + s[0] + ' ($' + s[1] + ')</option>';
  }).join('');
  var ageOpts = AGES.map(function (a) {
    return '<option value="' + a[1] + '"' + (a[0] === 30 ? ' selected' : '') + '>' + a[0] + '</option>';
  }).join('');

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Non-Owner Car Insurance Cost</div>'
    + '<div class="ta-embed-subtitle">Liability-only policy estimate from state averages</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state">' + stateOpts + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Age</label><select class="ta-age">' + ageOpts + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var st = STATES[parseInt(root.querySelector('.ta-state').value, 10)];
    var agePrem = parseFloat(root.querySelector('.ta-age').value) || NATL;
    var est = st[1] * (agePrem / NATL);
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(est).toLocaleString('en-US') + '/yr</div>'
      + '<div class="ta-embed-sub">$' + (est / 12).toFixed(2) + ' per month</div>'
      + '<div class="ta-embed-sub">' + st[0] + ' average $' + st[1] + '/yr adjusted for age. National average: $486/yr.</div>'
      + '<div class="ta-embed-sub">Estimate only; liability-only, excludes damage to the car you drive.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.nonOwnerCarInsuranceCostCalculator = { recalc: calc };
})();
