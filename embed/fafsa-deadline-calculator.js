/*!
 * ToolAspect FAFSA Deadline Calculator Embed
 * Install: <div id="ta-fafsa-deadline-calculator"></div>
 *          <script src="https://toolaspect.com/embed/fafsa-deadline-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-fafsa-deadline-calculator';
  var BASE = 'https://toolaspect.com/fafsa-deadline-calculator/';

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
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'fafsa-deadline-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="fafsa-deadline-calculator"]')) {
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

  var STATES = {
    AL:'Set by your college',AK:'ASAP after Oct 1, 2025 (funds run out)',
    AZ:'April 1, 2026 (priority)',AR:'July 1, 2026',
    CA:'March 2, 2026 (postmark; CC Sept 2)',CO:'Set by your college',
    CT:'Feb 15, 2026 (priority)',DE:'May 15, 2026',DC:'June 25, 2026 (priority)',
    FL:'May 15, 2026',GA:'ASAP after Oct 1, 2025',HI:'Set by your college',
    ID:'March 1, 2026 (priority)',IL:'ASAP after Oct 1, 2025 (funds run out)',
    IN:'April 15, 2026 (main grants)',IA:'July 1, 2026',KS:'April 1, 2026 (priority)',
    KY:'ASAP after Oct 1, 2025 (funds run out)',LA:'Feb 1, 2026 recommended',
    ME:'May 1, 2026',MD:'March 1, 2026',MA:'May 1, 2026 (priority)',MI:'July 1, 2026',
    MN:'By the 30th day of your term',MS:'April 30, 2026 (HELP Grant)',
    MO:'Feb 2, 2026 (priority)',MT:'ASAP after Oct 1, 2025 (priority)',
    NE:'Set by your college',NV:'ASAP after Oct 1, 2025 (funds run out)',
    NH:'Set by your college',NJ:'April 15, 2026 (TAG)',NM:'Set by your college',
    NY:'June 30, 2027',NC:'June 1, 2026 (UNC system)',ND:'ASAP after Oct 1, 2025',
    OH:'October 1, 2026',OK:'Set by your college',OR:'ASAP after Oct 1, 2025 (funds run out)',
    PA:'May 1, 2026 (most applicants)',RI:'Set by your college',SC:'ASAP after Oct 1, 2025 (need-based)',
    SD:'Set by your college',TN:'March 2, 2026 (Promise/lottery)',TX:'January 15, 2026 (priority)',
    UT:'Set by your college',VT:'ASAP after Oct 1, 2025',VA:'ASAP after Oct 1, 2025',
    WA:'ASAP after Oct 1, 2025 (funds run out)',WV:'March 1, 2026 (PROMISE)',
    WI:'Set by your college',WY:'Set by your college'
  };
  var STATE_OPTS = {
    AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',
    CT:'Connecticut',DE:'Delaware',DC:'Washington, DC',FL:'Florida',GA:'Georgia',HI:'Hawaii',
    ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',
    ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',MS:'Mississippi',
    MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',NJ:'New Jersey',
    NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',OK:'Oklahoma',
    OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',
    TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',
    WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming'
  };

  var options = Object.keys(STATE_OPTS).map(function (k) {
    return '<option value="' + k + '">' + STATE_OPTS[k] + '</option>';
  }).join('');

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">FAFSA Deadline</div>'
    + '<div class="ta-embed-subtitle">2026-27 cycle: federal, state, and filing strategy</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Your state</label><select class="ta-state">' + options + '</select></div>'
    + '<div class="ta-embed-form-group"><label>School year</label>'
    + '<select class="ta-year">'
    + '<option value="2026-27" selected>2026-27</option>'
    + '<option value="2027-28">2027-28</option>'
    + '</select></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function calc() {
    var st = root.querySelector('.ta-state').value;
    var yr = root.querySelector('.ta-year').value;
    var html;
    if (yr === '2026-27') {
      html = '<div class="ta-embed-big">' + STATES[st] + '</div>'
        + '<div class="ta-embed-sub">State deadline · form opened Oct 1, 2025</div>'
        + '<div class="ta-embed-sub">Federal deadline: <strong>June 30, 2027, 11:59 p.m. CT</strong> · corrections to Sept 12, 2027</div>';
    } else {
      html = '<div class="ta-embed-big">Opens ~Oct 1, 2026</div>'
        + '<div class="ta-embed-sub">2027-28 state deadlines publish near the opening</div>'
        + '<div class="ta-embed-sub">Federal deadline: <strong>June 30, 2028</strong></div>';
    }
    resultEl.innerHTML = html;
  }

  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.fafsaDeadlineCalculator = { recalc: calc };
})();
