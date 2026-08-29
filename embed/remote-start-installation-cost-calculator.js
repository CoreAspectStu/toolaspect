/*!
 * ToolAspect Remote Start Installation Cost Calculator Embed
 * Install: <div id="ta-remote-start-installation-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/remote-start-installation-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-remote-start-installation-cost-calculator';
  var BASE = 'https://toolaspect.com/remote-start-installation-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;gap:8px;font-size:.85rem;margin-top:10px;cursor:pointer}'
    + '.ta-embed-check input{width:auto;accent-color:var(--ta-accent)}'
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
  styleEl.setAttribute('data-ta-embed', 'remote-start-installation-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="remote-start-installation-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Remote Start Installation Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Price by system tier, key type, and add-ons</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Ignition type</label><select id="tars-keyType">'
    + '<option value="0">Standard turn-key</option>'
    + '<option value="75" selected>Push-to-start (+bypass)</option>'
    + '<option value="150">European / luxury</option></select></div>'
    + '<div class="ta-embed-form-group" style="grid-column:span 2"><label>System tier</label><select id="tars-tier">'
    + '<option value="249.99">1-way basic (1,000 ft)</option>'
    + '<option value="399.99" selected>2-way LCD (1-3 mi)</option>'
    + '<option value="600">OEM dealer accessory</option></select></div>'
    + '</div>'
    + '<label class="ta-embed-check"><input type="checkbox" id="tars-manual"> Manual transmission (+$100)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" id="tars-antenna"> Extended-range antenna (+$75)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" id="tars-phone"> Smartphone module (+$99 + $60/yr)</label>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tars-total">—</div>'
    + '<div class="ta-embed-sub" id="tars-sub">estimated installed total</div>'
    + '<div class="ta-embed-mini-row">'
    + '<div><span style="color:var(--ta-muted)">Shop range</span><strong id="tars-range">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">3-yr cost</span><strong id="tars-yr3">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">DIY parts</span><strong id="tars-diy">—</strong></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tars-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function calc() {
    var keyType = parseFloat(g('keyType').value) || 0;
    var tier = parseFloat(g('tier').value) || 0;
    var manual = g('manual').checked ? 100 : 0;
    var antenna = g('antenna').checked ? 75 : 0;
    var phone = g('phone').checked;
    var total = tier + keyType + manual + antenna + (phone ? 99 : 0);
    g('total').textContent = money(total);
    g('sub').textContent = phone ? 'includes $99 module; add $60/yr subscription' : 'parts + professional installation';
    g('range').textContent = money(total * 0.9) + '–' + money(total * 1.15);
    g('yr3').textContent = phone ? money(total + 3 * 60) : '—';
    g('diy').textContent = money(189.99 + (keyType > 0 ? 59.99 : 0));
  }

  ['keyType', 'tier'].forEach(function (id) { g(id).addEventListener('change', calc); });
  ['manual', 'antenna', 'phone'].forEach(function (id) { g(id).addEventListener('change', calc); });
  calc();
})();
