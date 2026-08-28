/*!
 * ToolAspect SAT to ACT Conversion Calculator Embed
 * Install: <div id="ta-sat-to-act-conversion-calculator"></div>
 *          <script src="https://toolaspect.com/embed/sat-to-act-conversion-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-sat-to-act-conversion-calculator';
  var BASE = 'https://toolaspect.com/sat-to-act-conversion-calculator/';

  var CONCORD = [
    { lo: 1570, hi: 1600, act: 36 }, { lo: 1530, hi: 1560, act: 35 }, { lo: 1490, hi: 1520, act: 34 },
    { lo: 1450, hi: 1480, act: 33 }, { lo: 1420, hi: 1440, act: 32 }, { lo: 1390, hi: 1410, act: 31 },
    { lo: 1360, hi: 1380, act: 30 }, { lo: 1330, hi: 1350, act: 29 }, { lo: 1300, hi: 1320, act: 28 },
    { lo: 1260, hi: 1290, act: 27 }, { lo: 1230, hi: 1250, act: 26 }, { lo: 1200, hi: 1220, act: 25 },
    { lo: 1160, hi: 1190, act: 24 }, { lo: 1130, hi: 1150, act: 23 }, { lo: 1100, hi: 1120, act: 22 },
    { lo: 1060, hi: 1090, act: 21 }, { lo: 1030, hi: 1050, act: 20 }, { lo: 990, hi: 1020, act: 19 },
    { lo: 960, hi: 980, act: 18 }, { lo: 920, hi: 950, act: 17 }, { lo: 880, hi: 910, act: 16 },
    { lo: 830, hi: 870, act: 15 }, { lo: 780, hi: 820, act: 14 }, { lo: 730, hi: 770, act: 13 },
    { lo: 690, hi: 720, act: 12 }, { lo: 650, hi: 680, act: 11 }, { lo: 620, hi: 640, act: 10 },
    { lo: 590, hi: 610, act: 9 }
  ];

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'sat-to-act-conversion-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="sat-to-act-conversion-calculator"]')) {
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
    + '<div class="ta-embed-title">SAT to ACT Conversion Calculator</div>'
    + '<div class="ta-embed-subtitle">Official 2018 ACT / College Board concordance</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Direction</label><select class="ta-dir">'
    + '<option value="sat" selected>SAT &rarr; ACT</option><option value="act">ACT &rarr; SAT</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Your score</label><input type="number" class="ta-score" value="1290" min="1" max="1600" step="10"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var dir = root.querySelector('.ta-dir').value;
    var s = parseFloat(root.querySelector('.ta-score').value);
    if (isNaN(s)) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your score</div>';
      return;
    }
    if (dir === 'sat') {
      if (s < 400 || s > 1600 || s % 10 !== 0) {
        resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">SAT totals are multiples of 10 between 400 and 1600</div>';
        return;
      }
      if (s < 590) {
        resultEl.innerHTML = '<div class="ta-embed-big">Below 9</div><div class="ta-embed-sub">The official concordance starts at SAT 590 (ACT 9)</div>';
        return;
      }
      var row = CONCORD.filter(function (r) { return s >= r.lo && s <= r.hi; })[0];
      resultEl.innerHTML =
        '<div class="ta-embed-big">ACT ' + row.act + '</div>'
        + '<div class="ta-embed-sub">SAT ' + s + ' concords to ACT ' + row.act + '</div>'
        + '<div class="ta-embed-sub">Official 2018 ACT / College Board concordance tables</div>';
    } else {
      if (s < 1 || s > 36 || s % 1 !== 0) {
        resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">ACT composites are whole numbers from 1 to 36</div>';
        return;
      }
      if (s < 9) {
        resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">The official concordance starts at ACT 9 (SAT 590-610)</div>';
        return;
      }
      var row2 = CONCORD.filter(function (r) { return r.act === s; })[0];
      var mid = Math.round((row2.lo + row2.hi) / 2);
      resultEl.innerHTML =
        '<div class="ta-embed-big">SAT ' + mid + '</div>'
        + '<div class="ta-embed-sub">ACT ' + s + ' concords to SAT ' + row2.lo + '-' + row2.hi + '</div>'
        + '<div class="ta-embed-sub">Midpoint &asymp; ' + mid + ' · Official 2018 concordance</div>';
    }
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.satToActConversionCalculator = { recalc: calc };
})();
