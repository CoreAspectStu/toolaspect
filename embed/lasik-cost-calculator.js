/*!
 * ToolAspect LASIK Cost Calculator Embed
 * Install: <div id="ta-lasik-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/lasik-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-lasik-cost-calculator';
  var BASE = 'https://toolaspect.com/lasik-cost-calculator/';

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'lasik-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="lasik-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">LASIK Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Per eye and both eyes, by technology and provider type</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Technology</label>'
    + '<select class="ta-proc">'
    + '<option value="conv" selected>Conventional LASIK</option>'
    + '<option value="custom">Custom wavefront</option>'
    + '<option value="topo">Topography-guided</option>'
    + '<option value="prk">PRK</option>'
    + '<option value="smile">SMILE</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Provider type</label>'
    + '<select class="ta-prov">'
    + '<option value="chain">National chain</option>'
    + '<option value="ind" selected>Independent surgeon</option>'
    + '<option value="prem">Premium / academic</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Eyes</label>'
    + '<select class="ta-eyes"><option value="2" selected>Both</option><option value="1">One</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Post-op meds ($)</label><input type="number" class="ta-meds" value="75" min="0" max="500" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>FSA/HSA bracket</label>'
    + '<select class="ta-fsa"><option value="0" selected>No</option><option value="24">24%</option><option value="32">32%</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  // Same model as the full tool page: per-eye base by technology x provider multiplier.
  var BASEPX = { conv: [1500, 2000, 2500], custom: [2000, 2400, 3000], topo: [2500, 3000, 4000], prk: [1500, 2200, 2800], smile: [2200, 2800, 3500] };
  var MULT = { chain: [0.75, 0.85, 0.95], ind: [1, 1, 1], prem: [1.1, 1.2, 1.3] };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function money(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calc() {
    var p = root.querySelector('.ta-proc').value || 'conv';
    var v = root.querySelector('.ta-prov').value || 'ind';
    var eyes = parseInt(root.querySelector('.ta-eyes').value, 10) || 2;
    var meds = val('.ta-meds');
    var fsa = val('.ta-fsa');
    var lo = BASEPX[p][0] * MULT[v][0], ty = BASEPX[p][1] * MULT[v][1], hi = BASEPX[p][2] * MULT[v][2];
    var total = ty * eyes + meds;
    if (ty <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Pick a procedure</div>';
      return;
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(total) + '</div>'
      + '<div class="ta-embed-sub">' + money(ty) + ' per eye · range ' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">Both eyes: ' + money(lo * eyes) + ' – ' + money(hi * eyes) + (meds > 0 ? ' (before ' + money(meds) + ' meds)' : '') + '</div>'
      + '<div class="ta-embed-sub">' + (fsa > 0
          ? 'With FSA/HSA at ' + fsa + '%: <strong>' + money(total * (1 - fsa / 100)) + '</strong> (saves ' + money(total * fsa / 100) + ')'
          : 'Add an FSA/HSA bracket to see the pre-tax price') + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.lasikCostCalculator = { recalc: calc };
})();
