/*!
 * ToolAspect Dog Life Expectancy Calculator Embed
 * Install: <div id="ta-dog-life-expectancy-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-life-expectancy-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-life-expectancy-calculator';
  var BASE = 'https://toolaspect.com/dog-life-expectancy-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:16px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:0}'
    + '.ta-embed-form-group{margin-bottom:0}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none;cursor:pointer}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px;text-align:center}'
    + '.ta-embed-cell .cl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-cell .cv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-grid{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-life-expectancy-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-life-expectancy-calculator"]')) {
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

  // Shared breed dataset: name, AKC weight range, AKC life expectancy range
  var BREEDS = [
    ['Labrador Retriever', 11, 13], ['Golden Retriever', 10, 12], ['German Shepherd', 7, 10],
    ['Poodle (Standard)', 10, 18], ['Bulldog', 8, 10], ['Rottweiler', 8, 10],
    ['Great Dane', 7, 10], ['Bernese Mountain Dog', 7, 10], ['Doberman Pinscher', 10, 12],
    ['Boxer', 10, 12], ['Siberian Husky', 12, 14], ['Australian Shepherd', 12, 15],
    ['Border Collie', 12, 15], ['Dachshund (Standard)', 12, 16], ['Beagle', 12, 15],
    ['Pembroke Welsh Corgi', 12, 15], ['Shiba Inu', 13, 16], ['French Bulldog', 10, 12],
    ['Cavalier King Charles Spaniel', 9, 14], ['Boston Terrier', 11, 13], ['Pug', 13, 15],
    ['Shih Tzu', 10, 16], ['Chihuahua', 14, 16], ['Yorkshire Terrier', 12, 15],
    ['Maltese', 12, 15], ['Pomeranian', 12, 16]
  ];
  var SIZE_CLASSES = [
    ['Toy — under 15 lb', 12, 16], ['Small — 15-30 lb', 10, 16], ['Medium — 30-60 lb', 10, 15],
    ['Large — 60-90 lb', 8, 13], ['Giant — 90 lb and up', 7, 10]
  ];

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Dog Life Expectancy Calculator</div>'
    + '<div class="ta-embed-subtitle">Lifespan range and years remaining, by breed or size</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Breed / size</label><select class="ta-breed"></select></div>'
    + '<div class="ta-embed-form-group"><label>Current age (yrs)</label><input type="number" class="ta-age" value="6" min="0" max="25" step="0.5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-grid"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var breedSel = root.querySelector('.ta-breed');
  SIZE_CLASSES.forEach(function (s, i) {
    var o = document.createElement('option');
    o.value = 'size' + i;
    o.textContent = s[0];
    breedSel.appendChild(o);
  });
  BREEDS.forEach(function (b, i) {
    var o = document.createElement('option');
    o.value = i;
    o.textContent = b[0] + ' (' + b[1] + '-' + b[2] + ' yrs)';
    breedSel.appendChild(o);
  });

  var resultEl = root.querySelector('.ta-embed-result');
  var gridEl = root.querySelector('.ta-embed-grid');

  function calc() {
    var v = breedSel.value;
    var r = v.indexOf('size') === 0 ? SIZE_CLASSES[parseInt(v.slice(4), 10)].slice(1) : BREEDS[parseInt(v, 10)].slice(1);
    var age = parseFloat(root.querySelector('.ta-age').value);
    if (isNaN(age) || age < 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your dog\'s age</div>';
      gridEl.innerHTML = '';
      return;
    }
    var mid = (r[0] + r[1]) / 2;
    if (r[1] - age <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">Bonus time 🎉</div><div class="ta-embed-sub">already past the typical expectancy range</div>';
      gridEl.innerHTML = '<div class="ta-embed-cell"><div class="cl">Expectancy range</div><div class="cv">' + r[0] + ' – ' + r[1] + ' yrs</div></div>';
      return;
    }
    var lo = Math.max(0, r[0] - age), hi = r[1] - age;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + (lo % 1 === 0 ? lo.toFixed(0) : lo.toFixed(1)) + ' – ' + (hi % 1 === 0 ? hi.toFixed(0) : hi.toFixed(1)) + ' yrs</div>'
      + '<div class="ta-embed-sub">typical years remaining · midpoint ' + (mid - age).toFixed(1) + '</div>';
    gridEl.innerHTML =
      '<div class="ta-embed-cell"><div class="cl">Expectancy range</div><div class="cv">' + r[0] + ' – ' + r[1] + ' yrs</div></div>'
      + '<div class="ta-embed-cell"><div class="cl">Life lived</div><div class="cv">' + Math.min(999, Math.round(age / mid * 100)) + '%</div></div>'
      + '<div class="ta-embed-cell"><div class="cl">Lean-fed bonus*</div><div class="cv">+1.8 yrs</div></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogLifeExpectancy = { recalc: calc };
})();
