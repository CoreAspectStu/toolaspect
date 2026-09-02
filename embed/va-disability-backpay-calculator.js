/*!
 * ToolAspect VA Disability Back Pay Calculator Embed
 * Install: <div id="ta-va-disability-backpay-calculator"></div>
 *          <script src="https://toolaspect.com/embed/va-disability-backpay-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-va-disability-backpay-calculator';
  var BASE = 'https://toolaspect.com/va-disability-backpay-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'va-disability-backpay-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="va-disability-backpay-calculator"]')) {
    (document.head || document.documentElement).appendChild(styleEl);
  }

  // Official VA rate tables, rate years 2023-2026 (COLA switch every Dec 1)
  var RATES = {
    2026: { effM: 2025 * 12 + 11,
      alone: {10:180.42,20:356.66,30:552.47,40:795.84,50:1132.90,60:1435.02,70:1808.45,80:2102.15,90:2362.30,100:3938.58},
      spouse: {30:617.47,40:882.84,50:1241.90,60:1566.02,70:1961.45,80:2277.15,90:2559.30,100:4158.17},
      childOnly: {30:596.47,40:853.84,50:1205.90,60:1523.02,70:1910.45,80:2219.15,90:2494.30,100:4085.43},
      spouseChild: {30:666.47,40:947.84,50:1322.90,60:1663.02,70:2074.45,80:2406.15,90:2704.30,100:4318.99},
      addU: {30:32,40:43,50:54,60:65,70:76,80:87,90:98,100:109.11}, addS: {30:105,40:140,50:176,60:211,70:246,80:281,90:317,100:352.45} },
    2025: { effM: 2024 * 12 + 11,
      alone: {10:175.51,20:346.95,30:537.42,40:774.16,50:1102.04,60:1395.93,70:1759.19,80:2044.89,90:2297.96,100:3831.30},
      spouse: {30:601.42,40:859.16,50:1208.04,60:1523.93,70:1908.19,80:2214.89,90:2489.96,100:4044.91},
      childOnly: {30:579.42,40:831.16,50:1173.04,60:1480.93,70:1858.19,80:2158.89,90:2425.96,100:3974.15},
      spouseChild: {30:648.42,40:922.16,50:1287.04,60:1617.93,70:2018.19,80:2340.89,90:2630.96,100:4201.35},
      addU: {30:31,40:42,50:53,60:63,70:74,80:84,90:95,100:106.14}, addS: {30:102,40:137,50:171,60:205,70:239,80:274,90:308,100:342.85} },
    2024: { effM: 2023 * 12 + 11,
      alone: {10:171.23,20:338.49,30:524.31,40:755.28,50:1075.16,60:1361.88,70:1716.28,80:1995.01,90:2241.91,100:3737.85},
      spouse: {30:586.31,40:838.28,50:1179.16,60:1486.88,70:1861.28,80:2161.01,90:2428.91,100:3946.25},
      childOnly: {30:565.31,40:810.28,50:1144.16,60:1444.88,70:1813.28,80:2106.01,90:2366.91,100:3877.22},
      spouseChild: {30:632.31,40:899.28,50:1255.16,60:1577.88,70:1968.28,80:2283.01,90:2565.91,100:4098.87},
      addU: {30:31,40:41,50:51,60:62,70:72,80:82,90:93,100:103.55}, addS: {30:100,40:133,50:167,60:200,70:234,80:267,90:301,100:334.49} },
    2023: { effM: 2022 * 12 + 11,
      alone: {10:165.92,20:327.99,30:508.05,40:731.86,50:1041.82,60:1319.65,70:1663.06,80:1933.15,90:2172.39,100:3621.95},
      spouse: {30:568.05,40:811.86,50:1141.82,60:1440.65,70:1804.06,80:2094.15,90:2353.39,100:3823.89},
      childOnly: {30:548.05,40:785.86,50:1108.82,60:1400.65,70:1757.06,80:2041.15,90:2293.39,100:3757.00},
      spouseChild: {30:612.05,40:870.86,50:1215.82,60:1528.65,70:1907.06,80:2212.15,90:2486.39,100:3971.78},
      addU: {30:30,40:40,50:50,60:60,70:70,80:80,90:90,100:100.34}, addS: {30:97,40:129,50:162,60:194,70:226,80:259,90:291,100:324.12} }
  };
  var YEARS = ['2023', '2024', '2025', '2026'];
  function rateYearFor(m) { for (var i = YEARS.length - 1; i >= 0; i--) { if (m >= RATES[YEARS[i]].effM) return YEARS[i]; } return null; }
  function pay(yy, r, sp, nU) {
    var t = RATES[yy];
    if (r <= 20) return t.alone[r];
    var m = nU >= 1 ? (sp ? t.spouseChild : t.childOnly)[r] : (sp ? t.spouse : t.alone)[r];
    if (nU >= 1) m += Math.max(nU - 1, 0) * t.addU[r];
    return +m.toFixed(2);
  }
  function usd(n) { return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function usd0(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function moSel(id, sel) {
    var h = '<select id="' + id + '">';
    for (var i = 0; i < 12; i++) h += '<option value="' + (i + 1) + '"' + (i + 1 === sel ? ' selected' : '') + '>' + MONTHS[i] + '</option>';
    return h + '</select>';
  }
  function yrSel(id, opts, sel) {
    var h = '<select id="' + id + '">';
    opts.forEach(function (y) { h += '<option value="' + y + '"' + (+y === sel ? ' selected' : '') + '>' + y + '</option>'; });
    return h + '</select>';
  }
  function ratingSel(id, sel, withNone) {
    var h = '<select id="' + id + '">';
    if (withNone) h += '<option value="0">None &mdash; first award</option>';
    [10,20,30,40,50,60,70,80,90,100].forEach(function (v) { h += '<option value="' + v + '"' + (v === sel ? ' selected' : '') + '>' + v + '%</option>'; });
    return h + '</select>';
  }

  function render(target) {
    target.className = 'ta-embed-root';
    target.innerHTML =
      '<div class="ta-embed-title">VA Disability Back Pay Calculator</div>' +
      '<div class="ta-embed-subtitle">Effective date &times; months, at each year&rsquo;s real rates</div>' +
      '<div class="ta-embed-card">' +
        '<div class="ta-embed-form-row">' +
          '<div class="ta-embed-form-group"><label>Effective date</label>' + moSel('ta-bpEM', 3) + '</div>' +
          '<div class="ta-embed-form-group"><label>Year</label>' + yrSel('ta-bpEY', ['2021','2022','2023','2024','2025','2026'], 2024) + '</div>' +
        '</div>' +
        '<div class="ta-embed-form-row">' +
          '<div class="ta-embed-form-group"><label>First month paid correctly</label>' + moSel('ta-bpPM', 9) + '</div>' +
          '<div class="ta-embed-form-group"><label>Year</label>' + yrSel('ta-bpPY', ['2024','2025','2026'], 2026) + '</div>' +
        '</div>' +
        '<div class="ta-embed-form-row">' +
          '<div class="ta-embed-form-group"><label>New rating</label>' + ratingSel('ta-bpNR', 70, false) + '</div>' +
          '<div class="ta-embed-form-group"><label>Paid during the wait</label>' + ratingSel('ta-bpOR', 0, true) + '</div>' +
        '</div>' +
        '<div class="ta-embed-form-row">' +
          '<div class="ta-embed-form-group"><label>Spouse</label><select id="ta-bpSP"><option value="0">No</option><option value="1">Yes</option></select></div>' +
          '<div class="ta-embed-form-group"><label>Children under 18</label><select id="ta-bpK"><option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div>' +
        '</div>' +
      '</div>' +
      '<div class="ta-embed-result">' +
        '<div class="ta-embed-big" id="ta-bpout">$52,832.85</div>' +
        '<div class="ta-embed-sub" id="ta-bpsub">30 months of back pay, 70% rating, veteran alone</div>' +
        '<div class="ta-embed-line" id="ta-bpdetail" style="color:var(--ta-muted);font-size:.82rem">9 mo &times; $1,716.28 + 12 mo &times; $1,759.19 + 9 mo &times; $1,808.45</div>' +
      '</div>' +
      '<div class="ta-embed-note">Covers rate years 2023&ndash;2026; the table switches at each December 1 COLA. School-age children and dependent parents are in the full calculator. Back pay is tax-free.</div>' +
      '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';

    function calc() {
      var effM = parseInt(document.getElementById('ta-bpEY').value, 10) * 12 + parseInt(document.getElementById('ta-bpEM').value, 10) - 1;
      var payM = parseInt(document.getElementById('ta-bpPY').value, 10) * 12 + parseInt(document.getElementById('ta-bpPM').value, 10) - 1;
      var newR = parseInt(document.getElementById('ta-bpNR').value, 10);
      var oldR = parseInt(document.getElementById('ta-bpOR').value, 10);
      var sp = parseInt(document.getElementById('ta-bpSP').value, 10);
      var nU = parseInt(document.getElementById('ta-bpK').value, 10);
      var outEl = document.getElementById('ta-bpout');
      var subEl = document.getElementById('ta-bpsub');
      var detEl = document.getElementById('ta-bpdetail');
      if (payM <= effM) {
        outEl.textContent = '$0.00';
        subEl.textContent = 'Nothing owed retroactively at these dates';
        detEl.textContent = '';
        return;
      }
      var rows = {}, total = 0, months = 0, skipped = 0;
      for (var m = effM; m < payM; m++) {
        var yy = rateYearFor(m);
        if (!yy) { skipped++; continue; }
        var nw = pay(yy, newR, sp, nU), od = oldR ? pay(yy, oldR, sp, nU) : 0, d = +(nw - od).toFixed(2);
        if (!rows[yy]) rows[yy] = { n: 0, d: d, sub: 0 };
        rows[yy].n++; rows[yy].sub = +(rows[yy].sub + d).toFixed(2);
        total = +(total + d).toFixed(2); months++;
      }
      outEl.textContent = usd(total);
      var bits = [];
      if (sp) bits.push('a spouse');
      if (nU) bits.push(nU + (nU > 1 ? ' children' : ' child'));
      subEl.textContent = months + ' months of back pay, ' + newR + '%' + (oldR ? ' (from ' + oldR + '%)' : '') + (bits.length ? ' with ' + bits.join(' and ') : ', veteran alone');
      var parts = YEARS.filter(function (y) { return rows[y]; }).map(function (y) {
        return rows[y].n + ' mo &times; ' + usd(rows[y].d);
      });
      detEl.textContent = parts.join(' + ') + (skipped ? ' (+' + skipped + ' pre-2023 mo not covered)' : '');
    }
    ['ta-bpEM','ta-bpEY','ta-bpPM','ta-bpPY','ta-bpNR','ta-bpOR','ta-bpSP','ta-bpK'].forEach(function (id) {
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
