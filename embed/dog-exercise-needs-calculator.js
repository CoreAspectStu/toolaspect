/*!
 * ToolAspect Dog Exercise Needs Calculator Embed
 * Install: <div id="ta-dog-exercise-needs-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-exercise-needs-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-exercise-needs-calculator';
  var BASE = 'https://toolaspect.com/dog-exercise-needs-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-row{display:flex;justify-content:space-between;font-size:.85rem;padding:6px 0;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-row:last-child{border-bottom:none}'
    + '.ta-embed-note{font-size:.72rem;color:var(--ta-muted);line-height:1.5;margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-exercise-needs-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-exercise-needs-calculator"]')) {
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
    + '<div class="ta-embed-title">Dog Exercise Needs Calculator</div>'
    + '<div class="ta-embed-subtitle">Minutes per day by breed, age, and weather — plus the puppy 5-minute rule</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Breed</label><select class="ta-breed">'
    + '<option value="120,180">Border collie / husky / Malinois</option>'
    + '<option value="90,120">Australian shepherd / GSD / GSP</option>'
    + '<option value="60,120" selected>Labrador / golden / boxer</option>'
    + '<option value="60,90">Beagle / corgi / poodle / rottie</option>'
    + '<option value="45,90">Great Dane / greyhound</option>'
    + '<option value="30,60">Basset / dachshund / small mixed</option>'
    + '<option value="20,40">Bulldog / Frenchie / pug (flat-faced)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Life stage</label><select class="ta-stage">'
    + '<option value="puppy">Puppy (2–6 mo)</option><option value="adult" selected>Adult</option>'
    + '<option value="senior">Senior (7+)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Weather</label><select class="ta-weather">'
    + '<option value="1" selected>Mild</option><option value="0.7">Hot (85°F+)</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Puppy age (months)</label><input type="number" class="ta-months" value="4" min="2" max="6" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Flat-faced breed?</label><select class="ta-brachy">'
    + '<option value="no" selected>No</option><option value="yes">Yes</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-card ta-details"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var detailsEl = root.querySelector('.ta-details');

  function num(sel) { return parseFloat(root.querySelector(sel).value) || 0; }

  function calc() {
    var pair = root.querySelector('.ta-breed').value.split(',');
    var lo = +pair[0], hi = +pair[1];
    var stage = root.querySelector('.ta-stage').value;
    var weather = num('.ta-weather') || 1;
    var months = num('.ta-months') || 4;
    var brachy = root.querySelector('.ta-brachy').value === 'yes';
    var dispLo, dispHi;
    if (stage === 'puppy') {
      dispLo = 5 * months; dispHi = 5 * months * 2;
      resultEl.innerHTML = '<div class="ta-embed-big">' + dispLo + '–' + dispHi + ' min/day</div>'
        + '<div class="ta-embed-sub">Puppy 5-minute rule: ' + dispLo + ' min per session, up to twice a day</div>';
    } else {
      if (stage === 'senior') { lo *= 0.6; hi *= 0.7; }
      lo *= weather; hi *= weather;
      dispLo = Math.round(lo / 5) * 5; dispHi = Math.round(hi / 5) * 5;
      resultEl.innerHTML = '<div class="ta-embed-big">' + dispLo + '–' + dispHi + ' min/day</div>'
        + '<div class="ta-embed-sub">' + (dispLo * 7 / 60).toFixed(1) + '–' + (dispHi * 7 / 60).toFixed(1) + ' hours per week</div>';
    }
    detailsEl.innerHTML =
      '<div class="ta-embed-row"><span>Sessions</span><strong>' + (stage === 'puppy' ? '2 short' : '2–3') + '</strong></div>'
      + '<div class="ta-embed-row"><span>Mental enrichment</span><strong>15–30 min sniffing / puzzles</strong></div>'
      + '<div class="ta-embed-row"><span>Sleep needed</span><strong>' + (stage === 'puppy' ? '18–20 h' : stage === 'senior' ? '14–16 h' : '12–14 h') + '</strong></div>'
      + (brachy ? '<div class="ta-embed-note">Flat-faced breeds overheat fast — keep sessions short, use a harness, and skip warm-day midday exercise entirely.</div>' : '')
      + '<div class="ta-embed-note">General guidance for healthy dogs, not veterinary advice — individual needs vary.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogExerciseNeedsCalculator = { recalc: calc };
})();
