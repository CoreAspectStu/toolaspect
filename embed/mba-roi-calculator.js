/*!
 * ToolAspect MBA ROI Calculator Embed
 * Install: <div id="ta-mba-roi-calculator"></div>
 *          <script src="https://toolaspect.com/embed/mba-roi-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-mba-roi-calculator';
  var BASE = 'https://toolaspect.com/mba-roi-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}'
    + '@media(max-width:520px){.ta-embed-grid{grid-template-columns:1fr 1fr}}'
    + '.ta-embed-field{display:flex;flex-direction:column;gap:4px}'
    + '.ta-embed-field label{font-size:.76rem;color:var(--ta-muted);font-weight:600}'
    + '.ta-embed-field input,.ta-embed-field select{width:100%;padding:8px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;'
    + 'color:var(--ta-text);font-size:.9rem;outline:none;font-family:inherit}'
    + '.ta-embed-field input:focus,.ta-embed-field select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '@media(max-width:520px){.ta-embed-row{grid-template-columns:1fr 1fr}}'
    + '.ta-embed-box{background:var(--ta-bg);border-radius:10px;padding:12px;text-align:center}'
    + '.ta-embed-box .l{font-size:.74rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-box .v{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-verdict{margin-top:12px;background:var(--ta-bg);border-radius:10px;padding:12px;text-align:center;font-size:.88rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'mba-roi-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="mba-roi-calculator"]')) {
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

  function field(id, label, val, step) {
    return '<div class="ta-embed-field"><label>' + label + '</label>'
      + '<input type="number" id="' + id + '" value="' + val + '" min="0" step="' + step + '"></div>';
  }

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">MBA ROI Calculator</div>'
    + '<div class="ta-embed-subtitle">Is the degree worth it? Total cost vs salary uplift</div>'
    + '<div class="ta-embed-card"><div class="ta-embed-grid">'
    + '<div class="ta-embed-field"><label>Format</label><select id="ta-mba-format">'
    + '<option value="ft">Full-time</option><option value="pt">Part-time</option><option value="ol">Online</option><option value="emba">EMBA</option></select></div>'
    + field('ta-mba-tuition', 'Tuition + fees ($)', 110000, 1000)
    + field('ta-mba-other', 'Other costs ($)', 30000, 1000)
    + field('ta-mba-years', 'Years in program', 2, 1)
    + field('ta-mba-sponsor', 'Employer help ($)', 0, 1000)
    + field('ta-mba-forgone', '% salary forgone', 100, 5)
    + field('ta-mba-cur', 'Current salary ($/yr)', 75000, 1000)
    + field('ta-mba-post', 'Post-MBA salary ($/yr)', 115000, 1000)
    + field('ta-mba-raise', 'Raise w/o MBA (%/yr)', 3, 0.5)
    + field('ta-mba-disc', 'Discount rate (%)', 5, 0.5)
    + field('ta-mba-horizon', 'Horizon (years)', 10, 1)
    + '</div></div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="ta-mba-hero">—</div><div class="ta-embed-sub" id="ta-mba-herosub"></div>'
    + '<div class="ta-embed-row">'
    + '<div class="ta-embed-box"><div class="l">Forgone salary</div><div class="v" id="ta-mba-lost">—</div></div>'
    + '<div class="ta-embed-box"><div class="l">Break-even</div><div class="v" id="ta-mba-be">—</div></div>'
    + '<div class="ta-embed-box"><div class="l">NPV</div><div class="v" id="ta-mba-npv">—</div></div>'
    + '</div><div class="ta-embed-verdict" id="ta-mba-verdict"></div></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function fmt(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  function gv(id) { var v = parseFloat(root.querySelector('#' + id).value); return isNaN(v) ? 0 : v; }

  var PRESETS = {
    ft: { tuition: 110000, other: 30000, years: 2, forgone: 100 },
    pt: { tuition: 90000, other: 2000, years: 3, forgone: 0 },
    ol: { tuition: 40000, other: 2000, years: 2, forgone: 0 },
    emba: { tuition: 130000, other: 5000, years: 2, forgone: 0 }
  };

  function calc() {
    var years = Math.max(1, Math.min(5, gv('ta-mba-years') || 1));
    var forgonePct = Math.max(0, Math.min(100, gv('ta-mba-forgone'))) / 100;
    var cur = gv('ta-mba-cur'), raise = gv('ta-mba-raise') / 100;
    var disc = gv('ta-mba-disc') / 100;
    var horizon = Math.max(1, Math.min(40, Math.round(gv('ta-mba-horizon') || 10)));
    var lost = 0, running = cur;
    for (var y = 1; y <= years; y++) { running *= (1 + raise); lost += running * forgonePct; }
    var netCost = Math.max(0, gv('ta-mba-tuition') + gv('ta-mba-other') - gv('ta-mba-sponsor'));
    var invest = netCost + lost;
    var uplift = Math.max(0, gv('ta-mba-post') - cur);
    root.querySelector('#ta-mba-hero').textContent = fmt(invest);
    root.querySelector('#ta-mba-herosub').textContent = lost > 0
      ? 'includes ' + fmt(lost) + ' of forgone salary'
      : 'no forgone salary — ' + fmt(netCost) + ' program cost';
    root.querySelector('#ta-mba-lost').textContent = fmt(lost);
    var be = root.querySelector('#ta-mba-be'), npvEl = root.querySelector('#ta-mba-npv'), v = root.querySelector('#ta-mba-verdict');
    if (invest <= 0 || uplift <= 0) {
      be.textContent = 'Never';
      npvEl.textContent = fmt(-invest);
      v.textContent = 'No payback on this setup — the salary uplift never exceeds the investment.';
      return;
    }
    be.textContent = (invest / uplift).toFixed(1) + ' yrs';
    var pv = 0;
    for (var y2 = 1; y2 <= horizon; y2++) pv += uplift / Math.pow(1 + disc, y2);
    var npv = pv - invest;
    npvEl.textContent = (npv >= 0 ? '+' : '-') + fmt(Math.abs(npv));
    v.textContent = npv >= 0
      ? 'Breaks even ' + (invest / uplift).toFixed(1) + ' yrs after graduating; +' + fmt(uplift * horizon - invest) + ' simple over ' + horizon + ' years.'
      : 'NPV negative after discounting — cheaper program, bigger bump, or longer horizon needed.';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', function (e) {
    if (e.target.id === 'ta-mba-format') {
      var p = PRESETS[e.target.value];
      root.querySelector('#ta-mba-tuition').value = p.tuition;
      root.querySelector('#ta-mba-other').value = p.other;
      root.querySelector('#ta-mba-years').value = p.years;
      root.querySelector('#ta-mba-forgone').value = p.forgone;
    }
    calc();
  });
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.mbaRoiCalculator = { recalc: calc };
})();
