/*!
 * ToolAspect Hotel Room Block Calculator Embed
 * Install: <div id="ta-hotel-room-block-calculator"></div>
 *          <script src="https://toolaspect.com/embed/hotel-room-block-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-hotel-room-block-calculator';
  var BASE = 'https://toolaspect.com/hotel-room-block-calculator/';

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
    + '.ta-embed-stats{display:flex;justify-content:center;gap:24px;margin-top:10px;font-size:.85rem;color:var(--ta-text);flex-wrap:wrap}'
    + '.ta-embed-stats span b{display:block;font-size:1.05rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}.ta-embed-stats{gap:14px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'hotel-room-block-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="hotel-room-block-calculator"]')) {
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
    + '<div class="ta-embed-title">Hotel Room Block Calculator</div>'
    + '<div class="ta-embed-subtitle">Pickup, comps, and attrition exposure</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Rooms in block</label><input type="number" class="ta-rooms" value="25" min="1" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Nights per room</label><input type="number" class="ta-nights" value="2" min="1" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Group rate ($)</label><input type="number" class="ta-rate" value="169" min="0" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Expected pickup (%)</label><input type="number" class="ta-pickup" value="88" min="0" max="100" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Occupancy tax (%)</label><input type="number" class="ta-tax" value="12.5" min="0" max="20" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Comp policy</label><select class="ta-comp">'
    + '<option value="10">1 per 10 rooms (wedding)</option>'
    + '<option value="40">1 per 40 room-nights</option>'
    + '<option value="50">1 per 50 room-nights</option>'
    + '<option value="0">None</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Resort fee ($/night)</label><input type="number" class="ta-fee" value="20" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Attrition floor (%)</label><input type="number" class="ta-attr" value="80" min="50" max="100" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var rooms = val('.ta-rooms'), nights = val('.ta-nights'), rate = val('.ta-rate');
    var pickup = val('.ta-pickup') / 100, tax = val('.ta-tax') / 100, fee = val('.ta-fee');
    var compPol = +root.querySelector('.ta-comp').value;
    var attrFloor = val('.ta-attr') / 100;
    var rn = rooms * nights;
    if (rn <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">&mdash;</div><div class="ta-embed-sub">Enter your block details</div>';
      return;
    }
    var picked = Math.round(rn * pickup);
    var roomsPicked = Math.round(rooms * pickup);
    var comps = compPol === 10 ? Math.floor(roomsPicked / 10) : (compPol > 0 ? Math.floor(picked / compPol) : 0);
    var net = picked * rate * (1 + tax) + picked * fee - comps * rate;
    var floorN = Math.ceil(rn * attrFloor);
    var attrTxt = picked >= floorN
      ? '<span style="color:#16a34a">✓ Clears ' + floorN + '-night attrition floor</span>'
      : '<span style="color:#dc2626">⚠ ' + (floorN - picked) + ' nights short — exposure ' + money((floorN - picked) * rate) + '</span>';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(net) + '</div>'
      + '<div class="ta-embed-sub">expected guest spend, net of ' + comps + ' comp night' + (comps === 1 ? '' : 's') + '</div>'
      + '<div class="ta-embed-stats">'
      + '<span>Room-nights<b>' + rn + '</b></span>'
      + '<span>Picked up<b>' + picked + '</b></span>'
      + '<span>Comp credit<b>' + money(comps * rate) + '</b></span>'
      + '</div>'
      + '<div class="ta-embed-sub" style="margin-top:10px">' + attrTxt + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.hotelRoomBlock = { recalc: calc };
})();
