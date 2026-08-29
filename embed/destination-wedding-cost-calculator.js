/*!
 * ToolAspect Destination Wedding Cost Calculator Embed
 * Install: <div id="ta-destination-wedding-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/destination-wedding-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-destination-wedding-cost-calculator';
  var BASE = 'https://toolaspect.com/destination-wedding-cost-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'destination-wedding-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="destination-wedding-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Destination Wedding Cost</div>'
    + '<div class="ta-embed-subtitle">Package + legal + travel — and the true total with guests</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Destination</label><select class="ta-dest">'
    + '<option value="jamaica" selected>Jamaica</option>'
    + '<option value="mexico">Mexico</option>'
    + '<option value="dr">Dominican Republic</option>'
    + '<option value="costarica">Costa Rica</option>'
    + '<option value="usvi">US Virgin Islands</option>'
    + '<option value="vegas">Las Vegas</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Package Tier</label><select class="ta-tier">'
    + '<option value="basic">Basic ($1,500 / 10 guests)</option>'
    + '<option value="standard" selected>Standard ($4,600 / 30)</option>'
    + '<option value="premium">Premium ($13,200 / 40)</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guests</label><input type="number" class="ta-guests" value="30" min="0" max="200" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Flights Per Person ($)</label><input type="number" class="ta-flight" value="500" min="0" step="25"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Couple Room Nights</label><input type="number" class="ta-nights" value="5" min="1" max="14" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Nightly Rate ($)</label><input type="number" class="ta-rate" value="350" min="50" step="25"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var DEST = {
    jamaica: { flight: 500, room: 350, legal: 325 },
    mexico: { flight: 450, room: 320, legal: 650 },
    dr: { flight: 480, room: 330, legal: 800 },
    costarica: { flight: 500, room: 300, legal: 650 },
    usvi: { flight: 450, room: 375, legal: 250 },
    vegas: { flight: 300, room: 180, legal: 195 }
  };
  var TIERS = {
    basic: { base: 1500, incl: 10, over: 25 },
    standard: { base: 4600, incl: 30, over: 75 },
    premium: { base: 13200, incl: 40, over: 130 }
  };
  var GUEST_NIGHTS = 3, GUEST_RATE = 280;

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var d = DEST[val('.ta-dest')] || DEST.jamaica;
    var t = TIERS[val('.ta-tier')] || TIERS.standard;
    var guests = num('.ta-guests'), flight = num('.ta-flight'), nights = num('.ta-nights'), rate = num('.ta-rate');
    if (guests <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your expected guest count</div>';
      return;
    }
    var pkg = t.base + Math.max(0, guests - t.incl) * t.over;
    var couple = pkg + d.legal + 2 * flight + nights * rate + 1200 + 800 + 8 * guests;
    var guestPP = flight + GUEST_NIGHTS * GUEST_RATE;
    var trueTotal = couple + guests * guestPP;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(couple) + '</div>'
      + '<div class="ta-embed-sub">couple total — package, legal, travel, photos, events</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Per Guest</div><div class="rv">' + money(guestPP) + '</div></div>'
      + '<div><div class="rl">True Total (everyone)</div><div class="rv">' + money(trueTotal) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.destinationWeddingCostCalculator = { recalc: calc };
})();
