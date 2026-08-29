/*!
 * ToolAspect Wedding DJ Cost Calculator Embed
 * Install: <div id="ta-wedding-dj-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-dj-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-dj-cost-calculator';
  var BASE = 'https://toolaspect.com/wedding-dj-cost-calculator/';

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
    + '.ta-embed-checks{display:grid;grid-template-columns:1fr 1fr;gap:6px 12px;margin-bottom:4px}'
    + '.ta-embed-check{display:flex;align-items:center;gap:6px;font-size:.8rem;color:var(--ta-text);cursor:pointer}'
    + '.ta-embed-check input{width:14px;height:14px;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-band{margin-top:10px;padding-top:10px;border-top:1px dashed var(--ta-border);font-size:.88rem;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}.ta-embed-checks{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-dj-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-dj-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding DJ Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">4-hour base + add-ons, with live-band comparison</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Tier</label><select class="ta-tier">'
    + '<option value="emerging">Emerging ($800)</option><option value="standard" selected>Standard ($1,400)</option>'
    + '<option value="premium">Premium ($2,200)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Extra hours</label><input type="number" class="ta-hrs" value="0" min="0" max="8" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Band size</label><select class="ta-band">'
    + '<option value="0">No band</option><option value="2200">3-piece</option><option value="3000">4-piece</option>'
    + '<option value="4000" selected>5-piece</option><option value="5500">6-piece</option><option value="7000">8–10 piece</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-checks">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-a" value="300" checked> Ceremony + MC</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-a" value="200"> Cocktail sound</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-a" value="350" checked> Uplighting</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-a" value="250"> Dance lighting</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-a" value="150"> Gobo</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-a" value="200"> Karaoke</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-a" value="500"> Photo booth</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-a" value="100"> Travel</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var TIERS = { emerging: [500, 800, 1200], standard: [1000, 1400, 2000], premium: [1500, 2200, 3500] };

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
    var t = TIERS[str('.ta-tier')] || TIERS.standard;
    var hrs = val('.ta-hrs');
    var add = 0;
    root.querySelectorAll('.ta-a').forEach(function (c) { if (c.checked) add += parseFloat(c.value) || 0; });
    var ty = t[1] + hrs * 150 + add;
    var band = val('.ta-band');
    var h = '<div class="ta-embed-big">' + usd(ty) + '</div>'
      + '<div class="ta-embed-sub">' + usd(t[1]) + ' base + ' + Math.round(4 + hrs) + ' hrs + ' + usd(add) + ' add-ons</div>';
    if (band > 0) {
      var d = band - ty;
      h += '<div class="ta-embed-band">Same 4 hours as a live band: <strong>' + usd(band) + '</strong> — ' + (d >= 0 ? usd(d) + ' more' : usd(-d) + ' less') + '</div>';
    }
    root.querySelector('.ta-embed-result').innerHTML = h;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingDjCostCalculator = { recalc: calc };
})();
