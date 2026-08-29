/*!
 * ToolAspect Bartender Cost Calculator Embed
 * Install: <div id="ta-bartender-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/bartender-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-bartender-cost-calculator';
  var BASE = 'https://toolaspect.com/bartender-cost-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'bartender-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="bartender-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Bartender Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Crew size, hours, mobile bar, and tip</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guests</label><input class="ta-guests" type="number" value="100" min="1" max="1000" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Hours of service</label><input class="ta-hours" type="number" value="4" min="2" max="12" step="0.5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Bar style</label><select class="ta-style">'
    + '<option value="bw">Beer &amp; wine only</option>'
    + '<option value="sig">Beer, wine + signature</option>'
    + '<option value="full" selected>Full cocktail bar</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Gratuity</label><select class="ta-tip">'
    + '<option value="0">None (tip jar)</option>'
    + '<option value="15">15% of labor</option>'
    + '<option value="18" selected>18% of labor</option>'
    + '<option value="20">20% of labor</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group" style="display:flex;gap:14px;flex-wrap:wrap">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-pkg" checked style="margin-right:6px"> Mobile bar package (+$500)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-setup" checked style="margin-right:6px"> Bill 0.5 hr setup</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var DIV = { bw: 75, sig: 60, full: 50 };
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function val(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function sel(sel2) { var el = root.querySelector(sel2); return el ? el.value : ''; }
  function chk(sel3) { var el = root.querySelector(sel3); return el ? el.checked : false; }

  function calc() {
    var g = val('.ta-guests');
    var style = DIV[sel('.ta-style')];
    var hrs = Math.max(2, val('.ta-hours'));
    var rate = 50;
    var billed = hrs + (chk('.ta-setup') ? 0.5 : 0);
    var n = style > 0 ? Math.ceil(g / style) : 0;
    var labor = n * billed * rate;
    var pkg = chk('.ta-pkg') ? 500 : 0;
    var tipPct = parseFloat(sel('.ta-tip')) || 0;
    var tip = labor * tipPct / 100;
    var total = labor + pkg + tip;
    var lo = labor * 0.6 + (chk('.ta-pkg') ? 300 : 0) + tip * 0.6;
    var hi = labor * 1.4 + (chk('.ta-pkg') ? 800 : 0) + tip * 1.4;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(total) + '</div>'
      + '<div class="ta-embed-sub">' + n + ' bartender' + (n === 1 ? '' : 's') + ' &middot; ' + billed + ' billed hrs &middot; range ' + usd(lo) + ' to ' + usd(hi) + '</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Labor subtotal</span><strong>' + usd(labor) + '</strong></div>'
      + '<div class="ta-embed-cell"><span>Cost per guest</span><strong>' + (g > 0 ? usd(total / g) : '—') + '</strong></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.bartenderCostCalculator = { recalc: calc };
})();
