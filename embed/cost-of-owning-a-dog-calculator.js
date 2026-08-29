/*!
 * ToolAspect Cost of Owning a Dog Calculator Embed
 * Install: <div id="ta-cost-of-owning-a-dog-calculator"></div>
 *          <script src="https://toolaspect.com/embed/cost-of-owning-a-dog-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-cost-of-owning-a-dog-calculator';
  var BASE = 'https://toolaspect.com/cost-of-owning-a-dog-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}.ta-embed-range{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'cost-of-owning-a-dog-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="cost-of-owning-a-dog-calculator"]')) {
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
    + '<div class="ta-embed-title">Cost of Owning a Dog</div>'
    + '<div class="ta-embed-subtitle">First-year and monthly costs by size</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Dog Size</label><select class="ta-size">'
    + '<option value="small">Small (under 25 lb)</option>'
    + '<option value="medium" selected>Medium (25-55 lb)</option>'
    + '<option value="large">Large (55-90 lb)</option>'
    + '<option value="giant">Giant (90+ lb)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Acquisition</label><select class="ta-mode">'
    + '<option value="adopt" selected>Adoption ($250)</option>'
    + '<option value="breeder">Breeder (by size)</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Pet Insurance</label><select class="ta-ins">'
    + '<option value="yes" selected>Yes</option>'
    + '<option value="no">No</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Grooming</label><select class="ta-groom">'
    + '<option value="diy" selected>DIY at home</option>'
    + '<option value="pro">Professional</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Pet Rent ($/mo)</label><input type="number" class="ta-rent" value="0" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Acquisition Price ($)</label><input type="number" class="ta-acq" value="250" min="0" step="50"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var SZ = {
    small:  { breeder: 800,  spay: 250, supplies: 350, food: 35,   prev: 22.5, ins: 35,   groom: 58, vet: 150 },
    medium: { breeder: 1200, spay: 350, supplies: 400, food: 55,   prev: 27.5, ins: 45,   groom: 70, vet: 200 },
    large:  { breeder: 1500, spay: 500, supplies: 550, food: 80,   prev: 35,   ins: 57.5, groom: 82, vet: 250 },
    giant:  { breeder: 2000, spay: 650, supplies: 700, food: 105,  prev: 42.5, ins: 70,   groom: 95, vet: 325 }
  };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var s = SZ[val('.ta-size')] || SZ.medium;
    var ins = val('.ta-ins') === 'yes';
    var groomPro = val('.ta-groom') === 'pro';
    var rent = num('.ta-rent');
    var acq = num('.ta-acq');
    var mo = s.food + s.prev + (ins ? s.ins : 0) + 20 + (groomPro ? s.groom : 12) + s.vet / 12 + 1.25 + rent;
    var ot = acq + s.spay + 200 + 40 + s.supplies + 150;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(ot + 12 * mo) + '</div>'
      + '<div class="ta-embed-sub">first year — ' + money(ot) + ' one-time + $' + mo.toFixed(2) + '/month</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Monthly</div><div class="rv">$' + mo.toFixed(0) + '</div></div>'
      + '<div><div class="rl">Years 2+ / yr</div><div class="rv">' + money(12 * mo) + '</div></div>'
      + '<div><div class="rl">10-Year Total</div><div class="rv">' + money(ot + 120 * mo) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.costOfOwningADogCalculator = { recalc: calc };
})();
