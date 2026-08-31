/*!
 * ToolAspect SAML Decoder Embed
 * Install: <div id="ta-saml-decoder"></div>
 *          <script src="https://toolaspect.com/embed/saml-decoder.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-saml-decoder';
  var BASE = 'https://toolaspect.com/saml-decoder/';
  var PAKO_SRC = 'https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako.min.js';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-area{width:100%;min-height:90px;padding:10px 12px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;color:var(--ta-text);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.72rem;line-height:1.5;resize:vertical;margin-bottom:8px}'
    + '.ta-embed-area:focus{outline:none;border-color:var(--ta-accent)}'
    + '.ta-embed-btn{background:var(--ta-accent);border:none;color:#fff;border-radius:8px;padding:8px 18px;font-size:.82rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn.ghost{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text)}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px;overflow:hidden}'
    + '.ta-embed-cell .k{font-size:.68rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px}'
    + '.ta-embed-cell .v{font-size:.82rem;font-weight:700;word-break:break-all}'
    + '.ta-embed-chip{display:inline-block;background:rgba(37,99,235,.12);border:1px solid var(--ta-accent);color:var(--ta-accent);border-radius:999px;padding:.15rem .7rem;font-size:.72rem;font-weight:600;margin:0 6px 6px 0}'
    + '.ta-embed-valid{font-size:.78rem;font-weight:700;padding:.15rem .6rem;border-radius:6px}'
    + '.ta-embed-valid.ok{background:rgba(22,163,74,.14);color:var(--ta-ok)}'
    + '.ta-embed-valid.warn{background:rgba(220,38,38,.14);color:var(--ta-bad)}'
    + '.ta-embed-note{text-align:center;color:var(--ta-muted);font-size:.78rem;margin:6px 0 0;min-height:1.2em}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:480px){.ta-embed-grid{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'saml-decoder');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="saml-decoder"]')) {
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
    + '<div class="ta-embed-title">SAML Decoder</div>'
    + '<div class="ta-embed-subtitle">base64 · DEFLATE · redirect URLs → fields, decoded locally</div>'
    + '<div class="ta-embed-card">'
    + '<textarea class="ta-embed-area" id="ta-sd-in" spellcheck="false" placeholder="Paste a SAMLResponse/SAMLRequest value or a full redirect URL…"></textarea>'
    + '<button type="button" class="ta-embed-btn" id="ta-sd-run">Decode</button> '
    + '<button type="button" class="ta-embed-btn ghost" id="ta-sd-clear">Clear</button>'
    + '<div id="ta-sd-enc"></div>'
    + '<div class="ta-embed-grid" id="ta-sd-grid"></div>'
    + '<p class="ta-embed-note" id="ta-sd-note">Pretty-printed XML and more samples on the full tool.</p>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var inA = root.querySelector('#ta-sd-in'), grid = root.querySelector('#ta-sd-grid'),
      enc = root.querySelector('#ta-sd-enc'), note = root.querySelector('#ta-sd-note');

  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }
  function b64ToBytes(s) {
    s = s.replace(/\s+/g, '').replace(/-/g, '+').replace(/_/g, '/');
    while (s.length % 4) s += '=';
    var bin = atob(s), len = bin.length, bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }
  function pick(xml, re) { var m = xml.match(re); return m ? m[1] : null; }
  function fields(xml) {
    var rows = [
      ['Issuer', pick(xml, /<saml2?:Issuer[^>]*>([^<]+)<\/saml2?:Issuer>/)],
      ['NameID', pick(xml, /<saml2?:NameID[^>]*>([^<]+)<\/saml2?:NameID>/)],
      ['Audience', pick(xml, /<saml2?:Audience>([^<]+)<\/saml2?:Audience>/)],
      ['InResponseTo', pick(xml, /InResponseTo="([^"]+)"/)],
      ['NotBefore', pick(xml, /NotBefore="([^"]+)"/)],
      ['NotOnOrAfter', pick(xml, /NotOnOrAfter="([^"]+)"/)],
      ['SessionIndex', pick(xml, /SessionIndex="([^"]+)"/)]
    ].filter(function (r) { return r[1] != null; });
    return rows;
  }
  function validity(xml) {
    var nb = pick(xml, /NotBefore="([^"]+)"/), no = pick(xml, /NotOnOrAfter="([^"]+)"/);
    if (!nb && !no) return null;
    var t = Date.now(), nbd = nb ? Date.parse(nb) : null, nod = no ? Date.parse(no) : null;
    var label = 'VALID', cls = 'ok';
    if (nbd && t < nbd) { label = 'NOT YET VALID'; cls = 'warn'; }
    if (nod && t >= nod) { label = 'EXPIRED'; cls = 'warn'; }
    var winMin = (nod && nbd) ? Math.round((nod - nbd) / 60000) : null;
    return { label: label, cls: cls, winMin: winMin };
  }
  function finish(xml, encText) {
    enc.innerHTML = '<span class="ta-embed-chip">' + esc(encText) + '</span>';
    var rows = fields(xml), v = validity(xml);
    var html = rows.map(function (r) {
      return '<div class="ta-embed-cell"><div class="k">' + r[0] + '</div><div class="v">' + esc(r[1]) + '</div></div>';
    }).join('');
    if (v) {
      html += '<div class="ta-embed-cell" style="grid-column:1/-1"><div class="k">Validity vs your clock</div><div class="v"><span class="ta-embed-valid ' + v.cls + '">' + v.label + '</span>'
        + (v.winMin != null ? ' <span style="font-weight:400;color:var(--ta-muted)">window: ' + v.winMin + ' min</span>' : '') + '</div></div>';
    }
    grid.innerHTML = html || '<div class="ta-embed-cell"><div class="v">No recognizable SAML fields found in this XML.</div></div>';
    note.textContent = 'Decoded locally — nothing was uploaded.';
  }
  function fail(msg) { note.textContent = msg; grid.innerHTML = ''; enc.innerHTML = ''; }
  function decode() {
    var val = inA.value.trim();
    if (!val) { fail('Paste a SAML value first.'); return; }
    if (/^https?:\/\//.test(val) && /[?&](SAMLRequest|SAMLResponse)=/.test(val)) {
      try {
        var u = new URL(val);
        var k = u.searchParams.has('SAMLResponse') ? 'SAMLResponse' : 'SAMLRequest';
        val = u.searchParams.get(k);
      } catch (e) { fail('That URL would not parse.'); return; }
    }
    if (/^%3[Cc]/.test(val)) { try { val = decodeURIComponent(val); } catch (e) {} }
    if (/^\s*</.test(val)) { finish(val, 'plain XML'); return; }
    var bytes;
    try { bytes = b64ToBytes(val); } catch (e) { fail('Not valid base64 — check for truncated copies.'); return; }
    var txt = new TextDecoder('utf-8').decode(bytes);
    if (/^\s*</.test(txt)) { finish(txt, 'base64 (POST binding)'); return; }
    go();
    function go() {
      if (!(window.pako && window.pako.inflateRaw)) {
        note.textContent = 'Loading pako inflate engine…';
        var s = document.createElement('script');
        s.src = PAKO_SRC; s.async = true;
        s.onload = go;
        s.onerror = function () { fail('Could not load the pako engine.'); };
        (document.head || document.documentElement).appendChild(s);
        return;
      }
      try { finish(window.pako.inflateRaw(bytes, { to: 'string' }), 'base64url + DEFLATE (redirect)'); return; } catch (e) {}
      try { finish(window.pako.inflate(bytes, { to: 'string' }), 'base64 + zlib DEFLATE'); return; } catch (e) {}
      fail('Decoded base64 but the bytes are neither XML nor a DEFLATE stream.');
    }
  }
  root.addEventListener('click', function (e) {
    if (e.target.id === 'ta-sd-run') decode();
    if (e.target.id === 'ta-sd-clear') { inA.value = ''; fail(''); note.textContent = ''; }
  });

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.samlDecoder = { decode: decode };
})();
