/*!
 * ToolAspect Cat Life Expectancy Calculator Embed
 * Install: <div id="ta-cat-life-expectancy-calculator"></div>
 *          <script src="https://toolaspect.com/embed/cat-life-expectancy-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-cat-life-expectancy-calculator';
  var BASE = 'https://toolaspect.com/cat-life-expectancy-calculator/';

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
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'cat-life-expectancy-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="cat-life-expectancy-calculator"]')) {
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
    + '<div class="ta-embed-title">Cat Life Expectancy Calculator</div>'
    + '<div class="ta-embed-subtitle">RVC 2024 breed data, adjusted for sex and weight</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Breed</label><select class="ta-breed">'
    + '<option value="x" selected>Domestic / mixed</option>'
    + '<option value="burmese">Burmese</option>'
    + '<option value="birman">Birman</option>'
    + '<option value="siamese">Siamese</option>'
    + '<option value="bsh">British Shorthair</option>'
    + '<option value="persian">Persian</option>'
    + '<option value="ragdoll">Ragdoll</option>'
    + '<option value="mainecoon">Maine Coon</option>'
    + '<option value="bengal">Bengal</option>'
    + '<option value="sphynx">Sphynx</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Sex</label><select class="ta-sex">'
    + '<option value="f" selected>Female</option><option value="m">Male</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Age (years)</label><input type="number" class="ta-age" value="4" min="0" max="30" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Weight (lb)</label><input type="number" class="ta-wt" value="11" min="3" max="35" step="0.5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var CATS = {
    x: { name: 'Domestic / mixed', e: 11.9, ideal: 10 },
    burmese: { name: 'Burmese', e: 14.4, ideal: 10 },
    birman: { name: 'Birman', e: 14.4, ideal: 10 },
    siamese: { name: 'Siamese', e: 11.7, ideal: 9 },
    bsh: { name: 'British Shorthair', e: 11.7, ideal: 12 },
    persian: { name: 'Persian', e: 10.9, ideal: 9 },
    ragdoll: { name: 'Ragdoll', e: 10.3, ideal: 14 },
    mainecoon: { name: 'Maine Coon', e: 9.7, ideal: 13 },
    bengal: { name: 'Bengal', e: 8.5, ideal: 10 },
    sphynx: { name: 'Sphynx', e: 6.7, ideal: 8 }
  };
  var LB_TO_G = 453.592, WT_PER_100G = 0.02;

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function yr(n) { return n % 1 === 0 ? n.toFixed(0) : n.toFixed(1); }

  function calc() {
    var c = CATS[val('.ta-breed')];
    var sex = val('.ta-sex');
    var age = num('.ta-age');
    var wt = num('.ta-wt');
    var overLb = Math.max(0, wt - c.ideal);
    var wtEffect = -(overLb * LB_TO_G / 100) * WT_PER_100G;
    var e = c.e + (sex === 'f' ? 0.2 : -0.5) + wtEffect;
    var remain = e - age;
    var big, sub;
    if (remain <= 0) {
      big = 'Beyond the table';
      sub = c.name + ' expectancy is ' + yr(c.e) + ' yrs and yours has passed it — cats who reach 15 often live to 17-20';
    } else {
      big = yr(remain) + ' yrs left';
      sub = 'typical remaining for a ' + c.name + ', ' + (sex === 'f' ? 'female' : 'male') + ' at ' + wt + ' lb';
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + big + '</div>'
      + '<div class="ta-embed-sub">' + sub + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Life expectancy</div><div class="rv">' + yr(e) + ' yrs</div></div>'
      + '<div><div class="rl">Weight effect</div><div class="rv">' + (overLb <= 0.25 ? 'at ideal' : yr(wtEffect) + ' yrs') + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.catLifeExpectancyCalculator = { recalc: calc };
})();
