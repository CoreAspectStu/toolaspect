/*!
 * ToolAspect VA Disability Pay Calculator Embed
 * Install: <div id="ta-va-disability-pay-calculator"></div>
 *          <script src="https://toolaspect.com/embed/va-disability-pay-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-va-disability-pay-calculator';
  var BASE = 'https://toolaspect.com/va-disability-pay-calculator/';

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
    + '.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
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
  styleEl.setAttribute('data-ta-embed', 'va-disability-pay-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="va-disability-pay-calculator"]')) {
    (document.head || document.documentElement).appendChild(styleEl);
  }

  // 2026 VA rate tables (effective Dec 1, 2025) — mirrors the full tool's engine
  var VA_RATES = {
    alone: {10:180.42,20:356.66,30:552.47,40:795.84,50:1132.90,60:1435.02,70:1808.45,80:2102.15,90:2362.30,100:3938.58},
    spouse: {30:617.47,40:882.84,50:1241.90,60:1566.02,70:1961.45,80:2277.15,90:2559.30,100:4158.17},
    childOnly: {30:596.47,40:853.84,50:1205.90,60:1523.02,70:1910.45,80:2219.15,90:2494.30,100:4085.43},
    spouseChild: {30:666.47,40:947.84,50:1322.90,60:1663.02,70:2074.45,80:2406.15,90:2704.30,100:4318.99},
    addU: {30:32,40:43,50:54,60:65,70:76,80:87,90:98,100:109.11},
    addS: {30:105,40:140,50:176,60:211,70:246,80:281,90:317,100:352.45},
    p1: {30:604.47,40:865.84,50:1220.90,60:1540.02,70:1931.45,80:2242.15,90:2520.30,100:4114.82}
  };
  function parentAdd(r) { return +(VA_RATES.p1[r] - VA_RATES.alone[r]).toFixed(2); }
  function pay(r, sp, nU, nS, np) {
    if (r <= 20) return VA_RATES.alone[r];
    var T = nU + nS;
    var m = T >= 1 ? (sp ? VA_RATES.spouseChild : VA_RATES.childOnly)[r] : (sp ? VA_RATES.spouse : VA_RATES.alone)[r];
    if (T >= 1) m += Math.max(nU - 1, 0) * VA_RATES.addU[r] + nS * VA_RATES.addS[r];
    m += np * parentAdd(r);
    return +m.toFixed(2);
  }
  function step(c, r) { return c + r - c * r / 100; }
  function roundVA(c) { return Math.round(c / 10) * 10; }

  function options(sel) {
    var h = '';
    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].forEach(function (v) {
      h += '<option value="' + v + '"' + (v === sel ? ' selected' : '') + '>' + (v === 0 ? 'None' : v + '%') + '</option>';
    });
    return h;
  }

  function usd(n) { return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function usd0(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function render(target) {
    target.className = 'ta-embed-root';
    target.innerHTML =
      '<div class="ta-embed-title">VA Disability Pay Calculator</div>' +
      '<div class="ta-embed-subtitle">Real VA math + official 2026 rates</div>' +
      '<div class="ta-embed-card">' +
        '<div class="ta-embed-form-row">' +
          '<div class="ta-embed-form-group"><label>Rating 1</label><select id="ta-var1">' + options(50) + '</select></div>' +
          '<div class="ta-embed-form-group"><label>Rating 2</label><select id="ta-var2">' + options(30) + '</select></div>' +
        '</div>' +
        '<div class="ta-embed-form-row">' +
          '<div class="ta-embed-form-group"><label>Rating 3</label><select id="ta-var3">' + options(0) + '</select></div>' +
          '<div class="ta-embed-form-group"><label>Spouse</label><select id="ta-vasp"><option value="0">No</option><option value="1" selected>Yes</option></select></div>' +
        '</div>' +
        '<div class="ta-embed-form-row">' +
          '<div class="ta-embed-form-group"><label>Children under 18</label><select id="ta-vak"><option value="0">0</option><option value="1" selected>1</option><option value="2">2</option><option value="3">3</option></select></div>' +
          '<div class="ta-embed-form-group"><label>Dependent parents</label><select id="ta-vap"><option value="0" selected>0</option><option value="1">1</option><option value="2">2</option></select></div>' +
        '</div>' +
      '</div>' +
      '<div class="ta-embed-result">' +
        '<div class="ta-embed-big" id="ta-vapay">' + usd(2074.45) + '/mo</div>' +
        '<div class="ta-embed-sub" id="ta-vasub">70% combined rating with a spouse and 1 child</div>' +
        '<div class="ta-embed-line" id="ta-vaannual">Annual: $24,893 &middot; tax-free</div>' +
        '<div class="ta-embed-line" id="ta-vamath" style="color:var(--ta-muted);font-size:.82rem">50% &rarr; 65% &rarr; rounded to 70% (1&ndash;4 down, 5&ndash;9 up)</div>' +
      '</div>' +
      '<div class="ta-embed-note">Ratings combine by whole-person math per 38 CFR 4.25; only the final value is rounded. Dependents add nothing at 10&ndash;20%. For the bilateral factor, school-age children, and more than three ratings, use the full calculator.</div>' +
      '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';

    function calc() {
      var ratings = [];
      ['ta-var1', 'ta-var2', 'ta-var3'].forEach(function (id) {
        var v = parseInt(document.getElementById(id).value, 10);
        if (v > 0) ratings.push(v);
      });
      var sp = parseInt(document.getElementById('ta-vasp').value, 10);
      var nU = parseInt(document.getElementById('ta-vak').value, 10);
      var np = parseInt(document.getElementById('ta-vap').value, 10);
      var payEl = document.getElementById('ta-vapay');
      var subEl = document.getElementById('ta-vasub');
      var annEl = document.getElementById('ta-vaannual');
      var mathEl = document.getElementById('ta-vamath');
      if (!ratings.length) {
        payEl.textContent = '—';
        subEl.textContent = 'Pick at least one rating';
        annEl.textContent = '';
        mathEl.textContent = '';
        return;
      }
      var c = 0, seq = [];
      ratings.slice().sort(function (a, b) { return b - a; }).forEach(function (v) {
        c = step(c, v);
        seq.push((+c.toFixed(2)) + '%');
      });
      var final = roundVA(c);
      var m = pay(final, sp, nU, 0, np);
      payEl.textContent = usd(m) + '/mo';
      var bits = [];
      if (sp) bits.push('a spouse');
      if (nU) bits.push(nU + (nU > 1 ? ' children' : ' child'));
      if (np) bits.push(np + (np > 1 ? ' parents' : ' parent'));
      subEl.textContent = final + '% combined rating' + (bits.length ? ' with ' + bits.join(', ') : ', veteran alone');
      annEl.innerHTML = 'Annual: ' + usd0(m * 12) + ' &middot; tax-free';
      mathEl.innerHTML = seq.join(' &rarr; ') + ' &rarr; rounded to <strong>' + final + '%</strong> (1&ndash;4 down, 5&ndash;9 up)';
    }
    ['ta-var1', 'ta-var2', 'ta-var3', 'ta-vasp', 'ta-vak', 'ta-vap'].forEach(function (id) {
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
