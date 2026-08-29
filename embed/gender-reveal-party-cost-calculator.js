/*!
 * ToolAspect Gender Reveal Party Cost Calculator Embed
 * Install: <div id="ta-gender-reveal-party-cost-calculator"></div>
 *          <script src="https://toolaspect.com/embed/gender-reveal-party-cost-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-gender-reveal-party-cost-calculator';
  var BASE = 'https://toolaspect.com/gender-reveal-party-cost-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#ec4899;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#f472b6}'
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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-mini-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;text-align:center;font-size:.85rem;margin-top:14px}'
    + '.ta-embed-mini-row strong{display:block;font-size:1.15rem;margin-top:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'gender-reveal-party-cost-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="gender-reveal-party-cost-calculator"]')) {
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
    if (window.console) console.warn('ToolAspect embed: no container #' + TARGET_ID + ' found.');
    return;
  }

  var PRESETS = {
    backyard: { venue: 0, food: 12, cake: 60, decor: 90, reveal: 45, games: 25, favors: 3, invites: 0, photo: 0 },
    hosted: { venue: 200, food: 15, cake: 95, decor: 175, reveal: 110, games: 45, favors: 4, invites: 35, photo: 0 },
    showstopper: { venue: 550, food: 28, cake: 160, decor: 325, reveal: 240, games: 70, favors: 6, invites: 65, photo: 350 }
  };
  var FIELDS = ['venue', 'food', 'cake', 'decor', 'reveal', 'games', 'favors', 'invites', 'photo'];

  var html = ''
    + '<div class="ta-embed-root">'
    + '<div class="ta-embed-title">Gender Reveal Party Cost Calculator</div>'
    + '<div class="ta-embed-subtitle">Venue, food, cake, decor, the reveal moment, and more for any guest count</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Guests</label><input type="number" id="tagr-guests" value="30" min="1"></div>'
    + '<div class="ta-embed-form-group" style="grid-column:span 2"><label>Preset</label><select id="tagr-preset">'
    + '<option value="backyard">Backyard DIY</option>'
    + '<option value="hosted" selected>Hosted party</option>'
    + '<option value="showstopper">Showstopper</option>'
    + '<option value="custom">Custom</option></select></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Venue ($)</label><input type="number" id="tagr-venue" value="200" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Food ($/guest)</label><input type="number" id="tagr-food" value="15" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Cake ($)</label><input type="number" id="tagr-cake" value="95" min="0"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Decor ($)</label><input type="number" id="tagr-decor" value="175" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Reveal moment ($)</label><input type="number" id="tagr-reveal" value="110" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Favors ($/guest)</label><input type="number" id="tagr-favors" value="4" min="0"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Games ($)</label><input type="number" id="tagr-games" value="45" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Invites ($)</label><input type="number" id="tagr-invites" value="35" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Photographer ($)</label><input type="number" id="tagr-photo" value="0" min="0"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tagr-total">&mdash;</div>'
    + '<div class="ta-embed-sub" id="tagr-sub">total host budget</div>'
    + '<div class="ta-embed-mini-row">'
    + '<div><span style="color:var(--ta-muted)">Per guest</span><strong id="tagr-per">&mdash;</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Each guest adds</span><strong id="tagr-marginal">&mdash;</strong></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#tagr-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function calc() {
    var guests = parseInt(g('guests').value) || 0;
    var v = {};
    FIELDS.forEach(function (f) { v[f] = parseFloat(g(f).value) || 0; });
    var total = v.venue + v.food * guests + v.cake + v.decor + v.reveal + v.games + v.favors * guests + v.invites + v.photo;
    g('total').textContent = money(total);
    g('sub').textContent = guests + ' guests';
    g('per').textContent = guests > 0 ? money(total / guests) : '—';
    g('marginal').textContent = money(v.food + v.favors);
  }

  function applyPreset() {
    var p = PRESETS[g('preset').value];
    if (!p) return;
    FIELDS.forEach(function (f) { g(f).value = p[f]; });
    calc();
  }

  FIELDS.forEach(function (f) {
    g(f).addEventListener('input', function () { g('preset').value = 'custom'; calc(); });
  });
  g('guests').addEventListener('input', calc);
  g('preset').addEventListener('change', applyPreset);
  calc();
})();
