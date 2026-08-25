/*!
 * ToolAspect Settlement Calculator Embed
 * Install: <div id="ta-settlement-calculator"></div>
 *          <script src="https://toolaspect.com/embed/settlement-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-settlement-calculator';
  var BASE = 'https://toolaspect.com/settlement-calculator/';

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
    + '.ta-embed-note{text-align:center;font-size:.72rem;color:var(--ta-muted);margin-top:8px;line-height:1.5}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:6px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'settlement-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="settlement-calculator"]')) {
    (document.head || document.documentElement).appendChild(styleEl);
  }

  function findTarget() {
    var el = document.getElementById(TARGET_ID);
    if (el) return el;
    // fallback: div immediately preceding this script
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
    + '<div class="ta-embed-title">Settlement Calculator</div>'
    + '<div class="ta-embed-subtitle">Multiplier-method estimate for injury claims</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Medical bills ($)</label><input type="number" class="ta-med" value="20000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Lost wages ($)</label><input type="number" class="ta-wages" value="5000" min="0" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Injury severity</label><select class="ta-sev">'
    + '<option value="1.5">Minor, fully recovered (1.5x)</option>'
    + '<option value="2" selected>Moderate, full recovery expected (2x)</option>'
    + '<option value="3">Serious, long recovery (3x)</option>'
    + '<option value="4">Severe or permanent (4x)</option>'
    + '<option value="5">Catastrophic (5x)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Your share of fault (%)</label><input type="number" class="ta-fault" value="0" min="0" max="100" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-note">Not legal advice. This is an educational estimate; talk to a licensed attorney.</div>'
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

  function calc() {
    var med = val('.ta-med');
    var wages = val('.ta-wages');
    var mult = val('.ta-sev');
    var fault = Math.min(100, Math.max(0, val('.ta-fault')));

    if (med + wages <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your medical bills and lost wages</div>';
      return;
    }

    function pipeline(m) {
      var gross = med + wages + med * m;
      return gross * (1 - fault / 100);
    }
    var lo = pipeline(Math.max(0, mult - 0.5));
    var hi = pipeline(mult + 0.5);

    resultEl.innerHTML =
      '<div class="ta-embed-big">' + fmt(lo) + ' – ' + fmt(hi) + '</div>'
      + '<div class="ta-embed-sub">Estimated range' + (fault > 0 ? ' after a ' + fault + '% fault reduction' : '') + ', before fees</div>'
      + '<div class="ta-embed-sub">Net after a typical 33% attorney fee: <strong>' + fmt(lo * 0.67) + ' – ' + fmt(hi * 0.67) + '</strong></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.settlementCalculator = { recalc: calc };
})();
