/*!
 * ToolAspect Workers Comp Settlement Calculator Embed
 * Install: <div id="ta-workers-comp-settlement-calculator"></div>
 *          <script src="https://toolaspect.com/embed/workers-comp-settlement-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-workers-comp-settlement-calculator';
  var BASE = 'https://toolaspect.com/workers-comp-settlement-calculator/';

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
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-note{color:var(--ta-muted);font-size:.72rem;margin-top:10px;text-align:center}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'workers-comp-settlement-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="workers-comp-settlement-calculator"]')) {
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
    + '<div class="ta-embed-title">Workers Comp Settlement Calculator</div>'
    + '<div class="ta-embed-subtitle">PPD award estimate for injured workers</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Average weekly wage ($)</label><input type="number" class="ta-aww" value="1000" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Benefit model</label><select class="ta-model">'
    + '<option value="ny" selected>Scheduled-loss (NY-style)</option>'
    + '<option value="tx">Texas (impairment income)</option>'
    + '<option value="fl">Florida (impairment benefits)</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group ta-body-group"><label>Body part</label><select class="ta-body">'
    + '<option value="312">Arm (312 weeks)</option>'
    + '<option value="288">Leg (288 weeks)</option>'
    + '<option value="244" selected>Hand (244 weeks)</option>'
    + '<option value="205">Foot (205 weeks)</option>'
    + '<option value="160">Eye (160 weeks)</option>'
    + '<option value="75">Thumb (75 weeks)</option>'
    + '<option value="60">Hearing in one ear (60 weeks)</option>'
    + '<option value="46">Index finger (46 weeks)</option>'
    + '<option value="38">Great toe (38 weeks)</option>'
    + '<option value="30">Second finger (30 weeks)</option>'
    + '<option value="25">Third finger (25 weeks)</option>'
    + '<option value="16">Other toes (16 weeks)</option>'
    + '<option value="15">Fourth finger (15 weeks)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Impairment rating (%)</label><input type="number" class="ta-rating" value="20" min="1" max="100" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>State max weekly rate ($)</label><input type="number" class="ta-max" value="1281.50" min="0" step="10"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-note">Education only, not legal advice. Talk to a licensed attorney in your state.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function fmt(n) {
    return '$' + Math.abs(Math.round(n)).toLocaleString('en-US');
  }

  function flWeeks(pts) {
    var w = Math.min(pts, 10) * 2;
    if (pts > 10) w += Math.min(pts - 10, 5) * 3;
    if (pts > 15) w += Math.min(pts - 15, 5) * 4;
    if (pts > 20) w += (pts - 20) * 6;
    return w;
  }

  function calc() {
    var aww = val('.ta-aww');
    var model = root.querySelector('.ta-model').value;
    var rating = Math.min(Math.max(val('.ta-rating'), 0), 100);
    var stateMax = val('.ta-max');
    root.querySelector('.ta-body-group').style.visibility = (model === 'ny') ? 'visible' : 'hidden';

    var rate = 0, weeks = 0;
    if (model === 'ny') {
      rate = Math.min(aww * 2 / 3, stateMax);
      weeks = val('.ta-body') * rating / 100;
    } else if (model === 'tx') {
      rate = Math.min(aww * 0.70, stateMax);
      weeks = 3 * rating;
    } else {
      rate = Math.min(0.75 * (aww * 2 / 3), stateMax);
      weeks = flWeeks(rating);
    }
    var ppd = weeks * rate;

    if (ppd <= 0 || isNaN(ppd)) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your wage and rating</div>';
      return;
    }
    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + fmt(ppd) + '</div>'
      + '<div class="ta-embed-sub">Estimated PPD award: ' + weeks.toFixed(1) + ' weeks × ' + fmt(rate) + '/wk</div>'
      + '<div class="ta-embed-sub">Typical negotiation range: <strong>' + fmt(ppd * 0.85) + ' – ' + fmt(ppd * 1.15) + '</strong></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.workersCompSettlementCalculator = { recalc: calc };
})();
