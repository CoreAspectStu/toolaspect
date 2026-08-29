/*!
 * ToolAspect Marriage License Cost Calculator Embed
 * Install: <div id="ta-marriage-license-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/marriage-license-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-marriage-license-cost-calculator';
  var BASE = 'https://toolaspect.com/marriage-license-cost-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-range{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'marriage-license-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="marriage-license-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Marriage License Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">State fee + courthouse ceremony + certified copies</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state"></select></div>'
    + '<div class="ta-embed-form-group"><label>Copies</label><input type="number" class="ta-copies" value="2" min="0" max="10" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Ceremony</label><select class="ta-cer">'
    + '<option value="yes" selected>Courthouse</option><option value="no">License only</option>'
    + '</select></div>'
    + '<label class="ta-embed-check ta-counsel-wrap" style="display:none;align-items:center"><input type="checkbox" class="ta-counsel"> Premarital course</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var STATES = [
    ['Alabama', 40, 80, null], ['Alaska', 60, 60, null], ['Arizona', 72, 83, null], ['Arkansas', 35, 60, null],
    ['California', 90, 176, null], ['Colorado', 30, 30, null], ['Connecticut', 30, 50, null], ['Delaware', 70, 120, null],
    ['Florida', 93.5, 93.5, 61], ['Georgia', 50, 60, 16], ['Hawaii', 65, 65, null], ['Idaho', 30, 30, null],
    ['Illinois', 60, 75, null], ['Indiana', 18, 30, null], ['Iowa', 35, 35, null], ['Kansas', 85.5, 85.5, null],
    ['Kentucky', 35, 35, null], ['Louisiana', 27.5, 27.5, null], ['Maine', 40, 40, null], ['Maryland', 35, 85, null],
    ['Massachusetts', 30, 50, null], ['Michigan', 20, 30, null], ['Minnesota', 115, 115, 40], ['Mississippi', 20, 25, null],
    ['Missouri', 50, 50, null], ['Montana', 53, 53, null], ['Nebraska', 25, 25, null], ['Nevada', 75, 102, null],
    ['New Hampshire', 50, 50, null], ['New Jersey', 28, 28, null], ['New Mexico', 25, 25, null], ['New York', 35, 40, null],
    ['North Carolina', 60, 60, null], ['North Dakota', 65, 65, null], ['Ohio', 50, 75, null], ['Oklahoma', 50, 50, 5],
    ['Oregon', 60, 60, null], ['Pennsylvania', 50, 90, null], ['Rhode Island', 24, 24, null], ['South Carolina', 30, 100, null],
    ['South Dakota', 30, 40, null], ['Tennessee', 95, 95, 60], ['Texas', 82, 82, 22], ['Utah', 35, 35, null],
    ['Vermont', 35, 60, null], ['Virginia', 30, 30, null], ['Washington', 169, 169, null], ['West Virginia', 57, 57, null],
    ['Wisconsin', 95, 120, null], ['Wyoming', 30, 30, null]
  ];
  var CER = [25, 100], COPY = [5, 25];

  var stateSel = root.querySelector('.ta-state');
  STATES.forEach(function (s, i) {
    var o = document.createElement('option');
    o.value = i; o.textContent = s[0];
    stateSel.appendChild(o);
  });
  stateSel.value = STATES.map(function (s) { return s[0]; }).indexOf('Texas');

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + (n % 1 === 0 ? n.toLocaleString('en-US') : n.toFixed(2)); }

  function calc() {
    var st = STATES[parseInt(val('.ta-state'), 10)];
    var ceremony = val('.ta-cer') === 'yes';
    var copies = Math.max(0, parseInt(val('.ta-copies'), 10) || 0);
    var counsel = root.querySelector('.ta-counsel').checked && st[3] != null;
    root.querySelector('.ta-counsel-wrap').style.display = st[3] != null ? 'flex' : 'none';

    var fee = counsel ? [st[3], st[3]] : [st[1], st[2]];
    var cl = [copies * COPY[0], copies * COPY[1]];
    var lo = fee[0] + cl[0], hi = fee[1] + cl[1];
    var cerLine = 'not included';
    if (ceremony) { lo += CER[0]; hi += CER[1]; cerLine = money(CER[0]) + ' – ' + money(CER[1]); }

    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">' + st[0] + ' license' + (ceremony ? ' + courthouse ceremony' : '')
      + (copies > 0 ? ' + ' + copies + ' certified cop' + (copies > 1 ? 'ies' : 'y') : '')
      + (counsel ? ' · counseling discount' : '') + '</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">License</div><div class="rv">' + money(fee[0]) + ' – ' + money(fee[1]) + '</div></div>'
      + '<div><div class="rl">Ceremony</div><div class="rv">' + cerLine + '</div></div>'
      + '<div><div class="rl">Copies</div><div class="rv">' + (copies > 0 ? money(cl[0]) + ' – ' + money(cl[1]) : 'none') + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.marriageLicenseCostCalculator = { recalc: calc };
})();
