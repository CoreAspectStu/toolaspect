/*!
 * ToolAspect Vehicle Registration Cost Calculator Embed
 * Install: <div id="ta-vehicle-registration-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/vehicle-registration-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-vehicle-registration-cost-calculator';
  var BASE = 'https://toolaspect.com/vehicle-registration-cost-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;gap:8px;font-size:.85rem;color:var(--ta-text);padding-top:4px}'
    + '.ta-embed-check input{width:16px;height:16px;accent-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'vehicle-registration-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="vehicle-registration-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Vehicle Registration Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Estimate annual registration in any state</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state">'
    + '<option>Alabama</option><option>Alaska</option><option>Arizona</option><option>Arkansas</option><option selected>California</option><option>Colorado</option><option>Connecticut</option><option>Delaware</option><option>Florida</option><option>Georgia</option><option>Hawaii</option><option>Idaho</option><option>Illinois</option><option>Indiana</option><option>Iowa</option><option>Kansas</option><option>Kentucky</option><option>Louisiana</option><option>Maine</option><option>Maryland</option><option>Massachusetts</option><option>Michigan</option><option>Minnesota</option><option>Mississippi</option><option>Missouri</option><option>Montana</option><option>Nebraska</option><option>Nevada</option><option>New Hampshire</option><option>New Jersey</option><option>New Mexico</option><option>New York</option><option>North Carolina</option><option>North Dakota</option><option>Ohio</option><option>Oklahoma</option><option>Oregon</option><option>Pennsylvania</option><option>Rhode Island</option><option>South Carolina</option><option>South Dakota</option><option>Tennessee</option><option>Texas</option><option>Utah</option><option>Vermont</option><option>Virginia</option><option>Washington</option><option>West Virginia</option><option>Wisconsin</option><option>Wyoming</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Vehicle value ($)</label><input type="number" class="ta-value" value="30000" min="0" step="1000"></div>'
    + '<div class="ta-embed-form-group"><label>Vehicle age (years)</label><input type="number" class="ta-age" value="0" min="0" max="30"></div>'
    + '</div>'
    + '<div class="ta-embed-check"><input type="checkbox" class="ta-ev"> <span>Electric vehicle</span></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var AB = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
  var D = {"AL":{t:"flat",f:15,ev:100},"AK":{t:"flat",f:50},"AZ":{t:"value",f:8,p:1.68},"AR":{t:"flat",f:17,ev:100},"CA":{t:"value",f:106,p:0.65,ev:115},"CO":{t:"value",f:100,p:1.57,ev:50},"CT":{t:"flat",f:60},"DE":{t:"flat",f:40},"FL":{t:"flat",f:36},"GA":{t:"flat",f:20,ev:214},"HI":{t:"flat",f:73,ev:50},"ID":{t:"age",f:0,bands:[[2,69],[6,60],[999,45]],ev:140},"IL":{t:"flat",f:151,ev:97},"IN":{t:"value",f:21.35,p:0.84,ev:150},"IA":{t:"age",f:0,bands:[[5,105],[7,90],[8,75],[999,60]],ev:130},"KS":{t:"flat",f:35},"KY":{t:"value",f:21,p:1.45,ev:120},"LA":{t:"flat",f:40},"ME":{t:"me",f:35,x:[24,17.5,13.5,10,6.5,4]},"MD":{t:"flat",f:120.5},"MA":{t:"value",f:30,p:2.5},"MI":{t:"value",f:9.5,p:0.7,ev:135},"MN":{t:"value",f:10,p:1.25,ev:75},"MS":{t:"flat",f:14,ev:150},"MO":{t:"flat",f:57.25,ev:222},"MT":{t:"age",f:0,bands:[[4,217],[10,106],[999,87]]},"NE":{t:"value",f:15,p:3.1,ev:75},"NV":{t:"value",f:33,p:4},"NH":{t:"flat",f:80},"NJ":{t:"flat",f:70},"NM":{t:"flat",f:33},"NY":{t:"flat",f:26.25},"NC":{t:"flat",f:46.25,ev:180},"ND":{t:"flat",f:49,ev:120},"OH":{t:"flat",f:34.5,ev:200},"OK":{t:"flat",f:46},"OR":{t:"flat",f:56},"PA":{t:"flat",f:48},"RI":{t:"flat",f:56},"SC":{t:"flat",f:40,ev:60},"SD":{t:"flat",f:60,ev:50},"TN":{t:"flat",f:29},"TX":{t:"flat",f:82.25,ev:200},"UT":{t:"age",f:0,bands:[[3,150],[5,110],[8,84],[11,64],[999,44]],ev:122},"VT":{t:"flat",f:76,ev:89},"VA":{t:"flat",f:30.75,ev:120},"WA":{t:"flat",f:88,ev:150},"WV":{t:"flat",f:30,ev:200},"WI":{t:"flat",f:85,ev:100},"WY":{t:"flat",f:45,ev:50}};
  var usd = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };

  function calc() {
    var idx = root.querySelector('.ta-state').selectedIndex;
    var ab = AB[idx], d = D[ab];
    var value = Math.max(0, parseFloat(root.querySelector('.ta-value').value) || 0);
    var age = Math.max(0, parseInt(root.querySelector('.ta-age').value) || 0);
    var ev = root.querySelector('.ta-ev').checked;
    var base;
    if (d.t === 'flat') base = d.f;
    else if (d.t === 'value') base = d.f + d.p / 100 * value;
    else if (d.t === 'age') { base = d.f; for (var i = 0; i < d.bands.length; i++) if (age <= d.bands[i][0]) { base = d.bands[i][1]; break; } }
    else base = d.f + Math.floor(value / 1000) * d.x[Math.min(age, 5)];
    var evFee = ev && d.ev ? d.ev : 0;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + usd(base + evFee) + '/yr</div>'
      + '<div class="ta-embed-sub">Estimated registration in ' + root.querySelector('.ta-state').value + (evFee ? ' (incl. ' + usd(evFee) + ' EV surcharge)' : '') + ' — verify with your DMV</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.vehicleRegistrationCostCalculator = { recalc: calc };
})();
