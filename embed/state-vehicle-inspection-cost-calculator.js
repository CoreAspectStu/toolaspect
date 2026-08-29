/*!
 * ToolAspect State Vehicle Inspection Cost Calculator Embed
 * Install: <div id="ta-state-vehicle-inspection-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/state-vehicle-inspection-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-state-vehicle-inspection-cost-calculator';
  var BASE = 'https://toolaspect.com/state-vehicle-inspection-cost-calculator/';

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
    + '.ta-embed-line{color:var(--ta-text);font-size:.9rem;margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'state-vehicle-inspection-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="state-vehicle-inspection-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Car Inspection Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">State inspection fees for NY, PA, TX, VA &amp; MO</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>State</label>'
    + '<select class="ta-state">'
    + '<option value="ny">New York</option><option value="pa">Pennsylvania</option>'
    + '<option value="tx">Texas</option><option value="va">Virginia</option>'
    + '<option value="mo">Missouri</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>County situation</label>'
    + '<select class="ta-county"></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var stateSel = root.querySelector('.ta-state');
  var countySel = root.querySelector('.ta-county');

  var COUNTY_OPTIONS = {
    ny: [['ems', 'NYC / LI / Westchester / Rockland (NYVIP)'], ['plain', 'Upstate (no emissions)']],
    pa: [['ems', 'Emissions county'], ['plain', 'Non-emissions county']],
    tx: [['none', 'Outside emissions counties'], ['dfw', 'DFW or Houston county'], ['ep', 'El Paso / Travis / Williamson']],
    va: [['ems', 'Northern Virginia emissions locality'], ['plain', 'Rest of Virginia']],
    mo: [['ems', 'St. Louis region + older vehicle'], ['plain', 'Older vehicle, outside St. Louis'], ['newer', 'Newer vehicle (under 10 yrs / 150k)']]
  };

  function compute(st, c) {
    switch (st) {
      case 'ny':
        if (c === 'ems') return { hero: '$21', sub: 'Both fees capped by state law', req: 'Safety + OBD emissions, every 12 months', ann: '$21/yr' };
        return { hero: '$10', sub: 'Statutory maximum', req: 'Safety inspection only, every 12 months', ann: '$10/yr' };
      case 'pa':
        if (c === 'ems') return { hero: '$75 – $120', sub: 'Station-set: $35-$80 safety + $12 sticker + $38-$45 emissions', req: 'Safety + emissions, every 12 months', ann: '≈$98/yr' };
        return { hero: '$47 – $92', sub: 'No state cap on the labor fee', req: 'Safety inspection only, every 12 months', ann: '≈$58/yr' };
      case 'tx':
        if (c === 'none') return { hero: '$7.50', sub: 'Inspection program replacement fee at registration', req: 'No inspection required since 1/1/2025', ann: '$7.50/yr' };
        if (c === 'dfw') return { hero: '$26', sub: '$18.50 emissions + $7.50 replacement fee', req: 'Emissions only, every 12 months', ann: '$26/yr' };
        return { hero: '$33', sub: '$25.50 emissions + $7.50 replacement fee', req: 'Emissions only, every 12 months', ann: '$33/yr' };
      case 'va':
        if (c === 'ems') return { hero: '$50', sub: 'Emissions year total; $35/yr averaged', req: 'Safety annual + emissions every 24 months', ann: '≈$35/yr' };
        return { hero: '$20', sub: 'Statutory maximum (motorcycles $12)', req: 'Safety inspection only, every 12 months', ann: '$20/yr' };
      case 'mo':
        if (c === 'newer') return { hero: '$0', sub: 'Under 10 years old and under 150k miles', req: 'No inspection required', ann: '—' };
        if (c === 'ems') return { hero: '$36', sub: '$12 safety + $24 emissions per 2-yr cycle', req: 'Safety + emissions, every 24 months', ann: '≈$18/yr' };
        return { hero: '$12', sub: 'Statutory cap per 2-yr cycle', req: 'Safety inspection, every 24 months', ann: '≈$6/yr' };
    }
  }

  function renderCounties() {
    countySel.innerHTML = '';
    COUNTY_OPTIONS[stateSel.value].forEach(function (o) {
      var opt = document.createElement('option');
      opt.value = o[0];
      opt.textContent = o[1];
      countySel.appendChild(opt);
    });
  }

  function calc() {
    var r = compute(stateSel.value, countySel.value);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + r.hero + '</div>'
      + '<div class="ta-embed-sub">' + r.sub + '</div>'
      + '<div class="ta-embed-line"><strong>' + r.req + '</strong></div>'
      + '<div class="ta-embed-line">Annualized: ' + r.ann + '</div>';
  }

  stateSel.addEventListener('change', function () { renderCounties(); calc(); });
  countySel.addEventListener('change', calc);
  renderCounties();
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.stateVehicleInspectionCostCalculator = { recalc: calc };
})();
