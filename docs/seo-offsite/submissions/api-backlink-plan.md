# API / Programmatic Backlink Plan — toolaspect.com

Date: 2026-08-17 · Target: toolaspect.com (1,400+ free online tools, new domain)

**Live-status check (curl, this session):** gitlab.com ✓ (301→200), npmjs.com ✓ (403 bot-block on HEAD but site live), hub.docker.com ✓ (200), pypi.org ✓ (200), news.ycombinator.com ✓, lobste.rs ✓, gravatar.com ✓, crates.io ✓, rubygems.org ✓, packagist.org ✓, dev.to ✓, stackoverflow.com ✓.

**Token audit result: NO tokens available.** Checked `~/.secrets` (only GITHUB_TOKEN present), `~/.npmrc` (no `_authToken`), and Infisical `core-control/default` for GITLAB_TOKEN / NPM_TOKEN / PYPI_TOKEN / DOCKERHUB_TOKEN — all 404 not-found. **Everything below is NEEDS SIGNUP (Stu).** Nothing is READY NOW beyond GitHub (already done).

---

## NEEDS SIGNUP (Stu) — token-based publishing platforms

### 1. GitLab (gitlab.com) — DA ~93, do-follow ✓
- **State:** site reachable; no GITLAB_TOKEN. Signup: email + user creation (needs human for first login/2FA sometimes).
- **After Stu creates account → generate PAT** (scope `api`) at gitlab.com/-/user_settings/personal_access_tokens → store as GITLAB_TOKEN in Infisical.
- **Steps (fully scriptable once token exists):**
  1. `curl -H "PRIVATE-TOKEN: $GITLAB_TOKEN" -X POST "https://gitlab.com/api/v4/user"` → get user id.
  2. Update profile bio (appears on profile page, do-follow): `PUT /api/v4/user` with `bio=1400+ free online tools... https://toolaspect.com`.
  3. Create project: `POST /api/v4/projects` with `name=toolaspect-tools`, `visibility=public`.
  4. Create README with backlinks: `PUT /api/v4/projects/<id>/repository/files/README.md` with base64 content containing contextual links: homepage, plus deep links (e.g. https://toolaspect.com/tools/pdf-merge, /qr-code-generator, /word-counter).
  5. Add website link on project: `PUT /api/v4/projects/<id>` with `homepage_url`? (project setting `container` — use README + description: `POST` description field on create).
- **Value:** profile page + project README + project page = 2–3 do-follow backlinks per project; can mirror multiple GitHub repos.

### 2. npm (npmjs.com) — DA 90, do-follow ✓ (profile + package pages)
- **State:** no NPM_TOKEN in ~/.secrets, ~/.npmrc, or Infisical.
- **After Stu signs up at npmjs.com/signup → Access Tokens → Automation token** → `npm config set //registry.npmjs.org/:_authToken=$TOKEN`.
- **Package concept (do NOT publish without approval):** `toolaspect-links` is low-value spam-adjacent. Better: a genuinely useful micro-utility so the package survives moderation and earns organic installs. Candidates:
  - `@toolaspect/text-stats` — zero-dep word/char/reading-time counter (mirrors our word-counter tool logic). Tiny, real utility, tests in 30 lines.
  - `@toolaspect/qr-urls` — build/validate QR-payload URLs (mailto/wifi/tel format helpers).
  - README contains "Built by [ToolAspect](https://toolaspect.com) — 1,400+ free online tools" (do-follow from npmjs.com package page) + author URL field in package.json (`repository.url`, `homepage`, `author { url }`).
- **Publish flow:** `npm publish --access public`. Scoped name avoids name-squatting issues.

### 3. Docker Hub (hub.docker.com) — DA ~92, do-follow on profile; repo overview renders Markdown? (README shown on repo page; links historically followed)
- **State:** no DOCKERHUB_TOKEN.
- **After Stu signup → Account Settings → Personal Access Tokens** (or `docker login` to get one).
- **Plan:** build a genuinely useful tiny image, e.g. `toolaspect/toolaspect-cli` — a 5 MB Alpine image wrapping the text-stats CLI (same utility as the npm package, one binary). Push with `docker push`. Profile bio + repo README link to toolaspect.com. API: hub.docker.com/v2 (or the newer API) supports `PATCH /v2/repositories/<ns>/<repo>/` to set full_description (README Markdown).
- **Caveat:** lower confidence than npm/PyPI that links pass juice — verify with a crawler (Ahrefs) after 2 weeks.

### 4. PyPI (pypi.org) — DA 94, do-follow on project page (via project URLs + author)
- **State:** no PYPI_TOKEN.
- **After Stu signup → Account settings → Add API token** (scope: entire account).
- **Plan:** publish `toolaspect-textstats` (same micro-utility, Python). `pyproject.toml` with `[project.urls] Homepage = "https://toolaspect.com"`. PyPI project pages render these as do-follow links. Note PyPI requires unique package names and blocks obvious SEO-only packages — keep it a real utility.

### 5. Everything else token-ish
Only GITHUB_TOKEN exists (already used for GitHub backlinks per context). No action needed.

---

## NEEDS SIGNUP / NO TOKEN — programmatic-API sources (10+)

| # | Source | URL | DA (approx) | Do-follow | Submission method | Account needed? |
|---|--------|-----|-----|-----------|-------------------|-----------------|
| 1 | Gravatar | gravatar.com | ~93 | ✓ (profile bio/links) | REST API `api.gravatar.com/v3/profiles` with API key from dashboard; set "about" + links incl. toolaspect.com. WordPress.com account doubles as Gravatar. | Yes — signup (free, API key from gravatar.com/developers) |
| 2 | Hacker News (Show HN) | news.ycombinator.com | ~91 | ✗ links are nofollow, but massive referral + gets scraped by aggregators (do-follow citation) | API is read-only. Posting: `POST https://news.ycombinator.com/r?fnid=...` requires login flow — semi-scriptable with account cookie: `curl -c cookies -d "acct=...&pw=..." /login`, then submit `title=Show HN: ToolAspect — 1,400+ free online tools&url=toolaspect.com` to `/r`. Fragile; consider manual. | Yes — account (email-only signup) |
| 3 | Lobste.rs | lobste.rs | ~70 | ✓ in story+comment Markdown | Invite-only (invitation queue). No open API. If Stu has/knows an invite: submit via web form only. | Yes — **invite required**, likely blocker |
| 4 | Crates.io | crates.io | ~88 | ✓ (README + repo link) | `cargo publish` — fully scriptable. Needs GitHub OAuth login once to get API token (crates.io/settings/tokens). Rust micro-crate, e.g. `toolaspect_textstats`. | Yes — but auth via existing GitHub account (we have GITHUB_TOKEN → Stu just clicks OAuth) |
| 5 | RubyGems.org | rubygems.org | ~89 | ✓ (gem homepage/link fields) | `gem push` with rubygems API key from profile settings (`gem push --key`). Gemspec `homepage` + README links. Micro-gem `toolaspect-textstats`. | Yes — signup (email) |
| 6 | Packagist.org | packagist.org | ~88 | ✓ (README from GitHub repo) | Submit via API: `POST https://packagist.org/api/create-package?username=&apiToken=` with GitHub repo URL — **fully scriptable once account exists**, and Packagist auto-renders the GitHub README (links already there). | Yes — signup (email or GitHub OAuth → we have GitHub!) |
| 7 | dev.to (Forem) | dev.to | ~87 | ✓ profile website + some post links; post body links are nofollow but profile link is followed | API: `POST https://dev.to/api/articles` with `api-key` header. Write a real article ("I built 1,400 free tools — here's the architecture") with links. | Yes — signup, then generate API key from settings/extensions |
| 8 | Mastodon (mastodon.social or tech-focused instance) | joinmastodon.org | ~85 | ✓ profile bio links + toot links | API: create app (`POST /api/v1/apps` no auth) → OAuth token → `PATCH /api/v1/accounts/update_credentials` to set bio with link, then post. **Fully scriptable after account creation** (account creation itself is form/API: `POST /api/v1/accounts`). | Yes — signup (some instances have waitlists; mastodon.social usually open) |
| 9 | Sourcegraph public code index | sourcegraph.com | ~78 | ✓ (rendered READMEs) | Add public repo: `POST /api` or via site "Add repository" — public GitHub repos get indexed automatically; having GitLab/npm sources indexed adds more surfaces. Mostly passive. | No for indexing ✓ — passive; account optional |
| 10 | Open Hub (Black Duck) | openhub.net | ~74 | ✓ project homepage link | API with account API key: register project pointing at GitHub repo; homepage URL = toolaspect.com (verify renders do-follow). | Yes — signup |
| 11 | AlternativeTo | alternativeto.net | ~80 | ✗ nofollow, but high referral + brand searches | Submission via web form only (no public API). Manual entry for "ToolAspect" as alternative to PaidTools. | Yes — signup (email) |
| 12 | Gitea/Codeberg mirror | codeberg.org | ~65 | ✓ (profile + repo README) | API-compatible with Gitea: `POST /api/v1/repos`, token from user settings. Mirror 2–3 tool repos. | Yes — signup (email, open) |
| 13 | Reddit (r/InternetIsBeautiful, r/SideProject) | reddit.com | ~91 | ✗ nofollow, big referral | API: `POST https://oauth.reddit.com/api/submit` with app client_id/secret (script app, create at reddit.com/prefs/apps). Needs account + karma to survive. | Yes — account + app registration |

**Best effort-to-reward for Stu's ~15 min of signups:** Packagist (GitHub OAuth — instant, reuses GitHub README), Crates.io (GitHub OAuth — instant), dev.to (article + API), Mastodon (fully API-driven), Gravatar (API key), then PyPI/npm tokens for real packages.

---

## READY NOW (has token)

- **GitHub only** (GITHUB_TOKEN in ~/.secrets) — already done per context. No other platform tokens exist. Every item above is gated on a 2-minute email signup by Stu.

## Priority order once tokens exist

1. GitLab profile + 2 mirrored repos (3–6 do-follow links, ~93 DA) — cheapest.
2. PyPI `toolaspect-textstats` + npm `@toolaspect/text-stats` (DA 94 + 90).
3. Packagist + Crates.io via GitHub OAuth (no new password to manage).
4. dev.to article via API, Mastodon profile, Gravatar.
5. Docker Hub image; Skip HN/Lobsters unless doing it manually (Lobsters invite-only, HN links nofollow).
