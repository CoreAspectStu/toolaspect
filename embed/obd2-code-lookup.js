/*!
 * ToolAspect OBD2 Code Lookup Embed
 * Install: <div id="ta-obd2-code-lookup"></div>
 *          <script src="https://toolaspect.com/embed/obd2-code-lookup.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-obd2-code-lookup';
  var BASE = 'https://toolaspect.com/obd2-code-lookup/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-search{display:flex;gap:8px}'
    + '.ta-embed-search input{flex:1;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 12px;font-size:1rem;letter-spacing:.04em;outline:none;font-family:ui-monospace,monospace}'
    + '.ta-embed-search input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-search button{background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:10px 18px;font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-result{margin-top:14px;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:14px}'
    + '.ta-embed-code{font-size:1.35rem;font-weight:700;color:var(--ta-accent);font-family:ui-monospace,monospace}'
    + '.ta-embed-name{font-size:.95rem;font-weight:600;margin:3px 0 6px}'
    + '.ta-embed-line{font-size:.85rem;color:var(--ta-muted);margin:3px 0;line-height:1.55}'
    + '.ta-embed-cost{display:inline-block;margin-top:6px;padding:4px 10px;background:rgba(37,99,235,.1);border:1px solid var(--ta-accent);border-radius:14px;color:var(--ta-accent);font-size:.8rem;font-weight:600}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'obd2-code-lookup');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="obd2-code-lookup"]')) {
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
    + '<div class="ta-embed-title">OBD2 Code Lookup</div>'
    + '<div class="ta-embed-subtitle">What the check engine code means + typical fix cost</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-search"><input type="text" maxlength="6" placeholder="e.g. P0420" spellcheck="false"><button>Decode</button></div>'
    + '<div class="ta-embed-result"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var CODES = [
    ['P0420', 'Catalyst system efficiency below threshold (bank 1)', 'Aging converter, lazy downstream O2 sensor, exhaust leak, long-running misfire upstream', 'Test the O2 sensor before buying a converter', '$150–$400 (O2) · $1,300–$3,000+ (converter)'],
    ['P0430', 'Catalyst system efficiency below threshold (bank 2)', 'Same as P0420 on the second bank', 'Same diagnosis path as P0420', '$1,300–$3,000+ (converter)'],
    ['P0300', 'Random/multiple cylinder misfire', 'Worn plugs, failing coil, vacuum leak, bad fuel, injector', 'Plugs and coils first', '$150–$600'],
    ['P0171', 'System too lean (bank 1)', 'Vacuum leak, dirty MAF, weak fuel pump, clogged injector', 'Smoke-test for vacuum leaks', '$100–$500'],
    ['P0174', 'System too lean (bank 2)', 'Vacuum leak, intake gasket', 'Smoke-test the intake', '$100–$500'],
    ['P0455', 'EVAP large leak detected', 'Loose or bad gas cap, detached hose', 'Tighten/replace the gas cap first', '$15–$500'],
    ['P0442', 'EVAP small leak detected', 'Cracked hose, bad purge or vent valve seal', 'Smoke test finds it', '$100–$450'],
    ['P0128', 'Coolant thermostat below regulating temperature', 'Thermostat stuck open', 'Replace thermostat and coolant', '$250–$550'],
    ['P0401', 'EGR flow insufficient', 'Carbon-clogged EGR valve or ports, failed DPFE sensor', 'Clean EGR valve and ports', '$150–$700'],
    ['P0135', 'O2 sensor heater circuit (bank 1 sensor 1)', 'Failed heater element in the O2 sensor', 'Replace O2 sensor', '$150–$400'],
    ['P0141', 'O2 sensor heater circuit (bank 1 sensor 2)', 'Failed heater element, downstream sensor', 'Replace downstream O2 sensor', '$150–$400'],
    ['P0299', 'Turbocharger underboost', 'Boost leak, stuck wastegate, failing turbo', 'Pressure-test the charge pipes', '$100–$3,000'],
    ['P0441', 'EVAP incorrect purge flow', 'Bad purge valve, clogged line', 'Replace purge valve', '$150–$450'],
    ['P0507', 'Idle control RPM higher than expected', 'Vacuum leak, dirty throttle body', 'Clean throttle body', '$100–$500'],
    ['P0700', 'Transmission control system malfunction', 'Not a fault itself: the TCM flagged a problem', 'Read the transmission subcodes', 'varies'],
    ['P0011', 'Camshaft timing over-advanced (bank 1)', 'Old oil, clogged VVT solenoid', 'Oil change first, then solenoid', '$200–$700']
  ];

  var input = root.querySelector('input');
  var resultEl = root.querySelector('.ta-embed-result');

  function render(rec) {
    resultEl.innerHTML = ''
      + '<div class="ta-embed-code">' + rec[0] + '</div>'
      + '<div class="ta-embed-name">' + rec[1] + '</div>'
      + '<div class="ta-embed-line"><strong>Common causes:</strong> ' + rec[2] + '</div>'
      + '<div class="ta-embed-line"><strong>First move:</strong> ' + rec[3] + '</div>'
      + '<div class="ta-embed-cost">Typical fix: ' + rec[4] + '</div>';
  }

  function lookup() {
    var q = (input.value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (!q) { render(CODES[0]); return; }
    for (var i = 0; i < CODES.length; i++) {
      if (CODES[i][0] === q) { render(CODES[i]); return; }
    }
    resultEl.innerHTML = ''
      + '<div class="ta-embed-code">' + q + '</div>'
      + '<div class="ta-embed-name">' + (q.charAt(1) === '1' ? 'Manufacturer-specific code' : 'Not in the top-16 list') + '</div>'
      + '<div class="ta-embed-line">' + (q.charAt(1) === '1'
        ? 'The 1 means the automaker defines this code; check a make-specific manual.'
        : 'Reading it: letter = system (P powertrain), digit 3 = subsystem (1 fuel/air, 3 misfire, 4 emissions).') + '</div>'
      + '<div class="ta-embed-line">Full generic code database: <a href="' + BASE + '" target="_blank" rel="noopener" style="color:var(--ta-accent)">toolaspect.com/obd2-code-lookup</a></div>';
  }

  root.querySelector('button').addEventListener('click', lookup);
  input.addEventListener('input', lookup);
  lookup();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.obd2CodeLookup = { recalc: lookup };
})();
