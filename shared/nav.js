/* ============================================================
   ToolAspect — Shared Navigation  (nav.js)
   Self-rendering top nav.  Include via <script src="shared/nav.js">
   Auto-injects theme.css when loaded.
   ============================================================ */
(function () {
  'use strict';

  /* --- Resolve the shared/ base so CSS is always found correctly --- */
  var scripts = document.querySelectorAll('script[src]');
  var base = '';
  for (var i = 0; i < scripts.length; i++) {
    var m = scripts[i].src.match(/^(.*)shared\/nav\.js(\?.*)?$/);
    if (m) { base = m[1]; break; }
  }
  if (!base) base = './';                       // fallback

  /* --- Inject theme.css if not already present --- */
  var cssHref = base + 'shared/theme.css';
  var links = document.querySelectorAll('link[rel="stylesheet"]');
  var loaded = false;
  for (var j = 0; j < links.length; j++) {
    if (links[j].href.indexOf('shared/theme.css') !== -1) { loaded = true; break; }
  }
  if (!loaded) {
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = cssHref;
    document.head.appendChild(el);
  }

  /* --- Tool definitions grouped by category --- */
  var categories = [
    {
      label: '💰 Finance',
      tools: [
        { label: 'Finance Calculator',     href: '/finance-calculator/' },
        { label: 'Currency Converter',     href: '/currency-converter/', popular: true },
        { label: 'Crypto Converter',       href: '/crypto-converter/', popular: true },
        { label: 'Percentage Calculator',  href: '/percentage-calculator/', popular: true },
        { label: 'Compound Interest',      href: '/compound-interest-calculator/' },
        { label: 'Mortgage Calculator',    href: '/mortgage-calculator/' },
        { label: 'Loan Calculator',        href: '/loan-calculator/' },
        { label: 'BMI Calculator',         href: '/bmi-calculator/' },
        { label: 'Discount Calculator',    href: '/discount-calculator/' },
        { label: 'Sales Tax Calculator',   href: '/sales-tax-calculator/' },
        { label: 'Tip Calculator',         href: '/tip-calculator/' },
        { label: 'Hours Calculator',       href: '/hours-calculator/' },
      ]
    },
    {
      label: '⚙️ Developer',
      tools: [
        { label: 'JSON Formatter',    href: '/json-formatter/' },
        { label: 'Regex Tester',      href: '/regex-tester/' },
        { label: 'Base64 Encoder',    href: '/base64-encoder/' },
        { label: 'Cron Generator',    href: '/cron-generator/' },
        { label: 'UUID Generator',    href: '/uuid-generator/' },
        { label: 'Color Picker',      href: '/color-picker/' },
        { label: 'LLM Pricing Tracker', href: '/llm-pricing-tracker/', badge: 'New' },
      ]
    },
    {
      label: '📝 Text',
      tools: [
        { label: 'Word Counter',      href: '/word-counter/' },
        { label: 'Case Converter',    href: '/case-converter/' },
        { label: 'Lorem Ipsum',       href: '/lorem-ipsum/' },
        { label: 'Word Unscrambler',  href: '/word-unscrambler/' },
      ]
    },
    {
      label: '✨ Generators',
      tools: [
        { label: 'QR Code Generator',  href: '/qr-code-generator/' },
        { label: 'Password Generator', href: '/password-generator/' },
        { label: 'Image Compressor',   href: '/image-compressor/' },
      ]
    },
    {
      label: '🔄 Converters',
      tools: [
        { label: 'Unit Converter', href: '/unit-converter/' },
        { label: 'Age Calculator', href: '/age-calculator/' },
      ]
    },
  ];

  /* Flat list for search */
  var tools = [];
  categories.forEach(function(c) { tools = tools.concat(c.tools); });

  /* --- Detect current path for active highlighting --- */
  var current = window.location.pathname.replace(/\/index\.html$/, '/');

  /* --- Build DOM --- */
  var nav = document.createElement('nav');
  nav.className = 'uh-nav';
  nav.innerHTML = buildHTML();

  /* Inject scoped styles */
  var style = document.createElement('style');
  style.textContent = NAV_CSS;
  document.head.appendChild(style);

  /* Insert at top of body */
  document.body.insertBefore(nav, document.body.firstChild);

  /* --- Hamburger toggle --- */
  var hamburger = nav.querySelector('.uh-hamburger');
  var menu = nav.querySelector('.uh-menu');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      menu.classList.toggle('uh-open');
    });
  }

  /* --- Mega menu (Tools dropdown) --- */
  var toolsTrigger = nav.querySelector('.uh-tools-trigger');
  var mega = nav.querySelector('.uh-mega');
  if (toolsTrigger && mega) {
    var megaTimeout;
    toolsTrigger.addEventListener('mouseenter', function() {
      clearTimeout(megaTimeout);
      mega.classList.add('uh-mega-open');
      toolsTrigger.classList.add('uh-trigger-active');
    });
    toolsTrigger.addEventListener('mouseleave', function() {
      megaTimeout = setTimeout(function() {
        mega.classList.remove('uh-mega-open');
        toolsTrigger.classList.remove('uh-trigger-active');
      }, 200);
    });
    mega.addEventListener('mouseenter', function() {
      clearTimeout(megaTimeout);
    });
    mega.addEventListener('mouseleave', function() {
      mega.classList.remove('uh-mega-open');
      toolsTrigger.classList.remove('uh-trigger-active');
    });
    /* Click for mobile */
    toolsTrigger.addEventListener('click', function(e) {
      e.preventDefault();
      mega.classList.toggle('uh-mega-open');
    });
  }

  /* --- Search functionality --- */
  var searchInput = nav.querySelector('.uh-search');
  var searchResults = nav.querySelector('.uh-search-results');
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      var q = this.value.toLowerCase().trim();
      if (!q || q.length < 1) {
        searchResults.style.display = 'none';
        return;
      }
      var matches = tools.filter(function(t) {
        return t.label.toLowerCase().indexOf(q) !== -1;
      }).slice(0, 6);
      if (matches.length === 0) {
        searchResults.innerHTML = '<div class="uh-sr-empty">No tools found</div>';
        searchResults.style.display = 'block';
        return;
      }
      searchResults.innerHTML = matches.map(function(t) {
        return '<a href="' + t.href + '">' + esc(t.label) + '</a>';
      }).join('');
      searchResults.style.display = 'block';
    });
    /* Close search on outside click */
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.uh-search-wrap')) {
        searchResults.style.display = 'none';
      }
    });
  }

  /* Close mobile menu on link click */
  var links2 = nav.querySelectorAll('.uh-menu a');
  for (var k = 0; k < links2.length; k++) {
    links2[k].addEventListener('click', function () {
      menu.classList.remove('uh-open');
    });
  }

  /* --- Listen for auth events to update Sign-In / Avatar --- */
  document.addEventListener('auth:login', updateAuthUI);
  document.addEventListener('auth:logout', updateAuthUI);
  document.addEventListener('auth:premium', updateAuthUI);

  function updateAuthUI(e) {
    var right = nav.querySelector('.uh-right');
    if (!right) return;
    right.innerHTML = authHTML(e.detail || null);
    bindAuthDropdown(right);
  }

  function bindAuthDropdown(container) {
    var trigger = container.querySelector('.uh-avatar-trigger');
    var dd = container.querySelector('.uh-dropdown');
    if (!trigger || !dd) return;
    trigger.addEventListener('click', function (ev) {
      ev.stopPropagation();
      dd.classList.toggle('uh-dd-open');
    });
    document.addEventListener('click', function () {
      dd.classList.remove('uh-dd-open');
    });
  }

  /* Initial bind */
  bindAuthDropdown(nav.querySelector('.uh-right'));

  /* --- Helper HTML builders --- */
  function buildHTML() {
    /* Category links for the top bar */
    var catLinks = categories.map(function(c) {
      return '<button class="uh-cat-btn" data-cat="' + escAttr(c.label) + '">' + c.label + '</button>';
    }).join('');

    /* Mega menu content (hidden, shows on hover) */
    var megaContent = categories.map(function(c) {
      var toolLinks = c.tools.map(function(t) {
        var cls = current.indexOf(t.href.replace(/\/$/, '')) !== -1 ? ' class="uh-active"' : '';
        var badge = t.popular ? ' <span class="uh-mini-badge">🔥</span>' : (t.badge ? ' <span class="uh-mini-badge-new">' + esc(t.badge) + '</span>' : '');
        return '<a href="' + t.href + '"' + cls + '>' + esc(t.label) + badge + '</a>';
      }).join('');
      return '<div class="uh-mega-col">' +
               '<div class="uh-mega-label">' + c.label + '</div>' +
               '<div class="uh-mega-links">' + toolLinks + '</div>' +
             '</div>';
    }).join('');

    return '' +
      '<div class="uh-inner">' +
        '<a class="uh-logo" href="/">ToolAspect</a>' +
        '<button class="uh-hamburger" aria-label="Menu"><span></span><span></span><span></span></button>' +
        '<div class="uh-menu">' +
          '<div class="uh-center">' +
            '<button class="uh-tools-trigger">Tools <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></button>' +
            '<a href="/developer-tools/">Developer</a>' +
            '<a href="/finance-tools/">Finance</a>' +
            '<a href="/text-tools/">Text</a>' +
            '<div class="uh-search-wrap">' +
              '<input type="text" class="uh-search" placeholder="Search 28 tools..." autocomplete="off">' +
              '<svg class="uh-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>' +
              '<div class="uh-search-results"></div>' +
            '</div>' +
          '</div>' +
          '<div class="uh-right">' + authHTML(null) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="uh-mega">' +
        '<div class="uh-mega-grid">' + megaContent + '</div>' +
      '</div>';
  }

  function authHTML(user) {
    if (user && user.uid) {
      var avatar = user.photoURL || '';
      var name = user.displayName || user.email || 'User';
      var initials = name.charAt(0).toUpperCase();
      var avatarEl = avatar
        ? '<img src="' + escAttr(avatar) + '" alt="" class="uh-avatar-img">'
        : '<span class="uh-avatar-init">' + initials + '</span>';
      return '' +
        '<div class="uh-auth-wrap">' +
          '<button class="uh-avatar-trigger">' + avatarEl + '</button>' +
          '<div class="uh-dropdown">' +
            '<div class="uh-dd-header">' +
              '<div class="uh-dd-name">' + esc(name) + '</div>' +
              '<div class="uh-dd-email">' + esc(user.email || '') + '</div>' +
            '</div>' +
            '<a href="/account/" class="uh-dd-item">Manage Subscription</a>' +
            '<button class="uh-dd-item" onclick="document.dispatchEvent(new CustomEvent(\'auth:logout\'))">Sign Out</button>' +
          '</div>' +
        '</div>';
    }
    return '<button class="btn btn-primary btn-sm" onclick="document.dispatchEvent(new CustomEvent(\'auth:show-login\'))">Sign In</button>';
  }

  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  // Attribute-safe escape (esc() via textContent does NOT encode quotes, so it can't
  // protect an HTML attribute). Used for user.photoURL in the avatar <img src> to
  // prevent DOM XSS via attribute breakout. 2026-06-08.
  function escAttr(s) { return String(s == null ? '' : s).replace(/[&"'<>]/g, function (c) { return { '&': '&amp;', '"': '&quot;', "'": '&#39;', '<': '&lt;', '>': '&gt;' }[c]; }); }

  /* --- Site-wide footer with legal links (only if page has no footer) --- */
  if (!document.querySelector('footer')) {
    var f = document.createElement('footer');
    f.className = 'uh-footer';
    f.innerHTML =
      '<div class="uh-footer-inner">' +
        '<a class="uh-footer-logo" href="/">ToolAspect</a>' +
        '<div class="uh-footer-links">' +
          '<a href="/about.html">About</a>' +
          '<a href="/contact.html">Contact</a>' +
          '<a href="/privacy.html">Privacy Policy</a>' +
          '<a href="/terms.html">Terms of Service</a>' +
          '<a href="/disclaimer.html">Disclaimer</a>' +
        '</div>' +
        '<p class="uh-footer-copy">\u00A9 ' + new Date().getFullYear() + ' ToolAspect \u2014 All tools run in your browser, no data collected.</p>' +
      '</div>';
    var fStyle = document.createElement('style');
    fStyle.textContent =
      '.uh-footer{border-top:1px solid var(--border);padding:2rem 1rem;text-align:center}' +
      '.uh-footer-inner{max-width:var(--max-w);margin:0 auto}' +
      '.uh-footer-logo{font-weight:700;font-size:1rem;color:var(--primary);display:block;margin-bottom:.75rem}' +
      '.uh-footer-links{display:flex;flex-wrap:wrap;justify-content:center;gap:.5rem 1rem;margin-bottom:1rem}' +
      '.uh-footer-links a{font-size:.82rem;color:var(--muted);transition:color .15s}' +
      '.uh-footer-links a:hover{color:var(--primary)}' +
      '.uh-footer-copy{font-size:.78rem;color:var(--muted);line-height:1.5}';
    document.head.appendChild(fStyle);
    document.body.appendChild(f);
  }

  /* --- Scoped CSS --- */
  var NAV_CSS = '' +
  '.uh-nav{' +
    'background:rgba(8,9,13,.8);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:900;' +
  '}' +
  '.uh-inner{' +
    'max-width:var(--max-w);margin:0 auto;display:flex;align-items:center;padding:.7rem 1.5rem;gap:.75rem;' +
  '}' +
  '.uh-logo{' +
    'font-weight:800;font-size:1.15rem;background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;white-space:nowrap;flex-shrink:0;letter-spacing:-0.02em;' +
  '}' +
  '.uh-hamburger{' +
    'display:none;background:none;border:none;cursor:pointer;padding:4px;flex-direction:column;gap:4px;' +
  '}' +
  '.uh-hamburger span{' +
    'display:block;width:20px;height:2px;background:var(--text);border-radius:1px;' +
  '}' +
  '.uh-menu{' +
    'display:flex;align-items:center;gap:1rem;flex:1;min-width:0;' +
  '}' +
  '.uh-center{' +
    'display:flex;align-items:center;gap:1.5rem;flex:1;min-width:0;' +
  '}' +
  '.uh-center::-webkit-scrollbar{display:none;}' +
  '.uh-tools-trigger{' +
    'display:inline-flex;align-items:center;gap:.3rem;background:none;border:none;color:var(--text-secondary);' +
    'font-size:.88rem;font-weight:500;cursor:pointer;padding:.4rem .6rem;border-radius:var(--radius);transition:color .15s,background .15s;' +
    'white-space:nowrap;' +
  '}' +
  '.uh-tools-trigger:hover,.uh-tools-trigger.uh-trigger-active{color:var(--text);background:var(--primary-glow);}' +
  '.uh-center a{' +
    'font-size:.88rem;color:var(--text-secondary);white-space:nowrap;padding:.4rem .6rem;border-radius:var(--radius);' +
    'transition:color .15s,background .15s;font-weight:500;' +
  '}' +
  '.uh-center a:hover{color:var(--text);background:var(--primary-glow);}' +
  '.uh-center a.uh-active{color:var(--primary);background:var(--primary-glow);font-weight:600;}' +
  /* Search box */
  '.uh-search-wrap{position:relative;margin-left:auto;}' +
  '.uh-search{' +
    'padding:.4rem .85rem .4rem 2rem;border:1px solid var(--border);border-radius:999px;' +
    'background:var(--bg-elevated);color:var(--text);font-size:.82rem;width:200px;transition:width .2s,border-color .2s;' +
  '}' +
  '.uh-search:focus{outline:none;border-color:var(--primary);width:260px;box-shadow:0 0 0 3px rgba(99,102,241,.12);}' +
  '.uh-search::placeholder{color:var(--muted);}' +
  '.uh-search-icon{position:absolute;left:.65rem;top:50%;transform:translateY(-50%);color:var(--muted);pointer-events:none;}' +
  '.uh-search-results{' +
    'position:absolute;top:calc(100% + 6px);left:0;right:0;background:var(--surface);border:1px solid var(--border);' +
    'border-radius:var(--radius-md);box-shadow:var(--shadow-lg);display:none;z-index:960;overflow:hidden;padding:.4rem;' +
  '}' +
  '.uh-search-results a{' +
    'display:block;padding:.5rem .75rem;font-size:.85rem;color:var(--text-secondary);border-radius:var(--radius);' +
    'transition:background .12s,color .12s;' +
  '}' +
  '.uh-search-results a:hover{background:var(--primary-glow);color:var(--text);}' +
  '.uh-sr-empty{padding:.75rem;text-align:center;color:var(--muted);font-size:.82rem;}' +
  /* Mega menu */
  '.uh-mega{' +
    'position:absolute;top:100%;left:0;right:0;background:var(--surface);border-bottom:1px solid var(--border);' +
    'box-shadow:var(--shadow-lg);opacity:0;visibility:hidden;transform:translateY(-8px);' +
    'transition:opacity .2s,transform .2s,visibility .2s;z-index:890;' +
  '}' +
  '.uh-mega.uh-mega-open{opacity:1;visibility:visible;transform:translateY(0);}' +
  '.uh-mega-grid{' +
    'max-width:var(--max-w);margin:0 auto;display:grid;grid-template-columns:repeat(5,1fr);gap:1.5rem;padding:1.5rem;' +
  '}' +
  '.uh-mega-col{}' +
  '.uh-mega-label{font-size:.72rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem;padding-left:.4rem;}' +
  '.uh-mega-links{display:flex;flex-direction:column;gap:.1rem;}' +
  '.uh-mega-links a{' +
    'display:inline-flex;align-items:center;gap:.3rem;padding:.35rem .5rem;font-size:.82rem;color:var(--text-secondary);' +
    'border-radius:var(--radius);transition:background .12s,color .12s;' +
  '}' +
  '.uh-mega-links a:hover{background:var(--primary-glow);color:var(--text);}' +
  '.uh-mega-links a.uh-active{color:var(--primary);font-weight:600;}' +
  '.uh-mini-badge{font-size:.7rem;}' +
  '.uh-mini-badge-new{font-size:.6rem;background:var(--primary);color:#fff;padding:0 .35rem;border-radius:3px;font-weight:600;text-transform:uppercase;letter-spacing:.02em;}' +
  '.uh-right{flex-shrink:0;position:relative;}' +
  '.uh-avatar-trigger{' +
    'width:34px;height:34px;border-radius:50%;border:2px solid var(--border);overflow:hidden;cursor:pointer;background:var(--bg);display:flex;align-items:center;justify-content:center;' +
  '}' +
  '.uh-avatar-img{width:100%;height:100%;object-fit:cover;}' +
  '.uh-avatar-init{font-size:.8rem;font-weight:600;color:var(--primary);}' +
  '.uh-dropdown{' +
    'position:absolute;right:0;top:calc(100% + 8px);background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);' +
    'box-shadow:var(--shadow);min-width:200px;display:none;z-index:950;overflow:hidden;' +
  '}' +
  '.uh-dropdown.uh-dd-open{display:block;}' +
  '.uh-dd-header{padding:.75rem;border-bottom:1px solid var(--border);}' +
  '.uh-dd-name{font-weight:600;font-size:.9rem;}' +
  '.uh-dd-email{font-size:.75rem;color:var(--muted);margin-top:2px;}' +
  '.uh-dd-item{' +
    'display:block;width:100%;text-align:left;padding:.6rem .75rem;font-size:.85rem;color:var(--text);' +
    'background:none;border:none;cursor:pointer;transition:background .15s;' +
  '}' +
  '.uh-dd-item:hover{background:rgba(99,102,241,.08);}' +
  '@media(max-width:768px){' +
    '.uh-hamburger{display:flex;}' +
    '.uh-menu{' +
      'display:none;position:absolute;top:100%;left:0;right:0;background:var(--surface);' +
      'border-bottom:1px solid var(--border);flex-direction:column;padding:1rem;gap:.75rem;' +
      'max-height:80vh;overflow-y:auto;-webkit-overflow-scrolling:touch;' +
    '}' +
    '.uh-menu.uh-open{display:flex;}' +
    '.uh-center{flex-direction:column;align-items:stretch;gap:.5rem;}' +
    '.uh-center a,.uh-tools-trigger{padding:.6rem .8rem;font-size:.95rem;}' +
    '.uh-search-wrap{margin-left:0;width:100%;}' +
    '.uh-search{width:100%!important;}' +
    '.uh-mega{position:static;opacity:1;visibility:visible;transform:none;box-shadow:none;display:none;}' +
    '.uh-mega.uh-mega-open{display:block;}' +
    '.uh-mega-grid{grid-template-columns:1fr;gap:1rem;padding:0;}' +
  '}';

})();
