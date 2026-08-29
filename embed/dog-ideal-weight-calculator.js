/*!
 * ToolAspect Dog Ideal Weight Calculator Embed
 * Install: <div id="ta-dog-ideal-weight-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-ideal-weight-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-ideal-weight-calculator';
  var BASE = 'https://toolaspect.com/dog-ideal-weight-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:16px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group{margin-bottom:0}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none;cursor:pointer}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px;text-align:center}'
    + '.ta-embed-cell .cl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-cell .cv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-ideal-weight-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-ideal-weight-calculator"]')) {
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

  // Shared breed dataset: name, AKC weight range lb (lo, hi)
  var BREEDS = [
    ['Labrador Retriever', 55, 80], ['Golden Retriever', 55, 75], ['German Shepherd', 50, 90],
    ['Poodle (Standard)', 40, 70], ['Bulldog', 40, 50], ['Rottweiler', 80, 135],
    ['Great Dane', 110, 175], ['Bernese Mountain Dog', 70, 115], ['Doberman Pinscher', 60, 100],
    ['Boxer', 50, 80], ['Siberian Husky', 35, 60], ['Australian Shepherd', 40, 65],
    ['Border Collie', 30, 55], ['Dachshund (Standard)', 16, 32], ['Beagle', 20, 30],
    ['Pembroke Welsh Corgi', 22, 30], ['Shiba Inu', 17, 23], ['French Bulldog', 20, 28],
    ['Cavalier King Charles Spaniel', 13, 18], ['Boston Terrier', 12, 25], ['Pug', 14, 18],
    ['Shih Tzu', 9, 16], ['Chihuahua', 4, 6], ['Yorkshire Terrier', 4, 7],
    ['Maltese', 4, 7], ['Pomeranian', 3, 7]
  ];

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Dog Ideal Weight Calculator</div>'
    + '<div class="ta-embed-subtitle">Breed range + body condition score</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Breed</label><select class="ta-breed"></select></div>'
    + '<div class="ta-embed-form-group"><label>Current weight (lb)</label><input type="number" class="ta-weight" value="90" min="1" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Body condition (1-9)</label><select class="ta-bcs">'
    + '<option value="3">3 Thin</option><option value="4">4 Lean</option><option value="5" selected>5 Ideal</option>'
    + '<option value="6">6 Overweight</option><option value="7">7 Heavy</option><option value="8">8 Obese</option><option value="9">9 Severe</option>'
    + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-grid"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var breedSel = root.querySelector('.ta-breed');
  BREEDS.forEach(function (b, i) {
    var o = document.createElement('option');
    o.value = i;
    o.textContent = b[0] + ' (' + b[1] + '-' + b[2] + ' lb)';
    breedSel.appendChild(o);
  });

  var resultEl = root.querySelector('.ta-embed-result');
  var gridEl = root.querySelector('.ta-embed-grid');

  function calc() {
    var b = BREEDS[parseInt(breedSel.value, 10) || 0];
    var w = parseFloat(root.querySelector('.ta-weight').value) || 0;
    var bcs = parseInt(root.querySelector('.ta-bcs').value, 10);
    if (w <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your dog\'s weight</div>';
      gridEl.innerHTML = '';
      return;
    }
    var factor = 1 + 0.1 * (bcs - 5);
    var ideal = w / factor;
    var rer = 70 * Math.pow(ideal * 0.4536, 0.75);
    var pct = Math.round((factor - 1) * 100);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + ideal.toFixed(1) + ' lb</div>'
      + '<div class="ta-embed-sub">estimated ideal weight — ' + b[0]
      + (bcs > 5 ? ' at BCS ' + bcs + '/9 (~' + pct + '% over ideal)' : bcs < 5 ? ' at BCS ' + bcs + '/9 (underweight)' : ' at ideal condition')
      + '</div>';
    var cells =
      '<div class="ta-embed-cell"><div class="cl">Breed healthy range</div><div class="cv">' + b[1] + ' – ' + b[2] + ' lb</div></div>';
    if (bcs > 5) {
      var wk2 = Math.round(Math.log(ideal / w) / Math.log(0.98));
      var wk1 = Math.round(Math.log(ideal / w) / Math.log(0.99));
      cells += '<div class="ta-embed-cell"><div class="cl">To lose</div><div class="cv">' + (w - ideal).toFixed(1) + ' lb</div></div>'
        + '<div class="ta-embed-cell"><div class="cl">Weight-loss calories/day</div><div class="cv">' + Math.round(rer) + ' kcal</div></div>'
        + '<div class="ta-embed-cell"><div class="cl">Time at 1-2%/wk</div><div class="cv">' + wk2 + ' – ' + wk1 + ' wks</div></div>';
    } else {
      cells += '<div class="ta-embed-cell"><div class="cl">' + (bcs < 5 ? 'Weight to gain' : 'Condition') + '</div><div class="cv">' + (bcs < 5 ? (ideal - w).toFixed(1) + ' lb' : 'At ideal') + '</div></div>'
        + '<div class="ta-embed-cell"><div class="cl">Maintenance calories (1.6×RER)</div><div class="cv">' + Math.round(rer * 1.6) + ' kcal</div></div>';
    }
    gridEl.innerHTML = cells;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogIdealWeight = { recalc: calc };
})();
