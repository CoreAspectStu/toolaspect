/*!
 * ToolAspect HTML Entity Converter Embed
 * Install: <div id="ta-html-entity-converter"></div>
 *          <script src="https://toolaspect.com/embed/html-entity-converter.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-html-entity-converter';
  var BASE = 'https://toolaspect.com/html-entity-converter/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-mode{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px}'
    + '.ta-embed-mode button{padding:8px 6px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-muted);'
    + 'border-radius:8px;font-size:.8rem;font-family:inherit;cursor:pointer}'
    + '.ta-embed-mode button.on{background:var(--ta-accent);border-color:var(--ta-accent);color:#fff;font-weight:600}'
    + '.ta-embed-io{width:100%;min-height:96px;padding:10px 12px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;font-size:.85rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;line-height:1.5;outline:none;resize:vertical}'
    + '.ta-embed-io:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-lab{font-size:.72rem;color:var(--ta-muted);margin:8px 0 4px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-swap{margin-top:10px;padding:8px 16px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;font-size:.8rem;font-family:inherit;cursor:pointer}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-mode{grid-template-columns:1fr 1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'html-entity-converter');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="html-entity-converter"]')) {
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
    + '<div class="ta-embed-title">HTML Entity Converter</div>'
    + '<div class="ta-embed-subtitle">Named &middot; decimal &middot; hex &mdash; encode and decode</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-mode">'
    + '<button data-m="named" class="on">Encode named</button>'
    + '<button data-m="dec">Encode &#35;</button>'
    + '<button data-m="hex">Encode &#35;x</button>'
    + '<button data-m="specials">Only &amp; &lt; &gt;</button>'
    + '<button data-m="decode" style="grid-column:1 / span 3">Decode &rarr; characters</button>'
    + '</div>'
    + '<div class="ta-embed-lab">Input</div>'
    + '<textarea class="ta-in ta-embed-io" spellcheck="false">Tom &amp; Jerry &lt;3 "Caf&eacute;" &mdash; &euro;5</textarea>'
    + '<div class="ta-embed-lab">Output</div>'
    + '<textarea class="ta-out ta-embed-io" spellcheck="false" readonly></textarea>'
    + '<button class="ta-embed-swap">&#8644; Use output as input</button>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var ENT = {"AMP":38,"COPY":169,"DD":8517,"ENG":330,"ETH":208,"GT":62,"LT":60,"QUOT":34,"REG":174,"THORN":222,"TRADE":8482,"amp":38,"lt":60,"gt":62,"quot":34,"apos":39,"nbsp":160,"copy":169,"reg":174,"trade":8482,"deg":176,"plusmn":177,"frac12":189,"frac14":188,"frac34":190,"times":215,"divide":247,"micro":181,"para":182,"sect":167,"laquo":171,"raquo":187,"hellip":8230,"mdash":8212,"ndash":8211,"euro":8364,"pound":163,"yen":165,"cent":162,"bull":8226,"dagger":8224,"Dagger":8225,"permil":8240,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"infin":8734,"ne":8800,"le":8804,"ge":8805,"alpha":945,"beta":946,"gamma":947,"pi":960,"sigma":963,"omega":969,"Alpha":913,"Beta":914,"Gamma":915,"Pi":928,"Sigma":931,"Omega":937,"sum":8721,"prod":8719,"radic":8730,"asymp":8776,"equiv":8801,"middot":183,"lsaquo":8249,"rsaquo":8250,"lsquo":8216,"rsquo":8217,"ldquo":8220,"rdquo":8221,"sbquo":8218,"bdquo":8222,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"alefsym":8501,"weierp":8472,"image":8465,"real":8476,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"sub":8834,"sup":8835,"nsub":8836,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"aacute":225,"eacute":233,"iacute":237,"oacute":243,"uacute":250,"agrave":224,"egrave":232,"ccedil":231,"ntilde":241,"szlig":223,"auml":228,"ouml":246,"uuml":252,"aring":229,"aelig":230,"oslash":248,"eth":240,"THORN":222,"acirc":226,"ecirc":234,"ocirc":244,"ucirc":251,"atilde":227};
  var REV = {};
  for (var k in ENT) { var c = ENT[k]; if (!(c in REV) || k.length < REV[c].length) REV[c] = k; }
  var mode = 'named';

  function encodeNamed(s) {
    return Array.from(s).map(function (ch) {
      var cp = ch.codePointAt(0);
      if (ch === '&') return '&amp;'; if (ch === '<') return '&lt;'; if (ch === '>') return '&gt;';
      if (cp > 126) { var n = REV[cp]; return n ? '&' + n + ';' : '&#' + cp + ';'; }
      return ch;
    }).join('');
  }
  function encodeSpecials(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function encodeNum(s, hex) {
    return Array.from(s).map(function (ch) {
      var cp = ch.codePointAt(0);
      if (ch === '&') return '&amp;'; if (ch === '<') return '&lt;'; if (ch === '>') return '&gt;';
      if (cp > 126) return hex ? '&#x' + cp.toString(16) + ';' : '&#' + cp + ';';
      return ch;
    }).join('');
  }
  function decodeEnt(s) {
    return s.replace(/&(#[xX][0-9a-fA-F]+|#[0-9]+|[a-zA-Z][a-zA-Z0-9]*);/g, function (m, g) {
      if (g.charAt(0) === '#') {
        var v = (g.charAt(1) === 'x' || g.charAt(1) === 'X') ? parseInt(g.slice(2), 16) : parseInt(g.slice(1), 10);
        if (!isFinite(v) || v < 0 || v > 0x10FFFF || (v >= 0xD800 && v <= 0xDFFF)) return m;
        try { return String.fromCodePoint(v); } catch (e) { return m; }
      }
      return Object.prototype.hasOwnProperty.call(ENT, g) ? String.fromCodePoint(ENT[g]) : m;
    });
  }

  function calc() {
    var inp = root.querySelector('.ta-in').value, out = '';
    if (mode === 'named') out = encodeNamed(inp);
    else if (mode === 'specials') out = encodeSpecials(inp);
    else if (mode === 'dec') out = encodeNum(inp, false);
    else if (mode === 'hex') out = encodeNum(inp, true);
    else out = decodeEnt(inp);
    root.querySelector('.ta-out').value = out;
  }

  root.addEventListener('input', calc);
  root.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON' && e.target.getAttribute('data-m')) {
      mode = e.target.getAttribute('data-m');
      var bs = root.querySelectorAll('.ta-embed-mode button');
      for (var i = 0; i < bs.length; i++) bs[i].classList.toggle('on', bs[i].getAttribute('data-m') === mode);
      calc();
    }
  });
  root.querySelector('.ta-embed-swap').addEventListener('click', function () {
    root.querySelector('.ta-in').value = root.querySelector('.ta-out').value;
    mode = 'decode';
    var bs = root.querySelectorAll('.ta-embed-mode button');
    for (var i = 0; i < bs.length; i++) bs[i].classList.toggle('on', bs[i].getAttribute('data-m') === 'decode');
    calc();
  });
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.htmlEntityConverter = { recalc: calc };
})();
