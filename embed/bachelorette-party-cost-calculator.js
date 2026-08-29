/*!
 * ToolAspect Bachelorette Party Cost Calculator Embed
 * Install: <div id="ta-bachelorette-party-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/bachelorette-party-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-bachelorette-party-cost-calculator';
  var BASE = 'https://toolaspect.com/bachelorette-party-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#ec4899;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#f472b6}'
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
    + '.ta-embed-form-row.three{grid-template-columns:1fr 1fr 1fr}'
    + '.ta-embed-check{display:flex;align-items:center;gap:8px;font-size:.8rem;color:var(--ta-muted);margin-top:4px}'
    + '.ta-embed-check input{width:16px;height:16px;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-mini-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;text-align:center;font-size:.85rem;margin-top:14px}'
    + '.ta-embed-mini-row strong{display:block;font-size:1.15rem;margin-top:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.three{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'bachelorette-party-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="bachelorette-party-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Bachelorette Party Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">The Knot average: $1,300 per person. Run your own numbers.</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Attendees paying</label><input type="number" id="tabp-att" value="8" min="1"></div>'
    + '<div class="ta-embed-form-group"><label>Lodging, total ($)</label><input type="number" id="tabp-lodging" value="1800" min="0"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row three">'
    + '<div class="ta-embed-form-group"><label>Travel /person</label><input type="number" id="tabp-travel" value="80" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Food &amp; drinks /person</label><input type="number" id="tabp-food" value="170" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Activities /person</label><input type="number" id="tabp-act" value="95" min="0"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Decor, favors &amp; gifts /person</label><input type="number" id="tabp-extras" value="40" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>&nbsp;</label><div class="ta-embed-check" style="padding-top:8px"><input type="checkbox" id="tabp-bride" checked> <span>Cover the bride&rsquo;s share</span></div></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tabp-each">—</div>'
    + '<div class="ta-embed-sub" id="tabp-sub">per person</div>'
    + '<div class="ta-embed-mini-row">'
    + '<div><span style="color:var(--ta-muted)">Trip total</span><strong id="tabp-total">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Even split instead</span><strong id="tabp-even">—</strong></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tabp-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }
  function money2(n) { var r = Math.round(n * 100) / 100; return (r < 0 ? '-$' : '$') + r.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

  function calc() {
    var att = parseInt(g('att').value) || 0;
    var lodging = parseFloat(g('lodging').value) || 0;
    var travel = parseFloat(g('travel').value) || 0;
    var food = parseFloat(g('food').value) || 0;
    var act = parseFloat(g('act').value) || 0;
    var extras = parseFloat(g('extras').value) || 0;
    var covered = g('bride').checked;
    var heads = att + 1;
    var total = lodging + heads * (travel + food + act + extras);
    var payers = covered ? att : heads;
    g('each').textContent = att > 0 ? money2(total / payers) : '—';
    g('sub').textContent = covered ? 'per person, bride covered' : 'per person, everyone pays';
    g('total').textContent = money(total);
    g('even').textContent = money2(total / heads);
  }

  target.addEventListener('input', calc);
  target.addEventListener('change', calc);
  calc();
})();
