# Utility Sites — microSaaS Transformation PRD

**Status:** Draft → Implementation
**Track:** BMad Method (product transformation)
**Created:** 2026-05-24

---

## 1. Problem

10 utility tools deployed on Cloudflare Pages generating $0 revenue. Current model (free + AdSense) requires 3.3M+ pageviews/month to hit $50K/mo target. microSaaS playbook shows that paid subscriptions reach meaningful revenue with 100x fewer users than ad-only models.

## 2. Vision

Transform utility-sites from a free ad-supported tool portfolio into a hybrid freemium microSaaS generating $50K/mo through subscriptions + AdSense + affiliates. Each tool retains a generous free tier; premium features unlock via $2-7/mo subscriptions.

## 3. Success Metrics

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| Monthly Revenue | $5,500 | $19,000 | $55,000 |
| Paid Subscribers | 200 | 800 | 2,500 |
| Monthly Pageviews | 50K | 200K | 800K |
| Tools with Paid Tiers | 5 | 7 | 10 |
| SEO Articles Published | 40 | 120 | 240 |

## 4. Functional Requirements

### FR-01: Payment Infrastructure
System must integrate Stripe Checkout for subscription payments across all tools, with shared payment component, customer portal, and webhook handling.

### FR-02: Freemium Tier System
Each tool must support a free tier (full basic functionality) and a paid tier (advanced features). Free tier must deliver genuine value — no crippleware.

### FR-03: User Accounts
Users must be able to create accounts (email + password or OAuth) to access paid features, save history, and sync across devices.

### FR-04: SEO Content Engine
Automated system must generate and publish 40+ SEO articles per month targeting long-tail keywords for each tool. Runs 24/7 on XPS via Hermes cron.

### FR-05: Revenue Dashboard
Central dashboard showing revenue per tool, subscriber counts, conversion rates, traffic stats. Auto-generated weekly report to Mattermost.

### FR-06: Custom Domains
Each tool must be accessible via a custom domain (e.g., financecalculator.io) with proper SSL, redirects, and SEO authority.

### FR-07: Affiliate Program
20% revenue share for referrers. Affiliate dashboard with tracking links, payout history, and promotional assets.

### FR-08: Build-in-Public Pipeline
Automated drafting of X/Twitter posts about revenue, traffic, and feature updates. Daily draft sent to Stu for approval.

### FR-09: Email Capture & Nurture
Collect emails on free tier usage. Automated drip campaigns nudging toward paid upgrade.

### FR-10: Google Search Console Integration
Daily automated GSC data pull, keyword ranking tracking, and SERP position monitoring per tool.

### FR-11: AdSense Integration
Google AdSense on all 10 sites, properly placed (above fold, between content, sidebar) without degrading UX.

### FR-12: Cross-Selling
Cross-promote related tools within each site (e.g., Finance Calculator → Currency Converter).

## 5. Non-Functional Requirements

### NFR-01: Performance
Each tool must load in <2s on 3G. Lighthouse Performance score ≥90. No backend server required — all client-side + Stripe redirect.

### NFR-02: Zero Hosting Cost
Architecture must stay on Cloudflare Pages (free tier). Stripe processes payments. No backend server.

### NFR-03: Margin
Operating costs must not exceed $50/month (domains + Stripe fees). Target margin: 95%+.

### NFR-04: Accessibility
WCAG 2.1 AA compliance. Keyboard navigation, screen reader support, proper contrast ratios.

### NFR-05: Security
HTTPS everywhere. No PII stored client-side. Stripe handles all payment data. JWT tokens for auth.

### NFR-06: Dark Theme Consistency
All tools use shared palette: bg #0f1117, surface #1a1d27, border #2a2d3a, text #e4e4e7, muted #9ca3af, primary #6366f1.

## 6. Constraints

- Pure client-side HTML/CSS/JS only (no backend, no Node, no Python server)
- Cloudflare Pages hosting (free, unlimited static requests)
- Stripe Checkout (redirect-based, no card data touches our pages)
- Budget: $50/month max operating cost
- Tools already built and deployed — transformation only, not rebuild
- AdSense already planned — add subscriptions ON TOP, not instead

## 7. Priority Sites for Paid Tiers

| Priority | Site | Paid Price | Premium Features |
|----------|------|-----------|------------------|
| P0 | Finance Calculator | $5/mo | Advanced calcs, PDF export, comparison tables, amortization scheduling |
| P0 | JSON Formatter | $4/mo | Batch validate, API tester, schema validation, saved schemas |
| P1 | Image Compressor | $3/mo | Batch process, WebP conversion, watermark, resize presets |
| P1 | QR Code Generator | $3/mo | Bulk QR, custom designs/colors, analytics tracking |
| P1 | Password Generator | $2/mo | Bulk generate, custom policies, API access, breach check |
| P2 | Regex Tester | $3/mo | Saved patterns, cheat sheet library, shareable links |
| P2 | Word Unscrambler | $3/mo | Scrabble mode, custom dictionaries, anagram solver |
| P3 | Age Calculator | AdSense only | — |
| P3 | Currency Converter | AdSense only | — |
| P3 | Unit Converter | AdSense only | — |

## 8. Out of Scope

- Mobile native apps
- Backend API / database
- Real-time collaboration
- White-label / enterprise tier
- Custom tool builder
- API marketplace
