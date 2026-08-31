/*!
 * ToolAspect Facility Maintenance Checklist Embed
 * Install: <div id="ta-facility-maintenance-checklist"></div>
 *          <script src="https://toolaspect.com/embed/facility-maintenance-checklist.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-facility-maintenance-checklist';
  var BASE = 'https://toolaspect.com/facility-maintenance-checklist/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-toggles{display:grid;grid-template-columns:1fr 1fr;gap:8px}'
    + '.ta-embed-check{display:flex;align-items:center;gap:7px;font-size:.85rem;color:var(--ta-text);background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 10px;cursor:pointer}'
    + '.ta-embed-check input{width:auto;accent-color:var(--ta-accent)}'
    + '.ta-embed-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px;text-align:center}'
    + '.ta-embed-stat{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px 6px}'
    + '.ta-embed-stat b{display:block;font-size:1.15rem;color:var(--ta-accent)}'
    + '.ta-embed-stat span{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-freq{margin-top:16px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:14px 16px}'
    + '.ta-embed-freq h4{font-size:.85rem;margin:0 0 8px;color:var(--ta-accent);border-bottom:1px solid var(--ta-border);padding-bottom:6px}'
    + '.ta-embed-freq ul{margin:0;padding:0 0 0 2px;list-style:none}'
    + '.ta-embed-freq li{font-size:.8rem;color:var(--ta-text);padding:3px 0;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-freq li:last-child{border-bottom:none}'
    + '.ta-embed-freq .ref{color:var(--ta-muted);font-size:.72rem}'
    + '.ta-embed-more{font-size:.78rem;color:var(--ta-muted);text-align:center;margin-top:10px}'
    + '.ta-embed-more a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '@media(max-width:520px){.ta-embed-toggles{grid-template-columns:1fr}.ta-embed-stats{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'facility-maintenance-checklist');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="facility-maintenance-checklist"]')) {
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
    + '<div class="ta-embed-title">Facility Maintenance Checklist</div>'
    + '<div class="ta-embed-subtitle">HVAC, fire &amp; life safety, electrical and roof tasks by frequency</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-toggles">'
    + '<label class="ta-embed-check"><input type="checkbox" data-sys="hvac" checked> HVAC</label>'
    + '<label class="ta-embed-check"><input type="checkbox" data-sys="fire" checked> Fire &amp; life safety</label>'
    + '<label class="ta-embed-check"><input type="checkbox" data-sys="elec" checked> Electrical</label>'
    + '<label class="ta-embed-check"><input type="checkbox" data-sys="plumb" checked> Plumbing</label>'
    + '<label class="ta-embed-check"><input type="checkbox" data-sys="envelope" checked> Roof &amp; envelope</label>'
    + '<label class="ta-embed-check"><input type="checkbox" data-sys="grounds" checked> Grounds</label>'
    + '<label class="ta-embed-check"><input type="checkbox" data-sys="safety" checked> Safety equipment</label>'
    + '</div>'
    + '<div class="ta-embed-stats">'
    + '<div class="ta-embed-stat"><b class="ta-n-total">—</b><span>total tasks</span></div>'
    + '<div class="ta-embed-stat"><b class="ta-n-wm">—</b><span>wk / mo</span></div>'
    + '<div class="ta-embed-stat"><b class="ta-n-qsa">—</b><span>qtr / semi / annual+</span></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-freqs"></div>'
    + '<div class="ta-embed-more">Print the full sheet with sign-off lines and code references on <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a>.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var FREQS = [['weekly', 'Weekly'], ['monthly', 'Monthly'], ['quarterly', 'Quarterly'], ['semiannual', 'Semiannual'], ['annual', 'Annual'], ['multiyear', 'Multi-Year']];
  var TASKS = [
    ['safety', 'weekly', 'Activate plumbed eyewash/shower units; verify flow', 'ANSI Z358.1'],
    ['fire', 'weekly', 'Verify unsupervised sprinkler control valves open & sealed', 'NFPA 25'],
    ['fire', 'weekly', 'Diesel fire pump churn test (if present)', 'NFPA 25'],
    ['safety', 'monthly', 'Restock first-aid kits; check expirables', 'OSHA 1910.151 App A'],
    ['fire', 'monthly', 'Extinguishers: monthly visual inspection', 'NFPA 10'],
    ['fire', 'monthly', 'Emergency lights: 30-second functional test', 'NFPA 101 7.9'],
    ['fire', 'monthly', 'Exit signs illuminated; routes clear', 'OSHA 1910.37'],
    ['fire', 'monthly', 'Read and log wet-pipe sprinkler gauges', 'NFPA 25'],
    ['hvac', 'monthly', 'Inspect/replace air filters (1-3 month cycle)', 'ASHRAE / industry'],
    ['hvac', 'monthly', 'Cooling tower water treatment check (if present)', 'ASHRAE 188'],
    ['elec', 'monthly', 'Generator 30-minute run test under load', 'NFPA 110'],
    ['plumb', 'monthly', 'Leak walk: fixtures, ceilings, water heater area', 'Industry'],
    ['envelope', 'monthly', 'Clear roof drains, gutters, downspouts', 'Industry'],
    ['grounds', 'monthly', 'Exterior lighting walk; replace burned-out lamps', 'Industry'],
    ['fire', 'quarterly', 'Waterflow alarm test via inspector’s test valve', 'NFPA 25'],
    ['fire', 'quarterly', 'Valve status inspection; tamper switch test', 'NFPA 25'],
    ['fire', 'quarterly', 'Dry/preaction low-air alarm test', 'NFPA 25'],
    ['hvac', 'quarterly', 'AHU belts, bearings, motor amps inspection', 'Manufacturer'],
    ['hvac', 'quarterly', 'Boiler water chemistry and blowdown check', 'Manufacturer'],
    ['elec', 'quarterly', 'Exercise transfer switches; check chargers', 'NFPA 110'],
    ['envelope', 'quarterly', 'Sealant, flashing, wall joint inspection', 'Industry'],
    ['grounds', 'quarterly', 'Pavement trip-hazard walk', 'Industry'],
    ['fire', 'semiannual', 'Kitchen hood suppression service', 'NFPA 96'],
    ['fire', 'semiannual', 'Kitchen hood/duct cleaning', 'NFPA 96'],
    ['hvac', 'semiannual', 'Heating/cooling changeover; coils cleaned', 'Manufacturer'],
    ['hvac', 'semiannual', 'Cooling tower clean and disinfect (if present)', 'ASHRAE 188'],
    ['elec', 'semiannual', 'UPS and battery string check', 'Industry'],
    ['fire', 'annual', 'Full sprinkler ITM visit incl. main drain test', 'NFPA 25'],
    ['fire', 'annual', 'Fire alarm system test and inspection', 'NFPA 72'],
    ['fire', 'annual', 'Extinguisher maintenance by certified technician', 'NFPA 10'],
    ['fire', 'annual', 'Emergency lighting 90-minute battery test', 'NFPA 101 7.9'],
    ['fire', 'annual', 'Fire door assembly inspection', 'NFPA 80'],
    ['fire', 'annual', 'Fire-line backflow preventer test', 'ASSE / local'],
    ['hvac', 'annual', 'Boiler inspection per jurisdiction', 'Jurisdictional'],
    ['hvac', 'annual', 'AHU deep clean; belts replaced', 'Manufacturer'],
    ['hvac', 'annual', 'Controls calibration check on critical spaces', 'Industry'],
    ['elec', 'annual', 'Generator annual maintenance + load-bank test', 'NFPA 110'],
    ['elec', 'annual', 'IR thermographic scan of switchgear', 'NFPA 70B'],
    ['plumb', 'annual', 'Water heater flush; T&P relief valve test', 'Manufacturer'],
    ['plumb', 'annual', 'Domestic backflow preventer tests', 'ASSE / local'],
    ['envelope', 'annual', 'Professional roof inspection', 'NRCA / industry'],
    ['envelope', 'annual', 'Windows, caulking, exterior door check', 'Industry'],
    ['safety', 'annual', 'Full eyewash/shower inspection to Z358.1', 'ANSI Z358.1'],
    ['grounds', 'annual', 'Drainage, grading, tree assessment', 'Industry'],
    ['fire', 'multiyear', 'Internal sprinkler pipe examination', 'NFPA 25 (5-yr)'],
    ['fire', 'multiyear', 'Replace sprinkler system gauges', 'NFPA 25 (5-yr)'],
    ['fire', 'multiyear', 'Extinguisher internal teardown (stored-pressure dry chem)', 'NFPA 10 (6-yr)'],
    ['fire', 'multiyear', 'Extinguisher hydrostatic retest', 'NFPA 10 (12-yr)']
  ];

  function activeSystems() {
    var on = {};
    root.querySelectorAll('.ta-embed-toggles input').forEach(function (cb) { on[cb.getAttribute('data-sys')] = cb.checked; });
    return on;
  }
  function render() {
    var on = activeSystems();
    var tasks = TASKS.filter(function (t) { return on[t[0]]; });
    var byFreq = {};
    tasks.forEach(function (t) { (byFreq[t[1]] = byFreq[t[1]] || []).push(t); });
    var counts = { weekly: 0, monthly: 0, quarterly: 0, semiannual: 0, annual: 0, multiyear: 0 };
    tasks.forEach(function (t) { counts[t[1]]++; });
    root.querySelector('.ta-n-total').textContent = tasks.length;
    root.querySelector('.ta-n-wm').textContent = counts.weekly + ' / ' + counts.monthly;
    root.querySelector('.ta-n-qsa').textContent = counts.quarterly + ' / ' + counts.semiannual + ' / ' + (counts.annual + counts.multiyear);
    var wrap = root.querySelector('.ta-freqs');
    wrap.innerHTML = '';
    FREQS.forEach(function (f) {
      if (!byFreq[f[0]] || !byFreq[f[0]].length) return;
      var block = document.createElement('div');
      block.className = 'ta-embed-freq';
      var h = document.createElement('h4');
      h.textContent = f[1] + ' (' + byFreq[f[0]].length + ')';
      block.appendChild(h);
      var ul = document.createElement('ul');
      byFreq[f[0]].forEach(function (t) {
        var li = document.createElement('li');
        li.innerHTML = t[2] + ' <span class="ref">· ' + t[3] + '</span>';
        ul.appendChild(li);
      });
      block.appendChild(ul);
      wrap.appendChild(block);
    });
  }
  root.addEventListener('change', render);
  render();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.facilityMaintenanceChecklist = { recalc: render };
})();
