/*!
 * ToolAspect PSAT National Merit Index Calculator Embed
 * Install: <div id="ta-psat-national-merit-index-calculator"></div>
 *          <script src="https://toolaspect.com/embed/psat-national-merit-index-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-psat-national-merit-index-calculator';
  var BASE = 'https://toolaspect.com/psat-national-merit-index-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:8px;font-size:.85rem}'
    + '.ta-embed-cell strong{display:block;font-size:1.05rem}'
    + '.ta-embed-cell span{color:var(--ta-muted);font-size:.75rem}'
    + '.ta-embed-verdict{background:var(--ta-bg);border-radius:8px;padding:10px 12px;font-size:.85rem;margin-top:10px;line-height:1.6}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-grid{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'psat-national-merit-index-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="psat-national-merit-index-calculator"]')) {
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

  var CUT={"Alabama":[214,213],"Alaska":[215,213],"Arizona":[218,218],"Arkansas":[215,213],"California":[224,221],"Colorado":[219,218],"Connecticut":[223,221],"Delaware":[220,219],"District of Columbia":[225,223],"Florida":[219,217],"Georgia":[220,219],"Hawaii":[219,217],"Idaho":[215,214],"Illinois":[222,220],"Indiana":[218,216],"Iowa":[214,213],"Kansas":[216,215],"Kentucky":[214,214],"Louisiana":[216,214],"Maine":[217,214],"Maryland":[224,222],"Massachusetts":[225,223],"Michigan":[220,218],"Minnesota":[219,218],"Mississippi":[213,212],"Missouri":[217,215],"Montana":[213,210],"Nebraska":[214,212],"Nevada":[214,214],"New Hampshire":[219,216],"New Jersey":[225,223],"New Mexico":[210,212],"New York":[223,220],"North Carolina":[220,218],"North Dakota":[210,209],"Ohio":[219,217],"Oklahoma":[212,212],"Oregon":[219,217],"Pennsylvania":[221,219],"Rhode Island":[219,217],"South Carolina":[215,214],"South Dakota":[211,209],"Tennessee":[219,217],"Texas":[222,219],"Utah":[213,212],"Vermont":[216,214],"Virginia":[224,222],"Washington":[224,222],"West Virginia":[210,208],"Wisconsin":[215,214],"Wyoming":[210,209],"U.S. territories":[210,208],"Studying outside the U.S.":[225,223]};
  var COMMENDED = { y2026: 210, y2027: 208 };
  var stateOpts = Object.keys(CUT).map(function (k) { return '<option value="' + k + '">' + k + '</option>'; }).join('');

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">PSAT National Merit Index Calculator</div>'
    + '<div class="ta-embed-subtitle">Selection Index = (2 &times; R&amp;W + Math) &divide; 10</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Reading &amp; Writing (160-760)</label><input class="ta-rw" type="number" value="720" min="160" max="760" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Math (160-760)</label><input class="ta-math" type="number" value="700" min="160" max="760" step="10"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Your state</label><select class="ta-state">' + stateOpts + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var rw = Math.max(160, Math.min(760, parseInt(root.querySelector('.ta-rw').value, 10) || 160));
    var m = Math.max(160, Math.min(760, parseInt(root.querySelector('.ta-math').value, 10) || 160));
    var st = root.querySelector('.ta-state').value;
    var cut = CUT[st] || [210, 210];
    var si = (2 * rw + m) / 10;
    var v;
    if (si >= Math.max(cut[0], cut[1])) v = 'Above both recent ' + st + ' cutoffs — Semifinalist range if you hold it.';
    else if (si >= Math.min(cut[0], cut[1])) v = 'Between the class-of-2026 cutoff (' + cut[0] + ') and the class-of-2027 estimate (' + cut[1] + ') for ' + st + ' — on the bubble.';
    else if (si >= COMMENDED.y2027) v = 'Below recent ' + st + ' Semifinalist cutoffs, but in Commended territory (208-210 national).';
    else v = 'Below the National Merit range for now — the Commended line has run 208-210 the last two cycles.';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + si + '</div>'
      + '<div class="ta-embed-sub">Selection Index &middot; max 228</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><span>' + st + ' 2026</span><strong>' + cut[0] + '</strong></div>'
      + '<div class="ta-embed-cell"><span>' + st + ' 2027 est</span><strong>' + cut[1] + '</strong></div>'
      + '<div class="ta-embed-cell"><span>Commended</span><strong>210 / 208</strong></div>'
      + '</div>'
      + '<div class="ta-embed-verdict">' + v + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.psatNationalMeritIndexCalculator = { recalc: calc };
})();
