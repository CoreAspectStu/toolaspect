/*!
 * ToolAspect SAT Score Calculator Embed
 * Install: <div id="ta-sat-score-calculator"></div>
 *          <script src="https://toolaspect.com/embed/sat-score-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-sat-score-calculator';
  var BASE = 'https://toolaspect.com/sat-score-calculator/';

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
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px 6px}'
    + '.ta-embed-cell .k{font-size:.7rem;color:var(--ta-muted);margin-bottom:3px;text-transform:uppercase;letter-spacing:.03em}'
    + '.ta-embed-cell .v{font-size:.95rem;font-weight:700;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'sat-score-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="sat-score-calculator"]')) {
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
    + '<div class="ta-embed-title">SAT Score Calculator</div>'
    + '<div class="ta-embed-subtitle">Raw correct answers to scaled score and percentile</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>R&amp;W Module 1 (0–33)</label><input type="number" class="ta-rw1" value="25" min="0" max="33" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>R&amp;W Module 2 (0–33)</label><input type="number" class="ta-rw2" value="28" min="0" max="33" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Math Module 1 (0–27)</label><input type="number" class="ta-m1" value="18" min="0" max="27" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Math Module 2 (0–27)</label><input type="number" class="ta-m2" value="20" min="0" max="27" step="1"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var RW = {0:[200,200],1:[200,200],2:[200,200],3:[200,200],4:[200,200],5:[200,200],6:[200,200],7:[200,210],8:[200,220],9:[210,230],10:[230,250],11:[240,260],12:[250,270],13:[260,280],14:[280,300],15:[290,310],16:[320,340],17:[340,360],18:[350,370],19:[360,380],20:[370,390],21:[370,390],22:[380,400],23:[390,410],24:[400,420],25:[410,430],26:[420,440],27:[420,440],28:[430,450],29:[440,460],30:[450,470],31:[460,480],32:[460,480],33:[470,490],34:[480,500],35:[490,510],36:[490,510],37:[500,520],38:[510,530],39:[520,540],40:[530,550],41:[540,560],42:[540,560],43:[550,570],44:[560,580],45:[570,590],46:[580,600],47:[590,610],48:[590,610],49:[600,620],50:[610,630],51:[620,640],52:[630,650],53:[630,650],54:[640,660],55:[650,670],56:[660,680],57:[670,690],58:[680,700],59:[690,710],60:[700,720],61:[710,730],62:[720,740],63:[730,750],64:[750,770],65:[770,790],66:[790,800]};
  var MA = {0:[200,200],1:[200,200],2:[200,200],3:[200,200],4:[200,200],5:[200,200],6:[200,200],7:[200,220],8:[200,230],9:[220,250],10:[250,280],11:[280,310],12:[290,320],13:[300,330],14:[310,340],15:[320,350],16:[330,360],17:[330,360],18:[340,370],19:[350,380],20:[360,390],21:[370,400],22:[370,400],23:[380,410],24:[390,420],25:[400,430],26:[420,450],27:[430,460],28:[440,470],29:[460,490],30:[470,500],31:[480,510],32:[500,530],33:[510,540],34:[520,550],35:[530,560],36:[550,580],37:[560,590],38:[570,600],39:[580,610],40:[590,620],41:[600,630],42:[620,650],43:[630,660],44:[650,680],45:[670,700],46:[690,720],47:[710,740],48:[730,760],49:[740,770],50:[750,780],51:[760,790],52:[770,800],53:[780,800],54:[790,800]};
  var PCT = {1600:'99+',1550:'99',1500:'97',1450:'95',1400:'93',1350:'89',1300:'85',1250:'80',1200:'75',1150:'69',1100:'62',1050:'55',1000:'47',950:'39',900:'32',850:'24',800:'17',750:'11',700:'6',650:'3',600:'2',550:'1',500:'1',450:'1-',400:'1-'};

  function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, isNaN(v) ? 0 : v)); }

  function pctAt(score) {
    var s = clamp(score, 400, 1600);
    var keys = Object.keys(PCT).map(Number).sort(function (a, b) { return b - a; });
    for (var i = 0; i < keys.length; i++) { if (s >= keys[i]) return PCT[keys[i]]; }
    return '1-';
  }

  function calc() {
    var rw1 = clamp(parseInt(root.querySelector('.ta-rw1').value, 10) || 0, 0, 33);
    var rw2 = clamp(parseInt(root.querySelector('.ta-rw2').value, 10) || 0, 0, 33);
    var m1 = clamp(parseInt(root.querySelector('.ta-m1').value, 10) || 0, 0, 27);
    var m2 = clamp(parseInt(root.querySelector('.ta-m2').value, 10) || 0, 0, 27);
    var rwRaw = rw1 + rw2, mRaw = m1 + m2;
    var rwS = RW[rwRaw], mS = MA[mRaw];
    var lo = rwS[0] + mS[0], hi = rwS[1] + mS[1];
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + lo + '–' + hi + '</div>'
      + '<div class="ta-embed-sub">Percentile ' + pctAt(lo) + ' to ' + pctAt(hi) + ' (user group)</div>'
      + '<div class="ta-embed-grid">'
      + '<div class="ta-embed-cell"><div class="k">R&amp;W</div><div class="v">' + rwS[0] + '–' + rwS[1] + '</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Math</div><div class="v">' + mS[0] + '–' + mS[1] + '</div></div>'
      + '<div class="ta-embed-cell"><div class="k">Raw</div><div class="v">' + rwRaw + '/66 · ' + mRaw + '/54</div></div>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.satScoreCalculator = { recalc: calc };
})();
