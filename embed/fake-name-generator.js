/*!
 * ToolAspect Fake Name Generator Embed
 * Install: <div id="ta-fake-name-generator"></div>
 *          <script src="https://toolaspect.com/embed/fake-name-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine:  @faker-js/faker 10.6.0 (MIT), lazy-loaded from CDN, runs locally.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-fake-name-generator';
  var BASE = 'https://toolaspect.com/fake-name-generator/';
  var FAKER_URLS = [
    'https://cdn.jsdelivr.net/npm/@faker-js/faker@10.6.0/dist/locale/en.js',
    'https://unpkg.com/@faker-js/faker@10.6.0/dist/locale/en.js'
  ];

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:10px}'
    + '@media(max-width:520px){.ta-embed-row{grid-template-columns:1fr}}'
    + '.ta-embed-root label{font-size:.78rem;color:var(--ta-muted);font-weight:600;display:block;margin-bottom:3px}'
    + '.ta-embed-root input,.ta-embed-root select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:8px 10px;font-size:.85rem;font-family:inherit;outline:none}'
    + '.ta-embed-root input:focus,.ta-embed-root select:focus{border-color:var(--ta-accent)}'
    + '.ta-names{list-style:none;margin:0 0 10px;padding:0;max-height:240px;overflow-y:auto}'
    + '.ta-names li{padding:6px 10px;border-bottom:1px solid var(--ta-border);font-size:.9rem;color:var(--ta-text)}'
    + '.ta-names li:last-child{border-bottom:none}'
    + '.ta-names li b{color:var(--ta-accent);font-weight:600;margin-right:6px}'
    + '.ta-btns{display:flex;gap:8px;flex-wrap:wrap}'
    + '.ta-btn{flex:1;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:9px 12px;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-btn.ghost{background:transparent;border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-note{text-align:center;font-size:.78rem;color:var(--ta-muted);margin-top:8px;min-height:1.2em}'
    + '.ta-note.ok{color:var(--ta-ok)}.ta-note.bad{color:var(--ta-bad)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'fake-name-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="fake-name-generator"]')) {
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
    + '<div class="ta-embed-title">Fake Name Generator</div>'
    + '<div class="ta-embed-subtitle">3,186 first names &times; 473 surnames &mdash; seeded, reproducible, zero uploads</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-row">'
    + '<div><label>How many</label><input type="number" class="ta-count" value="5" min="1" max="100" step="1"></div>'
    + '<div><label>Gender</label><select class="ta-gender"><option value="">Any</option><option value="female">Female</option><option value="male">Male</option></select></div>'
    + '<div><label>Seed (optional)</label><input type="number" class="ta-seed" placeholder="e.g. 2026" min="0" step="1"></div>'
    + '</div>'
    + '<ul class="ta-names"><li class="ta-wait" style="color:var(--ta-muted)">Loading Faker engine&hellip;</li></ul>'
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
    var gender = root.querySelector('.ta-gender').value;
    var seedRaw = root.querySelector('.ta-seed').value;
    var seed = seedRaw === '' ? null : parseInt(seedRaw, 10);
    if (seed !== null && (isNaN(seed) || seed < 0)) return note('Seed must be a non-negative integer.', 'bad');
    loadFaker().then(function (mod) {
      var faker = mod.faker;
      if (seed !== null) faker.seed(seed);
      var sex = gender === '' ? undefined : gender;
      var items = [];
      for (var i = 0; i < count; i++) items.push(faker.person.fullName(sex ? { sex: sex } : undefined));
      root.querySelector('.ta-names').innerHTML = items.map(function (n, i) {
        return '<li><b>' + (i + 1) + '.</b>' + esc(n) + '</li>';
      }).join('');
      root.__lastNames = items;
      note('Generated ' + count + ' name' + (count === 1 ? '' : 's') + (seed !== null ? ' from seed ' + seed : '') + '.', 'ok');
    }).catch(function (e) {
      note('Engine failed to load: ' + (e && e.message ? e.message : e), 'bad');
    });
  }

  root.querySelector('.ta-go').addEventListener('click', generate);
  root.querySelector('.ta-gender').addEventListener('change', generate);
  root.querySelector('.ta-copy').addEventListener('click', function () {
    var items = root.__lastNames;
    if (!items || !items.length) return note('Generate first.', 'bad');
    (navigator.clipboard ? navigator.clipboard.writeText(items.join('\n')) : Promise.reject()).then(
      function () { note('Copied ' + items.length + ' names.', 'ok'); },
      function () { note('Clipboard blocked.', 'bad'); }
    );
  });

  generate();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.fakeNameGenerator = { generate: generate };
})();
