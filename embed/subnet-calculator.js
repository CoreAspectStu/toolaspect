/*!
 * ToolAspect Subnet Calculator Embed
 * Install: <div id="ta-subnet-calculator"></div>
 *          <script src="https://toolaspect.com/embed/subnet-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-subnet-calculator';
  var BASE = 'https://toolaspect.com/subnet-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;'
    + 'padding:10px 12px;font-size:1rem;font-family:ui-monospace,Menlo,Consolas,monospace;outline:none}'
    + '.ta-embed-input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-hint{color:var(--ta-muted);font-size:.78rem;margin:6px 0 12px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px}'
    + '.ta-embed-cell{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 10px}'
    + '.ta-embed-cell .lbl{font-size:.66rem;text-transform:uppercase;letter-spacing:.04em;color:var(--ta-muted)}'
    + '.ta-embed-cell .val{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.9rem;color:var(--ta-text);word-break:break-all}'
    + '.ta-embed-cell .val.big{color:var(--ta-accent);font-weight:700}'
    + '.ta-embed-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:12px}'
    + '.ta-embed-row label{color:var(--ta-muted);font-size:.82rem}'
    + '.ta-embed-select{background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:7px 10px;font-size:.85rem;font-family:inherit}'
    + '.ta-embed-table{width:100%;border-collapse:collapse;font-size:.8rem;margin-top:10px}'
    + '.ta-embed-table th,.ta-embed-table td{border:1px solid var(--ta-border);padding:5px 8px;text-align:left}'
    + '.ta-embed-table th{color:var(--ta-muted);font-size:.72rem;text-transform:uppercase}'
    + '.ta-embed-error{color:#dc2626;font-size:.85rem;margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'subnet-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="subnet-calculator"]')) {
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
    + '<div class="ta-embed-title">Subnet Calculator</div>'
    + '<div class="ta-embed-subtitle">IPv4 CIDR to mask, range, broadcast &amp; host count</div>'
    + '<div class="ta-embed-card">'
    + '<input class="ta-embed-input" id="ta-sub-input" spellcheck="false" value="192.168.10.0/26" aria-label="IP with CIDR or mask">'
    + '<p class="ta-embed-hint">e.g. 10.0.0.0/8 · 192.168.1.130/25 · 172.16.5.9/255.240.0.0</p>'
    + '<div id="ta-sub-result"></div>'
    + '<div class="ta-embed-row"><label>Split into</label>'
    + '<select class="ta-embed-select" id="ta-sub-split"><option>2</option><option selected>4</option><option>8</option><option>16</option></select>'
    + '<label>equal subnets</label></div>'
    + '<div id="ta-sub-splittable"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  // Subnet math mirrors rs/node-netmask (MIT) semantics for IPv4.
  function ip2long(s){var p=s.split('.');if(p.length!==4)return null;var n=0;for(var i=0;i<4;i++){var o=p[i];if(!/^\d{1,3}$/.test(o))return null;o=+o;if(o>255)return null;n=(n*256)+o;}return n>>>0;}
  function long2ip(n){return [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join('.');}
  function maskOf(bits){return bits===0?0:(0xFFFFFFFF<<(32-bits))>>>0;}
  function bitsOfOnes(m){var c=0;for(var i=31;i>=0;i--){if((m&(1<<i))>>>0)c++;}return c;}
  function isContiguousMask(m){var seenZero=false;for(var i=31;i>=0;i--){var bit=(m&(1<<i))>>>0;if(!bit)seenZero=true;else if(seenZero)return false;}return true;}
  function subnetOf(ipL,bits){var m=maskOf(bits),net=(ipL&m)>>>0,bc=(net|(~m>>>0))>>>0;var total=Math.pow(2,32-bits);var usable=bits<=30?total-2:(bits===31?2:1);var first=bits<=30?net+1:net,last=bits<=30?bc-1:bc;return {net:net,bc:bc,mask:m,first:first,last:last,total:total,usable:usable,bits:bits};}
  function parseInput(str){str=(str||'').trim();if(!str)return null;var idx=str.lastIndexOf('/');var ipPart=idx>=0?str.slice(0,idx):str;var maskPart=idx>=0?str.slice(idx+1):'24';var ip=ip2long(ipPart);if(ip===null)return null;var bits;if(/^\d{1,2}$/.test(maskPart)){bits=+maskPart;if(bits<0||bits>32)return null;}else{var m=ip2long(maskPart);if(m===null||!isContiguousMask(m))return null;bits=bitsOfOnes(m);}return {ip:ip,bits:bits};}
  function fmt(n){return n.toLocaleString('en-US');}
  function cell(lbl,val,cls){return '<div class="ta-embed-cell"><div class="lbl">'+lbl+'</div><div class="val'+(cls?' '+cls:'')+'">'+val+'</div></div>';}

  var resultEl = root.querySelector('#ta-sub-result');
  var splitEl = root.querySelector('#ta-sub-splittable');
  var inputEl = root.querySelector('#ta-sub-input');
  var splitSel = root.querySelector('#ta-sub-split');

  function render() {
    var p = parseInput(inputEl.value);
    if (!p) { resultEl.innerHTML = '<div class="ta-embed-error">Enter an address like 192.168.10.0/26 or 10.0.0.0/255.255.0.0.</div>'; splitEl.innerHTML=''; return; }
    var s = subnetOf(p.ip, p.bits);
    var h = '<div class="ta-embed-grid">';
    h += cell('Network', long2ip(s.net), 'big');
    h += cell('Broadcast', long2ip(s.bc), 'big');
    h += cell('Subnet mask', long2ip(s.mask) + ' /' + s.bits);
    h += cell('Wildcard', long2ip((~s.mask) >>> 0));
    h += cell('First host', long2ip(s.first));
    h += cell('Last host', long2ip(s.last));
    h += cell('Total addresses', fmt(s.total));
    h += cell('Usable hosts', fmt(s.usable), 'big');
    h += '</div>';
    resultEl.innerHTML = h;
    renderSplit(s);
  }
  function renderSplit(s) {
    var n = parseInt(splitSel.value, 10) || 4;
    if (s.bits + Math.round(Math.log2(n)) > 32) { splitEl.innerHTML = '<p class="ta-embed-hint">Cannot split /' + s.bits + ' into ' + n + '.</p>'; return; }
    var newBits = s.bits + Math.round(Math.log2(n));
    var per = Math.pow(2, 32 - newBits);
    var rows = '';
    for (var i = 0; i < n; i++) {
      var base = (s.net + i * per) >>> 0;
      var sub = subnetOf(base, newBits);
      rows += '<tr><td>' + long2ip(sub.net) + '/' + newBits + '</td><td>' + long2ip(sub.bc) + '</td><td>' + long2ip(sub.first) + ' – ' + long2ip(sub.last) + '</td><td>' + fmt(sub.usable) + '</td></tr>';
    }
    splitEl.innerHTML = '<table class="ta-embed-table"><thead><tr><th>Subnet</th><th>Broadcast</th><th>Usable range</th><th>Hosts</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }
  inputEl.addEventListener('input', render);
  splitSel.addEventListener('change', render);
  render();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.subnetCalculator = { recalc: render };
})();
