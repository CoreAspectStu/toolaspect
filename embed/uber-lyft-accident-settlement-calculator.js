/*!
 * ToolAspect Uber & Lyft Accident Settlement Calculator Embed
 * Install: <div id="ta-uber-lyft-accident-settlement-calculator"></div>
 *          <script src="https://toolaspect.com/embed/uber-lyft-accident-settlement-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-uber-lyft-accident-settlement-calculator';
  var BASE = 'https://toolaspect.com/uber-lyft-accident-settlement-calculator/';

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
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-note{color:var(--ta-muted);font-size:.75rem;margin-top:10px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'uber-lyft-accident-settlement-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="uber-lyft-accident-settlement-calculator"]')) {
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
    + '<div class="ta-embed-title">Uber &amp; Lyft Accident Settlement Calculator</div>'
    + '<div class="ta-embed-subtitle">Multiplier method with rideshare coverage periods</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Medical bills ($)</label><input type="number" class="ta-med" value="30000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Future medical ($)</label><input type="number" class="ta-fut" value="8000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Lost wages ($)</label><input type="number" class="ta-wages" value="4000" min="0" step="250"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>App period</label><select class="ta-period">'
    + '<option value="p13" selected>Periods 2-3 — ride active</option>'
    + '<option value="p1">Period 1 — waiting for request</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Injury severity</label><select class="ta-mult">'
    + '<option value="1.5,2.5">Minor — soft tissue</option>'
    + '<option value="2.5,3.5" selected>Moderate — fractures, surgery</option>'
    + '<option value="3,4">Serious — lasting limitations</option>'
    + '<option value="4,5">Severe — permanent disability</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Your fault share (%)</label><input type="number" class="ta-fault" value="0" min="0" max="100" step="5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Attorney fee</label><select class="ta-fee">'
    + '<option value="0">None (0%)</option>'
    + '<option value="0.33" selected>33% pre-suit</option>'
    + '<option value="0.40">40% after filing</option>'
    + '</select></div>'
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

  function fmt(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calc() {
    var med = val('.ta-med');
    var fut = val('.ta-fut');
    var wages = val('.ta-wages');
    var period = root.querySelector('.ta-period').value;
    var band = (root.querySelector('.ta-mult').value || '2.5,3.5').split(',');
    var lo = parseFloat(band[0]), hi = parseFloat(band[1]);
    var fault = Math.min(100, Math.max(0, val('.ta-fault')));
    var feePct = val('.ta-fee') || 0;

    var specials = med + fut + wages;
    var grossLo = specials + specials * lo;
    var grossHi = specials + specials * hi;
    var keep = 1 - fault / 100;
    var afLo = grossLo * keep, afHi = grossHi * keep;

    var cap = period === 'p1' ? 50000 : 1000000;
    var covLo = Math.min(afLo, cap), covHi = Math.min(afHi, cap);
    var netLo = covLo * (1 - feePct), netHi = covHi * (1 - feePct);

    var capNote = period === 'p1'
      ? '<div class="ta-embed-note">Period 1: contingent $50,000/person coverage caps this range — the rideshare gap.</div>'
      : '<div class="ta-embed-note">Periods 2-3 carry $1M liability + $1M UM/UIM on both Uber and Lyft.</div>';

    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + fmt(covLo) + ' – ' + fmt(covHi) + '</div>'
      + '<div class="ta-embed-sub">Estimated range after ' + fault + '% fault, before fees</div>'
      + '<div class="ta-embed-sub">Specials ' + fmt(specials) + ' + pain &amp; suffering ' + fmt(specials * lo) + '–' + fmt(specials * hi) + '</div>'
      + '<div class="ta-embed-sub">Estimated net after fees: <strong>' + fmt(netLo) + ' – ' + fmt(netHi) + '</strong></div>'
      + capNote
      + '<div class="ta-embed-note">Education only, not legal advice. Coverage varies by state; talk to a licensed attorney.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.uberLyftAccidentSettlementCalculator = { recalc: calc };
})();
