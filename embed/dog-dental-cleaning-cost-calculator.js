/*!
 * ToolAspect Dog Dental Cleaning Cost Calculator Embed
 * Install: <div id="ta-dog-dental-cleaning-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-dental-cleaning-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-dental-cleaning-cost-calculator';
  var BASE = 'https://toolaspect.com/dog-dental-cleaning-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-check{display:flex;align-items:center;font-size:.82rem;color:var(--ta-text);cursor:pointer;margin-top:4px}'
    + '.ta-embed-check input{width:auto;margin-right:6px;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.4rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-rows{margin-top:14px;text-align:left;font-size:.88rem}'
    + '.ta-embed-rows div{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--ta-border)}'
    + '.ta-embed-rows div:last-child{border-bottom:none;font-weight:700}'
    + '.ta-embed-note{text-align:left;background:var(--ta-bg);border-radius:8px;padding:12px 14px;margin-top:14px;font-size:.82rem;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-dental-cleaning-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-dental-cleaning-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Dog Dental Cleaning Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Cleaning + bloodwork + X-rays + extractions</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Local price level</label><select class="ta-market">'
    + '<option value="0.85">Rural / small town</option>'
    + '<option value="1" selected>Suburban / average</option>'
    + '<option value="1.25">Major metro</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Base cleaning ($300-$700)</label><input type="number" class="ta-base" value="450" min="100" max="2000" step="25"></div>'
    + '<div class="ta-embed-form-group"><label>Simple extractions (count)</label><input type="number" class="ta-sxn" value="0" min="0" max="20" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Surgical extractions (count)</label><input type="number" class="ta-gxn" value="0" min="0" max="15" step="1"></div>'
    + '</div>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-bw" checked> Pre-op bloodwork ($120)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-xr" checked> Full-mouth X-rays ($125)</label>'
    + '<label class="ta-embed-check"><input type="checkbox" class="ta-pain" checked> Go-home pain meds ($35)</label>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub">&nbsp;</div>'
    + '<div class="ta-embed-rows">'
    + '<div><span>Cleaning package only</span><span class="ta-r-clean">—</span></div>'
    + '<div><span>Extractions</span><span class="ta-r-ext">—</span></div>'
    + '<div><span>Likely band (-25% / +25%)</span><span class="ta-r-band">—</span></div>'
    + '</div>'
    + '<div class="ta-embed-note ta-verdict"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var m = parseFloat(root.querySelector('.ta-market').value);
    var base = val('.ta-base') * m;
    var bw = root.querySelector('.ta-bw').checked ? 120 * m : 0;
    var xr = root.querySelector('.ta-xr').checked ? 125 * m : 0;
    var pain = root.querySelector('.ta-pain').checked ? 35 * m : 0;
    var ext = val('.ta-sxn') * 160 * m + val('.ta-gxn') * 500 * m;
    var clean = base + bw + xr + pain;
    var total = clean + ext;
    root.querySelector('.ta-embed-big').textContent = fmt(total);
    root.querySelector('.ta-embed-sub').textContent = fmt(total * 0.75) + ' – ' + fmt(total * 1.25) + ' realistic quote band';
    root.querySelector('.ta-r-clean').textContent = fmt(clean);
    root.querySelector('.ta-r-ext').textContent = fmt(ext);
    root.querySelector('.ta-r-band').textContent = fmt(total * 0.75) + ' / ' + fmt(total * 1.25);
    root.querySelector('.ta-verdict').textContent = 'National ranges: cleaning $300-$700 ($500-$750 as a package with bloodwork and X-rays), simple extractions $75-$250/tooth, surgical up to $500-$2,500/tooth, specialist cleaning about $1,500. Extraction counts are only final after X-rays — pre-authorize a range, not a number.';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogDentalCleaningCostCalculator = { recalc: calc };
})();
