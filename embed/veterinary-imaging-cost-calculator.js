/*!
 * ToolAspect Veterinary Imaging Cost Calculator Embed
 * Install: <div id="ta-veterinary-imaging-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/veterinary-imaging-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-veterinary-imaging-cost-calculator';
  var BASE = 'https://toolaspect.com/veterinary-imaging-cost-calculator/';

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
    + '.ta-embed-form-group input[type="checkbox"]{width:auto}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-check{display:flex;align-items:center;font-size:.85rem;color:var(--ta-text);cursor:pointer}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-line{display:flex;justify-content:space-between;font-size:.85rem;color:var(--ta-text);padding:6px 2px;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-line:last-child{border-bottom:none}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'veterinary-imaging-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="veterinary-imaging-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Veterinary Imaging Cost</div>'
    + '<div class="ta-embed-subtitle">X-ray, ultrasound, CT, and MRI prices</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Study</label><select class="ta-mod">'
    + '<option value="xray" selected>X-ray</option><option value="us">Ultrasound</option>'
    + '<option value="ct">CT scan</option><option value="mri">MRI</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Pet</label><select class="ta-pet">'
    + '<option value="dog" selected>Dog</option><option value="cat">Cat</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Clinic</label><select class="ta-cl">'
    + '<option value="gp" selected>General practice</option><option value="er">Emergency</option>'
    + '<option value="ref">Referral / specialty</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two" style="margin-top:10px">'
    + '<div class="ta-embed-form-group"><label class="ta-embed-check"><input type="checkbox" class="ta-sed" checked style="margin-right:6px"> Sedation / anesthesia</label></div>'
    + '<div class="ta-embed-form-group"><label class="ta-embed-check"><input type="checkbox" class="ta-con" style="margin-right:6px"> Contrast (CT/MRI)</label></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub"></div>'
    + '<div class="ta-embed-line"><span>Scan alone (band)</span><strong class="ta-scan">—</strong></div>'
    + '<div class="ta-embed-line"><span>Add-ons</span><strong class="ta-adds">—</strong></div>'
    + '<div class="ta-embed-line"><span>Full range</span><strong class="ta-range">—</strong></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var BANDS = { xray: { lo: 150, ty: 300, hi: 500 }, us: { lo: 300, ty: 550, hi: 900 }, ct: { lo: 1000, ty: 2000, hi: 3500 }, mri: { lo: 2000, ty: 3500, hi: 6000 } };
  var CLINIC = { gp: .8, er: 1, ref: 1.3 };
  var NAMES = { xray: 'X-ray', us: 'ultrasound', ct: 'CT scan', mri: 'MRI' };

  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var mod = root.querySelector('.ta-mod').value;
    var pet = root.querySelector('.ta-pet').value;
    var cl = root.querySelector('.ta-cl').value;
    var sed = root.querySelector('.ta-sed').checked;
    var con = root.querySelector('.ta-con').checked && (mod === 'ct' || mod === 'mri');
    var b = BANDS[mod], f = CLINIC[cl], cf = pet === 'cat' ? 0.85 : 1;
    var scan = b.ty * f * cf;
    var sedTy = sed ? (mod === 'ct' || mod === 'mri' ? 300 : 75) : 0;
    var conTy = con ? 250 : 0;
    root.querySelector('.ta-embed-big').textContent = usd(scan + sedTy + conTy);
    root.querySelector('.ta-embed-sub').textContent = 'Typical ' + (pet === 'dog' ? 'dog' : 'cat') + ' ' + NAMES[mod] + ' estimate';
    root.querySelector('.ta-scan').textContent = usd(b.lo * cf) + ' – ' + usd(b.hi);
    var parts = [];
    if (sedTy) parts.push((mod === 'ct' || mod === 'mri' ? 'anesthesia ' : 'sedation ') + usd(sedTy));
    if (conTy) parts.push('contrast ' + usd(conTy));
    root.querySelector('.ta-adds').textContent = parts.length ? parts.join(' + ') : 'none';
    var loAdd = sed ? (mod === 'ct' || mod === 'mri' ? 150 : 50) : 0;
    var hiAdd = sed ? (mod === 'ct' || mod === 'mri' ? 400 : 150) : 0;
    loAdd += con ? 100 : 0;
    hiAdd += con ? 600 : 0;
    root.querySelector('.ta-range').textContent = usd(b.lo * cf + loAdd) + ' – ' + usd(b.hi + hiAdd);
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.veterinaryImagingCost = { recalc: calc };
})();
