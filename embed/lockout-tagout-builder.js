/*!
 * ToolAspect Lockout Tagout Builder Embed
 * Install: <div id="ta-lockout-tagout-builder"></div>
 *          <script src="https://toolaspect.com/embed/lockout-tagout-builder.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-lockout-tagout-builder';
  var BASE = 'https://toolaspect.com/lockout-tagout-builder/';

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
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-checks{display:grid;grid-template-columns:1fr 1fr;gap:8px}'
    + '.ta-embed-check{display:flex;align-items:center;gap:7px;font-size:.82rem;color:var(--ta-text);background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 10px;cursor:pointer}'
    + '.ta-embed-check input{width:auto;accent-color:var(--ta-accent)}'
    + '.ta-embed-doc{background:#fff;color:#111;border-radius:10px;padding:20px;font-family:Helvetica,Arial,sans-serif;margin-bottom:12px}'
    + '.ta-embed-doc h4{margin:0 0 2px;font-size:1rem;color:#111}'
    + '.ta-embed-doc .sub{color:#555;font-size:.72rem;margin-bottom:10px}'
    + '.ta-embed-doc table{width:100%;border-collapse:collapse;font-size:.72rem;margin:8px 0 12px}'
    + '.ta-embed-doc th,.ta-embed-doc td{border:1px solid #999;padding:5px 7px;text-align:left}'
    + '.ta-embed-doc th{background:#eee}'
    + '.ta-embed-doc ol{padding-left:1.3rem;margin:0 0 10px;font-size:.78rem;line-height:1.6}'
    + '.ta-embed-doc ol li{margin-bottom:4px}'
    + '.ta-embed-note{font-size:.68rem;color:#666;border-top:1px solid #ccc;padding-top:8px;line-height:1.5}'
    + '.ta-embed-more{font-size:.78rem;color:var(--ta-muted);text-align:center;margin-top:10px}'
    + '.ta-embed-more a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-checks{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'lockout-tagout-builder');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="lockout-tagout-builder"]')) {
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
    + '<div class="ta-embed-title">Lockout Tagout Procedure Builder</div>'
    + '<div class="ta-embed-subtitle">Machine-specific energy control procedures per 29 CFR 1910.147</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Company / facility</label><input type="text" class="ta-company" value="Acme Manufacturing"></div>'
    + '<div class="ta-embed-form-group"><label>Machine / equipment</label><input type="text" class="ta-machine" value="CNC Mill — Haas VF-2"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Energy sources</label>'
    + '<div class="ta-embed-checks">'
    + '<label class="ta-embed-check"><input type="checkbox" data-e="elec" checked> Electrical</label>'
    + '<label class="ta-embed-check"><input type="checkbox" data-e="pneu" checked> Pneumatic</label>'
    + '<label class="ta-embed-check"><input type="checkbox" data-e="hyd" checked> Hydraulic</label>'
    + '<label class="ta-embed-check"><input type="checkbox" data-e="mech"> Stored mechanical</label>'
    + '<label class="ta-embed-check"><input type="checkbox" data-e="grav"> Gravity / suspended</label>'
    + '<label class="ta-embed-check"><input type="checkbox" data-e="thermal"> Thermal / steam</label>'
    + '<label class="ta-embed-check"><input type="checkbox" data-e="chem"> Chemical / process</label>'
    + '</div></div>'
    + '</div>'
    + '<div class="ta-embed-doc ta-doc"></div>'
    + '<div class="ta-embed-more">Print the full procedure with isolation-device fields, restart sequence and annual inspection block on <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a>.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var ENERGY = [
    { id: 'elec', label: 'Electrical', stored: 'Discharge capacitors and ground per manual' },
    { id: 'pneu', label: 'Pneumatic', stored: 'Bleed downstream air; verify gauge reads zero' },
    { id: 'hyd', label: 'Hydraulic', stored: 'Release pressure; block cylinders against motion' },
    { id: 'mech', label: 'Stored mechanical', stored: 'Full coast-down; install pins or stops' },
    { id: 'grav', label: 'Gravity', stored: 'Lower load to rest or block with rated stands' },
    { id: 'thermal', label: 'Thermal', stored: 'Allow to cool; verify surface temperature' },
    { id: 'chem', label: 'Chemical', stored: 'Drain and flush; verify zero with detector' }
  ];
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function val(sel) { var el = root.querySelector(sel); return el ? el.value.trim() : ''; }
  function render() {
    var machine = val('.ta-machine') || '[machine]';
    var company = val('.ta-company') || '[company]';
    var active = ENERGY.filter(function (e) {
      var cb = root.querySelector('[data-e="' + e.id + '"]');
      return cb && cb.checked;
    });
    var h = '<h4>' + esc(company) + ' — Energy Control Procedure</h4>'
      + '<div class="sub">LOTO-___ · ' + esc(machine) + ' · 29 CFR 1910.147</div>'
      + '<table><tr><th>Energy type</th><th>Stored energy release</th></tr>';
    active.forEach(function (e) { h += '<tr><td>' + e.label + '</td><td>' + e.stored + '</td></tr>'; });
    if (!active.length) h += '<tr><td colspan="2">check at least one energy source</td></tr>';
    h += '</table><ol>'
      + '<li><b>Prepare</b> — identify all energy sources and magnitude for ' + esc(machine) + '</li>'
      + '<li><b>Notify</b> affected employees (1910.147(c)(9))</li>'
      + '<li><b>Shut down</b> by normal operating controls</li>'
      + '<li><b>Isolate</b> at every disconnect, valve, or block</li>'
      + '<li><b>Apply</b> a personal lock and tag per employee at each isolation point</li>';
    active.forEach(function (e) { h += '<li><b>Stored energy (' + e.label + ')</b> — ' + e.stored + '</li>'; });
    h += '<li><b>Verify</b> — attempt a start, return to off, confirm zero energy</li>'
      + '</ol>'
      + '<div class="ta-embed-note">Shutdown sequence per 1910.147(d); each lock is removed only by the employee who applied it (e)(3); procedure inspected at least annually (c)(6). Confirm every isolation point on the equipment with a qualified person.</div>';
    root.querySelector('.ta-doc').innerHTML = h;
  }
  root.addEventListener('input', render);
  root.addEventListener('change', render);
  render();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.lockoutTagoutBuilder = { recalc: render };
})();
