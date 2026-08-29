/*!
 * ToolAspect Dog Daycare Cost Calculator Embed
 * Install: <div id="ta-dog-daycare-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-daycare-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-daycare-cost-calculator';
  var BASE = 'https://toolaspect.com/dog-daycare-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.4rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-rows{margin-top:14px;text-align:left;font-size:.88rem}'
    + '.ta-embed-rows div{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--ta-border)}'
    + '.ta-embed-rows div:last-child{border-bottom:none;font-weight:700}'
    + '.ta-embed-note{text-align:left;background:var(--ta-bg);border-radius:8px;padding:12px 14px;margin-top:14px;font-size:.82rem;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-daycare-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-daycare-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Dog Daycare Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Walk-in vs package vs monthly pass</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Full-day rate ($)</label><input type="number" class="ta-rate" value="40" min="10" max="150" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Days per week</label><input type="number" class="ta-dpw" value="3" min="1" max="7" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Structure</label><select class="ta-struct">'
    + '<option value="walkin" selected>Walk-in per day</option>'
    + '<option value="pack10">10-day package (12% off)</option>'
    + '<option value="pack20">20-day package (15% off)</option>'
    + '<option value="pass">Monthly pass</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Monthly pass price ($)</label><input type="number" class="ta-pass" value="550" min="100" max="2000" step="25"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">&nbsp;</div>'
    + '<div class="ta-embed-rows">'
    + '<div><span>Walk-in monthly</span><span class="ta-r-walk">—</span></div>'
    + '<div><span>Best package monthly</span><span class="ta-r-pack">—</span></div>'
    + '<div><span>Monthly pass</span><span class="ta-r-pass">—</span></div>'
    + '</div>'
    + '<div class="ta-embed-note ta-verdict"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function fmt(n) { return '$' + (Math.round(n * 100) / 100).toLocaleString('en-US'); }

  function calc() {
    var rate = val('.ta-rate'), dpw = val('.ta-dpw'), pass = val('.ta-pass');
    var struct = root.querySelector('.ta-struct').value;
    var days = dpw * 4.33;
    var walkin = days * rate;
    var pack = days * rate * 0.85;
    var eff = rate * (struct === 'pack10' ? 0.88 : struct === 'pack20' || struct === 'pass' ? 0.85 : 1);
    var chosen = struct === 'pass' ? pass : days * eff;
    root.querySelector('.ta-embed-big').textContent = fmt(chosen);
    root.querySelector('.ta-embed-sub').textContent = fmt(chosen * 12) + ' per year at ' + days.toFixed(1) + ' days a month';
    root.querySelector('.ta-r-walk').textContent = fmt(walkin);
    root.querySelector('.ta-r-pack').textContent = fmt(pack);
    root.querySelector('.ta-r-pass').textContent = fmt(pass);
    var be = rate > 0 ? pass / rate : 0;
    root.querySelector('.ta-verdict').textContent = 'Pass break-even: ' + be.toFixed(1) + ' visits a month (' + (be / 4.33).toFixed(1) + ' days a week). National norms: $25-$65 full day (~$40 avg), half days 55-65% of full, packages 10-15% off, passes $400-$900. Estimate, not a quote.';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogDaycareCostCalculator = { recalc: calc };
})();
