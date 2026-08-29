/*!
 * ToolAspect Cat Litter Cost Calculator Embed
 * Install: <div id="ta-cat-litter-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/cat-litter-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-cat-litter-cost-calculator';
  var BASE = 'https://toolaspect.com/cat-litter-cost-calculator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px}'
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
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'cat-litter-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="cat-litter-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Cat Litter Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Monthly and yearly litter cost, by substrate</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Substrate</label><select class="ta-sub">'
    + '<option value="clay" selected>Clumping clay</option>'
    + '<option value="nonclay">Non-clumping</option>'
    + '<option value="silica">Silica gel</option>'
    + '<option value="pine">Pine pellets</option>'
    + '<option value="wheat">Wheat/grass</option>'
    + '<option value="tofu">Tofu</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>$/lb</label><input type="number" class="ta-perlb" value="0.55" min="0.05" step="0.05"></div>'
    + '<div class="ta-embed-form-group"><label>Cats</label><input type="number" class="ta-cats" value="2" min="1" max="8" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Sub %</label><input type="number" class="ta-subd" value="5" min="0" max="30" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  // [lb per cat per month, default $/lb]
  var SUB = { clay: [25, 0.55], nonclay: [30, 0.35], silica: [6, 4.00], pine: [20, 0.22], wheat: [12, 1.20], tofu: [8, 1.75] };

  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function num(sel) { var el = root.querySelector(sel); return parseFloat(el.value) || 0; }
  function money(n) { return '$' + (Math.round(n * 100) / 100).toFixed(2); }

  function calc() {
    var preset = SUB[val('.ta-sub')] || SUB.clay;
    var perlb = num('.ta-perlb') || preset[1];
    var cats = Math.max(1, num('.ta-cats') || 1);
    var subd = num('.ta-subd');
    var m = cats * preset[0] * perlb;
    var ms = m * (1 - subd / 100);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(ms) + '/mo</div>'
      + '<div class="ta-embed-sub">' + cats + ' cat' + (cats === 1 ? '' : 's') + ' · ' + preset[0] + ' lb/cat/mo at $' + perlb.toFixed(2) + '/lb' + (subd > 0 ? ' · ' + subd + '% off' : '') + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Per Year</div><div class="rv">' + money(ms * 12) + '</div></div>'
      + '<div><div class="rl">Autoship Savings / Year</div><div class="rv">' + money((m - ms) * 12) + '</div></div>'
      + '</div>';
  }

  var subSel = root.querySelector('.ta-sub');
  subSel.addEventListener('change', function () {
    root.querySelector('.ta-perlb').value = (SUB[this.value] || SUB.clay)[1];
    calc();
  });
  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.catLitterCostCalculator = { recalc: calc };
})();
