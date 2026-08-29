/*!
 * ToolAspect Puppy Vaccination Schedule Calculator Embed
 * Install: <div id="ta-puppy-vaccination-schedule-calculator"></div>
 *          <script src="https://toolaspect.com/embed/puppy-vaccination-schedule-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-puppy-vaccination-schedule-calculator';
  var BASE = 'https://toolaspect.com/puppy-vaccination-schedule-calculator/';

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
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-check{display:inline-flex;align-items:center;font-size:.8rem;color:var(--ta-text);cursor:pointer;margin:0 10px 6px 0}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-sched{width:100%;border-collapse:collapse;font-size:.85rem;margin-top:8px}'
    + '.ta-embed-sched th,.ta-embed-sched td{padding:6px 8px;border:1px solid var(--ta-border);text-align:left}'
    + '.ta-embed-sched th{background:var(--ta-bg);color:var(--ta-muted);font-size:.72rem;text-transform:uppercase;letter-spacing:.04em}'
    + '.ta-embed-sched td.past{color:var(--ta-muted)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'puppy-vaccination-schedule-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="puppy-vaccination-schedule-calculator"]')) {
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
    + '<div class="ta-embed-title">Puppy Vaccination Schedule Calculator</div>'
    + '<div class="ta-embed-subtitle">Birthday to DHPP and rabies visit dates</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Puppy birthdate</label><input class="ta-bday" type="date" value="2026-06-15"></div>'
    + '<div class="ta-embed-form-group"><label>Lifestyle vaccines</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-bord" style="margin-right:6px" checked> Bordetella</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-lepto" style="margin-right:6px" checked> Lepto</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-flu" style="margin-right:6px"> Flu</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-lyme" style="margin-right:6px"> Lyme</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var VIS = [75, 110, 150], BORD = [15, 30, 45], LEP = [25, 35, 45];
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function chk(sel) { var el = root.querySelector(sel); return el ? el.checked : false; }
  function addWk(d, w) { return new Date(d.getTime() + w * 7 * 86400000); }
  function fd(d) { return MON[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear(); }

  function calc() {
    var bdVal = root.querySelector('.ta-bday').value;
    var bd = bdVal ? new Date(bdVal + 'T12:00:00') : new Date();
    var bord = chk('.ta-bord'), lepto = chk('.ta-lepto'), flu = chk('.ta-flu'), lyme = chk('.ta-lyme');
    var out = [0, 1, 2].map(function (i) {
      return 3 * VIS[i] + (bord ? BORD[i] : 0) + ((lepto ? 2 : 0) + (flu ? 2 : 0) + (lyme ? 2 : 0)) * LEP[i];
    });
    var extras = [lepto ? 'lepto' : null, flu ? 'flu' : null, lyme ? 'Lyme' : null].filter(Boolean);
    var rows = [
      ['Visit 1', 8, 'DHPP #1'],
      ['Visit 2', 12, 'DHPP #2' + (bord ? ' + Bordetella' : '') + (extras.length ? ' + ' + extras.join(' + ') + ' #1' : '')],
      ['Visit 3', 16, 'DHPP #3 + rabies' + (extras.length ? ' + ' + extras.join(' + ') + ' #2' : '')],
      ['Boosters', 68, 'DHPP + rabies, 1 year after final dose']
    ];
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var trs = rows.map(function (r) {
      var d = addWk(bd, r[1]);
      return '<tr' + (d < today ? ' class="past"' : '') + '><td>' + r[0] + '</td><td>' + r[2] + '</td><td>' + fd(d) + '</td></tr>';
    }).join('');
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(out[1]) + '</div>'
      + '<div class="ta-embed-sub">first-year vaccines &middot; range ' + usd(out[0]) + ' to ' + usd(out[2]) + '</div>'
      + '<table class="ta-embed-sched"><thead><tr><th>Visit</th><th>Given</th><th>Date</th></tr></thead><tbody>' + trs + '</tbody></table>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.puppyVaccinationScheduleCalculator = { recalc: calc };
})();
