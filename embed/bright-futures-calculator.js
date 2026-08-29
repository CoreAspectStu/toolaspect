/*!
 * ToolAspect Bright Futures Calculator Embed
 * Install: <div id="ta-bright-futures-calculator"></div>
 *          <script src="https://toolaspect.com/embed/bright-futures-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-bright-futures-calculator';
  var BASE = 'https://toolaspect.com/bright-futures-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.7rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px;text-align:center}'
    + '.ta-embed-cell .cl{font-size:.7rem;color:var(--ta-muted);margin-bottom:3px;text-transform:uppercase;letter-spacing:.03em}'
    + '.ta-embed-cell .cv{font-size:1rem;font-weight:700;color:var(--ta-text)}'
    + '.ta-embed-note{text-align:left;background:var(--ta-bg);border-radius:8px;padding:12px 14px;margin-top:14px;font-size:.82rem;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'bright-futures-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="bright-futures-calculator"]')) {
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
    + '<div class="ta-embed-title">Bright Futures Calculator</div>'
    + '<div class="ta-embed-subtitle">Florida FAS / FMS eligibility from GPA + service or work hours</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Weighted GPA</label><input type="number" class="ta-gpa" value="3.6" min="0" max="6" step="0.01"></div>'
    + '<div class="ta-embed-form-group"><label>Service + work hours</label><input type="number" class="ta-hours" value="100" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Tuition + fees / credit ($)</label><input type="number" class="ta-rate" value="212.28" min="0" step="0.01"></div>'
    + '<div class="ta-embed-form-group"><label>Credits per year</label><input type="number" class="ta-cr" value="30" min="1" max="60" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">&nbsp;</div>'
    + '<div class="ta-embed-grid">'
    + '<div class="ta-embed-cell"><div class="cl">Award / year</div><div class="cv ta-yr">—</div></div>'
    + '<div class="ta-embed-cell"><div class="cl">120-credit degree</div><div class="cv ta-tot">—</div></div>'
    + '<div class="ta-embed-cell"><div class="cl">Coverage</div><div class="cv ta-cov">—</div></div>'
    + '<div class="ta-embed-cell"><div class="cl">Renewal GPA</div><div class="cv ta-ren">—</div></div>'
    + '</div>'
    + '<div class="ta-embed-note ta-verdict"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var gpa = val('.ta-gpa');
    var hrs = val('.ta-hours');
    var rate = Math.max(0, val('.ta-rate'));
    var cr = Math.max(1, val('.ta-cr') || 30);
    var isFAS = gpa >= 3.5 && hrs >= 100;
    var isFMS = gpa >= 3.0 && hrs >= 75;
    var pct = isFAS ? 1 : (isFMS ? 0.75 : 0);
    var eff = rate * pct;
    var big, sub;
    if (isFAS) { big = 'FAS — Academic Scholars'; sub = '3.50+ GPA and 100+ hours: 100% tuition + fees'; }
    else if (isFMS) { big = 'FMS — Medallion Scholars'; sub = '3.00+ GPA and 75+ hours: 75% tuition + fees'; }
    else { big = 'Not yet eligible'; sub = 'Below the FMS thresholds'; }
    root.querySelector('.ta-embed-big').textContent = big;
    root.querySelector('.ta-embed-sub').textContent = sub;
    root.querySelector('.ta-yr').textContent = pct > 0 ? fmt(eff * cr) : '—';
    root.querySelector('.ta-tot').textContent = pct > 0 ? fmt(eff * 120) : '—';
    root.querySelector('.ta-cov').textContent = pct > 0 ? Math.round(pct * 100) + '%' : '—';
    root.querySelector('.ta-ren').textContent = isFAS ? '3.00' : isFMS ? '2.75' : '—';
    var v = [];
    if (isFAS) v.push('Both FAS bars cleared (' + gpa.toFixed(2) + ' GPA, ' + Math.round(hrs) + ' hours).');
    else if (isFMS) {
      v.push('FMS locked in at 75%.');
      if (gpa < 3.5 && hrs >= 100) v.push('Hours already cover FAS — need +' + (3.5 - gpa).toFixed(2) + ' weighted GPA (to 3.50) for 100%.');
      if (gpa >= 3.5 && hrs < 100) v.push('GPA already clears FAS — log ' + (100 - Math.round(hrs)) + ' more hours for 100%.');
      if (gpa < 3.5 && hrs < 100) v.push('For FAS: +' + (3.5 - gpa).toFixed(2) + ' GPA and ' + (100 - Math.round(hrs)) + ' more hours.');
    } else {
      if (gpa < 3.0) v.push('GPA below the 3.00 FMS floor — that is the first target.');
      else v.push('GPA clears FMS. Log ' + (75 - Math.round(hrs)) + ' more hours for the 75% tier, ' + (100 - Math.round(hrs)) + ' for FAS.');
    }
    if (pct > 0) v.push('Renewal: ' + (isFAS ? '3.00' : '2.75') + ' college GPA + 24 credits/yr. Estimates only — verify rules at floridabrightfutures.gov.');
    root.querySelector('.ta-verdict').textContent = v.join(' ');
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.brightFuturesCalculator = { recalc: calc };
})();
