/*!
 * ToolAspect Wedding Videographer Cost Calculator Embed
 * Install: <div id="ta-wedding-videographer-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-videographer-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-videographer-cost-calculator';
  var BASE = 'https://toolaspect.com/wedding-videographer-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;font-size:.85rem;color:var(--ta-text);cursor:pointer}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:8px;font-size:.85rem}'
    + '.ta-embed-cell strong{display:block;font-size:1.05rem}'
    + '.ta-embed-cell span{color:var(--ta-muted);font-size:.75rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-videographer-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-videographer-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Videographer Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Coverage hours x market rate, plus add-ons and the photo-bundle discount</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Coverage hours</label><select class="ta-hours">'
    + '<option value="4">4 hours</option>'
    + '<option value="6">6 hours</option>'
    + '<option value="8" selected>8 hours (standard)</option>'
    + '<option value="10">10 hours</option>'
    + '<option value="12">12 hours</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Market</label><select class="ta-region">'
    + '<option value="small">Small town / rural</option>'
    + '<option value="mid" selected>Mid-size metro</option>'
    + '<option value="major">Major metro</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group" style="display:flex;gap:16px;flex-wrap:wrap">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-second" style="margin-right:6px"> 2nd videographer (+$450)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-drone" style="margin-right:6px"> Drone (+$350)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-social" style="margin-right:6px"> Social edits (+$250)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-feature" style="margin-right:6px"> Full film (+$700)</label>'
    + '</div>'
    + '<div class="ta-embed-form-group">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-bundle" style="margin-right:6px"> Photo + video bundle at one studio (10-25% off video)</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var RATES = { small: { lo: 150, mid: 175, hi: 200 }, mid: { lo: 225, mid: 250, hi: 275 }, major: { lo: 325, mid: 375, hi: 450 } };
  var ADDS = {
    second: { lo: 300, mid: 450, hi: 700 },
    drone: { lo: 200, mid: 350, hi: 500 },
    social: { lo: 150, mid: 250, hi: 400 },
    feature: { lo: 400, mid: 700, hi: 1200 }
  };
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function val(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function chk(sel) { var el = root.querySelector(sel); return el ? el.checked : false; }

  function calc() {
    var hours = val('.ta-hours');
    var r = RATES[root.querySelector('.ta-region').value];
    var lo = hours * r.lo, typ = hours * r.mid, hi = hours * r.hi;
    Object.keys(ADDS).forEach(function (k) {
      if (chk('.ta-' + k)) { lo += ADDS[k].lo; typ += ADDS[k].mid; hi += ADDS[k].hi; }
    });
    var bundle = chk('.ta-bundle');
    if (bundle) { lo *= 0.90; typ *= 0.85; hi *= 0.75; }
    var diff = typ - 2300;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(typ) + '</div>'
      + '<div class="ta-embed-sub">typical package · range ' + usd(lo) + ' to ' + usd(hi) + (bundle ? ' · bundle discount applied' : '') + '</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Effective hourly</span><strong>' + (hours > 0 ? usd(typ / hours) : '—') + '</strong></div>'
      + '<div class="ta-embed-cell"><span>Vs $2,300 avg</span><strong>' + (diff >= 0 ? '+' : '−') + usd(Math.abs(diff)) + '</strong></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingVideographerCostCalculator = { recalc: calc };
})();
