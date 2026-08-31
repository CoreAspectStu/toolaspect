/*!
 * ToolAspect jq Playground Embed
 * Install: <div id="ta-jq-playground"></div>
 *          <script src="https://toolaspect.com/embed/jq-playground.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-jq-playground';
  var BASE = 'https://toolaspect.com/jq-playground/';
  var JQ_MJS = 'https://cdn.jsdelivr.net/npm/jq-wasm@3.0.0-jq-1.8.2/dist/browser.mjs';
  var JQ_WASM = 'https://cdn.jsdelivr.net/npm/jq-wasm@3.0.0-jq-1.8.2/dist/build/jq.wasm';

  var SAMPLE = JSON.stringify({ order: { id: 4172, customer: { name: 'Dana Reyes', tier: 'gold' },
    items: [
      { sku: 'KB-01', name: 'Mechanical Keyboard', qty: 1, price: 129 },
      { sku: 'DSK-04', name: 'Standing Desk', qty: 1, price: 549 },
      { sku: 'MAT-02', name: 'Desk Mat', qty: 2, price: 25 }
    ],
    shipping: { method: 'express', cost: 18.5 }, coupons: ['WELCOME10'] } }, null, 2);

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-area{width:100%;height:150px;padding:10px 12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.72rem;line-height:1.5;resize:vertical;margin-bottom:8px}'
    + '.ta-embed-area:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-embed-filter{width:100%;padding:9px 12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.8rem;margin-bottom:8px}'
    + '.ta-embed-filter:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-embed-btn{background:var(--ta-accent);border:none;color:#fff;border-radius:8px;padding:8px 18px;font-size:.82rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-out{width:100%;height:100px;padding:10px 12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.72rem;line-height:1.5;white-space:pre;overflow:auto;margin-top:8px}'
    + '.ta-embed-chip{display:inline-block;background:rgba(37,99,235,.12);border:1px solid var(--ta-accent);color:var(--ta-accent);border-radius:999px;padding:.15rem .7rem;font-size:.72rem;font-weight:600;margin:0 6px 6px 0}'
    + '.ta-embed-note{text-align:center;color:var(--ta-muted);font-size:.78rem;margin:6px 0 0;min-height:1.2em}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'jq-playground');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="jq-playground"]')) {
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
    + '<div class="ta-embed-title">jq Playground</div>'
    + '<div class="ta-embed-subtitle">Real jq 1.8.2 via WebAssembly — JSON in, filter, result out</div>'
    + '<div class="ta-embed-card">'
    + '<textarea class="ta-embed-area" id="ta-jq-in" spellcheck="false"></textarea>'
    + '<input class="ta-embed-filter" id="ta-jq-f" spellcheck="false" autocomplete="off">'
    + '<button type="button" class="ta-embed-btn" id="ta-jq-run">Run filter</button>'
    + '<span id="ta-jq-ver"></span>'
    + '<div class="ta-embed-out" id="ta-jq-out"></div>'
    + '<p class="ta-embed-note" id="ta-jq-note">Engine loads on first run (~900 KB, then instant).</p>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var inA = root.querySelector('#ta-jq-in'), filt = root.querySelector('#ta-jq-f'),
      out = root.querySelector('#ta-jq-out'), note = root.querySelector('#ta-jq-note'),
      ver = root.querySelector('#ta-jq-ver');
  inA.value = SAMPLE;
  filt.value = '.order.items | map(.qty * .price) | add';

  var jq = null, timer = null;

  function run() {
    if (!jq) { note.textContent = 'Engine still loading…'; return; }
    var raw = inA.value.trim();
    if (!raw) { note.textContent = 'Paste some JSON.'; return; }
    var input;
    try { input = JSON.parse(raw); }
    catch (e) { note.textContent = 'JSON error: ' + e.message; return; }
    try {
      var res = jq.raw(input, filt.value, []);
      out.textContent = res.stdout;
      if (res.exitCode === 0) {
        note.textContent = 'ok — ' + (res.stdout === '' ? 'empty output' : res.stdout.split('\n').length + ' line(s)');
      } else {
        note.textContent = 'jq exit ' + res.exitCode + ': ' + (res.stderr || '').split('\n')[0];
      }
    } catch (e) {
      note.textContent = 'jq error: ' + e.message;
    }
  }
  function loadJq() {
    import(JQ_MJS).then(function (mod) {
      return mod.loadJq({ wasmURL: JQ_WASM });
    }).then(function (engine) {
      jq = engine;
      ver.innerHTML = '<span class="ta-embed-chip">' + jq.version + '</span>';
      note.textContent = 'Engine ready — updates as you type.';
      run();
    }).catch(function (e) {
      note.textContent = 'Could not load jq WebAssembly: ' + e.message;
    });
  }
  root.addEventListener('click', function (e) { if (e.target.id === 'ta-jq-run') run(); });
  var debounced = function () { clearTimeout(timer); timer = setTimeout(function () { if (jq) run(); }, 400); };
  inA.addEventListener('input', debounced);
  filt.addEventListener('input', debounced);
  loadJq();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.jqPlayground = { run: run };
})();
