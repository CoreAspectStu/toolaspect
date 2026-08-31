/*!
 * ToolAspect Certificate Decoder Embed
 * Install: <div id="ta-certificate-decoder"></div>
 *          <script src="https://toolaspect.com/embed/certificate-decoder.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-certificate-decoder';
  var BASE = 'https://toolaspect.com/certificate-decoder/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;--ta-ok:#16a34a;--ta-warn:#d97706;--ta-bad:#dc2626;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa;--ta-ok:#4ade80;--ta-warn:#fbbf24;--ta-bad:#f87171}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-root textarea{width:100%;min-height:130px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.8rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;resize:vertical;outline:none}'
    + '.ta-embed-root textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-btn{display:block;width:100%;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 12px;'
    + 'font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:10px}'
    + '.ta-embed-kv{display:grid;grid-template-columns:130px 1fr;gap:2px 10px;font-size:.8rem;margin-top:4px}'
    + '.ta-embed-kv .k{color:var(--ta-muted);font-weight:600}'
    + '.ta-embed-kv .v{color:var(--ta-text);word-break:break-all}'
    + '.ta-embed-kv .v.ok{color:var(--ta-ok)}.ta-embed-kv .v.warn{color:var(--ta-warn)}.ta-embed-kv .v.bad{color:var(--ta-bad)}'
    + '.ta-embed-summary{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:16px;margin-bottom:12px}'
    + '.ta-embed-summary h4{margin:0 0 8px;font-size:.9rem}'
    + '.ta-embed-tree{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:12px;padding:14px;margin-bottom:12px}'
    + '.ta-embed-tree h4{margin:0 0 8px;font-size:.85rem;color:var(--ta-accent)}'
    + '.ta-embed-tree pre{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.68rem;line-height:1.5;overflow-x:auto;white-space:pre;color:var(--ta-text);margin:0}'
    + '.ta-embed-err{background:var(--ta-surface);border:1px solid var(--ta-bad);color:var(--ta-bad);border-radius:8px;padding:10px 12px;font-size:.8rem;margin-bottom:12px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'certificate-decoder');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="certificate-decoder"]')) {
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
    + '<div class="ta-embed-title">Certificate Decoder</div>'
    + '<div class="ta-embed-subtitle">PEM certificates, CSRs and keys &rarr; ASN.1 tree + readable fields, 100% in-browser</div>'
    + '<div class="ta-embed-card">'
    + '<textarea class="ta-pem" spellcheck="false" placeholder="-----BEGIN CERTIFICATE----- (or CERTIFICATE REQUEST / PRIVATE KEY / PUBLIC KEY)"></textarea>'
    + '<button type="button" class="ta-embed-btn ta-decode">Decode PEM</button>'
    + '</div>'
    + '<div class="ta-out"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function render() {
    var out = root.querySelector('.ta-out');
    var text = root.querySelector('.ta-pem').value;
    out.innerHTML = '';
    if (!text.trim()) return;
    var results;
    try { results = decodeAll(text); }
    catch (e) {
      out.innerHTML = '<div class="ta-embed-err">Could not decode: ' + esc(String(e && e.message || e)) + '</div>';
      return;
    }
    if (!results.length) {
      out.innerHTML = '<div class="ta-embed-err">No PEM blocks found.</div>';
      return;
    }
    var now = new Date();
    results.forEach(function (r) {
      var sc = document.createElement('div');
      sc.className = 'ta-embed-summary';
      var h = '<h4>' + esc(r.label) + '</h4><div class="ta-embed-kv">';
      renderSummary(r.summary, now).forEach(function (pair) {
        h += '<div class="k">' + esc(pair[0]) + '</div><div class="v' + (pair[2] ? ' ' + pair[2] : '') + '">' + esc(pair[1]) + '</div>';
      });
      h += '</div>';
      sc.innerHTML = h;
      out.appendChild(sc);
      var tc = document.createElement('div');
      tc.className = 'ta-embed-tree';
      tc.innerHTML = '<h4>ASN.1 tree (' + r.bytes.length + ' DER bytes)</h4><pre>' + esc(renderTreeText(r.bytes, r.parsed.nodes)) + '</pre>';
      out.appendChild(tc);
    });
  }

  root.addEventListener('input', render);
  root.addEventListener('click', function (e) { if (e.target.classList.contains('ta-decode')) render(); });

  // ===== ASN.1 / PEM engine (shared with the tool page) =====

var OID_NAMES={
'1.2.840.113549.1.1.1':'rsaEncryption','1.2.840.113549.1.1.4':'md5WithRSAEncryption','1.2.840.113549.1.1.5':'sha1WithRSAEncryption',
'1.2.840.113549.1.1.10':'rsassaPss','1.2.840.113549.1.1.11':'sha256WithRSAEncryption','1.2.840.113549.1.1.12':'sha384WithRSAEncryption','1.2.840.113549.1.1.13':'sha512WithRSAEncryption',
'1.2.840.10045.2.1':'id-ecPublicKey','1.2.840.10045.4.1':'ecdsa-with-SHA1','1.2.840.10045.4.3.2':'ecdsa-with-SHA256','1.2.840.10045.4.3.3':'ecdsa-with-SHA384','1.2.840.10045.4.3.4':'ecdsa-with-SHA512',
'1.2.840.10045.3.1.7':'prime256v1 (P-256)','1.3.132.0.34':'P-384','1.3.132.0.35':'P-521','1.3.132.0.10':'secp256k1',
'1.3.101.112':'Ed25519','1.3.101.113':'Ed448','1.2.840.113549.1.1.7':'rsaOAEP',
'2.5.4.3':'CN','2.5.4.6':'C','2.5.4.7':'L','2.5.4.8':'ST','2.5.4.10':'O','2.5.4.11':'OU','2.5.4.5':'serialNumber','2.5.4.9':'street','1.2.840.113549.1.9.1':'emailAddress',
'2.5.29.17':'subjectAltName','2.5.29.19':'basicConstraints','2.5.29.15':'keyUsage','2.5.29.37':'extKeyUsage','2.5.29.14':'subjectKeyIdentifier','2.5.29.35':'authorityKeyIdentifier','2.5.29.31':'cRLDistributionPoints','2.5.29.32':'certificatePolicies','1.3.6.1.5.5.7.1.1':'authorityInfoAccess','2.5.29.9':'subjectDirectoryAttributes','2.5.29.20':'cRLNumber','2.5.29.28':'issuingDistributionPoint',
'1.3.6.1.5.5.7.3.1':'serverAuth','1.3.6.1.5.5.7.3.2':'clientAuth','1.3.6.1.5.5.7.3.3':'codeSigning','1.3.6.1.5.5.7.3.4':'emailProtection','1.3.6.1.5.5.7.3.8':'timeStamping',
'1.2.840.113549.1.5.13':'PBES2','1.2.840.113549.1.5.12':'PBKDF2','2.16.840.1.101.3.4.1.42':'aes-256-cbc','2.16.840.1.101.3.4.1.22':'aes-192-cbc','2.16.840.1.101.3.4.1.2':'aes-128-cbc','1.2.840.113549.2.9':'hmacWithSHA256',
'1.2.840.113549.1.9.7':'challengePassword','2.5.29.21':'cRLReason'
};
var ATTR_NAMES={'2.5.4.3':'CN','2.5.4.6':'C','2.5.4.7':'L','2.5.4.8':'ST','2.5.4.10':'O','2.5.4.11':'OU','2.5.4.5':'serialNumber','2.5.4.9':'street','1.2.840.113549.1.9.1':'emailAddress','2.5.4.46':'dnQualifier','2.5.4.4':'SN','2.5.4.42':'GN','0.9.2342.19200300.100.1.25':'DC','0.9.2342.19200300.100.1.1':'UID'};
function b64decode(s){
  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',lookup={};
  for(var i=0;i<alphabet.length;i++)lookup[alphabet[i]]=i;
  s=s.replace(/[^A-Za-z0-9+/=]/g,'');
  var out=[],bits=0,acc=0;
  for(var j=0;j<s.length;j++){
    var c=s[j];
    if(c==='=')break;
    var v=lookup[c];
    if(v===undefined)continue;
    acc=(acc<<6)|v;bits+=6;
    if(bits>=8){bits-=8;out.push((acc>>bits)&0xff);}
  }
  return out;
}
function hex(bytes){var s='';for(var i=0;i<bytes.length;i++)s+=(bytes[i]<16?'0':'')+bytes[i].toString(16).toUpperCase();return s;}
function parseTLV(bytes,off,depth,out){
  var len=bytes.length;
  if(off>=len)throw new Error('truncated at offset '+off);
  var start=off,b0=bytes[off++];
  var cls=b0>>6,constructed=((b0>>5)&1)===1,num=b0&0x1f,tagBytes=[b0];
  if(num===0x1f){ // high tag number form
    num=0;
    while(true){
      if(off>=len)throw new Error('truncated tag');
      var tb=bytes[off++];tagBytes.push(tb);
      num=(num<<7)|(tb&0x7f);
      if(!(tb&0x80))break;
    }
  }
  if(off>=len)throw new Error('truncated length');
  var lb=bytes[off++];
  var contentLen;
  if(lb<0x80)contentLen=lb;
  else if(lb===0x80)throw new Error('indefinite lengths not allowed in DER (offset '+start+')');
  else{
    var n=lb&0x7f;
    if(n>4)throw new Error('length too large at offset '+start);
    contentLen=0;
    for(var k=0;k<n;k++){
      if(off>=len)throw new Error('truncated length');
      contentLen=(contentLen<<8)|bytes[off++];
    }
  }
  var contentOff=off;
  if(contentOff+contentLen>len)throw new Error('content overruns buffer at offset '+start+' (len '+contentLen+', have '+(len-contentOff)+')');
  var node={off:start,headerLen:contentOff-start,len:contentLen,cls:cls,constructed:constructed,num:num,tagBytes:tagBytes,contentOff:contentOff,depth:depth};
  out.push(node);
  if(constructed&&(cls===0||cls===2)){
    var p=contentOff,end=contentOff+contentLen;
    var guard=0;
    while(p<end){
      if(guard++>4096)throw new Error('too many children at offset '+start);
      parseTLV(bytes,p,depth+1,out);
      var child=out[out.length-1];
      p=child.off+child.headerLen+child.len;
    }
  }
  return node;
}
function parseDer(bytes){
  var nodes=[];
  var root=parseTLV(bytes,0,0,nodes);
  if(root.off+root.headerLen+root.len!==bytes.length)throw new Error('trailing bytes after DER structure ('+(bytes.length-(root.off+root.headerLen+root.len))+' extra)');
  return {root:root,nodes:nodes};
}
function nodeBytes(bytes,node){return bytes.slice(node.contentOff,node.contentOff+node.len);}
function childrenOf(bytes,node,nodes){
  return nodes.filter(function(n){return n.depth===node.depth+1&&n.off>=node.contentOff&&n.off+n.headerLen+n.len<=node.contentOff+node.len;});
}
function decodeOID(b){
  if(!b.length)return '';
  var vals=[],first=b[0];
  vals.push(first<40?0:(first<80?1:2),first<40?first:(first<80?first-40:first-80));
  var acc=0;
  for(var i=1;i<b.length;i++){
    acc=(acc<<7)|(b[i]&0x7f);
    if(!(b[i]&0x80)){vals.push(acc);acc=0;}
  }
  return vals.join('.');
}
function oidName(o){return OID_NAMES[o]?OID_NAMES[o]+' ('+o+')':o;}
function bitLen(b){
  var i=0;
  while(i<b.length&&b[i]===0)i++;
  if(i===b.length)return 0;
  var bits=(b.length-i-1)*8;
  var v=b[i];while(v){bits++;v>>=1;}
  return bits;
}
function toIntStr(b){
  if(b.length>8)return null;
  var v=0;
  for(var i=0;i<b.length;i++)v=v*256+b[i];
  return String(v);
}
function decodeTime(str){
  var m=str.match(/^(\d{2}|\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})?Z?$/);
  if(!m)return null;
  var y=parseInt(m[1],10);
  if(m[1].length===2)y+=y<50?2000:1900;
  return new Date(Date.UTC(y,parseInt(m[2],10)-1,parseInt(m[3],10),parseInt(m[4],10),parseInt(m[5],10),m[6]?parseInt(m[6],10):0));
}
function decodeUtf8(b){
  var s='';
  for(var i=0;i<b.length;i++){
    if(b[i]<0x80)s+=String.fromCharCode(b[i]);
    else{
      var need=b[i]>=0xf0?4:(b[i]>=0xe0?3:2),cp=b[i]&(need===2?0x1f:(need===3?0x0f:0x07));
      for(var k=1;k<need&&i+k<b.length;k++)cp=(cp<<6)|(b[i+k]&0x3f);
      i+=need-1;
      s+=String.fromCharCode(cp);
    }
  }
  return s;
}
function decodeStr(b,type){
  try{
    if(type===12||type===18||type===22||type===19)return decodeUtf8(b);
    if(type===20){var s='';for(var i=0;i<b.length;i++)s+=String.fromCharCode(b[i]);return s;}
    if(type===30){var u='';for(var j=0;j+1<b.length;j+=2)u+=String.fromCharCode((b[j]<<8)|b[j+1]);return u;}
  }catch(e){}
  return null;
}
function clsName(cls){return ['UNIVERSAL','APPLICATION','CONTEXT','PRIVATE'][cls];}
var TAGS={1:'BOOLEAN',2:'INTEGER',3:'BIT STRING',4:'OCTET STRING',5:'NULL',6:'OBJECT IDENTIFIER',10:'ENUMERATED',12:'UTF8String',16:'SEQUENCE',17:'SET',19:'PrintableString',20:'T61String',21:'VideotexString',22:'IA5String',23:'UTCTime',24:'GeneralizedTime',28:'CharacterString',30:'BMPString'};
function tagName(node){
  if(node.cls===0&&TAGS[node.num])return TAGS[node.num];
  if(node.cls===2)return '['+node.num+']';
  if(node.cls===3)return '['+node.num+'] (private)';
  return 'TAG-0x'+node.num.toString(16);
}
function decodeNode(bytes,node){
  var b=nodeBytes(bytes,node);
  if(node.cls===0){
    switch(node.num){
      case 1:return b.length?String(b[0]!==0):'';
      case 2:
        var hx=hex(b).replace(/^0+/,'')||'00';
        return '0x'+hx+(b.length<=8?' (= '+toIntStr(b)+')':'');
      case 3:
        var ub=b.length?b[0]:0;
        return 'unused bits '+ub+', '+Math.max(0,(b.length-1)*8-ub)+' bits, 0x'+hex(b.slice(1,9))+(b.length>10?'…':'');
      case 4:return b.length<=16?hex(b):hex(b.slice(0,16))+'… ('+b.length+' bytes)';
      case 5:return '';
      case 6:return oidName(decodeOID(b));
      case 10:return '0x'+hex(b);
      case 23:case 24:
        var t='';
        for(var q=0;q<b.length;q++)t+=String.fromCharCode(b[q]);
        var d=decodeTime(t);
        return t+(d?' → '+d.toISOString().replace(/\.\d+Z$/,'Z'):'');
      case 12:case 18:case 19:case 22:case 20:case 30:
        var s2=decodeStr(b,node.num);
        return s2!==null?'"'+s2+'"':hex(b).slice(0,32);
    }
  }
  return b.length&&b.length<=12?hex(b):'';
}
// ---- high-level extractors ----
function readName(bytes,nameNode,nodes){
  var parts=[];
  childrenOf(bytes,nameNode,nodes).forEach(function(rdn){
    var ATV=childrenOf(bytes,rdn,nodes).map(function(tav){
      var kids=childrenOf(bytes,tav,nodes);
      if(kids.length>=2){
        var oid=decodeOID(nodeBytes(bytes,kids[0]));
        var vn=ATTR_NAMES[oid]||oid;
        var val=decodeNode(bytes,kids[1]);
        return vn+'='+(val||'').replace(/^"|"$/g,'');
      }
      return '';
    }).filter(Boolean);
    if(ATV.length)parts.push(ATV.join('+'));
  });
  return parts.join(', ');
}
function readAlgId(bytes,algNode,nodes){
  var kids=childrenOf(bytes,algNode,nodes);
  if(!kids.length)return null;
  return decodeOID(nodeBytes(bytes,kids[0]));
}
function readSpki(bytes,spkiNode,nodes){
  var kids=childrenOf(bytes,spkiNode,nodes);
  if(kids.length<2)return null;
  var alg=childrenOf(bytes,kids[0],nodes);
  var algOid=alg.length?decodeOID(nodeBytes(bytes,alg[0])):'';
  var bitNode=kids[1];
  var bitBytes=nodeBytes(bytes,bitNode);
  var keyBytes=bitBytes.slice(1); // strip unused-bits byte
  if(algOid==='1.2.840.113549.1.1.1'){
    var inner=parseDer(keyBytes);
    var comps=childrenOf(keyBytes,inner.root,inner.nodes);
    if(comps.length>=2){
      var n=nodeBytes(keyBytes,comps[0]);
      return {type:'RSA',bits:bitLen(n),exponent:toIntStr(nodeBytes(keyBytes,comps[1]))};
    }
  }
  if(algOid==='1.2.840.10045.2.1'){
    var curve='';
    if(alg.length>1)curve=oidName(decodeOID(nodeBytes(bytes,alg[1])));
    return {type:'ECDSA',bits:curve.indexOf('P-256')>=0?256:(curve.indexOf('P-384')>=0?384:(curve.indexOf('P-521')>=0?521:0)),curve:curve};
  }
  if(algOid==='1.3.101.112')return {type:'Ed25519',bits:256};
  return {type:oidName(algOid),bits:0};
}
function readExtensions(bytes,extsNode,nodes){
  var out=[];
  childrenOf(bytes,extsNode,nodes).forEach(function(seq){
    var kids=childrenOf(bytes,seq,nodes);
    if(!kids.length)return;
    var oid=decodeOID(nodeBytes(bytes,kids[0]));
    var critical=kids.length>1&&kids[1].cls===0&&kids[1].num===1&&nodeBytes(bytes,kids[1])[0]!==0;
    var valIdx=kids.length-1;
    var raw=kids[valIdx].cls===0&&kids[valIdx].num===4?nodeBytes(bytes,kids[valIdx]):nodeBytes(bytes,kids[valIdx]);
    var decoded=null;
    try{
      if(oid==='2.5.29.17'){ // SAN
        var p=parseDer(raw);
        var sans=[];
        childrenOf(raw,p.root,p.nodes).forEach(function(g){
          var ctx=g.cls===2?g.num:null;
          var vb=nodeBytes(raw,g);
          if(ctx===2)sans.push('DNS:'+decodeUtf8(vb));
          else if(ctx===1)sans.push('email:'+decodeUtf8(vb));
          else if(ctx===7)sans.push('IP:'+(vb[0]+'.'+vb[1]+'.'+vb[2]+'.'+vb[3]));
          else if(ctx===8)sans.push('URI:'+decodeUtf8(vb));
          else sans.push('['+ctx+']:'+hex(vb).slice(0,24));
        });
        decoded=sans.join(', ');
      }else if(oid==='2.5.29.19'){
        var p2=parseDer(raw);
        var ck=childrenOf(raw,p2.root,p2.nodes);
        var ca=false,pathLen='';
        ck.forEach(function(c2){if(c2.cls===0&&c2.num===1)ca=nodeBytes(raw,c2)[0]!==0;if(c2.cls===0&&c2.num===2)pathLen=toIntStr(nodeBytes(raw,c2));});
        decoded='CA:'+String(ca).toUpperCase()+(pathLen?', pathLen '+pathLen:'');
      }else if(oid==='2.5.29.15'){
        var bits=nodeBytes(raw,parseDer(raw).root); // root = BIT STRING wrapper? keyUsage ext value = BIT STRING directly
        var ub=bits.length?bits[0]:0;
        var names=['digitalSignature','nonRepudiation','keyEncipherment','dataEncipherment','keyAgreement','keyCertSign','cRLSign','encipherOnly','decipherOnly'];
        var setBits=[];
        for(var i=0;i<names.length&&i<(bits.length-1)*8-ub;i++){
          var byteIdx=1+Math.floor(i/8),bit=7-(i%8)-(bits.length-2>0?0:ub%8);
          if((bits[byteIdx]>>(7-(i%8)))&1)setBits.push(names[i]);
        }
        decoded=setBits.join(', ');
      }else if(oid==='2.5.29.37'){
        var p3=parseDer(raw);
        var ekus=[];
        childrenOf(raw,p3.root,p3.nodes).forEach(function(o){ekus.push(oidName(decodeOID(nodeBytes(raw,o))));});
        decoded=ekus.join(', ');
      }else if(oid==='2.5.29.14'){
        decoded=hex(raw);
      }
    }catch(e){}
    out.push({oid:oid,name:OID_NAMES[oid]||oid,critical:critical,decoded:decoded,rawLen:raw.length});
  });
  return out;
}
function summarizeCertificate(bytes,root,nodes){
  var top=childrenOf(bytes,root,nodes);
  if(!top.length)return null;
  var tbs=top[0];
  var kids=childrenOf(bytes,tbs,nodes);
  var i=0,version=1;
  if(kids.length&&kids[0].cls===2&&kids[0].num===0){
    var vk=childrenOf(bytes,kids[0],nodes);
    if(vk.length)version=toIntStr(nodeBytes(bytes,vk[0]))*1+1;
    i=1;
  }
  var serialNode=kids[i],sigNode=kids[i+1],issuerNode=kids[i+2],validityNode=kids[i+3],subjectNode=kids[i+4],spkiNode=kids[i+5],extsNode=null;
  kids.forEach(function(k){if(k.cls===2&&k.num===3)extsNode=k;});
  var sb=nodeBytes(bytes,serialNode);
  var v=childrenOf(bytes,validityNode,nodes);
  var nb=decodeTime(decodeNode(bytes,v[0]).split(' →')[0]),na=decodeTime(decodeNode(bytes,v[1]).split(' →')[0]);
  var spki=readSpki(bytes,spkiNode,nodes);
  var exts=extsNode?readExtensions(bytes,childrenOf(bytes,extsNode,nodes)[0],nodes):[];
  return {
    type:'Certificate',version:version,
    serial:'0x'+hex(sb).replace(/^0+/,''),
    serialBytes:sb.length,
    sigAlg:oidName(readAlgId(bytes,sigNode,nodes)||''),
    issuer:readName(bytes,issuerNode,nodes),
    subject:readName(bytes,subjectNode,nodes),
    notBefore:nb,notAfter:na,
    spki:spki,extensions:exts,
    outerSigAlg:oidName(readAlgId(bytes,top[1],nodes)||'')
  };
}
function summarizeCsr(bytes,root,nodes){
  var top=childrenOf(bytes,root,nodes);
  if(!top.length)return null;
  var info=top[0];
  var kids=childrenOf(bytes,info,nodes);
  var subject=kids[1],spki=kids[2];
  var res={type:'Certificate Request',subject:readName(bytes,subject,nodes),spki:readSpki(bytes,spki,nodes),sigAlg:oidName(readAlgId(bytes,top[1],nodes)||''),challenge:''};
  kids.forEach(function(k){
    if(k.cls===2&&k.num===0){
      var attrs=childrenOf(bytes,k,nodes);
      attrs.forEach(function(a){
        var ak=childrenOf(bytes,a,nodes);
        if(ak.length===2){
          var oid=decodeOID(nodeBytes(bytes,ak[0]));
          if(oid==='1.2.840.113549.1.9.7')res.challenge=decodeUtf8(nodeBytes(bytes,ak[1]));
          if(oid==='1.2.840.113549.1.9.14'){
            // extensionRequest: SET { SEQUENCE of Extension } — nodeBytes strips the SET, parseDer reads the inner SEQ
            var extSeq=nodeBytes(bytes,ak[1]);
            var px=parseDer(extSeq);
            res.requestedSans=readExtensions(extSeq,px.root,px.nodes);
          }
        }
      });
    }
  });
  return res;
}
function summarizeKey(bytes,root,nodes,label){
  var kids=childrenOf(bytes,root,nodes);
  if(label==='RSA PRIVATE KEY'){
    var n=nodeBytes(bytes,kids[1]);
    return {type:'RSA Private Key (PKCS#1)',bits:bitLen(n),exponent:toIntStr(nodeBytes(bytes,kids[2]))};
  }
  if(label==='EC PRIVATE KEY'){
    var curve='';
    kids.forEach(function(k){if(k.cls===2&&k.num===0){var ck=childrenOf(bytes,k,nodes);if(ck.length)curve=oidName(decodeOID(nodeBytes(bytes,ck[0])));}});
    return {type:'EC Private Key (SEC 1)',curve:curve,bits:curve.indexOf('P-256')>=0?256:(curve.indexOf('P-384')>=0?384:(curve.indexOf('P-521')>=0?521:256))};
  }
  if(label==='ENCRYPTED PRIVATE KEY'){
    // EncryptedPrivateKeyInfo ::= SEQUENCE { encryptionAlgorithm AlgID, encryptedData OCTET }
    var alg=childrenOf(bytes,kids[0],nodes);
    var cipher=alg.length?oidName(decodeOID(nodeBytes(bytes,alg[0]))):'';
    if(alg.length>1&&decodeOID(nodeBytes(bytes,alg[0]))==='1.2.840.113549.1.5.13'){
      // PBES2: params = SEQ{ kdf SEQ, cipher SEQ } — show the real encryption scheme
      var pnodes=childrenOf(bytes,alg[1],nodes);
      if(pnodes.length>=2){
        var cs=childrenOf(bytes,pnodes[1],nodes);
        if(cs.length)cipher='PBES2 → '+oidName(decodeOID(nodeBytes(bytes,cs[0])));
      }
    }
    return {type:'Encrypted Private Key (PKCS#8)',encrypted:true,cipher:cipher};
  }
  if(label==='PRIVATE KEY'){
    var alg2=childrenOf(bytes,kids[1],nodes);
    var algOid2=alg2.length?decodeOID(nodeBytes(bytes,alg2[0])):'';
    var inner=nodeBytes(bytes,kids[2]);
    var px=parseDer(inner);
    if(algOid2==='1.2.840.113549.1.1.1'){
      var comps=childrenOf(inner,px.root,px.nodes);
      return {type:'RSA Private Key (PKCS#8)',bits:bitLen(nodeBytes(inner,comps[1])),exponent:toIntStr(nodeBytes(inner,comps[2]))};
    }
    if(algOid2==='1.2.840.10045.2.1'){
      var curve2='';
      if(alg2.length>1)curve2=oidName(decodeOID(nodeBytes(bytes,alg2[1])));
      return {type:'EC Private Key (PKCS#8)',curve:curve2,bits:256};
    }
    return {type:'Private Key (PKCS#8)',alg:oidName(algOid2)};
  }
  if(label==='PUBLIC KEY')return {type:'Public Key (SPKI)',spki:readSpki(bytes,root,nodes)};
  return {type:label};
}
function findBlocks(text){
  var re=/-----BEGIN ([A-Z0-9 ]+)-----([\s\S]*?)-----END \1-----/g,blocks=[],m;
  while((m=re.exec(text))!==null)blocks.push({label:m[1],b64:m[2]});
  return blocks;
}
function decodeAll(text){
  var blocks=findBlocks(text);
  var results=[];
  blocks.forEach(function(b){
    var bytes=b64decode(b.b64);
    if(!bytes.length)throw new Error('empty base64 payload in '+b.label+' block');
    var parsed=parseDer(bytes);
    var sum=null;
    try{
      if(/CERTIFICATE$/.test(b.label)&&b.label!=='CERTIFICATE REQUEST')sum=summarizeCertificate(bytes,parsed.root,parsed.nodes);
      else if(b.label==='CERTIFICATE REQUEST')sum=summarizeCsr(bytes,parsed.root,parsed.nodes);
      else sum=summarizeKey(bytes,parsed.root,parsed.nodes,b.label);
    }catch(e){sum={type:b.label,partial:true,err:String(e&&e.message||e)};}
    results.push({label:b.label,bytes:bytes,parsed:parsed,summary:sum});
  });
  return results;
}
function fmtDate(d){return d?d.toISOString().replace(/\.\d+Z$/,' UTC'):'—';}
function daysBetween(a,b){return Math.round((b-a)/86400000);}
function renderSummary(sum,now){
  var kv=[];
  if(!sum)return kv;
  if(sum.type==='Certificate'){
    kv.push(['Type','X.509 Certificate (v'+sum.version+')']);
    kv.push(['Subject',sum.subject]);
    kv.push(['Issuer',sum.issuer]);
    kv.push(['Serial',sum.serial+' ('+sum.serialBytes+' bytes)']);
    kv.push(['Signature Algorithm',sum.sigAlg+(sum.outerSigAlg&&sum.outerSigAlg!==sum.sigAlg?' / outer '+sum.outerSigAlg:'')]);
    kv.push(['Valid From',fmtDate(sum.notBefore)]);
    var days=daysBetween(sum.notBefore,sum.notAfter);
    var left=sum.notAfter?daysBetween(now,sum.notAfter):0;
    kv.push(['Valid Until',fmtDate(sum.notAfter)+' — '+days+'-day lifetime']);
    kv.push(['Days Remaining',left>0?left+' days':(left===0?'expires today':'EXPIRED '+(-left)+' days ago'),left>30?'ok':(left>0?'warn':'bad')]);
    if(sum.spki)kv.push(['Public Key',sum.spki.type+(sum.spki.bits?' '+sum.spki.bits+'-bit':'')+(sum.spki.exponent?', exponent '+sum.spki.exponent:'')+(sum.spki.curve?', '+sum.spki.curve:'')]);
    sum.extensions.forEach(function(e){
      kv.push(['Extension: '+e.name+(e.critical?' (critical)':''),e.decoded||e.rawLen+' bytes']);
    });
  }else if(sum.type==='Certificate Request'){
    kv.push(['Type','PKCS#10 Certificate Request']);
    kv.push(['Subject',sum.subject]);
    if(sum.spki)kv.push(['Public Key',sum.spki.type+(sum.spki.bits?' '+sum.spki.bits+'-bit':'')+(sum.spki.curve?', '+sum.spki.curve:'')]);
    kv.push(['Signature Algorithm',sum.sigAlg]);
    if(sum.challenge)kv.push(['Challenge Password',sum.challenge]);
    if(sum.requestedSans)sum.requestedSans.forEach(function(e){kv.push(['Requested: '+e.name,e.decoded||e.rawLen+' bytes']);});
  }else{
    kv.push(['Type',sum.type]);
    if(sum.encrypted){kv.push(['Encrypted','Yes — structure shown, no decryption attempted','warn']);if(sum.cipher)kv.push(['Cipher',sum.cipher]);}
    if(sum.bits)kv.push(['Key Size',sum.bits+' bits']);
    if(sum.exponent)kv.push(['Exponent',sum.exponent]);
    if(sum.curve)kv.push(['Curve',sum.curve]);
    if(sum.spki)kv.push(['Public Key',sum.spki.type+(sum.spki.bits?' '+sum.spki.bits+'-bit':'')+(sum.spki.curve?', '+sum.spki.curve:'')]);
  }
  return kv;
}
function renderTreeText(bytes,nodes){
  var lines=[];
  nodes.forEach(function(node){
    var indent='';
    for(var i=0;i<node.depth;i++)indent+='  ';
    var off=('      '+node.off).slice(-6);
    var hdr=hex(bytes.slice(node.off,node.contentOff));
    var val=decodeNode(bytes,node);
    var cons=node.constructed?'cons':'';
    lines.push(off+'  '+indent+hdr+' '+tagName(node)+' l='+node.len+(node.constructed?' ['+cons+']':'')+(val?'  '+val:''));
  });
  return lines.join('\n');
}


  render();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.certificateDecoder = { recalc: render };
})();
