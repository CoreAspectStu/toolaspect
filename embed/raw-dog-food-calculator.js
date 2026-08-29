/*!
 * ToolAspect Raw Dog Food Calculator Embed
 * Install: <div id="ta-raw-dog-food-calculator"></div>
 *          <script src="https://toolaspect.com/embed/raw-dog-food-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-raw-dog-food-calculator';
  var BASE = 'https://toolaspect.com/raw-dog-food-calculator/';

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
    + '.ta-embed-split{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px;font-size:.85rem}'
    + '.ta-embed-split div{background:var(--ta-bg);border-radius:8px;padding:8px}'
    + '.ta-embed-split strong{display:block;font-size:1.05rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'raw-dog-food-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="raw-dog-food-calculator"]')) {
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
    + '<div class="ta-embed-title">Raw Dog Food Calculator</div>'
    + '<div class="ta-embed-subtitle">2-3% of body weight, split 80/10/10</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Weight</label><input type="number" class="ta-w" value="60" min="1" max="250" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Unit</label><select class="ta-unit"><option value="lb" selected>lb</option><option value="kg">kg</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Life stage</label><select class="ta-stage">'
    + '<option value="8">Puppy 8-12 wk</option><option value="6">Puppy 4-6 mo</option><option value="4">Puppy 6-12 mo</option>'
    + '<option value="3">Adult active</option><option value="2.5" selected>Adult normal</option>'
    + '<option value="2">Adult low / senior</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Daily % (optional override)</label><input type="number" class="ta-pct" placeholder="auto" min="0.5" max="12" step="0.1"></div>'
    + '<div class="ta-embed-form-group"><label>Raw price ($/lb, optional)</label><input type="number" class="ta-price" placeholder="7" min="0" max="60" step="0.5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function num(sel) {
    var el = root.querySelector(sel);
    return el && el.value !== '' ? (parseFloat(el.value) || 0) : 0;
  }

  function ozfmt(oz) {
    if (oz >= 16) {
      var lb = Math.floor(oz / 16), rem = Math.round((oz % 16) * 10) / 10;
      return lb + ' lb ' + (rem > 0 ? rem + ' oz' : '');
    }
    return (Math.round(oz * 10) / 10) + ' oz';
  }

  function calc() {
    var w = num('.ta-w');
    var unit = root.querySelector('.ta-unit').value;
    var stage = parseFloat(root.querySelector('.ta-stage').value) || 2.5;
    var pct = num('.ta-pct') || stage;
    var price = num('.ta-price');
    var lb = unit === 'kg' ? w * 2.20462 : w;
    if (lb <= 0 || pct <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your dog’s weight</div>';
      return;
    }
    var dailyOz = lb * pct / 100 * 16;
    var moLb = lb * pct / 100 * 30;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + ozfmt(dailyOz) + '/day</div>'
      + '<div class="ta-embed-sub">' + pct + '% of ' + lb.toFixed(1) + ' lb · ' + moLb.toFixed(1) + ' lb/month</div>'
      + '<div class="ta-embed-split">'
      + '<div>Muscle meat 80%<strong>' + ozfmt(dailyOz * 0.8) + '</strong></div>'
      + '<div>Edible bone 10%<strong>' + ozfmt(dailyOz * 0.1) + '</strong></div>'
      + '<div>Organs 10%<strong>' + ozfmt(dailyOz * 0.1) + '</strong></div>'
      + '<div>Liver (half)<strong>' + ozfmt(dailyOz * 0.05) + '</strong></div>'
      + '</div>'
      + (price > 0 ? '<div class="ta-embed-sub"><strong>$' + Math.round(moLb * price).toLocaleString('en-US') + '/month</strong> at $' + price + '/lb</div>' : '');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.rawDogFoodCalculator = { recalc: calc };
})();
