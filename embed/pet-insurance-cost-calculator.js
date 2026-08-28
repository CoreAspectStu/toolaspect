/*!
 * ToolAspect Pet Insurance Cost Calculator Embed
 * Install: <div id="ta-pet-insurance-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/pet-insurance-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pet-insurance-cost-calculator';
  var BASE = 'https://toolaspect.com/pet-insurance-cost-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pet-insurance-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pet-insurance-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Pet Insurance Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Monthly premium estimate from breed, age, and state</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Species</label><select class="ta-species">'
    + '<option value="dog" selected>Dog</option><option value="cat">Cat</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Age</label><select class="ta-age"></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Breed</label><select class="ta-breed"></select></div>'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state"></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var BASE_RATE = { dog: 56, cat: 32 };
  var BREEDS = {
    dog: [['Mixed breed', 0.90], ['Small / toy', 0.95], ['Sporting (Lab, Golden)', 1.00], ['Working (Shepherd, Husky)', 1.10], ['Giant breed', 1.15], ['Bulldog / brachy', 1.45]],
    cat: [['Domestic shorthair', 1.00], ['Purebred (Siamese)', 1.10], ['Large (Maine Coon)', 1.20], ['Brachy (Persian)', 1.35]]
  };
  var AGES = {
    dog: [['Under 3', 0.95], ['3-5', 1.00], ['6-8', 1.20], ['9-10', 1.40], ['11+', 1.60]],
    cat: [['Under 3', 0.95], ['3-5', 1.00], ['6-8', 1.15], ['9-11', 1.35], ['12+', 1.55]]
  };
  var STATES = [['Alabama', 0.89], ['Alaska', 1.10], ['Arizona', 1.04], ['Arkansas', 0.90], ['California', 1.18], ['Colorado', 1.06], ['Connecticut', 1.12], ['Delaware', 1.02], ['District of Columbia', 1.14], ['Florida', 1.05], ['Georgia', 0.93], ['Hawaii', 1.12], ['Idaho', 0.94], ['Illinois', 1.02], ['Indiana', 0.92], ['Iowa', 0.93], ['Kansas', 0.91], ['Kentucky', 0.91], ['Louisiana', 0.92], ['Maine', 1.02], ['Maryland', 1.05], ['Massachusetts', 1.12], ['Michigan', 0.96], ['Minnesota', 0.99], ['Mississippi', 0.88], ['Missouri', 0.91], ['Montana', 0.95], ['Nebraska', 0.92], ['Nevada', 1.03], ['New Hampshire', 1.04], ['New Jersey', 1.12], ['New Mexico', 0.94], ['New York', 1.16], ['North Carolina', 0.94], ['North Dakota', 0.92], ['Ohio', 0.95], ['Oklahoma', 0.90], ['Oregon', 1.06], ['Pennsylvania', 1.00], ['Rhode Island', 1.08], ['South Carolina', 0.93], ['South Dakota', 0.91], ['Tennessee', 0.90], ['Texas', 0.92], ['Utah', 0.97], ['Vermont', 1.03], ['Virginia', 0.99], ['Washington', 1.10], ['West Virginia', 0.89], ['Wisconsin', 0.96], ['Wyoming', 0.95]];

  function fillSelect(sel, items) {
    sel.innerHTML = '';
    items.forEach(function (it) {
      var o = document.createElement('option');
      o.value = it[1];
      o.textContent = it[0];
      sel.appendChild(o);
    });
  }
  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function rebuild() {
    var sp = root.querySelector('.ta-species').value;
    fillSelect(root.querySelector('.ta-breed'), BREEDS[sp]);
    fillSelect(root.querySelector('.ta-age'), AGES[sp]);
    root.querySelector('.ta-breed').selectedIndex = sp === 'dog' ? 1 : 0;
    root.querySelector('.ta-age').selectedIndex = 1;
    calc();
  }

  function calc() {
    var sp = root.querySelector('.ta-species').value;
    var mo = BASE_RATE[sp] * num('.ta-breed') * num('.ta-age') * num('.ta-state');
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(mo) + '/mo</div>'
      + '<div class="ta-embed-sub">' + money(mo * 12) + ' per year · accident &amp; illness coverage</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Typical range</div><div class="rv">' + money(mo * 0.8) + ' – ' + money(mo * 1.2) + '</div></div>'
      + '<div><div class="rl">Accident-only</div><div class="rv">' + (sp === 'dog' ? '$16 – $20' : '$11 – $13') + '</div></div>'
      + '</div>';
  }

  fillSelect(root.querySelector('.ta-state'), STATES);
  root.querySelector('.ta-state').selectedIndex = STATES.findIndex(function (s) { return s[0] === 'Texas'; });
  rebuild();
  root.addEventListener('change', calc);
  root.querySelector('.ta-species').addEventListener('change', rebuild);

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.petInsuranceCostCalculator = { recalc: calc };
})();
