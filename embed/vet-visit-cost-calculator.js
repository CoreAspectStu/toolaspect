/*!
 * ToolAspect Vet Visit Cost Calculator Embed
 * Install: <div id="ta-vet-visit-cost"></div>
 *          <script src="https://toolaspect.com/embed/vet-visit-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-vet-visit-cost';
  var BASE = 'https://toolaspect.com/vet-visit-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-mode-toggle{display:flex;gap:6px;margin-bottom:14px;justify-content:center}'
    + '.ta-embed-mode-btn{background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;'
    + 'padding:7px 16px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode-btn.ta-active{background:rgba(37,99,235,.1);border-color:var(--ta-accent);color:var(--ta-text);font-weight:600}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-mode-btn.ta-active{background:rgba(96,165,250,.12)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-procs{display:flex;flex-direction:column;gap:6px;max-height:260px;overflow-y:auto;padding-right:4px}'
    + '.ta-embed-proc{display:flex;align-items:center;gap:8px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 10px;cursor:pointer;font-size:.85rem}'
    + '.ta-embed-proc input{width:16px;height:16px;flex-shrink:0}'
    + '.ta-embed-proc span{flex:1}'
    + '.ta-embed-proc em{font-style:normal;color:var(--ta-muted);font-size:.78rem;white-space:nowrap}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:flex;justify-content:center;gap:24px;margin-top:10px;font-size:.85rem;color:var(--ta-text)}'
    + '.ta-embed-range span b{display:block;font-size:1.05rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-range{gap:14px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'vet-visit-cost');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="vet-visit-cost"]')) {
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
    + '<div class="ta-embed-title">Vet Visit Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">National ranges, routine or emergency</div>'
    + '<div class="ta-embed-mode-toggle">'
    + '<button type="button" class="ta-embed-mode-btn ta-active" data-mode="routine">Routine</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-mode="emergency">Emergency</button>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Species</label><select class="ta-species"><option value="dog">Dog</option><option value="cat">Cat</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Region</label><select class="ta-region">'
    + '<option value="0.9">Small town / rural</option><option value="1" selected>Suburban</option>'
    + '<option value="1.15">Major metro</option><option value="1.3">High-cost city</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-procs"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a> — estimates only, not veterinary advice.</div>';
  target.appendChild(root);

  var ROUTINE = [
    ['Office visit / wellness exam', 50, 65, 90, 'all', 1],
    ['Rabies vaccine', 20, 30, 50, 'all', 1],
    ['DHPP combo vaccine', 20, 35, 50, 'dog', 1],
    ['FVRCP combo vaccine', 20, 35, 50, 'cat', 1],
    ['Heartworm test', 35, 45, 75, 'dog', 1],
    ['Fecal exam', 25, 35, 60, 'all', 1],
    ['Wellness bloodwork', 100, 150, 250, 'all', 0],
    ['X-rays (1-2 views)', 100, 175, 300, 'all', 0],
    ['Dental cleaning', 300, 500, 800, 'all', 0],
    ['Spay/neuter', 100, 400, 800, 'all', 0]
  ];
  var EMERGENCY = [
    ['Emergency exam & triage', 130, 180, 250, 'all', 1],
    ['Emergency bloodwork panel', 150, 220, 350, 'all', 1],
    ['X-rays (2-3 views)', 150, 250, 450, 'all', 1],
    ['IV fluids & meds', 75, 120, 200, 'all', 0],
    ['Overnight hospitalization (per night)', 600, 900, 1500, 'all', 0],
    ['Urinary blockage — unblock + 2-night stay', 1000, 1800, 3000, 'cat', 1],
    ['Emergency surgery (bloat, C-section)', 2000, 3500, 6000, 'all', 0]
  ];
  var mode = 'routine';
  var procsEl = root.querySelector('.ta-embed-procs');
  var resultEl = root.querySelector('.ta-embed-result');

  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function procs() { return mode === 'routine' ? ROUTINE : EMERGENCY; }

  function renderProcs() {
    var species = root.querySelector('.ta-species').value;
    procsEl.innerHTML = '';
    procs().forEach(function (p, i) {
      if (p[4] !== 'all' && p[4] !== species) return;
      var row = document.createElement('label');
      row.className = 'ta-embed-proc';
      row.innerHTML = '<input type="checkbox" data-i="' + i + '"' + (p[5] ? ' checked' : '') + '>'
        + '<span>' + p[0] + '</span><em>$' + p[1] + '&ndash;$' + p[3] + '</em>';
      procsEl.appendChild(row);
    });
  }

  function calc() {
    var mult = parseFloat(root.querySelector('.ta-region').value);
    var lo = 0, ty = 0, hi = 0, n = 0;
    procsEl.querySelectorAll('input[type=checkbox]').forEach(function (cb) {
      if (!cb.checked) return;
      var p = procs()[+cb.getAttribute('data-i')];
      lo += p[1]; ty += p[2]; hi += p[3]; n++;
    });
    if (!n) {
      resultEl.innerHTML = '<div class="ta-embed-big">&mdash;</div><div class="ta-embed-sub">Check the procedures on your estimate</div>';
      return;
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(ty * mult) + '</div>'
      + '<div class="ta-embed-sub">typical total, ' + n + ' procedure' + (n === 1 ? '' : 's') + ' &times; ' + Math.round(mult * 100) + '% regional factor</div>'
      + '<div class="ta-embed-range">'
      + '<span>Low<b>' + money(lo * mult) + '</b></span>'
      + '<span>High<b>' + money(hi * mult) + '</b></span>'
      + '</div>';
  }

  root.addEventListener('change', function (e) {
    if (e.target.classList.contains('ta-species')) renderProcs();
    calc();
  });
  root.querySelector('.ta-embed-mode-toggle').addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-mode-btn');
    if (!btn) return;
    mode = btn.getAttribute('data-mode');
    root.querySelectorAll('.ta-embed-mode-btn').forEach(function (b) { b.classList.remove('ta-active'); });
    btn.classList.add('ta-active');
    renderProcs();
    calc();
  });

  renderProcs();
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.vetVisitCost = { recalc: calc };
})();
