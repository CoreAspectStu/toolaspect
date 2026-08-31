/*!
 * ToolAspect IBAN Validator Embed
 * Install: <div id="ta-iban-validator"></div>
 *          <script src="https://toolaspect.com/embed/iban-validator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: ibantools 4.5.4 (MIT OR MPL-2.0), vendored at toolaspect.com;
 * validation runs entirely in the visitor's browser — no upload, ever.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-iban-validator';
  var BASE = 'https://toolaspect.com/iban-validator/';
  var LIB_URL = 'https://toolaspect.com/iban-validator/vendor/ibantools.esm.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-ta{width:100%;min-height:96px;padding:9px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);'
    + 'font-size:.92rem;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.03em;resize:vertical}'
    + '.ta-embed-ta:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-embed-btn{display:block;width:100%;margin-top:12px;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;text-align:center;text-decoration:none}'
    + '.ta-embed-counts{display:flex;gap:8px;margin-top:10px}'
    + '.ta-embed-pill{flex:1;text-align:center;border:1px solid var(--ta-border);border-radius:8px;padding:6px;font-size:.8rem;color:var(--ta-muted)}'
    + '.ta-embed-pill b{display:block;font-size:1.25rem;color:var(--ta-text)}'
    + '.ta-embed-pill.ok b{color:var(--ta-ok)}'
    + '.ta-embed-pill.bad b{color:var(--ta-bad)}'
    + '.ta-embed-row{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:7px 9px;margin-top:7px;border:1px solid var(--ta-border);'
    + 'border-radius:8px;font-family:ui-monospace,Menlo,monospace;font-size:.82rem;word-break:break-all;background:var(--ta-bg)}'
    + '.ta-embed-row.ok{border-color:var(--ta-ok)}'
    + '.ta-embed-row.bad{border-color:var(--ta-bad)}'
    + '.ta-embed-tag{font-size:.66rem;font-weight:700;letter-spacing:.05em;padding:2px 8px;border-radius:999px;text-transform:none;flex-shrink:0}'
    + '.ta-embed-row.ok .ta-embed-tag{background:rgba(22,163,74,.12);color:var(--ta-ok)}'
    + '.ta-embed-row.bad .ta-embed-tag{background:rgba(220,38,38,.12);color:var(--ta-bad)}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-row.ok .ta-embed-tag{background:rgba(74,222,128,.14)}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-row.bad .ta-embed-tag{background:rgba(248,113,113,.14)}'
    + '.ta-embed-status{font-size:.8rem;color:var(--ta-muted);margin-top:10px;word-break:break-word}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'iban-validator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="iban-validator"]')) {
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
    + '<div class="ta-embed-title">IBAN Validator</div>'
    + '<div class="ta-embed-subtitle">Checksum, country, length &amp; structure — checked in the browser</div>'
    + '<div class="ta-embed-card">'
    + '<label>IBANs, one per line</label>'
    + '<textarea class="ta-in" spellcheck="false">GB82 WEST 1234 5698 7654 32</textarea>'
    + '<button class="ta-embed-btn ta-go" type="button">Validate</button>'
    + '<div class="ta-embed-counts" style="display:none"><div class="ta-embed-pill ok"><b class="n-ok">0</b>valid</div>'
    + '<div class="ta-embed-pill bad"><b class="n-bad">0</b>invalid</div></div>'
    + '<div class="ta-out"></div>'
    + '<div class="ta-embed-status">Runs locally in this page — nothing is uploaded. First click fetches the ~47 KB engine.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var q = function (c) { return root.querySelector(c); };
  var libPromise = null;

  function normalize(raw) { return String(raw).toUpperCase().replace(/[^A-Z0-9]/g, ''); }
  function group4(s) { return s.replace(/(.{4})/g, '$1 ').trim(); }

  function getLib() {
    if (libPromise) return libPromise;
    libPromise = import(LIB_URL).then(function (m) {
      return { validate: m.validateIBAN };
    });
    return libPromise;
  }

  q('.ta-go').addEventListener('click', function () {
    var statusEl = q('.ta-embed-status'), out = q('.ta-out');
    statusEl.textContent = 'Loading the validation engine …';
    getLib().then(function (lib) {
      var lines = q('.ta-in').value.split(/\r?\n/).map(function (s) { return s.trim(); }).filter(Boolean);
      var ok = 0, bad = 0, html = '';
      for (var i = 0; i < lines.length; i++) {
        var norm = normalize(lines[i]);
        var v = lib.validate(norm);
        v.valid ? ok++ : bad++;
        html += '<div class="ta-embed-row ' + (v.valid ? 'ok' : 'bad') + '"><span>' + group4(norm)
          + '</span><span class="ta-embed-tag">' + (v.valid ? 'valid' : 'invalid [' + v.errorCodes.join(',') + ']') + '</span></div>';
      }
      q('.n-ok').textContent = ok;
      q('.n-bad').textContent = bad;
      q('.ta-embed-counts').style.display = 'flex';
      out.innerHTML = html;
      statusEl.textContent = 'Checked ' + lines.length + ' IBAN' + (lines.length === 1 ? '' : 's') + ' locally.';
    }).catch(function (e) {
      statusEl.textContent = 'Engine failed to load: ' + ((e && e.message) || e);
    });
  });
})();
