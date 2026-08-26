/*!
 * ToolAspect Protein Intake Calculator Embed
 * Install: <div id="ta-ideal-protein-intake-calculator"></div>
 *          <script src="https://toolaspect.com/embed/ideal-protein-intake-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-ideal-protein-intake-calculator';
  var BASE = 'https://toolaspect.com/ideal-protein-intake-calculator/';

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
    + '.ta-embed-extra{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}'
    + '.ta-embed-box{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:12px;text-align:center}'
    + '.ta-embed-box .k{font-size:.72rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em}'
    + '.ta-embed-box .v{font-size:1.15rem;font-weight:700;color:var(--ta-text);margin-top:3px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-extra{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'ideal-protein-intake-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="ideal-protein-intake-calculator"]')) {
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
    + '<div class="ta-embed-title">Protein Intake Calculator</div>'
    + '<div class="ta-embed-subtitle">Daily protein target by body weight and goal</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Body weight</label><input type="number" class="ta-w" value="180" min="40" max="700" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Units</label><select class="ta-units"><option value="lb">Pounds (lb)</option><option value="kg">Kilograms (kg)</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Goal</label><select class="ta-goal">'
    + '<option value="rda">Sedentary / RDA baseline (0.8 g/kg)</option>'
    + '<option value="maintain">Active maintenance (1.0–1.2 g/kg)</option>'
    + '<option value="endurance">Endurance training (1.2–1.4 g/kg)</option>'
    + '<option value="muscle" selected>Build muscle (1.6–2.2 g/kg)</option>'
    + '<option value="cut">Lose fat, keep muscle (1.6–2.4 g/kg)</option>'
    + '<option value="older">Adult 65+ (1.0–1.2 g/kg)</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-extra">'
    + '<div class="ta-embed-box"><div class="k">Per meal (4 meals)</div><div class="v ta-meal">—</div></div>'
    + '<div class="ta-embed-box"><div class="k">Cooked chicken equivalent</div><div class="v ta-chick">—</div></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var GOALS = {
    rda: { lo: 0.8, hi: 0.8, name: 'RDA baseline' },
    maintain: { lo: 1.0, hi: 1.2, name: 'active maintenance' },
    endurance: { lo: 1.2, hi: 1.4, name: 'endurance training' },
    muscle: { lo: 1.6, hi: 2.2, name: 'building muscle' },
    cut: { lo: 1.6, hi: 2.4, name: 'cutting' },
    older: { lo: 1.0, hi: 1.2, name: 'adults 65+' }
  };

  var resultEl = root.querySelector('.ta-embed-result');
  var EPS = 1e-9;

  function calc() {
    var w = parseFloat(root.querySelector('.ta-w').value);
    var kg = (root.querySelector('.ta-units').value === 'kg') ? w : w / 2.2046;
    var g = GOALS[root.querySelector('.ta-goal').value];
    if (isNaN(w) || w <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your body weight</div>';
      return;
    }
    var lo = Math.round(kg * g.lo + EPS), hi = Math.round(kg * g.hi + EPS), mid = Math.round(kg * (g.lo + g.hi) / 2 + EPS);
    var big = (lo === hi) ? lo + ' g/day' : lo + '–' + hi + ' g/day';
    resultEl.innerHTML = '<div class="ta-embed-big">' + big + '</div>'
      + '<div class="ta-embed-sub">' + g.name + ' · midpoint ' + mid + ' g at ' + Math.round(kg) + ' kg</div>';
    root.querySelector('.ta-meal').textContent = Math.round(mid / 4) + ' g';
    root.querySelector('.ta-chick').textContent = Math.round(mid / 31 * 100) + ' g';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.idealProteinIntakeCalculator = { recalc: calc };
})();
