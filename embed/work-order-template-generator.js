/*!
 * ToolAspect Work Order Template Generator Embed
 * Install: <div id="ta-work-order-template-generator"></div>
 *          <script src="https://toolaspect.com/embed/work-order-template-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-work-order-template-generator';

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
    + '.ta-embed-chips{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px}'
    + '.ta-embed-chip{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:6px 12px;font-size:.8rem}'
    + '.ta-embed-chip strong{color:var(--ta-text)}'
    + '.ta-embed-lines{text-align:left;font-size:.86rem}'
    + '.ta-embed-line{display:flex;justify-content:space-between;gap:8px;padding:5px 0;border-bottom:1px solid var(--ta-bg)}'
    + '.ta-embed-line:last-child{border-bottom:none;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'work-order-template-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="work-order-template-generator"]')) {
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
  if (target.getAttribute('data-theme')) root.setAttribute('data-theme', target.getAttribute('data-theme'));

  root.innerHTML = ''
    + '<div class="ta-embed-title">Work Order Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Labor &times; rate + parts &times; unit + tax — the full template on the site</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Labor hours</label><input type="number" id="ta-wo-lh" value="3.5" min="0" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Rate ($/hr)</label><input type="number" id="ta-wo-lr" value="85" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Tax (%)</label><input type="number" id="ta-wo-tax" value="7" min="0" step="0.25"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Parts total ($)</label><input type="number" id="ta-wo-parts" value="85.98" min="0" step="0.01"></div>'
    + '</div>'
    + '<div class="ta-embed-result"><div class="ta-embed-big" id="ta-wo-total">—</div>'
    + '<div class="ta-embed-sub">grand total — labor + parts + tax</div>'
    + '<div class="ta-embed-chips">'
    + '<span class="ta-embed-chip"><strong id="ta-wo-labor">—</strong> labor</span>'
    + '<span class="ta-embed-chip"><strong id="ta-wo-ptot">—</strong> parts</span>'
    + '<span class="ta-embed-chip"><strong id="ta-wo-ttax">—</strong> tax</span>'
    + '</div></div>'
    + '<div class="ta-embed-card ta-embed-lines" id="ta-wo-lines"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="https://toolaspect.com/work-order-template-generator/" target="_blank" rel="noopener">ToolAspect</a></div>';

  target.appendChild(root);

  function $(id) { return document.getElementById(id); }
  function fmt(n) { return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function vv(id) { return parseFloat($(id).value) || 0; }

  function calc() {
    var labor = vv('ta-wo-lh') * vv('ta-wo-lr');
    var parts = vv('ta-wo-parts');
    var sub = labor + parts;
    var tax = sub * vv('ta-wo-tax') / 100;
    var total = sub + tax;
    $('ta-wo-total').textContent = fmt(total);
    $('ta-wo-labor').textContent = fmt(labor);
    $('ta-wo-ptot').textContent = fmt(parts);
    $('ta-wo-ttax').textContent = fmt(tax);
    $('ta-wo-lines').innerHTML = ''
      + '<div class="ta-embed-line"><span>Labor (' + vv('ta-wo-lh') + ' hr × ' + fmt(vv('ta-wo-lr')) + ')</span><span>' + fmt(labor) + '</span></div>'
      + '<div class="ta-embed-line"><span>Parts &amp; materials</span><span>' + fmt(parts) + '</span></div>'
      + '<div class="ta-embed-line"><span>Subtotal</span><span>' + fmt(sub) + '</span></div>'
      + '<div class="ta-embed-line"><span>Tax (' + vv('ta-wo-tax') + '%)</span><span>' + fmt(tax) + '</span></div>'
      + '<div class="ta-embed-line"><span>Grand total</span><span>' + fmt(total) + '</span></div>';
  }

  ['ta-wo-lh', 'ta-wo-lr', 'ta-wo-tax', 'ta-wo-parts'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  calc();
})();
