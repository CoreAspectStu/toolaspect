/*!
 * ToolAspect Vet Tech Salary by State Calculator Embed
 * Install: <div id="ta-vet-tech-salary-by-state-calculator"></div>
 *          <script src="https://toolaspect.com/embed/vet-tech-salary-by-state-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-vet-tech-salary-by-state-calculator';
  var BASE = 'https://toolaspect.com/vet-tech-salary-by-state-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-line{display:flex;justify-content:space-between;font-size:.85rem;color:var(--ta-text);padding:6px 2px;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-line:last-child{border-bottom:none}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'vet-tech-salary-by-state-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="vet-tech-salary-by-state-calculator"]')) {
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

  var STATES = [{n:"District of Columbia",lo:50390,mid:61270,hi:81990,r:1},{n:"California",lo:48240,mid:60630,hi:75860,r:2},{n:"Washington",lo:46390,mid:59740,hi:77300,r:3},{n:"New York",lo:47640,mid:59010,hi:78760,r:4},{n:"Minnesota",lo:42640,mid:57270,hi:65120,r:5},{n:"Oregon",lo:39920,mid:55810,hi:77710,r:6},{n:"Virginia",lo:35590,mid:52090,hi:75770,r:7},{n:"Connecticut",lo:41480,mid:50950,hi:75090,r:8},{n:"Maine",lo:47340,mid:50810,hi:57690,r:9},{n:"Nevada",lo:34700,mid:50250,hi:65420,r:10},{n:"Michigan",lo:37410,mid:49710,hi:63020,r:11},{n:"Colorado",lo:37820,mid:49650,hi:60380,r:12},{n:"Massachusetts",lo:37500,mid:49540,hi:64470,r:13},{n:"Vermont",lo:48050,mid:49490,hi:58430,r:14},{n:"New Jersey",lo:37870,mid:49050,hi:75310,r:15},{n:"North Dakota",lo:35960,mid:48790,hi:56980,r:16},{n:"New Hampshire",lo:37450,mid:48780,hi:60840,r:17},{n:"Indiana",lo:37820,mid:48720,hi:59490,r:18},{n:"Hawaii",lo:35990,mid:48550,hi:62660,r:19},{n:"Delaware",lo:37250,mid:48370,hi:61890,r:20},{n:"Ohio",lo:34760,mid:47990,hi:61360,r:21},{n:"North Carolina",lo:35890,mid:47620,hi:59420,r:22},{n:"Maryland",lo:38750,mid:47350,hi:74460,r:23},{n:"Wisconsin",lo:37900,mid:47020,hi:59110,r:24},{n:"Alaska",lo:37010,mid:46480,hi:75820,r:25},{n:"Illinois",lo:38580,mid:46440,hi:60520,r:26},{n:"Pennsylvania",lo:36480,mid:46430,hi:60280,r:27},{n:"Florida",lo:36600,mid:46380,hi:57870,r:28},{n:"Arizona",lo:37870,mid:46300,hi:58350,r:29},{n:"Kansas",lo:36780,mid:45810,hi:58250,r:30},{n:"Iowa",lo:36290,mid:45560,hi:63860,r:31},{n:"Rhode Island",lo:37570,mid:45310,hi:63590,r:32},{n:"South Dakota",lo:35780,mid:45300,hi:50440,r:33},{n:"New Mexico",lo:31350,mid:44790,hi:56870,r:34},{n:"Nebraska",lo:37770,mid:43680,hi:57310,r:35},{n:"Missouri",lo:31940,mid:43520,hi:49260,r:36},{n:"Georgia",lo:35060,mid:43060,hi:58590,r:37},{n:"Tennessee",lo:31660,mid:42810,hi:57040,r:38},{n:"Idaho",lo:31900,mid:42120,hi:48660,r:39},{n:"Montana",lo:35420,mid:41170,hi:57660,r:40},{n:"Utah",lo:29640,mid:40560,hi:55330,r:41},{n:"Kentucky",lo:28490,mid:39590,hi:50530,r:42},{n:"Texas",lo:30320,mid:39410,hi:54610,r:43},{n:"Oklahoma",lo:31390,mid:39100,hi:53880,r:44},{n:"South Carolina",lo:33870,mid:39020,hi:57970,r:45},{n:"Wyoming",lo:28630,mid:38650,hi:49260,r:46},{n:"Arkansas",lo:27250,mid:38360,hi:47820,r:47},{n:"West Virginia",lo:29430,mid:37700,hi:48170,r:48},{n:"Alabama",lo:28590,mid:36590,hi:49060,r:49},{n:"Mississippi",lo:29120,mid:36380,hi:46710,r:50},{n:"Louisiana",lo:28490,mid:35530,hi:47690,r:51}];

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Vet Tech Salary by State</div>'
    + '<div class="ta-embed-subtitle">BLS OEWS May 2025 medians, all 50 states plus DC</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>State</label><select class="ta-state"></select></div>'
    + '<div class="ta-embed-form-group"><label>&nbsp;</label><button type="button" class="ta-nat" style="width:100%;padding:10px 12px;border-radius:8px;border:1px solid var(--ta-border);background:var(--ta-bg);color:var(--ta-text);font-family:inherit;font-size:.85rem;cursor:pointer">National median</button></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big">—</div>'
    + '<div class="ta-embed-sub"></div>'
    + '<div class="ta-embed-line"><span>Rank among 51 areas</span><strong class="ta-rank">—</strong></div>'
    + '<div class="ta-embed-line"><span>Median hourly equivalent</span><strong class="ta-hr">—</strong></div>'
    + '<div class="ta-embed-line"><span>Pay band (10th – 90th)</span><strong class="ta-band">—</strong></div>'
    + '<div class="ta-embed-line"><span>vs national median ($47,380)</span><strong class="ta-vs">—</strong></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var sel = root.querySelector('.ta-state');
  STATES.forEach(function (s) {
    var o = document.createElement('option');
    o.value = s.n;
    o.textContent = s.n;
    sel.appendChild(o);
  });

  function usd(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function show(s) {
    var big = root.querySelector('.ta-embed-big');
    var sub = root.querySelector('.ta-embed-sub');
    big.textContent = usd(s.mid);
    sub.textContent = 'Median veterinary technician wage (May 2025)';
    root.querySelector('.ta-rank').textContent = '#' + s.r + ' of 51';
    root.querySelector('.ta-hr').textContent = (s.mid / 2080).toFixed(2) + '/hr';
    root.querySelector('.ta-band').textContent = usd(s.lo) + ' – ' + usd(s.hi);
    var d = s.mid - 47380;
    root.querySelector('.ta-vs').textContent = (d >= 0 ? '+' : '−') + usd(Math.abs(d));
  }

  sel.addEventListener('change', function () {
    var s = STATES.filter(function (x) { return x.n === sel.value; })[0];
    if (s) show(s);
  });
  root.querySelector('.ta-nat').addEventListener('click', function () {
    var big = root.querySelector('.ta-embed-big');
    big.textContent = usd(47380);
    root.querySelector('.ta-embed-sub').textContent = 'National median veterinary technician wage (May 2025)';
    root.querySelector('.ta-rank').textContent = '—';
    root.querySelector('.ta-hr').textContent = '22.78/hr';
    root.querySelector('.ta-band').textContent = '$35,710 – $63,180';
    root.querySelector('.ta-vs').textContent = '$0';
  });

  show(STATES.filter(function (x) { return x.n === 'California'; })[0]);

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.vetTechSalaryByState = { recalc: show };
})();
