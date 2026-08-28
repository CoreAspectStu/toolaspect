/*!
 * ToolAspect Dog DNA Test Cost Comparison Embed
 * Install: <div id="ta-dog-dna-cost"></div>
 *          <script src="https://toolaspect.com/embed/dog-dna-test-cost-comparison.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-dna-cost';
  var BASE = 'https://toolaspect.com/dog-dna-test-cost-comparison/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-stats{display:flex;justify-content:center;gap:24px;margin-top:10px;font-size:.85rem;color:var(--ta-text);flex-wrap:wrap}'
    + '.ta-embed-stats span b{display:block;font-size:1.05rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-stats{gap:14px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-dna-cost');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-dna-cost"]')) {
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
    + '<div class="ta-embed-title">Dog DNA Test Cost</div>'
    + '<div class="ta-embed-subtitle">Totals and cost per condition screened</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Number of dogs</label><input type="number" class="ta-dogs" value="2" min="1" max="20" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Kit</label><select class="ta-kit">'
    + '<option value="0">Embark Breed Kit ($99&ndash;$129)</option>'
    + '<option value="1" selected>Embark Breed + Health ($129&ndash;$169)</option>'
    + '<option value="2">Wisdom Panel Essential ($79&ndash;$99.99)</option>'
    + '<option value="3">Wisdom Panel Premium ($149&ndash;$230)</option>'
    + '<option value="4">DNA My Dog ($59&ndash;$79)</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Price point</label><select class="ta-tier">'
    + '<option value="0">Sale price</option><option value="2" selected>Typical</option><option value="1">Full list</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var KITS = [
    { n: 'Embark Breed Kit', sale: 99, list: 129, cond: null, breeds: '350+' },
    { n: 'Embark Breed + Health', sale: 129, list: 169, cond: 270, breeds: '350+' },
    { n: 'Wisdom Panel Essential', sale: 79, list: 99.99, cond: null, breeds: '365' },
    { n: 'Wisdom Panel Premium', sale: 149, list: 230, cond: 265, breeds: '365' },
    { n: 'DNA My Dog Breed ID', sale: 59, list: 79, cond: null, breeds: '~100' }
  ];

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var dogs = Math.max(1, Math.round(val('.ta-dogs')));
    var k = KITS[+root.querySelector('.ta-kit').value];
    var tier = +root.querySelector('.ta-tier').value;
    var price = tier === 0 ? k.sale : (tier === 1 ? k.list : (k.sale + k.list) / 2);
    var total = dogs * price;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(total) + '</div>'
      + '<div class="ta-embed-sub">' + k.n + ' &times; ' + dogs + ' dog' + (dogs === 1 ? '' : 's') + ' at ' + money(price) + '</div>'
      + '<div class="ta-embed-stats">'
      + '<span>Per dog<b>' + money(price) + '</b></span>'
      + '<span>Per condition<b>' + (k.cond ? '$' + (price / k.cond).toFixed(2) : '&mdash;') + '</b></span>'
      + '<span>Breeds<b>' + k.breeds + '</b></span>'
      + '</div>'
      + (k.cond ? '' : '<div class="ta-embed-sub" style="margin-top:8px">Breed-only kit: no health conditions screened</div>');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogDnaCost = { recalc: calc };
})();
