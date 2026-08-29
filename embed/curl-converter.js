/*!
 * ToolAspect curl Converter Embed
 * Install: <div id="ta-curl-converter"></div>
 *          <script src="https://toolaspect.com/embed/curl-converter.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 * Parsing powered by the tree-sitter approach (MIT-licensed ecosystem);
 * this embed uses a built-in shell tokenizer so it has zero dependencies.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-curl-converter';
  var BASE = 'https://toolaspect.com/curl-converter/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-textarea{width:100%;min-height:90px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.8rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;outline:none;resize:vertical}'
    + '.ta-embed-textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-tabs{display:flex;gap:6px;margin:12px 0 0}'
    + '.ta-embed-tab{flex:1;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;'
    + 'padding:7px 10px;font-size:.8rem;cursor:pointer;font-family:inherit;font-weight:600}'
    + '.ta-embed-tab.ta-active{border-color:var(--ta-accent);color:var(--ta-text)}'
    + '.ta-embed-code{position:relative;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:10px;padding:12px;margin-top:12px;overflow-x:auto}'
    + '.ta-embed-code pre{margin:0;font-size:.74rem;line-height:1.55;color:var(--ta-text);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;white-space:pre;min-height:1.4em}'
    + '.ta-embed-copy{position:absolute;top:6px;right:6px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:6px;color:var(--ta-muted);font-size:.68rem;padding:2px 8px;cursor:pointer}'
    + '.ta-embed-note{font-size:.7rem;color:var(--ta-muted);margin-top:6px;min-height:1.2em}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'curl-converter');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="curl-converter"]')) {
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
    + '<div class="ta-embed-title">curl Converter</div>'
    + '<div class="ta-embed-subtitle">Paste a curl command, copy Python or JavaScript</div>'
    + '<div class="ta-embed-card">'
    + '<textarea class="ta-curl ta-embed-textarea" spellcheck="false"></textarea>'
    + '<div class="ta-embed-tabs">'
    + '<button type="button" class="ta-embed-tab ta-active" data-lang="python">Python</button>'
    + '<button type="button" class="ta-embed-tab" data-lang="fetch">fetch</button>'
    + '<button type="button" class="ta-embed-tab" data-lang="axios">axios</button>'
    + '</div>'
    + '<div class="ta-embed-code"><button type="button" class="ta-embed-copy">Copy</button><pre class="ta-out"></pre></div>'
    + '<div class="ta-embed-note ta-note"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var out = root.querySelector('.ta-out');
  var note = root.querySelector('.ta-note');
  var lang = 'python';
  var current = '';

/* curl-converter pure core — no DOM, node-testable.
 * tokenizeCurl: fallback shell tokenizer (quotes, escapes, line continuations)
 * tokensFromTreeSitter: adapter taking a parsed tree-sitter-bash tree (browser path)
 * parseCurlTokens: tokens -> request model
 * toPython / toFetch / toAxios: model -> code
 */
'use strict';

/* ---------- shell fallback tokenizer ---------- */
function tokenizeCurl(text) {
  var tokens = [];
  var warnings = [];
  var cur = '';
  var i = 0;
  var n = text.length;
  var hasToken = false;
  while (i < n) {
    var c = text[i];
    if (c === '\\' && i + 1 < n && (text[i + 1] === '\n' || text[i + 1] === '\r')) {
      i += 2; // line continuation
      continue;
    }
    if (c === "'" ) {
      hasToken = true;
      i++;
      var j = text.indexOf("'", i);
      if (j < 0) { warnings.push('Unterminated single quote'); j = n; }
      cur += text.slice(i, j);
      i = j + 1;
      continue;
    }
    if (c === '"' ) {
      hasToken = true;
      i++;
      while (i < n && text[i] !== '"') {
        if (text[i] === '\\' && i + 1 < n) {
          var nx = text[i + 1];
          if (nx === '"' || nx === '\\' || nx === '$' || nx === '`') { cur += nx; i += 2; continue; }
          if (nx === '\n' || nx === '\r') { i += 2; continue; }
          cur += text[i]; i++; continue;
        }
        if (text[i] === '$') warnings.push('Variable expansion in double quotes — value used literally');
        cur += text[i]; i++;
      }
      i++; // closing quote
      continue;
    }
    if (c === ' ' || c === '\t' || c === '\n' || c === '\r') {
      if (hasToken || cur) { tokens.push(cur); cur = ''; hasToken = false; }
      i++;
      continue;
    }
    if (c === '#' && !hasToken && !cur) {
      while (i < n && text[i] !== '\n') i++;
      continue;
    }
    if (c === '\\' && i + 1 < n && text[i + 1] !== '\n' && text[i + 1] !== '\r') {
      cur += text[i + 1]; hasToken = true; i += 2; continue;
    }
    cur += c; hasToken = true; i++;
  }
  if (hasToken || cur) tokens.push(cur);
  return { tokens: tokens, warnings: warnings };
}

/* ---------- argv parsing ---------- */
var SHORT_ARGS = { X: 'request', H: 'header', d: 'data', b: 'cookie', A: 'user-agent', e: 'referer', u: 'user', m: 'max-time', o: 'output', F: 'form', c: 'cookie-jar', C: 'continue-at', D: 'dump-header', E: 'cert', K: 'config', Q: 'quote', r: 'range', T: 'upload-file', x: 'proxy', X: 'request', y: 'speed-time', Y: 'speed-limit', z: 'time-cond' };
var SHORT_BOOLS = { s: 'silent', L: 'location', k: 'insecure', I: 'head', G: 'get', f: 'fail', i: 'include', v: 'verbose', n: 'no-buffer', N: 'no-buffer', l: 'list-only', '#': 'progress', '0': 'http1.0', '1': 'tlsv1', '2': 'sslv2', '3': 'sslv3', '4': 'ipv4', '6': 'ipv6', a: 'append', B: 'use-ascii', g: 'globoff', j: 'junk-session', J: 'remote-header-name', M: 'manual', O: 'remote-name', p: 'proxytunnel', P: 'ftp-port', q: 'disable', R: 'remote-time', S: 'show-error', t: 'telnet', u2: null, w: null, Z: 'parallel' };
var LONG_ARGS = { request: 'request', header: 'header', 'user-agent': 'user-agent', referer: 'referer', cookie: 'cookie', user: 'user', 'max-time': 'max-time', 'connect-timeout': 'connect-timeout', form: 'form', 'form-string': 'form-string', data: 'data', 'data-raw': 'data', 'data-ascii': 'data', 'data-binary': 'data', 'data-urlencode': 'data-urlencode', 'url': 'url', output: 'output', 'upload-file': 'upload', proxy: 'proxy', cert: 'cert', 'retry': 'retry', 'write-out': 'write-out', email: 'from', 'pass': 'pass', 'cacert': 'cacert', 'key': 'key' };
var LONG_BOOLS = { location: 'follow', insecure: 'insecure', compressed: 'compressed', head: 'head', get: 'get', silent: 'silent', verbose: 'verbose', fail: 'fail', include: 'include', 'location-trusted': 'follow', 'no-buffer': 'no-buffer', 'remote-name': 'remote-name', 'post301': 'post301', 'post302': 'post302', 'http1.1': 'http1', 'ipv4': 'ipv4', 'ipv6': 'ipv6', 'globoff': 'globoff' };

function splitFlag(tok) {
  // returns {name, value|null, hasValue} for --name=value
  var eq = tok.indexOf('=');
  if (eq < 0) return { name: tok, value: null };
  return { name: tok.slice(0, eq), value: tok.slice(eq + 1) };
}

function parseCurlTokens(tokens) {
  var m = { url: null, method: null, headers: [], dataParts: [], urlencodeParts: [], multipart: [], auth: null, insecure: false, follow: false, compressed: false, timeout: null, headFlag: false, getFlag: false, ignored: [], warnings: [] };
  var i = 0;
  var n = tokens.length;
  if (n === 0) return { ok: false, error: 'Empty command' };
  // skip env assignments before curl
  while (i < n && /^[A-Za-z_][A-Za-z0-9_]*=/.test(tokens[i])) i++;
  if (i >= n) return { ok: false, error: 'No curl command found' };
  var first = tokens[i];
  if (first !== 'curl' && first.indexOf('curl') !== 0) {
    // allow /usr/bin/curl, curl.exe
    if (!/(^|\/)curl(\.exe)?$/.test(first)) return { ok: false, error: 'First word should be curl' };
  }
  i++;
  function nextValue(idx, flagName) {
    if (idx + 1 < n) return idx + 1;
    m.warnings.push('Missing value for ' + flagName);
    return -1;
  }
  while (i < n) {
    var t = tokens[i];
    if (t.charAt(0) === '-' && t.length > 1 && !/^-\d/.test(t)) {
      if (t.charAt(1) === '-') {
        var f = splitFlag(t.slice(2));
        var ln = f.name; // flag tables use dashed keys — look up verbatim
        if (LONG_ARGS[ln]) {
          var v = f.value;
          if (v === null) { var ni = nextValue(i, '--' + ln); if (ni < 0) break; v = tokens[ni]; i = ni; }
          applyArg(m, LONG_ARGS[ln], v);
        } else if (LONG_BOOLS[ln] !== undefined) {
          if (f.value !== null) m.warnings.push('--' + ln + ' takes no value');
          applyBool(m, LONG_BOOLS[ln]);
        } else {
          m.ignored.push(t);
        }
      } else {
        var chars = t.slice(1);
        var ci = 0;
        var consumedNext = false;
        while (ci < chars.length) {
          var ch = chars.charAt(ci);
          if (SHORT_ARGS[ch]) {
            var rest = chars.slice(ci + 1);
            var val2 = rest !== '' ? rest : null;
            if (val2 === null) {
              if (i + 1 < n) { val2 = tokens[i + 1]; consumedNext = true; }
              else { m.warnings.push('Missing value for -' + ch); val2 = ''; }
            }
            applyArg(m, SHORT_ARGS[ch], val2);
            break; // rest of token was the value (or flag consumed next token)
          } else if (SHORT_BOOLS[ch] !== undefined && SHORT_BOOLS[ch] !== null) {
            applyBool(m, SHORT_BOOLS[ch]);
            ci++;
          } else {
            m.ignored.push('-' + ch);
            break;
          }
        }
        if (consumedNext) i++;
      }
      i++;
      continue;
    }
    if (m.url === null) m.url = t;
    else m.ignored.push(t);
    i++;
  }
  if (m.url === null) return { ok: false, error: 'No URL found' };
  return { ok: true, model: m };
}

function applyArg(m, name, value) {
  switch (name) {
    case 'request': m.method = value.toUpperCase(); break;
    case 'header': {
      var idx = value.indexOf(':');
      if (idx < 0) { m.warnings.push('Malformed header: ' + value); break; }
      var hn = value.slice(0, idx).trim();
      var hv = value.slice(idx + 1).trim();
      // curl sends duplicate headers; keep last for common overrides, else keep both
      var replaced = false;
      for (var k = 0; k < m.headers.length; k++) {
        if (m.headers[k].name.toLowerCase() === hn.toLowerCase()) { m.headers[k].value = hv; replaced = true; break; }
      }
      if (!replaced) m.headers.push({ name: hn, value: hv });
      break;
    }
    case 'data': m.dataParts.push(value); break;
    case 'cookie': m.headers.push({ name: 'Cookie', value: value }); break;
    case 'user-agent': m.headers.push({ name: 'User-Agent', value: value }); break;
    case 'referer': m.headers.push({ name: 'Referer', value: value }); break;
    case 'user': {
      var ci2 = value.indexOf(':');
      m.auth = { user: ci2 < 0 ? value : value.slice(0, ci2), pass: ci2 < 0 ? '' : value.slice(ci2 + 1) };
      break;
    }
    case 'max-time': { var secs = parseFloat(value); if (!isNaN(secs)) m.timeout = secs; break; }
    case 'form': {
      var eq2 = value.indexOf('=');
      if (eq2 < 0) break;
      var fname = value.slice(0, eq2);
      var fval = value.slice(eq2 + 1);
      if (fval.charAt(0) === '@') m.multipart.push({ name: fname, value: fval.slice(1), file: true });
      else m.multipart.push({ name: fname, value: fval, file: false });
      break;
    }
    case 'data-urlencode': { var eq3 = value.indexOf('='); m.urlencodeParts.push(eq3 < 0 ? value : value.slice(0, eq3) + '=' + value.slice(eq3 + 1)); break; }
    case 'url': m.url = value; break;
    default: m.ignored.push(name + ' ' + value);
  }
}

function applyBool(m, name) {
  switch (name) {
    case 'insecure': m.insecure = true; break;
    case 'follow': m.follow = true; break;
    case 'compressed': m.compressed = true; break;
    case 'head': m.headFlag = true; break;
    case 'get': m.getFlag = true; break;
    default: break;
  }
}

/* ---------- model refinement ---------- */
function refineModel(m) {
  m.effectiveMethod = m.method ? m.method : (m.headFlag ? 'HEAD' : (m.getFlag ? 'GET' : ((m.dataParts.length || m.multipart.length || m.urlencodeParts.length) ? 'POST' : 'GET')));
  // data mode
  m.mode = 'none';
  if (m.multipart.length) m.mode = 'multipart';
  else if (m.getFlag && (m.dataParts.length || m.urlencodeParts.length)) m.mode = 'params';
  else if (m.urlencodeParts.length) m.mode = 'form';
  else if (m.dataParts.length) {
    var joined = m.dataParts.join('&');
    m.rawData = joined;
    if (joined.charAt(0) === '@') { m.mode = 'raw-file'; }
    else if (/^[[{]/.test(joined)) {
      try { m.json = JSON.parse(joined); m.mode = 'json'; }
      catch (e) { m.mode = 'raw'; }
    } else if (/^[^=&\s]+=[^&]*(&[^=&\s]+=[^&]*)*$/.test(joined)) {
      m.mode = 'form';
    } else m.mode = 'raw';
  }
  m.hasBody = m.mode === 'json' || m.mode === 'form' || m.mode === 'raw' || m.mode === 'raw-file' || m.mode === 'multipart';
  return m;
}

function formPairs(m) {
  var pairs = [];
  var parts = m.dataParts.slice();
  if (m.urlencodeParts.length) parts = parts.concat(m.urlencodeParts);
  parts.forEach(function (p) {
    for (var _i = 0, _a = p.split('&'); _i < _a.length; _i++) {
      var kv = _a[_i];
      var eq = kv.indexOf('=');
      if (eq < 0) pairs.push([kv, '']);
      else pairs.push([kv.slice(0, eq), kv.slice(eq + 1)]);
    }
  });
  return pairs;
}

/* ---------- literal emitters ---------- */
function pyLit(v, indent) {
  if (v === null) return 'None';
  if (v === true) return 'True';
  if (v === false) return 'False';
  if (typeof v === 'number') return String(v);
  if (typeof v === 'string') return JSON.stringify(v);
  var pad = new Array(indent + 1).join(' ');
  var pad2 = new Array(indent + 5).join(' ');
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    return '[\n' + v.map(function (x) { return pad2 + pyLit(x, indent + 4) + ','; }).join('\n') + '\n' + pad + ']';
  }
  var keys = Object.keys(v);
  if (!keys.length) return '{}';
  return '{\n' + keys.map(function (k) { return pad2 + JSON.stringify(k) + ': ' + pyLit(v[k], indent + 4) + ','; }).join('\n') + '\n' + pad + '}';
}

function jsLit(v, indent) {
  if (v === null || v === undefined) return 'null';
  if (v === true) return 'true';
  if (v === false) return 'false';
  if (typeof v === 'number') return String(v);
  if (typeof v === 'string') return JSON.stringify(v);
  var pad = new Array(indent + 1).join(' ');
  var pad2 = new Array(indent + 5).join(' ');
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    return '[\n' + v.map(function (x) { return pad2 + jsLit(x, indent + 4) + ','; }).join('\n') + '\n' + pad + ']';
  }
  var keys = Object.keys(v);
  if (!keys.length) return '{}';
  return '{\n' + keys.map(function (k) {
    var keyRe = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
    return pad2 + (keyRe.test(k) ? k : JSON.stringify(k)) + ': ' + jsLit(v[k], indent + 4) + ',';
  }).join('\n') + '\n' + pad + '}';
}

/* ---------- code generators ---------- */
function toPython(m) {
  refineModel(m);
  var L = [];
  var reqArgs = [];
  L.push('import requests');
  L.push('');
  L.push('url = ' + JSON.stringify(m.url));
  var hdrs = m.headers.slice();
  if (m.mode === 'json' && !hasHeader(hdrs, 'content-type')) hdrs = hdrs; // json= sets it
  else if (m.mode === 'json' && hasHeader(hdrs, 'content-type')) dropHeader(hdrs, 'content-type');
  else if (m.mode === 'multipart' && hasHeader(hdrs, 'content-type')) dropHeader(hdrs, 'content-type');
  if (hdrs.length) {
    L.push('headers = {');
    hdrs.forEach(function (h) { L.push('    ' + JSON.stringify(h.name) + ': ' + JSON.stringify(h.value) + ','); });
    L.push('}');
    reqArgs.push('headers=headers');
  }
  if (m.mode === 'params') {
    L.push('params = {');
    formPairs(m).forEach(function (p) { L.push('    ' + JSON.stringify(p[0]) + ': ' + JSON.stringify(p[1]) + ','); });
    L.push('}');
    reqArgs.push('params=params');
  }
  if (m.mode === 'json') { L.push('json_data = ' + pyLit(m.json, 0)); reqArgs.push('json=json_data'); }
  if (m.mode === 'form') {
    L.push('data = {');
    formPairs(m).forEach(function (p) { L.push('    ' + JSON.stringify(p[0]) + ': ' + JSON.stringify(p[1]) + ','); });
    L.push('}');
    reqArgs.push('data=data');
  }
  if (m.mode === 'multipart') {
    var files = m.multipart.filter(function (f) { return f.file; });
    var fields = m.multipart.filter(function (f) { return !f.file; });
    if (fields.length) {
      L.push('data = {');
      fields.forEach(function (f) { L.push('    ' + JSON.stringify(f.name) + ': ' + JSON.stringify(f.value) + ','); });
      L.push('}');
      reqArgs.push('data=data');
    }
    if (files.length) {
      L.push('files = {');
      files.forEach(function (f) { L.push('    ' + JSON.stringify(f.name) + ': open(' + JSON.stringify(f.value) + ', "rb"),'); });
      L.push('}');
      reqArgs.push('files=files');
    }
  }
  if (m.mode === 'raw' || m.mode === 'raw-file') {
    L.push('body = ' + JSON.stringify(m.mode === 'raw-file' ? '<file contents>' : m.rawData));
    reqArgs.push('data=body');
  }
  if (m.auth) {
    L.push('auth = (' + JSON.stringify(m.auth.user) + ', ' + JSON.stringify(m.auth.pass) + ')');
    reqArgs.push('auth=auth');
  }
  if (m.timeout !== null) reqArgs.push('timeout=' + m.timeout);
  if (m.insecure) reqArgs.push('verify=False');
  L.push('');
  L.push('response = requests.' + m.effectiveMethod.toLowerCase() + '(url' + (reqArgs.length ? ', ' + reqArgs.join(', ') : '') + ')');
  L.push('print(response.status_code)');
  L.push('print(response.text)');
  var notes = pyNotes(m);
  if (notes.length) { L.push(''); notes.forEach(function (x) { return L.push(x); }); }
  return L.join('\n');
}

function pyNotes(m) {
  var out = [];
  if (m.follow) out.push('# -L: requests follows redirects by default');
  if (m.compressed) out.push('# --compressed: requests decompresses automatically');
  if (m.insecure) out.push('# verify=False skips certificate checks (curl -k)');
  if (m.ignored.length) out.push('# not converted: ' + m.ignored.join(' '));
  return out;
}

function toFetch(m) {
  refineModel(m);
  var L = [];
  var urlStr = m.url;
  if (m.mode === 'params') {
    var qs = formPairs(m).map(function (p) { return encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1]); }).join('&');
    urlStr = m.url + (m.url.indexOf('?') >= 0 ? '&' : '?') + qs;
  }
  L.push('fetch(' + JSON.stringify(urlStr) + ', {');
  var opts = [];
  if (m.effectiveMethod !== 'GET') opts.push('  method: ' + JSON.stringify(m.effectiveMethod) + ',');
  var hdrs = m.headers.slice();
  if (m.mode === 'json') dropHeader(hdrs, 'content-type'); // body: JSON.stringify sets it
  if (m.auth && !hasHeader(hdrs, 'authorization')) hdrs.push({ name: 'Authorization', raw: '"Basic " + btoa(' + JSON.stringify(m.auth.user + ':' + m.auth.pass) + ')' });
if (hdrs.length) {
    opts.push('  headers: {');
    hdrs.forEach(function (h) { opts.push('    ' + JSON.stringify(h.name) + ': ' + (h.raw || JSON.stringify(h.value)) + ','); });
    opts.push('  },');
  }
  if (m.mode === 'json') opts.push('  body: JSON.stringify(' + jsLit(m.json, 2) + '),');
  if (m.mode === 'form') {
    opts.push('  body: new URLSearchParams({');
    formPairs(m).forEach(function (p) { opts.push('    ' + JSON.stringify(p[0]) + ': ' + JSON.stringify(p[1]) + ','); });
    opts.push('  }),');
  }
  if (m.mode === 'multipart') {
    opts.push('  body: (() => {');
    opts.push('    const fd = new FormData();');
    m.multipart.forEach(function (f) {
      if (f.file) opts.push('    fd.append(' + JSON.stringify(f.name) + ', fileInput.files[0]); // ' + JSON.stringify(f.value));
      else opts.push('    fd.append(' + JSON.stringify(f.name) + ', ' + JSON.stringify(f.value) + ');');
    });
    opts.push('    return fd;');
    opts.push('  })(),');
  }
  if (m.mode === 'raw') opts.push('  body: ' + JSON.stringify(m.rawData) + ',');
  if (m.mode === 'raw-file') opts.push('  body: fileContents, // from ' + JSON.stringify(m.rawData));
  if (m.timeout !== null) opts.push('  signal: AbortSignal.timeout(' + Math.round(m.timeout * 1000) + '), // ' + m.timeout + 's');
  L = L.concat(opts);
  L.push('})');
  L.push('  .then((res) => res.text())');
  L.push('  .then((body) => console.log(body))');
  L.push('  .catch((err) => console.error(err));');
  var notes = fetchNotes(m);
  if (notes.length) { L.push(''); notes.forEach(function (x) { return L.push(x); }); }
  return L.join('\n');
}

function fetchNotes(m) {
  var out = [];
  if (m.follow) out.push('// -L: fetch follows redirects by default');
  if (m.compressed) out.push('// --compressed: browsers decompress automatically');
  if (m.insecure) out.push('// -k: browsers always verify certificates');
  if (m.ignored.length) out.push('// not converted: ' + m.ignored.join(' '));
  return out;
}

function toAxios(m) {
  refineModel(m);
  var L = [];
  L.push('import axios from "axios";');
  L.push('');
  var call = 'axios.' + m.effectiveMethod.toLowerCase() + '(';
  var args = [JSON.stringify(m.url)];
  var cfg = [];
  var hdrs = m.headers.slice();
  if (m.mode === 'json') dropHeader(hdrs, 'content-type');
  if (hdrs.length) {
    var hl = ['    headers: {'];
    hdrs.forEach(function (h) { hl.push('      ' + JSON.stringify(h.name) + ': ' + JSON.stringify(h.value) + ','); });
    hl.push('    },');
    cfg.push(hl.join('\n'));
  }
  if (m.mode === 'json') args.push(jsLit(m.json, 2));
  else if (m.mode === 'form') args.push('new URLSearchParams({\n' + formPairs(m).map(function (p) { return '  ' + JSON.stringify(p[0]) + ': ' + JSON.stringify(p[1]) + ','; }).join('\n') + '\n})');
  else if (m.mode === 'raw') args.push(JSON.stringify(m.rawData));
  else if (m.mode === 'raw-file') args.push('fs.readFileSync(' + JSON.stringify(m.rawData) + ', "utf8")');
  else if (m.mode === 'multipart') {
    var fl = [];
    fl.push('    (() => {');
    fl.push('      const fd = new FormData();');
    m.multipart.forEach(function (f) {
      if (f.file) fl.push('      fd.append(' + JSON.stringify(f.name) + ', fileBlob); // ' + JSON.stringify(f.value));
      else fl.push('      fd.append(' + JSON.stringify(f.name) + ', ' + JSON.stringify(f.value) + ');');
    });
    fl.push('      return fd;');
    fl.push('    })(),');
    cfg.push(fl.join('\n'));
  }
  if (m.mode === 'params') {
    var pl = ['    params: {'];
    formPairs(m).forEach(function (p) { pl.push('      ' + JSON.stringify(p[0]) + ': ' + JSON.stringify(p[1]) + ','); });
    pl.push('    },');
    cfg.push(pl.join('\n'));
  }
  if (m.auth) cfg.push('    auth: {\n      username: ' + JSON.stringify(m.auth.user) + ',\n      password: ' + JSON.stringify(m.auth.pass) + ',\n    },');
  if (m.timeout !== null) cfg.push('    timeout: ' + Math.round(m.timeout * 1000) + ',');
  if (m.insecure) cfg.push('    // -k: set `httpAgent` with rejectUnauthorized disabled if truly needed');
  args.push('{\n' + cfg.join('\n') + '\n  }');
  L.push('const response = await ' + call + args.join(',\n  ') + '\n);');
  L.push('');
  L.push('console.log(response.status);');
  L.push('console.log(response.data);');
  var notes = axiosNotes(m);
  if (notes.length) { L.push(''); notes.forEach(function (x) { return L.push(x); }); }
  return L.join('\n');
}

function axiosNotes(m) {
  var out = [];
  if (m.follow) out.push('// -L: axios follows redirects by default');
  if (m.compressed) out.push('// --compressed: axios decompresses automatically (Node 10+)');
  if (m.ignored.length) out.push('// not converted: ' + m.ignored.join(' '));
  return out;
}

/* ---------- shared header helpers ---------- */
function hasHeader(hdrs, lower) {
  return hdrs.some(function (h) { return h.name.toLowerCase() === lower; });
}
function dropHeader(hdrs, lower) {
  for (var i = hdrs.length - 1; i >= 0; i--) if (hdrs[i].name.toLowerCase() === lower) hdrs.splice(i, 1);
}

/* ---------- tree-sitter adapter (browser path; takes Parser instance + tree) ---------- */
function unescapeDq(s) {
  return s.replace(/\\(["\\$`])/g, '$1');
}
function tsArgText(node, info) {
  var t = node.type;
  if (t === 'word' || t === 'number' || t === 'concatenation' || t === 'string' || t === 'raw_string' || t === 'ansi_c_string' || t === 'simple_expansion' || t === 'variable_name' || t === 'command_substitution') {
    if (t === 'concatenation') {
      var out_1 = '';
      for (var c = 0; c < node.namedChildCount; c++) {
        var ch = node.namedChild(c);
        if (ch === null) continue;
        out_1 += tsArgText(ch, info);
      }
      return out_1;
    }
    if (t === 'string') {
      var inner = '';
      for (var c2 = 0; c2 < node.namedChildCount; c2++) {
        var ch2 = node.namedChild(c2);
        if (ch2 === null) continue;
        if (ch2.type === 'string_content') inner += unescapeDq(ch2.text);
        else inner += tsArgText(ch2, info); // expansions inside DQ
      }
      return inner;
    }
    if (t === 'raw_string') return node.text.slice(1, -1);
    if (t === 'ansi_c_string') return node.text.slice(2, -1);
    if (t === 'simple_expansion' || t === 'variable_name' || t === 'command_substitution') {
      info.dynamic = true;
      return node.text;
    }
    return node.text;
  }
  return node.text;
}
function tokensFromTree(rootNode, warnings) {
  var info = { dynamic: false };
  var cmd = null;
  for (var i = 0; i < rootNode.namedChildCount; i++) {
    var n = rootNode.namedChild(i);
    if (n === null) continue;
    if (n.type === 'command') { cmd = n; break; }
  }
  if (!cmd) return null;
  var tokens = [];
  var nameNode = cmd.childForFieldName('name');
  if (!nameNode || !/curl(\.exe)?$/.test(nameNode.text.replace(/^.*\//, ''))) return null;
  for (var c = 0; c < cmd.childCount; c++) {
    var ch = cmd.child(c);
    if (ch === null || ch === nameNode) continue;
    if (ch.type === 'file_redirect' || ch.type === 'heredoc_redirect' || ch.type === 'variable_assignment') continue;
    tokens.push(tsArgText(ch, info));
  }
  if (info.dynamic && warnings) warnings.push('Command contains shell variables or substitutions — converted with the literal text');
  return tokens;
}

/* ---------- public pipeline ---------- */
function convertCurlText(text, tsTokens) {
  var warnings = [];
  var tokens = tsTokens;
  if (!tokens) {
    var tk = tokenizeCurl(text);
    tokens = tk.tokens;
    warnings = warnings.concat(tk.warnings);
  }
  var parsed = parseCurlTokens(tokens);
  if (!parsed.ok) return { ok: false, error: parsed.error, warnings: warnings };
  var m = refineModel(parsed.model);
  warnings = warnings.concat(m.warnings || []);
  return {
    ok: true,
    warnings: warnings,
    model: m,
    python: toPython(m),
    fetch: toFetch(m),
    axios: toAxios(m)
  };
}


  var ta = root.querySelector('.ta-curl');
  ta.value = "curl -X POST https://api.example.com/v1/users \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"name\":\"Ada\",\"role\":\"admin\"}'";
  var debounce = null;

  function convert() {
    var text = ta.value;
    if (!text.trim()) { out.textContent = ''; note.textContent = ''; current = ''; return; }
    var r = convertCurlText(text, null);
    if (!r.ok) { out.textContent = ''; note.textContent = r.error; current = ''; return; }
    current = r[lang];
    out.textContent = current;
    note.textContent = (r.warnings && r.warnings.length) ? r.warnings.join(' · ') : (r.model.effectiveMethod + ' ' + r.model.mode + ' · parsed in-browser, nothing sent anywhere');
  }

  ta.addEventListener('input', function () {
    if (debounce) clearTimeout(debounce);
    debounce = setTimeout(convert, 200);
  });

  root.querySelector('.ta-embed-tabs').addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-tab');
    if (!btn) return;
    lang = btn.getAttribute('data-lang');
    root.querySelectorAll('.ta-embed-tab').forEach(function (b) { b.classList.remove('ta-active'); });
    btn.classList.add('ta-active');
    convert();
  });

  root.querySelector('.ta-embed-copy').addEventListener('click', function () {
    if (!current) return;
    var btn = root.querySelector('.ta-embed-copy');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(current).then(function () {
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1400);
      });
    }
  });

  convert();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.curlConverter = { recalc: convert };
})();
