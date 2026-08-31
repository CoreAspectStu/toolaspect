/*!
 * ToolAspect Fake Email Generator Embed
 * Install: <div id="ta-fake-email-generator"></div>
 *          <script src="https://toolaspect.com/embed/fake-email-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 *          data-domain="yourdomain.dev" pre-fills custom mode's domain.
 * Engine:  @faker-js/faker 10.6.0 (MIT), lazy-loaded from CDN, runs locally.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-fake-email-generator';
  var BASE = 'https://toolaspect.com/fake-email-generator/';
  var FAKER_URLS = [
    'https://cdn.jsdelivr.net/npm/@faker-js/faker@10.6.0/dist/locale/en.js',
    'https://unpkg.com/@faker-js/faker@10.6.0/dist/locale/en.js'
  ];
  var DOMAIN_RE = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '@media(max-width:520px){.ta-embed-row{grid-template-columns:1fr}}'
    + '.ta-embed-root label{font-size:.78rem;color:var(--ta-muted);font-weight:600;display:block;margin-bottom:3px}'
    + '.ta-embed-root input,.ta-embed-root select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 10px;font-size:.85rem;font-family:inherit;outline:none}'
    + '.ta-embed-root input:focus,.ta-embed-root select:focus{border-color:var(--ta-accent)}'
    + '.ta-mails{list-style:none;margin:0 0 10px;padding:0;max-height:240px;overflow-y:auto}'
    + '.ta-mails li{padding:6px 10px;border-bottom:1px solid var(--ta-border);font-size:.88rem;color:var(--ta-text);word-break:break-all}'
    + '.ta-mails li:last-child{border-bottom:none}'
    + '.ta-mails li small{color:var(--ta-muted)}'
    + '.ta-btns{display:flex;gap:8px;flex-wrap:wrap}'
    + '.ta-btn{flex:1;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:9px 12px;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-btn.ghost{background:transparent;border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-note{text-align:center;font-size:.78rem;color:var(--ta-muted);margin-top:8px;min-height:1.2em}'
    + '.ta-note.ok{color:var(--ta-ok)}.ta-note.bad{color:var(--ta-bad)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'fake-email-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="fake-email-generator"]')) {
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
    + '<div class="ta-embed-title">Fake Email Generator</div>'
    + '<div class="ta-embed-subtitle">Name-based test addresses &mdash; provider, RFC 2606 reserved, or your domain</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-row">'
    + '<div><label>How many</label><input type="number" class="ta-count" value="5" min="1" max="100" step="1"></div>'
    + '<div><label>Domain mode</label><select class="ta-mode"><option value="free">Real providers</option><option value="reserved">Reserved (example.com)</option><option value="custom">Custom domain</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-row ta-domain-row" style="display:none">'
    + '<div style="grid-column:1/-1"><label>Your domain</label><input type="text" class="ta-domain" placeholder="mail.yourtest.dev" spellcheck="false"></div>'
    + '</div>'
    + '<div class="ta-embed-row">'
    + '<div><label>Seed (optional)</label><input type="number" class="ta-seed" placeholder="e.g. 2026" min="0" step="1"></div>'
    + '</div>'
    + '<ul class="ta-mails"><li style="color:var(--ta-muted)">Loading Faker engine&hellip;</li></ul>'
    + '<div class="ta-btns">'
    + '<button type="button" class="ta-btn ta-go">Generate</button>'
    + '<button type="button" class="ta-btn ghost ta-copy">Copy list</button>'
    + '</div>'
    + '<div class="ta-note">Rendering locally with @faker-js/faker (MIT).</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function note(msg, cls) {
    var n = root.querySelector('.ta-note');
    n.textContent = msg;
    n.className = 'ta-note' + (cls ? ' ' + cls : '');
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  var fakerMod = null, loading = null;
  function loadFaker() {
    if (fakerMod) return Promise.resolve(fakerMod);
    if (loading) return loading;
    var p = Promise.reject();
    FAKER_URLS.forEach(function (url) { p = p.catch(function () { return import(url); }); });
    loading = p.then(function (mod) { fakerMod = mod; return mod; });
    return loading;
  }

  function generate() {
    var count = Math.min(100, Math.max(1, parseInt(root.querySelector('.ta-count').value, 10) || 5));
    var mode = root.querySelector('.ta-mode').value;
    var domain = root.querySelector('.ta-domain').value.trim().toLowerCase();
    var seedRaw = root.querySelector('.ta-seed').value;
    var seed = seedRaw === '' ? null : parseInt(seedRaw, 10);
    if (seed !== null && (isNaN(seed) || seed < 0)) return note('Seed must be a non-negative integer.', 'bad');
    if (mode === 'custom' && !DOMAIN_RE.test(domain)) return note('Enter a valid custom domain first.', 'bad');
    loadFaker().then(function (mod) {
      var faker = mod.faker;
      if (seed !== null) faker.seed(seed);
      var items = [];
      for (var i = 0; i < count; i++) {
        if (mode === 'reserved') items.push(faker.internet.exampleEmail());
        else if (mode === 'custom') items.push(faker.internet.email({ provider: domain }));
        else items.push(faker.internet.email());
      }
      var tag = mode === 'free' ? 'provider' : mode === 'reserved' ? 'reserved' : 'custom';
      root.querySelector('.ta-mails').innerHTML = items.map(function (m, i) {
        return '<li><b>' + (i + 1) + '.</b> ' + esc(m) + ' <small>(' + tag + ')</small></li>';
      }).join('');
      root.__lastMails = items;
      var warn = mode === 'free' ? ' Never send mail to these — the domains are real.' : '';
      note('Generated ' + count + ' address' + (count === 1 ? '' : 'es') + (seed !== null ? ' from seed ' + seed : '') + '.' + warn, mode === 'free' ? '' : 'ok');
    }).catch(function (e) {
      note('Engine failed to load: ' + (e && e.message ? e.message : e), 'bad');
    });
  }

  root.querySelector('.ta-go').addEventListener('click', generate);
  root.querySelector('.ta-mode').addEventListener('change', function () {
    root.querySelector('.ta-domain-row').style.display = this.value === 'custom' ? '' : 'none';
  });
  root.querySelector('.ta-copy').addEventListener('click', function () {
    var items = root.__lastMails;
    if (!items || !items.length) return note('Generate first.', 'bad');
    (navigator.clipboard ? navigator.clipboard.writeText(items.join('\n')) : Promise.reject()).then(
      function () { note('Copied ' + items.length + ' addresses.', 'ok'); },
      function () { note('Clipboard blocked.', 'bad'); }
    );
  });

  if (target.getAttribute('data-domain')) {
    root.querySelector('.ta-mode').value = 'custom';
    root.querySelector('.ta-domain').value = target.getAttribute('data-domain');
    root.querySelector('.ta-domain-row').style.display = '';
  }

  generate();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.fakeEmailGenerator = { generate: generate };
})();
