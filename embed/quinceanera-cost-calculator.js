/*!
 * ToolAspect Quinceañera Cost Calculator Embed
 * Install: <div id="ta-quinceanera-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/quinceanera-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-quinceanera-cost-calculator';
  var BASE = 'https://toolaspect.com/quinceanera-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#e11d48;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#fb7185}'
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
  styleEl.setAttribute('data-ta-embed', 'quinceanera-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="quinceanera-cost-calculator"]')) {
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
    budget: { hall: 1000, plate: 20, dress: 800, choreo: 700, photo: 800, favor: 1.75 },
    classic: { hall: 2500, plate: 30, dress: 1300, choreo: 1200, photo: 1800, favor: 2 },
    grand: { hall: 5000, plate: 50, dress: 3000, choreo: 2500, photo: 3000, favor: 3 }
  };
  var FIELDS = ['hall', 'plate', 'dress', 'choreo', 'photo', 'favor'];

  var html = ''
    + '<div class="ta-embed-root">'
    + '<div class="ta-embed-title">Quinceañera Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Hall, catering, dress, choreographer, photo &amp; favors by guest count</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guests</label><input type="number" id="taq-guests" value="175" min="1"></div>'
    + '<div class="ta-embed-form-group" style="grid-column:span 2"><label>Preset</label><select id="taq-preset">'
    + '<option value="budget">Budget (church hall)</option>'
    + '<option value="classic" selected>Classic (banquet hall)</option>'
    + '<option value="grand">Grand (upscale hall)</option>'
    + '<option value="custom">Custom</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Hall ($)</label><input type="number" id="taq-hall" value="2500" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Catering ($/plate)</label><input type="number" id="taq-plate" value="30" min="0"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Dress ($)</label><input type="number" id="taq-dress" value="1300" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Choreographer ($)</label><input type="number" id="taq-choreo" value="1200" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Photo + video ($)</label><input type="number" id="taq-photo" value="1800" min="0"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Favors ($/guest)</label><input type="number" id="taq-favor" value="2" min="0" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Other lines ($)</label><input type="number" id="taq-other" value="2850" min="0"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="taq-total">—</div>'
    + '<div class="ta-embed-sub" id="taq-sub">total party budget</div>'
    + '<div class="ta-embed-mini-row">'
    + '<div><span style="color:var(--ta-muted)">Per guest</span><strong id="taq-per">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Catering</span><strong id="taq-cat">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Hall + food</span><strong id="taq-share">—</strong></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#taq-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function calc() {
    var guests = parseInt(g('guests').value) || 0;
    var v = {};
    FIELDS.forEach(function (f) { v[f] = parseFloat(g(f).value) || 0; });
    var other = parseFloat(g('other').value) || 0;
    var total = v.hall + v.plate * guests + v.dress + v.choreo + v.photo + v.favor * guests + other;
    var cat = v.plate * guests;
    g('total').textContent = money(total);
    g('sub').textContent = guests + ' guests';
    g('per').textContent = guests > 0 ? money(total / guests) : '—';
    g('cat').textContent = money(cat);
    g('share').textContent = total > 0 ? Math.round((v.hall + cat) / total * 100) + '%' : '—';
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
  g('guests').addEventListener('input', calc);
  g('other').addEventListener('input', calc);
  g('preset').addEventListener('change', applyPreset);
  calc();
})();
