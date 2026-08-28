/*!
 * ToolAspect VIN Decoder Embed
 * Install: <div id="ta-vin-decoder"></div>
 *          <script src="https://toolaspect.com/embed/vin-decoder.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-vin-decoder';
  var BASE = 'https://toolaspect.com/vin-decoder/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-vin{width:100%;padding:12px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;'
    + 'font-size:1.1rem;font-family:monospace;letter-spacing:.1em;text-transform:uppercase;outline:none;text-align:center}'
    + '.ta-embed-vin:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-btn{display:block;margin:12px auto 0;background:var(--ta-accent);border:none;color:#fff;border-radius:8px;'
    + 'padding:10px 22px;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit}'
    + '.ta-embed-btn:disabled{opacity:.45;cursor:not-allowed}'
    + '.ta-embed-status{font-size:.8rem;text-align:center;margin-top:8px;color:var(--ta-muted);min-height:1.2em}'
    + '.ta-embed-status.ok{color:#16a34a}.ta-embed-status.err{color:#dc2626}'
    + '.ta-embed-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}'
    + '.ta-embed-cell{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-cell .k{font-size:.68rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.03em}'
    + '.ta-embed-cell .v{font-size:.95rem;font-weight:700;margin-top:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-grid{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'vin-decoder');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="vin-decoder"]')) {
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
    + '<div class="ta-embed-title">VIN Decoder</div>'
    + '<div class="ta-embed-subtitle">Check digit, WMI, model year — free, instant</div>'
    + '<div class="ta-embed-card">'
    + '<input type="text" class="ta-embed-vin" maxlength="21" placeholder="1HGCM82633A004352" spellcheck="false" autocomplete="off">'
    + '<button type="button" class="ta-embed-btn" disabled>Decode with NHTSA</button>'
    + '<div class="ta-embed-status">Type or paste a 17-character VIN</div>'
    + '<div class="ta-embed-grid"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var vinEl = root.querySelector('.ta-embed-vin');
  var btn = root.querySelector('.ta-embed-btn');
  var statusEl = root.querySelector('.ta-embed-status');
  var grid = root.querySelector('.ta-embed-grid');

  var TR = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, J: 1, K: 2, L: 3, M: 4, N: 5, P: 7, R: 9, S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9 };
  var WEIGHTS = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
  var YEAR = { A: '1980/2010', B: '1981/2011', C: '1982/2012', D: '1983/2013', E: '1984/2014', F: '1985/2015', G: '1986/2016', H: '1987/2017', J: '1988/2018', K: '1989/2019', L: '1990/2020', M: '1991/2021', N: '1992/2022', P: '1993/2023', R: '1994/2024', S: '1995/2025', T: '1996/2026', V: '1997/2027', W: '1998/2028', X: '1999/2029', Y: '2000/2030', '1': '2001', '2': '2002', '3': '2003', '4': '2004', '5': '2005', '6': '2006', '7': '2007', '8': '2008', '9': '2009' };
  var COUNTRY = { '1': 'United States', '4': 'United States', '5': 'United States', '2': 'Canada', '3': 'Mexico', '6': 'Australia', '8': 'South America', '9': 'South America', 'J': 'Japan', 'K': 'South Korea', 'L': 'China', 'M': 'India/Thailand', 'N': 'Turkey', 'S': 'United Kingdom', 'T': 'Czechia/Hungary', 'V': 'France/Spain', 'W': 'Germany', 'X': 'Russia', 'Y': 'Sweden/Finland', 'Z': 'Italy' };
  var WMI = { '1FA': 'Ford (US cars)', '1FT': 'Ford (US trucks)', '1FM': 'Ford SUV', '1G1': 'Chevrolet (cars)', '1GC': 'Chevrolet (trucks)', '1GT': 'GMC trucks', '1G6': 'Cadillac', '1C3': 'Chrysler cars', '1C4': 'Jeep', '1C6': 'Ram trucks', '1HG': 'Honda of America', '5FN': 'Honda (Alabama)', '2HG': 'Honda (Canada)', 'JHM': 'Honda (Japan)', '19U': 'Acura (US)', 'JH4': 'Acura (Japan)', '1N4': 'Nissan (US cars)', '3N1': 'Nissan (Mexico)', '5N1': 'Nissan (Smyrna)', 'JN1': 'Nissan (Japan)', '4T1': 'Toyota (Kentucky)', '5TD': 'Toyota (Texas)', 'JTD': 'Toyota (Japan)', 'JTM': 'Toyota (Japan SUV)', 'JTH': 'Lexus', 'JTJ': 'Lexus', '5YJ': 'Tesla (Fremont)', '7SA': 'Tesla (Austin)', 'LRW': 'Tesla (Shanghai)', '7FC': 'Rivian', 'KNA': 'Kia', 'KND': 'Kia (SUVs)', 'KMH': 'Hyundai', 'JF1': 'Subaru (Japan)', '4S3': 'Subaru (US)', 'JM1': 'Mazda (Japan)', 'WBA': 'BMW', 'WBS': 'BMW M', 'WVW': 'Volkswagen', '3VW': 'VW (Mexico)', 'WAU': 'Audi', 'TRU': 'Audi (Hungary)', 'WDB': 'Mercedes-Benz', 'WDD': 'Mercedes-Benz', 'WDC': 'Mercedes SUV', 'WP0': 'Porsche', 'ZFA': 'Fiat', 'ZFF': 'Ferrari', 'SAJ': 'Jaguar', 'SAL': 'Land Rover', 'YV1': 'Volvo', 'WMW': 'Mini' };

  function computeCheckDigit(vin) {
    var s = 0;
    for (var i = 0; i < 17; i++) {
      var c = vin.charAt(i);
      var v = /^[0-9]$/.test(c) ? +c : TR[c];
      if (v === undefined) return null;
      s += v * WEIGHTS[i];
    }
    var r = s % 11;
    return r === 10 ? 'X' : String(r);
  }

  function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function staticDecode() {
    var raw = vinEl.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    btn.disabled = raw.length !== 17;
    if (!raw.length) { statusEl.className = 'ta-embed-status'; statusEl.textContent = 'Type or paste a 17-character VIN'; grid.innerHTML = ''; return; }
    if (raw.length !== 17) { statusEl.className = 'ta-embed-status err'; statusEl.textContent = raw.length + ' of 17 characters'; grid.innerHTML = ''; return; }
    var bad = raw.match(/[IOQ]/g);
    var cd = computeCheckDigit(raw);
    if (bad || cd === null) {
      statusEl.className = 'ta-embed-status err';
      statusEl.textContent = bad ? 'VINs never contain the letters ' + bad.join(', ') : 'Invalid characters';
      grid.innerHTML = '';
      return;
    }
    var valid = cd === raw.charAt(8);
    statusEl.className = 'ta-embed-status ' + (valid ? 'ok' : 'err');
    statusEl.textContent = valid ? 'Check digit ' + cd + ' matches — structurally valid' : 'Check digit mismatch: computed ' + cd + ', position 9 reads ' + raw.charAt(8);
    var items = [
      ['Manufacturer (WMI)', WMI[raw.slice(0, 3)] || 'WMI ' + raw.slice(0, 3)],
      ['Region', COUNTRY[raw.charAt(0)] || 'Unknown'],
      ['Model year (pos 10)', YEAR[raw.charAt(9)] || 'Code ' + raw.charAt(9)],
      ['Serial (12-17)', raw.slice(11)]
    ];
    grid.innerHTML = items.map(function (x) {
      return '<div class="ta-embed-cell"><div class="k">' + x[0] + '</div><div class="v">' + esc(x[1]) + '</div></div>';
    }).join('');
  }

  function liveDecode() {
    var vin = vinEl.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    btn.disabled = true;
    statusEl.className = 'ta-embed-status'; statusEl.textContent = 'Querying NHTSA vPIC…';
    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/' + encodeURIComponent(vin) + '?format=json')
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (j) {
        var d = (j.Results && j.Results[0]) || {};
        var desc = [d.ModelYear, d.Make, d.Model].filter(Boolean).join(' ');
        statusEl.className = 'ta-embed-status ok';
        statusEl.textContent = desc ? desc + (d.BodyClass ? ' · ' + d.BodyClass : '') : 'NHTSA returned no data for this VIN';
        var items = [
          ['Make / Model', (d.Make || '—') + ' ' + (d.Model || '')],
          ['Body / Engine', (d.BodyClass || '—') + (d.EngineCylinders ? ' · ' + d.EngineCylinders + '-cyl ' + (d.FuelTypePrimary || '') : '')],
          ['Transmission', d.TransmissionStyle || '—'],
          ['Plant', (d.PlantCity ? d.PlantCity + ', ' : '') + (d.PlantState || d.PlantCountry || '—')]
        ];
        grid.innerHTML = items.map(function (x) {
          return '<div class="ta-embed-cell"><div class="k">' + x[0] + '</div><div class="v">' + esc(x[1]) + '</div></div>';
        }).join('');
      })
      .catch(function (e) {
        statusEl.className = 'ta-embed-status err';
        statusEl.textContent = 'NHTSA lookup failed (' + (e.message || 'network error') + ')';
        staticDecode();
      })
      .finally(function () { btn.disabled = false; });
  }

  vinEl.addEventListener('input', function () {
    this.value = this.value.toUpperCase();
    staticDecode();
  });
  btn.addEventListener('click', liveDecode);
  staticDecode();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.vinDecoder = { recalc: staticDecode };
})();
