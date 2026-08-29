/*!
 * ToolAspect Dog Breed Selector Quiz Embed
 * Install: <div id="ta-dog-breed-selector-quiz"></div>
 *          <script src="https://toolaspect.com/embed/dog-breed-selector-quiz.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-breed-selector-quiz';
  var BASE = 'https://toolaspect.com/dog-breed-selector-quiz/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-good:#16a34a;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-good:#4ade80}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.6rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-match{background:var(--ta-bg);border-radius:8px;padding:10px 12px;margin-bottom:8px;text-align:left}'
    + '.ta-embed-match .name{font-weight:700;font-size:.95rem}'
    + '.ta-embed-match .pct{float:right;color:var(--ta-good);font-weight:700}'
    + '.ta-embed-match .meta{color:var(--ta-muted);font-size:.78rem;margin-top:2px}'
    + '.ta-embed-note{color:var(--ta-muted);font-size:.78rem;margin:6px 0 0;text-align:center}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-breed-selector-quiz');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-breed-selector-quiz"]')) {
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
    + '<div class="ta-embed-title">What Dog Breed Fits You?</div>'
    + '<div class="ta-embed-subtitle">Seven quick questions, 34 breeds ranked</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Size that fits your home</label><select class="ta-q ta-size">'
    + '<option value="1">Tiny (under 15 lb)</option><option value="2">Small (15-30 lb)</option><option value="3" selected>Medium (30-55 lb)</option><option value="4">Large (55-80 lb)</option><option value="5">Giant (80+ lb)</option></select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Daily exercise you can give</label><select class="ta-q ta-energy">'
    + '<option value="1">One short walk</option><option value="2">A 30-min walk</option><option value="3" selected>An hour</option><option value="4">Two hours / running</option><option value="5">Hours, dog sports</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Shedding tolerance</label><select class="ta-q ta-shed">'
    + '<option value="1">Minimal only</option><option value="2">Light ok</option><option value="3" selected>Moderate ok</option><option value="4">Heavy ok</option><option value="5">Whatever</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Grooming willingness</label><select class="ta-q ta-groom">'
    + '<option value="1">Wash-and-go</option><option value="2">Weekly brush</option><option value="3" selected>Regular brushing</option><option value="4">Pro sometimes</option><option value="5">Full coat care</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Kids under 10 at home?</label><select class="ta-q ta-kids">'
    + '<option value="yes" selected>Yes</option><option value="no">No</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Living space</label><select class="ta-q ta-apt">'
    + '<option value="yes">Apartment / no yard</option><option value="no" selected>House with yard</option></select></div>'
    + '<div class="ta-embed-form-group"><label>First dog?</label><select class="ta-q ta-novice">'
    + '<option value="yes">Yes</option><option value="no" selected>No</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  // Same breed DB and scoring engine as the full quiz page
  // name, size, energy, shedding, kids, apartment, novice, grooming, costLo, costHi
  var BREEDS = [
    ['Golden Retriever',4,4,4,5,2,4,3,1100,2200],['Labrador Retriever',4,4,4,5,2,4,2,1100,2200],
    ['German Shepherd',4,4,4,4,1,2,3,1000,2100],['French Bulldog',2,2,2,4,5,4,2,900,2000],
    ['Poodle (Standard)',4,3,1,5,3,4,4,1000,2000],['Poodle (Miniature)',2,3,1,5,4,4,4,800,1600],
    ['Chihuahua',1,3,1,3,5,4,1,500,1100],['Yorkshire Terrier',1,3,2,3,5,4,4,700,1400],
    ['Dachshund',2,3,2,3,5,4,2,700,1400],['Beagle',2,4,3,4,3,3,2,750,1500],
    ['Border Collie',3,5,3,4,1,1,3,850,1700],['Australian Shepherd',3,5,4,4,1,2,4,900,1800],
    ['Shih Tzu',1,2,3,4,5,4,4,650,1300],['Cavalier King Charles Spaniel',2,2,3,5,5,5,3,800,1600],
    ['Pug',1,2,4,4,5,4,2,750,1500],['Boxer',4,4,3,5,2,3,2,1000,2000],
    ['Rottweiler',4,3,3,4,1,1,2,1100,2200],['Great Dane',5,2,3,4,1,3,2,1400,2900],
    ['Bernese Mountain Dog',5,3,5,5,1,3,4,1400,2800],['Siberian Husky',4,5,5,4,1,1,3,1000,2000],
    ['Pembroke Welsh Corgi',2,4,4,5,3,4,2,800,1600],['Shetland Sheepdog',2,4,4,4,3,3,4,800,1600],
    ['Bichon Frise',1,3,1,4,5,4,5,700,1400],['Maltese',1,2,1,4,5,4,5,600,1200],
    ['Greyhound',4,2,2,4,4,4,2,800,1500],['Whippet',3,3,2,4,4,4,2,700,1400],
    ['Boston Terrier',2,3,2,5,5,4,2,750,1500],['Cocker Spaniel',2,3,3,4,4,3,4,800,1600],
    ['Doberman Pinscher',4,4,2,4,1,2,2,1000,2000],['Havanese',1,3,1,5,5,5,4,700,1400],
    ['Jack Russell Terrier',2,5,2,3,2,2,2,700,1400],['Pomeranian',1,3,2,3,5,4,4,700,1400],
    ['Australian Cattle Dog',3,5,2,3,1,1,2,800,1600],['Mastiff',5,2,3,4,1,2,2,1600,3200]];

  function score(b, uu) {
    var cSize = 100 - Math.abs(uu.size - b[1]) * 15;
    var cEnergy = 100 - Math.abs(uu.energy - b[2]) * 15;
    var cShed = 100 - Math.max(0, b[3] - uu.shedTol) * 20;
    var cGroom = 100 - Math.max(0, b[7] - uu.groomTol) * 10;
    var cKids = uu.kids === 'yes' ? (b[4] >= 4 ? 100 : (b[4] === 3 ? 70 : 40)) : 85;
    var cApt = uu.apt === 'yes' ? b[5] * 20 : 85;
    var cNov = uu.novice === 'yes' ? b[6] * 20 : 85;
    return Math.round(cSize * .20 + cEnergy * .20 + cShed * .20 + cKids * .15 + cApt * .10 + cNov * .10 + cGroom * .05);
  }

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) { return root.querySelector(sel).value; }

  function calc() {
    var a = {
      size: +val('.ta-size'), energy: +val('.ta-energy'), shedTol: +val('.ta-shed'),
      groomTol: +val('.ta-groom'), kids: val('.ta-kids'), apt: val('.ta-apt'), novice: val('.ta-novice')
    };
    var ranked = BREEDS.map(function (b) { return { b: b, s: score(b, a) }; })
      .sort(function (x, y) { return y.s - x.s; }).slice(0, 3);
    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">Your top match: ' + ranked[0].b[0] + '</div>'
      + '<div class="ta-embed-sub">from 34 breeds, scored on size, energy, shedding, household, and grooming</div>'
      + ranked.map(function (r, i) {
          return '<div class="ta-embed-match"><span class="pct">' + r.s + '%</span>'
            + '<span class="name">#' + (i + 1) + ' ' + r.b[0] + '</span>'
            + '<div class="meta">typically $' + r.b[8].toLocaleString() + '-' + r.b[9].toLocaleString() + '/yr food + routine vet</div></div>';
        }).join('')
      + '<div class="ta-embed-note">Rough planning ranges; insurance, grooming, and emergencies extra.</div>';
  }

  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogBreedQuiz = { recalc: calc };
})();
