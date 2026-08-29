/*!
 * ToolAspect Content Calendar Template Embed
 * Install: <div id="ta-content-calendar"></div>
 *          <script src="https://toolaspect.com/embed/content-calendar-template.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-content-calendar';
  var BASE = 'https://toolaspect.com/content-calendar-template/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:16px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:9px 12px;font-size:.9rem;font-family:inherit;outline:none;color-scheme:light}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-check{display:flex;flex-wrap:wrap;gap:12px;font-size:.82rem;margin-bottom:12px}'
    + '.ta-embed-check label{display:flex;align-items:center;gap:5px;cursor:pointer}'
    + '.ta-embed-check input{width:auto;accent-color:var(--ta-accent)}'
    + '.ta-embed-out{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:12px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;'
    + 'font-size:.78rem;line-height:1.6;white-space:pre;overflow-x:auto;max-height:240px;overflow-y:auto;margin-bottom:12px;color:var(--ta-text)}'
    + '.ta-embed-stats{font-size:.78rem;color:var(--ta-muted);margin-bottom:10px}'
    + '.ta-embed-btn{display:inline-block;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:9px 18px;font-size:.88rem;'
    + 'cursor:pointer;font-family:inherit;font-weight:600;margin:0 6px 10px 0}'
    + '.ta-embed-btn.ta-secondary{background:var(--ta-surface);color:var(--ta-text);border:1px solid var(--ta-border)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:480px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'content-calendar');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="content-calendar"]')) {
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
    + '<div class="ta-embed-title">Content Calendar Planner</div>'
    + '<div class="ta-embed-subtitle">Pick platforms and cadence, export to your calendar</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-check">'
    + '<label><input type="checkbox" class="ta-plat" value="Instagram" data-time="13:00" checked> Instagram</label>'
    + '<label><input type="checkbox" class="ta-plat" value="TikTok" data-time="15:00" checked> TikTok</label>'
    + '<label><input type="checkbox" class="ta-plat" value="YouTube" data-time="09:00"> YouTube</label>'
    + '<label><input type="checkbox" class="ta-plat" value="LinkedIn" data-time="11:00"> LinkedIn</label>'
    + '<label><input type="checkbox" class="ta-plat" value="X" data-time="10:00"> X</label>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Posts per week (total)</label><input type="number" class="ta-ppw" value="7" min="1" max="35"></div>'
    + '<div class="ta-embed-form-group"><label>Week starts</label><input type="date" class="ta-start"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-stats">—</div>'
    + '<div class="ta-embed-out">Schedule preview appears here</div>'
    + '<button type="button" class="ta-embed-btn ta-ics">Export calendar (.ics)</button>'
    + '<button type="button" class="ta-embed-btn ta-secondary ta-copy">Copy as text</button>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  function plats() {
    return Array.prototype.slice.call(root.querySelectorAll('.ta-plat:checked'));
  }
  function dist(n) { var out = [0, 0, 0, 0, 0, 0, 0]; for (var k = 0; k < n; k++) out[k % 7]++; return out; }

  function schedule() { // [{day, plat, time}]
    var checked = plats(), ppw = Math.max(1, parseInt(root.querySelector('.ta-ppw').value, 10) || 1), s = [];
    var per = dist(ppw);
    checked.forEach(function (el, pi) {
      var mine = 0;
      per.forEach(function (c, day) {
        for (var j = 0; j < c; j++) {
          // round-robin platforms onto the week's slots so loads interleave
          if ((mine + j) % checked.length === pi % checked.length || checked.length === 1) {
            s.push({ day: day, plat: el.value, time: el.getAttribute('data-time') });
          }
        }
        mine += c;
      });
    });
    return s;
  }

  function calc() {
    var s = schedule();
    if (!plats().length) { root.querySelector('.ta-embed-stats').textContent = 'Tick at least one platform.'; return; }
    var txt = '# Weekly content calendar\n\n';
    for (var d = 0; d < 7; d++) {
      txt += DAYS[d] + ':\n';
      var slots = s.filter(function (x) { return x.day === d; }).sort(function (a, b) { return a.time < b.time ? -1 : 1; });
      if (!slots.length) txt += '  (rest day)\n';
      slots.forEach(function (x) { txt += '  ' + x.time + ' — ' + x.plat + ' post\n'; });
    }
    root.querySelector('.ta-embed-out').textContent = txt;
    root.querySelector('.ta-embed-stats').textContent = slotsTotal(s) + ' posts/week · ' + (slotsTotal(s) * 52 / 12).toFixed(1) + '/month · ' + plats().length + ' platforms';
  }
  function slotsTotal(s) { return s.length; }

  function pad(x) { return (x < 10 ? '0' : '') + x; }
  function ics() {
    var v = root.querySelector('.ta-start').value;
    var start = v ? new Date(v + 'T00:00:00') : new Date();
    var s = schedule();
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//ToolAspect//Content Calendar//EN', 'CALSCALE:GREGORIAN'];
    var stamp = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';
    for (var i = 0; i < 30; i++) {
      var d = new Date(start.getTime() + i * 86400000);
      var dow = (d.getDay() + 6) % 7;
      var ymd = d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate());
      s.filter(function (x) { return x.day === dow; }).forEach(function (x, idx) {
        lines.push('BEGIN:VEVENT', 'UID:cc-' + ymd + '-' + x.plat.toLowerCase().replace(/[^a-z]/g, '') + '-' + idx + '@toolaspect',
          'DTSTAMP:' + stamp, 'DTSTART:' + ymd + 'T' + x.time.replace(':', '') + '00', 'DTEND:' + ymd + 'T' + x.time.replace(':', '') + '30',
          'SUMMARY:' + x.plat + ' — publish post', 'DESCRIPTION:Planned slot from the ToolAspect content calendar template', 'END:VEVENT');
      });
    }
    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  root.querySelector('.ta-ics').addEventListener('click', function () {
    var blob = new Blob([ics()], { type: 'text/calendar' });
    var a = document.createElement('a');
    a.download = 'content-calendar.ics';
    a.href = URL.createObjectURL(blob);
    a.click();
  });
  root.querySelector('.ta-copy').addEventListener('click', function () {
    if (navigator.clipboard) navigator.clipboard.writeText(root.querySelector('.ta-embed-out').textContent);
    var b = this, orig = b.textContent;
    b.textContent = '✓ Copied';
    setTimeout(function () { b.textContent = orig; }, 1500);
  });

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.contentCalendar = { recalc: calc };
})();
