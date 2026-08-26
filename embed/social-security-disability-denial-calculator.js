/*!
 * ToolAspect SSDI Denial & Back Pay Calculator Embed
 * Install: <div id="ta-social-security-disability-denial-calculator"></div>
 *          <script src="https://toolaspect.com/embed/social-security-disability-denial-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-social-security-disability-denial-calculator';
  var BASE = 'https://toolaspect.com/social-security-disability-denial-calculator/';

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
  styleEl.setAttribute('data-ta-embed', 'social-security-disability-denial-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="social-security-disability-denial-calculator"]')) {
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
    + '<div class="ta-embed-title">SSDI Denial &amp; Back Pay Calculator</div>'
    + '<div class="ta-embed-subtitle">5-month waiting period, 12-month retro cap, fee-capped</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Monthly benefit ($)</label><input type="number" class="ta-ben" value="1630" min="100" max="4152" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Onset date</label><input type="date" class="ta-onset" value="2024-03-15"></div>'
    + '<div class="ta-embed-form-group"><label>Application date</label><input type="date" class="ta-app" value="2024-06-10"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Favorable decision date</label><input type="date" class="ta-dec" value="2026-02-20"></div>'
    + '<div class="ta-embed-form-group"><label>Representative fee</label><select class="ta-fee">'
    + '<option value="0">None (0%)</option>'
    + '<option value="0.25" selected>25% capped at $9,200</option>'
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

  var MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function mi(d) { return d.getFullYear() * 12 + d.getMonth(); }
  function mLabel(idx) { return MON[((idx % 12) + 12) % 12] + ' ' + Math.floor(idx / 12); }
  function parseD(s) {
    var p = s.split('-');
    return new Date(parseInt(p[0], 10), parseInt(p[1], 10) - 1, parseInt(p[2], 10));
  }

  function calc() {
    var ben = val('.ta-ben');
    var onset = root.querySelector('.ta-onset').value;
    var app = root.querySelector('.ta-app').value;
    var dec = root.querySelector('.ta-dec').value;
    var feeMode = root.querySelector('.ta-fee').value;

    if (!onset || !app || !dec || ben <= 0 || parseD(dec) < parseD(app)) {
      resultEl.innerHTML = '<div class="ta-embed-sub">Enter valid dates: onset, application, and a decision date after the application.</div>';
      return;
    }

    var onsetM = mi(parseD(onset));
    var appM = mi(parseD(app));
    var decM = mi(parseD(dec));
    var ent = onsetM + 6;
    var start = Math.max(ent, appM - 12);
    var end = decM - 1;
    var months = Math.max(0, end - start + 1);
    var bp = months * ben;
    var fee = feeMode === '0.25' ? Math.min(bp * 0.25, 9200) : 0;
    var net = bp - fee;
    var capBinds = ent > (appM - 12);

    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + fmt(bp) + '</div>'
      + '<div class="ta-embed-sub">Estimated back pay if approved — ' + months + (months === 1 ? ' month' : ' months') + ' of past-due benefits</div>'
      + '<div class="ta-embed-sub">First payable month: <strong>' + mLabel(start) + '</strong> (' + (capBinds ? 'waiting period governs' : '12-month retro cap governs') + ')</div>'
      + '<div class="ta-embed-sub">Representative fee: <strong>' + fmt(fee) + '</strong> · Net to you: <strong>' + fmt(net) + '</strong></div>'
      + '<div class="ta-embed-note">Education only, not legal advice. Simplified model: day-level rules, proration, family benefits, and offsets are not included. About 62% of initial claims are denied; ~51% of ALJ decisions were favorable in 2024 (SSA data).</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.socialSecurityDisabilityDenialCalculator = { recalc: calc };
})();
