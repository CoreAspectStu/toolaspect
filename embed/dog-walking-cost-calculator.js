/*!
 * ToolAspect Dog Walking Cost Calculator Embed
 * Install: <div id="ta-dog-walking-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-walking-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-walking-cost-calculator';
  var BASE = 'https://toolaspect.com/dog-walking-cost-calculator/';

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-walking-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-walking-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Dog Walking Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Per walk, per week, per month &amp; per year</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Walk type &amp; length</label>'
    + '<select class="ta-type">'
    + '<option value="15|20|25">Solo 20 min ($15-$25)</option>'
    + '<option value="20|27.5|35" selected>Solo 30 min ($20-$35)</option>'
    + '<option value="30|40|50">Solo 60 min ($30-$50)</option>'
    + '<option value="12|16|20">Group 30 min ($12-$20/dog)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Walks / week</label><input type="number" class="ta-freq" value="5" min="1" max="21" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Dogs on the walk</label><input type="number" class="ta-dogs" value="1" min="1" max="4" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Market</label>'
    + '<select class="ta-market">'
    + '<option value="0.85">Small town / rural</option>'
    + '<option value="1" selected>National average</option>'
    + '<option value="1.3">Major metro</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Package discount (%)</label><input type="number" class="ta-pkg" value="0" min="0" max="25" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Platform fee (%)</label><input type="number" class="ta-fee" value="0" min="0" max="20" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var EXTRA_DOG = 8; // middle of the $5-$10 add-a-dog band

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function money(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calc() {
    var parts = root.querySelector('.ta-type').value.split('|');
    var lo = +parts[0], ty = +parts[1], hi = +parts[2];
    var freq = val('.ta-freq');
    var dogs = Math.max(1, val('.ta-dogs'));
    var mk = val('.ta-market') || 1;
    var pkg = val('.ta-pkg');
    var fee = val('.ta-fee');
    var addl = (dogs - 1) * EXTRA_DOG;
    function adj(base) { return (base * mk + addl) * (1 - pkg / 100) * (1 + fee / 100); }
    var perTy = adj(ty), perLo = adj(lo), perHi = adj(hi);
    var wk = perTy * freq, mo = wk * 52 / 12, yr = wk * 52;
    if (perTy <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Set your schedule</div>';
      return;
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(perTy) + '/walk</div>'
      + '<div class="ta-embed-sub">Range ' + money(perLo) + ' – ' + money(perHi) + ' per walk</div>'
      + '<div class="ta-embed-sub"><strong>' + money(wk) + '</strong>/week · <strong>' + money(mo) + '</strong>/month · <strong>' + money(yr) + '</strong>/year</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogWalkingCostCalculator = { recalc: calc };
})();
