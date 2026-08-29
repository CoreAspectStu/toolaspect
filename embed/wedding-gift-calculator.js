/*!
 * ToolAspect Wedding Gift Calculator Embed
 * Install: <div id="ta-wedding-gift-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-gift-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-gift-calculator';
  var BASE = 'https://toolaspect.com/wedding-gift-calculator/';

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-gift-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-gift-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Gift Calculator</div>'
    + '<div class="ta-embed-subtitle">Etiquette bands by relationship, plus plate-cost check</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Relationship</label><select class="ta-tier">'
    + '<option value="0">Coworker / acquaintance</option><option value="1">Friend / extended family</option>'
    + '<option value="2" selected>Close friend / relative</option><option value="3">Immediate family / bridal party</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Gift is from</label><select class="ta-party"><option value="solo" selected>Just me</option><option value="couple">Me + plus-one</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Attending?</label><select class="ta-attend"><option value="yes" selected>Yes</option><option value="no">No</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Plate cost ($/head)</label><input type="number" class="ta-plate" value="110" min="0" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var TIERS = [[50, 75], [75, 125], [125, 200], [200, 300]];

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function r5(n) { return Math.round(n / 5) * 5; }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var tier = val('.ta-tier');
    var couple = root.querySelector('.ta-party').value === 'couple';
    var attend = root.querySelector('.ta-attend').value === 'yes';
    var plate = val('.ta-plate');
    var base = TIERS[tier] || TIERS[2];
    var lo = base[0], hi = base[1];
    if (couple) { lo += 50; hi += 50; }
    if (!attend) { lo *= 0.7; hi *= 0.7; }
    lo = r5(Math.max(20, lo)); hi = r5(Math.max(lo, hi));
    var guests = couple ? 2 : 1;
    var plateCost = attend ? plate * guests : 0;
    var plateNote = !attend || plateCost === 0 ? '' :
      plateCost > hi ? ' · plate cost (' + usd(plateCost) + ') runs above the band'
      : ' · plate cost ' + usd(plateCost) + (plateCost < lo ? ' (band covers it)' : ' (inside band)');
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(lo) + ' – ' + usd(hi) + '</div>'
      + '<div class="ta-embed-sub">' + (couple ? 'gift covers ' + guests + ' guests' : 'solo guest') + (attend ? '' : ' · not attending') + '</div>'
      + '<div class="ta-embed-sub">Base range: <strong>' + usd(base[0]) + ' – ' + usd(base[1]) + '</strong> · US average: <strong>$140</strong>' + plateNote + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingGiftCalculator = { recalc: calc };
})();
