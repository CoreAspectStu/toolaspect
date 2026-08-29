/*!
 * ToolAspect Dog Harness Size Calculator Embed
 * Install: <div id="ta-dog-harness-size-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-harness-size-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-harness-size-calculator';
  var BASE = 'https://toolaspect.com/dog-harness-size-calculator/';

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
    + '.ta-embed-note{font-size:.72rem;color:var(--ta-muted);text-align:center;margin-bottom:10px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-range{gap:14px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-harness-size-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-harness-size-calculator"]')) {
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
    + '<div class="ta-embed-title">Dog Harness Size Calculator</div>'
    + '<div class="ta-embed-subtitle">Chest girth &rarr; size band, plus collar sizing</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Girth (in)</label><input type="number" class="ta-girth" value="30" min="6" max="60" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Neck (in)</label><input type="number" class="ta-neck" value="20" min="4" max="40" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Weight (lb)</label><input type="number" class="ta-wt" value="70" min="2" max="250" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Or pick a breed</label><select class="ta-breed">'
    + '<option value="">— measure my own dog —</option>'
    + '<option value="14,9,7">Yorkshire Terrier</option><option value="19,14,25">French Bulldog</option>'
    + '<option value="20,14,25">Beagle</option><option value="23,16,30">Corgi</option>'
    + '<option value="26,16,42">Border Collie</option><option value="27,18,50">Siberian Husky</option>'
    + '<option value="30,20,70">Labrador Retriever</option><option value="31,20,75">German Shepherd</option>'
    + '<option value="38,25,140">Great Dane</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-note">Bands overlap by design; brands differ &mdash; re-check your brand&rsquo;s chart before ordering.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var LADDER = [['XXS', 9, 13], ['XS', 12, 17], ['S', 16, 21], ['M', 20, 27], ['L', 26, 33], ['XL', 32, 40], ['XXL', 38, 46]];
  var COLLARS = [['XS', 8, 12], ['S', 10, 14], ['M', 14, 18], ['L', 16, 22], ['XL', 20, 26], ['XXL', 24, 30]];

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function harnessSizes(g) {
    return LADDER.filter(function (s) { return g >= s[1] && g <= s[2]; });
  }
  function collarSizes(n) {
    if (!n || n < 4) return [];
    var t = n + 2;
    return COLLARS.filter(function (c) { return n >= c[1] - 1 && t <= c[2]; });
  }

  function calc() {
    var g = val('.ta-girth'), n = val('.ta-neck'), w = val('.ta-wt');
    var box = root.querySelector('.ta-embed-result');
    if (g < 9) {
      box.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter chest girth (9" min), measured behind the front legs</div>';
      return;
    }
    var fits = harnessSizes(g);
    var head, sub, range = '';
    if (!fits.length) {
      head = 'Beyond XXL';
      sub = g + '" girth — giant-breed specialists (46"+)';
    } else if (fits.length === 1) {
      head = 'Size ' + fits[0][0];
      sub = g + '" girth — single-band fit (' + fits[0][1] + '–' + fits[0][2] + '")';
    } else {
      head = fits[0][0] + ' or ' + fits[1][0];
      sub = g + '" sits in the ' + fits[0][0] + '/' + fits[1][0] + ' overlap';
      if (w > 0) {
        var mid = (fits[0][2] + fits[1][1]) / 2;
        sub += w >= mid ? ' — at ' + w + ' lb take the ' + fits[1][0] : ' — at ' + w + ' lb the ' + fits[0][0] + ' fits best';
      }
    }
    if (n >= 4) {
      var cs = collarSizes(n);
      var coll = cs.length ? cs.map(function (c) { return c[0]; }).join(' / ') : 'teacup range';
      range = '<div class="ta-embed-range"><div>Collar size (' + (n + 2) + '" target)<strong>' + coll + '</strong></div>'
        + (w > 0 ? '<div>Weight<strong>' + w + ' lb</strong></div>' : '') + '</div>';
    }
    box.innerHTML = '<div class="ta-embed-big">' + head + '</div><div class="ta-embed-sub">' + sub + '</div>' + range;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', function (e) {
    if (e.target.classList.contains('ta-breed') && e.target.value) {
      var p = e.target.value.split(',');
      root.querySelector('.ta-girth').value = p[0];
      root.querySelector('.ta-neck').value = p[1];
      root.querySelector('.ta-wt').value = p[2];
    }
    calc();
  });
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogHarnessSizeCalculator = { recalc: calc };
})();
