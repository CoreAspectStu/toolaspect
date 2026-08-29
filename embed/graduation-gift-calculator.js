/*!
 * ToolAspect Graduation Gift Calculator Embed
 * Install: <div id="ta-graduation-gift-calculator"></div>
 *          <script src="https://toolaspect.com/embed/graduation-gift-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-graduation-gift-calculator';
  var BASE = 'https://toolaspect.com/graduation-gift-calculator/';

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'graduation-gift-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="graduation-gift-calculator"]')) {
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
    + '<div class="ta-embed-title">Graduation Gift Calculator</div>'
    + '<div class="ta-embed-subtitle">Cash gift etiquette by relationship and degree</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Relationship</label>'
    + '<select class="ta-rel">'
    + '<option value="coworker">Coworker / acquaintance</option>'
    + '<option value="friend" selected>Friend or classmate</option>'
    + '<option value="relative">Relative</option>'
    + '<option value="grandparent">Grandparent / close family</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Level</label>'
    + '<select class="ta-level">'
    + '<option value="hs" selected>High school</option>'
    + '<option value="college">College</option>'
    + '<option value="advanced">Master’s / doctorate</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Giving as</label>'
    + '<select class="ta-givers"><option value="1" selected>Individual</option><option value="2">Couple</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Going to the party?</label>'
    + '<select class="ta-party"><option value="yes" selected>Yes</option><option value="no">No</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Budget cap ($, optional)</label><input type="number" class="ta-cap" value="" min="0" step="5" placeholder="e.g. 75"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var BANDS = { coworker: [20, 40], friend: [25, 50], relative: [50, 100], grandparent: [100, 300] };
  var LEVEL = { hs: 1, college: 1.5, advanced: 1.75 };

  function r5(x) { return Math.round(x / 5) * 5; }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var rel = root.querySelector('.ta-rel').value;
    var level = root.querySelector('.ta-level').value;
    var givers = parseFloat(root.querySelector('.ta-givers').value);
    var party = root.querySelector('.ta-party').value;
    var cap = parseFloat(root.querySelector('.ta-cap').value) || 0;
    var band = BANDS[rel];
    var mult = LEVEL[level] * (givers > 1 ? 1.5 : 1) * (party === 'no' ? 0.75 : 1);
    var lo = band[0] * mult, hi = band[1] * mult, mid = (lo + hi) / 2;
    if (cap > 0) {
      if (lo > cap) lo = cap * 0.75;
      if (hi > cap) hi = cap;
    }
    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + usd(r5(lo)) + ' – ' + usd(r5(hi)) + '</div>'
      + '<div class="ta-embed-sub">Sweet spot: ' + usd(r5(mid)) + (givers > 1 ? ' (joint gift)' : '') + '</div>'
      + '<div class="ta-embed-sub">Give what you can afford: the card note matters as much as the amount.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.graduationGift = { recalc: calc };
})();
