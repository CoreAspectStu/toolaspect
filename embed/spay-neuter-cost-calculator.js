/*!
 * ToolAspect Spay Neuter Cost Calculator Embed
 * Install: <div id="ta-spay-neuter-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/spay-neuter-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-spay-neuter-cost-calculator';
  var BASE = 'https://toolaspect.com/spay-neuter-cost-calculator/';

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
    + '.ta-embed-check{display:flex;flex-wrap:wrap;gap:8px 16px;margin-top:2px}'
    + '.ta-embed-check label{display:flex;align-items:center;gap:6px;font-size:.82rem;color:var(--ta-text);cursor:pointer;font-weight:400;letter-spacing:0}'
    + '.ta-embed-check input{width:15px;height:15px;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'spay-neuter-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="spay-neuter-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Spay Neuter Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Dog &amp; cat surgery priced by size, clinic and region</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Species</label>'
    + '<select class="ta-species"><option value="dog">Dog</option><option value="cat">Cat</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Procedure</label>'
    + '<select class="ta-sex"><option value="spay">Spay (female)</option><option value="neuter">Neuter (male)</option></select></div>'
    + '<div class="ta-embed-form-group ta-wt"><label>Weight (dogs)</label>'
    + '<select class="ta-weight">'
    + '<option value="s">Under 30 lb</option>'
    + '<option value="m" selected>30-60 lb</option>'
    + '<option value="l">60-90 lb</option>'
    + '<option value="g">Over 90 lb</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Clinic type</label>'
    + '<select class="ta-clinic"><option value="private" selected>Private vet</option><option value="lowcost">Low-cost / humane</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Region</label>'
    + '<select class="ta-region">'
    + '<option value="0.85">Small town / rural</option>'
    + '<option value="1" selected>National average</option>'
    + '<option value="1.25">Major metro</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Add-ons</label>'
    + '<div class="ta-embed-check">'
    + '<label><input type="checkbox" class="ta-blood" checked> Bloodwork +$80</label>'
    + '<label><input type="checkbox" class="ta-meds" checked> Meds +$40</label>'
    + '</div></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var TABLE = {
    dog: {
      spay: { s: [250, 350, 500], m: [300, 455, 650], l: [400, 575, 800], g: [500, 750, 1200] },
      neuter: { s: [200, 280, 420], m: [250, 360, 520], l: [350, 475, 700], g: [450, 625, 1000] }
    },
    cat: { spay: { s: [250, 350, 500] }, neuter: { s: [170, 250, 400] } }
  };

  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var sp = root.querySelector('.ta-species').value;
    var sex = root.querySelector('.ta-sex').value;
    var tier = sp === 'cat' ? 's' : root.querySelector('.ta-weight').value;
    root.querySelector('.ta-wt').style.display = sp === 'cat' ? 'none' : '';
    var clinic = root.querySelector('.ta-clinic').value;
    var region = parseFloat(root.querySelector('.ta-region').value) || 1;
    var b = TABLE[sp][sex][tier];
    var cm = clinic === 'lowcost' ? (sp === 'cat' ? 0.3 : 0.4) : 1;
    var add = 0;
    if (root.querySelector('.ta-blood').checked) add += 80;
    if (root.querySelector('.ta-meds').checked) add += 40;
    var lo = b[0] * cm * region + add, ty = b[1] * cm * region + add, hi = b[2] * cm * region + add;
    var lcm = sp === 'cat' ? 0.3 : 0.4;
    var low = money(b[1] * lcm * region);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(ty) + '</div>'
      + '<div class="ta-embed-sub">Range ' + money(lo) + ' – ' + money(hi) + ' with add-ons</div>'
      + '<div class="ta-embed-sub">Low-cost clinic equivalent: <strong>' + low + '</strong></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.spayNeuterCostCalculator = { recalc: calc };
})();
