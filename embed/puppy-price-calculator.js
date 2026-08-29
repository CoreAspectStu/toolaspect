/*!
 * ToolAspect Puppy Price Calculator Embed
 * Install: <div id="ta-puppy-price-calculator"></div>
 *          <script src="https://toolaspect.com/embed/puppy-price-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-puppy-price-calculator';
  var BASE = 'https://toolaspect.com/puppy-price-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'puppy-price-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="puppy-price-calculator"]')) {
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
    + '<div class="ta-embed-title">Puppy Price Calculator</div>'
    + '<div class="ta-embed-subtitle">Purchase price + the true first-year cost</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Source</label><select class="ta-mode">'
    + '<option value="adopt" selected>Shelter adoption</option>'
    + '<option value="rescue">Breed rescue</option>'
    + '<option value="breeder">Breeder</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group ta-breed-group"><label>Breed</label><select class="ta-breed"></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Acquisition Price ($)</label><input type="number" class="ta-acq" value="250" min="0" step="25"></div>'
    + '<div class="ta-embed-form-group"><label>Pet Insurance</label><select class="ta-ins">'
    + '<option value="yes" selected>Include</option>'
    + '<option value="no">Exclude</option>'
    + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var BREEDS = [
    { n: 'French Bulldog', size: 'small', lo: 2000, typ: 3000, hi: 4500 },
    { n: 'Golden Retriever', size: 'large', lo: 1000, typ: 1500, hi: 2500 },
    { n: 'Labrador Retriever', size: 'large', lo: 800, typ: 1200, hi: 2000 },
    { n: 'German Shepherd', size: 'large', lo: 800, typ: 1500, hi: 2500 },
    { n: 'Poodle', size: 'small', lo: 1000, typ: 1800, hi: 2500 },
    { n: 'Bernese Mountain Dog', size: 'large', lo: 1500, typ: 2500, hi: 3500 },
    { n: 'English Bulldog', size: 'medium', lo: 1500, typ: 2800, hi: 4000 },
    { n: 'Dachshund', size: 'small', lo: 700, typ: 1200, hi: 1800 },
    { n: 'Pomeranian', size: 'small', lo: 800, typ: 1500, hi: 2500 },
    { n: 'Yorkshire Terrier', size: 'small', lo: 800, typ: 1500, hi: 2500 },
    { n: 'Shih Tzu', size: 'small', lo: 800, typ: 1300, hi: 2000 },
    { n: 'Pembroke Corgi', size: 'medium', lo: 1000, typ: 1800, hi: 2500 },
    { n: 'Goldendoodle', size: 'medium', lo: 1200, typ: 2000, hi: 2800 },
    { n: 'Aussiedoodle', size: 'medium', lo: 1000, typ: 1750, hi: 2500 },
    { n: 'Rottweiler', size: 'large', lo: 1000, typ: 1500, hi: 2000 },
    { n: 'Beagle', size: 'small', lo: 500, typ: 1000, hi: 1500 },
    { n: 'Siberian Husky', size: 'medium', lo: 800, typ: 1400, hi: 2000 },
    { n: 'Great Dane', size: 'giant', lo: 1000, typ: 1750, hi: 2500 },
    { n: 'Doberman Pinscher', size: 'large', lo: 1000, typ: 1750, hi: 2500 },
    { n: 'Maltese', size: 'small', lo: 1000, typ: 1750, hi: 2500 },
    { n: 'Chihuahua', size: 'small', lo: 500, typ: 1000, hi: 1500 },
    { n: 'Australian Shepherd', size: 'medium', lo: 800, typ: 1300, hi: 1800 },
    { n: 'Boxer', size: 'large', lo: 900, typ: 1400, hi: 2000 },
    { n: 'Cavalier King Charles Spaniel', size: 'small', lo: 1500, typ: 2200, hi: 3000 },
    { n: 'Shiba Inu', size: 'medium', lo: 1200, typ: 1800, hi: 2500 }
  ];
  var SZM = {
    small: { food: 35, prev: 22.5, ins: 35, vet: 150 },
    medium: { food: 55, prev: 27.5, ins: 45, vet: 200 },
    large: { food: 80, prev: 35, ins: 57.5, vet: 250 },
    giant: { food: 105, prev: 42.5, ins: 70, vet: 325 }
  };
  var STARTUP = 1140;

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  var breedSel = root.querySelector('.ta-breed');
  breedSel.innerHTML = BREEDS.map(function (b, i) {
    return '<option value="' + i + '">' + b.n + ' ($' + b.lo.toLocaleString() + '-$' + b.hi.toLocaleString() + ')</option>';
  }).join('');

  function calc() {
    var mode = val('.ta-mode');
    root.querySelector('.ta-breed-group').style.display = mode === 'breeder' ? '' : 'none';
    var acq = num('.ta-acq');
    var ins = val('.ta-ins') === 'yes';
    var size = 'medium', lo = acq, hi = acq;
    if (mode === 'adopt') { lo = 50; hi = 500; }
    if (mode === 'rescue') { lo = 200; hi = 600; }
    if (mode === 'breeder') {
      var b = BREEDS[parseInt(val('.ta-breed'), 10)] || BREEDS[0];
      lo = b.lo; hi = b.hi; size = b.size;
    }
    var s = SZM[size];
    var mo = s.food + s.prev + (ins ? s.ins : 0) + 20 + 12 + s.vet / 12 + 1.25;
    var own = STARTUP + 12 * mo;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(acq + own) + '</div>'
      + '<div class="ta-embed-sub">true first-year cost (' + money(lo + own) + ' - ' + money(hi + own) + ' by price paid)</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Purchase Price</div><div class="rv">' + money(acq) + '</div></div>'
      + '<div><div class="rl">Year-One Care</div><div class="rv">' + money(own) + ' ($' + mo.toFixed(0) + '/mo)</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  root.querySelector('.ta-mode').addEventListener('change', function () {
    if (this.value === 'adopt') root.querySelector('.ta-acq').value = 250;
    if (this.value === 'rescue') root.querySelector('.ta-acq').value = 400;
    if (this.value === 'breeder') {
      var b = BREEDS[parseInt(val('.ta-breed'), 10)] || BREEDS[0];
      root.querySelector('.ta-acq').value = b.typ;
    }
    calc();
  });
  breedSel.addEventListener('change', function () {
    var b = BREEDS[parseInt(this.value, 10)];
    root.querySelector('.ta-acq').value = b.typ;
    calc();
  });

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.puppyPriceCalculator = { recalc: calc };
})();
