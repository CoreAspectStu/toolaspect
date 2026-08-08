/* Redirect pages.dev → toolaspect.com for SEO consolidation */
(function() {
  if (window.location.hostname.indexOf('pages.dev') !== -1) {
    var newUrl = window.location.href.replace(
      window.location.hostname,
      'toolaspect.com'
    );
    window.location.replace(newUrl);
  }
})();
