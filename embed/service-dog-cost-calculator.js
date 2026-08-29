/*!
 * ToolAspect Service Dog Cost Calculator Embed
 * Install: <div id="ta-service-dog-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/service-dog-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-service-dog-cost-calculator';
  var BASE = 'https://toolaspect.com/service-dog-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#8b5cf6;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#a78bfa}'
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
    + '.ta-embed-mini-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;text-align:center;font-size:.85rem;margin-top:14px}'
    + '.ta-embed-mini-row strong{display:block;font-size:1.15rem;margin-top:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}.ta-embed-mini-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'service-dog-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="service-dog-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Service Dog Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Program-trained vs owner-trained, plus annual upkeep</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Path</label><select id="tasd-path">'
    + '<option value="owner" selected>Owner-trained (with pro help)</option>'
    + '<option value="program">Program-trained placement</option></select></div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Program fee ($)</label><input type="number" id="tasd-progFee" value="25000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Travel + app + gear ($)</label><input type="number" id="tasd-travel" value="1430" min="0" step="50"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Dog + vet ($)</label><input type="number" id="tasd-acq" value="1050" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Lesson hours</label><input type="number" id="tasd-hours" value="40" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Rate ($/hr)</label><input type="number" id="tasd-rate" value="150" min="0" step="10"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Classes + gear + fees ($)</label><input type="number" id="tasd-extra" value="865" min="0" step="25"></div>'
    + '<div class="ta-embed-form-group"><label>Upkeep ($/yr)</label><input type="number" id="tasd-upkeep" value="1880" min="0" step="50"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tasd-total">—</div>'
    + '<div class="ta-embed-sub" id="tasd-sub">to a working dog</div>'
    + '<div class="ta-embed-mini-row">'
    + '<div><span style="color:var(--ta-muted)">Upkeep/yr</span><strong id="tasd-up">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">8-yr lifetime</span><strong id="tasd-life">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Other path</span><strong id="tasd-alt">—</strong></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tasd-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  function num(id) { return parseFloat(g(id).value) || 0; }

  function calc() {
    var owner = g('path').value === 'owner';
    var ownerTotal = num('acq') + num('hours') * num('rate') + num('extra');
    var progTotal = num('progFee') + num('travel');
    var upkeep = num('upkeep');
    var total = owner ? ownerTotal : progTotal;
    g('total').textContent = money(total);
    g('sub').textContent = owner ? 'owner-trained path' : 'program placement path';
    g('up').textContent = money(upkeep);
    g('life').textContent = money(total + upkeep * 8);
    g('alt').textContent = money(owner ? progTotal : ownerTotal);
  }

  ['path'].forEach(function (id) { g(id).addEventListener('change', calc); });
  ['progFee', 'travel', 'acq', 'hours', 'rate', 'extra', 'upkeep'].forEach(function (id) {
    g(id).addEventListener('input', calc);
  });
  calc();
})();
