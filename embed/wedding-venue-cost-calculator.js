/*!
 * ToolAspect Wedding Venue Cost Calculator Embed
 * Install: <div id="ta-wedding-venue-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-venue-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-venue-cost-calculator';
  var BASE = 'https://toolaspect.com/wedding-venue-cost-calculator/';

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
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:flex;justify-content:center;gap:26px;margin-top:12px;flex-wrap:wrap}'
    + '.ta-embed-range div{font-size:.82rem;color:var(--ta-muted)}'
    + '.ta-embed-range strong{display:block;font-size:1.05rem;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}.ta-embed-range{gap:14px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-venue-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-venue-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Venue Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Site fee + catering, priced by state, venue type, and season</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guests</label><input type="number" class="ta-guests" value="120" min="2" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Venue type</label><select class="ta-vtype">'
    + '<option value="banquet">Banquet hall</option><option value="hotel" selected>Hotel</option>'
    + '<option value="club">Country club</option><option value="restaurant">Restaurant buyout</option>'
    + '<option value="barn">Barn / farm</option><option value="estate">Estate</option>'
    + '<option value="museum">Museum / historic</option><option value="backyard">Backyard / tent</option></select></div>'
    + '<div class="ta-embed-form-group"><label>State level</label><select class="ta-state">'
    + '<option value="1">National average</option><option value="1.67">New Jersey</option>'
    + '<option value="1.43">New York</option><option value="1.2">California</option>'
    + '<option value="0.91">Texas</option><option value="0.85">Ohio</option>'
    + '<option value="0.53">Utah</option><option value="0.5">Wyoming</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Season</label><select class="ta-season">'
    + '<option value="1">Peak (May–Oct)</option><option value="0.85">Off-peak (Nov–Apr)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Day</label><select class="ta-day">'
    + '<option value="1">Saturday</option><option value="0.9">Friday / Sunday</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var TYPES = {
    banquet: [500, 1500, 2500, 50, 75, 110],
    hotel: [1500, 2500, 4000, 65, 95, 150],
    club: [2000, 3000, 5000, 70, 100, 160],
    restaurant: [1000, 2000, 3500, 60, 90, 130],
    barn: [3500, 6000, 10000, 50, 70, 100],
    estate: [4000, 8000, 15000, 45, 65, 95],
    museum: [3000, 7000, 12000, 55, 75, 110],
    backyard: [500, 1500, 4000, 40, 60, 90]
  };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function str(sel) {
    var el = root.querySelector(sel);
    return el ? el.value : '';
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var g = val('.ta-guests');
    var t = TYPES[str('.ta-vtype')] || TYPES.hotel;
    var mult = (val('.ta-state') || 1) * (val('.ta-season') || 1) * (val('.ta-day') || 1);
    var lo = (t[0] + t[3] * g) * mult;
    var ty = (t[1] + t[4] * g) * mult;
    var hi = (t[2] + t[5] * g) * mult;
    if (g < 2 || isNaN(ty)) {
      root.querySelector('.ta-embed-result').innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your guest count</div>';
      return;
    }
    root.querySelector('.ta-embed-result').innerHTML =
      '<div class="ta-embed-big">' + usd(ty) + '</div>'
      + '<div class="ta-embed-sub">typical venue + catering (' + usd(ty / g) + ' per guest)</div>'
      + '<div class="ta-embed-range">'
      + '<div>Low<strong>' + usd(lo) + '</strong></div>'
      + '<div>Typical<strong>' + usd(ty) + '</strong></div>'
      + '<div>High<strong>' + usd(hi) + '</strong></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingVenueCostCalculator = { recalc: calc };
})();
