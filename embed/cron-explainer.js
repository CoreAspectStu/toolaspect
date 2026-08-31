/*!
 * ToolAspect Cron Explainer Embed
 * Install: <div id="ta-cron-explainer"></div>
 *          <script src="https://toolaspect.com/embed/cron-explainer.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engines: cronstrue@3.24.0 (MIT) + croner@10.0.1 (MIT), lazy-loaded from
 * jsdelivr on first use. All parsing runs in the visitor's browser.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-cron-explainer';
  var BASE = 'https://toolaspect.com/cron-explainer/';
  var LIBS = [
    'https://cdn.jsdelivr.net/npm/cronstrue@3.24.0/dist/cronstrue.min.js',
    'https://cdn.jsdelivr.net/npm/croner@10.0.1/dist/croner.umd.js'
  ];

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-in{width:100%;padding:10px 12px;border:1px solid var(--ta-border);border-radius:8px;background:var(--ta-bg);color:var(--ta-text);font-size:1.02rem;font-family:ui-monospace,Menlo,Consolas,monospace;box-sizing:border-box}'
    + '.ta-embed-in:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-embed-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}'
    + '.ta-embed-chip{padding:4px 10px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:999px;color:var(--ta-muted);font-size:.72rem;font-family:ui-monospace,Menlo,Consolas,monospace;cursor:pointer}'
    + '.ta-embed-chip:hover{border-color:var(--ta-accent);color:var(--ta-text)}'
    + '.ta-embed-out{padding:12px 14px;border:1px solid var(--ta-accent);border-radius:8px;background:var(--ta-bg);margin-top:12px;font-size:1rem}'
    + '.ta-embed-runs{margin-top:8px}'
    + '.ta-embed-run{display:flex;justify-content:space-between;gap:8px;padding:7px 10px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;margin-top:6px;font-size:.82rem}'
    + '.ta-embed-run .rel{color:var(--ta-muted);white-space:nowrap}'
    + '.ta-embed-status{margin-top:10px;font-size:.85rem;color:var(--ta-muted)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'cron-explainer');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="cron-explainer"]')) {
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
    + '<div class="ta-embed-title">Cron Explainer</div>'
    + '<div class="ta-embed-subtitle">What does that cron expression mean?</div>'
    + '<div class="ta-embed-card">'
    + '<input class="ta-embed-in" value="*/15 9-17 * * 1-5" spellcheck="false" aria-label="Cron expression">'
    + '<div class="ta-embed-chips">'
    + '<button type="button" class="ta-embed-chip" data-e="@daily">@daily</button>'
    + '<button type="button" class="ta-embed-chip" data-e="@hourly">@hourly</button>'
    + '<button type="button" class="ta-embed-chip" data-e="0 9 * * MON-FRI">0 9 * * MON-FRI</button>'
    + '<button type="button" class="ta-embed-chip" data-e="30 4 1,15 * *">30 4 1,15 * *</button>'
    + '</div>'
    + '<div class="ta-embed-out" style="display:none"></div>'
    + '<div class="ta-embed-runs"></div>'
    + '<div class="ta-embed-status">Type or paste a cron expression — 5-field, Quartz 6/7-field, or @daily shortcuts.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var inEl = root.querySelector('.ta-embed-in');
  var outEl = root.querySelector('.ta-embed-out');
  var runsEl = root.querySelector('.ta-embed-runs');
  var statusEl = root.querySelector('.ta-embed-status');
  var libsPromise = null;

  function loadLibs() {
    if (window.cronstrue && window.Cron) return Promise.resolve();
    if (!libsPromise) {
      libsPromise = Promise.all(LIBS.map(function (u) {
        return new Promise(function (res, rej) {
          var s = document.createElement('script');
          s.src = u;
          s.onload = res;
          s.onerror = function () { libsPromise = null; rej(new Error('engine failed to load')); };
          (document.head || document.documentElement).appendChild(s);
        });
      }));
    }
    return libsPromise;
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function rel(ms) {
    if (ms < 0) return 'past';
    var s = Math.round(ms / 1000);
    if (s < 60) return s + 's';
    var m = Math.round(s / 60);
    if (m < 60) return m + ' min';
    var h = Math.floor(m / 60);
    if (h < 48) return h + 'h ' + (m % 60) + 'm';
    return Math.round(h / 24) + ' days';
  }

  function render() {
    var expr = inEl.value.trim();
    outEl.style.display = 'none';
    runsEl.innerHTML = '';
    if (!expr) { statusEl.textContent = 'Type or paste a cron expression.'; return; }
    loadLibs().then(function () {
      var sentence = null;
      try { sentence = window.cronstrue.toString(expr, {}); } catch (e) { sentence = null; }
      outEl.style.display = '';
      outEl.textContent = sentence ? '“' + sentence + '”' : 'Could not parse that expression — check the field count (5, 6, or 7 space-separated fields).';
      if (!sentence) return;
      try {
        var c = new window.Cron(expr.replace(/\?/g, '*'), {});
        var fmt = new Intl.DateTimeFormat(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        var d = new Date();
        var html = '';
        for (var i = 0; i < 3; i++) {
          d = c.nextRun(d);
          if (!d) break;
          html += '<div class="ta-embed-run"><span>' + fmt.format(d) + '</span><span class="rel">in ' + rel(d.getTime() - Date.now()) + '</span></div>';
        }
        runsEl.innerHTML = html;
        statusEl.textContent = 'Run times are in your local timezone.';
      } catch (e) {
        statusEl.textContent = 'Run preview unavailable for this expression — the English translation above still applies.';
      }
    }).catch(function () {
      statusEl.innerHTML = '<span style="color:#dc2626">The explainer engines failed to load (offline?).</span>';
    });
  }

  inEl.addEventListener('input', render);
  root.querySelector('.ta-embed-chips').addEventListener('click', function (e) {
    var chip = e.target.closest('.ta-embed-chip');
    if (!chip) return;
    inEl.value = chip.getAttribute('data-e');
    render();
  });
  render();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.cronExplainer = { recalc: render };
})();
