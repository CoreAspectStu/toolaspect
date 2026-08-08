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

  /* --- Tool definitions --- */
  var tools = [
    { label: 'Finance Calc',      href: '/finance-calculator/' },
    { label: 'JSON Formatter',    href: '/json-formatter/' },
    { label: 'Image Compress',    href: '/image-compressor/' },
    { label: 'QR Gen',            href: '/qr-code-generator/' },
    { label: 'Password Gen',      href: '/password-generator/' },
    { label: 'Word Unscrambler',  href: '/word-unscrambler/' },
    { label: 'Currency Conv',     href: '/currency-converter/' },
    { label: 'Crypto Conv',       href: '/crypto-converter/' },
    { label: 'Age Calc',          href: '/age-calculator/' },
    { label: 'Unit Conv',         href: '/unit-converter/' },
    { label: 'Regex Tester',      href: '/regex-tester/' },
    { label: 'Pct Calc',          href: '/percentage-calculator/' },
    { label: 'Cron Gen',          href: '/cron-generator/' },
    { label: 'Base64',            href: '/base64-encoder/' },
    { label: 'BMI Calc',          href: '/bmi-calculator/' },
    { label: 'Compound Interest', href: '/compound-interest-calculator/' },
    { label: 'Discount Calc',     href: '/discount-calculator/' },
    { label: 'Hours Calc',        href: '/hours-calculator/' },
    { label: 'Loan Calc',         href: '/loan-calculator/' },
    { label: 'Lorem Ipsum',       href: '/lorem-ipsum/' },
    { label: 'Mortgage Calc',     href: '/mortgage-calculator/' },
    { label: 'Sales Tax',         href: '/sales-tax-calculator/' },
    { label: 'Tip Calc',          href: '/tip-calculator/' },
    { label: 'UUID Gen',          href: '/uuid-generator/' },
    { label: 'Case Conv',         href: '/case-converter/' },
    { label: 'Color Picker',      href: '/color-picker/' },
    { label: 'Word Counter',      href: '/word-counter/' },
    { label: 'LLM Pricing',       href: '/llm-pricing-tracker/' }
  ];

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
    var toolLinks = tools.map(function (t) {
      var cls = current.indexOf(t.href.replace(/\/$/, '')) !== -1 ? ' class="uh-active"' : '';
      return '<a href="' + t.href + '"' + cls + '>' + t.label + '</a>';
    }).join('');

    return '' +
      '<div class="uh-inner">' +
        '<a class="uh-logo" href="/">ToolAspect</a>' +
        '<button class="uh-hamburger" aria-label="Menu"><span></span><span></span><span></span></button>' +
        '<div class="uh-menu">' +
          '<div class="uh-center">' + toolLinks + '</div>' +
          '<div class="uh-right">' + authHTML(null) + '</div>' +
        '</div>' +
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
    'background:var(--surface);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:900;' +
  '}' +
  '.uh-inner{' +
    'max-width:var(--max-w);margin:0 auto;display:flex;align-items:center;padding:.6rem 1rem;gap:.75rem;' +
  '}' +
  '.uh-logo{' +
    'font-weight:700;font-size:1.1rem;color:var(--primary);white-space:nowrap;flex-shrink:0;' +
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
    'display:flex;align-items:center;gap:.5rem;overflow-x:auto;scrollbar-width:none;flex:1;' +
    'mask-image:linear-gradient(90deg,#000 85%,transparent);-webkit-mask-image:linear-gradient(90deg,#000 85%,transparent);' +
  '}' +
  '.uh-center::-webkit-scrollbar{display:none;}' +
  '.uh-center a{' +
    'font-size:.82rem;color:var(--muted);white-space:nowrap;padding:.3rem .5rem;border-radius:var(--radius);' +
    'transition:color .15s,background .15s;' +
  '}' +
  '.uh-center a:hover{color:var(--text);background:rgba(99,102,241,.1);}' +
  '.uh-center a.uh-active{color:var(--primary);background:rgba(99,102,241,.12);font-weight:600;}' +
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
    '}' +
    '.uh-menu.uh-open{display:flex;}' +
    '.uh-center{flex-wrap:wrap;mask-image:none;-webkit-mask-image:none;}' +
    '.uh-center a{padding:.45rem .6rem;}' +
  '}';

})();
