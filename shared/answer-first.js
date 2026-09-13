/* ToolAspect answer-first block — wave 4 (data-ta-schema="answer1")
 * The .ta-answer box is server-rendered in plain HTML (AI-crawler + rich-result
 * friendly). This script mirrors the tool's computed primary result into the
 * box the moment it appears, so the direct answer always sits above the fold.
 * Progressive enhancement only — pages work fully without it.
 */
(function () {
  'use strict';
  var box = document.querySelector('.ta-answer [data-ta-answer-text]');
  if (!box || box.getAttribute('data-ta-live') === '0') return;
  var initial = box.textContent;

  function txt(el) {
    if (!el) return '';
    return el.textContent.replace(/\s+/g, ' ').trim();
  }

  // Candidate selectors for a tool's primary/computed result, most specific first.
  var SELS = [
    '.result-card.primary .amount',
    '.result-card .amount',
    '.results .rr:first-child .v',
    '.results .v',
    '#results .amount',
    '#output',
    '.output',
    '.out',
    '#answer',
    '#result',
    '.result'
  ];

  function readResult() {
    for (var i = 0; i < SELS.length; i++) {
      var els = document.querySelectorAll(SELS[i]);
      for (var j = 0; j < els.length; j++) {
        var t = txt(els[j]);
        // ignore placeholders / spinner text
        if (t && t.length > 1 && !/^(loading|calculating|\.\.\.|—|-|n\/a)$/i.test(t)) return t;
      }
    }
    return '';
  }

  var last = '';
  function sync() {
    var r = readResult();
    if (r && r !== last) {
      last = r;
      box.textContent = r;
    }
  }

  // Initial pass + catch late-rendered results.
  sync();
  if (typeof MutationObserver === 'function') {
    var mo = new MutationObserver(function () { sync(); });
    mo.observe(document.body, { childList: true, subtree: true, characterData: true });
    // Safety: stop observing after 5 min of idle syncing cost is negligible, keep it simple.
  }
  window.addEventListener('load', sync);
})();
