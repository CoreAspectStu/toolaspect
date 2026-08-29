/*!
 * ToolAspect Party Food Calculator Embed
 * Install: <div id="ta-party-food-quantity-calculator"></div>
 *          <script src="https://toolaspect.com/embed/party-food-quantity-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-party-food-quantity-calculator';
  var BASE = 'https://toolaspect.com/party-food-quantity-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-check{display:flex;align-items:center;font-size:.82rem;color:var(--ta-text);cursor:pointer;margin-top:12px}'
    + '.ta-embed-check input{width:auto;margin-right:6px;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.4rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:14px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px;text-align:center}'
    + '.ta-embed-cell .cl{font-size:.7rem;color:var(--ta-muted);margin-bottom:3px;text-transform:uppercase;letter-spacing:.03em}'
    + '.ta-embed-cell .cv{font-size:1rem;font-weight:700;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}.ta-embed-grid{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'party-food-quantity-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="party-food-quantity-calculator"]')) {
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
    + '<div class="ta-embed-title">Party Food Calculator</div>'
    + '<div class="ta-embed-subtitle">Caterer planning rules: appetizers, mains, sides, desserts, drinks</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Party type</label><select class="ta-ptype">'
    + '<option value="dinner">Sit-down dinner</option>'
    + '<option value="cocktail">Cocktail party (no meal)</option>'
    + '<option value="bbq">BBQ / cookout</option>'
    + '<option value="graduation" selected>Graduation / open house</option>'
    + '<option value="birthday">Kids\' birthday</option>'
    + '<option value="holiday">Holiday gathering</option>'
    + '<option value="wedding">Wedding reception</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Adults</label><input type="number" class="ta-adults" value="30" min="1" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Kids &lt;12</label><input type="number" class="ta-kids" value="10" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Hours</label><input type="number" class="ta-hours" value="3" min="1" max="8" step="0.5"></div>'
    + '</div>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-buffer" checked> Add 10% cushion</label>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">&nbsp;</div>'
    + '<div class="ta-embed-grid">'
    + '<div class="ta-embed-cell"><div class="cl">Appetizers</div><div class="cv ta-pieces">—</div></div>'
    + '<div class="ta-embed-cell"><div class="cl">Main / sides</div><div class="cv ta-main">—</div></div>'
    + '<div class="ta-embed-cell"><div class="cl">Desserts</div><div class="cv ta-dess">—</div></div>'
    + '<div class="ta-embed-cell"><div class="cl">Drinks (12 oz)</div><div class="cv ta-drinks">—</div></div>'
    + '<div class="ta-embed-cell"><div class="cl">Gallons</div><div class="cv ta-gal">—</div></div>'
    + '<div class="ta-embed-cell"><div class="cl">Adult equiv.</div><div class="cv ta-ae">—</div></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var MODELS = {
    dinner: { app: 6, main: 8, side: 8, dessert: 1, label: 'Sit-down dinner' },
    cocktail: { app: 'grazing', main: 0, side: 0, dessert: 1.5, label: 'Cocktail party' },
    bbq: { app: 4, main: 10, side: 10, dessert: 1.5, label: 'BBQ / cookout' },
    graduation: { app: 'grazing', main: 0, side: 0, dessert: 2, label: 'Graduation / open house' },
    birthday: { app: 3, main: 6, side: 6, dessert: 2, label: 'Kids\' birthday' },
    holiday: { app: 8, main: 8, side: 8, dessert: 2, label: 'Holiday gathering' },
    wedding: { app: 10, main: 7, side: 6, dessert: 1, label: 'Wedding reception' }
  };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function calc() {
    var m = MODELS[root.querySelector('.ta-ptype').value];
    var adults = Math.max(0, val('.ta-adults'));
    var kids = Math.max(0, val('.ta-kids'));
    var hours = Math.min(8, Math.max(1, val('.ta-hours') || 2));
    var buffer = root.querySelector('.ta-buffer').checked ? 1.10 : 1;
    var appPer = (m.app === 'grazing') ? 12 + 3 * Math.max(0, hours - 2) : m.app;
    var pieces = Math.ceil((adults * appPer + kids * 0.5 * appPer) * buffer);
    var mainOz = (adults * m.main + kids * 0.5 * m.main) * buffer;
    var sideOz = (adults * m.side + kids * 0.5 * m.side) * buffer;
    var dessert = Math.ceil((adults * m.dessert + kids * 0.5 * m.dessert) * buffer);
    var drinkPer = 2 + 1 * (hours - 1);
    var drinks = Math.ceil((adults * drinkPer + kids * 0.5 * drinkPer) * buffer);
    root.querySelector('.ta-embed-big').textContent = pieces.toLocaleString('en-US');
    root.querySelector('.ta-embed-sub').textContent = m.label + ' · ' + appPer + ' pieces per adult, kids at half';
    root.querySelector('.ta-pieces').textContent = pieces.toLocaleString('en-US');
    root.querySelector('.ta-main').textContent = mainOz > 0 ? (mainOz / 16).toFixed(1) + ' / ' + (sideOz / 16).toFixed(1) + ' lb' : '—';
    root.querySelector('.ta-dess').textContent = dessert.toLocaleString('en-US');
    root.querySelector('.ta-drinks').textContent = drinks.toLocaleString('en-US');
    root.querySelector('.ta-gal').textContent = (drinks * 12 / 128).toFixed(1);
    root.querySelector('.ta-ae').textContent = (adults + kids * 0.5).toFixed(1);
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.partyFoodQuantityCalculator = { recalc: calc };
})();
