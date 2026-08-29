/*!
 * ToolAspect Dog Grooming Cost Calculator Embed
 * Install: <div id="ta-dog-grooming-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-grooming-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-grooming-cost-calculator';
  var BASE = 'https://toolaspect.com/dog-grooming-cost-calculator/';

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
    + '.ta-embed-form-row.three{grid-template-columns:1fr 1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-row{display:flex;justify-content:space-between;font-size:.85rem;padding:6px 0;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-row:last-child{border-bottom:none}'
    + '.ta-embed-note{font-size:.72rem;color:var(--ta-muted);line-height:1.5;margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row,.ta-embed-form-row.three{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-grooming-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-grooming-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Dog Grooming Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Session and yearly grooming prices by size, coat, and groomer type</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row three">'
    + '<div class="ta-embed-form-group"><label>Size</label><select class="ta-size">'
    + '<option value="0">Small (&lt;25 lb)</option><option value="1">Medium (25–50)</option>'
    + '<option value="2" selected>Large (50–75)</option><option value="3">Giant (75+)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Coat</label><select class="ta-coat">'
    + '<option value="short">Short &amp; smooth</option><option value="double" selected>Double coat</option>'
    + '<option value="silky">Long &amp; silky</option><option value="curly">Curly / doodle</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Groomer</label><select class="ta-groomer">'
    + '<option value="0.9">Big-box</option><option value="1" selected>Independent</option>'
    + '<option value="1.75">Mobile</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Weeks between visits</label><input type="number" class="ta-weeks" value="5" min="1" max="26" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-card ta-details"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var detailsEl = root.querySelector('.ta-details');

  // Typical service mix per coat: full groom (lo,hi by size) or bath&brush, + add-ons
  var FULL = [[50, 80], [65, 100], [80, 125], [100, 160]];
  var BATH = [[30, 45], [40, 60], [50, 75], [60, 90]];
  var NAIL = [15, 25];
  var TEETH = [10, 20];
  var EAR = [10, 20];
  var DESHED = [30, 50];
  var DEFAULT_WEEKS = { short: 8, double: 8, silky: 5, curly: 5 };

  function num(sel) { return parseFloat(root.querySelector(sel).value) || 0; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var s = +root.querySelector('.ta-size').value;
    var coat = root.querySelector('.ta-coat').value;
    var factor = parseFloat(root.querySelector('.ta-groomer').value);
    var weeks = num('.ta-weeks') || 8;
    var lo, hi, mix;
    if (coat === 'short') { lo = BATH[s][0] + NAIL[0]; hi = BATH[s][1] + NAIL[1]; mix = 'bath & brush + nails'; }
    else if (coat === 'double') { lo = BATH[s][0] + DESHED[0] + NAIL[0]; hi = BATH[s][1] + DESHED[1] + NAIL[1]; mix = 'bath + de-shed + nails'; }
    else if (coat === 'silky') { lo = FULL[s][0] + EAR[0] + NAIL[0]; hi = FULL[s][1] + EAR[1] + NAIL[1]; mix = 'full groom + nails + ears'; }
    else { lo = FULL[s][0] + TEETH[0] + NAIL[0]; hi = FULL[s][1] + TEETH[1] + NAIL[1]; mix = 'full groom + teeth + nails'; }
    lo *= factor; hi *= factor;
    var mid = (lo + hi) / 2;
    var perYear = 52 / weeks;
    resultEl.innerHTML = '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">per session (' + mix + ') · typical ' + money(mid) + '</div>';
    detailsEl.innerHTML =
      '<div class="ta-embed-row"><span>Sessions per year</span><strong>' + perYear.toFixed(1) + '</strong></div>'
      + '<div class="ta-embed-row"><span>Yearly grooming bill</span><strong>≈ ' + money(mid * perYear) + '</strong></div>'
      + '<div class="ta-embed-row"><span>Monthly average</span><strong>≈ ' + money(mid * perYear / 12) + '</strong></div>'
      + '<div class="ta-embed-row"><span>Suggested tip (15–20%)</span><strong>' + money(mid * 0.15) + ' – ' + money(mid * 0.2) + '</strong></div>'
      + '<div class="ta-embed-note">National shop ranges for 2025–26; metros run 20–40% higher. ' + (coat === 'curly' || coat === 'silky' ? 'Brushing twice a week keeps a 4–6 week coat from turning into a shave-down.' : '') + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  root.querySelector('.ta-coat').addEventListener('change', function () {
    var wk = DEFAULT_WEEKS[this.value];
    if (wk) root.querySelector('.ta-weeks').value = wk;
    calc();
  });
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogGroomingCost = { recalc: calc };
})();
