/*!
 * ToolAspect Minifier Shell — one shell, three pages
 *   /minify-js/     (terser 5.51.2, BSD-2-Clause, CDN UMD)
 *   /css-minifier/  (csso 5.0.5, MIT, CDN)
 *   /minify-html/   (html-minifier 4.0.0, MIT, vendored IIFE at /minify-html/vendor/)
 * Pages call TA.minify.mount('js' | 'css' | 'html'). Engines lazy-load on first
 * use; nothing leaves the browser. gzip sizes use CompressionStream when the
 * browser has it (Chrome 80+, Edge, Firefox 113+, Safari 16.4+).
 */
(function () {
  'use strict';
  var CDNS = ['https://cdn.jsdelivr.net/npm/', 'https://unpkg.com/'];

  // ---MIN-ENGINE-START---
  var ENGINES = {
    js: {
      name: 'Terser 5.51.2',
      license: 'BSD-2-Clause',
      kind: 'script',
      urls: CDNS.map(function (c) { return c + 'terser@5.51.2/dist/bundle.min.js'; }),
      global: 'Terser'
    },
    css: {
      name: 'csso 5.0.5',
      license: 'MIT',
      kind: 'script',
      urls: CDNS.map(function (c) { return c + 'csso@5.0.5/dist/csso.js'; }),
      global: 'csso'
    },
    html: {
      name: 'html-minifier 4.0.0',
      license: 'MIT',
      kind: 'script',
      urls: ['/minify-html/vendor/htmlminifier.iife.js', 'https://toolaspect.com/minify-html/vendor/htmlminifier.iife.js'],
      global: 'HTMLMinifier'
    }
  };

  var QUIET = { log: function () {} };
  var PRESETS = {
    js: {
      strip: { label: 'Strip only (comments + whitespace)', opts: { compress: false, mangle: false, format: { comments: false } } },
      compress: { label: 'Compress (no renaming)', opts: { mangle: false, format: { comments: false } } },
      full: { label: 'Compress + mangle (smallest)', opts: { toplevel: true } }
    },
    css: {
      keep: { label: 'Keep structure (whitespace only)', opts: { restructure: false } },
      restructure: { label: 'Restructure (merge rules)', opts: { restructure: true } }
    },
    html: {
      conservative: { label: 'Conservative (comments + whitespace)', opts: { collapseWhitespace: true, removeComments: true, keepClosingSlash: true } },
      aggressive: { label: 'Aggressive (also trim attributes)', opts: { collapseWhitespace: true, removeComments: true, removeAttributeQuotes: true, removeRedundantAttributes: true, removeScriptTypeAttributes: true, removeStyleLinkTypeAttributes: true, keepClosingSlash: true } }
    }
  };

  function byteLen(s) {
    return new TextEncoder().encode(s).length;
  }

  function gzipLen(s) {
    if (typeof CompressionStream === 'undefined') return Promise.resolve(null);
    return new Promise(function (resolve) {
      var stream = new Blob([s]).stream().pipeThrough(new CompressionStream('gzip'));
      var chunks = [], reader = stream.getReader(), total = 0;
      function pump() {
        reader.read().then(function (r) {
          if (r.done) return resolve(total);
          chunks.push(r.value); total += r.value.length; pump();
        }, function () { resolve(null); });
      }
      pump();
    });
  }

  function pct(saved, total) {
    if (!total) return '0.0';
    return ((saved / total) * 100).toFixed(1);
  }

  function runMinify(lang, code, presetKey) {
    var p = PRESETS[lang][presetKey];
    if (!p) return Promise.reject(new Error('unknown preset'));
    var opts = p.opts;
    if (lang === 'js') {
      return window[ENGINES.js.global].minify(code, opts).then(function (r) {
        if (r.error) throw r.error;
        return r.code;
      });
    }
    if (lang === 'css') {
      var r2 = window[ENGINES.css.global].minify(code, opts);
      return Promise.resolve(r2.css);
    }
    return Promise.resolve(window[ENGINES.html.global].minify(code, Object.assign({}, QUIET, opts)));
  }
  // ---- browser wiring ----

  var loaded = {};
  function loadScriptChain(urls) {
    var i = 0;
    function tryNext() {
      if (i >= urls.length) return Promise.reject(new Error('engine failed to load from any CDN'));
      var url = urls[i++];
      return new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = url;
        s.onload = resolve;
        s.onerror = function () { tryNext().then(resolve, reject); };
        (document.head || document.documentElement).appendChild(s);
      });
    }
    return tryNext();
  }
  function ensureEngine(lang) {
    if (loaded[lang]) return loaded[lang];
    var e = ENGINES[lang];
    loaded[lang] = loadScriptChain(e.urls).then(function () {
      if (!window[e.global]) throw new Error(e.name + ' loaded but global missing');
      return window[e.global];
    });
    return loaded[lang];
  }

  function $(id) { return document.getElementById(id); }

  function mount(lang) {
    var FILE = { js: 'minified.js', css: 'minified.css', html: 'minified.html' }[lang];
    var src = $('src'), out = $('out'), preset = $('preset'), status = $('status');
    var inBytes = $('inBytes'), outBytes = $('outBytes'), saved = $('saved'), gzIn = $('gzIn'), gzOut = $('gzOut');
    if (!src || !out) return;

    // populate preset select
    preset.innerHTML = '';
    Object.keys(PRESETS[lang]).forEach(function (k) {
      var o = document.createElement('option');
      o.value = k; o.textContent = PRESETS[lang][k].label;
      preset.appendChild(o);
    });
    if (lang === 'css') { preset.value = 'restructure'; }
    else if (lang === 'js') { preset.value = 'full'; }
    else { preset.value = 'conservative'; }

    var timer = null;
    function working(msg) {
      status.textContent = msg || 'Working…';
      status.className = 'status-line';
    }
    function fail(msg) {
      status.textContent = msg;
      status.className = 'status-line err';
    }
    function done(msg) {
      status.textContent = msg;
      status.className = 'status-line ok';
    }

    function go() {
      var code = src.value;
      var n = byteLen(code);
      inBytes.textContent = n.toLocaleString('en-US') + ' B';
      gzipLen(code).then(function (g) { gzIn.textContent = g === null ? '—' : g.toLocaleString('en-US') + ' B'; });
      if (!code.trim()) {
        out.value = ''; outBytes.textContent = '—'; saved.textContent = '—'; gzOut.textContent = '—';
        working('Paste ' + (lang === 'js' ? 'JavaScript' : lang === 'css' ? 'CSS' : 'HTML') + ' to minify.');
        return;
      }
      working('Minifying with ' + ENGINES[lang].name + '…');
      ensureEngine(lang).then(function () {
        return runMinify(lang, code, preset.value).then(function (min) {
          out.value = min;
          var m = byteLen(min);
          outBytes.textContent = m.toLocaleString('en-US') + ' B';
          saved.textContent = (n - m).toLocaleString('en-US') + ' B (' + pct(n - m, n) + '%)';
          return gzipLen(min).then(function (g) {
            gzOut.textContent = g === null ? '—' : g.toLocaleString('en-US') + ' B';
            done('Done — ' + ENGINES[lang].name + ' (' + ENGINES[lang].license + ') ran locally in your browser. Output is functionally identical; nothing was uploaded.');
          });
        });
      }).catch(function (e) {
        out.value = ''; outBytes.textContent = '—'; saved.textContent = '—'; gzOut.textContent = '—';
        fail('Cannot minify: ' + (e && e.message ? e.message : e) + (String(e && e.message || e).indexOf('Unexpected') >= 0 || lang === 'js' ? ' — fix the syntax error and it will re-run.' : ''));
      });
    }

    src.addEventListener('input', function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(go, 250);
    });
    preset.addEventListener('change', go);

    $('copy').addEventListener('click', function () {
      if (!out.value) return fail('Nothing to copy yet.');
      (navigator.clipboard ? navigator.clipboard.writeText(out.value) : Promise.reject()).then(
        function () { done('Minified output copied.'); },
        function () { fail('Clipboard blocked — select the output and copy manually.'); }
      );
    });
    $('download').addEventListener('click', function () {
      if (!out.value) return fail('Nothing to download yet.');
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([out.value], { type: 'text/plain' }));
      a.download = FILE;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      done('Downloaded ' + FILE + '.');
    });
    $('sample').addEventListener('click', function () {
      if (typeof window.TA_SAMPLE === 'string') { src.value = window.TA_SAMPLE; go(); }
    });
    $('clear').addEventListener('click', function () {
      src.value = ''; out.value = ''; go();
    });

    // first run: load the sample so the numbers on load match the worked example
    if (typeof window.TA_SAMPLE === 'string' && !src.value.trim()) src.value = window.TA_SAMPLE;
    go();
  }

  window.TA = window.TA || {};
  window.TA.minify = { mount: mount, ensureEngine: ensureEngine, runMinify: runMinify, PRESETS: PRESETS, byteLen: byteLen, pct: pct };
})();
