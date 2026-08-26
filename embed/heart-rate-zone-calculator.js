/*!
 * ToolAspect Heart Rate Zone Calculator Embed
 * Install: <div id="ta-heart-rate-zone-calculator"></div>
 *          <script src="https://toolaspect.com/embed/heart-rate-zone-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-heart-rate-zone-calculator';
  var BASE = 'https://toolaspect.com/heart-rate-zone-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.7rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-zones{margin-top:12px}'
    + '.ta-embed-zone{display:flex;align-items:center;gap:10px;padding:7px 10px;border:1px solid var(--ta-border);border-radius:8px;margin-top:6px;background:var(--ta-bg);text-align:left}'
    + '.ta-embed-zone .bar{width:5px;border-radius:3px;align-self:stretch;flex:0 0 5px}'
    + '.ta-embed-zone .z{flex:1;font-size:.82rem;font-weight:600}'
    + '.ta-embed-zone .bpm{font-size:.95rem;font-weight:700;white-space:nowrap}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'heart-rate-zone-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="heart-rate-zone-calculator"]')) {
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
    + '<div class="ta-embed-title">Heart Rate Zones</div>'
    + '<div class="ta-embed-subtitle">Karvonen method: (max − resting) × intensity + resting</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Age</label><input type="number" class="ta-age" value="35" min="10" max="100" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Resting HR (bpm)</label><input type="number" class="ta-rhr" value="60" min="30" max="110" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Max formula</label><select class="ta-form">'
    + '<option value="classic" selected>220 − age</option><option value="tanaka">Tanaka</option><option value="custom">Measured…</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group ta-custom" style="display:none"><label>Measured max HR (bpm)</label><input type="number" class="ta-cmax" value="190" min="100" max="230" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var formSel = root.querySelector('.ta-form');
  var customG = root.querySelector('.ta-custom');

  var ZONES = [
    { n: 'Z1 Recovery', lo: 0.50, hi: 0.60, c: '#38bdf8' },
    { n: 'Z2 Aerobic base', lo: 0.60, hi: 0.70, c: '#22c55e' },
    { n: 'Z3 Tempo', lo: 0.70, hi: 0.80, c: '#eab308' },
    { n: 'Z4 Threshold', lo: 0.80, hi: 0.90, c: '#f97316' },
    { n: 'Z5 VO2 max', lo: 0.90, hi: 1.00, c: '#ef4444' }
  ];

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }

  function calc() {
    var age = val('.ta-age'), rhr = val('.ta-rhr');
    var mode = formSel.value;
    customG.style.display = mode === 'custom' ? 'block' : 'none';
    var mx = mode === 'custom' ? val('.ta-cmax') : (mode === 'tanaka' ? 208 - 0.7 * age : 220 - age);
    var hrr = mx - rhr;
    if (age <= 0 || rhr <= 0 || hrr <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter age and resting heart rate</div>';
      return;
    }
    var h = '<div class="ta-embed-big">' + Math.round(hrr) + ' bpm reserve</div>'
      + '<div class="ta-embed-sub">max ' + Math.round(mx) + ' − resting ' + Math.round(rhr) + '</div>'
      + '<div class="ta-embed-zones">';
    ZONES.forEach(function (z) {
      var lo = Math.round(hrr * z.lo + rhr), hi = Math.round(hrr * z.hi + rhr);
      h += '<div class="ta-embed-zone"><div class="bar" style="background:' + z.c + '"></div>'
        + '<div class="z">' + z.n + ' <span style="font-weight:400;color:var(--ta-muted)">(' + Math.round(z.lo * 100) + '–' + Math.round(z.hi * 100) + '%)</span></div>'
        + '<div class="bpm">' + lo + '–' + hi + '</div></div>';
    });
    h += '</div>';
    resultEl.innerHTML = h;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.heartRateZones = { recalc: calc };
})();
