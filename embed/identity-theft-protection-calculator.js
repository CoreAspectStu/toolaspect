/*!
 * ToolAspect Identity Theft Protection Calculator Embed
 * Install: <div id="ta-identity-theft-protection-calculator"></div>
 *          <script src="https://toolaspect.com/embed/identity-theft-protection-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-identity-theft-protection-calculator';
  var BASE = 'https://toolaspect.com/identity-theft-protection-calculator/';

  var TIER_PRICE = { diy: 0, basic: 9.99, standard: 19.99, premium: 29.99 };
  var RISK_ITEMS = [
    { pts: 2, label: 'I reuse the same password on multiple accounts' },
    { pts: 2, label: 'No 2FA on my email or bank accounts' },
    { pts: 3, label: 'My credit is not frozen at all three bureaus' },
    { pts: 1, label: 'I have received a data-breach notice (SSN involved)' },
    { pts: 1, label: 'Unlocked mailbox / outdoor cluster box' },
    { pts: 1, label: 'Regular public Wi-Fi use without a VPN' },
    { pts: 1, label: 'High public profile (owner, figure, frequent poster)' },
    { pts: 2, label: 'Previous identity theft victim' },
    { pts: 1, label: 'Debit card used for most daily purchases' },
    { pts: 1, label: 'Mobile carrier account has no security PIN' }
  ];

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card h4{margin:0 0 10px;font-size:.95rem}'
    + '.ta-embed-check{display:flex;align-items:flex-start;gap:8px;font-size:.85rem;margin-bottom:6px;color:var(--ta-text);cursor:pointer}'
    + '.ta-embed-check input{width:15px;height:15px;margin-top:2px;accent-color:var(--ta-accent);flex-shrink:0}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-badge{display:inline-block;margin-top:8px;padding:4px 14px;border-radius:999px;font-size:.8rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'identity-theft-protection-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="identity-theft-protection-calculator"]')) {
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

  var checks = '';
  RISK_ITEMS.forEach(function (it, i) {
    checks += '<label class="ta-embed-check"><input type="checkbox" data-pts="' + it.pts + '" class="ta-risk"> ' + it.label + ' <span style="color:var(--ta-muted);font-size:.75rem">(+' + it.pts + ')</span></label>';
  });

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Identity Theft Protection Calculator</div>'
    + '<div class="ta-embed-subtitle">Your risk score, and what paid plans really cost</div>'
    + '<div class="ta-embed-card"><h4>Check every risk that applies</h4>' + checks + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Tier</label><select class="ta-tier">'
    + '<option value="diy">DIY free stack ($0)</option><option value="basic">Basic ($9.99/mo)</option>'
    + '<option value="standard" selected>Standard ($19.99/mo)</option><option value="premium">Premium ($29.99/mo)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Adults</label><select class="ta-adults">'
    + '<option value="1">1</option><option value="2" selected>2</option><option value="3">3</option><option value="4">4</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Years</label><select class="ta-years">'
    + '<option value="1">1</option><option value="3" selected>3</option><option value="5">5</option><option value="10">10</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function band(score) {
    if (score <= 3) return { name: 'LOW RISK', bg: 'rgba(34,197,94,.12)', color: '#16a34a' };
    if (score <= 6) return { name: 'MODERATE RISK', bg: 'rgba(37,99,235,.12)', color: '#2563eb' };
    if (score <= 9) return { name: 'ELEVATED RISK', bg: 'rgba(245,158,11,.15)', color: '#d97706' };
    return { name: 'HIGH RISK', bg: 'rgba(239,68,68,.12)', color: '#dc2626' };
  }

  function calc() {
    var score = 0;
    root.querySelectorAll('.ta-risk').forEach(function (b) {
      if (b.checked) score += parseInt(b.getAttribute('data-pts'), 10);
    });
    var tier = root.querySelector('.ta-tier').value;
    var adults = parseInt(root.querySelector('.ta-adults').value, 10);
    var years = parseInt(root.querySelector('.ta-years').value, 10);
    var monthly = TIER_PRICE[tier] * adults;
    var total = monthly * 12 * years;
    var b = band(score);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + score + ' / 15</div>'
      + '<div><span class="ta-embed-badge" style="background:' + b.bg + ';color:' + b.color + '">' + b.name + '</span></div>'
      + '<div class="ta-embed-sub">Plan cost: <strong>$' + monthly.toFixed(2) + '/mo</strong> · $' + Math.round(monthly * 12).toLocaleString('en-US') + '/yr · <strong>$' + Math.round(total).toLocaleString('en-US') + '</strong> over ' + years + ' year' + (years > 1 ? 's' : '') + '</div>'
      + '<div class="ta-embed-sub">The free DIY stack (3-bureau freeze, IRS IP PIN, free monitoring) does the prevention for $0.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.identityTheftProtectionCalculator = { recalc: calc };
})();
