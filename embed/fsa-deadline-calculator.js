/*!
 * ToolAspect FSA Deadline Calculator Embed
 * Install: <div id="ta-fsa-deadline-calculator"></div>
 *          <script src="https://toolaspect.com/embed/fsa-deadline-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-fsa-deadline-calculator';
  var BASE = 'https://toolaspect.com/fsa-deadline-calculator/';
  var CARRYOVER = 680;

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card h4{font-size:.82rem;margin:0 0 10px;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;font-weight:600}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-breakdown{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px;text-align:center}'
    + '.ta-embed-breakdown div{background:var(--ta-bg);border-radius:8px;padding:8px}'
    + '.ta-embed-breakdown .k{font-size:.72rem;color:var(--ta-muted)}'
    + '.ta-embed-breakdown .v{font-size:1rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '.ta-embed-legal{text-align:center;font-size:.68rem;color:var(--ta-muted);margin-top:6px;line-height:1.5}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-breakdown{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'fsa-deadline-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="fsa-deadline-calculator"]')) {
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
    + '<div class="ta-embed-title">FSA Deadline Calculator</div>'
    + '<div class="ta-embed-subtitle">Last day to spend, carryover, and your daily target</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Plan year ends</label><input type="date" class="ta-end" value="2026-12-31"></div>'
    + '<div class="ta-embed-form-group"><label>Balance left ($)</label><input type="number" class="ta-bal" value="712" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Plan option</label><select class="ta-opt">'
    + '<option value="grace" selected>Grace period</option><option value="carryover">Carryover</option><option value="none">Neither</option></select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-legal">2026 rules: $3,400 election cap, $680 carryover max. Run-out dates vary by plan.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function usd2(n) { return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function dstr(d) { return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); }

  function calc() {
    var endStr = root.querySelector('.ta-end').value;
    var bal = val('.ta-bal');
    var opt = root.querySelector('.ta-opt').value;
    if (!endStr) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your plan year end date</div>';
      return;
    }
    var end = new Date(endStr + 'T23:59:59');
    var now = new Date();
    var incurEnd = opt === 'grace' ? new Date(end.getFullYear() + 1, 2, 15, 23, 59, 59) : end;
    var days = Math.max(0, Math.ceil((incurEnd - now) / 86400000));
    var expired = incurEnd < now;
    var carry = opt === 'carryover' ? Math.min(bal, CARRYOVER) : 0;
    var forfeit = opt === 'carryover' ? Math.max(0, bal - CARRYOVER) : bal;
    var daily = days > 0 ? bal / days : bal;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + (expired ? 'Expired' : dstr(incurEnd)) + '</div>'
      + '<div class="ta-embed-sub">' + (expired ? 'spending deadline passed; file old claims during run-out'
        : days + ' days left to incur expenses' + (opt === 'carryover' ? ' (up to $' + CARRYOVER + ' carries over)' : '')) + '</div>'
      + '<div class="ta-embed-breakdown">'
      + '<div><div class="k">Daily target</div><div class="v">' + (days > 0 ? usd2(daily) : '—') + '</div></div>'
      + '<div><div class="k">Weekly target</div><div class="v">' + (days > 0 ? usd2(daily * 7) : '—') + '</div></div>'
      + '<div><div class="k">Carries to next year</div><div class="v">' + (opt === 'carryover' ? usd(carry) : '$0') + '</div></div>'
      + '<div><div class="k">Forfeit risk</div><div class="v">' + usd(forfeit) + '</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.fsaDeadline = { recalc: calc };
})();
