/*!
 * ToolAspect TDIU Calculator Embed
 * Install: <div id="ta-tdiu-calculator"></div>
 *          <script src="https://toolaspect.com/embed/tdiu-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-tdiu-calculator';
  var BASE = 'https://toolaspect.com/tdiu-calculator/';

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
    + '.ta-embed-verdict{font-size:.85rem;border-radius:8px;padding:10px 12px;margin-bottom:10px;line-height:1.5}'
    + '.ta-embed-verdict.ok{background:rgba(34,197,94,.12);border:1px solid rgba(34,197,94,.5)}'
    + '.ta-embed-verdict.warn{background:rgba(251,191,36,.12);border:1px solid rgba(251,191,36,.6)}'
    + '.ta-embed-note{font-size:.75rem;color:var(--ta-muted);margin-top:8px;line-height:1.5}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'tdiu-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="tdiu-calculator"]')) {
    (document.head || document.documentElement).appendChild(styleEl);
  }

  // 2026 VA rate tables (effective Dec 1, 2025) — mirrors the full tool's engine
  var VA_RATES = {
    alone: {10:180.42,20:356.66,30:552.47,40:795.84,50:1132.90,60:1435.02,70:1808.45,80:2102.15,90:2362.30,100:3938.58},
    spouse: {30:617.47,40:882.84,50:1241.90,60:1566.02,70:1961.45,80:2277.15,90:2559.30,100:4158.17},
    childOnly: {30:596.47,40:853.84,50:1205.90,60:1523.02,70:1910.45,80:2219.15,90:2494.30,100:4085.43},
    spouseChild: {30:666.47,40:947.84,50:1322.90,60:1663.02,70:2074.45,80:2406.15,90:2704.30,100:4318.99},
    addU: {30:32,40:43,50:54,60:65,70:76,80:87,90:98,100:109.11}, addS: {30:105,40:140,50:176,60:211,70:246,80:281,90:317,100:352.45}
  };
  function pay(r, sp, nU) {
    if (r <= 20) return VA_RATES.alone[r];
    var m = nU >= 1 ? (sp ? VA_RATES.spouseChild : VA_RATES.childOnly)[r] : (sp ? VA_RATES.spouse : VA_RATES.alone)[r];
    if (nU >= 1) m += Math.max(nU - 1, 0) * VA_RATES.addU[r];
    return +m.toFixed(2);
  }
  function usd(n) { return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function usd0(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function ratingSel(id, sel) {
    var h = '<select id="' + id + '">';
    [10,20,30,40,50,60,70,80,90,100].forEach(function (v) { h += '<option value="' + v + '"' + (v === sel ? ' selected' : '') + '>' + v + '%</option>'; });
    return h + '</select>';
  }

  function render(target) {
    target.className = 'ta-embed-root';
    target.innerHTML =
      '<div class="ta-embed-title">TDIU Calculator</div>' +
      '<div class="ta-embed-subtitle">Unemployability pays the 100% rate &mdash; check the doors</div>' +
      '<div class="ta-embed-card">' +
        '<div class="ta-embed-form-row">' +
          '<div class="ta-embed-form-group"><label>Combined rating</label>' + ratingSel('ta-iuCR', 70) + '</div>' +
          '<div class="ta-embed-form-group"><label>Highest single rating</label>' + ratingSel('ta-iuMR', 50) + '</div>' +
        '</div>' +
        '<div class="ta-embed-form-row">' +
          '<div class="ta-embed-form-group"><label>Ratings at 40% or more</label><select id="ta-iuN40"><option value="0">0</option><option value="1" selected>1</option><option value="2">2+</option></select></div>' +
          '<div class="ta-embed-form-group"><label>Spouse</label><select id="ta-iuSP"><option value="0" selected>No</option><option value="1">Yes</option></select></div>' +
        '</div>' +
        '<div class="ta-embed-form-group"><label>Children under 18</label><select id="ta-iuK"><option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div>' +
      '</div>' +
      '<div class="ta-embed-result">' +
        '<div class="ta-embed-verdict ok" id="ta-iuverdict"></div>' +
        '<div class="ta-embed-big" id="ta-iuout">$2,130.13</div>' +
        '<div class="ta-embed-sub" id="ta-iusub">monthly uplift: $1,808.45 &rarr; $3,938.58 (100% rate)</div>' +
        '<div class="ta-embed-line" id="ta-iuannual">Annual uplift: $25,561.56 &middot; tax-free</div>' +
      '</div>' +
      '<div class="ta-embed-note">38 CFR 4.16(a): one disability at 60%+, or 70% combined with one at 40%+. Marginal work (odd jobs, sheltered employment, or earned income at or below the 2026 poverty guideline of $15,960) does not defeat a claim. School-age children are in the full calculator.</div>' +
      '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';

    function calc() {
      var comb = parseInt(document.getElementById('ta-iuCR').value, 10);
      var max1 = parseInt(document.getElementById('ta-iuMR').value, 10);
      var n40 = parseInt(document.getElementById('ta-iuN40').value, 10);
      var sp = parseInt(document.getElementById('ta-iuSP').value, 10);
      var nU = parseInt(document.getElementById('ta-iuK').value, 10);
      var vEl = document.getElementById('ta-iuverdict');
      var outEl = document.getElementById('ta-iuout');
      var subEl = document.getElementById('ta-iusub');
      var annEl = document.getElementById('ta-iuannual');
      var now = pay(comb, sp, nU), tdiu = pay(100, sp, nU);
      var door1 = max1 >= 60, door2 = comb >= 70 && n40 >= 1;
      if (comb === 100) {
        vEl.className = 'ta-embed-verdict ok';
        vEl.textContent = 'You already draw the 100% rate — TDIU adds nothing.';
      } else if (door1 || door2) {
        vEl.className = 'ta-embed-verdict ok';
        vEl.textContent = 'Meets a schedular door: ' + (door1 ? 'one disability at ' + max1 + '% (60%+).' : comb + '% combined with a ' + max1 + '% rating (40%+).') + ' Payment still turns on inability to keep substantially gainful work.';
      } else {
        vEl.className = 'ta-embed-verdict warn';
        vEl.textContent = 'Schedular doors not met — a 4.16(b) extraschedular referral is still possible when ratings undersell the employment impact.';
      }
      outEl.textContent = usd(+(tdiu - now).toFixed(2));
      subEl.textContent = comb === 100 ? 'nothing to add at 100%' : 'monthly uplift: ' + usd(now) + ' → ' + usd(tdiu) + ' (100% rate)';
      annEl.textContent = 'Annual uplift: ' + ((tdiu - now) * 12).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + ' · tax-free';
    }
    ['ta-iuCR','ta-iuMR','ta-iuN40','ta-iuSP','ta-iuK'].forEach(function (id) {
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
