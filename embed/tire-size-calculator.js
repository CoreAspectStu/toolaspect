/*!
 * ToolAspect Tire Size Calculator Embed
 * Install: <div id="ta-tire-size-calculator"></div>
 *          <script src="https://toolaspect.com/embed/tire-size-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-tire-size-calculator';
  var BASE = 'https://toolaspect.com/tire-size-calculator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-caption{font-size:.72rem;color:var(--ta-muted);margin:0 0 6px;font-weight:600;letter-spacing:.02em;text-transform:uppercase}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-stats{display:flex;justify-content:center;gap:24px;margin-top:10px;font-size:.85rem;color:var(--ta-text);flex-wrap:wrap}'
    + '.ta-embed-stats span b{display:block;font-size:1.05rem}'
    + '.ta-embed-verdict{margin-top:12px;font-size:.85rem;font-weight:600;border-radius:8px;padding:8px 12px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr 1fr}.ta-embed-stats{gap:14px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'tire-size-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="tire-size-calculator"]')) {
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
    + '<div class="ta-embed-title">Tire Size Calculator</div>'
    + '<div class="ta-embed-subtitle">Diameter, revs per mile &amp; speedo error</div>'
    + '<div class="ta-embed-card">'
    + '<p class="ta-embed-form-caption">Current tire</p>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Width</label><input type="number" class="ta-w1" value="225" min="125" max="355" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Aspect</label><input type="number" class="ta-a1" value="65" min="25" max="90" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Wheel</label><input type="number" class="ta-r1" value="17" min="10" max="24" step="0.5"></div>'
    + '</div>'
    + '<p class="ta-embed-form-caption">New tire</p>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Width</label><input type="number" class="ta-w2" value="235" min="125" max="355" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Aspect</label><input type="number" class="ta-a2" value="65" min="25" max="90" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Wheel</label><input type="number" class="ta-r2" value="17" min="10" max="24" step="0.5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function tire(w, a, r) {
    var sw = w * a / 100;
    var diaMM = r * 25.4 + 2 * sw;
    var diaIN = diaMM / 25.4;
    return { diaMM: diaMM, diaIN: diaIN, revs: 63360 / (Math.PI * diaIN) };
  }

  function calc() {
    var t1 = tire(val('.ta-w1'), val('.ta-a1'), val('.ta-r1'));
    var t2 = tire(val('.ta-w2'), val('.ta-a2'), val('.ta-r2'));
    if (t1.diaMM <= 0 || t2.diaMM <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">&mdash;</div><div class="ta-embed-sub">Enter both tire sizes</div>';
      return;
    }
    var diff = (t2.diaMM - t1.diaMM) / t1.diaMM * 100;
    var ad = Math.abs(diff);
    var verdict = ad <= 1
      ? '<div class="ta-embed-verdict" style="background:rgba(22,163,74,.12);color:#16a34a">&#10003; Ideal &mdash; within 1% of original</div>'
      : ad <= 3
        ? '<div class="ta-embed-verdict" style="background:rgba(22,163,74,.12);color:#16a34a">&#10003; Acceptable &mdash; within the 3% window</div>'
        : ad <= 5
          ? '<div class="ta-embed-verdict" style="background:rgba(202,138,4,.12);color:#ca8a04">&#9888; Marginal &mdash; ' + ad.toFixed(1) + '% off original</div>'
          : '<div class="ta-embed-verdict" style="background:rgba(220,38,38,.1);color:#dc2626">&#10007; Too far &mdash; ' + ad.toFixed(1) + '% off original</div>';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + (diff >= 0 ? '+' : '') + diff.toFixed(2) + '%</div>'
      + '<div class="ta-embed-sub">diameter change, ' + (diff >= 0 ? 'taller' : 'shorter') + ' by ' + Math.abs(t2.diaMM - t1.diaMM).toFixed(1) + ' mm</div>'
      + '<div class="ta-embed-stats">'
      + '<span>Diameter<b>' + t1.diaIN.toFixed(2) + ' &rarr; ' + t2.diaIN.toFixed(2) + ' in</b></span>'
      + '<span>Revs/mi<b>' + Math.round(t1.revs) + ' &rarr; ' + Math.round(t2.revs) + '</b></span>'
      + '<span>At 60 shown<b>' + (60 * t2.diaMM / t1.diaMM).toFixed(1) + ' mph</b></span>'
      + '</div>'
      + verdict;
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.tireSize = { recalc: calc };
})();
