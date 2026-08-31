/*!
 * ToolAspect Toolbox Talk Library Embed
 * Install: <div id="ta-toolbox-talk-template-library"></div>
 *          <script src="https://toolaspect.com/embed/toolbox-talk-template-library.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-toolbox-talk-template-library';

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
    + '.ta-embed-chips{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px}'
    + '.ta-embed-chip{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:6px 12px;font-size:.8rem}'
    + '.ta-embed-chip strong{color:var(--ta-text)}'
    + '.ta-embed-topic{padding:8px 0;border-bottom:1px solid var(--ta-bg);font-size:.86rem;text-align:left}'
    + '.ta-embed-topic:last-child{border-bottom:none}'
    + '.ta-embed-topic .st{font-weight:700}'
    + '.ta-embed-topic .sv{color:var(--ta-muted);font-size:.78rem;margin-top:3px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'toolbox-talk-template-library');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="toolbox-talk-template-library"]')) {
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

  var SAMPLES = [
    { cat: 'Falls & Heights', title: 'Ladder safety', ref: '29 CFR 1926.1053',
      pts: ['Inspect before every use: rungs, rails, feet, spreaders', 'Extend side rails 3 ft above the landing; secure the top', '4:1 pitch — 1 ft out for every 4 ft up', 'Three points of contact, one worker at a time'] },
    { cat: 'Equipment & Machinery', title: 'Lockout / tagout', ref: '29 CFR 1910.147',
      pts: ['Isolate every energy source: electrical, hydraulic, pneumatic, gravity', 'Lock AND tag; each worker applies a personal lock', 'Verify zero energy by test-start before body contact', 'Never remove another person’s lock'] },
    { cat: 'Health & Environment', title: 'Heat illness prevention', ref: 'OSHA National Emphasis Program',
      pts: ['Water every 20 minutes, not waiting for thirst', 'Acclimatize new workers — the first week is the risk', 'Shade and cool-down breaks; buddy checks in heat waves', 'Heat stroke = medical emergency: cool first, transport second'] },
    { cat: 'Excavation & Trenching', title: 'Trench protective systems', ref: '29 CFR 1926.652',
      pts: ['Protect at 5 ft or when the competent person sees cave-in potential', 'Slope, shore, or shield — soil type decides the slope', 'Competent person inspects daily and after every rainstorm', 'Ladder within 25 ft of any worker in the trench'] }
  ];

  root.innerHTML = ''
    + '<div class="ta-embed-title">Toolbox Talk Library</div>'
    + '<div class="ta-embed-subtitle">Annual safety-meeting planner + sample talk sheets</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Crews</label><input type="number" id="ta-tt-crews" value="4" min="1"></div>'
    + '<div class="ta-embed-form-group"><label>Talks / wk</label><input type="number" id="ta-tt-pw" value="1" min="1"></div>'
    + '<div class="ta-embed-form-group"><label>Minutes</label><input type="number" id="ta-tt-mins" value="15" min="5"></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"><div class="ta-embed-big" id="ta-tt-talks">—</div>'
    + '<div class="ta-embed-sub">talks per year — <strong id="ta-tt-hours">—</strong> meeting hours</div></div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Sample talk sheet</label><select id="ta-tt-topic">'
    + SAMPLES.map(function (t, i) { return '<option value="' + i + '">' + t.title + ' (' + t.cat + ')</option>'; }).join('')
    + '</select></div>'
    + '<div id="ta-tt-sheet"></div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="https://toolaspect.com/toolbox-talk-template-library/" target="_blank" rel="noopener">ToolAspect — all 50 topics + sign-off sheet</a></div>';

  target.appendChild(root);

  function $(id) { return document.getElementById(id); }
  function vv(id) { return parseFloat($(id).value) || 0; }

  function calc() {
    var crews = Math.max(1, vv('ta-tt-crews')), pw = Math.max(1, vv('ta-tt-pw')), mins = Math.max(5, vv('ta-tt-mins'));
    var talks = crews * pw * 52;
    $('ta-tt-talks').textContent = talks.toLocaleString('en-US');
    $('ta-tt-hours').textContent = (Math.round(talks * mins / 60 * 10) / 10).toLocaleString('en-US');
  }

  function renderTopic() {
    var t = SAMPLES[+$('ta-tt-topic').value];
    var html = '<div class="ta-embed-topic"><div class="st">' + t.title + ' — ' + t.ref + '</div>'
      + t.pts.map(function (p) { return '<div class="sv">&bull; ' + p + '</div>'; }).join('') + '</div>';
    $('ta-tt-sheet').innerHTML = html;
  }

  ['ta-tt-crews', 'ta-tt-pw', 'ta-tt-mins'].forEach(function (id) { $(id).addEventListener('input', calc); });
  $('ta-tt-topic').addEventListener('change', renderTopic);
  calc();
  renderTopic();
})();
