/*!
 * ToolAspect Military Time Converter Embed
 * Install: <div id="ta-military-time-converter"></div>
 *          <script src="https://toolaspect.com/embed/military-time-converter.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-military-time-converter';
  var BASE = 'https://toolaspect.com/military-time-converter/';

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
    + '.ta-embed-mode-toggle{display:flex;gap:6px;margin-bottom:14px;justify-content:center}'
    + '.ta-embed-mode-btn{background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;'
    + 'padding:7px 16px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode-btn.ta-active{background:rgba(37,99,235,.1);border-color:var(--ta-accent);color:var(--ta-text);font-weight:600}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-mode-btn.ta-active{background:rgba(96,165,250,.12)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent);letter-spacing:.05em}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'military-time-converter');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="military-time-converter"]')) {
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
    + '<div class="ta-embed-title">Military Time Converter</div>'
    + '<div class="ta-embed-subtitle">12-hour AM/PM to 24-hour and back</div>'
    + '<div class="ta-embed-mode-toggle">'
    + '<button type="button" class="ta-embed-mode-btn ta-active" data-mode="to24">12h → 24h</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-mode="to12">24h → 12h</button>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-row12 ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Hour (1–12)</label><input type="number" class="ta-h" value="7" min="1" max="12" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Minutes</label><input type="number" class="ta-m" value="42" min="0" max="59" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>AM / PM</label><select class="ta-ap"><option value="am">AM</option><option value="pm" selected>PM</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-row24 ta-embed-form-group" style="display:none"><label>24-hour time (0000–2359)</label><input type="number" class="ta-t24" value="1545" min="0" max="2359" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var mode = 'to24';

  var ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var TEENS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var TWENTIES = ['twenty', 'twenty-one', 'twenty-two', 'twenty-three'];
  var TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty'];
  function hourWord(H) {
    if (H <= 9) return ONES[H];
    if (H < 20) return TEENS[H - 10];
    return TWENTIES[H - 20];
  }
  function minWord(m) {
    if (m < 10) return 'oh ' + ONES[m];
    if (m < 20) return TEENS[m - 10];
    return TENS[Math.floor(m / 10)] + (m % 10 ? '-' + ONES[m % 10] : '');
  }
  function speak(v) {
    var H = Math.floor(v / 100), m = v % 100;
    if (m === 0) return hourWord(H) + ' hundred hours';
    var hw = H < 10 ? 'zero ' + hourWord(H) : hourWord(H);
    return hw + ' ' + minWord(m);
  }
  function to12(v) {
    var H = Math.floor(v / 100), m = v % 100;
    var ap = H < 12 ? 'AM' : 'PM';
    var h = H % 12; if (h === 0) h = 12;
    return h + ':' + ('0' + m).slice(-2) + ' ' + ap;
  }
  function pad(v) { return ('000' + v).slice(-4); }
  function val(sel) { var el = root.querySelector(sel); return el ? (parseInt(el.value, 10) || 0) : 0; }

  function calc() {
    if (mode === 'to24') {
      var h = val('.ta-h'), m = val('.ta-m'), ap = root.querySelector('.ta-ap').value;
      if (!(h >= 1 && h <= 12) || !(m >= 0 && m <= 59)) {
        resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter hour 1–12 and minutes 0–59</div>';
        return;
      }
      var H = h % 12; if (ap === 'pm') H += 12;
      var v = H * 100 + m;
      resultEl.innerHTML =
        '<div class="ta-embed-big">' + pad(v) + '</div>'
        + '<div class="ta-embed-sub">' + h + ':' + ('0' + m).slice(-2) + ' ' + ap.toUpperCase() + ' is <strong>' + pad(v) + '</strong> ("' + speak(v) + '")</div>';
    } else {
      var t = val('.ta-t24');
      var HH = Math.floor(t / 100), mm = t % 100;
      if (!(t >= 0 && t <= 2359) || mm > 59) {
        resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter 0000–2359</div>';
        return;
      }
      resultEl.innerHTML =
        '<div class="ta-embed-big">' + to12(t) + '</div>'
        + '<div class="ta-embed-sub">' + pad(t) + ' hours is <strong>' + to12(t) + '</strong> ("' + speak(t) + '")</div>';
    }
  }

  root.querySelector('.ta-embed-mode-toggle').addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-mode-btn');
    if (!btn) return;
    mode = btn.getAttribute('data-mode');
    root.querySelectorAll('.ta-embed-mode-btn').forEach(function (b) { b.classList.remove('ta-active'); });
    btn.classList.add('ta-active');
    root.querySelector('.ta-embed-row12').style.display = mode === 'to24' ? '' : 'none';
    root.querySelector('.ta-embed-row24').style.display = mode === 'to12' ? '' : 'none';
    calc();
  });

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.militaryTimeConverter = { recalc: calc };
})();
