/*!
 * ToolAspect Equipment Downtime Cost Calculator Embed
 * Install: <div id="ta-equipment-downtime-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/equipment-downtime-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-equipment-downtime-cost-calculator';
  var BASE = 'https://toolaspect.com/equipment-downtime-cost-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'equipment-downtime-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="equipment-downtime-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Equipment Downtime Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">What one unplanned stop costs your operation</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Downtime (hrs)</label><input type="number" class="ta-hrs" value="3" min="0" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Units lost / hr</label><input type="number" class="ta-uph" value="1200" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Margin / unit ($)</label><input type="number" class="ta-margin" value="2.10" min="0" step="0.05"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Workers idled</label><input type="number" class="ta-workers" value="14" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Loaded cost ($/hr)</label><input type="number" class="ta-wage" value="28" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Restart + scrap ($)</label><input type="number" class="ta-restart" value="1800" min="0" step="50"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Events like this per year</label><input type="number" class="ta-events" value="25" min="0" step="1"></div>'
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
    var hrs = val('.ta-hrs'), uph = val('.ta-uph'), margin = val('.ta-margin');
    var workers = val('.ta-workers'), wage = val('.ta-wage'), restart = val('.ta-restart'), events = val('.ta-events');
    var perHr = uph * margin + workers * wage;
    if (hrs <= 0 || perHr <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter downtime hours, rate, and margin</div>';
      return;
    }
    var total = hrs * perHr + restart;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + fmt(total) + '</div>'
      + '<div class="ta-embed-sub">Cost of this event</div>'
      + '<div class="ta-embed-sub">' + fmt(perHr) + '/hr (' + '$' + (perHr / 60).toFixed(2) + '/min)' + (restart > 0 ? ' + ' + fmt(restart) + ' restart' : '') + '</div>'
      + (events > 0 ? '<div class="ta-embed-sub">Annualized at ' + events + ' events/yr: <strong>' + fmt(events * total) + '</strong></div>' : '');
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.equipmentDowntimeCostCalculator = { recalc: calc };
})();
