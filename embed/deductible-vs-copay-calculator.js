/*!
 * ToolAspect Deductible vs Copay Calculator Embed
 * Install: <div id="ta-deductible-vs-copay-calculator"></div>
 *          <script src="https://toolaspect.com/embed/deductible-vs-copay-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-deductible-vs-copay-calculator';
  var BASE = 'https://toolaspect.com/deductible-vs-copay-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-plan-title{font-size:.85rem;font-weight:700;margin-bottom:10px;color:var(--ta-text)}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'deductible-vs-copay-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="deductible-vs-copay-calculator"]')) {
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
    + '<div class="ta-embed-title">Deductible vs Copay Calculator</div>'
    + '<div class="ta-embed-subtitle">Which plan costs less this year? Assumes 20% coinsurance after the deductible</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-plan-title">Plan A: High-deductible / HDHP</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Premium ($/mo)</label><input type="number" class="ta-a-prem" value="350" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Deductible ($)</label><input type="number" class="ta-a-ded" value="3300" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Out-of-pocket max ($)</label><input type="number" class="ta-a-oop" value="8000" min="0" step="100"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-plan-title">Plan B: Copay / PPO plan</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Premium ($/mo)</label><input type="number" class="ta-b-prem" value="520" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Deductible ($)</label><input type="number" class="ta-b-ded" value="1000" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Out-of-pocket max ($)</label><input type="number" class="ta-b-oop" value="5000" min="0" step="100"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group" style="margin-bottom:0"><label>Expected annual medical expenses ($)</label><input type="number" class="ta-exp" value="4000" min="0" step="100"></div>'
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
    return '$' + Math.abs(Math.round(n)).toLocaleString('en-US');
  }

  function planCost(exp, prem, ded, oopMax) {
    var dedPortion = Math.min(exp, ded);
    var coinsPortion = Math.max(0, exp - ded) * 0.2;
    return prem * 12 + Math.min(oopMax, dedPortion + coinsPortion);
  }

  function calc() {
    var exp = val('.ta-exp');
    var a = planCost(exp, val('.ta-a-prem'), val('.ta-a-ded'), val('.ta-a-oop'));
    var b = planCost(exp, val('.ta-b-prem'), val('.ta-b-ded'), val('.ta-b-oop'));
    if (a <= 0 && b <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your plan details</div>';
      return;
    }
    var big, sub;
    if (a === b) {
      big = 'Dead heat';
      sub = 'Both plans cost ' + fmt(a) + ' at ' + fmt(exp) + ' of care';
    } else if (a < b) {
      big = 'Plan A saves ' + fmt(b - a);
      sub = 'HDHP ' + fmt(a) + ' vs copay plan ' + fmt(b) + ' at ' + fmt(exp) + ' of care';
    } else {
      big = 'Plan B saves ' + fmt(a - b);
      sub = 'Copay plan ' + fmt(b) + ' vs HDHP ' + fmt(a) + ' at ' + fmt(exp) + ' of care';
    }
    resultEl.innerHTML = '<div class="ta-embed-big">' + big + '</div>'
      + '<div class="ta-embed-sub">' + sub + '</div>'
      + '<div class="ta-embed-sub">Totals include 12 months of premiums plus your share of care costs, capped at each plan\'s out-of-pocket max.</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.deductibleVsCopayCalculator = { recalc: calc };
})();
