/*!
 * ToolAspect Small Pet Cost Calculator Embed
 * Install: <div id="ta-small-pet-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/small-pet-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-small-pet-cost-calculator';
  var BASE = 'https://toolaspect.com/small-pet-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#f59e0b;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#fbbf24}'
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
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-mini-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'small-pet-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="small-pet-cost-calculator"]')) {
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

  var SPECIES = {
    rabbit: { acq: 50, setup: 600, monthly: 65, vet: 150, extra: 0, life: 10 },
    guinea: { acq: 70, setup: 300, monthly: 60, vet: 150, extra: 0, life: 6 },
    hamster: { acq: 20, setup: 110, monthly: 25, vet: 50, extra: 0, life: 3 },
    dragon: { acq: 70, setup: 640, monthly: 45, vet: 120, extra: 60, life: 12 }
  };

  var html = ''
    + '<div class="ta-embed-root">'
    + '<div class="ta-embed-title">Small Pet Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Rabbit, guinea pig pair, hamster, or bearded dragon</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Species</label><select id="tasp-species">'
    + '<option value="rabbit" selected>Rabbit</option>'
    + '<option value="guinea">Guinea pigs (pair)</option>'
    + '<option value="hamster">Hamster</option>'
    + '<option value="dragon">Bearded dragon</option></select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Pet ($)</label><input type="number" id="tasp-acq" value="50" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>First-year setup ($)</label><input type="number" id="tasp-setup" value="600" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Food &amp; bedding ($/mo)</label><input type="number" id="tasp-monthly" value="65" min="0" step="5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Vet ($/yr)</label><input type="number" id="tasp-vet" value="150" min="0" step="25"></div>'
    + '<div class="ta-embed-form-group"><label>Extras ($/yr)</label><input type="number" id="tasp-extra" value="0" min="0" step="10"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tasp-first">—</div>'
    + '<div class="ta-embed-sub" id="tasp-sub">first-year cost</div>'
    + '<div class="ta-embed-mini-row">'
    + '<div><span style="color:var(--ta-muted)">Annual after</span><strong id="tasp-annual">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Lifetime</span><strong id="tasp-life">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Per month</span><strong id="tasp-permo">—</strong></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tasp-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  function num(id) { return parseFloat(g(id).value) || 0; }

  function calc() {
    var acq = num('acq'), setup = num('setup'), mo = num('monthly');
    var vet = num('vet'), extra = num('extra');
    var life = { rabbit: 10, guinea: 6, hamster: 3, dragon: 12 }[g('species').value];
    var first = acq + setup + mo * 12 + vet + extra;
    var annual = mo * 12 + vet + extra;
    var lifetime = first + annual * (life - 1);
    g('first').textContent = money(first);
    g('sub').textContent = 'first year · ' + g('species').selectedOptions[0].text.toLowerCase();
    g('annual').textContent = money(annual);
    g('life').textContent = money(lifetime);
    g('permo').textContent = money(lifetime / (life * 12));
  }

  function loadSpecies() {
    var p = SPECIES[g('species').value];
    g('acq').value = p.acq; g('setup').value = p.setup;
    g('monthly').value = p.monthly; g('vet').value = p.vet; g('extra').value = p.extra;
    calc();
  }

  g('species').addEventListener('change', loadSpecies);
  ['acq', 'setup', 'monthly', 'vet', 'extra'].forEach(function (id) {
    g(id).addEventListener('input', calc);
  });
  calc();
})();
