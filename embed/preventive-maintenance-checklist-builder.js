/*!
 * ToolAspect Preventive Maintenance Checklist Builder Embed
 * Install: <div id="ta-preventive-maintenance-checklist-builder"></div>
 *          <script src="https://toolaspect.com/embed/preventive-maintenance-checklist-builder.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-preventive-maintenance-checklist-builder';

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
    + '.ta-embed-freq{margin-top:10px;text-align:left}'
    + '.ta-embed-freq h4{margin:12px 0 4px;font-size:.8rem;text-transform:uppercase;letter-spacing:.04em;color:var(--ta-muted)}'
    + '.ta-embed-task{display:flex;gap:8px;align-items:flex-start;padding:4px 0;font-size:.85rem;border-bottom:1px solid var(--ta-bg)}'
    + '.ta-embed-task:last-child{border-bottom:none}'
    + '.ta-embed-task .bx{width:12px;height:12px;border:1.5px solid var(--ta-muted);border-radius:3px;margin-top:4px;flex:0 0 auto}'
    + '.ta-embed-task .mn{margin-left:auto;color:var(--ta-muted);font-size:.75rem;white-space:nowrap}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'preventive-maintenance-checklist-builder');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="preventive-maintenance-checklist-builder"]')) {
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
    compressor: { name: 'Rotary-screw air compressor', tasks: [
      ['Drain condensate trap', 'daily', 3], ['Check oil level', 'daily', 2],
      ['Inspect belts and hoses', 'weekly', 10], ['Air-leak check', 'monthly', 20],
      ['Clean intake filter', 'monthly', 15], ['Pull oil analysis sample', 'quarterly', 15],
      ['Inspect unloader valve', 'quarterly', 20], ['Clean oil cooler fins', 'quarterly', 25],
      ['Replace oil filter', 'semiannual', 30], ['Change compressor oil', 'annual', 60],
      ['Inspect motor and electrical', 'annual', 30], ['Replace air/oil separator', 'annual', 45]
    ]},
    hvac: { name: 'Rooftop HVAC unit', tasks: [
      ['Replace filter(s)', 'monthly', 15], ['Check condensate drain', 'monthly', 10],
      ['Inspect belts and sheaves', 'quarterly', 10], ['Clean condenser coils', 'semiannual', 45],
      ['Check refrigerant charge', 'semiannual', 30], ['Lubricate bearings', 'annual', 20]
    ]},
    forklift: { name: 'Forklift (LP / IC)', tasks: [
      ['Visual: forks, mast, tires', 'daily', 5], ['Check oil, coolant, hyd. level', 'daily', 4],
      ['Battery / LP connections', 'daily', 3], ['Grease mast and carriage', 'weekly', 15],
      ['Air cleaner check', 'quarterly', 15], ['Engine oil and filter (250 hr)', 'quarterly', 45],
      ['Hydraulic filter', 'semiannual', 40], ['Inspect and adjust brakes', 'semiannual', 45],
      ['Transmission fluid change', 'annual', 60], ['Coolant flush and test', 'annual', 40],
      ['Load test and chain inspection', 'annual', 45]
    ]},
    generator: { name: 'Diesel generator', tasks: [
      ['Walk-around and leak check', 'weekly', 10], ['Exercise run 30 min under load', 'weekly', 30],
      ['Check oil, coolant, fuel', 'weekly', 5], ['Battery voltage and cables', 'monthly', 10],
      ['Fuel quality / water separator', 'monthly', 15], ['Load-bank test', 'annual', 120],
      ['Oil and filter (200-250 hr or annual)', 'annual', 60], ['Coolant testing', 'annual', 30],
      ['Transfer switch exercise', 'annual', 40]
    ]},
    conveyor: { name: 'Belt conveyor', tasks: [
      ['E-stop and pull-cord test', 'daily', 5], ['Visual: tracking, guards', 'daily', 5],
      ['Bearing temps and noise', 'weekly', 10], ['Inspect lagging and splice', 'monthly', 20],
      ['Tension check and adjust', 'monthly', 25], ['Lubricate drive and idlers', 'monthly', 30],
      ['Pulley and idler alignment', 'quarterly', 45], ['Belt wear measurement', 'semiannual', 40],
      ['Reducer oil change', 'annual', 60], ['Structural and guard audit', 'annual', 50]
    ]}
  };
  var FREQ_ORDER = ['daily', 'weekly', 'monthly', 'quarterly', 'semiannual', 'annual'];

  root.innerHTML = ''
    + '<div class="ta-embed-title">Preventive Maintenance Checklist</div>'
    + '<div class="ta-embed-subtitle">Task list, annual PM hours, and labor cost by equipment type</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Equipment type</label><select id="ta-pmc-eq">'
    + Object.keys(PRESETS).map(function (k) { return '<option value="' + k + '">' + PRESETS[k].name + '</option>'; }).join('')
    + '</select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Operating days / yr</label><input type="number" id="ta-pmc-wd" value="250" min="1" max="365"></div>'
    + '<div class="ta-embed-form-group"><label>Tech rate ($/hr)</label><input type="number" id="ta-pmc-rate" value="85" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Tasks</label><input type="text" id="ta-pmc-count" readonly style="background:var(--ta-bg)"></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"><div class="ta-embed-big" id="ta-pmc-cost">—</div>'
    + '<div class="ta-embed-sub" id="ta-pmc-sub">annual PM labor</div>'
    + '<div class="ta-embed-chips">'
    + '<span class="ta-embed-chip"><strong id="ta-pmc-hrs">—</strong> PM hrs/yr</span>'
    + '<span class="ta-embed-chip"><strong id="ta-pmc-min">—</strong> min/day daily tasks</span>'
    + '</div></div>'
    + '<div class="ta-embed-card"><div id="ta-pmc-list"></div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="https://toolaspect.com/preventive-maintenance-checklist-builder/" target="_blank" rel="noopener">ToolAspect</a></div>';

  target.appendChild(root);

  function $(id) { return document.getElementById(id); }
  function fmt$(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function calc() {
    var key = $('ta-pmc-eq').value;
    var preset = PRESETS[key];
    var wd = Math.max(1, parseFloat($('ta-pmc-wd').value) || 250);
    var rate = Math.max(0, parseFloat($('ta-pmc-rate').value) || 0);
    var per = { daily: wd, weekly: 52, monthly: 12, quarterly: 4, semiannual: 2, annual: 1 };
    var totalMin = 0, dailyMin = 0;
    preset.tasks.forEach(function (t) { totalMin += t[2] * per[t[1]]; if (t[1] === 'daily') dailyMin += t[2]; });
    var hrs = totalMin / 60;
    $('ta-pmc-cost').textContent = fmt$(hrs * rate);
    $('ta-pmc-sub').textContent = 'annual PM labor — ' + preset.name.toLowerCase();
    $('ta-pmc-hrs').textContent = (Math.round(hrs * 10) / 10);
    $('ta-pmc-min').textContent = dailyMin;
    $('ta-pmc-count').value = preset.tasks.length + ' tasks';
    var html = '';
    FREQ_ORDER.forEach(function (f) {
      var rows = preset.tasks.filter(function (t) { return t[1] === f; });
      if (!rows.length) return;
      html += '<div class="ta-embed-freq"><h4>' + f + '</h4>';
      rows.forEach(function (t) {
        html += '<div class="ta-embed-task"><span class="bx"></span><span>' + t[0] + '</span><span class="mn">~' + t[2] + ' min</span></div>';
      });
      html += '</div>';
    });
    $('ta-pmc-list').innerHTML = html;
  }

  $('ta-pmc-eq').addEventListener('change', calc);
  ['ta-pmc-wd', 'ta-pmc-rate'].forEach(function (id) { $(id).addEventListener('input', calc); });
  calc();
})();
