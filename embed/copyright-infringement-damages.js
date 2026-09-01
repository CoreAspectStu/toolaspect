/*!
 * ToolAspect Copyright Infringement Damages Estimator Embed
 * Install: <div id="ta-copyright-damages"></div>
 *          <script src="https://toolaspect.com/embed/copyright-infringement-damages.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-copyright-damages';
  var BASE = 'https://toolaspect.com/copyright-infringement-damages/';

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
    + '.ta-embed-big{font-size:2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.88rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '.ta-embed-note{font-size:.72rem;color:var(--ta-muted);text-align:center;margin-top:8px}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'copyright-damages');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="copyright-damages"]')) {
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
    + '<div class="ta-embed-title">Copyright Damages Estimator</div>'
    + '<div class="ta-embed-subtitle">Statutory damages: federal court vs. Copyright Claims Board</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Forum</label><select class="ta-forum"><option value="federal" selected>Federal court</option><option value="ccb">Copyright Claims Board</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Works infringed</label><input type="number" class="ta-works" value="3" min="1" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Conduct</label><select class="ta-conduct"><option value="standard" selected>Standard</option><option value="willful">Willful</option><option value="innocent">Innocent</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Claim per work ($)</label><input type="number" class="ta-perwork" value="7500" min="200" max="150000" step="250"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"><div class="ta-embed-big ta-total">—</div><div class="ta-embed-sub ta-sub">enter your claim above</div></div>'
    + '<div class="ta-embed-note">Not legal advice. Registration before infringement (or within 3 months of publication) is required for statutory damages on US works.</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function num(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function money(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calc() {
    var forum = root.querySelector('.ta-forum').value;
    var works = Math.max(1, Math.round(num('.ta-works')));
    var perWork = num('.ta-perwork');
    var bounds = { standard: [750, 30000], willful: [750, 150000], innocent: [200, 30000] }[root.querySelector('.ta-conduct').value];
    perWork = Math.min(Math.max(perWork, bounds[0]), bounds[1]);

    var sub = root.querySelector('.ta-sub');
    var total;
    if (forum === 'ccb') {
      var claimable = Math.min(works, 3);
      total = Math.min(Math.min(perWork, 15000) * claimable, 30000);
      var notes = [];
      if (works > 3) notes.push('only 3 of ' + works + ' works claimable');
      if (perWork > 15000) notes.push('per-work cap $15,000');
      if (Math.min(perWork, 15000) * claimable > 30000) notes.push('total cap $30,000');
      sub.textContent = notes.length ? notes.join(' · ') : 'within CCB caps';
    } else {
      total = works * perWork;
      sub.textContent = works + ' works × ' + money(perWork) + ' (federal court, no CCB caps)';
    }
    root.querySelector('.ta-total').textContent = money(total);
  }

  root.querySelectorAll('input,select').forEach(function (el) {
    el.addEventListener('input', calc);
    el.addEventListener('change', calc);
  });
  calc();
})();
