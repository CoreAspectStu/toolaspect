/*!
 * ToolAspect Bar Mitzvah Cost Calculator Embed
 * Install: <div id="ta-bar-mitzvah-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/bar-mitzvah-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-bar-mitzvah-cost-calculator';
  var BASE = 'https://toolaspect.com/bar-mitzvah-cost-calculator/';

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
    + '.ta-embed-mode-toggle{display:flex;gap:6px;margin-bottom:14px;justify-content:center}'
    + '.ta-embed-mode-btn{background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;'
    + 'padding:7px 16px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode-btn.ta-active{background:rgba(37,99,235,.1);border-color:var(--ta-accent);color:var(--ta-text);font-weight:600}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-mode-btn.ta-active{background:rgba(96,165,250,.12)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'bar-mitzvah-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="bar-mitzvah-cost-calculator"]')) {
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
    + '<div class="ta-embed-title">Bar &amp; Bat Mitzvah Cost</div>'
    + '<div class="ta-embed-subtitle">Line-by-line budget with presets</div>'
    + '<div class="ta-embed-mode-toggle">'
    + '<button type="button" class="ta-embed-mode-btn" data-mode="budget">Budget</button>'
    + '<button type="button" class="ta-embed-mode-btn ta-active" data-mode="typical">Typical</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-mode="lavish">Full-Scale</button>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guests</label><input type="number" class="ta-guests" value="100" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Catering ($/guest)</label><input type="number" class="ta-head" value="75" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Tutoring ($)</label><input type="number" class="ta-tutor" value="2800" min="0" step="100"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Venue ($)</label><input type="number" class="ta-venue" value="3500" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>DJ ($)</label><input type="number" class="ta-dj" value="2200" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Photographer ($)</label><input type="number" class="ta-photo" value="1400" min="0" step="100"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Decor + Candles ($)</label><input type="number" class="ta-decor" value="700" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Invitations ($)</label><input type="number" class="ta-invites" value="350" min="0" step="25"></div>'
    + '<div class="ta-embed-form-group"><label>Kiddush ($)</label><input type="number" class="ta-kiddush" value="1200" min="0" step="100"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Favor ($/guest)</label><input type="number" class="ta-favor" value="8" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Party Planner ($)</label><input type="number" class="ta-planner" value="0" min="0" step="100"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var PRESETS = {
    budget: { guests: 60, head: 45, tutor: 1800, venue: 1000, dj: 1200, photo: 600, decor: 300, invites: 150, kiddush: 500, favor: 5, planner: 0 },
    typical: { guests: 100, head: 75, tutor: 2800, venue: 3500, dj: 2200, photo: 1400, decor: 700, invites: 350, kiddush: 1200, favor: 8, planner: 0 },
    lavish: { guests: 150, head: 125, tutor: 5000, venue: 8000, dj: 3500, photo: 2500, decor: 1200, invites: 600, kiddush: 2000, favor: 12, planner: 4500 }
  };

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function calc() {
    var g = val('.ta-guests');
    var catering = g * val('.ta-head');
    var favors = g * val('.ta-favor');
    var total = catering + favors + val('.ta-tutor') + val('.ta-venue') + val('.ta-dj')
      + val('.ta-photo') + val('.ta-decor') + val('.ta-invites') + val('.ta-kiddush') + val('.ta-planner');
    if (total <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter your line items</div>';
      return;
    }
    resultEl.innerHTML = ''
      + '<div class="ta-embed-big">' + usd(total) + '</div>'
      + '<div class="ta-embed-sub">Catering: ' + usd(catering) + ' (' + (catering / total * 100).toFixed(0) + '% of budget)</div>'
      + '<div class="ta-embed-sub">Per guest: ' + (g > 0 ? usd(total / g) : '—') + '</div>';
  }

  root.addEventListener('input', calc);
  root.querySelector('.ta-embed-mode-toggle').addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-mode-btn');
    if (!btn) return;
    root.querySelectorAll('.ta-embed-mode-btn').forEach(function (b) { b.classList.remove('ta-active'); });
    btn.classList.add('ta-active');
    var p = PRESETS[btn.getAttribute('data-mode')];
    var map = { '.ta-guests': p.guests, '.ta-head': p.head, '.ta-tutor': p.tutor, '.ta-venue': p.venue, '.ta-dj': p.dj, '.ta-photo': p.photo, '.ta-decor': p.decor, '.ta-invites': p.invites, '.ta-kiddush': p.kiddush, '.ta-favor': p.favor, '.ta-planner': p.planner };
    Object.keys(map).forEach(function (k) { root.querySelector(k).value = map[k]; });
    calc();
  });

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.barMitzvahCost = { recalc: calc };
})();
