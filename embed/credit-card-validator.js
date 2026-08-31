/*!
 * ToolAspect Credit Card Validator Embed
 * Install: <div id="ta-credit-card-validator"></div>
 *          <script src="https://toolaspect.com/embed/credit-card-validator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: braintree/card-validator 10.0.4 (MIT; bundles credit-card-type),
 * vendored on toolaspect.com — loaded on demand, runs entirely in the
 * visitor's browser. Nothing typed is ever transmitted.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-credit-card-validator';
  var BASE = 'https://toolaspect.com/credit-card-validator/';
  var LIB_URL = 'https://toolaspect.com/credit-card-validator/vendor/card-validator.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-field{display:flex;flex-direction:column;gap:4px;margin-bottom:12px}'
    + '.ta-embed-field label{font-size:.75rem;color:var(--ta-muted)}'
    + '.ta-embed-field input{padding:10px 12px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:1rem;font-family:ui-monospace,Menlo,Consolas,monospace;width:100%}'
    + '.ta-embed-field input:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-embed-verdict{border-radius:8px;padding:10px 12px;font-size:.85rem;border:1px solid var(--ta-border);color:var(--ta-muted)}'
    + '.ta-embed-verdict.ok{border-color:#16a34a;color:#16a34a;background:rgba(22,163,74,.06)}'
    + '.ta-embed-verdict.bad{border-color:#dc2626;color:#dc2626;background:rgba(220,38,38,.06)}'
    + '.ta-embed-verdict.warn{border-color:#d97706;color:#d97706;background:rgba(217,119,6,.06)}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-verdict.ok{border-color:#4ade80;color:#4ade80}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-verdict.bad{border-color:#f87171;color:#f87171}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-verdict.warn{border-color:#fbbf24;color:#fbbf24}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}'
    + '.ta-embed-cell{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 10px}'
    + '.ta-embed-cell .l{font-size:.68rem;color:var(--ta-muted)}'
    + '.ta-embed-cell .v{font-size:.85rem;font-weight:700}'
    + '.ta-embed-cell .v.mono{font-family:ui-monospace,Menlo,Consolas,monospace;font-weight:600}'
    + '.ta-embed-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}'
    + '.ta-embed-chip{padding:4px 10px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:999px;color:var(--ta-text);font-size:.72rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-chip:hover{border-color:var(--ta-accent)}'
    + '.ta-embed-note{font-size:.68rem;color:var(--ta-muted);margin-top:10px;line-height:1.5}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'credit-card-validator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="credit-card-validator"]')) {
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
    + '<div class="ta-embed-title">Credit Card Validator</div>'
    + '<div class="ta-embed-subtitle">Luhn check, brand from the BIN — runs locally</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-field"><label>Card number</label><input class="ta-embed-num" inputmode="numeric" autocomplete="off" spellcheck="false" placeholder="4242 4242 4242 4242" maxlength="26"></div>'
    + '<div class="ta-embed-verdict">Type a number — nothing you enter leaves this page.</div>'
    + '<div class="ta-embed-grid">'
    + '<div class="ta-embed-cell"><div class="l">Brand</div><div class="v ta-embed-brand">—</div></div>'
    + '<div class="ta-embed-cell"><div class="l">BIN / IIN</div><div class="v mono ta-embed-bin">—</div></div>'
    + '<div class="ta-embed-cell"><div class="l">Length</div><div class="v mono ta-embed-len">—</div></div>'
    + '<div class="ta-embed-cell"><div class="l">Luhn</div><div class="v ta-embed-luhn">—</div></div>'
    + '</div>'
    + '<div class="ta-embed-chips">'
    + '<button type="button" class="ta-embed-chip" data-n="4242424242424242">Visa test</button>'
    + '<button type="button" class="ta-embed-chip" data-n="5555555555554444">MC test</button>'
    + '<button type="button" class="ta-embed-chip" data-n="378282246310005">Amex test</button>'
    + '<button type="button" class="ta-embed-chip" data-n="4242424242424241">Luhn fail</button>'
    + '</div>'
    + '<div class="ta-embed-note">Checks number structure only — it cannot verify the account. Use published test numbers when testing forms.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var numEl = root.querySelector('.ta-embed-num');
  var verdictEl = root.querySelector('.ta-embed-verdict');

  var libPromise = null;
  function loadLib() {
    if (window.CardValidator) return Promise.resolve(window.CardValidator);
    if (!libPromise) {
      libPromise = new Promise(function (res, rej) {
        var s = document.createElement('script');
        s.src = LIB_URL;
        s.onload = function () { res(window.CardValidator); };
        s.onerror = function () { libPromise = null; rej(new Error('validator engine failed to load')); };
        (document.head || document.documentElement).appendChild(s);
      });
    }
    return libPromise;
  }

  function digits(s) { return String(s || '').replace(/[^0-9]/g, ''); }
  function luhnSum(d) {
    var sum = 0;
    for (var i = 0; i < d.length; i++) {
      var pos = d.length - i, v = +d[i];
      if (pos % 2 === 0) { v *= 2; if (v > 9) v -= 9; }
      sum += v;
    }
    return sum;
  }

  async function check() {
    var d = digits(numEl.value);
    root.querySelector('.ta-embed-brand').textContent = '—';
    root.querySelector('.ta-embed-bin').textContent = d.slice(0, 8) || '—';
    root.querySelector('.ta-embed-len').textContent = d.length ? d.length + ' digits' : '—';
    root.querySelector('.ta-embed-luhn').textContent = '—';
    verdictEl.className = 'ta-embed-verdict';
    verdictEl.textContent = 'Type a number — nothing you enter leaves this page.';
    if (!d.length) return;
    try {
      var CardValidator = await loadLib();
      var r = CardValidator.number(d);
      var c = r.card;
      if (!c) {
        verdictEl.className = 'ta-embed-verdict warn';
        verdictEl.textContent = d.length < 2 ? 'Keep typing…' : 'No recognized network for this prefix yet — number may be incomplete.';
        return;
      }
      var luhnOk = luhnSum(d) % 10 === 0;
      var lenOk = (c.lengths || []).indexOf(d.length) > -1;
      root.querySelector('.ta-embed-brand').textContent = c.niceType;
      root.querySelector('.ta-embed-bin').textContent = d.slice(0, 8);
      root.querySelector('.ta-embed-len').textContent = d.length + ' / ' + (c.lengths || []).join(', ');
      root.querySelector('.ta-embed-luhn').textContent = (luhnOk ? 'passes' : 'fails') + ' (sum ' + luhnSum(d) + ')';
      if (luhnOk && lenOk) {
        verdictEl.className = 'ta-embed-verdict ok';
        verdictEl.textContent = '✅ Well-formed ' + c.niceType + ' number — Luhn passes, length valid.';
      } else if (!luhnOk && lenOk) {
        verdictEl.className = 'ta-embed-verdict bad';
        verdictEl.textContent = '❌ Luhn checksum fails (sum ' + luhnSum(d) + ' is not a multiple of 10).';
      } else if (luhnOk && !lenOk) {
        verdictEl.className = 'ta-embed-verdict warn';
        verdictEl.textContent = '⚠️ Luhn passes, but ' + d.length + ' digits is not a valid ' + c.niceType + ' length (' + (c.lengths || []).join('/') + ').';
      } else {
        verdictEl.className = 'ta-embed-verdict bad';
        verdictEl.textContent = '❌ Fails Luhn and length for ' + c.niceType + '.';
      }
    } catch (e) {
      verdictEl.className = 'ta-embed-verdict bad';
      verdictEl.textContent = 'Engine failed to load: ' + String(e && e.message || e);
    }
  }

  numEl.addEventListener('input', check);
  root.addEventListener('click', function (e) {
    var n = e.target.getAttribute && e.target.getAttribute('data-n');
    if (!n) return;
    numEl.value = n;
    check();
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.creditCardValidator = { recalc: check };
})();
