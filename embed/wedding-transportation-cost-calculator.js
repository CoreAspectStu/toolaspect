/*!
 * ToolAspect Wedding Transportation Cost Calculator Embed
 * Install: <div id="ta-wedding-transportation-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-transportation-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-transportation-cost-calculator';
  var BASE = 'https://toolaspect.com/wedding-transportation-cost-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'wedding-transportation-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-transportation-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Transportation Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Limo, party bus, and shuttle math with minimums and tip</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Couple&rsquo;s vehicle</label><select class="ta-v1">'
    + '<option value="limo" selected>Stretch limo ($115/hr, 3h min)</option>'
    + '<option value="suv">SUV stretch ($200/hr, 3h min)</option>'
    + '<option value="vintage">Vintage car ($200/hr, 2h min)</option>'
    + '<option value="none">None</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Guest shuttle</label><select class="ta-v2">'
    + '<option value="none">None</option>'
    + '<option value="bus" selected>Party bus ($210/hr, 4h min)</option>'
    + '<option value="coach">Charter bus ($225/hr, 5h min)</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guest count</label><input class="ta-guests" type="number" value="120" min="1" max="600" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Gratuity (%)</label><input class="ta-tip" type="number" value="18" min="0" max="30" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var RATES = {
    limo: { rate: 115, min: 3 },
    suv: { rate: 200, min: 3 },
    vintage: { rate: 200, min: 2 },
    bus: { rate: 210, min: 4 },
    coach: { rate: 225, min: 5 },
    none: { rate: 0, min: 0 }
  };
  function usd(n) { return '$' + (n % 1 ? n.toFixed(2) : Math.round(n).toLocaleString('en-US')); }
  function pick(sel) { var el = root.querySelector(sel); return el ? el.value : 'none'; }
  function val(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }

  function line(v) {
    var r = RATES[v];
    return r.rate * r.min; // compact embed prices the minimum-hours booking
  }

  function calc() {
    var v1 = pick('.ta-v1'), v2 = pick('.ta-v2');
    var sub = line(v1) + line(v2);
    var tip = sub * val('.ta-tip') / 100;
    var total = sub + tip;
    var guests = val('.ta-guests');
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + (sub ? usd(total) : '—') + '</div>'
      + '<div class="ta-embed-sub">' + (sub ? 'total incl. gratuity &middot; minimum hours at typical rates' : 'pick a vehicle to price your day') + '</div>'
      + (sub ? '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Vehicles before tip</span><strong>' + usd(sub) + '</strong></div>'
      + '<div class="ta-embed-cell"><span>Per guest</span><strong>' + (guests ? usd(total / guests) : '—') + '</strong></div>'
      + '</div>' : '');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingTransportationCostCalculator = { recalc: calc };
})();
