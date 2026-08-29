/*!
 * ToolAspect Dog Training Cost Calculator Embed
 * Install: <div id="ta-dog-training-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/dog-training-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-dog-training-cost-calculator';
  var BASE = 'https://toolaspect.com/dog-training-cost-calculator/';

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
    + '.ta-embed-big{font-size:1.6rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-row{display:flex;justify-content:space-between;font-size:.85rem;padding:6px 0;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-row:last-child{border-bottom:none}'
    + '.ta-embed-note{font-size:.72rem;color:var(--ta-muted);line-height:1.5;margin-top:8px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'dog-training-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="dog-training-cost-calculator"]')) {
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

  var ROUTES = [
    { name: 'Group class (big-box)', lo: 139, hi: 179 },
    { name: 'Group class (independent)', lo: 150, hi: 250 },
    { name: 'Online course', lo: 30, hi: 200 },
    { name: 'Hybrid: class + 3 privates', lo: 375, hi: 700 },
    { name: 'Private trainer ×6', lo: 450, hi: 900 },
    { name: 'Behavior consult program', lo: 700, hi: 1500 },
    { name: 'Board-and-train (2 wks)', lo: 2000, hi: 5000 }
  ];
  var RECS = {
    puppy: { route: 'Group class (big-box)', why: 'Socialization window closes around 14–16 weeks — a $139–179 puppy class is the best value in dog training.' },
    manners: { route: 'Group class (independent)', why: 'A 6-week group class ($150–$250) plus daily 5-minute reps handles sit, stay, and loose leash for most dogs.' },
    leash: { route: 'Hybrid: class + 3 privates', why: 'About $444 at national prices ($159 course + 3 × $95 in-home) — group drills the behavior, privates fix your timing.' },
    recall: { route: 'Group class (independent)', why: 'Recall is built in stages on a long line; a class keeps the progression honest. Add a $30–200 online course for daily reps.' },
    reactivity: { route: 'Behavior consult program', why: 'Reactivity needs distance management and a pro reading thresholds — not a big-box group and not board-and-train.' },
    anxiety: { route: 'Behavior consult program', why: 'Separation-anxiety specialists usually work virtually ($700–1,500 a program) with daily camera-monitored departures.' }
  };

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Dog Training Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Group vs private vs board-and-train, priced for your goal</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Goal</label><select class="ta-goal">'
    + '<option value="puppy" selected>Puppy start</option><option value="manners">Basic manners</option>'
    + '<option value="leash">Leash pulling</option><option value="recall">Recall / off-leash</option>'
    + '<option value="reactivity">Reactivity or aggression</option><option value="anxiety">Separation anxiety</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Market</label><select class="ta-market">'
    + '<option value="1" selected>National average</option><option value="1.3">Major metro</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-card ta-details"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var detailsEl = root.querySelector('.ta-details');

  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var goal = root.querySelector('.ta-goal').value;
    var mult = parseFloat(root.querySelector('.ta-market').value);
    var rec = RECS[goal];
    var recRoute = null;
    var html = '';
    ROUTES.forEach(function (r) {
      var lo = r.lo * mult, hi = r.hi * mult;
      var mark = r.name === rec.route ? ' ⭐' : '';
      html += '<div class="ta-embed-row"><span>' + r.name + mark + '</span><strong>' + money(lo) + ' – ' + money(hi) + '</strong></div>';
      if (r.name === rec.route) recRoute = { lo: lo, hi: hi, mid: (lo + hi) / 2 };
    });
    resultEl.innerHTML = '<div class="ta-embed-big">' + rec.route + '</div>'
      + '<div class="ta-embed-sub">typical ' + money(recRoute.mid) + ' (' + money(recRoute.lo) + ' – ' + money(recRoute.hi) + ')</div>';
    detailsEl.innerHTML = html + '<div class="ta-embed-note">' + rec.why + ' Trainer is an unregulated title — check for CPDT-KA, KPA, IAABC, or CAAB certifications.</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.dogTrainingCost = { recalc: calc };
})();
