/*!
 * ToolAspect Horse Cost of Ownership Calculator Embed
 * Install: <div id="ta-horse-cost-of-ownership-calculator"></div>
 *          <script src="https://toolaspect.com/embed/horse-cost-of-ownership-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-horse-cost-of-ownership-calculator';
  var BASE = 'https://toolaspect.com/horse-cost-of-ownership-calculator/';

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
    + '.ta-embed-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}'
    + '.ta-embed-stat{text-align:center;background:var(--ta-bg);border-radius:8px;padding:10px 6px}'
    + '.ta-embed-stat .k{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-stat .v{font-size:1rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-form-row.three,.ta-embed-stats{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'horse-cost-of-ownership-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="horse-cost-of-ownership-calculator"]')) {
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
    + '<div class="ta-embed-title">Horse Cost of Ownership Calculator</div>'
    + '<div class="ta-embed-subtitle">Purchase, board, farrier, vet, and tack in one yearly total</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row three">'
    + '<div class="ta-embed-form-group"><label>Purchase ($)</label><input type="number" class="ta-price" value="3500" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Pre-purchase exam ($)</label><input type="number" class="ta-ppe" value="400" min="0" step="25"></div>'
    + '<div class="ta-embed-form-group"><label>Tack &amp; equipment ($)</label><input type="number" class="ta-tack" value="1800" min="0" step="100"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row three">'
    + '<div class="ta-embed-form-group"><label>Board ($/mo)</label><input type="number" class="ta-board" value="650" min="0" step="25"></div>'
    + '<div class="ta-embed-form-group"><label>Feed ($/mo)</label><input type="number" class="ta-feed" value="0" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Lessons ($/mo)</label><input type="number" class="ta-lessons" value="180" min="0" step="10"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row three">'
    + '<div class="ta-embed-form-group"><label>Farrier visits/yr</label><input type="number" class="ta-fvisits" value="8" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Cost per visit ($)</label><input type="number" class="ta-fcost" value="135" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Vet+dental+deworm ($/yr)</label><input type="number" class="ta-vet" value="610" min="0" step="10"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big ta-first">—</div>'
    + '<div class="ta-embed-sub ta-firstsub"></div>'
    + '<div class="ta-embed-stats">'
    + '<div class="ta-embed-stat"><div class="k">Per month</div><div class="v ta-mo">—</div></div>'
    + '<div class="ta-embed-stat"><div class="k">Years 2+ / yr</div><div class="v ta-yr2">—</div></div>'
    + '<div class="ta-embed-stat"><div class="k">5-year total</div><div class="v ta-five">—</div></div>'
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
    var oneTime = val('.ta-price') + val('.ta-ppe') + val('.ta-tack');
    var annualFixed = val('.ta-fvisits') * val('.ta-fcost') + val('.ta-vet');
    var monthly = val('.ta-board') + val('.ta-feed') + val('.ta-lessons') + annualFixed / 12;
    var first = oneTime + monthly * 12;
    root.querySelector('.ta-first').textContent = money(first);
    root.querySelector('.ta-firstsub').textContent = 'first year, all-in';
    root.querySelector('.ta-mo').textContent = money(monthly);
    root.querySelector('.ta-yr2').textContent = money(monthly * 12);
    root.querySelector('.ta-five').textContent = money(oneTime + monthly * 12 * 5);
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.horseCostOfOwnershipCalculator = { recalc: calc };
})();
