/*!
 * ToolAspect College Cost Calculator Embed
 * Install: <div id="ta-college-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/college-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-college-cost-calculator';
  var BASE = 'https://toolaspect.com/college-cost-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}.ta-embed-range{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'college-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="college-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">College Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">4-year totals, net of grants, with a borrowing check</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>School Type</label><select class="ta-type">'
    + '<option value="instate" selected>Public in-state</option>'
    + '<option value="oos">Public out-of-state</option>'
    + '<option value="private">Private nonprofit</option>'
    + '<option value="two">Public 2-year</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Years Until Enrollment</label><input type="number" class="ta-out" value="0" min="0" max="18" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Grants &amp; Scholarships ($/yr)</label><input type="number" class="ta-grants" value="5000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Tuition Inflation (%)</label><input type="number" class="ta-infl" value="4" min="0" max="12" step="0.5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  // College Board 2025-26 published averages: tuition+fees, housing+food; +$3,200 books/personal allowance
  var PRESETS = {
    instate: { tf: 11950, rb: 13400, yrs: 4 },
    oos:     { tf: 32700, rb: 13400, yrs: 4 },
    private: { tf: 45000, rb: 14900, yrs: 4 },
    two:     { tf: 4150,  rb: 0,     yrs: 2 }
  };
  var BOOKS = 3200;

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var p = PRESETS[val('.ta-type')] || PRESETS.instate;
    var yrsOut = Math.max(0, num('.ta-out'));
    var grants = num('.ta-grants');
    var infl = num('.ta-infl') / 100;
    var sticker = 0, yr1 = p.tf + p.rb + BOOKS;
    for (var k = 0; k < p.yrs; k++) sticker += (p.tf + p.rb) * Math.pow(1 + infl, yrsOut + k) + BOOKS;
    var net = Math.max(0, sticker - grants * p.yrs);
    var m = 0.0653 / 12, n = 120;
    var pmt = net > 0 ? net * m / (1 - Math.pow(1 + m, -n)) : 0;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(net) + '</div>'
      + '<div class="ta-embed-sub">' + p.yrs + '-year net cost (' + money(sticker) + ' sticker &minus; ' + money(grants * p.yrs) + ' grants)</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Year-1 Sticker</div><div class="rv">' + money(yr1) + '</div></div>'
      + '<div><div class="rl">Total Sticker</div><div class="rv">' + money(sticker) + '</div></div>'
      + '<div><div class="rl">If Borrowed @ 6.53%</div><div class="rv">$' + pmt.toFixed(0) + '/mo</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.collegeCostCalculator = { recalc: calc };
})();
