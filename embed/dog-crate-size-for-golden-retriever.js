/*!
 * ToolAspect Dog Crate Size for a Golden Retriever Embed
 * Install: <div id="ta-dog-crate-size-for-golden-retriever"></div>
 *          <script src="https://toolaspect.com/embed/dog-crate-size-for-golden-retriever.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-crate-size-for-golden-retriever';
  var BASE = 'https://toolaspect.com/dog-crate-size-for-golden-retriever/';

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
    + '.ta-embed-range{display:flex;justify-content:center;gap:26px;margin-top:12px;flex-wrap:wrap}'
    + '.ta-embed-range div{font-size:.82rem;color:var(--ta-muted)}'
    + '.ta-embed-range strong{display:block;font-size:1.05rem;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}.ta-embed-range{gap:14px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-crate-size-for-golden-retriever');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-crate-size-for-golden-retriever"]')) {
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
    + '<div class="ta-embed-title">Dog Crate Size for a Golden Retriever</div>'
    + '<div class="ta-embed-subtitle">Golden Retriever crate sizing — 42" is usually the answer</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Body length (in)</label><input type="number" class="ta-len" value="34" min="6" max="60" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Standing height (in)</label><input type="number" class="ta-hgt" value="24" min="6" max="44" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Weight (lb)</label><input type="number" class="ta-wt" value="70" min="2" max="250" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Or pick a breed</label><select class="ta-breed">'
    + '<option value="">— measure my own dog —</option>'
    + '<option value="12,9,7">Yorkshire Terrier</option><option value="19,16,25">French Bulldog</option>'
    + '<option value="22,15,25">Beagle</option><option value="27,13,30">Corgi</option>'
    + '<option value="31,22,50">Siberian Husky</option><option value="32,24,75">Labrador Retriever</option>'
    + '<option value="33,25,75">German Shepherd</option><option value="34,24,70">Golden Retriever</option>'
    + '<option value="40,33,140">Great Dane</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var SIZES = [22, 24, 30, 36, 42, 48, 54];
  var INT_H = { 22: 17, 24: 20, 30: 23, 36: 26, 42: 29, 48: 33, 54: 37 };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function airSeries(w) {
    if (w <= 10) return '100 series';
    if (w <= 20) return '200 series';
    if (w <= 40) return '300 series';
    if (w <= 70) return '400 series';
    if (w <= 90) return '500 series';
    return '700 series';
  }

  function calc() {
    var L = val('.ta-len'), H = val('.ta-hgt'), w = val('.ta-wt');
    if (L < 6) {
      root.querySelector('.ta-embed-result').innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter nose-to-tail-base length</div>';
      return;
    }
    var size = SIZES.find(function (s) { return s >= L + 4; }) || 54;
    var needH = H > 0 ? H + 3 : 0;
    var note = '';
    if (needH > 0 && !(needH <= INT_H[size])) {
      var up = SIZES.find(function (s) { return s > size && INT_H[s] >= needH; });
      if (up) { note = 'Stepped up for height.'; size = up; }
      else note = 'Look for an extra-height (giant) model.';
    }
    root.querySelector('.ta-embed-result').innerHTML =
      '<div class="ta-embed-big">' + size + '-inch crate</div>'
      + '<div class="ta-embed-sub">min interior ' + Math.round(L + 2) + '" · comfortable ' + Math.round(L + 4) + '"' + (note ? ' · ' + note : '') + '</div>'
      + (w > 0 ? '<div class="ta-embed-sub">Airline kennel: <strong>' + airSeries(w) + '</strong></div>' : '');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', function (e) {
    if (e.target.classList.contains('ta-breed') && e.target.value) {
      var p = e.target.value.split(',');
      root.querySelector('.ta-len').value = p[0];
      root.querySelector('.ta-hgt').value = p[1];
      root.querySelector('.ta-wt').value = p[2];
    }
    calc();
  });
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogCrateSizeForGoldenRetriever = { recalc: calc };
})();
