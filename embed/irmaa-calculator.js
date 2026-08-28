/*!
 * ToolAspect IRMAA Calculator Embed
 * Install: <div id="ta-irmaa-calculator"></div>
 *          <script src="https://toolaspect.com/embed/irmaa-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-irmaa-calculator';
  var BASE = 'https://toolaspect.com/irmaa-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-range{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'irmaa-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="irmaa-calculator"]')) {
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
    + '<div class="ta-embed-title">IRMAA Calculator</div>'
    + '<div class="ta-embed-subtitle">2026 Medicare Part B + D surcharge from your 2024 MAGI</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Filing status</label><select class="ta-status">'
    + '<option value="mfj" selected>Married joint</option><option value="single">Single</option><option value="mfs">Married sep.</option></select></div>'
    + '<div class="ta-embed-form-group"><label>2024 MAGI ($)</label><input type="number" class="ta-magi" value="230000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>On Medicare</label><select class="ta-people"><option value="1">1</option><option value="2" selected>2</option></select></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var STD_B = 202.90;
  var BRACKETS = {
    single: [[109000, 1, 0], [137000, 1.4, 14.50], [171000, 2.0, 37.50], [205000, 2.6, 60.40], [500000, 3.2, 83.30], [Infinity, 3.4, 91.00]],
    mfj: [[218000, 1, 0], [274000, 1.4, 14.50], [342000, 2.0, 37.50], [410000, 2.6, 60.40], [750000, 3.2, 83.30], [Infinity, 3.4, 91.00]],
    mfs: [[109000, 1, 0], [391000, 3.2, 83.30], [Infinity, 3.4, 91.00]]
  };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function money2(n) { return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

  function calc() {
    var bands = BRACKETS[val('.ta-status')];
    var magi = num('.ta-magi');
    var people = parseInt(val('.ta-people'), 10) || 1;
    var idx = 0;
    for (var i = 0; i < bands.length; i++) if (magi <= bands[i][0]) { idx = i; break; }
    var mult = bands[idx][1], surD = bands[idx][2];
    var totalB = Math.round(STD_B * mult * 10) / 10;
    var surB = Math.round((totalB - STD_B) * 10) / 10;
    if (mult === 1) {
      var gap = bands[1][0] - magi;
      resultEl.innerHTML = ''
        + '<div class="ta-embed-big">No IRMAA</div>'
        + '<div class="ta-embed-sub">Standard premiums · ' + money(gap) + ' of headroom before the first surcharge bracket</div>';
      return;
    }
    var perMo = surB + surD;
    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + money(perMo * 12 * people) + '/yr</div>'
      + '<div class="ta-embed-sub">' + money2(perMo) + ' per month, each · ' + mult.toFixed(1) + '&times; bracket</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Part B total/mo</div><div class="rv">' + money2(totalB) + '</div></div>'
      + '<div><div class="rl">Part B surcharge</div><div class="rv">' + money2(surB) + '</div></div>'
      + '<div><div class="rl">Part D surcharge</div><div class="rv">' + money2(surD) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.irmaaCalculator = { recalc: calc };
})();
