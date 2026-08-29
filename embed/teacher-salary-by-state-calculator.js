/*!
 * ToolAspect Teacher Salary by State Embed
 * Install: <div id="ta-teacher-salary-by-state-calculator"></div>
 *          <script src="https://toolaspect.com/embed/teacher-salary-by-state-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-teacher-salary-by-state-calculator';
  var BASE = 'https://toolaspect.com/teacher-salary-by-state-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#4f46e5;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#818cf8}'
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
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-line{display:flex;justify-content:space-between;font-size:.88rem;padding:6px 0;border-bottom:1px solid var(--ta-border)}'
    + '.ta-embed-line:last-child{border-bottom:none}'
    + '.ta-embed-line .k{color:var(--ta-muted)}'
    + '.ta-embed-line .v{font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'teacher-salary-by-state-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="teacher-salary-by-state-calculator"]')) {
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

  var html = ''
    + '<div class="ta-embed-root">'
    + '<div class="ta-embed-title">Teacher Salary by State</div>'
    + '<div class="ta-embed-subtitle">NEA 2024-25 averages, all 50 states + DC</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>State</label><select id="tatss-state"></select></div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="tatss-avg">&mdash;</div>'
    + '<div class="ta-embed-sub" id="tatss-avgrank">average teacher salary</div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-line"><span class="k">2023-24 average</span><span class="v" id="tatss-prev">&mdash;</span></div>'
    + '<div class="ta-embed-line"><span class="k">One-year change</span><span class="v" id="tatss-chg">&mdash;</span></div>'
    + '<div class="ta-embed-line"><span class="k">vs national average ($74,495)</span><span class="v" id="tatss-vsnat">&mdash;</span></div>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Starting salary ($)</label><input type="number" id="tatss-start" value="48112" min="0" step="100"></div>'
    + '<div class="ta-embed-form-group"><label>Step %/yr</label><input type="number" id="tatss-step" value="3" min="0" max="10" step="0.25"></div>'
    + '<div class="ta-embed-form-group"><label>Years</label><input type="number" id="tatss-yrs" value="10" min="1" max="35" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-line"><span class="k">Salary in final year</span><span class="v" id="tatss-final">&mdash;</span></div>'
    + '<div class="ta-embed-line"><span class="k">Cumulative earnings</span><span class="v" id="tatss-cum">&mdash;</span></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  var STATES = [{n:"California",p:101084,c:103552,r:1},{n:"New York",p:95615,c:98655,r:2},{n:"Washington",p:91720,c:96589,r:3},{n:"District of Columbia",p:86663,c:95077,r:4},{n:"Massachusetts",p:91014,c:93554,r:5},{n:"Connecticut",p:86511,c:89593,r:6},{n:"Maryland",p:84338,c:87409,r:7},{n:"Rhode Island",p:82189,c:85772,r:8},{n:"New Jersey",p:82877,c:84974,r:9},{n:"Oregon",p:77130,c:81657,r:10},{n:"Alaska",p:78256,c:81450,r:11},{n:"Pennsylvania",p:76961,c:79078,r:12},{n:"Illinois",p:75978,c:78495,r:13},{n:"Delaware",p:71186,c:76570,r:14},{n:"Minnesota",p:72430,c:76234,r:15},{n:"Hawaii",p:74222,c:75860,r:16},{n:"Nevada",p:66930,c:74812,r:17},{n:"Utah",p:69161,c:72882,r:18},{n:"Colorado",p:68647,c:72781,r:19},{n:"Vermont",p:69555,c:71871,r:20},{n:"Georgia",p:67641,c:71524,r:21},{n:"Michigan",p:69068,c:71023,r:22},{n:"Ohio",p:68236,c:70586,r:23},{n:"New Mexico",p:68440,c:69736,r:24},{n:"New Hampshire",p:67170,c:69432,r:25},{n:"Virginia",p:66327,c:69254,r:26},{n:"Wisconsin",p:65762,c:67794,r:27},{n:"Wyoming",p:63669,c:65668,r:28},{n:"Maine",p:62569,c:65621,r:29},{n:"Iowa",p:62399,c:65312,r:30},{n:"Arizona",p:62714,c:64291,r:31},{n:"South Carolina",p:60763,c:64050,r:32},{n:"Texas",p:62463,c:63749,r:33},{n:"Nebraska",p:60239,c:63326,r:34},{n:"Alabama",p:61912,c:62985,r:35},{n:"Idaho",p:61516,c:62786,r:36},{n:"Oklahoma",p:61330,c:61931,r:37},{n:"Indiana",p:58620,c:61661,r:38},{n:"Kansas",p:58276,c:61470,r:39},{n:"Tennessee",p:58610,c:61222,r:40},{n:"North Dakota",p:58581,c:60704,r:41},{n:"Kentucky",p:58325,c:60594,r:42},{n:"North Carolina",p:58292,c:60323,r:43},{n:"Montana",p:57556,c:59305,r:44},{n:"Arkansas",p:58337,c:59193,r:45},{n:"South Dakota",p:56328,c:58486,r:46},{n:"West Virginia",p:55300,c:58099,r:47},{n:"Missouri",p:55132,c:57366,r:48},{n:"Louisiana",p:55911,c:56785,r:49},{n:"Florida",p:54875,c:56663,r:50},{n:"Mississippi",p:53704,c:54975,r:51}];

  function g(id) { return target.querySelector('#tatss-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  var sel = g('state');
  STATES.forEach(function (s) {
    var o = document.createElement('option');
    o.value = s.n;
    o.textContent = s.n + ' — ' + money(s.c);
    sel.appendChild(o);
  });

  function showState(name) {
    var s = STATES.filter(function (x) { return x.n === name; })[0];
    if (!s) return;
    g('avg').textContent = money(s.c);
    g('avgrank').textContent = '#' + s.r + ' of 51 (2024-25, NEA)';
    g('prev').textContent = money(s.p);
    g('chg').textContent = ((s.c / s.p - 1) * 100).toFixed(1) + '%';
    var d = s.c - 74495;
    g('vsnat').textContent = (d >= 0 ? '+' : '-') + money(Math.abs(d));
  }
  sel.addEventListener('change', function () { showState(sel.value); });

  function project() {
    var start = parseFloat(g('start').value) || 0;
    var step = (parseFloat(g('step').value) || 0) / 100;
    var yrs = Math.max(1, Math.round(parseFloat(g('yrs').value) || 1));
    var final = start * Math.pow(1 + step, yrs - 1);
    var cum = 0;
    for (var y = 0; y < yrs; y++) cum += start * Math.pow(1 + step, y);
    g('final').textContent = money(final);
    g('cum').textContent = money(cum);
  }
  ['start', 'step', 'yrs'].forEach(function (id) {
    g(id).addEventListener('input', project);
  });

  showState('California');
  project();
})();
