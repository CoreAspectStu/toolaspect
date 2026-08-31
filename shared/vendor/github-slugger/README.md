# github-slugger 2.0.0 (vendored)

ISC License — Copyright (c) 2015, Dan Flettre. See LICENSE.

Source: https://github.com/Flet/github-slugger (pinned to npm release 2.0.0).
`dist/github-slugger.iife.min.js` is the unmodified library (index.js + regex.js)
bundled to an IIFE with esbuild, exposing the global `GithubSlugger`
(`GithubSlugger.BananaSlug` class, `GithubSlugger.slug(string, maintainCase?)`).

Used by /markdown-toc-generator/ to produce GitHub-accurate heading anchors:
lowercase, emoji/symbol stripping, space-to-dash, duplicate suffixes (-1, -2).

Byte-verified: bundle outputs match the pristine ESM module across a
13-case battery (duplicates, unicode, emoji, punctuation) before shipping.
