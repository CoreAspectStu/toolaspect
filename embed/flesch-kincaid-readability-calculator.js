/*!
 * ToolAspect Flesch-Kincaid Readability Calculator Embed
 * Install: <div id="ta-flesch-kincaid-readability-calculator"></div>
 *          <script src="https://toolaspect.com/embed/flesch-kincaid-readability-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-flesch-kincaid-readability-calculator';
  var BASE = 'https://toolaspect.com/flesch-kincaid-readability-calculator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-card label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-card textarea{width:100%;min-height:150px;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;line-height:1.6;outline:none;resize:vertical}'
    + '.ta-embed-card textarea:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-stats{display:flex;justify-content:center;gap:18px;margin-top:10px;font-size:.8rem;color:var(--ta-muted);flex-wrap:wrap}'
    + '.ta-embed-stats strong{color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'flesch-kincaid-readability-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="flesch-kincaid-readability-calculator"]')) {
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
    + '<div class="ta-embed-title">Flesch-Kincaid Calculator</div>'
    + '<div class="ta-embed-subtitle">Reading Ease and grade level, live as you type</div>'
    + '<div class="ta-embed-card">'
    + '<label>Your text</label><textarea class="ta-in" spellcheck="false" placeholder="Paste a passage...">Most dogs need between two and three percent of their body weight in food each day. Puppies eat more because they grow fast. Split the total into two meals for adults and three for young pups.</textarea>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  function syllables(word) {
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    if (word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '');
    var m = word.match(/[aeiouy]{1,2}/g);
    return m ? m.length : 1;
  }
  function label(re) {
    if (re >= 90) return '5th grade · very easy';
    if (re >= 80) return '6th grade · easy';
    if (re >= 70) return '7th grade · fairly easy';
    if (re >= 60) return '8th-9th grade · plain English';
    if (re >= 50) return '10th-12th grade · fairly difficult';
    if (re >= 30) return 'college · difficult';
    return 'college graduate · very difficult';
  }
  function calc() {
    var text = root.querySelector('.ta-in').value;
    var words = text.match(/[A-Za-z0-9’\x27-]+/g) || [];
    if (!words.length) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Paste some text to score it</div>';
      return;
    }
    var sentences = Math.max(1, (text.match(/[.!?…]+(?:\s|$)/g) || []).length);
    var syl = 0;
    words.forEach(function (w) { syl += syllables(w); });
    var asl = words.length / sentences, asw = syl / words.length;
    var re = 206.835 - 1.015 * asl - 84.6 * asw;
    var fk = 0.39 * asl + 11.8 * asw - 15.59;
    resultEl.innerHTML =
      '<div class="ta-embed-big">' + (Math.round(re * 10) / 10).toFixed(1) + ' Reading Ease</div>'
      + '<div class="ta-embed-sub">' + label(re) + ' · <strong>Flesch-Kincaid grade ' + (Math.round(fk * 10) / 10).toFixed(1) + '</strong></div>'
      + '<div class="ta-embed-stats">'
      + '<span><strong>' + words.length.toLocaleString('en-US') + '</strong> words</span>'
      + '<span><strong>' + sentences + '</strong> sentences</span>'
      + '<span><strong>' + syl.toLocaleString('en-US') + '</strong> syllables</span>'
      + '</div>';
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.fleschKincaidCalculator = { recalc: calc };
})();
