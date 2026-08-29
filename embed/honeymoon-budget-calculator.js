/*!
 * ToolAspect Honeymoon Budget Calculator Embed
 * Install: <div id="ta-honeymoon-budget-calculator"></div>
 *          <script src="https://toolaspect.com/embed/honeymoon-budget-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-honeymoon-budget-calculator';
  var BASE = 'https://toolaspect.com/honeymoon-budget-calculator/';

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
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-form-row.three{grid-template-columns:1fr 1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}'
    + '.ta-embed-stat{text-align:center;background:var(--ta-bg);border-radius:8px;padding:10px 6px}'
    + '.ta-embed-stat .k{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-stat .v{font-size:1rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-form-row.three,.ta-embed-stats{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'honeymoon-budget-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="honeymoon-budget-calculator"]')) {
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
    + '<div class="ta-embed-title">Honeymoon Budget Calculator</div>'
    + '<div class="ta-embed-subtitle">Flights, nights, food, activities, buffer, and registry offset</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row three">'
    + '<div class="ta-embed-form-group"><label>Nights</label><input type="number" class="ta-nights" value="7" min="1" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Travelers</label><input type="number" class="ta-ppl" value="2" min="1" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Airfare/person ($)</label><input type="number" class="ta-flight" value="425" min="0" step="25"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row three">'
    + '<div class="ta-embed-form-group"><label>Lodging/night ($)</label><input type="number" class="ta-hotel" value="290" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Food/day, couple ($)</label><input type="number" class="ta-food" value="75" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Buffer (%)</label><input type="number" class="ta-buf" value="10" min="0" max="30" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Activities, total ($)</label><input type="number" class="ta-act" value="420" min="0" step="20"></div>'
    + '<div class="ta-embed-form-group"><label>Registry offset ($)</label><input type="number" class="ta-reg" value="1000" min="0" step="100"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big ta-total">—</div>'
    + '<div class="ta-sub-line ta-tsub"></div>'
    + '<div class="ta-embed-stats">'
    + '<div class="ta-embed-stat"><div class="k">Out of pocket</div><div class="v ta-oop">—</div></div>'
    + '<div class="ta-embed-stat"><div class="k">Per person</div><div class="v ta-pp">—</div></div>'
    + '<div class="ta-embed-stat"><div class="k">Per day</div><div class="v ta-pd">—</div></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var nights = Math.max(1, val('.ta-nights'));
    var ppl = Math.max(1, val('.ta-ppl'));
    var days = nights + 1;
    var sub = val('.ta-flight') * ppl + val('.ta-hotel') * nights + val('.ta-food') * days + val('.ta-act');
    var buf = val('.ta-buf') / 100;
    var total = sub * (1 + buf);
    var reg = val('.ta-reg');
    root.querySelector('.ta-total').textContent = money(total);
    root.querySelector('.ta-tsub').textContent = money(sub) + ' subtotal + ' + Math.round(buf * 100) + '% buffer';
    root.querySelector('.ta-oop').textContent = money(Math.max(0, total - reg));
    root.querySelector('.ta-pp').textContent = money(total / ppl);
    root.querySelector('.ta-pd').textContent = money(total / days);
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.honeymoonBudgetCalculator = { recalc: calc };
})();
