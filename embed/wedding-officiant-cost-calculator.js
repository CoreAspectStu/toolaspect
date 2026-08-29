/*!
 * ToolAspect Wedding Officiant Cost Calculator Embed
 * Install: <div id="ta-wedding-officiant-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-officiant-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-officiant-cost-calculator';
  var BASE = 'https://toolaspect.com/wedding-officiant-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;gap:8px;font-size:.85rem;padding:4px 0;cursor:pointer}'
    + '.ta-embed-check input{width:auto;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:flex;justify-content:center;gap:26px;margin-top:12px;flex-wrap:wrap}'
    + '.ta-embed-range div{font-size:.82rem;color:var(--ta-muted)}'
    + '.ta-embed-range strong{display:block;font-size:1.05rem;color:var(--ta-text)}'
    + '.ta-embed-note{font-size:.72rem;color:var(--ta-muted);text-align:center;margin-bottom:10px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-range{gap:14px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-officiant-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-officiant-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Officiant Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Fee bands by officiant type + add-ons</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Officiant type</label><select class="ta-type">'
    + '<option value="courthouse">Courthouse / JP</option>'
    + '<option value="friend">Friend ordained online</option>'
    + '<option value="clergy">Religious clergy</option>'
    + '<option value="pro" selected>Professional</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Region</label><select class="ta-region">'
    + '<option value="lcol">Lower-cost area</option>'
    + '<option value="mcol" selected>Typical market</option>'
    + '<option value="hcol">High-cost metro</option></select></div>'
    + '</div>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-a-rehearsal"> Rehearsal attendance (+$50&ndash;$150)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-a-script"> Custom ceremony writing (+$100&ndash;$300)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-a-counsel"> Premarital counseling (+$100&ndash;$400)</label>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-note">Typical national ranges 2025&ndash;2026; marriage license ($30&ndash;$100) separate.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var TYPES = {
    courthouse: [25, 75, 150],
    friend: [0, 50, 150],
    clergy: [100, 250, 500],
    pro: [250, 450, 800]
  };
  var REGION = { lcol: 0.85, mcol: 1.0, hcol: 1.35 };
  var ADDONS = [
    { sel: '.ta-a-rehearsal', band: [50, 100, 150] },
    { sel: '.ta-a-script', band: [100, 200, 300] },
    { sel: '.ta-a-counsel', band: [100, 200, 400] }
  ];
  function fmt(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function calc() {
    var typeSel = root.querySelector('.ta-type');
    var regSel = root.querySelector('.ta-region');
    var base = TYPES[typeSel ? typeSel.value : 'pro'];
    var rf = REGION[regSel ? regSel.value : 'mcol'];
    var lo = base[0] * rf, ty = base[1] * rf, hi = base[2] * rf;
    ADDONS.forEach(function (a) {
      var el = root.querySelector(a.sel);
      if (el && el.checked) { lo += a.band[0]; ty += a.band[1]; hi += a.band[2]; }
    });
    root.querySelector('.ta-embed-result').innerHTML =
      '<div class="ta-embed-big">' + fmt(ty) + '</div>'
      + '<div class="ta-embed-sub">estimated typical officiant cost</div>'
      + '<div class="ta-embed-range"><div>Low<strong>' + fmt(lo) + '</strong></div>'
      + '<div>Typical<strong>' + fmt(ty) + '</strong></div>'
      + '<div>High<strong>' + fmt(hi) + '</strong></div></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingOfficiantCostCalculator = { recalc: calc };
})();
