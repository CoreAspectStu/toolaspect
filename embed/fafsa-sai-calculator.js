/*!
 * ToolAspect FAFSA SAI Calculator Embed
 * Install: <div id="ta-fafsa-sai-calculator"></div>
 *          <script src="https://toolaspect.com/embed/fafsa-sai-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-fafsa-sai-calculator';
  var BASE = 'https://toolaspect.com/fafsa-sai-calculator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'fafsa-sai-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="fafsa-sai-calculator"]')) {
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
    + '<div class="ta-embed-title">FAFSA SAI Calculator</div>'
    + '<div class="ta-embed-subtitle">2026-27 Formula A estimate for dependent students</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Parent AGI ($)</label><input type="number" class="ta-agi" value="95000" min="0" step="500"></div>'
    + '<div class="ta-embed-form-group"><label>Income tax paid ($)</label><input type="number" class="ta-tax" value="9000" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Income earned from work ($)</label><input type="number" class="ta-work" value="90000" min="0" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two" style="margin-top:10px">'
    + '<div class="ta-embed-form-group"><label>Family size</label><input type="number" class="ta-fam" value="4" min="2" max="12" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Parent assets, ex. home ($)</label><input type="number" class="ta-assets" value="30000" min="0" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two" style="margin-top:10px">'
    + '<div class="ta-embed-form-group"><label>Student income ($)</label><input type="number" class="ta-sinc" value="4000" min="0" step="250"></div>'
    + '<div class="ta-embed-form-group"><label>Student assets ($)</label><input type="number" class="ta-sass" value="1000" min="0" step="100"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function ipa(n){var t={2:29190,3:36330,4:44880,5:52950,6:61930};return n<=6?t[n]:61930+(n-6)*6990;}
  function payroll(inc){return Math.round(Math.round(inc*0.0145*1000)/1000+Math.round(Math.min(inc,168600)*0.062*1000)/1000);}
  function aaiTable(aai){
    if(aai<-8500)return -1870;
    if(aai<=21800)return Math.round(aai*0.22);
    if(aai<=27300)return Math.round(4796+(aai-21800)*0.25);
    if(aai<=32800)return Math.round(6171+(aai-27300)*0.29);
    if(aai<=38400)return Math.round(7766+(aai-32800)*0.34);
    if(aai<=43900)return Math.round(9670+(aai-38400)*0.40);
    return Math.round(11870+(aai-43900)*0.47);
  }

  function calc() {
    var agi = val('.ta-agi'), tax = val('.ta-tax'), work = val('.ta-work');
    var fam = Math.max(2, Math.min(12, val('.ta-fam') || 2));
    var assets = val('.ta-assets'), sInc = val('.ta-sinc'), sAssets = val('.ta-sass');
    if (agi <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter parent AGI</div>';
      return;
    }
    var allow = tax + payroll(work) + ipa(fam) + Math.min(0.35 * work, 5000);
    var pai = agi - allow;
    var pca = Math.max(0, assets * 0.12);
    var pc = aaiTable(pai + pca);
    var sAvail = sInc - 11770 - payroll(sInc);
    var sci = sAvail > 0 ? Math.round(sAvail * 0.5) : 0;
    var sca = Math.round(sAssets * 0.2);
    var sai = pc + sci + sca;
    if (sai < -1500) sai = -1500;
    var pell = sai <= 0 ? 'Max Pell (~$7,395)' : (sai < 7395 ? 'Pell ~$' + (7395 - sai).toLocaleString() : 'No Pell expected');
    resultEl.innerHTML =
      '<div class="ta-embed-big">SAI ' + sai.toLocaleString() + '</div>'
      + '<div class="ta-embed-sub">Parents\' contribution $' + pc.toLocaleString() + ' · student $' + (sci + sca).toLocaleString() + '</div>'
      + '<div class="ta-embed-sub">' + pell + ' · estimate only, not your official FAFSA result</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.fafsaSaiCalculator = { recalc: calc };
})();
