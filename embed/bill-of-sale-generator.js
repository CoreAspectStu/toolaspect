/*!
 * ToolAspect Bill of Sale Generator Embed
 * Install: <div id="ta-bill-of-sale-generator"></div>
 *          <script src="https://toolaspect.com/embed/bill-of-sale-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-bill-of-sale-generator';
  var BASE = 'https://toolaspect.com/bill-of-sale-generator/';

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
    + '.ta-embed-doc{background:#ffffff;color:#111;border:1px solid var(--ta-border);border-radius:12px;padding:18px;font-family:Georgia,serif;font-size:.85rem;line-height:1.7;margin-bottom:12px}'
    + '.ta-embed-doc h3{text-align:center;letter-spacing:.08em;margin:0 0 10px;font-size:1rem;color:#111}'
    + '.ta-embed-doc p{margin:0 0 10px;color:#111}'
    + '.ta-embed-doc .ta-embed-sig{border-top:1px solid #111;padding-top:4px;font-size:.75rem;color:#333;margin-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:14px}'
    + '.ta-embed-notary{background:rgba(37,99,235,.08);border-left:3px solid var(--ta-accent);padding:8px 12px;font-size:.8rem;margin-top:10px;border-radius:0 8px 8px 0}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-doc .ta-embed-sig{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'bill-of-sale-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="bill-of-sale-generator"]')) {
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
    + '<div class="ta-embed-title">Bill of Sale Generator</div>'
    + '<div class="ta-embed-subtitle">Car, boat, or general property — print-ready fields</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Item</label><select class="ta-type">'
    + '<option value="vehicle" selected>Motor vehicle</option>'
    + '<option value="boat">Boat / vessel</option>'
    + '<option value="general">Other property</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state">'
    + '<option value="OH" selected>Ohio</option><option value="LA">Louisiana</option><option value="MD">Maryland</option>'
    + '<option value="MT">Montana</option><option value="NE">Nebraska</option><option value="WV">West Virginia</option>'
    + '<option value="other">Other (see full tool)</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Seller name</label><input type="text" class="ta-seller" value=""></div>'
    + '<div class="ta-embed-form-group"><label>Buyer name</label><input type="text" class="ta-buyer" value=""></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Item description (year make model, VIN)</label><input type="text" class="ta-desc" value=""></div>'
    + '<div class="ta-embed-form-group"><label>Price ($)</label><input type="number" class="ta-price" value="5000" min="0" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-doc"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a> — template only, not legal advice</div>';
  target.appendChild(root);

  var docEl = root.querySelector('.ta-embed-doc');
  var STATES = { OH: 'Ohio', LA: 'Louisiana', MD: 'Maryland', MT: 'Montana', NE: 'Nebraska', WV: 'West Virginia', other: '____' };
  var NOTARIZE = { LA: true, MT: true, NE: true, WV: true, MD: 'vehicles' };
  var ONES = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  var TENS = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

  function under1000(n) {
    var s = '';
    if (n >= 100) { s += ONES[Math.floor(n / 100)] + ' hundred '; n %= 100; }
    if (n >= 20) { s += TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : ''); }
    else if (n > 0) { s += ONES[n]; }
    return s.trim();
  }
  function priceWords(n) {
    n = Math.floor(n);
    if (n === 0) return 'Zero';
    var out = '';
    if (n >= 1000000) { out += under1000(Math.floor(n / 1000000)) + ' million '; n %= 1000000; }
    if (n >= 1000) { out += under1000(Math.floor(n / 1000)) + ' thousand '; n %= 1000; }
    if (n > 0) out += under1000(n);
    out = out.replace(/\s+/g, ' ').trim();
    return out.charAt(0).toUpperCase() + out.slice(1) + ' and 00/100 dollars';
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function esc(s) { return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function needsNotary(st, type) {
    var r = NOTARIZE[st];
    return r === true || (r === 'vehicles' && (type === 'vehicle' || type === 'boat'));
  }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }

  function calc() {
    var st = val('.ta-state'), type = val('.ta-type');
    var stateName = STATES[st] || '____';
    var seller = val('.ta-seller') || '________________';
    var buyer = val('.ta-buyer') || '________________';
    var desc = val('.ta-desc') || '________________';
    var price = parseFloat(val('.ta-price')) || 0;
    var notary = needsNotary(st, type)
      ? '<div class="ta-embed-notary"><strong>' + esc(stateName) + ' requires a notarized bill of sale</strong> for this transfer — sign only before a notary.</div>'
      : '';
    docEl.innerHTML =
      '<h3>BILL OF SALE — ' + esc(stateName) + '</h3>'
      + '<p>Date: ____________</p>'
      + '<p>I, <strong>' + esc(seller) + '</strong> (Seller), for ' + usd(price) + ' (' + esc(priceWords(price)) + '), sell and transfer to <strong>' + esc(buyer) + '</strong> (Buyer) the following: <strong>' + esc(desc) + '</strong>.</p>'
      + '<p>The item is sold as-is, with no warranties. Seller warrants clear title and authority to sell.</p>'
      + '<p>Buyer signature: ______________ &nbsp; Seller signature: ______________</p>'
      + notary;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.billOfSaleGenerator = { recalc: calc };
})();
