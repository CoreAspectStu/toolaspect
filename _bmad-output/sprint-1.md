# Sprint 1 — Payment Foundation + First Paid Tier

**Duration:** Week 1 (starting 2026-05-24)
**Goal:** Users can sign in and pay for Finance Calculator Pro
**Sprint Lead:** Baz (GLM-5.1 / Claude Code for heavy builds)

---

## Build Order

| # | Story | Files | Status | Blocked By |
|---|-------|-------|--------|------------|
| 1 | 1.1 Shared UI Components | `shared/theme.css`, `shared/auth.js`, `shared/stripe-checkout.js`, `shared/nav.js` | ⬜ TODO | — |
| 2 | 1.2 Firebase Auth | Firebase project setup, `shared/auth.js` integration | ⬜ TODO | — |
| 3 | 1.3 Stripe Setup | Stripe products/prices, webhook endpoint | ⬜ TODO | — |
| 4 | 1.4 Cloudflare Functions | `functions/stripe-webhook.js` | ⬜ TODO | 1.3 |
| 5 | 1.5 Freemium Gate | `shared/gate.js` premium feature gate | ⬜ TODO | 1.1, 1.2 |
| 6 | 2.1 Finance Calculator Pro | `finance-calculator/index.html` premium tabs | ⬜ TODO | 1.1-1.5 |
| 7 | 3.1 GSC API Integration | Cron job on XPS | ⬜ TODO | — (parallel) |
| 8 | 3.5 Weekly SEO Report | Cron job on core-control | ⬜ TODO | 3.1 |
| 9 | 6.4 Landing Page Upgrade | `index.html` redesign | ⬜ TODO | — (parallel) |

## Parallelization

- **Track A (Critical Path):** 1.1 → 1.2 → 1.3 → 1.4 → 1.5 → 2.1
- **Track B (Parallel):** 3.1, 6.4 (no dependencies on Track A)
- **Track C (After Track A):** 3.5 (needs 3.1 data)

## Definition of Done

- [ ] User can create account on any tool page
- [ ] User can complete Stripe Checkout for Finance Calculator Pro
- [ ] Premium features unlock immediately after payment
- [ ] Webhook updates Firebase claims correctly
- [ ] GSC data pull runs on cron
- [ ] Landing page upgraded with hero + social proof
- [ ] All deployed to Cloudflare Pages and verified

## Future Sprints

**Sprint 2:** Stories 2.2-2.5 (JSON, Image, QR, Password paid tiers) + Story 3.2-3.4 (content pipeline)
**Sprint 3:** Stories 4.1-4.4 (email, affiliate, cross-sell, build-in-public) + Story 6.1-6.3 (domains)
**Sprint 4:** Stories 5.1-5.4 (AdSense, dashboard, pricing tests) + ongoing content engine
