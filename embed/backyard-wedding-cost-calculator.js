/*!
 * ToolAspect Backyard Wedding Cost Calculator Embed
 * Install: <div id="ta-backyard-wedding-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/backyard-wedding-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-backyard-wedding-cost-calculator';
  var BASE = 'https://toolaspect.com/backyard-wedding-cost-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'backyard-wedding-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="backyard-wedding-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Backyard Wedding Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">The rental stack vs the venue fee you are skipping</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guests</label><input class="ta-guests" type="number" value="75" min="2" max="400" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Tent</label><select class="ta-tent">'
    + '<option value="none">No tent</option>'
    + '<option value="popup">20x20 pop-up</option>'
    + '<option value="pole" selected>40x60 pole tent</option>'
    + '<option value="frame">60x80 frame + walls</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Restrooms</label><select class="ta-rest">'
    + '<option value="house">House bathrooms</option>'
    + '<option value="porta">Porta-potties (1/50 guests)</option>'
    + '<option value="trailer" selected>Restroom trailer</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Catering (per head)</label><select class="ta-cater">'
    + '<option value="self">Self-catered ($15)</option>'
    + '<option value="bbq">BBQ drop-off ($35)</option>'
    + '<option value="buffet" selected>Buffet w/ staff ($60)</option>'
    + '<option value="plated">Plated ($100)</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Bar (per head)</label><select class="ta-bar">'
    + '<option value="none">No bar</option>'
    + '<option value="bw" selected>Beer &amp; wine ($20)</option>'
    + '<option value="lim">Limited cocktails ($25)</option>'
    + '<option value="open">Open bar ($38)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group" style="display:flex;gap:14px;flex-wrap:wrap">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-floor" checked style="margin-right:6px"> Dance floor</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-gen" checked style="margin-right:6px"> Generator</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-ins" checked style="margin-right:6px"> Insurance</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var TENT = { none: [0, 0, 0], popup: [500, 750, 1000], pole: [1600, 2500, 3500], frame: [3600, 4500, 5500] };
  var CATER = { self: [12, 15, 18], bbq: [25, 35, 50], buffet: [40, 60, 80], plated: [70, 100, 150] };
  var BAR = { none: [0, 0, 0], bw: [15, 20, 25], lim: [20, 25, 30], open: [30, 38, 45] };
  var CHAIR = [5, 6.5, 8];
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function val(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function sel(sel2) { var el = root.querySelector(sel2); return el ? el.value : ''; }
  function chk(sel3) { var el = root.querySelector(sel3); return el ? el.checked : false; }

  function calc() {
    var g = val('.ta-guests');
    var tent = TENT[sel('.ta-tent')];
    var floor = chk('.ta-floor') ? [300, 600, 1200] : [0, 0, 0];
    var light = [150, 300, 500];
    var gen = chk('.ta-gen') ? [150, 250, 400] : [0, 0, 0];
    var ins = chk('.ta-ins') ? [100, 175, 300] : [0, 0, 0];
    var clean = [200, 300, 400];
    var restSel = sel('.ta-rest');
    var portaCount = Math.ceil(g / 50);
    var rest = restSel === 'porta' ? [100 * portaCount, 150 * portaCount, 200 * portaCount] : restSel === 'trailer' ? [1250, 1800, 3000] : [0, 0, 0];
    var cater = CATER[sel('.ta-cater')];
    var bar = BAR[sel('.ta-bar')];
    var out = [0, 0, 0];
    var flat = [tent, floor, rest, light, gen, ins, clean];
    flat.forEach(function (l) { for (var j = 0; j < 3; j++) out[j] += l[j]; });
    for (var k = 0; k < 3; k++) out[k] += g * (cater[k] + bar[k] + CHAIR[k]);
    var hotel = 2500 + 95 * g;
    var diff = hotel - out[1];
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(out[1]) + '</div>'
      + '<div class="ta-embed-sub">typical total &middot; range ' + usd(out[0]) + ' to ' + usd(out[2]) + '</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Per guest</span><strong>' + (g > 0 ? usd(out[1] / g) : '—') + '</strong></div>'
      + '<div class="ta-embed-cell"><span>Same guests at a hotel</span><strong>' + usd(hotel) + '</strong></div>'
      + '</div>'
      + '<div class="ta-embed-sub" style="margin-top:10px">' + (diff >= 0 ? 'Backyard saves ' + usd(diff) : 'Backyard costs ' + usd(-diff) + ' more') + ' than a hotel reception</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.backyardWeddingCostCalculator = { recalc: calc };
})();
