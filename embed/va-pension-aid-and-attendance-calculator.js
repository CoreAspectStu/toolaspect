/*!
 * ToolAspect VA Pension & Aid and Attendance Calculator Embed
 * Install: <div id="ta-va-pension-aid-and-attendance-calculator"></div>
 *          <script src="https://toolaspect.com/embed/va-pension-aid-and-attendance-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-va-pension-aid-and-attendance-calculator';
  var BASE = 'https://toolaspect.com/va-pension-aid-and-attendance-calculator/';

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
    + '.ta-embed-form-group select,.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group select:focus,.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:20px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.6rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-line{font-size:.92rem;margin-top:8px;color:var(--ta-text)}'
    + '.ta-embed-note{font-size:.75rem;color:var(--ta-muted);margin-top:8px;line-height:1.5}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'va-pension-aid-and-attendance-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="va-pension-aid-and-attendance-calculator"]')) {
    (document.head || document.documentElement).appendChild(styleEl);
  }

  // 2026 MAPR tables (effective Dec 1, 2025) — mirrors the full tool's engine
  var MAPR = {
    vet0: { basic: 17441, hb: 21313, aa: 29093 },
    vet1: { basic: 22839, hb: 26710, aa: 34488 },
    ss0: { basic: 11699, hb: 14298, aa: 18697 },
    ss1: { basic: 15311, hb: 17902, aa: 22304 }
  };
  var ADDDEP = 2984;

  function render(target) {
    target.className = 'ta-embed-root';
    target.innerHTML =
      '<div class="ta-embed-title">VA Pension &amp; Aid and Attendance</div>' +
      '<div class="ta-embed-subtitle">2026 MAPR tables &middot; the 5% medical deduction</div>' +
      '<div class="ta-embed-card">' +
        '<div class="ta-embed-form-row">' +
          '<div class="ta-embed-form-group"><label>Claimant</label><select id="ta-pnW">' +
            '<option value="vet0" selected>Veteran, no dependents</option><option value="vet1">Veteran + 1 dependent</option>' +
            '<option value="ss0">Surviving spouse</option><option value="ss1">Surviving spouse + 1 dep</option></select></div>' +
          '<div class="ta-embed-form-group"><label>Benefit level</label><select id="ta-pnL">' +
            '<option value="basic">Basic</option><option value="hb">Housebound</option><option value="aa" selected>Aid &amp; Attendance</option></select></div>' +
        '</div>' +
        '<div class="ta-embed-form-row">' +
          '<div class="ta-embed-form-group"><label>Gross income ($/yr)</label><input type="number" id="ta-pnI" value="18000" min="0" step="500"></div>' +
          '<div class="ta-embed-form-group"><label>Unreimbursed medical ($/yr)</label><input type="number" id="ta-pnM" value="3000" min="0" step="500"></div>' +
        '</div>' +
        '<div class="ta-embed-form-group"><label>Additional dependents</label><select id="ta-pnD"><option value="0" selected>0</option><option value="1">1</option><option value="2">2</option></select></div>' +
      '</div>' +
      '<div class="ta-embed-result">' +
        '<div class="ta-embed-big" id="ta-pnout">$1,101.75</div>' +
        '<div class="ta-embed-sub" id="ta-pnsub">per month &middot; A&amp;A MAPR $29,093, countable income $15,872</div>' +
        '<div class="ta-embed-line" id="ta-pnannual">Annual pension: $13,221 &middot; tax-free</div>' +
      '</div>' +
      '<div class="ta-embed-note">Net worth (assets + income for VA purposes, excluding home and car) must stay under $163,699 for 2026. Wartime service required. The full calculator adds the net-worth check and survivors&rsquo; detail.</div>' +
      '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';

    function calc() {
      var who = document.getElementById('ta-pnW').value;
      var level = document.getElementById('ta-pnL').value;
      var nd = parseInt(document.getElementById('ta-pnD').value, 10);
      var income = parseFloat(document.getElementById('ta-pnI').value) || 0;
      var ume = parseFloat(document.getElementById('ta-pnM').value) || 0;
      var mapr = MAPR[who][level] + nd * ADDDEP;
      var ded = Math.floor(MAPR[who].basic * 0.05);
      var cume = Math.max(0, ume - ded);
      var ivap = Math.max(0, income - cume);
      var annual = Math.max(0, mapr - ivap);
      var outEl = document.getElementById('ta-pnout');
      var subEl = document.getElementById('ta-pnsub');
      var annEl = document.getElementById('ta-pnannual');
      outEl.textContent = (annual / 12).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      var lv = level === 'aa' ? 'A&A' : level === 'hb' ? 'Housebound' : 'basic';
      subEl.textContent = 'per month · ' + lv + ' MAPR $' + mapr.toLocaleString('en-US') + ', countable income $' + ivap.toLocaleString('en-US');
      annEl.textContent = 'Annual pension: $' + annual.toLocaleString('en-US') + ' · tax-free';
    }
    ['ta-pnW', 'ta-pnL', 'ta-pnD', 'ta-pnI', 'ta-pnM'].forEach(function (id) {
      document.getElementById(id).addEventListener('input', calc);
    });
    calc();
  }

  function boot() {
    var el = document.getElementById(TARGET_ID);
    if (el) { render(el); return; }
    var cs = document.currentScript;
    if (cs && cs.previousElementSibling && cs.previousElementSibling.tagName === 'DIV') { render(cs.previousElementSibling); return; }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        var late = document.getElementById(TARGET_ID);
        if (late) render(late);
      });
    }
  }
  boot();
})();
