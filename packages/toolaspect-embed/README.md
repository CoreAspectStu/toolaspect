# @coreaspect/toolaspect-embed

Embed any [ToolAspect](https://toolaspect.com) tool (600+ calculators and utilities) on your website with a single custom element. The widget renders inside a sandbox-friendly iframe served from `https://toolaspect.com/embed/<slug>/` and includes a small "Powered by ToolAspect" attribution link (dofollow) — that attribution is the license condition, please keep it.

## Install

```html
<script src="https://cdn.jsdelivr.net/npm/@coreaspect/toolaspect-embed/toolaspect-embed.js"></script>
```

Or from a local copy:

```bash
npm install @coreaspect/toolaspect-embed
```

```js
require('@coreaspect/toolaspect-embed'); // registers the custom element
```

## Usage

```html
<toolaspect-tool tool="concrete-calculator"></toolaspect-tool>
```

### Attributes

| Attribute | Required | Default | Description |
|-----------|----------|---------|-------------|
| `tool`    | yes      | —       | Tool slug, matching `https://toolaspect.com/<slug>/` (e.g. `mortgage-calculator`) |
| `height`  | no       | `480`   | Widget height in pixels |
| `theme`   | no       | `light` | `light` or `dark` |

### Example

```html
<toolaspect-tool tool="mortgage-calculator" height="620" theme="light"></toolaspect-tool>
```

## Full widget directory

Browse every embeddable widget (iframe snippets and WordPress shortcode variants too) at [toolaspect.com/embeds.html](https://toolaspect.com/embeds.html).

## License

MIT © ToolAspect. Widgets are free with attribution.
