/*!
 * ToolAspect Money Factor Converter Embed
 * Install: <div id="ta-money-factor-converter"></div>
 *          <script src="https://toolaspect.com/embed/money-factor-converter.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-money-factor-converter';
  var BASE = 'https://toolaspect.com/money-factor-converter/';

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
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-mode-toggle{display:flex;gap:6px;margin-bottom:14px;justify-content:center}'
    + '.ta-embed-mode-btn{background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;'
    + 'padding:7px 16px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode-btn.ta-active{background:rgba(37,99,235,.1);border-color:var(--ta-accent);color:var(--ta-text);font-weight:600}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-mode-btn.ta-active{background:rgba(96,165,250,.12)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'money-factor-converter');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="money-factor-converter"]')) {
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
    + '<div class="ta-embed-title">Money Factor Converter</div>'
    + '<div class="ta-embed-subtitle">Money factor to APR and back (× / ÷ 2400)</div>'
    + '<div class="ta-embed-mode-toggle">'
    + '<button type="button" class="ta-embed-mode-btn ta-active" data-mode="mf">Money Factor → APR</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-mode="apr">APR → Money Factor</button>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label class="ta-in-label">Money Factor</label>'
    + '<input type="number" class="ta-mf" value="0.00125" min="0" step="0.00005"></div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Adjusted Cap Cost ($)</label><input type="number" class="ta-cap" value="32000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Residual Value ($)</label><input type="number" class="ta-res" value="19000" min="0" step="500"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var inLabel = root.querySelector('.ta-in-label');
  var mode = 'mf';

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var v = val('.ta-mf');
    var cap = val('.ta-cap');
    var res = val('.ta-res');
    if (v <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter a number above</div>';
      return;
    }
    var apr, mf, html;
    if (mode === 'mf') {
      mf = v;
      apr = v * 2400;
      html = '<div class="ta-embed-big">' + apr.toFixed(2) + '% APR</div>'
        + '<div class="ta-embed-sub">Money factor ' + mf.toFixed(5) + ' × 2400</div>';
    } else {
      apr = v;
      mf = v / 2400;
      html = '<div class="ta-embed-big">' + mf.toFixed(5) + '</div>'
        + '<div class="ta-embed-sub">' + apr.toFixed(2) + '% APR ÷ 2400</div>';
    }
    if (cap > 0 && res > 0) {
      var rent = (cap + res) * mf;
      html += '<div class="ta-embed-sub">Monthly rent charge on $' + (cap + res).toLocaleString('en-US')
        + ' combined: <strong>' + usd(rent) + '</strong></div>';
    }
    resultEl.innerHTML = html;
  }

  root.addEventListener('input', calc);
  root.querySelector('.ta-embed-mode-toggle').addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-mode-btn');
    if (!btn) return;
    mode = btn.getAttribute('data-mode');
    root.querySelectorAll('.ta-embed-mode-btn').forEach(function (b) { b.classList.remove('ta-active'); });
    btn.classList.add('ta-active');
    var input = root.querySelector('.ta-mf');
    if (mode === 'mf') {
      inLabel.textContent = 'Money Factor';
      input.value = '0.00125';
      input.step = '0.00005';
    } else {
      inLabel.textContent = 'Interest Rate (APR %)';
      input.value = '6.96';
      input.step = '0.01';
    }
    calc();
  });

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.moneyFactorConverter = { recalc: calc };
})();
