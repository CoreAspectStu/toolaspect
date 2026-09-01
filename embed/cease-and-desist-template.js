/*!
 * ToolAspect Cease and Desist Template Embed
 * Install: <div id="ta-cease-and-desist-template"></div>
 *          <script src="https://toolaspect.com/embed/cease-and-desist-template.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-cease-and-desist-template';
  var BASE = 'https://toolaspect.com/cease-and-desist-template/';

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
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:20px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.6rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-line{font-size:.92rem;margin-top:8px;color:var(--ta-text)}'
    + '.ta-embed-note{font-size:.75rem;color:var(--ta-muted);margin-top:8px;line-height:1.5}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'cease-and-desist-template');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="cease-and-desist-template"]')) {
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
    + '<div class="ta-embed-title">Cease and Desist Deadline</div>'
    + '<div class="ta-embed-subtitle">When your demand letter comes due</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Send date</label><input type="date" class="ta-send" value="2026-09-02"></div>'
    + '<div class="ta-embed-form-group"><label>Response window</label><select class="ta-days">'
    + '<option value="7">7 days</option><option value="10" selected>10 days</option>'
    + '<option value="14">14 days</option><option value="30">30 days</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Payment demand, if any ($ — optional)</label><input type="number" class="ta-pay" value="4200" min="0" step="50"></div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big ta-cal">—</div>'
    + '<div class="ta-embed-sub ta-sub"></div>'
    + '<div class="ta-embed-line ta-biz"></div>'
    + '<div class="ta-embed-line ta-let"></div>'
    + '<div class="ta-embed-note">Demand letters conventionally count calendar days; business days are the norm in takedown law. The letter this template builds states its convention. Not legal advice.</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  // ---CD-EMBED-MATH-START---
  function fmtDate(iso){
    var d=new Date(iso+'T12:00:00Z');
    if(isNaN(d))return '—';
    return d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'});
  }
  function calDate(iso,n){
    var d=new Date(iso+'T12:00:00Z');
    if(isNaN(d))return null;
    d.setUTCDate(d.getUTCDate()+Math.round(n));
    return d.toISOString().slice(0,10);
  }
  function bizDate(iso,n){
    var d=new Date(iso+'T12:00:00Z');
    if(isNaN(d))return null;
    var c=0;
    while(c<n){
      d.setUTCDate(d.getUTCDate()+1);
      var wd=d.getUTCDay();
      if(wd!==0&&wd!==6)c++;
    }
    return d.toISOString().slice(0,10);
  }
  function usd(n){return '$'+n.toLocaleString('en-US');}
  // ---CD-EMBED-MATH-END---

  function calc() {
    var sd = root.querySelector('.ta-send').value;
    var dw = parseInt(root.querySelector('.ta-days').value, 10) || 0;
    var pay = parseFloat(root.querySelector('.ta-pay').value) || 0;
    if (/^\d{4}-\d{2}-\d{2}$/.test(sd) && dw > 0) {
      root.querySelector('.ta-cal').textContent = fmtDate(calDate(sd, dw));
      root.querySelector('.ta-sub').textContent = dw + ' calendar days (the letter convention)';
      root.querySelector('.ta-biz').innerHTML = 'Counted in business days (Mon–Fri): <strong>' + fmtDate(bizDate(sd, dw)) + '</strong>';
      root.querySelector('.ta-let').innerHTML = pay > 0
        ? 'Letter demands <strong>' + usd(pay) + '</strong> plus cessation by the deadline'
        : 'Letter demands the conduct stop by the deadline';
    } else {
      root.querySelector('.ta-cal').textContent = '—';
      root.querySelector('.ta-sub').textContent = 'enter a send date and window';
      root.querySelector('.ta-biz').textContent = '';
      root.querySelector('.ta-let').textContent = '';
    }
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.ceaseAndDesistTemplate = { recalc: calc };
})();
