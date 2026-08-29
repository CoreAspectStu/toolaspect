/*!
 * ToolAspect Corporate Event Budget Calculator Embed
 * Install: <div id="ta-corporate-event-budget-calculator"></div>
 *          <script src="https://toolaspect.com/embed/corporate-event-budget-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-corporate-event-budget-calculator';
  var BASE = 'https://toolaspect.com/corporate-event-budget-calculator/';

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
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}.ta-embed-range{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'corporate-event-budget-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="corporate-event-budget-calculator"]')) {
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
    + '<div class="ta-embed-title">Corporate Event Budget</div>'
    + '<div class="ta-embed-subtitle">Per-attendee stack &times; headcount + contingency</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Event Type</label><select class="ta-mode">'
    + '<option value="holiday" selected>Holiday party ($160/head)</option>'
    + '<option value="team">Team building ($115/head)</option>'
    + '<option value="oneday">One-day meeting ($290/head)</option>'
    + '<option value="offsite">Multi-day offsite ($1,950/head)</option>'
    + '<option value="conf">Conference ($465/head)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Attendees</label><input type="number" class="ta-heads" value="120" min="1" step="5"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Market</label><select class="ta-market">'
    + '<option value="1.15">Major metro (+15%)</option>'
    + '<option value="1" selected>Standard metro</option>'
    + '<option value="0.85">Suburban / budget (-15%)</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Contingency (%)</label><input type="number" class="ta-cont" value="10" min="0" max="25" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  // Per-person planning stacks; venueShare = the venue/F&B/decor lines that scale with market tier
  var MODES = {
    holiday: { per: 160, venueShare: 118 },   // venue 30 + catering 55 + bar 25 + decor 8
    team:    { per: 115, venueShare: 35 },    // F&B 35
    oneday:  { per: 290, venueShare: 170 },   // venue 60 + F&B 110
    offsite: { per: 1950, venueShare: 1080 }, // lodging 700 + meeting space 80 + F&B 300
    conf:    { per: 465, venueShare: 235 }    // venue 85 + F&B 150
  };

  function num(sel) { var el = root.querySelector(sel); return el ? (parseFloat(el.value) || 0) : 0; }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value : ''; }
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var m = MODES[val('.ta-mode')] || MODES.holiday;
    var heads = Math.max(1, num('.ta-heads'));
    var mkt = parseFloat(val('.ta-market')) || 1;
    var cont = num('.ta-cont') / 100;
    var per = m.per + m.venueShare * (mkt - 1);
    var sub = per * heads;
    var total = sub * (1 + cont);
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + money(total) + '</div>'
      + '<div class="ta-embed-sub">total budget &middot; ' + money(per) + ' per attendee &times; ' + heads + ' + ' + Math.round(cont * 100) + '% contingency</div>'
      + '<div class="ta-embed-range">'
      + '<div><div class="rl">Per Attendee</div><div class="rv">' + money(per) + '</div></div>'
      + '<div><div class="rl">Subtotal</div><div class="rv">' + money(sub) + '</div></div>'
      + '<div><div class="rl">Contingency</div><div class="rv">' + money(sub * cont) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.corporateEventBudgetCalculator = { recalc: calc };
})();
