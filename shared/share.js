/* ToolAspect share/copy-link buttons — wave 4 (data-ta-schema="share1")
 * Renders a "Copy link" button plus native share (navigator.share) when the
 * platform supports it. Clipboard fallbacks included; silent no-op elsewhere.
 */
(function () {
  'use strict';
  var host = document.querySelector('.ta-share');
  if (!host || host.getAttribute('data-ta-rendered') === '1') return;
  host.setAttribute('data-ta-rendered', '1');

  var url = location.href.split('#')[0];
  var title = (document.querySelector('h1') || {}).textContent || document.title;

  function msg(btn, text) {
    var old = btn.getAttribute('data-label') || btn.textContent;
    btn.textContent = text;
    setTimeout(function () { btn.textContent = old; }, 1800);
  }

  function copy(btn) {
    var done = function () { msg(btn, 'Link copied ✓'); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(done, function () { legacy(btn, done); });
    } else {
      legacy(btn, done);
    }
  }
  function legacy(btn, done) {
    var ta = document.createElement('textarea');
    ta.value = url;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {}
    document.body.removeChild(ta);
  }

  var css = document.createElement('style');
  css.textContent = '.ta-share{display:flex;gap:8px;align-items:center;justify-content:center;margin:14px 0 4px;flex-wrap:wrap}'
    + '.ta-share button{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border:1px solid var(--border,#e2e8f0);border-radius:10px;background:var(--surface,#fff);color:var(--text,#1e293b);font-size:.82rem;font-weight:500;cursor:pointer;font-family:inherit}'
    + '.ta-share button:hover{border-color:var(--primary,#6366f1);color:var(--primary,#6366f1)}';
  document.head.appendChild(css);

  if (navigator.share) {
    var sh = document.createElement('button');
    sh.type = 'button';
    sh.innerHTML = '🔗 Share';
    sh.setAttribute('aria-label', 'Share this tool');
    sh.addEventListener('click', function () {
      navigator.share({ title: title + ' | ToolAspect', text: title + ' — free online tool', url: url }).catch(function () {});
    });
    host.appendChild(sh);
  }

  // Copy link: skip when result-actions.js is on the page (it renders its own
  // copy button at result time) to avoid two copy buttons on one page.
  var hasResultActions = !!document.querySelector('script[src*="result-actions.js"]');
  if (!hasResultActions) {
    var cp = document.createElement('button');
    cp.type = 'button';
    cp.innerHTML = '🔗 Copy link';
    cp.setAttribute('aria-label', 'Copy link to this tool');
    cp.addEventListener('click', function () { copy(cp); });
    host.appendChild(cp);
  } else if (!navigator.share) {
    // no native share + copy handled elsewhere: hide empty bar
    host.style.display = 'none';
  }
})();
