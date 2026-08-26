/*!
 * ToolAspect Wrongful Termination Compensation Calculator Embed
 * Install: <div id="ta-wrongful-termination-compensation-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wrongful-termination-compensation-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wrongful-termination-compensation-calculator';
  var BASE = 'https://toolaspect.com/wrongful-termination-compensation-calculator/';

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
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
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
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}.ta-embed-breakdown{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wrongful-termination-compensation-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wrongful-termination-compensation-calculator"]')) {
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
    + '<div class="ta-embed-title">Wrongful Termination Compensation</div>'
    + '<div class="ta-embed-subtitle">Lost wages + lost benefits + front pay + capped damages</div>'
    + '<div class="ta-embed-card">'
    + '<h4>Wages</h4>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Annual salary ($)</label><input type="number" class="ta-salary" value="72000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Months out</label><input type="number" class="ta-months" value="6" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Interim earnings ($)</label><input type="number" class="ta-mitig" value="5000" min="0" step="500"></div>'
    + '</div>'
    + '<h4 style="margin-top:14px">Lost benefits</h4>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Health premium ($/mo)</label><input type="number" class="ta-health" value="777" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>401(k) match (% salary)</label><input type="number" class="ta-match" value="4" min="0" max="15" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Bonus / yr ($)</label><input type="number" class="ta-bonus" value="4000" min="0" step="500"></div>'
    + '</div>'
    + '<h4 style="margin-top:14px">Damages &amp; fees</h4>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Front pay months</label><input type="number" class="ta-front" value="3" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Distress claim ($)</label><select class="ta-distress">'
    + '<option value="0">None</option><option value="10000">$10,000</option><option value="30000" selected>$30,000</option><option value="75000">$75,000</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Employer size</label><select class="ta-cap">'
    + '<option value="50000">15–100 (cap $50k)</option><option value="100000">101–200 (cap $100k)</option>'
    + '<option value="200000" selected>201–500 (cap $200k)</option><option value="300000">501+ (cap $300k)</option>'
    + '<option value="0">State law (no cap)</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Attorney fee (%)</label><select class="ta-fee">'
    + '<option value="0">0 (hourly)</option><option value="25">25%</option><option value="33" selected>33%</option><option value="40">40%</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-legal">Educational estimate only — not legal advice. Laws and caps vary by state.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var salary = val('.ta-salary'), months = val('.ta-months'), mitig = val('.ta-mitig');
    var health = val('.ta-health'), match = val('.ta-match'), bonus = val('.ta-bonus');
    var front = val('.ta-front'), distress = val('.ta-distress'), cap = val('.ta-cap'), feePct = val('.ta-fee');
    var mo = salary / 12;
    var backPay = Math.max(0, mo * months - mitig);
    var lostBen = health * months + salary * match / 100 * (months / 12) + bonus * (months / 12);
    var frontPay = mo * front;
    var capped = Math.min(distress, cap);
    var gross = backPay + lostBen + frontPay + capped;
    var net = gross - gross * feePct / 100;
    if (salary <= 0 || months <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter salary and months out of work</div>';
      return;
    }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(gross) + '</div>'
      + '<div class="ta-embed-sub">gross estimate · net ' + usd(net) + ' after a ' + feePct + '% fee, before taxes</div>'
      + '<div class="ta-embed-breakdown">'
      + '<div><div class="k">Back pay</div><div class="v">' + usd(backPay) + '</div></div>'
      + '<div><div class="k">Lost benefits</div><div class="v">' + usd(lostBen) + '</div></div>'
      + '<div><div class="k">Front pay</div><div class="v">' + usd(frontPay) + '</div></div>'
      + '<div><div class="k">Distress (capped)</div><div class="v">' + usd(capped) + '</div></div>'
      + '</div>'
      + (cap > 0 && distress > cap ? '<div class="ta-embed-sub">Federal cap limited distress to ' + usd(cap) + '</div>' : '');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.wrongfulTerminationCompensation = { recalc: calc };
})();
