/*!
 * ToolAspect HSA Contribution Calculator Embed
 * Install: <div id="ta-hsa-contribution-calculator"></div>
 *          <script src="https://toolaspect.com/embed/hsa-contribution-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-hsa-contribution-calculator';
  var BASE = 'https://toolaspect.com/hsa-contribution-calculator/';
  var LIMIT = { self: 4400, family: 8750 };

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card h4{font-size:.82rem;margin:0 0 10px;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;font-weight:600}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-breakdown{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px;text-align:center}'
    + '.ta-embed-breakdown div{background:var(--ta-bg);border-radius:8px;padding:8px}'
    + '.ta-embed-breakdown .k{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-breakdown .v{font-size:1rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '.ta-embed-legal{text-align:center;font-size:.68rem;color:var(--ta-muted);margin-top:6px;line-height:1.5}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-breakdown{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'hsa-contribution-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="hsa-contribution-calculator"]')) {
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
    + '<div class="ta-embed-title">HSA Contribution Calculator</div>'
    + '<div class="ta-embed-subtitle">2026 limits, catch-ups and tax savings</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Coverage</label><select class="ta-cov">'
    + '<option value="self">Self-only</option><option value="family" selected>Family</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Age at Dec 31</label><input type="number" class="ta-age" value="57" min="18" max="100" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Months with HDHP</label><input type="number" class="ta-months" value="12" min="1" max="12" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Employer money ($)</label><input type="number" class="ta-emp" value="2000" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Federal bracket</label><select class="ta-fed">'
    + '<option value="10">10%</option><option value="12">12%</option><option value="22" selected>22%</option>'
    + '<option value="24">24%</option><option value="32">32%</option><option value="35">35%</option><option value="37">37%</option></select></div>'
    + '<div class="ta-embed-form-group"><label>State rate (%)</label><input type="number" class="ta-state" value="5" min="0" max="13" step="0.5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-legal">2026 limits per IRS Rev. Proc. 2025-19. Estimate only, not tax advice.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var cov = root.querySelector('.ta-cov').value;
    var age = val('.ta-age'), months = Math.min(12, Math.max(1, val('.ta-months')));
    var emp = val('.ta-emp'), fed = val('.ta-fed'), state = val('.ta-state');
    var base = LIMIT[cov];
    var prorated = Math.round(base * months / 12);
    var catchup = age >= 55 ? 1000 : 0;
    var total = prorated + catchup;
    var room = Math.max(0, total - emp);
    var rate = fed / 100 + state / 100 + 0.0765; // payroll route
    var rateNoFica = fed / 100 + state / 100;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(room) + '</div>'
      + '<div class="ta-embed-sub">personal contribution room' + (months < 12 ? ' (prorated ' + months + '/12)' : '') + '</div>'
      + '<div class="ta-embed-breakdown">'
      + '<div><div class="k">Your limit</div><div class="v">' + usd(total) + '</div></div>'
      + '<div><div class="k">Employer used</div><div class="v">' + usd(Math.min(emp, total)) + '</div></div>'
      + '<div><div class="k">Savings via payroll</div><div class="v">' + usd(room * rate) + '</div></div>'
      + '<div><div class="k">Savings direct</div><div class="v">' + usd(room * rateNoFica) + '</div></div>'
      + '</div>'
      + (catchup ? '<div class="ta-embed-sub">includes the $1,000 age-55+ catch-up</div>' : '');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.hsaContribution = { recalc: calc };
})();
