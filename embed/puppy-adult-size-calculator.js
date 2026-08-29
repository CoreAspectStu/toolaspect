/*!
 * ToolAspect Puppy Adult Size Calculator Embed
 * Install: <div id="ta-puppy-adult-size-calculator"></div>
 *          <script src="https://toolaspect.com/embed/puppy-adult-size-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-puppy-adult-size-calculator';
  var BASE = 'https://toolaspect.com/puppy-adult-size-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:flex;justify-content:center;gap:26px;margin-top:12px;flex-wrap:wrap}'
    + '.ta-embed-range div{font-size:.82rem;color:var(--ta-muted)}'
    + '.ta-embed-range strong{display:block;font-size:1.05rem;color:var(--ta-text)}'
    + '.ta-embed-note{font-size:.78rem;color:var(--ta-muted);text-align:center;margin-bottom:10px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-range{gap:14px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'puppy-adult-size-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="puppy-adult-size-calculator"]')) {
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
    + '<div class="ta-embed-title">Puppy Adult Size Calculator</div>'
    + '<div class="ta-embed-subtitle">Weight &divide; growth-curve % = adult size</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Weight (lb)</label><input type="number" class="ta-wt" value="13" min="0.5" max="200" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Age (weeks)</label><input type="number" class="ta-age" value="16" min="6" max="60" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Size class</label><select class="ta-cls">'
    + '<option value="small">Toy / small</option><option value="medium" selected>Medium</option>'
    + '<option value="large">Large</option><option value="giant">Giant</option>'
    + '<option value="mixed">Not sure / mixed</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-note">Growth bands approximated from veterinary growth curves; individual puppies vary.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var ROWS = [
    { wk: 8, v: { small: [30, 40], medium: [24, 30], large: [18, 23], giant: [13, 17] } },
    { wk: 12, v: { small: [50, 60], medium: [38, 46], large: [30, 37], giant: [22, 27] } },
    { wk: 16, v: { small: [65, 75], medium: [52, 62], large: [43, 52], giant: [33, 41] } },
    { wk: 20, v: { small: [78, 87], medium: [64, 75], large: [52, 62], giant: [44, 52] } },
    { wk: 26, v: { small: [90, 96], medium: [80, 89], large: [68, 78], giant: [53, 62] } },
    { wk: 52, v: { small: [100, 100], medium: [96, 100], large: [84, 92], giant: [72, 82] } }
  ];
  var CLASSES = ['small', 'medium', 'large', 'giant'];
  var WINDOWS = { small: [0, 25], medium: [25, 50], large: [50, 90], giant: [90, 400] };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function pctBand(cls, age) {
    var a = Math.max(ROWS[0].wk, Math.min(ROWS[ROWS.length - 1].wk, age));
    for (var i = 0; i < ROWS.length - 1; i++) {
      var r0 = ROWS[i], r1 = ROWS[i + 1];
      if (a >= r0.wk && a <= r1.wk) {
        var t = (a - r0.wk) / (r1.wk - r0.wk);
        return [r0.v[cls][0] + t * (r1.v[cls][0] - r0.v[cls][0]), r0.v[cls][1] + t * (r1.v[cls][1] - r0.v[cls][1])];
      }
    }
    return ROWS[ROWS.length - 1].v[cls].slice();
  }
  function predict(wt, age, cls) {
    var b = pctBand(cls, age);
    return { lo: wt / (b[1] / 100), hi: wt / (b[0] / 100) };
  }
  function r1(x) { return Math.round(x * 10) / 10; }

  function calc() {
    var wt = val('.ta-wt'), age = val('.ta-age');
    var sel = root.querySelector('.ta-cls');
    var cls = sel ? sel.value : 'medium';
    var box = root.querySelector('.ta-embed-result');
    if (wt <= 0 || age < 6) {
      box.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter weight (0.5 lb+) and age (6+ weeks)</div>';
      return;
    }
    function band(lo, hi) {
      var loK = Math.round(lo * 0.45359237), hiK = Math.round(hi * 0.45359237);
      return r1(lo) + '–' + r1(hi) + ' lb (' + loK + '–' + hiK + ' kg)';
    }
    if (cls === 'mixed') {
      var kept = CLASSES.filter(function (c) {
        var q = predict(wt, age, c), w = WINDOWS[c];
        return q.lo <= w[1] && q.hi >= w[0];
      });
      if (!kept.length) kept = CLASSES.slice();
      var los = kept.map(function (c) { return predict(wt, age, c).lo; });
      var his = kept.map(function (c) { return predict(wt, age, c).hi; });
      var lo = Math.min.apply(null, los), hi = Math.max.apply(null, his);
      box.innerHTML = '<div class="ta-embed-big">' + band(lo, hi) + '</div>'
        + '<div class="ta-embed-sub">consistent class' + (kept.length > 1 ? 'es' : '') + ': ' + kept.join(', ') + '</div>';
      return;
    }
    var p = predict(wt, age, cls);
    var lin = wt / Math.max(age, 1) * 52;
    box.innerHTML = '<div class="ta-embed-big">' + band(p.lo, p.hi) + '</div>'
      + '<div class="ta-embed-sub">52-week rule (ceiling): ' + r1(lin) + ' lb</div>'
      + '<div class="ta-embed-sub">' + r1(pctBand(cls, age)[0]) + '–' + r1(pctBand(cls, age)[1]) + '% of adult weight at ' + age + ' wk</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.puppyAdultSizeCalculator = { recalc: calc };
})();
