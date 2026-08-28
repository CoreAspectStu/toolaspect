/*!
 * ToolAspect Brake Replacement Cost Calculator Embed
 * Install: <div id="ta-brake-replacement-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/brake-replacement-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-brake-replacement-cost-calculator';
  var BASE = 'https://toolaspect.com/brake-replacement-cost-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'brake-replacement-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="brake-replacement-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Brake Replacement Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Pads, rotors and calipers per axle at your shop\'s rate</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Axle</label><select class="ta-axle">'
    + '<option value="front">Front</option>'
    + '<option value="rear">Rear</option>'
    + '<option value="both" selected>Both</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Parts</label><select class="ta-level">'
    + '<option value="pads">Pads only</option>'
    + '<option value="padsrotors" selected>Pads + rotors</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Calipers</label><select class="ta-cal">'
    + '<option value="0" selected>None</option>'
    + '<option value="1">One seized</option>'
    + '<option value="2">Both</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Rate ($/hr)</label><input type="number" class="ta-rate" value="130" min="40" max="400" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var JOBS = {
    front: { pads: [70, 180, 1.0, 1.6], padsrotors: [250, 500, 1.5, 2.5] },
    rear: { pads: [90, 220, 1.0, 1.7], padsrotors: [280, 550, 1.7, 2.7] }
  };
  var CAL = { 1: [90, 280, 0.8, 1.2], 2: [180, 450, 1.4, 2.0] };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var axleSel = val('.ta-axle'), level = val('.ta-level');
    var calN = parseInt(val('.ta-cal'), 10), rate = num('.ta-rate');
    if (rate <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your shop\'s rate</div>';
      return;
    }
    var axles = axleSel === 'both' ? ['front', 'rear'] : [axleSel];
    var pl = 0, ph = 0, hl = 0, hh = 0;
    axles.forEach(function (a) {
      var j = JOBS[a][level];
      pl += j[0]; ph += j[1]; hl += j[2]; hh += j[3];
      if (calN > 0) {
        var c = CAL[axles.length > 1 ? 1 : calN];
        pl += c[0]; ph += c[1]; hl += c[2]; hh += c[3];
      }
    });
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(pl + hl * rate) + ' – ' + money(ph + hh * rate) + '</div>'
      + '<div class="ta-embed-sub">' + (level === 'padsrotors' ? 'pads + rotors' : 'pads only')
      + (calN > 0 ? ' + ' + (axles.length > 1 ? 'a caliper per axle' : calN + ' caliper' + (calN > 1 ? 's' : '')) : '')
      + ' · parts ' + money(pl) + '–' + money(ph) + ' + ' + hl.toFixed(1) + '–' + hh.toFixed(1) + ' hrs × $' + rate + '/hr</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Labor</div><div class="rv">' + money(hl * rate) + ' – ' + money(hh * rate) + '</div></div>'
      + '<div><div class="rl">Rotors OK?</div><div class="rv">Resurface $' + (axles.length * 2 * 10) + '–$' + (axles.length * 2 * 40) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.brakeReplacementCostCalculator = { recalc: calc };
})();
