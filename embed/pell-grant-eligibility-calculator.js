/*!
 * ToolAspect Pell Grant Calculator Embed
 * Install: <div id="ta-pell-grant-eligibility-calculator"></div>
 *          <script src="https://toolaspect.com/embed/pell-grant-eligibility-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pell-grant-eligibility-calculator';
  var BASE = 'https://toolaspect.com/pell-grant-eligibility-calculator/';

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
    + '.ta-embed-check{display:flex;align-items:center;font-size:.82rem;color:var(--ta-text);cursor:pointer;gap:6px}'
    + '.ta-embed-check input{width:auto}'
    + '.ta-embed-result{text-align:center;padding:20px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.1rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-note{color:var(--ta-muted);font-size:.78rem;margin-top:8px;text-align:left}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pell-grant-eligibility-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pell-grant-eligibility-calculator"]')) {
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
    + '<div class="ta-embed-title">Pell Grant Calculator</div>'
    + '<div class="ta-embed-subtitle">2026-27 estimate: SAI to award, with income shortcuts</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>SAI</label><input type="number" class="ta-sai" value="1500" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Enrollment</label><select class="ta-inten">'
    + '<option value="1" selected>Full-time</option><option value="0.75">3/4 time</option><option value="0.5">Half-time</option><option value="0.25">&lt; half-time</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Parent AGI (0 = skip)</label><input type="number" class="ta-agi" value="0" min="0" step="500"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Family size</label><input type="number" class="ta-fam" value="4" min="2" max="12" step="1"></div>'
    + '<div class="ta-embed-form-group" style="justify-content:flex-end"><label class="ta-embed-check" style="margin-top:18px"><input type="checkbox" class="ta-single"> Single parent</label></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  // Same schedule as the full calculator: max $7,395 (2026-27), floor $739.50, income shortcuts from 2024 poverty guidelines
  var MAX = 7395, MIN = 739.5;
  function fpl(n) { return 15060 + (n - 1) * 5380; }
  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var sai = parseFloat(root.querySelector('.ta-sai').value);
    var inten = parseFloat(root.querySelector('.ta-inten').value);
    var agi = parseFloat(root.querySelector('.ta-agi').value) || 0;
    var fam = Math.max(2, Math.min(12, parseInt(root.querySelector('.ta-fam').value, 10) || 4));
    var single = root.querySelector('.ta-single').checked;

    if (isNaN(sai)) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your SAI (from your FAFSA summary)</div>';
      return;
    }

    var pl = fpl(fam);
    var maxCut = Math.round(pl * (single ? 2.25 : 1.75));
    var minCut = Math.round(pl * (single ? 3.25 : 2.75));
    var autoMax = agi > 0 && agi <= maxCut;
    var minElig = agi > 0 && agi <= minCut;

    var base;
    var how;
    if (autoMax) {
      base = MAX; how = 'max-Pell income shortcut (AGI ≤ ' + fmt(maxCut) + ')';
    } else if (sai <= 0) {
      base = MAX; how = 'SAI ≤ 0 — maximum award';
    } else if (MAX - sai >= MIN) {
      base = MAX - sai; how = '$7,395 max − SAI ' + sai.toLocaleString();
    } else if (minElig) {
      base = MIN; how = 'min-Pell income shortcut (AGI ≤ ' + fmt(minCut) + ')';
    } else {
      base = 0; how = '';
    }

    var award = base * inten;
    if (base === 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">$0</div>'
        + '<div class="ta-embed-sub">No formula Pell at SAI ' + sai.toLocaleString() + (agi > 0 ? ' and AGI above the min-Pell cutoff' : '') + '</div>'
        + '<div class="ta-embed-note">Estimate only — state grants, institutional aid, and work-study can still apply. Not financial aid advice.</div>';
    } else {
      resultEl.innerHTML = '<div class="ta-embed-big">' + fmt(award) + '/yr</div>'
        + '<div class="ta-embed-sub">' + how + ', × ' + Math.round(inten * 100) + '% enrollment</div>'
        + '<div class="ta-embed-note">About ' + fmt(award / 2) + ' per semester on a two-term split. Estimate only — your school applies the official schedule. Not financial aid advice.</div>';
    }
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.pellGrantCalculator = { recalc: calc };
})();
