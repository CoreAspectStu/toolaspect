/*!
 * ToolAspect Phone Number Validator Embed
 * Install: <div id="ta-phone-number-validator"></div>
 *          <script src="https://toolaspect.com/embed/phone-number-validator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: libphonenumber-js 1.13.12 (MIT) with Google libphonenumber offline
 * metadata (Apache-2.0), lazy-loaded from toolaspect.com and run in the
 * visitor's browser — numbers never hit a server.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-phone-number-validator';
  var BASE = 'https://toolaspect.com/phone-number-validator/';
  var LIB = 'https://toolaspect.com/phone-number-validator/vendor/libphonenumber.iife.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-card input,.ta-embed-card select{width:100%;padding:10px 12px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;font-size:1rem;outline:none;font-family:inherit}'
    + '.ta-embed-card input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-row{display:flex;gap:8px;margin-top:10px}'
    + '.ta-embed-row select{flex:1;padding:8px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:.85rem;font-family:inherit}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:10px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-verdict{display:inline-block;margin-top:12px;padding:3px 12px;border-radius:999px;font-size:.82rem;font-weight:700}'
    + '.ta-embed-verdict.ok{background:rgba(34,197,94,.15);color:#16a34a;border:1px solid rgba(34,197,94,.4)}'
    + '.ta-embed-verdict.bad{background:rgba(239,68,68,.12);color:#dc2626;border:1px solid rgba(239,68,68,.4)}'
    + '.ta-embed-verdict.warn{background:rgba(250,204,21,.15);color:#a16207;border:1px solid rgba(250,204,21,.5)}'
    + '.ta-embed-e164{font-size:1.5rem;font-weight:800;color:var(--ta-accent);margin-top:6px;font-variant-numeric:tabular-nums;word-break:break-all}'
    + '.ta-embed-fmts{margin-top:12px;font-size:.82rem;color:var(--ta-muted)}'
    + '.ta-embed-fmts div{padding:4px 0;border-bottom:1px solid var(--ta-border)}'
    + '.ta-embed-fmts div:last-child{border-bottom:none}'
    + '.ta-embed-fmts b{color:var(--ta-text);font-weight:600}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'phone-number-validator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="phone-number-validator"]')) {
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
    + '<div class="ta-embed-title">Phone Number Validator</div>'
    + '<div class="ta-embed-subtitle">E.164 formats and line type — offline, no upload</div>'
    + '<div class="ta-embed-card">'
    + '<label>Phone number</label><input type="tel" class="ta-num" placeholder="+1 415 555 2671" autocomplete="off" spellcheck="false">'
    + '<div class="ta-embed-row">'
    + '<select class="ta-country"><option value="">Auto (+ required)</option><option value="US" selected>US</option><option value="CA">CA</option><option value="GB">GB</option><option value="DE">DE</option><option value="FR">FR</option><option value="AU">AU</option><option value="IN">IN</option><option value="BR">BR</option><option value="NG">NG</option></select>'
    + '</div>'
    + '<button class="ta-embed-btn" type="button">Validate</button>'
    + '<div class="ta-embed-result" style="display:none">'
    + '<span class="ta-embed-verdict ok">—</span>'
    + '<div class="ta-embed-e164">—</div>'
    + '<div class="ta-embed-fmts">'
    + '<div>International: <b class="ta-f-intl">—</b></div>'
    + '<div>National: <b class="ta-f-natl">—</b></div>'
    + '<div>tel: URI: <b class="ta-f-uri">—</b></div>'
    + '<div>Country / type: <b class="ta-f-meta">—</b></div>'
    + '</div></div>'
    + '<div class="ta-embed-status">Paste a number. First validate fetches the offline metadata (~257 KB, cached).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var libPromise = null;
  function loadLib() {
    if (window.__taLibphonenumber) return Promise.resolve();
    if (libPromise) return libPromise;
    libPromise = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = LIB; s.onload = resolve; s.onerror = function () { reject(new Error('could not load ' + LIB)); };
      (document.head || document.documentElement).appendChild(s);
    });
    return libPromise;
  }

  var btn = root.querySelector('.ta-embed-btn');
  var status = root.querySelector('.ta-embed-status');
  var result = root.querySelector('.ta-embed-result');
  var verdict = root.querySelector('.ta-embed-verdict');

  btn.addEventListener('click', function () {
    var raw = root.querySelector('.ta-num').value.trim();
    if (!raw) { status.textContent = 'Type a phone number first.'; return; }
    var cc = root.querySelector('.ta-country').value || undefined;
    status.textContent = 'Loading offline metadata…';
    loadLib().then(function () {
      var L = window.__taLibphonenumber;
      var p;
      try { p = L.parsePhoneNumberFromString(raw, cc); } catch (e) { p = null; }
      result.style.display = 'block';
      if (!p) {
        verdict.className = 'ta-embed-verdict bad';
        verdict.textContent = 'Not a phone number';
        result.querySelector('.ta-embed-e164').textContent = '—';
        ['ta-f-intl','ta-f-natl','ta-f-uri','ta-f-meta'].forEach(function(c){ result.querySelector('.' + c).textContent = '—'; });
        status.textContent = 'Could not parse — add a + prefix or pick a default country.';
        return;
      }
      var possible = p.isPossible(), valid = p.isValid();
      verdict.className = 'ta-embed-verdict ' + (valid ? 'ok' : possible ? 'warn' : 'bad');
      verdict.textContent = valid ? 'Valid ✓' : possible ? 'Possible, not valid' : 'Invalid';
      result.querySelector('.ta-embed-e164').textContent = p.number;
      result.querySelector('.ta-f-intl').textContent = p.formatInternational();
      result.querySelector('.ta-f-natl').textContent = p.formatNational();
      result.querySelector('.ta-f-uri').textContent = p.format('RFC3966');
      var t = p.getType();
      result.querySelector('.ta-f-meta').textContent = (p.country || '?') + (t ? ' · ' + t.toLowerCase().replace(/_/g, ' ') : '');
      status.textContent = valid ? 'Length and prefix check out.' : possible ? 'Length fits, prefix unallocated.' : 'Length doesn’t fit any range.';
    }).catch(function (e) {
      status.textContent = 'Failed: ' + (e && e.message ? e.message : e) + '. Try the full tool at ' + BASE;
    });
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.phoneNumberValidator = { version: '1.0' };
})();
