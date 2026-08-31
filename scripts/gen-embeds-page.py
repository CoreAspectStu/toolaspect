#!/usr/bin/env python3
"""Generate /embeds.html — public embed distribution index for toolaspect.com.

Lists every tool's embed widget with copy-paste iframe snippet + WordPress
shortcode variant. Each snippet includes a dofollow attribution link
'Powered by ToolAspect' -> https://toolaspect.com

Regenerate:  python3 scripts/gen-embeds-page.py  (from repo root)
"""
import json
import html
import os

DATA = json.load(open(os.path.join(os.path.dirname(__file__), '..', 'embeds-data.json')))
SITE = 'https://toolaspect.com'

ATTRIB_LINK = '<a href="https://toolaspect.com/" target="_blank" rel="noopener">ToolAspect</a>'

# iframe snippet format per tool:
#   <iframe src="https://toolaspect.com/embed/<slug>/" width="100%" height="520"
#           style="border:1px solid #e2e8f0;border-radius:10px"
#           title="<Name> — ToolAspect" loading="lazy"></iframe>
#   <p style="font-size:.75rem;text-align:right;margin:4px 0 0">
#     Powered by <a href="https://toolaspect.com/" target="_blank" rel="noopener">ToolAspect</a></p>

cards = []
for i, t in enumerate(DATA, 1):
    slug, name = t['slug'], t['name']
    esc_name = html.escape(name, quote=True)
    iframe = (
        f'&lt;iframe src="{SITE}/embed/{slug}/" width="100%" height="520" '
        f'style="border:1px solid #e2e8f0;border-radius:10px" '
        f'title="{esc_name} — ToolAspect" loading="lazy"&gt;&lt;/iframe&gt;\n'
        f'&lt;p style="font-size:.75rem;text-align:right;margin:4px 0 0"&gt; '
        f'Powered by &lt;a href="{SITE}/" target="_blank" rel="noopener"&gt;ToolAspect&lt;/a&gt;&lt;/p&gt;'
    )
    shortcode = (
        f'&lt;iframe src="{SITE}/embed/{slug}/" width="100%" height="520" '
        f'style="border:1px solid #e2e8f0;border-radius:10px" '
        f'title="{esc_name} — ToolAspect" loading="lazy"&gt;&lt;/iframe&gt; '
        f'Powered by &lt;a href="{SITE}/" target="_blank" rel="noopener"&gt;ToolAspect&lt;/a&gt;'
    )
    cards.append(f'''<div class="widget" id="w-{slug}">
<h3>{i}. {html.escape(name)}</h3>
<p class="desc">Tool page: <a href="/{slug}/">/{slug}/</a> &middot; Widget: <a href="/embed/{slug}.js">/embed/{slug}.js</a></p>
<p class="lbl">HTML (copy-paste)</p>
<pre class="snippet" data-copy>&lt;iframe src="{SITE}/embed/{slug}/" width="100%" height="520" style="border:1px solid #e2e8f0;border-radius:10px" title="{esc_name} — ToolAspect" loading="lazy"&gt;&lt;/iframe&gt;
&lt;p style="font-size:.75rem;text-align:right;margin:4px 0 0"&gt;Powered by &lt;a href="{SITE}/" target="_blank" rel="noopener"&gt;ToolAspect&lt;/a&gt;&lt;/p&gt;</pre>
<p class="lbl">WordPress (paste in a Custom HTML block)</p>
<pre class="snippet" data-copy>&lt;iframe src="{SITE}/embed/{slug}/" width="100%" height="520" style="border:1px solid #e2e8f0;border-radius:10px" title="{esc_name} — ToolAspect" loading="lazy"&gt;&lt;/iframe&gt; Powered by &lt;a href="{SITE}/" target="_blank" rel="noopener"&gt;ToolAspect&lt;/a&gt;</pre>
<p class="note">npm/web component: <code>&lt;toolaspect-tool tool="{slug}"&gt;&lt;/toolaspect-tool&gt;</code> — see <a href="https://www.npmjs.com/package/@coreaspect/toolaspect-embed">@coreaspect/toolaspect-embed</a>. Attribution link is the license condition &mdash; please keep it.</p>
</div>''')

page = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Embed Any Tool — {len(DATA)}+ Free Embeddable Widgets | ToolAspect</title>
<meta name="description" content="Copy-paste embed snippets for every ToolAspect calculator and tool. iframe and WordPress-ready snippets, plus a web component loader. Free with attribution.">
<link rel="canonical" href="{SITE}/embeds.html">
<meta property="og:title" content="Embed Any Tool — {len(DATA)}+ Free Embeddable Widgets">
<meta property="og:type" content="website">
<meta property="og:url" content="{SITE}/embeds.html">
<meta property="og:description" content="Copy-paste embed snippets for every ToolAspect calculator and tool. iframe and WordPress-ready snippets, plus a web component loader. Free with attribution.">
<meta property="og:image" content="{SITE}/shared/og-image.png">
<meta property="og:site_name" content="ToolAspect">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Embed Any Tool — {len(DATA)}+ Free Embeddable Widgets">
<meta name="twitter:description" content="Copy-paste embed snippets for every ToolAspect calculator and tool. Free with attribution.">
<meta name="twitter:image" content="{SITE}/shared/og-image.png">
<style>
:root{{--bg:#f8fafc;--surface:#fff;--border:#e2e8f0;--text:#0f172a;--muted:#64748b;--accent:#2563eb}}
*{{box-sizing:border-box;margin:0;padding:0}}
body{{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--bg);color:var(--text);line-height:1.65}}
.wrap{{max-width:960px;margin:0 auto;padding:32px 20px 64px}}
header{{text-align:center;padding:32px 0 24px}}
h1{{font-size:2.1rem;margin-bottom:10px}}
header p{{color:var(--muted);max-width:680px;margin:0 auto}}
.search{{display:block;width:100%;max-width:520px;margin:20px auto 0;padding:10px 16px;border:1px solid var(--border);border-radius:999px;font-size:1rem;background:var(--surface)}}
.badges{{display:flex;gap:8px;justify-content:center;margin-top:16px;flex-wrap:wrap}}
.badge{{background:var(--surface);border:1px solid var(--border);border-radius:999px;padding:5px 14px;font-size:.8rem;color:var(--muted)}}
h2{{font-size:1.3rem;margin:36px 0 14px}}
.widget{{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:24px;margin-bottom:28px}}
.widget h3{{font-size:1.05rem;margin-bottom:6px}}
.widget p.desc{{color:var(--muted);font-size:.92rem;margin-bottom:10px}}
.widget a{{color:var(--accent);text-decoration:none}}
.lbl{{font-size:.75rem;text-transform:uppercase;letter-spacing:.04em;color:var(--muted);margin-bottom:4px}}
pre{{background:#0f172a;color:#e2e8f0;border-radius:10px;padding:14px 16px;font-size:.78rem;overflow-x:auto;margin-bottom:14px;white-space:pre-wrap;word-break:break-word}}
.note{{font-size:.8rem;color:var(--muted)}}
footer{{text-align:center;color:var(--muted);font-size:.85rem;padding-top:32px;border-top:1px solid var(--border);margin-top:40px}}
footer a{{color:var(--accent);text-decoration:none}}
</style>
</head>
<body>
<div class="wrap">
<header>
<h1>Embed Any ToolAspect Widget</h1>
<p>Every one of our {len(DATA)} tools ships as a free, self-contained embed. Grab a copy-paste iframe snippet or the WordPress variant below, or use the <a href="https://www.npmjs.com/package/@coreaspect/toolaspect-embed" style="color:var(--accent)">@coreaspect/toolaspect-embed</a> web component. Free with attribution: keep the &ldquo;Powered by ToolAspect&rdquo; link (dofollow) under the widget.</p>
<input class="search" id="q" type="search" placeholder="Filter widgets by name or slug&hellip;" autocomplete="off" aria-label="Filter widgets">
<div class="badges"><span class="badge">{len(DATA)} widgets</span><span class="badge">No signup</span><span class="badge">iframe + WordPress + web component</span><span class="badge">Mobile friendly</span></div>
</header>

<h2>Quick start</h2>
<div class="widget">
<p class="desc">The iframe snippet for any tool follows this pattern (replace <code>slug</code>):</p>
<pre>&lt;iframe src="{SITE}/embed/&lt;slug&gt;/" width="100%" height="520" style="border:1px solid #e2e8f0;border-radius:10px" title="Tool — ToolAspect" loading="lazy"&gt;&lt;/iframe&gt;
&lt;p style="font-size:.75rem;text-align:right;margin:4px 0 0"&gt;Powered by &lt;a href="{SITE}/" target="_blank" rel="noopener"&gt;ToolAspect&lt;/a&gt;&lt;/p&gt;</pre>
<p class="note">Web component alternative: <code>&lt;toolaspect-tool tool="slug"&gt;&lt;/toolaspect-tool&gt;</code> via <a href="https://www.npmjs.com/package/@coreaspect/toolaspect-embed">@coreaspect/toolaspect-embed</a>.</p>
</div>

<h2 id="all">All widgets ({len(DATA)})</h2>
{chr(10).join(cards)}

<footer>
<p>Powered by <a href="{SITE}/">ToolAspect</a> &middot; <a href="/embed/">Contractor widget showcase</a> &middot; <a href="/all-tools/">All tools</a></p>
</footer>
</div>
<script>
(function(){{
  var q=document.getElementById('q');if(!q)return;
  var widgets=[].slice.call(document.querySelectorAll('.widget[id^="w-"]'));
  q.addEventListener('input',function(){{
    var v=q.value.trim().toLowerCase();
    widgets.forEach(function(w){{
      w.style.display=(w.textContent.toLowerCase().indexOf(v)>-1||w.id.indexOf(v)>-1)?'':'none';
    }});
  }});
}})();
</script>
</body>
</html>
'''
with open('embeds.html', 'w', encoding='utf-8') as f:
    f.write(page)
print(f'wrote embeds.html with {len(DATA)} widgets, {len(page)} bytes')
