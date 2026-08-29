/*!
 * ToolAspect Dog Food Cost Comparison Embed
 * Install: <div id="ta-dog-food-cost-comparison-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-food-cost-comparison-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-food-cost-comparison-calculator';
  var BASE = 'https://toolaspect.com/dog-food-cost-comparison-calculator/';
  var LB_PER_KG = 2.2046;

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
    + '.ta-embed-row{display:flex;justify-content:space-between;font-size:.85rem;padding:6px 0;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-row:last-child{border-bottom:none}'
    + '.ta-embed-note{font-size:.72rem;color:var(--ta-muted);line-height:1.5;margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-food-cost-comparison-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-food-cost-comparison-calculator"]')) {
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
    + '<div class="ta-embed-title">Dog Food Cost Comparison</div>'
    + '<div class="ta-embed-subtitle">Cost per day from your dog\'s calories and each food\'s price and density</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Weight (lb)</label><input type="number" class="ta-weight" value="50" min="2" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Life stage</label><select class="ta-stage">'
    + '<option value="1.6" selected>Neutered adult</option><option value="1.8">Intact adult</option>'
    + '<option value="1.4">Senior</option><option value="2.0">Puppy 4–12 mo</option>'
    + '<option value="1.0">Weight loss</option><option value="2.5">Active / working</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Daily kcal</label><input type="text" class="ta-kcal" readonly></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Food 1: price ($ per lb)</label><input type="number" class="ta-p1" value="2.06" min="0" step="0.01"></div>'
    + '<div class="ta-embed-form-group"><label>kcal per lb (bag kcal/kg ÷ 2.205)</label><input type="number" class="ta-d1" value="1860" min="50" step="10"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Food 2: price ($ per lb)</label><input type="number" class="ta-p2" value="1.20" min="0" step="0.01"></div>'
    + '<div class="ta-embed-form-group"><label>kcal per lb</label><input type="number" class="ta-d2" value="1452" min="50" step="10"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-card ta-details"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var detailsEl = root.querySelector('.ta-details');

  function num(sel) { return parseFloat(root.querySelector(sel).value) || 0; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var w = num('.ta-weight'), f = parseFloat(root.querySelector('.ta-stage').value) || 1.6;
    var kcal = w > 0 ? 70 * Math.pow(w * 0.45359237, 0.75) * f : 0;
    root.querySelector('.ta-kcal').value = kcal ? Math.round(kcal).toLocaleString('en-US') + ' kcal' : '—';
    if (kcal <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter a weight</div>';
      detailsEl.innerHTML = '';
      return;
    }
    var p1 = num('.ta-p1'), d1 = num('.ta-d1'), p2 = num('.ta-p2'), d2 = num('.ta-d2');
    if (p1 <= 0 || d1 <= 0) return;
    var day1 = kcal / d1 * p1;
    var line2 = (p2 > 0 && d2 > 0);
    var day2 = line2 ? kcal / d2 * p2 : 0;
    resultEl.innerHTML = '<div class="ta-embed-big">' + day1.toFixed(2) + '/day</div>'
      + '<div class="ta-embed-sub">Food 1: ' + money(day1 * 30.44) + '/month · ' + money(day1 * 365) + '/year</div>';
    var html = '<div class="ta-embed-row"><span>Food 1 cost per 1,000 kcal</span><strong>$' + (p1 / d1 * 1000).toFixed(2) + '</strong></div>'
      + '<div class="ta-embed-row"><span>Food 1 pounds fed per month</span><strong>' + (kcal / d1 * 30.44).toFixed(1) + ' lb</strong></div>';
    if (line2) {
      html += '<div class="ta-embed-row"><span>Food 2 cost per day</span><strong>' + day2.toFixed(2) + ' (' + money(day2 * 365) + '/yr)</strong></div>'
        + '<div class="ta-embed-row"><span>Food 2 per 1,000 kcal</span><strong>$' + (p2 / d2 * 1000).toFixed(2) + '</strong></div>'
        + '<div class="ta-embed-row"><span>Annual gap</span><strong>' + money(Math.abs(day1 - day2) * 365) + '</strong></div>';
    }
    html += '<div class="ta-embed-note">Read kcal/kg off the bag nutrition panel and divide by 2.205. Prices are what you actually pay per pound.</div>';
    detailsEl.innerHTML = html;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogFoodCostComparison = { recalc: calc };
})();
