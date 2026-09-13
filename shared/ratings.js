/* ToolAspect rating widget — wave 3 (data-ta-schema="rating1")
 * Renders a 5-star row below the tool result area. Posts {slug, rating} to
 * the ratings Worker; on failure queues to localStorage and retries next visit.
 * No AggregateRating JSON-LD until real votes exist (Google policy).
 */
(function () {
  'use strict';
  var ENDPOINT = 'https://ratings.toolaspect.com/rate';
  var LS_KEY = 'ta-ratings';
  var LS_SENT = 'ta-ratings-sent';

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function loadJSON(k) {
    try { return JSON.parse(localStorage.getItem(k) || '[]'); } catch (e) { return []; }
  }
  function saveJSON(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ }
  }

  function getUserRating(slug) {
    var m = loadJSON(LS_SENT);
    for (var i = 0; i < m.length; i++) if (m[i].slug === slug) return m[i].rating;
    return 0;
  }
  function markSent(slug, rating) {
    var m = loadJSON(LS_SENT).filter(function (x) { return x.slug !== slug; });
    m.push({ slug: slug, rating: rating, t: Date.now() });
    saveJSON(LS_SENT, m);
  }

  function queueRating(slug, rating) {
    var q = loadJSON(LS_KEY);
    q.push({ slug: slug, rating: rating, t: Date.now() });
    saveJSON(LS_KEY, q);
  }

  function flushQueue() {
    var q = loadJSON(LS_KEY);
    if (!q.length) return;
    var item = q[0];
    postRating(item.slug, item.rating, function (ok) {
      if (ok) {
        q.shift();
        saveJSON(LS_KEY, q);
        markSent(item.slug, item.rating);
        if (q.length) flushQueue();
      }
    });
  }

  function postRating(slug, rating, cb) {
    try {
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: slug, rating: rating }),
        mode: 'cors'
      }).then(function (r) { cb(r.ok); }).catch(function () { cb(false); });
    } catch (e) { cb(false); }
  }

  function fetchAggregate(slug, el) {
    try {
      fetch(ENDPOINT + '?slug=' + encodeURIComponent(slug), { mode: 'cors' })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
          if (d && typeof d.count === 'number' && d.count > 0) {
            var agg = document.createElement('div');
            agg.className = 'ta-rating-agg';
            agg.textContent = d.count + ' vote' + (d.count === 1 ? '' : 's') +
              (d.average ? ' · avg ' + Number(d.average).toFixed(1) + '/5' : '');
            el.appendChild(agg);
          }
        }).catch(function () { /* silent */ });
    } catch (e) { /* silent */ }
  }

  function ensureStyles() {
    if (document.getElementById('ta-rating-styles')) return;
    var st = document.createElement('style');
    st.id = 'ta-rating-styles';
    st.textContent =
      '.ta-rating{display:flex;align-items:center;gap:8px;margin:14px 0;justify-content:center}' +
      '.ta-rating .ta-stars{display:inline-flex;gap:2px}' +
      '.ta-rating button{background:none;border:none;padding:0;cursor:pointer;font-size:1.35rem;line-height:1;color:var(--border,#334155);transition:color .15s,transform .15s}' +
      '.ta-rating button.on{color:var(--primary,#22d3ee)}' +
      '.ta-rating button:hover{transform:scale(1.15)}' +
      '.ta-rating .ta-thanks{font-size:.82rem;color:var(--muted,#94a3b8)}' +
      '.ta-rating-agg{font-size:.8rem;color:var(--muted,#94a3b8);text-align:center;margin-top:-6px;margin-bottom:10px}';
    document.head.appendChild(st);
  }

  function initWidget(el) {
    var slug = el.getAttribute('data-ta-slug') ||
      (location.pathname.split('/').filter(Boolean)[0] || '');
    ensureStyles();
    var user = getUserRating(slug);

    var wrap = document.createElement('div');
    wrap.className = 'ta-stars';
    wrap.setAttribute('role', 'rating');
    wrap.setAttribute('aria-label', 'Rate this tool out of 5 stars');
    var stars = [];
    for (var i = 1; i <= 5; i++) {
      (function (n) {
        var b = document.createElement('button');
        b.type = 'button';
        b.innerHTML = '&#9733;'; // ★
        b.setAttribute('aria-label', n + ' star' + (n === 1 ? '' : 's'));
      b.addEventListener('mouseover', function () { paint(n); });
        b.addEventListener('mouseout', function () { paint(user); });
        b.addEventListener('click', function () {
          if (user) return; // one vote per visitor per tool
          user = n;
          paint(n);
          postRating(slug, n, function (ok) {
            if (!ok) queueRating(slug, n);
            else markSent(slug, n);
          });
          var th = el.querySelector('.ta-thanks');
          if (!th) {
            th = document.createElement('span');
            th.className = 'ta-thanks';
            el.appendChild(th);
          }
          th.textContent = ok_text();
        });
        stars.push(b);
        wrap.appendChild(b);
      })(i);
    }
    function ok_text() { return 'Thanks for voting!'; }
    function paint(n) {
      for (var j = 0; j < stars.length; j++) stars[j].classList.toggle('on', j < n);
    }
    el.appendChild(wrap);
    if (user) { paint(user); var th = document.createElement('span'); th.className = 'ta-thanks'; th.textContent = 'You rated ' + user + '/5'; el.appendChild(th); }
    else { var hint = document.createElement('span'); hint.className = 'ta-thanks'; hint.textContent = 'Rate this tool'; el.appendChild(hint); }
    fetchAggregate(slug, el);
  }

  function boot() {
    var els = document.querySelectorAll('.ta-rating[data-ta-schema="rating1"]');
    for (var i = 0; i < els.length; i++) initWidget(els[i]);
    flushQueue();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
