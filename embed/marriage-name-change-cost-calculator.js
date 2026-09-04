/*!
 * ToolAspect Marriage Name Change Cost Calculator Embed
 * Install: <div id="ta-marriage-name-change-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/marriage-name-change-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-marriage-name-change-cost-calculator';
  var BASE = 'https://toolaspect.com/marriage-name-change-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;gap:7px;font-size:.82rem;color:var(--ta-text);margin-top:2px}'
    + '.ta-embed-check input{width:auto;accent-color:var(--ta-accent)}'
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
    + '@media(max-width:520px){.ta-embed-range,.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'marriage-name-change-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="marriage-name-change-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Marriage Name Change Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Certified copies + SS card + DMV + passport + vehicle title</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state">'
    + '<option value="other" selected>Other</option><option value="CA">California</option>'
    + '<option value="IL">Illinois</option><option value="TX">Texas</option>'
    + '<option value="NY">New York</option><option value="FL">Florida</option>'
    + '<option value="OH">Ohio</option><option value="PA">Pennsylvania</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Certified copies</label><input type="number" class="ta-copies" value="3" min="0" max="10" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Cost per copy ($)</label><input type="number" class="ta-copyfee" value="15" min="0" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>License fee ($)</label><input type="number" class="ta-dl" value="15" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Passport</label><select class="ta-pass">'
    + '<option value="recent">DS-5504 ($0)</option>'
    + '<option value="renew" selected>DS-82 renew ($130)</option>'
    + '<option value="new">DS-11 in person ($165)</option>'
    + '<option value="skip">Not updating</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Title fee ($)</label><input type="number" class="ta-title" value="15" min="0" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-photo" checked> Photo +$15</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-vehicle"> Vehicle to re-title</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-kit"> Online kit +$75</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var STATE_FEE = { CA: [0, 0], IL: [5, 15], TX: [11, 15], NY: [15, 15], FL: [25, 15], OH: [25, 15], PA: [29.50, 0] };
  var PASS_FEE = { recent: 0, renew: 130, new: 165, skip: 0 };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function chk(sel) { var el = root.querySelector(sel); return el ? el.checked : false; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var st = val('.ta-state');
    var copies = Math.max(0, parseInt(val('.ta-copies'), 10) || 0);
    var copyFee = num('.ta-copyfee');
    var dl = num('.ta-dl');
    var passMode = val('.ta-pass');
    var title = num('.ta-title');
    var photo = chk('.ta-photo') && passMode !== 'skip' ? 15 : 0;
    var vehicle = chk('.ta-vehicle');
    var kit = chk('.ta-kit') ? 75 : 0;

    var copyCost = copies * copyFee;
    var gov = dl + PASS_FEE[passMode] + (vehicle ? title : 0);
    var total = copyCost + gov + photo + kit;

    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(total) + '</div>'
      + '<div class="ta-embed-sub">' + (st !== 'other' ? st + ' · ' : '') + 'Social Security card update is free</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Copies</div><div class="rv">' + money(copyCost) + '</div></div>'
      + '<div><div class="rl">Gov fees</div><div class="rv">' + money(gov) + '</div></div>'
      + '<div><div class="rl">Kit</div><div class="rv">' + (kit ? money(kit) : 'DIY') + '</div></div>'
      + '</div>';
  }

  root.querySelector('.ta-state').addEventListener('change', function () {
    var st = this.value;
    if (STATE_FEE[st]) {
      root.querySelector('.ta-dl').value = STATE_FEE[st][0];
      root.querySelector('.ta-title').value = STATE_FEE[st][1];
      root.querySelector('.ta-vehicle').checked = true;
    }
    calc();
  });
  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.marriageNameChangeCostCalculator = { recalc: calc };
})();
