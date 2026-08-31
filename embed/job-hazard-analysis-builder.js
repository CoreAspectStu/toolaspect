/*!
 * ToolAspect Job Hazard Analysis Builder Embed
 * Install: <div id="ta-job-hazard-analysis-builder"></div>
 *          <script src="https://toolaspect.com/embed/job-hazard-analysis-builder.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-job-hazard-analysis-builder';

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
    + '.ta-embed-chips{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px}'
    + '.ta-embed-chip{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:6px 12px;font-size:.8rem}'
    + '.ta-embed-chip strong{color:var(--ta-text)}'
    + '.ta-embed-step{padding:8px 0;border-bottom:1px solid var(--ta-bg);font-size:.84rem;text-align:left}'
    + '.ta-embed-step:last-child{border-bottom:none}'
    + '.ta-embed-step .st{font-weight:600}'
    + '.ta-embed-step .sv{color:var(--ta-muted);font-size:.76rem;margin-top:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'job-hazard-analysis-builder');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="job-hazard-analysis-builder"]')) {
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
  if (target.getAttribute('data-theme')) root.setAttribute('data-theme', target.getAttribute('data-theme'));

  var PRESETS = {
    roofing: { name: 'Roofing tear-off & reshingle', steps: [
      { step: 'Stage materials and inspect roof', haz: 'Strain; dropped material', s: 3, p: 2 },
      { step: 'Set and access ladder', haz: 'Ladder kick-out; fall to grade', s: 4, p: 2 },
      { step: 'Tear off existing shingles', haz: 'Unprotected-edge fall; nails; heat', s: 5, p: 3 },
      { step: 'Inspect and repair deck', haz: 'Fall through soft deck', s: 4, p: 2 },
      { step: 'Install underlayment and shingles', haz: 'Leading-edge fall; dropped tools', s: 5, p: 3 },
      { step: 'Cleanup and demobilize', haz: 'Ladder descent; nails in debris', s: 3, p: 2 }
    ]},
    trench: { name: 'Trenching & excavation', steps: [
      { step: 'Locate utilities, traffic control', haz: 'Utility strike; struck-by', s: 3, p: 2 },
      { step: 'Excavate trench', haz: 'Cave-in; equipment rollover', s: 5, p: 3 },
      { step: 'Enter trench for pipe work', haz: 'Cave-in; falling loads; atmosphere', s: 4, p: 2 },
      { step: 'Backfill and compact', haz: 'Struck-by equipment', s: 4, p: 2 },
      { step: 'Restore site', haz: 'Uneven ground; open utilities', s: 3, p: 2 }
    ]},
    scaffold: { name: 'Scaffold erection & work', steps: [
      { step: 'Stage and inspect components', haz: 'Pinch points; damaged parts', s: 3, p: 2 },
      { step: 'Erect scaffold', haz: 'Fall during erection; collapse', s: 5, p: 3 },
      { step: 'Work from platform', haz: 'Fall at 10 ft; falling tools', s: 4, p: 2 },
      { step: 'Move or alter scaffold', haz: 'Collapse during modification', s: 4, p: 2 },
      { step: 'Dismantle', haz: 'Dropped frames; unstable towers', s: 3, p: 2 }
    ]}
  };

  root.innerHTML = ''
    + '<div class="ta-embed-title">Job Hazard Analysis</div>'
    + '<div class="ta-embed-subtitle">Risk score each step: severity &times; probability (1-25)</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Job preset</label><select id="ta-jha-pre">'
    + Object.keys(PRESETS).map(function (k) { return '<option value="' + k + '">' + PRESETS[k].name + '</option>'; }).join('')
    + '</select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Severity (1-5)</label><select id="ta-jha-s">'
    + [1,2,3,4,5].map(function (i) { return '<option value="' + i + '"' + (i === 5 ? ' selected' : '') + '>' + i + '</option>'; }).join('')
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Probability (1-5)</label><select id="ta-jha-p">'
    + [1,2,3,4,5].map(function (i) { return '<option value="' + i + '"' + (i === 3 ? ' selected' : '') + '>' + i + '</option>'; }).join('')
    + '</select></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"><div class="ta-embed-big" id="ta-jha-score">—</div>'
    + '<div class="ta-embed-sub" id="ta-jha-band">risk band</div></div>'
    + '<div class="ta-embed-card"><div id="ta-jha-steps"></div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="https://toolaspect.com/job-hazard-analysis-builder/" target="_blank" rel="noopener">ToolAspect</a></div>';

  target.appendChild(root);

  function $(id) { return document.getElementById(id); }
  function band(sc) {
    if (sc >= 15) return ['Critical', '#dc2626'];
    if (sc >= 10) return ['High', '#d97706'];
    if (sc >= 5) return ['Medium', '#2563eb'];
    return ['Low', '#16a34a'];
  }

  function calcScore() {
    var s = +$('ta-jha-s').value, p = +$('ta-jha-p').value;
    var sc = s * p, b = band(sc);
    $('ta-jha-score').textContent = sc;
    $('ta-jha-score').style.color = b[1];
    $('ta-jha-band').textContent = b[0] + ' — ' + (sc >= 15 ? 'do not start until controls reduce the score'
      : sc >= 10 ? 'additional controls before start' : sc >= 5 ? 'verify controls in briefing' : 'proceed, standard controls');
  }

  function renderSteps() {
    var preset = PRESETS[$('ta-jha-pre').value];
    var scores = preset.steps.map(function (t) { return t.s * t.p; });
    var total = scores.reduce(function (a, b) { return a + b; }, 0);
    var max = Math.max.apply(null, scores);
    var crit = scores.filter(function (x) { return x >= 15; }).length;
    var html = preset.steps.map(function (t) {
      var b = band(t.s * t.p);
      return '<div class="ta-embed-step"><div class="st">' + t.step + ' — <span style="color:' + b[1] + ';font-weight:700">' + (t.s * t.p) + ' ' + b[0] + '</span></div>'
        + '<div class="sv">Hazards: ' + t.haz + '</div></div>';
    }).join('');
    html += '<div class="ta-embed-chips" style="margin-top:10px">'
      + '<span class="ta-embed-chip"><strong>' + preset.steps.length + '</strong> steps</span>'
      + '<span class="ta-embed-chip"><strong>' + total + '</strong> total</span>'
      + '<span class="ta-embed-chip"><strong>' + max + '</strong> worst</span>'
      + '<span class="ta-embed-chip"><strong>' + crit + '</strong> critical</span></div>';
    $('ta-jha-steps').innerHTML = html;
  }

  $('ta-jha-pre').addEventListener('change', renderSteps);
  $('ta-jha-s').addEventListener('change', calcScore);
  $('ta-jha-p').addEventListener('change', calcScore);
  calcScore();
  renderSteps();
})();
