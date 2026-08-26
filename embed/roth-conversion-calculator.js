/*!
 * ToolAspect Roth Conversion Calculator Embed
 * Install: <div id="ta-roth-conversion-calculator"></div>
 *          <script src="https://toolaspect.com/embed/roth-conversion-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-roth-conversion-calculator';
  var BASE = 'https://toolaspect.com/roth-conversion-calculator/';

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
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'roth-conversion-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="roth-conversion-calculator"]')) {
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
    + '<div class="ta-embed-title">Roth Conversion Calculator</div>'
    + '<div class="ta-embed-subtitle">Bracket ladder vs one-year conversion, 2026 brackets</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Filing status</label><select class="ta-fs"><option value="mfj" selected>Married filing jointly</option><option value="single">Single</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Stay under bracket</label><select class="ta-cap"><option value="12" selected>12%</option><option value="22">22%</option><option value="24">24%</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Other taxable income ($/yr)</label><input type="number" class="ta-other" value="20000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Amount to convert ($)</label><input type="number" class="ta-amt" value="300000" min="0" step="5000"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Spread over (years)</label><input type="number" class="ta-yrs" value="5" min="1" max="15" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var BR = {
    single: [[0, .10], [12400, .12], [50400, .22], [105700, .24], [201775, .32], [256225, .35], [640600, .37]],
    mfj: [[0, .10], [24800, .12], [100800, .22], [211400, .24], [403550, .32], [512450, .35], [768700, .37]]
  };
  var CAPS = {
    single: { '12': 50400, '22': 105700, '24': 201775 },
    mfj: { '12': 100800, '22': 211400, '24': 403550 }
  };

  function tax(taxable, b) {
    var t = 0;
    for (var i = 0; i < b.length; i++) {
      var lo = b[i][0], r = b[i][1], hi = b[i + 1] ? b[i + 1][0] : Infinity;
      t += Math.max(0, Math.min(taxable, hi) - lo) * r;
    }
    return t;
  }

  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function calc() {
    var fs = root.querySelector('.ta-fs').value;
    var cap = root.querySelector('.ta-cap').value;
    var other = val('.ta-other');
    var amt = val('.ta-amt');
    var yrs = Math.min(15, Math.max(1, Math.round(val('.ta-yrs') || 1)));
    var b = BR[fs], capTop = CAPS[fs][cap];
    if (amt <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter an amount to convert</div>';
      return;
    }
    var base = Math.floor(amt / yrs), rem = amt - base * yrs;
    var totalConvTax = 0;
    for (var y = 1; y <= yrs; y++) {
      var conv = base + (y <= rem ? 1 : 0);
      totalConvTax += tax(other + conv, b) - tax(other, b);
    }
    var oneShot = tax(other + amt, b) - tax(other, b);
    var room = Math.max(0, capTop - other);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(totalConvTax) + '</div>'
      + '<div class="ta-embed-sub">tax on the conversion spread over ' + yrs + ' years (' + ((totalConvTax / amt) * 100).toFixed(2) + '% effective)</div>'
      + '<div class="ta-embed-sub">One-year conversion instead: <strong>' + money(oneShot) + '</strong></div>'
      + '<div class="ta-embed-sub">Laddering saves <strong>' + money(Math.max(0, oneShot - totalConvTax)) + '</strong></div>'
      + '<div class="ta-embed-sub">Room below the ' + cap + '% cap: <strong>' + money(room) + '/yr</strong></div>'
      + '<div class="ta-embed-sub" style="font-size:.78rem;margin-top:10px">2026 federal brackets. Educational estimate only, not tax advice.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.rothConversionCalculator = { recalc: calc };
})();
