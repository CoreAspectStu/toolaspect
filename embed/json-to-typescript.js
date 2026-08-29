/*!
 * ToolAspect JSON to TypeScript Converter Embed
 * Install: <div id="ta-json-to-typescript"></div>
 *          <script src="https://toolaspect.com/embed/json-to-typescript.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Engine: Apache-2.0, Copyright 2026 ToolAspect.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-json-to-typescript';
  var BASE = 'https://toolaspect.com/json-to-typescript/';

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
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-code{width:100%;min-height:150px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.8rem;line-height:1.55;outline:none;resize:vertical}'
    + '.ta-embed-out{margin:0;background:var(--bg,#0b1020);background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:12px;'
    + 'font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.8rem;line-height:1.55;overflow-x:auto;white-space:pre;color:var(--ta-text)}'
    + '.ta-embed-btn{display:inline-block;padding:8px 16px;background:var(--ta-accent);border:none;border-radius:8px;color:#fff;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-err{color:#dc2626;font-size:.78rem;min-height:1.1em;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'json-to-typescript');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="json-to-typescript"]')) {
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
    + '<div class="ta-embed-title">JSON to TypeScript</div>'
    + '<div class="ta-embed-subtitle">Paste JSON, get interfaces — runs entirely in the page</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Input JSON</label>'
    + '<textarea class="ta-in ta-embed-code" spellcheck="false">{\n  "id": 1,\n  "name": "Ada",\n  "tags": ["a","b"]\n}</textarea></div>'
    + '<div class="ta-embed-form-group"><label>Root Type Name</label>'
    + '<input type="text" class="ta-root" value="Root" maxlength="40"></div>'
    + '<button class="ta-btn ta-embed-btn">Generate types</button>'
    + '<div class="ta-embed-err"></div>'
    + '</div>'
    + '<pre class="ta-embed-out"></pre>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var inEl = root.querySelector('.ta-in');
  var outEl = root.querySelector('.ta-embed-out');
  var errEl = root.querySelector('.ta-embed-err');
  var rootEl = root.querySelector('.ta-root');
  var btnEl = root.querySelector('.ta-btn');

  /* JSON-to-TypeScript engine
   * SPDX-License-Identifier: Apache-2.0
   * Copyright 2026 ToolAspect
   * Client-side inference: interfaces from object paths, merged array-of-object
   * shapes, unions for mixed arrays, explicit null handling.
   */
  function generateTypes(json, rootName, opts) {
    opts = opts || {};
    var useTypeAlias = !!opts.useTypeAlias;
    var strictNull = opts.strictNull !== false;

    var interfaces = [];
    var usedNames = {};

    function pascal(parts) {
      return parts.map(function (p) {
        return String(p).charAt(0).toUpperCase() + String(p).slice(1);
      }).join('').replace(/[^A-Za-z0-9_]/g, '') || 'Obj';
    }

    function uniqueName(base) {
      var name = base, i = 2;
      while (usedNames[name]) { name = base + i; i++; }
      usedNames[name] = true;
      return name;
    }

    function stripNull(t) {
      if (strictNull) return t;
      var parts = t.split('|').map(function (s) { return s.trim(); })
        .filter(function (s) { return s !== 'null'; });
      return parts.length ? parts.join(' | ') : 'any';
    }

    function primitive(v) {
      if (v === null) return 'null';
      if (typeof v === 'string') return 'string';
      if (typeof v === 'number') return 'number';
      if (typeof v === 'boolean') return 'boolean';
      return 'unknown';
    }

    function isPlainObject(v) {
      return v !== null && typeof v === 'object' && !Array.isArray(v);
    }

    function infer(v, path) {
      if (v === null) return 'null';
      if (Array.isArray(v)) return arrayOf(v, path);
      if (isPlainObject(v)) return objectType(v, path);
      return primitive(v);
    }

    function unifyTypes(types) {
      if (types.length === 0) return 'unknown';
      if (types.length === 1) return types[0];
      var sorted = types.slice().sort();
      return '(' + sorted.join(' | ') + ')';
    }

    function arrayOf(arr, path) {
      var nonEmpty = arr.length > 0;
      var allObjects = nonEmpty && arr.every(isPlainObject);
      if (allObjects) {
        var itemName = uniqueName(pascal(path.concat('Item')));
        var keys = [];
        for (var i = 0; i < arr.length; i++) {
          for (var k in arr[i]) {
            if (keys.indexOf(k) === -1) keys.push(k);
          }
        }
        var lines = [];
        for (var j = 0; j < keys.length; j++) {
          var key = keys[j];
          var ts = [];
          for (var m = 0; m < arr.length; m++) {
            if (key in arr[m]) {
              var one = infer(arr[m][key], path.concat('Item', key));
              if (ts.indexOf(one) === -1) ts.push(one);
            }
          }
          lines.push('  ' + key + ': ' + stripNull(ts.join(' | ')) + ';');
        }
        interfaces.push({ name: itemName, lines: lines });
        return itemName + '[]';
      }
      var types = [];
      for (var n = 0; n < arr.length; n++) {
        var t = infer(arr[n], path);
        if (types.indexOf(t) === -1) types.push(t);
      }
      return unifyTypes(types) + '[]';
    }

    function objectType(obj, path) {
      var name = uniqueName(pascal(path));
      var lines = [];
      for (var k in obj) {
        var v = obj[k];
        var t;
        if (Array.isArray(v) && v.length > 0 && v.every(isPlainObject)) {
          t = arrayOf(v, path.concat(k));
        } else {
          t = infer(v, path.concat(k));
        }
        lines.push('  ' + k + ': ' + stripNull(t) + ';');
      }
      interfaces.unshift({ name: name, lines: lines });
      return name;
    }

    var rootNameSafe = rootName || 'Root';
    var header = [];

    if (isPlainObject(json)) {
      objectType(json, [rootNameSafe]);
    } else {
      var inner;
      if (Array.isArray(json)) {
        if (json.length > 0 && json.every(isPlainObject)) {
          inner = arrayOf(json, [rootNameSafe]);
        } else {
          var elemTypes = [];
          for (var e = 0; e < json.length; e++) {
            var et = infer(json[e], [rootNameSafe, 'Item']);
            if (elemTypes.indexOf(et) === -1) elemTypes.push(et);
          }
          inner = unifyTypes(elemTypes) + '[]';
        }
      } else {
        inner = primitive(json);
      }
      header.push('type ' + rootNameSafe + ' = ' + inner + ';');
    }

    var out = header.slice();
    for (var i2 = 0; i2 < interfaces.length; i2++) {
      var it = interfaces[i2];
      var open = useTypeAlias ? 'type ' + it.name + ' = {' : 'interface ' + it.name + ' {';
      var close = useTypeAlias ? '};' : '}';
      out.push(open + '\n' + it.lines.join('\n') + '\n' + close);
    }
    return out.join('\n\n') + '\n';
  }
  function run() {
    errEl.textContent = '';
    var raw = inEl.value.trim();
    if (!raw) { outEl.textContent = '// paste JSON above'; return; }
    var json;
    try { json = JSON.parse(raw); }
    catch (e) { errEl.textContent = 'Invalid JSON: ' + e.message; return; }
    var rootName = (rootEl.value || 'Root').replace(/[^A-Za-z0-9_]/g, '') || 'Root';
    outEl.textContent = generateTypes(json, rootName, { useTypeAlias: false, strictNull: true });
  }

  btnEl.addEventListener('click', run);
  rootEl.addEventListener('change', run);
  inEl.addEventListener('input', run);
  run();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.jsonToTypeScript = { recalc: run };
})();
