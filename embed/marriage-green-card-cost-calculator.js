/*!
 * ToolAspect Marriage Green Card Cost Calculator Embed
 * Install: <div id="ta-marriage-green-card-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/marriage-green-card-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-marriage-green-card-cost-calculator';
  var BASE = 'https://toolaspect.com/marriage-green-card-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;gap:7px;font-size:.82rem;color:var(--ta-text);margin-top:2px}'
    + '.ta-embed-check input{width:auto;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-lines{text-align:left;background:var(--ta-bg);border-radius:8px;padding:10px 14px;margin-top:12px;font-size:.82rem}'
    + '.ta-embed-lines .fl{display:flex;justify-content:space-between;gap:10px;padding:3px 0;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-lines .fl:last-child{border-bottom:none}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-range,.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'marriage-green-card-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="marriage-green-card-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Marriage Green Card Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">2026 USCIS fee stack by route, with medical and attorney</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Route</label><select class="ta-route">'
    + '<option value="aos" selected>Adjustment of status (in US)</option>'
    + '<option value="consular">Consular CR-1 (abroad)</option>'
    + '<option value="k1">K-1 fiancé visa</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Petition filing</label><select class="ta-filing">'
    + '<option value="paper" selected>Paper ($675)</option><option value="online">Online ($625)</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Attorney</label><select class="ta-atty">'
    + '<option value="none" selected>None (DIY)</option>'
    + '<option value="flat">Flat fee ($3,500 mid)</option>'
    + '<option value="review">Package review ($300)</option></select></div>'
    + '<div class="ta-embed-form-group" style="display:flex;flex-direction:column;gap:6px;justify-content:flex-end">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-765" checked> I-765 work permit +$260</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-131" checked> I-131 travel parole +$630</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-med" checked> Medical exam +$250</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-misc" checked> Photos/copies +$75</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var FEE = { I130: 675, I130on: 625, I485: 1440, I765: 260, I131: 630, DS260: 325, IMM: 235, I129F: 675, I129Fon: 625, K: 265, MED: 250, MISC: 75 };

  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function chk(sel) { var el = root.querySelector(sel); return el ? el.checked : false; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var route = val('.ta-route'), online = val('.ta-filing') === 'online', atty = val('.ta-atty');
    var w765 = chk('.ta-765'), w131 = chk('.ta-131'), med = chk('.ta-med'), misc = chk('.ta-misc');
    var pet = online ? FEE.I130on : FEE.I130;

    var lines = [];
    if (route === 'aos') {
      lines.push(['I-130 petition' + (online ? ' (online)' : ''), pet]);
      lines.push(['I-485 application', FEE.I485]);
      if (w765) lines.push(['I-765 work permit', FEE.I765]);
      if (w131) lines.push(['I-131 travel parole', FEE.I131]);
    } else if (route === 'consular') {
      lines.push(['I-130 petition' + (online ? ' (online)' : ''), pet]);
      lines.push(['DS-260 visa application', FEE.DS260]);
      lines.push(['USCIS immigrant fee', FEE.IMM]);
    } else {
      lines.push(['I-129F fiancé petition' + (online ? ' (online)' : ''), online ? FEE.I129Fon : FEE.I129F]);
      lines.push(['K visa application fee', FEE.K]);
      lines.push(['I-485 after marrying', FEE.I485]);
      if (w765) lines.push(['I-765 work permit', FEE.I765]);
      if (w131) lines.push(['I-131 travel parole', FEE.I131]);
      lines.push(['USCIS immigrant fee', FEE.IMM]);
    }
    var gov = lines.reduce(function (s, l) { return s + l[1]; }, 0);
    var extra = 0;
    if (med) { lines.push(['Medical exam (typical)', FEE.MED]); extra += FEE.MED; }
    if (misc) { lines.push(['Photos, copies, mailing', FEE.MISC]); extra += FEE.MISC; }
    var attyCost = atty === 'flat' ? 3500 : atty === 'review' ? 300 : 0;
    if (attyCost) lines.push([atty === 'flat' ? 'Attorney flat fee (mid-band)' : 'One-time package review', attyCost]);
    var total = gov + extra + attyCost;

    var rname = { aos: 'Adjustment of status', consular: 'Consular CR-1', k1: 'K-1 fiancé route' }[route];

    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(total) + '</div>'
      + '<div class="ta-embed-sub">' + rname + ' · ' + (atty === 'none' ? 'DIY' : 'with attorney') + ' · all-in estimate</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Government fees</div><div class="rv">' + money(gov) + '</div></div>'
      + '<div><div class="rl">Medical + extras</div><div class="rv">' + money(extra) + '</div></div>'
      + '<div><div class="rl">Attorney</div><div class="rv">' + (attyCost ? money(attyCost) : 'None') + '</div></div>'
      + '</div>'
      + '<div class="ta-embed-lines">' + lines.map(function (l) {
        return '<div class="fl"><span>' + l[0] + '</span><span><strong>' + money(l[1]) + '</strong></span></div>';
      }).join('') + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.marriageGreenCardCostCalculator = { recalc: calc };
})();
