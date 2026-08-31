/*!
 * ToolAspect Password Strength Checker Embed
 * Install: <div id="ta-password-strength-checker"></div>
 *          <script src="https://toolaspect.com/embed/password-strength-checker.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-password-strength-checker';
  var BASE = 'https://toolaspect.com/password-strength-checker/';
  var ZX_CORE = 'https://cdn.jsdelivr.net/npm/@zxcvbn-ts/core@4.2.0/+esm';
  var ZX_COMMON = 'https://cdn.jsdelivr.net/npm/@zxcvbn-ts/language-common@4.1.3/+esm';
  var ZX_EN = 'https://cdn.jsdelivr.net/npm/@zxcvbn-ts/language-en@4.1.1/+esm';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;--ta-warn:#d97706;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171;--ta-warn:#fbbf24}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-pw-row{display:flex;gap:8px;align-items:center}'
    + '.ta-pw-row input{flex:1;padding:12px 14px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:1.05rem;font-family:ui-monospace,Menlo,monospace}'
    + '.ta-pw-row input:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-toggle{padding:10px 14px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);cursor:pointer;font-family:inherit;font-size:.85rem}'
    + '.ta-meter{height:12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:999px;overflow:hidden;margin-top:12px}'
    + '.ta-meter .fill{height:100%;width:0;background:var(--ta-bad);transition:width .25s,background .25s}'
    + '.ta-stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:12px;text-align:center}'
    + '.ta-stat{background:var(--ta-bg);border-radius:8px;padding:10px 6px}'
    + '.ta-stat .l{font-size:.68rem;text-transform:uppercase;letter-spacing:.04em;color:var(--ta-muted)}'
    + '.ta-stat .v{font-size:1.05rem;font-weight:700;margin-top:2px}'
    + '.ta-crack{font-size:.8rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-crack b{color:var(--ta-text)}'
    + '.ta-embed-status{font-size:.78rem;color:var(--ta-muted);margin-top:10px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'password-strength-checker');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="password-strength-checker"]')) {
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
    + '<div class="ta-embed-title">Password Strength Checker</div>'
    + '<div class="ta-embed-subtitle">zxcvbn scoring with real crack times &mdash; computed in your visitor&rsquo;s browser</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-pw-row"><input type="password" class="ta-pw" placeholder="Test a variant — not a real password" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Password to test"><button type="button" class="ta-toggle">show</button></div>'
    + '<div class="ta-meter"><div class="fill"></div></div>'
    + '<div class="ta-stats">'
    + '<div class="ta-stat"><div class="l">Score</div><div class="v ta-score">—</div></div>'
    + '<div class="ta-stat"><div class="l">Entropy</div><div class="v ta-bits">—</div></div>'
    + '<div class="ta-stat"><div class="l">Guesses</div><div class="v ta-guesses">—</div></div>'
    + '</div>'
    + '<div class="ta-crack">Offline, fast hash (10 billion guesses/s): <b class="ta-fast">—</b></div>'
    + '<div class="ta-embed-status">Nothing is transmitted. Dictionaries (~1.6 MB) load on first use.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var zxcvbn = null, loading = null, timer = null;

  function ensureEngine() {
    if (zxcvbn) return Promise.resolve(zxcvbn);
    if (loading) return loading;
    root.querySelector('.ta-embed-status').textContent = 'Loading dictionaries (~1.6 MB, once) …';
    loading = Promise.all([import(ZX_CORE), import(ZX_COMMON), import(ZX_EN)]).then(function (mods) {
      var core = mods[0], common = mods[1], en = mods[2];
      zxcvbn = new core.ZxcvbnFactory({
        dictionary: Object.assign({}, common.dictionary, en.dictionary),
        graphs: common.adjacencyGraphs,
        translations: en.translations
      });
      root.querySelector('.ta-embed-status').textContent = 'Dictionaries loaded. Nothing you type is transmitted.';
      return zxcvbn;
    }).catch(function (err) {
      loading = null;
      root.querySelector('.ta-embed-status').textContent = 'Could not load the estimator: ' + (err && err.message || err);
      throw err;
    });
    return loading;
  }

  function fmtBig(n) {
    if (!isFinite(n)) return '∞';
    if (n < 1000) return String(Math.round(n * 10) / 10);
    if (n >= 1e18) return n.toExponential(2).replace('e+', ' × 10^');
    var units = ['thousand', 'million', 'billion', 'trillion', 'quadrillion'];
    var u = -1;
    while (n >= 1000 && u < units.length - 1) { n /= 1000; u++; }
    return (Math.round(n * 100) / 100) + ' ' + units[u];
  }

  root.querySelector('.ta-pw').addEventListener('input', function () {
    clearTimeout(timer);
    var pw = root.querySelector('.ta-pw').value;
    if (!pw) {
      root.querySelector('.ta-score').textContent = '—';
      root.querySelector('.ta-bits').textContent = '—';
      root.querySelector('.ta-guesses').textContent = '—';
      root.querySelector('.ta-fast').textContent = '—';
      root.querySelector('.ta-meter .fill').style.width = '0%';
      return;
    }
    timer = setTimeout(function () {
      ensureEngine().then(function () {
        var r = zxcvbn.check(root.querySelector('.ta-pw').value);
        root.querySelector('.ta-score').textContent = r.score + ' / 4';
        root.querySelector('.ta-bits').textContent = (Math.round(Math.log2(Math.max(r.guesses, 1)) * 10) / 10) + ' bits';
        root.querySelector('.ta-guesses').textContent = fmtBig(r.guesses);
        var fast = r.crackTimes && r.crackTimes.offlineFastHashingXPerSecond;
        root.querySelector('.ta-fast').textContent = fast && fast.display ? fast.display : '—';
        var fill = root.querySelector('.ta-meter .fill');
        fill.style.width = ((r.score + 1) / 5 * 100) + '%';
        fill.style.background = ['var(--ta-bad)', 'var(--ta-bad)', 'var(--ta-warn)', '#84cc16', 'var(--ta-ok)'][r.score];
      }).catch(function () {});
    }, 180);
  });

  root.querySelector('.ta-toggle').addEventListener('click', function () {
    var i = root.querySelector('.ta-pw');
    var show = i.type === 'password';
    i.type = show ? 'text' : 'password';
    root.querySelector('.ta-toggle').textContent = show ? 'hide' : 'show';
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.passwordStrengthChecker = {};
})();
