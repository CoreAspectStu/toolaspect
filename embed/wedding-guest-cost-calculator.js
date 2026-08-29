/*!
 * ToolAspect Wedding Guest Cost Calculator Embed
 * Install: <div id="ta-wedding-guest-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-guest-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-guest-cost-calculator';
  var BASE = 'https://toolaspect.com/wedding-guest-cost-calculator/';

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
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:8px;font-size:.85rem}'
    + '.ta-embed-cell strong{display:block;font-size:1.05rem}'
    + '.ta-embed-cell span{color:var(--ta-muted);font-size:.75rem}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-guest-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-guest-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Wedding Guest Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">What attending actually costs you, not the couple</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Travel scenario</label><select class="ta-scenario">'
    + '<option value="local">Local (same town)</option>'
    + '<option value="drive" selected>Out of town, driving</option>'
    + '<option value="fly">Out of town, flying</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>In the wedding party?</label><select class="ta-role">'
    + '<option value="guest" selected>No, just a guest</option>'
    + '<option value="party">Yes, attendant</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Gift ($)</label><input class="ta-gift" type="number" value="100" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Attire ($)</label><input class="ta-attire" type="number" value="120" min="0" step="10"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Travel ($)</label><input class="ta-travel" type="number" value="80" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Hotel nights x rate ($ total)</label><input class="ta-hotel" type="number" value="145" min="0" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var PRESETS = {
    local: { travel: 30, hotel: 0, attireGuest: 60 },
    drive: { travel: 80, hotel: 145, attireGuest: 120 },
    fly: { travel: 450, hotel: 570, attireGuest: 180 }
  };
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function val(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function pick(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }

  function applyScenario() {
    var p = PRESETS[pick('.ta-scenario')];
    var party = pick('.ta-role') === 'party';
    root.querySelector('.ta-travel').value = p.travel;
    root.querySelector('.ta-hotel').value = p.hotel;
    root.querySelector('.ta-attire').value = party ? 275 : p.attireGuest;
    calc();
  }

  function calc() {
    var total = val('.ta-gift') + val('.ta-attire') + val('.ta-travel') + val('.ta-hotel');
    var vs = total - 610;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(total) + '</div>'
      + '<div class="ta-embed-sub">your cost to attend this wedding</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>Gift + attire</span><strong>' + usd(val('.ta-gift') + val('.ta-attire')) + '</strong></div>'
      + '<div class="ta-embed-cell"><span>Travel + hotel</span><strong>' + usd(val('.ta-travel') + val('.ta-hotel')) + '</strong></div>'
      + '</div>'
      + '<div class="ta-embed-sub" style="margin-top:10px">' + (vs >= 0 ? usd(vs) + ' above' : usd(-vs) + ' below') + ' the $610 average guest spend (The Knot)</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', function (e) {
    if (e.target.classList.contains('ta-scenario') || e.target.classList.contains('ta-role')) applyScenario();
    else calc();
  });
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingGuestCostCalculator = { recalc: calc };
})();
