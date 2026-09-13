#!/usr/bin/env python3
"""Generate per-tool OpenGraph preview images (1200x630 PNG) into og/<slug>.png.

Branded gradient card + tool name + toolaspect.com. Idempotent: skips
images that already exist unless --force. Kept small (palette-quantized)
so the site stays well under the CF Pages asset budget.

Usage: python3 scripts/gen-og-images.py [--force]
"""
import os, re, sys, json
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FORCE = '--force' in sys.argv

FONT_BOLD = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf'
FONT_REG = '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf'

# Brand gradient endpoints (dark theme like the site)
TOP = (17, 24, 39)     # near-black navy
BOT = (30, 41, 82)     # deep indigo
ACCENT = (99, 102, 241)  # indigo-500, matches --primary vibes
WHITE = (248, 250, 252)


def tool_title(slug: str, html: str) -> str:
    m = re.search(r'<title>([^<|]+)', html)
    if m:
        t = m.group(1).strip()
        t = re.sub(r'\s*[-–|].*$', '', t).strip()
        if t:
            return t
    return slug.replace('-', ' ').title()


def wrap(draw, text, font, max_w):
    words, lines, cur = text.split(), [], ''
    for w in words:
        t = (cur + ' ' + w).strip()
        if draw.textlength(t, font=font) <= max_w:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines[:3]  # max 3 lines


def make_og(name: str, out_path: str):
    W, H = 1200, 630
    img = Image.new('RGB', (W, H), TOP)
    px = img.load()
    for y in range(H):
        f = y / H
        r = int(TOP[0] + (BOT[0] - TOP[0]) * f)
        g = int(TOP[1] + (BOT[1] - TOP[1]) * f)
        b = int(TOP[2] + (BOT[2] - TOP[2]) * f)
        for x in range(W):
            px[x, y] = (r, g, b)
    d = ImageDraw.Draw(img)

    # top accent bar
    d.rectangle([0, 0, W, 10], fill=ACCENT)

    # eyebrow
    f_eye = ImageFont.truetype(FONT_BOLD, 34)
    d.text((80, 88), 'TOOLASPECT', font=f_eye, fill=ACCENT)

    # title
    f_big = ImageFont.truetype(FONT_BOLD, 84)
    lines = wrap(d, name, f_big, W - 160)
    if len(lines) == 3:
        f_big = ImageFont.truetype(FONT_BOLD, 66)
        lines = wrap(d, name, f_big, W - 160)
    y = 190
    for ln in lines:
        d.text((80, y), ln, font=f_big, fill=WHITE)
        y += f_big.size + 14

    # footer
    f_sm = ImageFont.truetype(FONT_REG, 36)
    d.text((80, H - 96), 'Free · No sign-up · toolaspect.com', font=f_sm,
           fill=(148, 163, 184))

    # convert P-mode for size, keep quality
    img = img.convert('P', palette=Image.ADAPTIVE, colors=128).convert('RGB')
    img = img.convert('P', palette=Image.ADAPTIVE, colors=128)
    img.save(out_path, 'PNG', optimize=True)


def main():
    os.makedirs(os.path.join(ROOT, 'og'), exist_ok=True)
    made, skipped, total_bytes = 0, 0, 0
    for d in sorted(os.listdir(ROOT)):
        p = os.path.join(ROOT, d, 'index.html')
        if not os.path.isfile(p):
            continue
        if d.startswith('.') or d in ('node_modules', 'shared', 'docs', 'scripts', 'roadmap', '_bmad-output'):
            continue
        out = os.path.join(ROOT, 'og', d + '.png')
        if os.path.exists(out) and not FORCE:
            skipped += 1
            continue
        html = open(p, encoding='utf-8', errors='ignore').read()
        title = tool_title(d, html)
        make_og(title, out)
        made += 1
        total_bytes += os.path.getsize(out)
    print(f'OG images: made={made} skipped={skipped} bytes_made={total_bytes/1e6:.1f}MB')


if __name__ == '__main__':
    main()
