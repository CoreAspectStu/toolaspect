/*!
 * ToolAspect Vasectomy Reversal Cost Calculator Embed
 * Install: <div id="ta-vasectomy-reversal-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/vasectomy-reversal-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-vasectomy-reversal-cost-calculator';
  var BASE = 'https://toolaspect.com/vasectomy-reversal-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card h4{font-size:.82rem;margin:0 0 10px;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;font-weight:600}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-breakdown{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px;text-align:center}'
    + '.ta-embed-breakdown div{background:var(--ta-bg);border-radius:8px;padding:8px}'
    + '.ta-embed-breakdown .k{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-breakdown .v{font-size:1rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '.ta-embed-legal{text-align:center;font-size:.68rem;color:var(--ta-muted);margin-top:6px;line-height:1.5}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-breakdown{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'vasectomy-reversal-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="vasectomy-reversal-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Vasectomy Reversal Cost</div>'
    + '<div class="ta-embed-subtitle">Typical US price by setting, plus pregnancy odds by interval</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Years since vasectomy</label><select class="ta-years">'
    + '<option value="lt3">Under 3</option><option value="3to8" selected>3–8</option>'
    + '<option value="9to14">9–14</option><option value="15plus">15+</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Setting</label><select class="ta-setting">'
    + '<option value="office">Office / center</option><option value="center" selected>Surgery center</option>'
    + '<option value="hospital">Hospital OR</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Procedure</label><select class="ta-proc">'
    + '<option value="vv" selected>Vasovasostomy</option><option value="ve">VE needed</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-legal">Commonly published national ranges, not a quote. Educational estimate, not medical advice.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var RATES = { lt3: [97, 76], '3to8': [88, 53], '9to14': [80, 44], '15plus': [71, 30] };

  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var setting = root.querySelector('.ta-setting').value;
    var ve = root.querySelector('.ta-proc').value === 've';
    var years = root.querySelector('.ta-years').value;
    var surgeon = setting === 'hospital' ? [3500, 7500] : setting === 'center' ? [2500, 5000] : [2500, 3500];
    var anest = setting === 'hospital' ? [1000, 3000] : setting === 'center' ? [500, 1500] : [500, 800];
    var facility = setting === 'hospital' ? [4000, 8000] : setting === 'center' ? [1500, 4000] : [1500, 2500];
    var veAdd = ve ? [1000, 3000] : [0, 0];
    var low = surgeon[0] + anest[0] + facility[0] + veAdd[0];
    var high = surgeon[1] + anest[1] + facility[1] + veAdd[1];
    var typ = (surgeon[0] + surgeon[1] + anest[0] + anest[1] + facility[0] + facility[1] + 2 * (veAdd[0] + veAdd[1]) ) / 4;
    var r = RATES[years];
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(typ) + '</div>'
      + '<div class="ta-embed-sub">typical all-in (range ' + usd(low) + ' – ' + usd(high) + '), usually self-pay</div>'
      + '<div class="ta-embed-breakdown">'
      + '<div><div class="k">Patency odds</div><div class="v">' + r[0] + '%</div></div>'
      + '<div><div class="k">Pregnancy odds</div><div class="v">' + r[1] + '%</div></div>'
      + '<div><div class="k">IVF alternative</div><div class="v">$15k–$20k</div></div>'
      + '<div><div class="k">Odds source</div><div class="v" style="font-size:.8rem">VSG study 1991</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.vasectomyReversalCost = { recalc: calc };
})();
