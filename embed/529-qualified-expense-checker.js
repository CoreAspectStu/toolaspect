/*!
 * ToolAspect 529 Qualified Expense Checker Embed
 * Install: <div id="ta-529-qualified-expense-checker"></div>
 *          <script src="https://toolaspect.com/embed/529-qualified-expense-checker.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-529-qualified-expense-checker';
  var BASE = 'https://toolaspect.com/529-qualified-expense-checker/';

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
    + '.ta-embed-exp-row{display:grid;grid-template-columns:22px 1fr 96px 74px;gap:8px;align-items:center;margin-bottom:8px;font-size:.85rem}'
    + '.ta-embed-exp-row input[type="checkbox"]{width:18px;height:18px;accent-color:var(--ta-accent);cursor:pointer}'
    + '.ta-embed-exp-row input[type="number"]{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);border-radius:8px;padding:6px 8px;font-size:.85rem;font-family:inherit}'
    + '.ta-embed-tag{font-size:.68rem;font-weight:700;text-align:center;padding:3px 0;border-radius:12px}'
    + '.ta-embed-tag.yes{background:rgba(34,197,94,.14);color:#16a34a}'
    + '.ta-embed-tag.no{background:rgba(239,68,68,.12);color:#dc2626}'
    + '.ta-embed-tag.lim{background:rgba(245,158,11,.14);color:#b45309}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-mini-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;text-align:center;font-size:.85rem}'
    + '.ta-embed-mini-row strong{display:block;font-size:1.15rem;margin-top:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-exp-row{grid-template-columns:20px 1fr 84px 62px}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', '529-qualified-expense-checker');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="529-qualified-expense-checker"]')) {
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

  var ROWS = [
    { id: 'tuition', name: 'Tuition & required fees', amt: 9500, kind: 'college-yes' },
    { id: 'books', name: 'Required books & supplies', amt: 420, kind: 'college-yes' },
    { id: 'computer', name: 'Computer & internet', amt: 900, kind: 'college-yes' },
    { id: 'rnb', name: 'On-campus room & board', amt: 6200, kind: 'halftime' },
    { id: 'offcampus', name: 'Off-campus rent & food (total)', amt: 10800, kind: 'allowance' },
    { id: 'k12', name: 'K-12 tuition', amt: 0, kind: 'cap-k12' },
    { id: 'loans', name: 'Student loan repayment', amt: 0, kind: 'cap-10k' },
    { id: 'insurance', name: 'Health insurance', amt: 1400, kind: 'no' },
    { id: 'parking', name: 'Parking & commuting', amt: 900, kind: 'no' },
    { id: 'clubs', name: 'Sports & clubs', amt: 0, kind: 'no' }
  ];

  var html = ''
    + '<div class="ta-embed-root">'
    + '<div class="ta-embed-title">529 Qualified Expense Checker</div>'
    + '<div class="ta-embed-subtitle">What can come out of a 529 tax-free?</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Enrollment</label><select id="ta529-enr">'
    + '<option value="halftime">College, half-time+</option>'
    + '<option value="lesstime">College, less than half-time</option>'
    + '<option value="k12">K-12 student</option></select></div>'
    + '<div class="ta-embed-form-group"><label>R&amp;B allowance ($)</label><input type="number" id="ta529-allow" value="9000" min="0"></div>'
    + '<div class="ta-embed-form-group"><label>Year</label><select id="ta529-year"><option value="2026">2026</option><option value="2025">2025 or earlier</option></select></div>'
    + '</div></div>'
    + '<div class="ta-embed-card">'
    + ROWS.map(function (r) {
        return '<div class="ta-embed-exp-row">'
          + '<input type="checkbox" data-id="' + r.id + '"' + (r.amt > 0 ? ' checked' : '') + '>'
          + '<span>' + r.name + '</span>'
          + '<input type="number" data-amt="' + r.id + '" value="' + r.amt + '" min="0">'
          + '<span class="ta-embed-tag" data-tag="' + r.id + '"></span>'
          + '</div>';
      }).join('')
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big" id="ta529-qtotal">$0</div>'
    + '<div class="ta-embed-sub">qualified, comes out tax-free</div>'
    + '<div class="ta-embed-mini-row" style="margin-top:14px">'
    + '<div><span style="color:var(--ta-muted)">Non-qualified</span><strong id="ta529-nq" style="color:#dc2626">—</strong></div>'
    + '<div><span style="color:var(--ta-muted)">Tax + 10% penalty*</span><strong id="ta529-pen" style="color:#b45309">—</strong></div>'
    + '</div>'
    + '<div class="ta-embed-sub" style="margin-top:10px;font-size:.8rem">*Estimate on the earnings portion (default 40% earnings, 22% bracket)</div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="dofollow">ToolAspect</a></div>'
    + '</div>';

  target.innerHTML = html;

  function g(id) { return target.querySelector('#ta529-' + id); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US'); }

  function calc() {
    var enr = g('enr').value;
    var allow = parseFloat(g('allow').value) || 0;
    var yr = g('year').value;
    var college = enr !== 'k12';
    var q = 0, nq = 0;
    ROWS.forEach(function (r) {
      var cb = target.querySelector('[data-id="' + r.id + '"]');
      var inp = target.querySelector('[data-amt="' + r.id + '"]');
      var tag = target.querySelector('[data-tag="' + r.id + '"]');
      var on = cb.checked, amt = parseFloat(inp.value) || 0;
      if (!on || amt <= 0) { tag.textContent = '—'; tag.className = 'ta-embed-tag'; return; }
      var cls, qPart = 0, nPart = 0;
      if (r.kind === 'college-yes') {
        if (college) { qPart = amt; cls = 'yes'; } else { nPart = amt; cls = 'no'; }
      } else if (r.kind === 'halftime') {
        if (enr === 'halftime') { qPart = amt; cls = 'yes'; } else { nPart = amt; cls = 'no'; }
      } else if (r.kind === 'allowance') {
        qPart = Math.min(amt, allow); nPart = Math.max(0, amt - allow); cls = 'lim';
      } else if (r.kind === 'cap-k12') {
        var cap = yr === '2026' ? 20000 : 10000;
        qPart = Math.min(amt, cap); nPart = amt - qPart; cls = 'lim';
      } else if (r.kind === 'cap-10k') {
        qPart = Math.min(amt, 10000); nPart = amt - qPart; cls = 'lim';
      } else { nPart = amt; cls = 'no'; }
      tag.textContent = cls === 'yes' ? 'Qualified' : cls === 'no' ? 'Not qual.' : 'Capped';
      tag.className = 'ta-embed-tag ' + cls;
      q += qPart; nq += nPart;
    });
    var pen = nq * 0.40 * 0.32;
    g('qtotal').textContent = money(q);
    g('nq').textContent = money(nq);
    g('pen').textContent = '~' + money(pen);
  }

  target.addEventListener('input', calc);
  target.addEventListener('change', calc);
  calc();
})();
