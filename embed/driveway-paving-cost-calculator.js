/*!
 * ToolAspect Driveway Paving Cost Calculator Embed
 * Install: <div id="ta-driveway-paving-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/driveway-paving-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-driveway-paving-cost-calculator';
  var BASE = 'https://toolaspect.com/driveway-paving-cost-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.7rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-rows{margin-top:12px;display:grid;gap:6px}'
    + '.ta-embed-row{display:flex;justify-content:space-between;gap:10px;padding:8px 12px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);text-align:left}'
    + '.ta-embed-row .k{font-size:.82rem;color:var(--ta-muted);font-weight:600}'
    + '.ta-embed-row .v{font-size:.9rem;font-weight:700;white-space:nowrap}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'driveway-paving-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="driveway-paving-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Driveway Cost</div>'
    + '<div class="ta-embed-subtitle">Asphalt vs concrete, installed cost and cost per year</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Length (ft)</label><input type="number" class="ta-len" value="50" min="1" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Width (ft)</label><input type="number" class="ta-wid" value="12" min="1" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Horizon (yrs)</label><input type="number" class="ta-hz" value="20" min="1" max="50" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Asphalt $/sq ft</label><input type="number" class="ta-ar" value="10" min="1" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Concrete $/sq ft</label><input type="number" class="ta-cr" value="12" min="1" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Seal $/sq ft</label><input type="number" class="ta-sr" value="0.35" min="0" step="0.05"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var len = val('.ta-len'), wid = val('.ta-wid'), hz = val('.ta-hz');
    var ar = val('.ta-ar'), cr = val('.ta-cr'), sr = val('.ta-sr');
    var area = len * wid;
    if (area <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your driveway dimensions</div>';
      return;
    }
    var asph = area * ar, conc = area * cr;
    var seals = Math.max(0, Math.floor((Math.min(hz, 20) - 1) / 4));
    var sealCost = seals * area * sr;
    var asphLong = asph + sealCost + (hz > 20 ? asph : 0);
    var apy = asphLong / hz, cpy = conc / hz;
    var h = '<div class="ta-embed-big">' + fmt(asph) + ' vs ' + fmt(conc) + '</div>'
      + '<div class="ta-embed-sub">asphalt vs concrete installed, ' + area.toLocaleString() + ' sq ft</div>'
      + '<div class="ta-embed-rows">'
      + '<div class="ta-embed-row"><span class="k">Asphalt 20-yr range</span><span class="v">' + fmt(area * 7) + ' – ' + fmt(area * 13) + '</span></div>'
      + '<div class="ta-embed-row"><span class="k">Concrete range</span><span class="v">' + fmt(area * 8) + ' – ' + fmt(area * 18) + '</span></div>'
      + '<div class="ta-embed-row"><span class="k">Sealing (' + seals + '×)</span><span class="v">' + fmt(sealCost) + '</span></div>'
      + '<div class="ta-embed-row"><span class="k">Cost per year, ' + hz + ' yrs</span><span class="v">A ' + fmt(apy) + ' / C ' + fmt(cpy) + '</span></div>'
      + '</div>';
    resultEl.innerHTML = h;
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.drivewayCost = { recalc: calc };
})();
