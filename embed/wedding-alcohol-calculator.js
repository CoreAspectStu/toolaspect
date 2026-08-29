/*!
 * ToolAspect Wedding Alcohol Calculator Embed
 * Install: <div id="ta-wedding-alcohol-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-alcohol-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-alcohol-calculator';
  var BASE = 'https://toolaspect.com/wedding-alcohol-calculator/';

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
    + '.ta-embed-breakdown{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;margin-top:12px;font-size:.82rem;color:var(--ta-muted)}'
    + '.ta-embed-breakdown strong{color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-alcohol-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-alcohol-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Alcohol Calculator</div>'
    + '<div class="ta-embed-subtitle">The 1-drink-per-guest-per-hour rule, in bottles</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guests</label><input type="number" class="ta-guests" value="100" min="1" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Hours</label><input type="number" class="ta-hours" value="4" min="1" max="12" step="0.5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Drinking rule</label><select class="ta-rule">'
    + '<option value="std" selected>Standard — 1 drink/guest/hour</option>'
    + '<option value="gen">Generous — 2 first hour + 1/hr after</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Drink mix</label><select class="ta-mix">'
    + '<option value="50,25,25" selected>50% beer, 25% wine, 25% liquor</option>'
    + '<option value="20,50,30">20% beer, 50% wine, 30% liquor</option>'
    + '<option value="60,40,0">Beer &amp; wine only (60/40)</option>'
    + '<option value="30,20,50">30/20/50 cocktail crowd</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Champagne toast?</label><select class="ta-toast">'
    + '<option value="1" selected>Yes</option><option value="0">No</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function num(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function val(sel) {
    var el = root.querySelector(sel);
    return el ? el.value : '';
  }

  function calc() {
    var g = num('.ta-guests'), h = num('.ta-hours');
    var rule = val('.ta-rule');
    var mix = val('.ta-mix').split(',').map(Number);
    var toast = parseFloat(val('.ta-toast'));
    if (g <= 0 || h <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter guests and hours</div>';
      return;
    }
    var per = rule === 'gen' ? 2 + 1 * (h - 1) : h;
    var total = Math.ceil(g * per);
    var beerD = Math.round(total * mix[0] / 100), wineD = Math.round(total * mix[1] / 100), liqD = Math.round(total * mix[2] / 100);
    beerD += total - beerD - wineD - liqD;
    var beerCases = Math.ceil(beerD / 24);
    var wineBtl = Math.ceil(wineD / 5);
    var liqBtl = Math.ceil(liqD / 16.9);
    var champBtl = toast > 0 ? Math.ceil(g / 6) : 0;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + total.toLocaleString('en-US') + ' drinks</div>'
      + '<div class="ta-embed-sub">' + g + ' guests × ' + per + ' each over ' + h + ' hours</div>'
      + '<div class="ta-embed-breakdown">'
      + '<span>Beer: <strong>' + beerCases + ' cases</strong> (24)</span>'
      + '<span>Wine: <strong>' + wineBtl + ' btls</strong></span>'
      + '<span>Liquor: <strong>' + (mix[2] === 0 ? '—' : liqBtl + ' × 750ml') + '</strong></span>'
      + (champBtl ? '<span>Toast: <strong>' + champBtl + ' btls</strong></span>' : '')
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingAlcoholCalculator = { recalc: calc };
})();
