/*!
 * ToolAspect Child Support Calculator Embed (simplified Texas + New York modes)
 * Install: <div id="ta-child-support-calculator"></div>
 *          <script src="https://toolaspect.com/embed/child-support-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-child-support-calculator';
  var BASE = 'https://toolaspect.com/child-support-calculator/';

  var TX_PCT = { 1: 20, 2: 25, 3: 30, 4: 35, 5: 40 };
  var NY_PCT = { 1: 17, 2: 25, 3: 29, 4: 31, 5: 35 };
  var TX_CAP = 11700;
  var NY_CAP = 193000;

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
    + '.ta-embed-mode-toggle{display:flex;gap:6px;margin-bottom:14px;justify-content:center}'
    + '.ta-embed-mode-btn{background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;'
    + 'padding:7px 16px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode-btn.ta-active{background:rgba(37,99,235,.1);border-color:var(--ta-accent);color:var(--ta-text);font-weight:600}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-mode-btn.ta-active{background:rgba(96,165,250,.12)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-note{color:var(--ta-muted);font-size:.75rem;margin-top:10px;font-style:italic}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'child-support-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="child-support-calculator"]')) {
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
    + '<div class="ta-embed-title">Child Support Calculator</div>'
    + '<div class="ta-embed-subtitle">Simplified Texas and New York guideline estimates</div>'
    + '<div class="ta-embed-mode-toggle">'
    + '<button type="button" class="ta-embed-mode-btn ta-active" data-mode="texas">Texas</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-mode="newyork">New York</button>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-inputs"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var inputsEl = root.querySelector('.ta-embed-inputs');
  var resultEl = root.querySelector('.ta-embed-result');
  var mode = 'texas';

  function kidsSelect() {
    return '<select class="ta-kids">'
      + '<option value="1">1</option>'
      + '<option value="2" selected>2</option>'
      + '<option value="3">3</option>'
      + '<option value="4">4</option>'
      + '<option value="5">5 or more</option>'
      + '</select>';
  }

  function renderInputs() {
    var h = '';
    if (mode === 'texas') {
      h = '<div class="ta-embed-form-row two">'
        + '<div class="ta-embed-form-group"><label>Paying parent net resources ($/mo)</label><input type="number" class="ta-net" value="6000" min="0" step="100"></div>'
        + '<div class="ta-embed-form-group"><label>Children</label>' + kidsSelect() + '</div>'
        + '</div>';
    } else {
      h = '<div class="ta-embed-form-row two">'
        + '<div class="ta-embed-form-group"><label>Noncustodial (paying) parent income ($/yr)</label><input type="number" class="ta-nc" value="90000" min="0" step="1000"></div>'
        + '<div class="ta-embed-form-group"><label>Custodial parent income ($/yr)</label><input type="number" class="ta-cust" value="60000" min="0" step="1000"></div>'
        + '</div>'
        + '<div class="ta-embed-form-group"><label>Children</label>' + kidsSelect() + '</div>';
    }
    inputsEl.innerHTML = h;
  }

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function fmt(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calc() {
    var kidsEl = root.querySelector('.ta-kids');
    var kids = kidsEl ? (parseInt(kidsEl.value, 10) || 1) : 1;
    var html = '';
    if (mode === 'texas') {
      var net = val('.ta-net');
      if (net <= 0) {
        resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter monthly net resources</div>';
        return;
      }
      var capped = net > TX_CAP;
      var used = Math.min(net, TX_CAP);
      var pct = TX_PCT[kids];
      var monthly = used * pct / 100;
      html = '<div class="ta-embed-big">' + fmt(monthly) + '/mo</div>'
        + '<div class="ta-embed-sub">' + fmt(monthly * 12) + ' per year</div>'
        + '<div class="ta-embed-sub">' + pct + '% of ' + fmt(used) + ' net resources'
        + (capped ? ' (capped at $11,700/mo)' : '') + '</div>'
        + '<div class="ta-embed-note">Educational estimate, not legal advice.</div>';
    } else {
      var nc = val('.ta-nc');
      var cust = val('.ta-cust');
      var combined = nc + cust;
      if (combined <= 0) {
        resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter both incomes</div>';
        return;
      }
      var nyCapped = combined > NY_CAP;
      var nyUsed = Math.min(combined, NY_CAP);
      var nyPct = NY_PCT[kids];
      var share = nc / combined;
      var annual = nyUsed * nyPct / 100 * share;
      var pctLabel = (kids === 5 ? 'at least 35%' : nyPct + '%');
      html = '<div class="ta-embed-big">' + fmt(annual / 12) + '/mo</div>'
        + '<div class="ta-embed-sub">' + fmt(annual) + ' per year</div>'
        + '<div class="ta-embed-sub">' + pctLabel + ' of combined income × ' + Math.round(share * 100) + '% income share</div>'
        + (nyCapped ? '<div class="ta-embed-sub">Combined income above the $193,000 cap; courts have discretion on the excess.</div>' : '')
        + '<div class="ta-embed-note">Educational estimate, not legal advice.</div>';
    }
    resultEl.innerHTML = html;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  root.querySelector('.ta-embed-mode-toggle').addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-mode-btn');
    if (!btn) return;
    mode = btn.getAttribute('data-mode');
    root.querySelectorAll('.ta-embed-mode-btn').forEach(function (b) { b.classList.remove('ta-active'); });
    btn.classList.add('ta-active');
    renderInputs();
    calc();
  });

  renderInputs();
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.childSupportCalculator = { recalc: calc };
})();
