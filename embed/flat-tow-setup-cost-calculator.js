/*!
 * ToolAspect Flat Tow Setup Cost Calculator Embed
 * Install: <div id="ta-flat-tow-setup-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/flat-tow-setup-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-flat-tow-setup-cost-calculator';
  var BASE = 'https://toolaspect.com/flat-tow-setup-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#0ea5e9;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#38bdf8}'
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
    + '.ta-embed-mini-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;text-align:center;font-size:.85rem;margin-top:14px}'
    + '.ta-embed-mini-row strong{display:block;font-size:1.15rem;margin-top:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'flat-tow-setup-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="flat-tow-setup-cost-calculator"]')) {
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

  var PRESETS = {
    budget: { basePlate: '450', towBar: '600', braking: '750', lighting: '80', extras: '90', labor: '0' },
    typical: { basePlate: '550', towBar: '1000', braking: '1200', lighting: '180', extras: '120', labor: '450' },
    premium: { basePlate: '700', towBar: '1400', braking: '1500', lighting: '250', extras: '150', labor: '800' }
  };

  var html = ''
    + '<div class="ta-embed-root">'
    + '<div class="ta-embed-title">Flat Tow Setup Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Base plate, tow bar, braking, lighting, and labor for RV dinghy towing</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Build preset</label><select id="taft-preset">'
    + '<option value="budget">Budget DIY ($1,970)</option>'
    + '<option value="typical" selected>Typical installed ($3,500)</option>'
    + '<option value="premium">Premium installed ($4,800)</option>'
    + '<option value="custom">Custom</option></select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Base plate ($)</label><input type="number" id="taft-basePlate" value="550" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Tow bar ($)</label><input type="number" id="taft-towBar" value="1000" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Braking ($)</label><input type="number" id="taft-braking" value="1200" min="0" step="50"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Lighting ($)</label><input type="number" id="taft-lighting" value="180" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Extras: cables, charge line ($)</label><input type="number" id="taft-extras" value="120" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Labor ($)</label><input type="number" id="taft-labor" value="450" min="0" step="50"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="taft-total">&mdash;</div>'
    + '<div class="ta-embed-sub" id="taft-sub">total setup cost</div>'
    + '<div class="ta-embed-mini-row">'
    + '<div><span style="color:var(--ta-muted)">Parts</span><strong id="taft-parts">&mdash;</strong></div>'
    + '<div><span style="color:var(--ta-muted)">vs $2,800 dolly</span><strong id="taft-dolly">&mdash;</strong></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#taft-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  var FIELDS = ['basePlate', 'towBar', 'braking', 'lighting', 'extras', 'labor'];

  function calc() {
    var parts = 0, labor = 0, v = {};
    FIELDS.forEach(function (f) { v[f] = parseFloat(g(f).value) || 0; });
    parts = v.basePlate + v.towBar + v.braking + v.lighting + v.extras;
    labor = v.labor;
    g('total').textContent = money(parts + labor);
    g('sub').textContent = labor > 0 ? money(parts) + ' parts + ' + money(labor) + ' labor' : 'all parts, DIY labor';
    g('parts').textContent = money(parts);
    g('dolly').textContent = (parts + labor) <= 2800 ? money(2800 - parts - labor) + ' under' : money(parts + labor - 2800) + ' over';
  }

  function applyPreset() {
    var p = PRESETS[g('preset').value];
    if (!p) return;
    FIELDS.forEach(function (f) { g(f).value = p[f]; });
    calc();
  }

  FIELDS.forEach(function (f) {
    g(f).addEventListener('input', function () { g('preset').value = 'custom'; calc(); });
  });
  g('preset').addEventListener('change', applyPreset);
  calc();
})();
