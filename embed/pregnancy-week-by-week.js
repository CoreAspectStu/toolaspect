/*!
 * ToolAspect Pregnancy Week by Week Embed
 * Install: <div id="ta-pregnancy-week-by-week"></div>
 *          <script src="https://toolaspect.com/embed/pregnancy-week-by-week.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-pregnancy-week-by-week';
  var BASE = 'https://toolaspect.com/pregnancy-week-by-week/';

  var SIZES = { 1:'—',2:'—',3:'poppy seed',4:'poppy seed',5:'sesame seed',6:'lentil',7:'blueberry',8:'kidney bean',9:'green olive',
    10:'prune (1.2 in, 0.14 oz)',11:'fig (1.6 in, 0.25 oz)',12:'lime (2.1 in, 0.5 oz)',13:'peach (2.9 in, 0.8 oz)',
    14:'lemon (3.4 in, 1.5 oz)',15:'apple (4.1 in, 2.5 oz)',16:'avocado (4.6 in, 3.5 oz)',17:'turnip (5.1 in, 4.9 oz)',
    18:'bell pepper (5.6 in, 6.7 oz)',19:'heirloom tomato (6.0 in, 8.5 oz)',20:'banana (~10 in, 10.6 oz)',
    21:'carrot (10.5 in, 12.7 oz)',22:'spaghetti squash (10.9 in, 15.2 oz)',23:'large mango (11.4 in, 1.1 lb)',
    24:'ear of corn (11.8 in, 1.3 lb)',25:'rutabaga (13.6 in, 1.5 lb)',26:'zucchini (14.0 in, 1.7 lb)',
    27:'cauliflower (14.4 in, 1.9 lb)',28:'eggplant (14.8 in, 2.2 lb)',29:'butternut squash (15.2 in, 2.5 lb)',
    30:'cabbage (15.7 in, 2.9 lb)',31:'coconut (16.2 in, 3.3 lb)',32:'jicama (16.7 in, 3.7 lb)',
    33:'pineapple (17.2 in, 4.2 lb)',34:'cantaloupe (17.7 in, 4.7 lb)',35:'honeydew melon (18.2 in, 5.2 lb)',
    36:'head of romaine (18.7 in, 5.8 lb)',37:'bunch of kale (19.1 in, 6.3 lb)',38:'leek (19.6 in, 6.8 lb)',
    39:'mini watermelon (20.0 in, 7.3 lb)',40:'small pumpkin (20.2 in, 7.6 lb)' };

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#db2777;'
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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-track{height:10px;background:var(--ta-bg);border-radius:5px;overflow:hidden;margin-top:14px}'
    + '.ta-embed-fill{height:100%;background:var(--ta-accent);border-radius:5px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'pregnancy-week-by-week');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="pregnancy-week-by-week"]')) {
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

  var d = new Date(); d.setDate(d.getDate() - 98);
  var def = d.toISOString().slice(0, 10);

  root.innerHTML = ''
    + '<div class="ta-embed-title">How Many Weeks Pregnant Am I?</div>'
    + '<div class="ta-embed-subtitle">Gestational age, trimester and baby size from your last period</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Calculate from</label><select class="ta-mode">'
    + '<option value="lmp" selected>Last period (LMP)</option><option value="due">Due date</option><option value="conception">Conception date</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Date</label><input type="date" class="ta-date" value="' + def + '"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var modeSel = root.querySelector('.ta-mode');

  function calc() {
    var val = root.querySelector('.ta-date').value;
    if (!val) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Choose your date</div>';
      return;
    }
    var p = val.split('-');
    var raw = new Date(+p[0], +p[1] - 1, +p[2], 12, 0, 0);
    var lmp = new Date(raw);
    var mode = modeSel.value;
    if (mode === 'due') { lmp = new Date(raw); lmp.setDate(lmp.getDate() - 280); }
    else if (mode === 'conception') { lmp = new Date(raw); lmp.setDate(lmp.getDate() - 14); }
    var today = new Date(); today.setHours(12, 0, 0, 0);
    var days = Math.round((today - lmp) / 86400000);
    var due = new Date(lmp); due.setDate(due.getDate() + 280);
    var left = Math.round((due - today) / 86400000);
    if (days < 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">That date is in the future</div>';
      return;
    }
    var wk = Math.floor(days / 7), dd = days % 7, inWeek = Math.min(40, wk + 1);
    var pct = Math.max(0, Math.min(100, days / 280 * 100));
    var tri = days < 98 ? 'First trimester' : days < 196 ? 'Second trimester' : days < 294 ? 'Third trimester' : 'Postterm';
    var size = SIZES[inWeek] || '';
    var dueStr = due.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + wk + 'w ' + dd + 'd</div>'
      + '<div class="ta-embed-sub">Week ' + inWeek + ' of 40 · ' + tri + ' · ' + pct.toFixed(0) + '% complete</div>'
      + (size && size !== '—' ? '<div class="ta-embed-sub">Baby this week: about the size of <strong>' + size + '</strong></div>' : '')
      + '<div class="ta-embed-sub">Due ' + dueStr + (left > 0 ? ' · ' + left + ' days to go' : left === 0 ? ' · today!' : '') + '</div>'
      + '<div class="ta-embed-track"><div class="ta-embed-fill" style="width:' + pct + '%"></div></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.pregnancyWeekByWeek = { recalc: calc };
})();
