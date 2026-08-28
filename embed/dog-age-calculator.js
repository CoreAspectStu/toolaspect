/*!
 * ToolAspect Dog Age Calculator Embed
 * Install: <div id="ta-dog-age-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-age-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-age-calculator';
  var BASE = 'https://toolaspect.com/dog-age-calculator/';

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
    + '.ta-embed-row{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:14px}'
    + '.ta-embed-chip{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 12px;font-size:.8rem}'
    + '.ta-embed-chip b{display:block;font-size:.66rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-age-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-age-calculator"]')) {
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
    + '<div class="ta-embed-title">Dog Age Calculator</div>'
    + '<div class="ta-embed-subtitle">Dog years to human years, by breed size</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Breed size</label><select class="ta-size">'
    + '<option value="s">Small (&lt;20 lb)</option><option value="m" selected>Medium (21-50 lb)</option>'
    + '<option value="l">Large (51-100 lb)</option><option value="g">Giant (&gt;100 lb)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Age (years)</label><input type="number" class="ta-age" value="7" min="0.1" max="25" step="0.25"></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var CHART={
    s:[15,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80],
    m:[15,24,28,32,36,42,47,51,56,60,65,69,74,78,83,87],
    l:[15,24,28,32,36,45,50,55,61,66,72,77,82,88,93,99],
    g:[12,22,31,38,45,49,56,64,71,79,86,93,100,107,114,121]
  };
  var SENIOR={s:7,m:7,l:6,g:5};
  var NAME={s:'small',m:'medium',l:'large',g:'giant'};
  function chartAge(size,a){
    var arr=CHART[size];
    if(a<=0)return 0;
    if(a<=1)return a*arr[0];
    if(a>=16)return arr[15]+(a-16)*(arr[15]-arr[14]);
    var lo=Math.floor(a),fr=a-lo;
    return arr[lo-1]+(arr[lo]-arr[lo-1])*fr;
  }

  function calc() {
    var size = root.querySelector('.ta-size').value;
    var a = parseFloat(root.querySelector('.ta-age').value);
    if (isNaN(a) || a <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your dog\'s age</div>';
      return;
    }
    var c = Math.round(chartAge(size, a));
    var epi = Math.round(16 * Math.log(a) + 31);
    var stage = a < 1 ? 'Puppy' : (a < SENIOR[size] ? (a < 2 ? 'Adolescent' : 'Adult') : 'Senior');
    resultEl.innerHTML =
      '<div class="ta-embed-big">≈' + c + ' human years</div>'
      + '<div class="ta-embed-sub">AKC chart, ' + (Math.round(a * 100) / 100) + '-year-old ' + NAME[size] + ' dog</div>'
      + '<div class="ta-embed-row">'
      + '<div class="ta-embed-chip"><b>7-year rule</b>' + Math.round(a * 7) + ' yrs</div>'
      + '<div class="ta-embed-chip"><b>Epigenetic clock</b>' + epi + ' yrs</div>'
      + '<div class="ta-embed-chip"><b>Life stage</b>' + stage + '</div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogAgeCalculator = { recalc: calc };
})();
