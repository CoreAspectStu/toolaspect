/*!
 * ToolAspect Reading Time Calculator Embed
 * Install: <div id="ta-reading-time-calculator"></div>
 *          <script src="https://toolaspect.com/embed/reading-time-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-reading-time-calculator';
  var BASE = 'https://toolaspect.com/reading-time-calculator/';

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
    + '.ta-embed-form-group input,.ta-embed-form-group select,.ta-embed-form-group textarea{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus,.ta-embed-form-group textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-group textarea{min-height:90px;resize:vertical;line-height:1.6}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'reading-time-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="reading-time-calculator"]')) {
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
    + '<div class="ta-embed-title">Reading Time Calculator</div>'
    + '<div class="ta-embed-subtitle">Words to minutes at any reading speed</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Word count</label><input type="number" class="ta-words" value="1500" min="0" step="50"></div>'
    + '<div class="ta-embed-form-group"><label>Reading speed</label><select class="ta-speed">'
    + '<option value="150">Slow / technical (150 WPM)</option>'
    + '<option value="238" selected>Average adult (238 WPM)</option>'
    + '<option value="325">Fast reader (325 WPM)</option>'
    + '<option value="475">Skimming (475 WPM)</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>…or paste text (word count updates from here)</label><textarea class="ta-paste" placeholder="Paste an article or script to count its words"></textarea></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function fmtDur(min) {
    if (!isFinite(min) || min <= 0) return '—';
    if (min >= 60) {
      var h = Math.floor(min / 60), m = Math.round(min % 60);
      if (m === 60) { h++; m = 0; }
      return h + ' hr ' + (m < 10 && m > 0 ? '0' : '') + m + ' min';
    }
    var mm = Math.floor(min), ss = Math.round((min - mm) * 60);
    if (ss === 60) { mm++; ss = 0; }
    return mm + ' min ' + (ss < 10 ? '0' : '') + ss + ' s';
  }

  function calc() {
    var words, pasted = root.querySelector('.ta-paste').value;
    if (pasted.trim()) {
      words = (pasted.trim().match(/\S+/g) || []).length;
      root.querySelector('.ta-words').value = words;
    } else {
      words = parseFloat(root.querySelector('.ta-words').value) || 0;
    }
    var wpm = parseInt(root.querySelector('.ta-speed').value, 10) || 238;
    if (words <= 0) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter a word count or paste text</div>';
      return;
    }
    var minutes = words / wpm;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + fmtDur(minutes) + '</div>'
      + '<div class="ta-embed-sub">' + words.toLocaleString('en-US') + ' words at ' + wpm + ' WPM (' + minutes.toFixed(1) + ' min)</div>'
      + '<div class="ta-embed-sub">Slow 150: <strong>' + fmtDur(words / 150) + '</strong> · Fast 325: <strong>' + fmtDur(words / 325) + '</strong></div>'
      + '<div class="ta-embed-sub">Reading aloud at 130 WPM: <strong>' + fmtDur(words / 130) + '</strong></div>';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.readingTimeCalculator = { recalc: calc };
})();
