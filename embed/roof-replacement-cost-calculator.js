/*!
 * ToolAspect Roof Replacement Cost Calculator Embed
 * Install: <div id="ta-roof-replacement-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/roof-replacement-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-roof-replacement-cost-calculator';
  var BASE = 'https://toolaspect.com/roof-replacement-cost-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'roof-replacement-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="roof-replacement-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Roof Replacement Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Installed cost per square, 11 materials</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Length (ft)</label><input type="number" class="ta-len" value="30" min="10" max="200" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Width (ft)</label><input type="number" class="ta-wid" value="60" min="10" max="200" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Pitch</label><select class="ta-pitch">'
    + '<option value="1.031">3/12</option><option value="1.054">4/12</option><option value="1.083">5/12</option>'
    + '<option value="1.118" selected>6/12</option><option value="1.158">7/12</option><option value="1.202">8/12</option>'
    + '<option value="1.250">9/12</option><option value="1.302">10/12</option><option value="1.414">12/12</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Material</label><select class="ta-mat">'
    + '<option value="350,550">3-tab asphalt</option>'
    + '<option value="450,750" selected>Architectural asphalt</option>'
    + '<option value="700,1200">Designer asphalt</option>'
    + '<option value="600,1000">Metal panel</option>'
    + '<option value="1000,1800">Standing seam metal</option>'
    + '<option value="850,1300">Stone-coated steel</option>'
    + '<option value="600,1100">Cedar shake</option>'
    + '<option value="700,1300">Synthetic composite</option>'
    + '<option value="800,1600">Concrete tile</option>'
    + '<option value="1000,2000">Clay tile</option>'
    + '<option value="1500,3000">Natural slate</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Stories</label><select class="ta-stories">'
    + '<option value="1.00" selected>One</option><option value="1.08">Two</option><option value="1.15">Three+</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Layers to tear off</label><select class="ta-layers">'
    + '<option value="0" selected>One (base)</option><option value="125">Two (+$125/sq)</option><option value="250">Three (+$250/sq)</option>'
    + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var len = num('.ta-len'), wid = num('.ta-wid');
    if (len < 4 || wid < 4) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your roof footprint</div>';
      return;
    }
    var area = len * wid * parseFloat(val('.ta-pitch'));
    var sq = area / 100;
    var m = val('.ta-mat').split(',').map(Number);
    var layer = parseFloat(val('.ta-layers'));
    var st = parseFloat(val('.ta-stories'));
    var steep = parseFloat(val('.ta-pitch')) >= 1.202 ? 1.05 : 1;
    var lo = sq * (m[0] + layer) * st * steep;
    var hi = sq * (m[1] + layer) * st * steep;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(lo) + ' – ' + money(hi) + '</div>'
      + '<div class="ta-embed-sub">' + Math.round(area).toLocaleString('en-US') + ' sq ft · ' + sq.toFixed(1) + ' squares installed</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Per square</div><div class="rv">' + money(lo / sq) + ' – ' + money(hi / sq) + '</div></div>'
      + '<div><div class="rl">Per sq ft</div><div class="rv">$' + (lo / area).toFixed(2) + ' – $' + (hi / area).toFixed(2) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.roofReplacementCostCalculator = { recalc: calc };
})();
