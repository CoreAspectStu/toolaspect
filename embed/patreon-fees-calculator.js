/*!
 * ToolAspect Patreon Fees Calculator Embed
 * Install: <div id="ta-patreon-fees-calculator"></div>
 *          <script src="https://toolaspect.com/embed/patreon-fees-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-patreon-fees-calculator';
  var BASE = 'https://toolaspect.com/patreon-fees-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:20px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-line{font-size:.92rem;margin-top:8px;color:var(--ta-text)}'
    + '.ta-embed-note{font-size:.75rem;color:var(--ta-muted);margin-top:8px;line-height:1.5}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'patreon-fees-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="patreon-fees-calculator"]')) {
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
    + '<div class="ta-embed-title">Patreon Fees Calculator</div>'
    + '<div class="ta-embed-subtitle">What Patreon takes from your memberships</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Your plan</label><select class="ta-plan">'
    + '<option value="0.10" selected>Standard 10% — published after Aug 4, 2025</option>'
    + '<option value="0.08">Legacy Pro 8%</option>'
    + '<option value="0.05">Legacy Lite 5%</option>'
    + '<option value="0.12">Legacy Premium 12%</option>'
    + '<option value="0.05f">Founders 5% — pre-May 2019</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Monthly tier price ($)</label><input type="number" class="ta-tier" value="5" min="0.5" step="0.5"></div>'
    + '<div class="ta-embed-form-group"><label>Paying members</label><input type="number" class="ta-members" value="100" min="1" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big ta-net">—</div>'
    + '<div class="ta-embed-sub ta-sub"></div>'
    + '<div class="ta-embed-line ta-plat"></div>'
    + '<div class="ta-embed-line ta-proc"></div>'
    + '<div class="ta-embed-line ta-yr"></div>'
    + '<div class="ta-embed-note">USD payout, before tax. 2.5% currency conversion and Apple’s 30% iOS-app fee not included — full breakdown on the site.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var planVal = root.querySelector('.ta-plan').value;
    var P = parseFloat(root.querySelector('.ta-tier').value) || 0;
    var N = parseInt(root.querySelector('.ta-members').value, 10) || 0;
    var legacy = planVal !== '0.10';
    var rate = parseFloat(planVal);
    var gross = P * N;
    var plat = gross * rate;
    var micro = legacy && P <= 3 && P > 0;
    var procPer = micro ? P * 0.05 + 0.10 : P * 0.029 + 0.30;
    var proc = N * procPer;
    var total = plat + proc;
    var net = gross - total;
    var eff = gross > 0 ? total / gross * 100 : 0;
    if (P > 0 && N > 0) {
      root.querySelector('.ta-net').textContent = money(net) + '/mo';
      root.querySelector('.ta-sub').textContent = 'take-home · fees ' + eff.toFixed(1) + '% of ' + money(gross) + ' gross';
      root.querySelector('.ta-plat').innerHTML = 'Platform fee (' + (rate * 100).toFixed(0) + '%): <strong>' + money(plat) + '</strong>';
      root.querySelector('.ta-proc').innerHTML = 'Processing (' + (micro ? '5% + $0.10' : '2.9% + $0.30') + '/charge): <strong>' + money(proc) + '</strong>';
      root.querySelector('.ta-yr').innerHTML = 'Take-home per year: <strong>' + money(net * 12) + '</strong>';
    } else {
      root.querySelector('.ta-net').textContent = '—';
      root.querySelector('.ta-sub').textContent = 'enter tier price and members';
      root.querySelector('.ta-plat').textContent = '';
      root.querySelector('.ta-proc').textContent = '';
      root.querySelector('.ta-yr').textContent = '';
    }
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.patreonFeesCalculator = { recalc: calc };
})();
