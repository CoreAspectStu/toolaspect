/*!
 * ToolAspect Dent Repair Cost Calculator Embed
 * Install: <div id="ta-dent-repair-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dent-repair-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dent-repair-cost-calculator';
  var BASE = 'https://toolaspect.com/dent-repair-cost-calculator/';

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
    + '.ta-embed-tabs{display:flex;gap:8px;margin-bottom:14px}'
    + '.ta-embed-tab{flex:1;text-align:center;padding:9px 6px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;'
    + 'font-size:.82rem;font-weight:600;color:var(--ta-muted);cursor:pointer}'
    + '.ta-embed-tab.on{border-color:var(--ta-accent);color:var(--ta-accent)}'
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
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dent-repair-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dent-repair-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Dent Repair Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Paintless repair by size, or body shop by panel</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-tabs"><div class="ta-embed-tab on" data-p="pdr">Paint intact (PDR)</div><div class="ta-embed-tab" data-p="body">Paint damaged</div></div>'
    + '<div class="ta-embed-pdr">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Dent size</label><select class="ta-size">'
    + '<option value="s05">Under 0.5 in</option>'
    + '<option value="s1" selected>About 1 in</option>'
    + '<option value="s2">1.5-2 in</option>'
    + '<option value="s3">2-3 in</option>'
    + '<option value="s4">3-4 in</option>'
    + '<option value="s6">4-6 in</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Dents on panel</label><input type="number" class="ta-count" value="1" min="1" max="30" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Material</label><select class="ta-mat">'
    + '<option value="steel" selected>Steel</option><option value="alum">Aluminum</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Access</label><select class="ta-access">'
    + '<option value="easy" selected>Easy</option><option value="tight">Tight spot</option>'
    + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-body" style="display:none">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Panel</label><select class="ta-panel">'
    + '<option value="door" selected>Door</option><option value="fender">Fender</option>'
    + '<option value="hood">Hood</option><option value="roof">Roof</option>'
    + '<option value="quarter">Quarter panel</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Depth</label><select class="ta-depth">'
    + '<option value="blend">Fill + blend</option>'
    + '<option value="respray" selected>Repair + respray</option>'
    + '<option value="replace">Replace panel</option>'
    + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Comprehensive deductible ($, optional)</label>'
    + '<input type="number" class="ta-ded" value="500" min="0" step="50"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var PDR = { s05: [75, 150], s1: [100, 200], s2: [150, 275], s3: [200, 350], s4: [275, 450], s6: [350, 500] };
  var BODY = {
    door: { blend: [150, 400], respray: [400, 900], replace: [800, 1800] },
    fender: { blend: [150, 400], respray: [400, 850], replace: [700, 1600] },
    hood: { blend: [150, 400], respray: [450, 950], replace: [800, 1900] },
    roof: { blend: [200, 500], respray: [600, 1200], replace: [1200, 2500] },
    quarter: { blend: [200, 500], respray: [500, 1200], replace: [2000, 4000] }
  };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  var path = 'pdr';

  function calc() {
    var lo, hi, sub;
    if (path === 'pdr') {
      var p = PDR[val('.ta-size')];
      var count = Math.max(1, parseInt(val('.ta-count'), 10) || 1);
      lo = p[0] + (count - 1) * p[0] * 0.67;
      hi = p[1] + (count - 1) * p[1] * 0.67;
      if (val('.ta-mat') === 'alum') { lo *= 1.3; hi *= 1.3; }
      if (val('.ta-access') === 'tight') { lo *= 1.2; hi *= 1.2; }
      sub = count + ' dent' + (count > 1 ? 's' : '') + ' · ' + (val('.ta-mat') === 'alum' ? 'aluminum' : 'steel')
        + (val('.ta-access') === 'tight' ? ' · tight access' : '');
    } else {
      var b = BODY[val('.ta-panel')][val('.ta-depth')];
      lo = b[0]; hi = b[1];
      sub = val('.ta-panel') + ' · ' + val('.ta-depth');
    }
    var ded = num('.ta-ded');
    var dedLine = ded > 0 ? (hi <= ded ? 'Below deductible — pay cash' : 'Claim pays up to ' + money(Math.max(0, hi - ded))) : 'No deductible set';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">' + sub + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Deductible check</div><div class="rv" style="font-size:.85rem">' + dedLine + '</div></div>'
      + '<div><div class="rl">PDR saves when</div><div class="rv" style="font-size:.85rem">' + (path === 'pdr' ? 'paint stays intact' : 'paint is intact') + '</div></div>'
      + '</div>';
  }

  root.querySelectorAll('.ta-embed-tab').forEach(function (t) {
    t.addEventListener('click', function () {
      path = t.getAttribute('data-p');
      root.querySelectorAll('.ta-embed-tab').forEach(function (x) { x.classList.toggle('on', x === t); });
      root.querySelector('.ta-embed-pdr').style.display = path === 'pdr' ? '' : 'none';
      root.querySelector('.ta-embed-body').style.display = path === 'body' ? '' : 'none';
      calc();
    });
  });
  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dentRepairCostCalculator = { recalc: calc };
})();
