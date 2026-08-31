/* ToolAspect Embed Loader — web component edition
 * Usage:
 *   <script src="https://cdn.jsdelivr.net/npm/@coreaspect/toolaspect-embed/dist/toolaspect-embed.js"></script>
 *   <toolaspect-tool tool="concrete-calculator"></toolaspect-tool>
 * Options (attributes):
 *   tool="slug"        (required) — tool slug, e.g. https://toolaspect.com/<slug>/
 *   height="480"       (optional) — iframe height in px, default 480
 *   theme="light|dark" (optional) — passed to the iframe as ?theme=
 * Attribution "Powered by ToolAspect" (dofollow link to https://toolaspect.com)
 * is required by the license and rendered under every widget.
 */
(function () {
  'use strict';

  var BASE = 'https://toolaspect.com';
  var EMBED_BASE = 'https://toolaspect.com/embed';

  var STYLES = ''
    + ':host{display:block;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}'
    + '.ta-wc-frame{width:100%;border:1px solid #e2e8f0;border-radius:10px;background:#fff}'
    + '.ta-wc-attrib{text-align:right;font-size:.72rem;color:#64748b;margin-top:4px}'
    + '.ta-wc-attrib a{color:#2563eb;text-decoration:none}';

  class ToolAspectTool extends HTMLElement {
    static get observedAttributes() { return ['tool', 'height', 'theme']; }

    connectedCallback() { this._render(); }
    attributeChangedCallback() { if (this._frame) this._render(); }

    _render() {
      var slug = (this.getAttribute('tool') || '').trim().replace(/\/+$/, '');
      if (!slug) {
        this.innerHTML = '<div style="font-size:.8rem;color:#b91c1c;padding:8px;border:1px solid #fecaca;border-radius:8px">&lt;toolaspect-tool&gt; requires a <code>tool="slug"</code> attribute.</div>';
        return;
      }
      var height = parseInt(this.getAttribute('height') || '480', 10);
      var theme = this.getAttribute('theme') || 'light';

      var src = EMBED_BASE + '/' + encodeURIComponent(slug) + '/?theme=' + encodeURIComponent(theme);

      if (!this._style) {
        this._style = document.createElement('style');
        this._style.textContent = STYLES;
        this.appendChild(this._style);
      }

      if (!this._frame) {
        this._frame = document.createElement('iframe');
        this._frame.className = 'ta-wc-frame';
        this._frame.setAttribute('loading', 'lazy');
        this._frame.setAttribute('title', 'ToolAspect ' + slug + ' widget');
        this._frame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
        this.appendChild(this._frame);
        this._attrib = document.createElement('div');
        this._attrib.className = 'ta-wc-attrib';
        this._attrib.innerHTML = 'Powered by <a href="' + BASE + '/" target="_blank" rel="noopener">ToolAspect</a>';
        this.appendChild(this._attrib);
      }

      this._frame.style.height = height + 'px';
      this._frame.src = src;
    }
  }

  if (!customElements.get('toolaspect-tool')) {
    customElements.define('toolaspect-tool', ToolAspectTool);
  }
})();
