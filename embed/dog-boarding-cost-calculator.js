/*!
 * ToolAspect Dog Boarding Cost Calculator Embed
 * Install: <div id="ta-dog-boarding-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-boarding-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-boarding-cost-calculator';
  var BASE = 'https://toolaspect.com/dog-boarding-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-check{display:flex;align-items:center;font-size:.82rem;color:var(--ta-text);cursor:pointer;margin-top:4px}'
    + '.ta-embed-check input{width:auto;margin-right:6px;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.4rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-rows{margin-top:14px;text-align:left;font-size:.88rem}'
    + '.ta-embed-rows div{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--ta-border)}'
    + '.ta-embed-rows div:last-child{border-bottom:none;font-weight:700}'
    + '.ta-embed-note{text-align:left;background:var(--ta-bg);border-radius:8px;padding:12px 14px;margin-top:14px;font-size:.82rem;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-boarding-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-boarding-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Dog Boarding Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Nights × tier + add-ons + holiday surcharge</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Nights</label><input type="number" class="ta-nights" value="7" min="1" max="90" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Service tier</label><select class="ta-tier">'
    + '<option value="kennel">Basic kennel</option>'
    + '<option value="standard" selected>Standard facility</option>'
    + '<option value="rover">Sitter home (app)</option>'
    + '<option value="inhome">In-home sitter</option>'
    + '<option value="luxury">Luxury pet hotel</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Holiday nights in stay</label><input type="number" class="ta-holn" value="2" min="0" max="30" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Holiday surcharge (%)</label><input type="number" class="ta-holp" value="15" min="0" max="50" step="5"></div>'
    + '</div>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-play" checked> Playtime sessions ($12/night)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-med" checked> Medication ($7/night)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-walk"> Extra walks ($8/night)</label>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">&nbsp;</div>'
    + '<div class="ta-embed-rows">'
    + '<div><span>Base (nights × rate)</span><span class="ta-r-base">—</span></div>'
    + '<div><span>Add-ons</span><span class="ta-r-add">—</span></div>'
    + '<div><span>Holiday surcharge</span><span class="ta-r-sur">—</span></div>'
    + '</div>'
    + '<div class="ta-embed-note ta-verdict"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var RATES = { kennel: 35, standard: 55, rover: 50, inhome: 65, luxury: 110 };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function fmt(n) { return '$' + Math.round(n * 100) / 100; }

  function calc() {
    var nights = Math.max(1, val('.ta-nights'));
    var rate = RATES[root.querySelector('.ta-tier').value];
    var addonsPer = 0;
    if (root.querySelector('.ta-walk').checked) addonsPer += 8;
    if (root.querySelector('.ta-play').checked) addonsPer += 12;
    if (root.querySelector('.ta-med').checked) addonsPer += 7;
    var holN = Math.min(nights, Math.max(0, val('.ta-holn')));
    var holP = val('.ta-holp') / 100;
    var base = nights * rate;
    var add = nights * addonsPer;
    var sur = holN * rate * holP;
    var total = base + add + sur;
    root.querySelector('.ta-embed-big').textContent = fmt(total);
    root.querySelector('.ta-embed-sub').textContent = fmt(total / nights) + ' per night all-in at ' + fmt(rate) + '/night base';
    root.querySelector('.ta-r-base').textContent = fmt(base);
    root.querySelector('.ta-r-add').textContent = fmt(add);
    root.querySelector('.ta-r-sur').textContent = fmt(sur);
    root.querySelector('.ta-verdict').textContent = 'National mid-range rates: kennel $35, standard facility $55, sitter-home about $49-50 (Rover national average), in-home sitter $65, luxury hotel $110. Add-ons are the national norms ($5-10 walks, $10-15 playtime, $5-10 meds). Estimate, not a quote — verify vaccination requirements and activity pricing with the facility.';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogBoardingCostCalculator = { recalc: calc };
})();
