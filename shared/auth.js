/* ============================================================
   ToolAspect — Firebase Auth Integration  (auth.js)
   Include via <script src="shared/auth.js">
   Requires: window.FIREBASE_CONFIG  (set before this script)
   If no config present, auth silently disables.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     Guards — if no Firebase config, do nothing silently
     --------------------------------------------------------- */
  if (!window.FIREBASE_CONFIG || !window.FIREBASE_CONFIG.apiKey) {
    // Provide stub helpers so other code doesn't break
    window.UtilityAuth = { currentUser: null, isPremium: function(){ return false; }, init: function(){} };
    return;
  }

  /* ---------------------------------------------------------
     Load Firebase compat SDK from CDN, then initialise
     --------------------------------------------------------- */
  loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js', function () {
    loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js', function () {
      initFirebase();
    });
  });

  /* ---------------------------------------------------------
     Firebase initialisation
     --------------------------------------------------------- */
  var auth = null;
  var currentUser = null;
  var _premium = false;

  function initFirebase() {
    firebase.initializeApp(window.FIREBASE_CONFIG);
    auth = firebase.auth();

    // Auto-detect Google as sign-in option if configured
    auth.onAuthStateChanged(function (user) {
      currentUser = user;
      if (user) {
        // Check custom claims for premium status
        user.getIdTokenResult(true).then(function (idTokenResult) {
          _premium = !!(idTokenResult.claims && idTokenResult.claims.premium);
          dispatch('auth:login', userObj(user));
          if (_premium) dispatch('auth:premium', userObj(user));
        });
      } else {
        _premium = false;
        dispatch('auth:logout', null);
      }
    });
  }

  /* ---------------------------------------------------------
     Public API — window.UtilityAuth
     --------------------------------------------------------- */
  window.UtilityAuth = {
    get currentUser() { return currentUser; },
    isPremium: function () { return _premium; },

    /** Show the login modal */
    showLogin: function () { ensureModals(); showModal('login'); },

    /** Show the register modal */
    showRegister: function () { ensureModals(); showModal('register'); },

    /** Sign out */
    signOut: function () {
      if (auth) auth.signOut();
    },

    /** Init is a no-op; onAuthStateChanged is set up automatically */
    init: function () {}
  };

  /* ---------------------------------------------------------
     Modal HTML + logic (lazy-built on first use)
     --------------------------------------------------------- */
  var modalsBuilt = false;

  function ensureModals() {
    if (modalsBuilt) return;
    modalsBuilt = true;

    injectModalStyles();
    buildModal('login', 'Sign In',
      '' +
        '<div class="input-group mb-2">' +
          '<label>Email</label>' +
          '<input type="email" id="ua-email" class="input" placeholder="you@example.com" autocomplete="email">' +
        '</div>' +
        '<div class="input-group mb-2">' +
          '<label>Password</label>' +
          '<input type="password" id="ua-pass" class="input" placeholder="Password" autocomplete="current-password">' +
        '</div>' +
        '<button class="btn btn-primary w-full" id="ua-login-btn">Sign In</button>' +
        '<div class="ua-divider"><span>or</span></div>' +
        '<button class="btn btn-outline w-full" id="ua-google-btn">Continue with Google</button>' +
        '<p class="ua-switch mt-2">No account? <a href="#" id="ua-goto-reg">Create one</a></p>' +
        '<div id="ua-login-err" class="ua-err mt-1"></div>'
    );

    buildModal('register', 'Create Account',
      '' +
        '<div class="input-group mb-2">' +
          '<label>Name</label>' +
          '<input type="text" id="ua-name" class="input" placeholder="Your name" autocomplete="name">' +
        '</div>' +
        '<div class="input-group mb-2">' +
          '<label>Email</label>' +
          '<input type="email" id="ua-reg-email" class="input" placeholder="you@example.com" autocomplete="email">' +
        '</div>' +
        '<div class="input-group mb-2">' +
          '<label>Password</label>' +
          '<input type="password" id="ua-reg-pass" class="input" placeholder="Choose a password" autocomplete="new-password">' +
        '</div>' +
        '<button class="btn btn-primary w-full" id="ua-reg-btn">Create Account</button>' +
        '<div class="ua-divider"><span>or</span></div>' +
        '<button class="btn btn-outline w-full" id="ua-google-btn2">Continue with Google</button>' +
        '<p class="ua-switch mt-2">Have an account? <a href="#" id="ua-goto-login">Sign in</a></p>' +
        '<div id="ua-reg-err" class="ua-err mt-1"></div>'
    );

    bindEvents();
  }

  /* ---------------------------------------------------------
     Build a single modal overlay
     --------------------------------------------------------- */
  function buildModal(id, title, bodyHTML) {
    var overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'ua-modal-' + id;
    overlay.innerHTML =
      '<div class="modal">' +
        '<div class="modal-title">' + title +
          '<button class="ua-close" aria-label="Close">&times;</button>' +
        '</div>' +
        bodyHTML +
      '</div>';
    // Close on overlay click
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.classList.remove('active');
    });
    document.body.appendChild(overlay);
  }

  /* ---------------------------------------------------------
     Modal helpers
     --------------------------------------------------------- */
  function showModal(id) {
    var el = document.getElementById('ua-modal-' + id);
    if (el) el.classList.add('active');
  }
  function hideModal(id) {
    var el = document.getElementById('ua-modal-' + id);
    if (el) el.classList.remove('active');
  }

  /* ---------------------------------------------------------
     Bind modal interaction events
     --------------------------------------------------------- */
  function bindEvents() {
    // Close buttons
    document.querySelectorAll('.ua-close').forEach(function (b) {
      b.addEventListener('click', function () {
        this.closest('.modal-overlay').classList.remove('active');
      });
    });

    // Login ↔ Register switch links
    var gotoReg = document.getElementById('ua-goto-reg');
    if (gotoReg) gotoReg.addEventListener('click', function (e) { e.preventDefault(); hideModal('login'); showModal('register'); });
    var gotoLogin = document.getElementById('ua-goto-login');
    if (gotoLogin) gotoLogin.addEventListener('click', function (e) { e.preventDefault(); hideModal('register'); showModal('login'); });

    // Email login
    var loginBtn = document.getElementById('ua-login-btn');
    if (loginBtn) loginBtn.addEventListener('click', function () {
      var email = document.getElementById('ua-email').value;
      var pass  = document.getElementById('ua-pass').value;
      var errEl = document.getElementById('ua-login-err');
      errEl.textContent = '';
      if (!auth) return;
      auth.signInWithEmailAndPassword(email, pass)
        .then(function () { hideModal('login'); })
        .catch(function (err) { errEl.textContent = friendlyError(err.code); });
    });

    // Google login
    var googleBtn = document.getElementById('ua-google-btn');
    if (googleBtn) googleBtn.addEventListener('click', function () { doGoogleLogin(); });
    var googleBtn2 = document.getElementById('ua-google-btn2');
    if (googleBtn2) googleBtn2.addEventListener('click', function () { doGoogleLogin(); });

    // Register
    var regBtn = document.getElementById('ua-reg-btn');
    if (regBtn) regBtn.addEventListener('click', function () {
      var name  = document.getElementById('ua-name').value;
      var email = document.getElementById('ua-reg-email').value;
      var pass  = document.getElementById('ua-reg-pass').value;
      var errEl = document.getElementById('ua-reg-err');
      errEl.textContent = '';
      if (!auth) return;
      auth.createUserWithEmailAndPassword(email, pass)
        .then(function (cred) {
          return cred.user.updateProfile({ displayName: name }).then(function () {
            hideModal('register');
          });
        })
        .catch(function (err) { errEl.textContent = friendlyError(err.code); });
    });

    // Listen for nav-triggered login
    document.addEventListener('auth:show-login', function () { showModal('login'); });

    // Listen for logout trigger
    document.addEventListener('auth:logout', function () {
      if (auth) auth.signOut();
    });
  }

  /* ---------------------------------------------------------
     Google OAuth
     --------------------------------------------------------- */
  function doGoogleLogin() {
    if (!auth) return;
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(function (err) {
      console.warn('[UtilityAuth] Google sign-in error:', err.message);
    });
  }

  /* ---------------------------------------------------------
     Helpers
     --------------------------------------------------------- */
  function userObj(u) {
    return {
      uid: u.uid,
      email: u.email,
      displayName: u.displayName,
      photoURL: u.photoURL
    };
  }

  function dispatch(name, detail) {
    document.dispatchEvent(new CustomEvent(name, { detail: detail }));
  }

  function friendlyError(code) {
    var map = {
      'auth/invalid-email':       'Invalid email address.',
      'auth/user-disabled':       'This account has been disabled.',
      'auth/user-not-found':      'No account found with that email.',
      'auth/wrong-password':      'Incorrect password.',
      'auth/email-already-in-use':'That email is already registered.',
      'auth/weak-password':       'Password must be at least 6 characters.',
      'auth/too-many-requests':   'Too many attempts. Try again later.',
      'auth/popup-closed-by-user':'Google sign-in was cancelled.'
    };
    return map[code] || 'Authentication error. Please try again.';
  }

  function loadScript(src, cb) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = cb;
    s.onerror = function () { console.warn('[UtilityAuth] Failed to load ' + src); };
    document.head.appendChild(s);
  }

  function injectModalStyles() {
    var s = document.createElement('style');
    s.textContent =
      '.ua-close{float:right;background:none;border:none;font-size:1.3rem;color:var(--muted);cursor:pointer;line-height:1}' +
      '.ua-close:hover{color:var(--text)}' +
      '.ua-divider{display:flex;align-items:center;gap:.75rem;margin:1rem 0;color:var(--muted);font-size:.8rem}' +
      '.ua-divider::before,.ua-divider::after{content:"";flex:1;height:1px;background:var(--border)}' +
      '.ua-switch{font-size:.82rem;color:var(--muted);text-align:center}' +
      '.ua-switch a{color:var(--primary);font-weight:500}' +
      '.ua-err{color:var(--danger);font-size:.82rem;min-height:1.2em}';
    document.head.appendChild(s);
  }

})();
