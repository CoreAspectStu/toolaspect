# Utility Sites — Architecture Decisions

**Status:** Draft
**Date:** 2026-05-24

---

## ADR-001: Stripe Checkout for Payments

**Decision:** Use Stripe Checkout (redirect-based) for all subscriptions.

**Rationale:** No backend needed — Stripe hosts the payment page. Client-side JS creates checkout sessions via Stripe.js. Webhooks to Cloudflare Workers (or Functions) for fulfillment. Zero card data touches our pages.

**Alternatives considered:**
- Stripe Elements (embedded) — requires more client-side code, PCI scope increases
- Paddle / LemonSqueezy — Merchant of Record, higher fees (5% vs 2.9%)
- PayPal only — lower conversion, international friction

**Implementation:** Shared `stripe-checkout.js` component loaded by all paid tools. Config per tool defines plan IDs, features, and pricing.

---

## ADR-002: Firebase Auth for User Accounts

**Decision:** Use Firebase Authentication (Google) for user accounts.

**Rationale:** Free tier covers 50K MAU. Supports email/password + Google OAuth + GitHub OAuth (for dev tools). Client-side SDK, no backend. JWT tokens for session management. Integrates with Stripe via Firebase Extensions.

**Alternatives considered:**
- Supabase Auth — good but adds a dependency on Supabase infrastructure
- Auth0 — free tier too limited (7.5K MAU)
- Custom JWT — reinventing the wheel, security risk
- Clerk — excellent DX but pricing scales poorly

**Implementation:** Shared `auth.js` component. Firebase project per tool or single project with multi-tenant claims.

---

## ADR-003: Cloudflare Pages + Functions

**Decision:** Static HTML on Cloudflare Pages. Cloudflare Functions (edge) for webhooks and API proxying only.

**Rationale:** Pages = free, unlimited requests. Functions = serverless at edge, pay-per-invocation (first 100K free). Webhooks need a server endpoint — Functions provide it without a dedicated server.

**Architecture:**
```
User → Cloudflare Pages (static HTML)
     → Stripe.js → Stripe Checkout (redirect)
     → Stripe Webhook → Cloudflare Function → Firebase (update user)
     → Firebase Auth SDK → Client-side session
```

---

## ADR-004: SEO Automation on XPS via Hermes Cron

**Decision:** XPS laptop (100.85.154.71) runs Hermes cron jobs for SEO content generation, GSC data pulls, and weekly reporting.

**Rationale:** XPS is always-on, connected via Tailscale. Hermes agent can run 24/7. GSC API + Gemini/Claude for content generation. Daily content pipeline: keyword research → article draft → human review → publish.

**Components:**
- Daily GSC data pull → Qdrant for analysis
- Daily keyword research → content brief generation
- Article generation (2-3/day, 40+/month)
- Weekly revenue + traffic report → Mattermost
- Daily X post draft → Stu for approval

---

## ADR-005: Shared UI Component System

**Decision:** Shared JS/CSS components loaded from a central `/shared/` directory on Cloudflare Pages.

**Rationale:** 10 sites share auth UI, payment modal, nav bar, footer, and cross-sell widgets. A single shared directory means one update propagates to all tools.

**Components:**
- `shared/auth.js` — Firebase auth UI (login/register/profile)
- `shared/stripe-checkout.js` — Payment modal + subscription management
- `shared/nav.js` — Top navigation with tool switcher
- `shared/footer.js` — Footer with cross-sell links
- `shared/theme.css` — Dark theme variables + typography

---

## ADR-006: Freemium Gate Architecture

**Decision:** Client-side feature gating with server-side verification.

**Rationale:** Premium features are hidden behind a JS gate that checks Firebase auth claims (custom claims set by Stripe webhook). The gate is cosmetic — determined users can bypass it — but the actual premium value (export, batch, API) requires server-side resources gated by auth.

**Implementation:**
- Firebase custom claims: `{ premium: true, plan: 'pro', tools: ['finance', 'json'] }`
- Client-side JS checks claims before showing premium UI
- Premium features that require processing (PDF export, batch) use Cloudflare Functions
- Simple premium features (extra tabs, advanced options) are just UI-gated

---

## ADR-007: Custom Domain Strategy

**Decision:** One primary domain with subdomains per tool, plus keyword-rich redirect domains.

**Rationale:** Single domain builds authority faster. Subdomains inherit root domain SEO. Keyword domains redirect for brand + type-in traffic.

**Structure:**
- Primary: `utils.io` (or similar) → `finance.utils.io`, `json.utils.io`, etc.
- Redirect domains: `financecalculator.io` → `finance.utils.io`
- Cloudflare manages all DNS + SSL automatically

---

## ADR-008: Monitoring & Reporting Cron Jobs

**Decision:** Suite of Hermes cron jobs running on core-control and XPS for monitoring, reporting, and automation.

**Jobs:**
| Job | Frequency | Location | Deliver To |
|-----|-----------|----------|------------|
| Revenue Report | Weekly (Mon 9am) | core-control | Mattermost #project-utility-sites |
| Traffic Report | Weekly (Mon 9am) | core-control | Mattermost |
| SEO Content Pipeline | Daily (6am) | XPS | Cloudflare Pages (auto-deploy) |
| GSC Data Pull | Daily (2am) | XPS | Qdrant |
| X Post Draft | Daily (8am) | core-control | Stu (Telegram) |
| Site Health Check | Daily (3am) | core-control | Mattermost (alert on failure) |
| Competitor Monitoring | Weekly (Fri 9am) | core-control | Mattermost |

---

## Build Sequence

```
Phase 1: Foundation (Week 1)
  ├─ shared/ component system
  ├─ Firebase Auth setup
  ├─ Stripe account + product config
  └─ Cloudflare Functions for webhooks

Phase 2: Paid Tiers (Week 1-2)
  ├─ Finance Calculator paid tier
  ├─ JSON Formatter paid tier
  ├─ Image Compressor paid tier
  ├─ QR Code Generator paid tier
  └─ Password Generator paid tier

Phase 3: SEO Engine (Week 2-3)
  ├─ GSC API integration
  ├─ Content pipeline cron on XPS
  ├─ Keyword research automation
  └─ Article template system

Phase 4: Growth (Week 3-4)
  ├─ Email capture + Mailchimp/Resend
  ├─ Affiliate program setup
  ├─ Build-in-public pipeline
  ├─ Cross-sell widgets
  └─ Product Hunt launch

Phase 5: Scale (Ongoing)
  ├─ Custom domains
  ├─ A/B pricing tests
  ├─ Weekly shipping cadence
  └─ New tool development
```
