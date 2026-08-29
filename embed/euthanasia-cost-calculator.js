/*!
 * ToolAspect Pet Euthanasia Cost Calculator Embed
 * Install: <div id="ta-euthanasia-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/euthanasia-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-euthanasia-cost-calculator';
  var BASE = 'https://toolaspect.com/euthanasia-cost-calculator/';

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
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'euthanasia-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="euthanasia-cost-calculator"]')) {
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

  var BANDS = {
    dog: {
      s: { clinic: { lo: 50, ty: 100, hi: 150 }, home: { lo: 350, ty: 425, hi: 500 }, communal: { lo: 50, ty: 75, hi: 100 }, 'private': { lo: 150, ty: 200, hi: 250 } },
      m: { clinic: { lo: 100, ty: 150, hi: 250 }, home: { lo: 400, ty: 475, hi: 650 }, communal: { lo: 75, ty: 100, hi: 125 }, 'private': { lo: 200, ty: 250, hi: 300 } },
      l: { clinic: { lo: 150, ty: 200, hi: 300 }, home: { lo: 450, ty: 550, hi: 800 }, communal: { lo: 100, ty: 150, hi: 175 }, 'private': { lo: 250, ty: 300, hi: 350 } },
      g: { clinic: { lo: 150, ty: 250, hi: 350 }, home: { lo: 500, ty: 650, hi: 900 }, communal: { lo: 125, ty: 150, hi: 200 }, 'private': { lo: 300, ty: 350, hi: 400 } }
    },
    cat: { clinic: { lo: 100, ty: 158, hi: 250 }, home: { lo: 300, ty: 359, hi: 450 }, communal: { lo: 50, ty: 75, hi: 100 }, 'private': { lo: 150, ty: 200, hi: 250 } }
  };

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Pet Euthanasia Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Clinic or in-home, with aftercare priced by size</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Species</label>'
    + '<select class="ta-species"><option value="dog" selected>Dog</option><option value="cat">Cat</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Size</label>'
    + '<select class="ta-size"><option value="s">Under 30 lb</option><option value="m" selected>31-70 lb</option><option value="l">71-120 lb</option><option value="g">Over 120 lb</option><option value="c">Cat</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Setting</label>'
    + '<select class="ta-setting"><option value="clinic" selected>Veterinary clinic</option><option value="home">In-home</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Aftercare</label>'
    + '<select class="ta-after"><option value="communal">Communal cremation</option><option value="private" selected>Private cremation</option><option value="none">None</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) { return root.querySelector(sel).value; }

  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function bands() {
    var sp = val('.ta-species');
    if (sp === 'cat') return BANDS.cat;
    return BANDS.dog[val('.ta-size')];
  }

  function calc() {
    var b = bands();
    var proc = b[val('.ta-setting')];
    var after = val('.ta-after');
    var afterBand = after === 'none' ? null : b[after];
    function tier(t) { return proc[t] + (afterBand ? afterBand[t] : 0); }
    var ty = tier('ty'), lo = tier('lo'), hi = tier('hi');
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(ty) + '</div>'
      + '<div class="ta-embed-sub">Estimated all-in total</div>'
      + '<div class="ta-embed-sub">National band: ' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">Same aftercare at a clinic: <strong>' + money(b.clinic.ty + (afterBand ? afterBand.ty : 0)) + '</strong></div>';
  }

  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.euthanasiaCostCalculator = { recalc: calc };
})();
