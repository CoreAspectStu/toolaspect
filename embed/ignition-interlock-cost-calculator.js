/*!
 * ToolAspect Ignition Interlock Cost Calculator Embed
 * Install: <div id="ta-ignition-interlock-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/ignition-interlock-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-ignition-interlock-cost-calculator';
  var BASE = 'https://toolaspect.com/ignition-interlock-cost-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'ignition-interlock-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="ignition-interlock-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Ignition Interlock Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Total program cost: install + lease + calibrations + removal</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Install fee ($)</label><input type="number" class="ta-inst" value="100" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Monthly lease ($)</label><input type="number" class="ta-mo" value="85" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Program months</label><input type="number" class="ta-months" value="6" min="1" max="60" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Calibration fee ($)</label><input type="number" class="ta-cal" value="25" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Calibration interval</label><select class="ta-int">'
    + '<option value="30">Every 30 days</option><option value="60" selected>Every 60 days</option>'
    + '<option value="90">Every 90 days</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Removal fee ($)</label><input type="number" class="ta-rem" value="75" min="0" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var inst = parseFloat(root.querySelector('.ta-inst').value) || 0;
    var mo = parseFloat(root.querySelector('.ta-mo').value) || 0;
    var months = parseFloat(root.querySelector('.ta-months').value) || 0;
    var cal = parseFloat(root.querySelector('.ta-cal').value) || 0;
    var int = parseFloat(root.querySelector('.ta-int').value) || 60;
    var rem = parseFloat(root.querySelector('.ta-rem').value) || 0;
    if (months <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your required program length</div>';
      return;
    }
    var visits = Math.ceil(months * 30 / int);
    var total = inst + months * mo + visits * cal + rem;
    resultEl.innerHTML =
      '<div class="ta-embed-big">$' + Math.round(total).toLocaleString('en-US') + '</div>'
      + '<div class="ta-embed-sub">total program cost · $' + (total / months).toFixed(2) + '/mo effective</div>'
      + '<div class="ta-embed-sub">$' + Math.round(inst + rem).toLocaleString('en-US') + ' install + removal · $' + Math.round(months * mo).toLocaleString('en-US') + ' lease · $' + Math.round(visits * cal).toLocaleString('en-US') + ' calibrations (' + visits + ' visits)</div>'
      + '<div class="ta-embed-sub">Estimate only — not legal advice. Verify your term with your DMV or court.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.ignitionInterlockCostCalculator = { recalc: calc };
})();
