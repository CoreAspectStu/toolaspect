/*!
 * ToolAspect EV Charger Installation Cost Calculator Embed
 * Install: <div id="ta-ev-charger-installation-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/ev-charger-installation-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-ev-charger-installation-cost-calculator';
  var BASE = 'https://toolaspect.com/ev-charger-installation-cost-calculator/';

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
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'ev-charger-installation-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="ev-charger-installation-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">EV Charger Installation Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Level 2 home install: hardware + electrician + wiring + panel</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Charger tier</label><select class="ta-hw">'
    + '<option value="basic" selected>Basic 40A plug-in ($300–$500)</option>'
    + '<option value="smart">Smart 48A hardwired ($450–$800)</option>'
    + '<option value="premium">Premium 48A+ ($600–$1,200)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Connection</label><select class="ta-wire">'
    + '<option value="plugin">Plug-in (NEMA 14-50)</option>'
    + '<option value="hardwired" selected>Hardwired</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Wire run (ft)</label><input type="number" class="ta-dist" value="75" min="5" max="400" step="5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Panel</label><select class="ta-panel">'
    + '<option value="none" selected>Spare capacity</option>'
    + '<option value="evems">EVEMS load mgmt (+$400–$900)</option>'
    + '<option value="upgrade">200A upgrade (+$1,500–$3,500)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Electrician ($/hr)</label><input type="number" class="ta-rate" value="125" min="50" max="300" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Permit ($)</label><input type="number" class="ta-permit" value="125" min="0" max="600" step="25"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var HW = { basic: [300, 500], smart: [450, 800], premium: [600, 1200] };
  var LAB = { plugin: [2.0, 3.0], hardwired: [2.5, 4.0] };
  var PANEL = { none: [0, 0], evems: [400, 900], upgrade: [1500, 3500] };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var hw = HW[val('.ta-hw')], lab = LAB[val('.ta-wire')], panel = PANEL[val('.ta-panel')];
    var dist = num('.ta-dist'), rate = num('.ta-rate'), permit = num('.ta-permit');
    if (!hw || !lab || !panel || rate <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Pick a charger and rate</div>';
      return;
    }
    var extra = Math.max(0, dist - 25);
    var lo = hw[0] + lab[0] * rate + extra * 4 + panel[0] + permit;
    var hi = hw[1] + lab[1] * rate + extra * 8 + panel[1] + permit;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">charger ' + money(hw[0]) + '–' + money(hw[1])
      + ' + ' + lab[0] + '–' + lab[1] + ' hrs × $' + rate + '/hr'
      + (extra > 0 ? ' + ' + extra + ' ft extra wire' : '')
      + ' + permit ' + money(permit) + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Hardware</div><div class="rv">' + money(hw[0]) + '–' + money(hw[1]) + '</div></div>'
      + '<div><div class="rl">Labor</div><div class="rv">' + money(lab[0] * rate) + '–' + money(lab[1] * rate) + '</div></div>'
      + '<div><div class="rl">Panel work</div><div class="rv">' + (panel[0] > 0 ? money(panel[0]) + '–' + money(panel[1]) : 'none') + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.evChargerInstallationCostCalculator = { recalc: calc };
})();
