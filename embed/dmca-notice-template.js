/*!
 * ToolAspect DMCA Notice Template Embed
 * Install: <div id="ta-dmca-notice-template"></div>
 *          <script src="https://toolaspect.com/embed/dmca-notice-template.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dmca-notice-template';
  var BASE = 'https://toolaspect.com/dmca-notice-template/';

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
    + '.ta-embed-form-group input,.ta-embed-form-group select,.ta-embed-form-group textarea{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none;resize:vertical}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-row2{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-out{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:12px;white-space:pre-wrap;'
    + 'font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.72rem;line-height:1.55;color:var(--ta-text);max-height:300px;overflow-y:auto;margin-bottom:12px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '.ta-embed-note{font-size:.72rem;color:var(--ta-muted);text-align:center;margin-top:8px}'
    + '.ta-embed-status{font-size:.85rem;font-weight:600;margin-bottom:8px;color:var(--ta-accent)}'
    + '.ta-embed-status.ok{color:#16a34a}.ta-embed-status.bad{color:#dc2626}'
    + '.ta-embed-copy{display:block;width:100%;padding:10px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '@media(max-width:520px){.ta-embed-row2{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dmca-notice-template');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dmca-notice-template"]')) {
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
    + '<div class="ta-embed-title">DMCA Notice Template</div>'
    + '<div class="ta-embed-subtitle">Build a 17 U.S.C. §512(c)(3) takedown letter — six required elements, checked live</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-row2">'
    + '<div class="ta-embed-form-group"><label>Your name</label><input type="text" class="ta-name" value="Dana Rivera"></div>'
    + '<div class="ta-embed-form-group"><label>Email</label><input type="email" class="ta-email" value="dana@example.com"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Copyrighted work (title, type, where published)</label><textarea class="ta-work" rows="2">Harbor Light photography series — 12 coastal images first published at https://dana-rivera.example.com/portfolio</textarea></div>'
    + '<div class="ta-embed-form-group"><label>Infringing URL(s) — one per line</label><textarea class="ta-urls" rows="2">https://shop.example.net/posters/harbor-light-collection</textarea></div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-status">—</div>'
    + '<div class="ta-embed-out"></div>'
    + '<button type="button" class="ta-embed-copy">Copy notice</button>'
    + '</div>'
    + '<div class="ta-embed-note">Not legal advice. Nothing you type leaves your browser — the letter is assembled locally.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  // ---DMCA-ENGINE-START---
  function normList(s){return (s||'').split(/\n+/).map(function(x){return x.trim();}).filter(Boolean);}
  function longDate(iso){
    var d=new Date(iso+'T12:00:00Z');
    if(isNaN(d))return iso;
    return d.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
  }
  function buildNotice(v){
    var urls=normList(v.infUrls);
    var ownerLine=v.role==='agent'
      ?'I am authorized to act on behalf of the copyright owner of the work described below and submit this notice on that basis under the Digital Millennium Copyright Act, 17 U.S.C. §512(c).'
      :'I am the copyright owner of the work described below and submit this notice under the Digital Millennium Copyright Act, 17 U.S.C. §512(c).';
    var authority=v.role==='agent'?'authorized to act on behalf of the copyright owner':'the copyright owner';
    var to=v.provider?'To: The designated copyright agent of '+v.provider+' (per the U.S. Copyright Office DMCA Designated Agent Directory)':'To: The designated copyright agent of the service provider (per the U.S. Copyright Office DMCA Designated Agent Directory)';
    var lines=[];
    lines.push(to);
    lines.push('');
    lines.push('RE: Takedown notice under 17 U.S.C. §512(c) — infringing material hosted on your service');
    lines.push('');
    lines.push('To the designated copyright agent:');
    lines.push('');
    lines.push(ownerLine);
    lines.push('');
    lines.push('1. Signature (17 U.S.C. §512(c)(3)(A)(i)).');
    lines.push('   This notice is signed by '+v.senderName+' on '+longDate(v.noticeDate)+'. Electronic signature: /s/ '+v.senderName);
    lines.push('');
    lines.push('2. Identification of the copyrighted work (§512(c)(3)(A)(ii)).');
    lines.push('   '+(v.workDesc||'[WORK NOT IDENTIFIED]')+(urls.length>1?' (For multiple works, the description above serves as a representative list under §512(c)(3)(A)(ii).)':''));
    lines.push('');
    lines.push('3. Identification of the infringing material (§512(c)(3)(A)(iii)).');
    lines.push('   The material claimed to be infringing is located at the following URL(s), which are sufficient for the service provider to locate it:');
    if(urls.length){urls.forEach(function(u){lines.push('   - '+u);});}
    else{lines.push('   [NO INFRINGING URL PROVIDED — NOTICE IS DEFICIENT]');}
    lines.push('');
    lines.push('4. Contact information (§512(c)(3)(A)(iv)).');
    lines.push('   Name: '+v.senderName);
    if(v.address)lines.push('   Address: '+v.address);
    if(v.phone)lines.push('   Telephone: '+v.phone);
    lines.push('   Email: '+v.email);
    lines.push('');
    lines.push('5. Good-faith statement (§512(c)(3)(A)(v)).');
    if(v.goodFaith){
      lines.push('   I have a good-faith belief that the use of the material described above is not authorized by the copyright owner, its agent, or the law.');
    }else{
      lines.push('   [GOOD-FAITH STATEMENT OMITTED — NOTICE IS DEFICIENT UNDER §512(c)(3)(B)]');
    }
    lines.push('');
    lines.push('6. Statement of accuracy and authority (§512(c)(3)(A)(vi)).');
    if(v.perjury){
      lines.push('   I state that the information in this notice is accurate and, under penalty of perjury, that I am '+authority+' of the exclusive right that is allegedly infringed.');
    }else{
      lines.push('   [ACCURACY/PERJURY STATEMENT OMITTED — NOTICE IS DEFICIENT UNDER §512(c)(3)(B)]');
    }
    lines.push('');
    lines.push('I request that you remove or disable access to the infringing material expeditiously, as required by 17 U.S.C. §512(c)(1)(C).');
    lines.push('');
    lines.push('/s/ '+v.senderName);
    lines.push(v.senderName);
    if(v.email)lines.push(v.email);
    var text=lines.join('\n');
    var elements={
      i:!!(v.senderName&&v.noticeDate),
      ii:!!(v.workDesc&&v.workDesc.trim()),
      iii:urls.length>0,
      iv:!!(v.email&&v.email.trim()),
      v:!!v.goodFaith,
      vi:!!v.perjury
    };
    return {text:text,elements:elements,urls:urls,words:text.split(/\s+/).length};
  }
  // ---DMCA-ENGINE-END---

  function readForm() {
    return {
      senderName: root.querySelector('.ta-name').value.trim() || '[NAME MISSING]',
      role: 'owner',
      noticeDate: new Date().toISOString().slice(0, 10),
      workDesc: root.querySelector('.ta-work').value,
      provider: '',
      infUrls: root.querySelector('.ta-urls').value,
      email: root.querySelector('.ta-email').value.trim(),
      phone: '',
      address: '',
      goodFaith: true,
      perjury: true
    };
  }

  function render() {
    var out = buildNotice(readForm());
    root.querySelector('.ta-embed-out').textContent = out.text;
    var n = ['i','ii','iii','iv','v','vi'].filter(function(k){return out.elements[k];}).length;
    var st = root.querySelector('.ta-embed-status');
    st.textContent = n + '/6 elements — ' + (n === 6 ? 'compliant with 17 U.S.C. §512(c)(3)(A)' : 'deficient notice: a provider may disregard it');
    st.className = 'ta-embed-status ' + (n === 6 ? 'ok' : 'bad');
  }

  root.querySelector('.ta-embed-copy').addEventListener('click', function () {
    var t = root.querySelector('.ta-embed-out').textContent;
    var b = root.querySelector('.ta-embed-copy');
    function done(){ b.textContent = 'Copied ✓'; setTimeout(function(){ b.textContent = 'Copy notice'; }, 1600); }
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t).then(done); }
    else {
      var ta = document.createElement('textarea');
      ta.value = t;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      done();
    }
  });

  root.querySelectorAll('input,textarea').forEach(function (el) {
    el.addEventListener('input', render);
    el.addEventListener('change', render);
  });
  render();
})();
