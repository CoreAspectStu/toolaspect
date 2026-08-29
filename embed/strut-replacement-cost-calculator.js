/*!
 * ToolAspect Strut Replacement Cost Calculator Embed
 * Install: <div id="ta-strut-replacement-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/strut-replacement-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-strut-replacement-cost-calculator';
  var BASE = 'https://toolaspect.com/strut-replacement-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;gap:7px;font-size:.82rem;color:var(--ta-text);margin-top:2px}'
    + '.ta-embed-check input{width:auto;accent-color:var(--ta-accent)}'
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
  styleEl.setAttribute('data-ta-embed', 'strut-replacement-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="strut-replacement-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Strut Replacement Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Parts + flat-rate labor per axle, mounts and alignment optional</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Job</label><select class="ta-job">'
    + '<option value="front" selected>Front strut pair</option>'
    + '<option value="rear">Rear strut pair</option>'
    + '<option value="all4">All four struts</option>'
    + '<option value="shocks">Shock pair</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Parts tier</label><select class="ta-tier">'
    + '<option value="eco">Economy</option>'
    + '<option value="std" selected>Standard</option>'
    + '<option value="prem">Premium / OEM</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Assembly</label><select class="ta-asm">'
    + '<option value="Bare" selected>Bare struts</option>'
    + '<option value="Quick">Quick struts</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Rate ($/hr)</label><input type="number" class="ta-rate" value="130" min="40" max="400" step="5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-mounts" checked> New strut mounts</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-align" checked> Alignment</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var PARTS = {
    frontBare: { eco: [150, 260], std: [220, 420], prem: [400, 800] },
    frontQuick: { eco: [280, 480], std: [360, 650], prem: [560, 950] },
    rearBare: { eco: [130, 220], std: [190, 360], prem: [340, 650] },
    rearQuick: { eco: [240, 420], std: [320, 560], prem: [500, 800] },
    shocks: { eco: [110, 200], std: [160, 320], prem: [280, 550] }
  };
  var HRS = { frontBare: [2.5, 3.5], frontQuick: [1.6, 2.2], rearBare: [2.0, 3.0], rearQuick: [1.4, 1.9], shocks: [0.8, 1.5] };
  var MOUNT = [70, 160], MOUNT_HR = 0.3, ALIGN = [80, 200];

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var job = val('.ta-job'), tier = val('.ta-tier');
    var asm = job === 'shocks' ? '' : val('.ta-asm');
    var rate = num('.ta-rate');
    var mounts = root.querySelector('.ta-mounts').checked && job !== 'shocks';
    var align = root.querySelector('.ta-align').checked;
    if (rate <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your shop\'s rate</div>';
      return;
    }
    var pl = 0, ph = 0, hl = 0, hh = 0, axles = 0;
    function add(key) {
      var p = PARTS[key + asm][tier], h = HRS[key + asm];
      pl += p[0]; ph += p[1]; hl += h[0]; hh += h[1];
    }
    if (job === 'front' || job === 'all4') { add('front'); axles++; }
    if (job === 'rear' || job === 'all4') { add('rear'); axles++; }
    if (job === 'shocks') { pl = PARTS.shocks[tier][0]; ph = PARTS.shocks[tier][1]; hl = HRS.shocks[0]; hh = HRS.shocks[1]; axles = 0; }
    if (mounts && axles > 0) {
      pl += MOUNT[0] * axles; ph += MOUNT[1] * axles;
      hl += MOUNT_HR * axles; hh += MOUNT_HR * axles;
    }
    var lo = pl + hl * rate, hi = ph + hh * rate;
    if (align) { lo += ALIGN[0]; hi += ALIGN[1]; }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">' + (job === 'shocks' ? 'shock pair' : (job === 'all4' ? 'all four corners' : (job === 'front' ? 'front axle' : 'rear axle')))
      + ' · parts ' + money(pl) + '–' + money(ph) + ' + ' + hl.toFixed(1) + '–' + hh.toFixed(1) + ' hrs × $' + rate + '/hr'
      + (align ? ' + alignment' : '') + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Parts</div><div class="rv">' + money(pl) + ' – ' + money(ph) + '</div></div>'
      + '<div><div class="rl">Labor</div><div class="rv">' + money(hl * rate) + ' – ' + money(hh * rate) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.strutReplacementCostCalculator = { recalc: calc };
})();
