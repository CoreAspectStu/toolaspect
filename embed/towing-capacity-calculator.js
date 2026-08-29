/*!
 * ToolAspect Towing Capacity Calculator Embed
 * Install: <div id="ta-towing-capacity-calculator"></div>
 *          <script src="https://toolaspect.com/embed/towing-capacity-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-towing-capacity-calculator';
  var BASE = 'https://toolaspect.com/towing-capacity-calculator/';

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
    + '.ta-embed-row{display:flex;justify-content:space-between;font-size:.85rem;padding:6px 0;border-bottom:1px dashed var(--ta-border)}'
    + '.ta-embed-row:last-child{border-bottom:none}'
    + '.ta-embed-row .ok{color:#16a34a;font-weight:600}.ta-embed-row .bad{color:#dc2626;font-weight:600}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'towing-capacity-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="towing-capacity-calculator"]')) {
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
    + '<div class="ta-embed-title">Towing Capacity Calculator</div>'
    + '<div class="ta-embed-subtitle">GVWR, GCWR and tongue weight — your real max trailer</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>GVWR (lb)</label><input type="number" class="ta-gvwr" value="7350" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>GCWR (lb)</label><input type="number" class="ta-gcwr" value="17000" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Curb weight (lb)</label><input type="number" class="ta-curb" value="5500" min="0" step="50"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Passengers + cargo (lb)</label><input type="number" class="ta-occ" value="700" min="0" step="10"></div>'
    + '<div class="ta-embed-form-group"><label>Trailer type</label><select class="ta-ttype">'
    + '<option value="12" selected>Bumper-pull (12%)</option><option value="10">Bumper-pull light (10%)</option>'
    + '<option value="15">Bumper-pull heavy (15%)</option><option value="18">5th-wheel / gooseneck (18%)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Check trailer (lb, opt.)</label><input type="number" class="ta-trailer" value="" min="0" step="50" placeholder="8000"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-card ta-details"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var detailsEl = root.querySelector('.ta-details');

  function val(sel) {
    var el = root.querySelector(sel);
    return el ? (parseFloat(el.value) || 0) : 0;
  }
  function lb(n) { return Math.round(n).toLocaleString('en-US') + ' lb'; }

  function calc() {
    var gvwr = val('.ta-gvwr'), gcwr = val('.ta-gcwr'), curb = val('.ta-curb'), occ = val('.ta-occ');
    var tpct = val('.ta-ttype') || 12, trailerW = val('.ta-trailer');
    if (gvwr <= 0 || curb <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter GVWR and curb weight</div>';
      detailsEl.innerHTML = '';
      return;
    }
    var payload = gvwr - curb;
    var avail = Math.max(0, payload - occ);
    var byPayload = avail / (tpct / 100);
    var byGcwr = gcwr > 0 ? gcwr - curb - occ : Infinity;
    var eff = Math.min(byPayload, isFinite(byGcwr) ? byGcwr : Infinity);
    var bind = byPayload <= byGcwr ? 'payload (' + tpct + '% tongue)' : 'GCWR';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + lb(eff) + '</div>'
      + '<div class="ta-embed-sub">Max trailer — limited by ' + bind + '</div>'
      + '<div class="ta-embed-sub">Tongue weight at max: <strong>' + lb(eff * tpct / 100) + '</strong></div>';
    var h = ''
      + '<div class="ta-embed-row"><span>Payload (GVWR − curb)</span><strong>' + lb(payload) + '</strong></div>'
      + '<div class="ta-embed-row"><span>Payload left for tongue</span><strong>' + lb(avail) + '</strong></div>'
      + '<div class="ta-embed-row"><span>Max by GCWR</span><strong>' + (isFinite(byGcwr) ? lb(byGcwr) : '—') + '</strong></div>';
    if (trailerW > 0) {
      var tw = trailerW * tpct / 100;
      var okP = occ + tw <= payload;
      var okG = gcwr <= 0 || curb + occ + trailerW <= gcwr;
      h += '<div class="ta-embed-row"><span>Your trailer: people + tongue</span><strong class="' + (okP ? 'ok' : 'bad') + '">' + lb(occ + tw) + ' / ' + lb(payload) + '</strong></div>'
        + '<div class="ta-embed-row"><span>Your trailer: combined</span><strong class="' + (okG ? 'ok' : 'bad') + '">' + lb(curb + occ + trailerW) + ' / ' + (gcwr > 0 ? lb(gcwr) : '—') + '</strong></div>'
        + '<div class="ta-embed-row"><span>Verdict</span><strong class="' + (okP && okG ? 'ok' : 'bad') + '">' + (okP && okG ? 'Within ratings' : 'Exceeds a rating') + '</strong></div>';
    }
    detailsEl.innerHTML = h;
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.towingCapacityCalculator = { recalc: calc };
})();
