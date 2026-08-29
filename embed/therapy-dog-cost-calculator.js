/*!
 * ToolAspect Therapy Dog Cost Calculator Embed
 * Install: <div id="ta-therapy-dog-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/therapy-dog-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-therapy-dog-cost-calculator';
  var BASE = 'https://toolaspect.com/therapy-dog-cost-calculator/';

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
    + '.ta-embed-chips{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px}'
    + '.ta-embed-chip{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:6px 12px;font-size:.8rem}'
    + '.ta-embed-chip strong{color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'therapy-dog-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="therapy-dog-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Therapy Dog Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Certification fees by organization, first year to multi-year</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Organization preset</label><select class="ta-org">'
    + '<option value="pp">Pet Partners</option><option value="atd">Alliance of Therapy Dogs</option><option value="custom">Custom</option></select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Handler course ($)</label><input type="number" class="ta-course" value="80" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Evaluation ($)</label><input type="number" class="ta-eval" value="25" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Year-1 registration ($)</label><input type="number" class="ta-reg1" value="95" min="0" step="5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Background check ($)</label><input type="number" class="ta-bkg" value="0" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Vet wellness exam ($)</label><input type="number" class="ta-vet" value="75" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Gear ($)</label><input type="number" class="ta-gear" value="30" min="0" step="5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Renewal fee ($)</label><input type="number" class="ta-renew" value="70" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Renewal interval (yrs)</label><input type="number" class="ta-interval" value="2" min="1" max="3" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var PRESETS = {
    pp: { course: 80, eval: 25, reg1: 95, bkg: 0, renew: 70, interval: 2 },
    atd: { course: 0, eval: 25, reg1: 55, bkg: 17, renew: 35, interval: 1 },
    custom: { course: 0, eval: 25, reg1: 50, bkg: 0, renew: 30, interval: 1 }
  };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function usd(n) { return '$' + Math.round(Math.max(0, n)).toLocaleString('en-US'); }

  function calc() {
    var first = val('.ta-course') + val('.ta-eval') + val('.ta-reg1') + val('.ta-bkg') + val('.ta-vet') + val('.ta-gear');
    var interval = Math.max(1, val('.ta-interval'));
    var annual = val('.ta-renew') / interval + val('.ta-vet') + 10;
    var five = first + 4 * annual;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(first) + '</div>'
      + '<div class="ta-embed-sub">first-year all-in</div>'
      + '<div class="ta-embed-chips">'
      + '<div class="ta-embed-chip">After year 1: <strong>' + usd(annual) + '/yr</strong></div>'
      + '<div class="ta-embed-chip">5-year total: <strong>' + usd(five) + '</strong></div>'
      + '</div>'
      + '<div class="ta-embed-sub" style="margin-top:10px">National reality band: $100-$500 with a suitable dog — not the $20k-$40k of a program service dog.</div>';
  }

  root.querySelector('.ta-org').addEventListener('change', function () {
    var p = PRESETS[this.value];
    root.querySelector('.ta-course').value = p.course;
    root.querySelector('.ta-eval').value = p.eval;
    root.querySelector('.ta-reg1').value = p.reg1;
    root.querySelector('.ta-bkg').value = p.bkg;
    root.querySelector('.ta-renew').value = p.renew;
    root.querySelector('.ta-interval').value = p.interval;
    calc();
  });
  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.therapyDogCostCalculator = { recalc: calc };
})();
