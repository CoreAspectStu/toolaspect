/*!
 * ToolAspect 529-to-Roth Rollover Calculator Embed
 * Install: <div id="ta-529-to-roth-rollover-calculator"></div>
 *          <script src="https://toolaspect.com/embed/529-to-roth-rollover-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-529-to-roth-rollover-calculator';
  var BASE = 'https://toolaspect.com/529-to-roth-rollover-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;gap:8px;font-size:.8rem;color:var(--ta-muted)}'
    + '.ta-embed-check input{width:16px;height:16px;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-mini-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;text-align:center;font-size:.85rem;margin-top:14px}'
    + '.ta-embed-mini-row strong{display:block;font-size:1.1rem;margin-top:2px}'
    + '.ta-embed-note{font-size:.78rem;color:var(--ta-muted);text-align:center;margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', '529-to-roth-rollover-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="529-to-roth-rollover-calculator"]')) {
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
    if (window.console) console.warn('ToolAspect embed: no container #' + TARGET_ID + ' found.');
    return;
  }

  var html = ''
    + '<div class="ta-embed-root">'
    + '<div class="ta-embed-title">529 to Roth Rollover Calculator</div>'
    + '<div class="ta-embed-subtitle">SECURE 2.0: $35,000 lifetime, 15-year rule, IRA annual limits</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>529 balance ($)</label><input type="number" id="tar529-bal" value="42000" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Year account opened</label><input type="number" id="tar529-open" value="2009" min="1970" max="2026"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Beneficiary earned income ($/yr)</label><input type="number" id="tar529-earned" value="30000" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Regular Roth contributions ($/yr)</label><input type="number" id="tar529-reg" value="0" min="0"></div>'
    + '</div>'
    + '<div class="ta-embed-check"><input type="checkbox" id="tar529-catch"> <span>Age 50+ catch-up (+$1,100, where custodians allow)</span></div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tar529-years">—</div>'
    + '<div class="ta-embed-sub" id="tar529-window">years to move the maximum</div>'
    + '<div class="ta-embed-mini-row">'
    + '<div><span style="color:var(--ta-muted)">Total moving</span><strong id="tar529-movable">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Per year</span><strong id="tar529-annual">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Left in 529</span><strong id="tar529-left">—</strong></div>'
    + '</div>'
    + '<div class="ta-embed-note" id="tar529-note"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tar529-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function calc() {
    var bal = parseFloat(g('bal').value) || 0;
    var open = parseInt(g('open').value) || 0;
    var earned = parseFloat(g('earned').value) || 0;
    var regular = parseFloat(g('reg').value) || 0;
    var limit = 7500 + (g('catch').checked ? 1100 : 0) - regular;
    limit = Math.max(0, limit);
    var eligibleFrom = open + 15;
    var movable = Math.min(bal, 35000);
    var annual = Math.min(limit, earned, movable);
    var years = annual > 0 ? Math.ceil(movable / annual) : 0;
    g('years').textContent = years > 0 ? years : '—';
    g('window').textContent = years > 0 ? 'years (' + 2026 + ' to ' + (2026 + years - 1) + ')' : 'no rollover possible';
    g('movable').textContent = money(movable);
    g('annual').textContent = annual > 0 ? money(annual) : '$0';
    g('left').textContent = money(Math.max(0, bal - movable));
    var notes = [];
    if (2026 - open < 15) notes.push('account only ' + (2026 - open) + ' yrs old; eligible from ' + eligibleFrom);
    if (earned < 7500) notes.push('earned income below the rollover amount');
    if (bal > 35000) notes.push(money(bal - 35000) + ' stays past the $35,000 cap');
    g('note').textContent = notes.length ? notes.join(' · ') : 'Direct trustee-to-trustee transfer to the beneficiary\'s own Roth IRA.';
  }

  target.addEventListener('input', calc);
  target.addEventListener('change', calc);
  calc();
})();
