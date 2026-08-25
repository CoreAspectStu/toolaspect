/*!
 * ToolAspect Medical Malpractice Settlement Calculator Embed
 * Install: <div id="ta-medical-malpractice-settlement-calculator"></div>
 *          <script src="https://toolaspect.com/embed/medical-malpractice-settlement-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-medical-malpractice-settlement-calculator';
  var BASE = 'https://toolaspect.com/medical-malpractice-settlement-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'medical-malpractice-settlement-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="medical-malpractice-settlement-calculator"]')) {
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

  var CAPS = {
    none: { type: 'none', cap: 0 },
    ca_injury: { type: 'nonecon', cap: 470000 },
    ca_death: { type: 'nonecon', cap: 650000 },
    tx: { type: 'nonecon', cap: 250000 },
    va: { type: 'total', cap: 2700000 },
    ind: { type: 'total', cap: 1800000 },
    ne: { type: 'total', cap: 2250000 }
  };

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Medical Malpractice Settlement Calculator</div>'
    + '<div class="ta-embed-subtitle">Multiplier method, 2026 state caps, and net after fees</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Past medical bills ($)</label><input type="number" class="ta-past" value="150000" min="0" step="10000"></div>'
    + '<div class="ta-embed-form-group"><label>Future medical / care ($)</label><input type="number" class="ta-future" value="0" min="0" step="10000"></div>'
    + '<div class="ta-embed-form-group"><label>Lost income ($)</label><input type="number" class="ta-lost" value="100000" min="0" step="10000"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Severity multiplier</label><select class="ta-mult">'
    + '<option value="1.5">1.5 — Fully recovered</option>'
    + '<option value="2">2 — Significant, mostly recovered</option>'
    + '<option value="3" selected>3 — Serious, lasting limitations</option>'
    + '<option value="4">4 — Severe, permanent</option>'
    + '<option value="5">5 — Catastrophic, lifelong care</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>State damage cap</label><select class="ta-cap">'
    + '<option value="none" selected>No cap (NY, PA; FL/IL/GA struck down)</option>'
    + '<option value="ca_injury">California — injury ($470,000 noneconomic)</option>'
    + '<option value="ca_death">California — wrongful death ($650,000 noneconomic)</option>'
    + '<option value="tx">Texas ($250,000 noneconomic vs physicians)</option>'
    + '<option value="va">Virginia ($2.70M total)</option>'
    + '<option value="ind">Indiana ($1.8M total)</option>'
    + '<option value="ne">Nebraska ($2.25M total)</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Attorney fee</label><select class="ta-fee">'
    + '<option value="0.333" selected>33.3% (one third)</option>'
    + '<option value="0.40">40%</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Case costs, experts + filing ($)</label><input type="number" class="ta-costs" value="60000" min="0" step="5000"></div>'
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
    var past = val('.ta-past');
    var future = val('.ta-future');
    var lost = val('.ta-lost');
    var mult = val('.ta-mult') || 3;
    var capEl = root.querySelector('.ta-cap');
    var c = CAPS[capEl ? capEl.value : 'none'] || CAPS.none;
    var feePct = val('.ta-fee') || 0.333;
    var costs = val('.ta-costs');

    var economic = past + future + lost;
    var nonecon = mult * economic;
    var capped = (c.type === 'nonecon') ? Math.min(nonecon, c.cap) : nonecon;
    var gross = economic + capped;
    if (c.type === 'total') gross = Math.min(gross, c.cap);
    var fee = gross * feePct;
    var net = Math.max(0, gross - fee - costs);

    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + fmt(gross * 0.75) + ' – ' + fmt(gross) + '</div>'
      + '<div class="ta-embed-sub">Settlement negotiations discount from full value</div>'
      + '<div class="ta-embed-sub">Gross case value: <strong>' + fmt(gross) + '</strong> (economic ' + fmt(economic) + ' + noneconomic ' + fmt(capped) + ')</div>'
      + '<div class="ta-embed-sub">Estimated net after fee + costs: <strong>' + fmt(net) + '</strong></div>'
      + '<div class="ta-embed-note">Education only, not legal advice. Every case is different; talk to a licensed attorney in your state.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.medicalMalpracticeSettlementCalculator = { recalc: calc };
})();
