#!/usr/bin/env python3
"""Ping IndexNow (Bing + indexnow.org endpoint) for changed URLs.

Reads URLs from argv or stdin (one per line). Key lives in indexnow-key.txt at
repo root (already committed — it is meant to be public). Run after every deploy.

Usage: python3 scripts/ping-indexnow.py url1 url2 ...
       git diff --name-only HEAD~1 | python3 scripts/ping-indexnow.py
"""
import sys, json, urllib.request, urllib.error
from pathlib import Path

repo = Path(__file__).resolve().parent.parent
BASE = "https://toolaspect.com"
KEY_FILE = repo / "indexnow-key.txt"
ENDPOINTS = ["https://api.indexnow.org/indexnow",
             "https://www.bing.com/indexnow"]

def urls_from(args, stdin_data):
    out = []
    for a in args:
        out.append(a if a.startswith("http") else f"{BASE}/{a.strip('/')}/")
    for line in stdin_data.splitlines():
        f = line.strip()
        if not f or f.startswith("#"): continue
        if f.endswith(".html") and f.endswith("index.html"):
            rel = f.rsplit("index.html", 1)[0]
            out.append(f"{BASE}/{rel}")
        elif ".py" in f or ".md" in f or "shared/" in f or f in ("sitemap.xml","llm.txt"):
            pass  # not pages
        elif "/" in f:
            out.append(f"{BASE}/{f.rstrip('/')}/")
    return sorted(set(out))

def main():
    key = KEY_FILE.read_text().strip()
    urls = urls_from(sys.argv[1:], sys.stdin.read() if not sys.stdin.isatty() else "")
    if not urls:
        print("indexnow: no URLs to ping"); return 0
    body = json.dumps({"host": "toolaspect.com", "key": key,
                       "keyLocation": f"{BASE}/indexnow-key.txt", "urlList": urls}).encode()
    for ep in ENDPOINTS:
        try:
            req = urllib.request.Request(ep, data=body,
                                         headers={"Content-Type": "application/json; charset=utf-8"})
            with urllib.request.urlopen(req, timeout=30) as r:
                print(f"indexnow {ep.split('/')[2]}: HTTP {r.status} ({len(urls)} URLs)")
        except urllib.error.HTTPError as e:
            # 202/200 = accepted; 422 = key/location mismatch (check key file is served)
            print(f"indexnow {ep.split('/')[2]}: HTTP {e.code} — {e.read()[:200].decode(errors='ignore')}")
        except Exception as e:
            print(f"indexnow {ep.split('/')[2]}: {e}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
