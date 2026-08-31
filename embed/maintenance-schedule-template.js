/*!
 * ToolAspect Maintenance Schedule Template Embed
 * Install: <div id="ta-maintenance-schedule-template"></div>
 *          <script src="https://toolaspect.com/embed/maintenance-schedule-template.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-maintenance-schedule-template';

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
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-chips{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px}'
    + '.ta-embed-chip{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:6px 12px;font-size:.8rem}'
    + '.ta-embed-chip strong{color:var(--ta-text)}'
    + '.ta-embed-clock{display:flex;justify-content:space-between;gap:8px;padding:6px 0;border-bottom:1px solid var(--ta-bg);font-size:.86rem;text-align:left}'
    + '.ta-embed-clock:last-child{border-bottom:none}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'maintenance-schedule-template');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="maintenance-schedule-template"]')) {
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
  if (target.getAttribute('data-theme')) root.setAttribute('data-theme', target.getAttribute('data-theme'));

  root.innerHTML = ''
    + '<div class="ta-embed-title">Maintenance Interval Calculator</div>'
    + '<div class="ta-embed-subtitle">Usage clock vs calendar clock — service at whichever comes due first</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Interval type</label><select id="ta-ms-type">'
    + '<option value="hours">Run hours</option><option value="miles">Miles</option><option value="days">Days</option><option value="months">Months</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Interval value</label><input type="number" id="ta-ms-ival" value="250" min="0" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Usage / day</label><input type="number" id="ta-ms-use" value="6" min="0" step="0.1"></div>'
    + '<div class="ta-embed-form-group"><label>Calendar cap (days)</label><input type="number" id="ta-ms-cap" value="180" min="0" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Last completed</label><input type="date" id="ta-ms-last" value="2026-08-01"></div>'
    + '</div>'
    + '<div class="ta-embed-result"><div class="ta-embed-big" id="ta-ms-due">—</div>'
    + '<div class="ta-embed-sub" id="ta-ms-status">next due date</div></div>'
    + '<div class="ta-embed-card" id="ta-ms-clocks"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="https://toolaspect.com/maintenance-schedule-template/" target="_blank" rel="noopener">ToolAspect</a></div>';

  target.appendChild(root);

  function $(id) { return document.getElementById(id); }
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function fmtD(d) { return MONTHS[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear(); }
  function parseD(s) {
    var p = String(s).split('-');
    if (p.length !== 3) return null;
    var d = new Date(+p[0], +p[1] - 1, +p[2], 12);
    return isNaN(d) ? null : d;
  }

  function calc() {
    var type = $('ta-ms-type').value;
    var ival = parseFloat($('ta-ms-ival').value) || 0;
    var use = parseFloat($('ta-ms-use').value) || 0;
    var cap = parseFloat($('ta-ms-cap').value) || 0;
    var last = parseD($('ta-ms-last').value);
    var today = new Date(); today.setHours(12, 0, 0, 0);
    if (!last || ival <= 0) { $('ta-ms-due').textContent = '—'; $('ta-ms-status').textContent = 'enter interval and last-done date'; $('ta-ms-clocks').innerHTML = ''; return; }
    var usageDays = null, calDays = null;
    if (type === 'hours' || type === 'miles') {
      if (use <= 0) { $('ta-ms-due').textContent = '—'; $('ta-ms-status').textContent = 'enter average usage per day'; return; }
      usageDays = ival / use;
      calDays = cap > 0 ? cap : 365;
    } else if (type === 'months') {
      calDays = ival * 30.44;
    } else {
      calDays = ival;
    }
    var bind = usageDays !== null ? Math.min(usageDays, calDays) : calDays;
    var due = new Date(last.getTime() + bind * 86400000);
    var daysLeft = Math.round((due - today) / 86400000);
    $('ta-ms-due').textContent = fmtD(due);
    var col = daysLeft < 0 ? '#dc2626' : daysLeft <= 30 ? '#d97706' : '';
    $('ta-ms-due').style.color = col || '';
    $('ta-ms-status').textContent = daysLeft < 0 ? ('overdue by ' + (-daysLeft) + ' days') : daysLeft <= 30 ? ('due in ' + daysLeft + ' days') : (Math.round(bind) + '-day cycle · ' + (365 / bind).toFixed(1) + ' services/yr');
    var html = '';
    if (usageDays !== null) {
      html += '<div class="ta-embed-clock"><span>Usage clock (' + ival + ' ' + type + ' ÷ ' + use + '/day)</span><strong>' + Math.round(usageDays) + ' days' + (usageDays <= calDays ? ' — binds' : '') + '</strong></div>';
      html += '<div class="ta-embed-clock"><span>Calendar clock (cap)</span><strong>' + Math.round(calDays) + ' days' + (calDays < usageDays ? ' — binds' : '') + '</strong></div>';
    } else {
      html += '<div class="ta-embed-clock"><span>Calendar clock</span><strong>' + Math.round(calDays) + ' days — binds</strong></div>';
    }
    html += '<div class="ta-embed-clock"><span>Binding interval (whichever first)</span><strong>' + Math.round(bind) + ' days</strong></div>';
    $('ta-ms-clocks').innerHTML = html;
  }

  ['ta-ms-type', 'ta-ms-ival', 'ta-ms-use', 'ta-ms-cap', 'ta-ms-last'].forEach(function (id) {
    $(id).addEventListener('change', calc);
    $(id).addEventListener('input', calc);
  });
  calc();
})();
