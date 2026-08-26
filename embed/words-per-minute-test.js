/*!
 * ToolAspect Words Per Minute Test Embed
 * Install: <div id="ta-words-per-minute-test"></div>
 *          <script src="https://toolaspect.com/embed/words-per-minute-test.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-words-per-minute-test';
  var BASE = 'https://toolaspect.com/words-per-minute-test/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-mode-toggle{display:flex;gap:6px;margin-bottom:14px;justify-content:center}'
    + '.ta-embed-mode-btn{background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;'
    + 'padding:7px 16px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode-btn.ta-active{background:rgba(37,99,235,.1);border-color:var(--ta-accent);color:var(--ta-text);font-weight:600}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-mode-btn.ta-active{background:rgba(96,165,250,.12)}'
    + '.ta-embed-stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px}'
    + '.ta-embed-stat{background:var(--ta-bg);border-radius:8px;padding:8px;text-align:center}'
    + '.ta-embed-stat .s{font-size:.68rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em}'
    + '.ta-embed-stat .v{font-size:1.15rem;font-weight:700}'
    + '.ta-embed-passage{position:relative;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:14px;cursor:text;outline:none;font-size:.95rem;line-height:1.9;color:var(--ta-muted);word-break:break-word}'
    + '.ta-embed-passage:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-passage .ch{white-space:pre-wrap}'
    + '.ta-embed-passage .ch.ok{color:var(--ta-text)}'
    + '.ta-embed-passage .ch.err{color:#dc2626;background:rgba(220,38,38,.15);border-radius:2px}'
    + '.ta-embed-passage .ch.cur{background:rgba(37,99,235,.22);border-radius:2px}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-passage .ch.err{color:#f87171;background:rgba(248,113,113,.18)}'
    + '.ta-embed-hint{font-size:.74rem;color:var(--ta-muted);margin-top:8px;text-align:center}'
    + '.ta-embed-result{text-align:center;padding:18px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-btn{background:var(--ta-accent);border:none;color:#fff;border-radius:8px;padding:8px 18px;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit;margin-top:10px}'
    + '.ta-embed-hidden{position:absolute;opacity:0;height:1px;width:1px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-stats{grid-template-columns:1fr 1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'words-per-minute-test');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="words-per-minute-test"]')) {
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

  var PASSAGE = 'Learning to type well is less about speed and more about rhythm. Your fingers should rest on the home row, and each one reaches for the keys it owns, then returns home without you thinking about it. Practice short sessions every day, keep your accuracy high, and the speed will follow on its own within a few weeks of steady work.';

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Typing Speed Test</div>'
    + '<div class="ta-embed-subtitle">One minute, standard WPM scoring</div>'
    + '<div class="ta-embed-mode-toggle">'
    + '<button type="button" class="ta-embed-mode-btn" data-dur="30">30s</button>'
    + '<button type="button" class="ta-embed-mode-btn ta-active" data-dur="60">60s</button>'
    + '</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-stats">'
    + '<div class="ta-embed-stat"><div class="s">Time left</div><div class="v ta-time">1:00</div></div>'
    + '<div class="ta-embed-stat"><div class="s">WPM</div><div class="v ta-wpm">—</div></div>'
    + '<div class="ta-embed-stat"><div class="s">Accuracy</div><div class="v ta-acc">—</div></div>'
    + '</div>'
    + '<div class="ta-embed-passage" tabindex="0">'
    + '<div class="ta-text"></div>'
    + '<input class="ta-embed-hidden" tabindex="-1" autocomplete="off">'
    + '</div>'
    + '<div class="ta-hint">Click the box, then start typing. No backspacing.</div>'
    + '</div>'
    + '<div class="ta-embed-result" style="display:none"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var passageEl = root.querySelector('.ta-text');
  var boxEl = root.querySelector('.ta-embed-passage');
  var inputEl = root.querySelector('.ta-embed-hidden');
  var resultEl = root.querySelector('.ta-embed-result');
  var dur = 60, running = false, finished = false, startT = 0, timerId = null, pos = 0, typed = 0, correct = 0;

  function renderPassage() {
    var h = '';
    for (var i = 0; i < PASSAGE.length; i++) h += '<span class="ch">' + PASSAGE[i] + '</span>';
    passageEl.innerHTML = h;
    mark();
  }
  function mark() {
    var spans = passageEl.querySelectorAll('.ch');
    for (var i = 0; i < spans.length; i++) spans[i].classList.remove('cur');
    if (pos < spans.length) spans[pos].classList.add('cur');
  }
  function fmtT(s) { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }

  function finish() {
    if (finished) return;
    finished = true; running = false; clearInterval(timerId);
    var elapsedMin = Math.max(Math.min(dur, (Date.now() - startT) / 1000) / 60, 1 / 60);
    var net = correct / 5 / elapsedMin;
    var gross = typed / 5 / elapsedMin;
    var acc = typed > 0 ? correct / typed * 100 : 0;
    resultEl.style.display = 'block';
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + Math.round(net) + ' WPM</div>'
      + '<div class="ta-embed-sub">' + acc.toFixed(1) + '% accuracy, ' + gross.toFixed(1) + ' gross WPM, ' + (typed - correct) + ' errors</div>'
      + '<button type="button" class="ta-embed-btn ta-again">Try again</button>';
    resultEl.querySelector('.ta-again').addEventListener('click', function () { reset(); });
  }

  function reset() {
    clearInterval(timerId); running = false; finished = false; pos = 0; typed = 0; correct = 0;
    resultEl.style.display = 'none';
    root.querySelector('.ta-time').textContent = fmtT(dur);
    root.querySelector('.ta-wpm').textContent = '—';
    root.querySelector('.ta-acc').textContent = '—';
    renderPassage();
  }

  boxEl.addEventListener('click', function () { if (!finished) inputEl.focus(); });
  inputEl.addEventListener('keydown', function (e) {
    if (finished) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key.length === 1) {
      e.preventDefault();
      if (!running) {
        running = true; startT = Date.now();
        timerId = setInterval(function () {
          var elapsed = (Date.now() - startT) / 1000;
          root.querySelector('.ta-time').textContent = fmtT(dur - elapsed);
          if (typed > 0 && elapsed > 0.5) {
            root.querySelector('.ta-wpm').textContent = Math.round(correct / 5 / (elapsed / 60));
            root.querySelector('.ta-acc').textContent = Math.round(correct / typed * 100) + '%';
          }
          if (elapsed >= dur) finish();
        }, 100);
      }
      typed++;
      if (e.key === PASSAGE[pos]) correct++;
      var spans = passageEl.querySelectorAll('.ch');
      if (pos < spans.length) spans[pos].classList.add(e.key === PASSAGE[pos] ? 'ok' : 'err');
      pos++;
      if (pos >= PASSAGE.length) { finish(); return; }
      mark();
    }
  });

  root.querySelectorAll('.ta-embed-mode-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      root.querySelectorAll('.ta-embed-mode-btn').forEach(function (b) { b.classList.remove('ta-active'); });
      btn.classList.add('ta-active');
      dur = parseInt(btn.getAttribute('data-dur'), 10);
      reset();
    });
  });

  reset();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.wordsPerMinuteTest = { recalc: reset };
})();
