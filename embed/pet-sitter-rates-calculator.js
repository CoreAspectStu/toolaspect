/*!
 * ToolAspect Pet Sitter Rates Calculator Embed
 * Install: <div id="ta-pet-sitter-rates-calculator"></div>
 *          <script src="https://toolaspect.com/embed/pet-sitter-rates-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pet-sitter-rates-calculator';
  var BASE = 'https://toolaspect.com/pet-sitter-rates-calculator/';

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
    + '.ta-embed-big{font-size:2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-row{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:14px}'
    + '.ta-embed-chip{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 12px;font-size:.8rem}'
    + '.ta-embed-chip b{display:block;font-size:.66rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pet-sitter-rates-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pet-sitter-rates-calculator"]')) {
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
    + '<div class="ta-embed-title">Pet Sitter Rates Calculator</div>'
    + '<div class="ta-embed-subtitle">What to pay, per visit and per trip</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Service type</label><select class="ta-service">'
    + '<option value="18,30">Drop-in visit, 30 min</option>'
    + '<option value="28,45">Drop-in visit, 60 min</option>'
    + '<option value="20,35">Dog walk, 30 min</option>'
    + '<option value="75,150">Overnight stay</option></select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Visits / nights per day</label><input type="number" class="ta-perday" value="2" min="1" max="4"></div>'
    + '<div class="ta-embed-form-group"><label>Days</label><input type="number" class="ta-days" value="3" min="1" max="60"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Extra pets (beyond first)</label><input type="number" class="ta-pets" value="0" min="0" max="6"></div>'
    + '<div class="ta-embed-form-group"><label>Holiday multiplier</label><select class="ta-holiday">'
    + '<option value="1">None</option><option value="1.5">1.5x holiday</option><option value="2">2x holiday</option></select></div>'
    + '</div></div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var usd = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };

  function calc() {
    var rates = root.querySelector('.ta-service').value.split(',').map(Number);
    var lo = rates[0], hi = rates[1];
    var perDay = Math.max(1, parseFloat(root.querySelector('.ta-perday').value) || 1);
    var days = Math.max(1, parseFloat(root.querySelector('.ta-days').value) || 1);
    var pets = Math.max(0, parseFloat(root.querySelector('.ta-pets').value) || 0);
    var holiday = parseFloat(root.querySelector('.ta-holiday').value) || 1;
    var visitLo = lo + 7.5 * pets, visitHi = hi + 10 * pets;
    var totalLo = visitLo * perDay * days * holiday, totalHi = visitHi * perDay * days * holiday;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(totalLo) + ' – ' + usd(totalHi) + '</div>'
      + '<div class="ta-embed-sub">Trip total, national low-high range (2025-26)</div>'
      + '<div class="ta-embed-row">'
      + '<div class="ta-embed-chip"><b>Per visit</b>' + usd(visitLo) + ' – ' + usd(visitHi) + '</div>'
      + '<div class="ta-embed-chip"><b>Per day</b>' + usd(visitLo * perDay) + ' – ' + usd(visitHi * perDay) + '</div>'
      + '<div class="ta-embed-chip"><b>15% tip adds</b>' + usd(totalLo * .15) + ' – ' + usd(totalHi * .15) + '</div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.petSitterRatesCalculator = { recalc: calc };
})();
