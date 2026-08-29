/*!
 * ToolAspect Tutoring Rates Calculator Embed
 * Install: <div id="ta-tutoring-rates-calculator"></div>
 *          <script src="https://toolaspect.com/embed/tutoring-rates-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-tutoring-rates-calculator';
  var BASE = 'https://toolaspect.com/tutoring-rates-calculator/';

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
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-line{display:flex;justify-content:space-between;font-size:.85rem;color:var(--ta-text);padding:6px 2px;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-line:last-child{border-bottom:none}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'tutoring-rates-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="tutoring-rates-calculator"]')) {
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
    + '<div class="ta-embed-title">Tutoring Rates Calculator</div>'
    + '<div class="ta-embed-subtitle">What to charge per hour, and what you keep</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Subject</label><select class="ta-subject">'
    + '<option value="elem">Elementary basics</option><option value="msMath">Middle school</option>'
    + '<option value="hsMath" selected>HS math</option><option value="hsSci">HS sciences</option>'
    + '<option value="lang">Foreign language</option><option value="test">SAT/ACT prep</option>'
    + '<option value="ap">AP/college</option><option value="grad">GRE/MCAT/LSAT</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Background</label><select class="ta-cred">'
    + '<option value="student">College student</option><option value="tutor">Experienced tutor</option>'
    + '<option value="teacher" selected>Certified teacher</option><option value="specialist">Specialist/professor</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Market</label><select class="ta-region">'
    + '<option value="rural">Small town</option><option value="suburb" selected>Suburban</option>'
    + '<option value="metro">Major metro</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two" style="margin-top:10px">'
    + '<div class="ta-embed-form-group"><label>Years tutoring</label><input type="number" class="ta-yrs" value="4" min="0" max="40" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Hours per week</label><input type="number" class="ta-hrs" value="6" min="1" max="60" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub"></div>'
    + '<div class="ta-embed-line"><span>Rate band</span><strong class="ta-band">—</strong></div>'
    + '<div class="ta-embed-line"><span>Monthly gross</span><strong class="ta-month">—</strong></div>'
    + '<div class="ta-embed-line"><span>Net after Wyzant 25%</span><strong class="ta-net">—</strong></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var BASE_RATES = { elem: 30, msMath: 35, hsMath: 45, hsSci: 48, lang: 42, test: 60, ap: 55, grad: 70 };
  var CRED = { student: .65, tutor: 1, teacher: 1.15, specialist: 1.3 };
  var REGION = { rural: .85, suburb: 1, metro: 1.2 };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function money2(n) { return '$' + n.toFixed(2); }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var s = root.querySelector('.ta-subject').value;
    var c = root.querySelector('.ta-cred').value;
    var g = root.querySelector('.ta-region').value;
    var yrs = val('.ta-yrs');
    var hrs = val('.ta-hrs');
    var exp = 1 + 0.02 * Math.min(Math.max(yrs, 0), 10);
    var rate = BASE_RATES[s] * CRED[c] * REGION[g] * exp;
    root.querySelector('.ta-embed-big').textContent = money2(rate) + '/hr';
    root.querySelector('.ta-embed-sub').textContent = 'Recommended list rate';
    root.querySelector('.ta-band').textContent = money2(rate * 0.85) + ' – ' + money2(rate * 1.15);
    root.querySelector('.ta-month').textContent = usd(rate * hrs * 4.33) + '/mo';
    root.querySelector('.ta-net').textContent = money2(rate * 0.75) + '/hr';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.tutoringRatesCalculator = { recalc: calc };
})();
