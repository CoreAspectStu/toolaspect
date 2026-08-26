/*!
 * ToolAspect Calorie Deficit Calculator Embed
 * Install: <div id="ta-calorie-deficit-calculator"></div>
 *          <script src="https://toolaspect.com/embed/calorie-deficit-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-calorie-deficit-calculator';
  var BASE = 'https://toolaspect.com/calorie-deficit-calculator/';

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
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-breakdown{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px;text-align:center}'
    + '.ta-embed-breakdown div{background:var(--ta-bg);border-radius:8px;padding:8px}'
    + '.ta-embed-breakdown .k{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-breakdown .v{font-size:1rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '.ta-embed-warn{color:#dc2626;font-size:.8rem;margin-top:10px}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'calorie-deficit-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="calorie-deficit-calculator"]')) {
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
    + '<div class="ta-embed-title">Calorie Deficit Calculator</div>'
    + '<div class="ta-embed-subtitle">Daily target from your TDEE and goal rate of loss</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Sex</label><select class="ta-gender"><option value="male" selected>Male</option><option value="female">Female</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Age</label><input type="number" class="ta-age" value="35" min="15" max="100" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Weight (lb)</label><input type="number" class="ta-w" value="180" min="70" max="600" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Height (in)</label><input type="number" class="ta-h" value="70" min="48" max="90" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Activity</label><select class="ta-act">'
    + '<option value="1.2">Sedentary</option><option value="1.375">Light</option><option value="1.55" selected>Moderate</option>'
    + '<option value="1.725">Very active</option><option value="1.9">Extra active</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Rate of loss</label><select class="ta-rate">'
    + '<option value="0.5">0.5 lb/wk</option><option value="1" selected>1 lb/wk</option><option value="1.5">1.5 lb/wk</option><option value="2">2 lb/wk</option></select></div>'
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

  function calc() {
    var male = root.querySelector('.ta-gender').value === 'male';
    var age = val('.ta-age'), lb = val('.ta-w'), inch = val('.ta-h');
    var act = val('.ta-act'), rate = val('.ta-rate');
    if (lb <= 0 || age <= 0 || inch <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your stats</div>';
      return;
    }
    var kg = lb * 0.453592, cm = inch * 2.54;
    var bmr = male ? (10 * kg + 6.25 * cm - 5 * age + 5) : (10 * kg + 6.25 * cm - 5 * age - 161);
    var tdee = bmr * act;
    var deficit = rate * 3500 / 7;
    var floor = male ? 1500 : 1200;
    var target2 = Math.max(floor, tdee - deficit);
    var realDeficit = tdee - target2;
    var warn = '';
    if (tdee - deficit < floor) {
      warn = '<div class="ta-embed-warn">Deficit held at the ' + floor + '-cal NIH floor; expect ~' + (realDeficit * 7 / 3500).toFixed(1) + ' lb/wk.</div>';
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + Math.round(target2).toLocaleString('en-US') + ' cal/day</div>'
      + '<div class="ta-embed-sub">TDEE ' + Math.round(tdee).toLocaleString('en-US') + ' − deficit ' + Math.round(realDeficit).toLocaleString('en-US') + ' · ~' + (realDeficit * 7 / 3500).toFixed(1) + ' lb/wk</div>'
      + '<div class="ta-embed-breakdown">'
      + '<div><div class="k">BMR</div><div class="v">' + Math.round(bmr).toLocaleString('en-US') + '</div></div>'
      + '<div><div class="k">Maintenance</div><div class="v">' + Math.round(tdee).toLocaleString('en-US') + '</div></div>'
      + '</div>' + warn;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.calorieDeficit = { recalc: calc };
})();
