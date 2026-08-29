/*!
 * ToolAspect Wedding Planner Cost Calculator Embed
 * Install: <div id="ta-wedding-planner-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-planner-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-planner-cost-calculator';
  var BASE = 'https://toolaspect.com/wedding-planner-cost-calculator/';

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
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-grid{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-planner-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-planner-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Planner Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Full service, partial, or month-of, priced for your wedding</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Total budget ($)</label><input type="number" class="ta-budget" value="34200" min="1000" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Guest count</label><input type="number" class="ta-guests" value="117" min="2" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Planner tier</label><select class="ta-tier">'
    + '<option value="full" selected>Full service (avg $3,800)</option>'
    + '<option value="partial">Partial ($1,800-$6,000)</option>'
    + '<option value="monthof">Month-of ($1,200-$3,500)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Market</label><select class="ta-region">'
    + '<option value="small">Small town / rural</option>'
    + '<option value="mid" selected>Mid-size metro</option>'
    + '<option value="major">Major metro</option>'
    + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var TIERS = {
    full: { lo: 3000, typ: 3800, hi: 8000, name: 'full-service planning' },
    partial: { lo: 1800, typ: 2600, hi: 5500, name: 'partial planning' },
    monthof: { lo: 1200, typ: 1700, hi: 3500, name: 'month-of coordination' }
  };
  var REGIONS = { small: 0.85, mid: 1.0, major: 1.30 };
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function val(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }

  function calc() {
    var budget = val('.ta-budget');
    var guests = val('.ta-guests');
    var tier = TIERS[root.querySelector('.ta-tier').value];
    var f = REGIONS[root.querySelector('.ta-region').value] * (1 + Math.max(0, guests - 100) / 50 * 0.10);
    var lo = tier.lo * f, typ = tier.typ * f, hi = tier.hi * f;
    if (budget <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your total budget</div>';
      return;
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(typ) + '</div>'
      + '<div class="ta-embed-sub">typical ' + tier.name + ' fee · range ' + usd(lo) + ' to ' + usd(hi) + '</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Share of budget</span><strong>' + (typ / budget * 100).toFixed(1) + '%</strong></div>'
      + '<div class="ta-embed-cell"><span>10-15% rule</span><strong>' + usd(budget * 0.10) + '-' + usd(budget * 0.15) + '</strong></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingPlannerCostCalculator = { recalc: calc };
})();
