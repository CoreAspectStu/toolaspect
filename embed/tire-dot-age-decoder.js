/*!
 * ToolAspect Tire DOT Age Decoder Embed
 * Install: <div id="ta-tire-dot-age-decoder"></div>
 *          <script src="https://toolaspect.com/embed/tire-dot-age-decoder.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-tire-dot-age-decoder';
  var BASE = 'https://toolaspect.com/tire-dot-age-decoder/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-warn:#d97706;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-warn:#fbbf24;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:1.15rem;font-weight:600;letter-spacing:.15em;font-family:inherit;outline:none;text-align:center}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-verdict{display:inline-block;margin-top:10px;padding:6px 14px;border-radius:999px;font-size:.82rem;font-weight:600}'
    + '.ta-embed-verdict.ok{background:rgba(22,163,74,.12);color:var(--ta-ok)}'
    + '.ta-embed-verdict.watch{background:rgba(217,119,6,.12);color:var(--ta-warn)}'
    + '.ta-embed-verdict.due{background:rgba(217,119,6,.12);color:var(--ta-warn)}'
    + '.ta-embed-verdict.replace{background:rgba(220,38,38,.12);color:var(--ta-bad)}'
    + '.ta-embed-note{text-align:center;color:var(--ta-muted);font-size:.78rem;margin-bottom:10px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'tire-dot-age-decoder');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="tire-dot-age-decoder"]')) {
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
    + '<div class="ta-embed-title">Tire DOT Age Decoder</div>'
    + '<div class="ta-embed-subtitle">Week + year of manufacture &rarr; tire age and verdict</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>DOT date code (last 3-4 digits, e.g. 2419)</label><input type="text" class="ta-code" value="2419" maxlength="4" inputmode="numeric" autocomplete="off"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-note">Replace by 10 years from manufacture regardless of tread; many retailers say 6.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var codeEl = root.querySelector('.ta-code');

  function fmtDate(d) { return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); }
  function fmtMonth(d) { return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }); }

  function calc() {
    var digits = String(codeEl.value).replace(/\D/g, '');
    if (digits.length > 4) digits = digits.slice(-4);
    var now = new Date();
    var week, year, err = '';
    if (digits.length === 4) {
      week = parseInt(digits.slice(0, 2), 10);
      year = 2000 + parseInt(digits.slice(2), 10);
      if (!(week >= 1 && week <= 53)) err = 'Week must be 01-53 — recheck the last 4 digits on the sidewall.';
      else if (year > now.getFullYear()) err = 'That year is in the future — 4-digit codes began in 2000.';
    } else if (digits.length === 3) {
      week = parseInt(digits.slice(0, 2), 10);
      year = 1990 + parseInt(digits.slice(2), 10);
      if (!(week >= 1 && week <= 53)) err = 'Week must be 01-53.';
    } else {
      err = 'Enter the last 3 or 4 digits of the DOT code.';
    }
    if (err) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">' + err + '</div>';
      return;
    }
    var dom = new Date(year, 0, 1);
    dom.setDate(dom.getDate() + (week - 1) * 7);
    var y = now.getFullYear() - dom.getFullYear();
    var m = now.getMonth() - dom.getMonth();
    var dd = now.getDate() - dom.getDate();
    if (dd < 0) m--;
    if (m < 0) { y--; m += 12; }
    var ageYears = y + m / 12;
    var ten = new Date(dom); ten.setFullYear(ten.getFullYear() + 10);
    var v, cls;
    if (ageYears >= 10) { v = 'Replace now — past the 10-year limit'; cls = 'replace'; }
    else if (ageYears >= 6) { v = 'Past 6 years — replace before ' + fmtMonth(ten); cls = 'due'; }
    else if (ageYears >= 5) { v = 'Inspection age — check annually from here'; cls = 'watch'; }
    else { v = 'Normal service'; cls = 'ok'; }
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + y + ' yr ' + (m === 1 ? '1 mo' : m + ' mo') + '</div>'
      + '<div class="ta-embed-sub">Week ' + week + ' of ' + year + ' · built ≈ ' + fmtDate(dom) + '</div>'
      + '<div class="ta-embed-sub">Replace-by (10 yrs): <strong>' + fmtMonth(ten) + '</strong></div>'
      + '<div class="ta-embed-verdict ' + cls + '">' + v + '</div>';
  }

  codeEl.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.tireDotAgeDecoder = { recalc: calc };
})();
