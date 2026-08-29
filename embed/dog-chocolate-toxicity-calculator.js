/*!
 * ToolAspect Dog Chocolate Toxicity Calculator Embed
 * Install: <div id="ta-dog-chocolate-toxicity-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-chocolate-toxicity-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-chocolate-toxicity-calculator';
  var BASE = 'https://toolaspect.com/dog-chocolate-toxicity-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-warn:#ca8a04;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-warn:#facc15;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1.4fr 1fr 1.4fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:20px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-verdict{border-radius:8px;padding:10px;margin-top:12px;font-size:.88rem;font-weight:600}'
    + '.ta-embed-verdict.ok{background:rgba(22,163,74,.1);color:var(--ta-ok)}'
    + '.ta-embed-verdict.warn{background:rgba(202,138,4,.12);color:var(--ta-warn)}'
    + '.ta-embed-verdict.bad{background:rgba(220,38,38,.12);color:var(--ta-bad)}'
    + '.ta-embed-hotline{font-size:.75rem;color:var(--ta-muted);margin-top:10px;line-height:1.6}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-chocolate-toxicity-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-chocolate-toxicity-calculator"]')) {
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
    + '<div class="ta-embed-title">Dog Chocolate Toxicity Calculator</div>'
    + '<div class="ta-embed-subtitle">Theobromine mg/kg against veterinary severity thresholds</div>'
    + '<div class="ta-embed-card"><div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Dog weight</label><input type="number" class="ta-w" value="50" min="0.5" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Unit</label><select class="ta-wu"><option value="lb">lb</option><option value="kg">kg</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Chocolate</label><select class="ta-c">'
    + '<option value="milk">Milk</option><option value="semisweet">Semisweet/dark</option>'
    + '<option value="baking">Baking</option><option value="cocoa">Cocoa powder</option><option value="white">White</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Amount (oz)</label><input type="number" class="ta-a" value="4" min="0" step="0.25"></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var CHOC = {
    milk: { name: 'milk chocolate', r: [44, 51, 58] },
    semisweet: { name: 'semisweet/dark', r: [135, 148, 160] },
    baking: { name: 'unsweetened baking', r: [390, 420, 450] },
    cocoa: { name: 'cocoa powder', r: [400, 570, 737] },
    white: { name: 'white chocolate', r: [0.09, 0.25, 0.35] }
  };
  var LB_PER_KG = 2.20462;

  function val(sel) { var el = root.querySelector(sel); return el ? parseFloat(el.value) : 0; }

  function calc() {
    var w = val('.ta-w'), wu = root.querySelector('.ta-wu').value;
    var c = CHOC[root.querySelector('.ta-c').value];
    var oz = val('.ta-a');
    var kg = wu === 'kg' ? w : w / LB_PER_KG;
    if (!(w > 0) || !(oz > 0)) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter weight and amount eaten</div>';
      return;
    }
    var dLo = oz * c.r[0] / kg, dHi = oz * c.r[2] / kg, dTy = oz * c.r[1] / kg;
    var verdict, cls;
    if (dTy < 20) { verdict = 'Below the 20 mg/kg threshold — GI upset possible, serious toxicity unlikely'; cls = 'ok'; }
    else if (dTy < 40) { verdict = 'Moderate (20–40 mg/kg) — vomiting and restlessness likely. Call your vet.'; cls = 'warn'; }
    else if (dTy < 60) { verdict = 'Severe (40–60 mg/kg) — tremors and cardiac signs possible. Call a vet now.'; cls = 'bad'; }
    else { verdict = 'Above 60 mg/kg — potentially lethal territory. Emergency vet now.'; cls = 'bad'; }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + dLo.toFixed(1) + '–' + dHi.toFixed(1) + ' mg/kg</div>'
      + '<div class="ta-embed-sub">' + c.name + ', ' + oz + ' oz, ' + kg.toFixed(1) + ' kg dog</div>'
      + '<div class="ta-embed-verdict ' + cls + '">' + verdict + '</div>'
      + '<div class="ta-embed-hotline">Poison control: ASPCA (888) 426-4435 · Pet Poison Helpline (855) 764-7661 (fees apply). Estimate only, not veterinary advice.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogChocolateToxicityCalculator = { recalc: calc };
})();
