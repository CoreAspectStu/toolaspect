/*!
 * ToolAspect Prenup Cost Calculator Embed
 * Install: <div id="ta-prenup-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/prenup-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-prenup-cost-calculator';
  var BASE = 'https://toolaspect.com/prenup-cost-calculator/';

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
    + '.ta-embed-check{display:inline-flex;align-items:center;font-size:.8rem;color:var(--ta-text);cursor:pointer;margin:0 10px 6px 0}'
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
    + '.ta-embed-legal{text-align:center;font-size:.7rem;margin-top:6px;color:var(--ta-muted)}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'prenup-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="prenup-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Prenup Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Online, flat-fee, and hourly attorney paths priced</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Path</label><select class="ta-path">'
    + '<option value="online">Online platform</option>'
    + '<option value="flat" selected>Attorney flat fee</option>'
    + '<option value="hourly">Attorney hourly</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Agreement</label><select class="ta-kind">'
    + '<option value="pre" selected>Prenup</option>'
    + '<option value="post">Postnup</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>What it covers (tick all that apply)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-cov" style="margin-right:6px"> Real estate</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-cov" style="margin-right:6px"> Business</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-cov" style="margin-right:6px"> Investments/equity</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-cov" style="margin-right:6px"> Inheritance/trust</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-cov" style="margin-right:6px"> Spousal support</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-cov" style="margin-right:6px"> Debt</label>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Independent review for other spouse</label><select class="ta-review">'
    + '<option value="1" selected>Yes ($500-$1,500)</option>'
    + '<option value="0">No</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-legal">Cost estimates only. Not legal advice.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var FLAT = { simple: [1000, 2000, 3000], moderate: [2500, 4000, 6000], complex: [5000, 8000, 20000] };
  var HOURS = { simple: 6, moderate: 12, complex: 25 };
  var REVIEW = [500, 799, 1500];
  var ONLINE = [649, 649, 649];
  var POST = [0, 500, 1000];
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function sel2(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }

  function complexity() {
    var n = 0;
    root.querySelectorAll('.ta-cov').forEach(function (c) { if (c.checked) n++; });
    return n <= 1 ? 'simple' : (n <= 3 ? 'moderate' : 'complex');
  }

  function calc() {
    var path = sel2('.ta-path'), kind = sel2('.ta-kind'), rev = sel2('.ta-review') === '1';
    var comp = complexity();
    var base;
    if (path === 'online') base = ONLINE.slice();
    else if (path === 'flat') base = FLAT[comp].slice();
    else { var h = HOURS[comp]; base = [h * 300, h * 300, h * 300]; }
    var out = [0, 1, 2].map(function (j) {
      return base[j] + (rev ? (path === 'online' ? 2 : 1) * REVIEW[j] : 0) + (kind === 'post' ? POST[j] : 0);
    });
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(out[1]) + '</div>'
      + '<div class="ta-embed-sub">typical ' + (kind === 'post' ? 'postnup' : 'prenup') + ' total &middot; range ' + usd(out[0]) + ' to ' + usd(out[2]) + '</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Complexity</span><strong>' + comp + '</strong></div>'
      + '<div class="ta-embed-cell"><span>Path</span><strong>' + (path === 'online' ? 'Online' : path === 'flat' ? 'Flat fee' : 'Hourly') + '</strong></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.prenupCostCalculator = { recalc: calc };
})();
