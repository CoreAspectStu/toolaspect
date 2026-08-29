/*!
 * ToolAspect JSON Schema Validator Embed
 * Install: <div id="ta-json-schema-validator"></div>
 *          <script src="https://toolaspect.com/embed/json-schema-validator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Note: Ajv 8 is imported from jsDelivr (+esm) on first validation. Both the
 * schema and the document are validated entirely in the visitor's browser.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-json-schema-validator';
  var BASE = 'https://toolaspect.com/json-schema-validator/';
  var CDN = {
    'draft-07': 'https://cdn.jsdelivr.net/npm/ajv@8.17.1/+esm',
    '2019-09': 'https://cdn.jsdelivr.net/npm/ajv@8.17.1/dist/2019/+esm',
    '2020-12': 'https://cdn.jsdelivr.net/npm/ajv@8.17.1/dist/2020/+esm'
  };
  var FORMATS = {
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    date: /^\d{4}-\d{2}-\d{2}$/,
    'date-time': /^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(:\d{2})?(\.\d+)?(Z|[+-]\d{2}:\d{2})?$/,
    uri: /^[a-zA-Z][a-zA-Z0-9+.-]*:/,
    uuid: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
  };

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group textarea{width:100%;min-height:110px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.78rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;outline:none;resize:vertical}'
    + '.ta-embed-form-group textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:2fr 1fr;gap:10px;align-items:end;margin-bottom:10px}'
    + '.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-btn{display:block;width:100%;background:var(--ta-accent);border:none;color:#fff;border-radius:10px;padding:12px;'
    + 'font-size:.95rem;font-weight:600;font-family:inherit;cursor:pointer;margin-top:4px}'
    + '.ta-embed-btn:hover{filter:brightness(1.08)}'
    + '.ta-embed-btn:disabled{opacity:.55;cursor:wait}'
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.4rem;font-weight:700;color:var(--ta-muted)}'
    + '.ta-embed-big.ok{color:#16a34a}'
    + '.ta-embed-big.bad{color:#dc2626}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-big.ok{color:#4ade80}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-big.bad{color:#f87171}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.85rem;margin-top:6px;text-align:left;font-family:ui-monospace,Menlo,Consolas,monospace}'
    + '.ta-embed-status{color:var(--ta-muted);font-size:.8rem;text-align:center;margin-bottom:10px;min-height:1.2em}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'json-schema-validator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="json-schema-validator"]')) {
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
    + '<div class="ta-embed-title">JSON Schema Validator</div>'
    + '<div class="ta-embed-subtitle">Validate a document against a schema, in-browser</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>JSON Schema</label><textarea class="ta-schema" spellcheck="false" placeholder="{ &quot;type&quot;: &quot;object&quot;, &quot;required&quot;: [&quot;name&quot;] }"></textarea></div>'
    + '<div class="ta-embed-form-group"><label>JSON document</label><textarea class="ta-doc" spellcheck="false" placeholder="{ &quot;name&quot;: &quot;Ada&quot; }"></textarea></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Dialect</label><select class="ta-dialect">'
    + '<option value="auto" selected>Auto (from $schema)</option><option value="draft-07">draft-07</option>'
    + '<option value="2019-09">2019-09</option><option value="2020-12">2020-12</option></select></div>'
    + '</div>'
    + '<button type="button" class="ta-embed-btn">Validate</button>'
    + '</div>'
    + '<div class="ta-embed-status">Nothing is sent anywhere — validation runs locally via Ajv.</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">Paste a schema and a document</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var cache = {};

  function status(t) { root.querySelector('.ta-embed-status').textContent = t; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function pickDialect(schema, sel) {
    if (sel !== 'auto') return sel;
    var s = schema.$schema || '';
    if (s.indexOf('2020-12') > -1) return '2020-12';
    if (s.indexOf('2019-09') > -1) return '2019-09';
    return 'draft-07';
  }

  function getAjv(dialect) {
    if (cache[dialect]) return Promise.resolve(cache[dialect]);
    return import(CDN[dialect]).then(function (mod) {
      var Ajv = mod.Ajv || mod.Ajv2019 || mod.Ajv2020;
      if (typeof Ajv !== 'function') throw new Error('unexpected Ajv bundle exports');
      cache[dialect] = new Ajv({ allErrors: true, formats: FORMATS });
      return cache[dialect];
    });
  }

  var btn = root.querySelector('.ta-embed-btn');

  function validate() {
    var big = root.querySelector('.ta-embed-big');
    var sub = root.querySelector('.ta-embed-sub');
    var schemaText = root.querySelector('.ta-schema').value.trim();
    var docText = root.querySelector('.ta-doc').value.trim();
    big.className = 'ta-embed-big';
    if (!schemaText || !docText) { big.textContent = '—'; sub.textContent = 'Paste both a schema and a document.'; return; }
    var schema, doc;
    try { schema = JSON.parse(schemaText); } catch (e) { big.textContent = 'Schema JSON error'; sub.textContent = e.message; return; }
    try { doc = JSON.parse(docText); } catch (e) { big.textContent = 'Document JSON error'; sub.textContent = e.message; return; }
    var dialect = pickDialect(schema, root.querySelector('.ta-dialect').value);
    btn.disabled = true;
    status('Validating with ' + dialect + '…');
    getAjv(dialect).then(function (ajv) {
      if (!ajv.validateSchema(schema)) {
        big.textContent = 'Invalid schema';
        sub.innerHTML = ajv.errors.map(function (e) { return esc((e.instancePath || '/') + ' ' + e.message); }).join('<br>');
        return;
      }
      var validateFn = ajv.compile(schema);
      if (validateFn(doc)) {
        big.classList.add('ok');
        big.textContent = '✓ Valid';
        sub.textContent = 'Matches the schema (' + dialect + ')';
      } else {
        big.classList.add('bad');
        big.textContent = '✗ Invalid';
        sub.innerHTML = validateFn.errors.map(function (e) {
          var extra = e.params && e.params.additionalProperty ? ' (' + e.params.additionalProperty + ')' : '';
          return esc((e.instancePath || '/') + ' ' + e.message + extra);
        }).join('<br>');
      }
    }).catch(function (e) {
      big.textContent = 'Engine error';
      sub.textContent = e.message;
    }).finally(function () { btn.disabled = false; status('Validation runs locally via Ajv ' + dialect + '.'); });
  }

  btn.addEventListener('click', validate);

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.jsonSchemaValidator = { validate: validate };
})();
