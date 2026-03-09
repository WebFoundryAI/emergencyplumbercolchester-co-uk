# SEO Audit Report: glasgowdrainunblocker.co.uk

**Date:** 2026-03-09
**Pages Audited:** 96 HTML pages (dist/ output)
**Domain:** glasgowdrainunblocker.co.uk

---

## Code Health Check

| Check | Status | Details |
|---|---|---|
| **Build** | PASS | 99 pages built in 887ms, zero errors |
| **Tests** | PASS | 139/139 tests passing (6 test files) |
| **Dependencies** | PASS | All installed, no vulnerabilities flagged |
| **TypeScript** | PASS | Strict mode, no type errors |

---

## SEO Audit Summary

| Severity | Count |
|---|---|
| CRITICAL | 3 |
| HIGH | 4 |
| MEDIUM | 6 |
| LOW | 3 |

---

## CRITICAL Issues

### C1. Duplicate Title Tags — Service vs Glasgow Location Pages (6 pairs)

Six service pages and their corresponding Glasgow location pages share **identical title tags**, causing keyword cannibalization.

| Service Page | Glasgow Location Page | Shared Title |
|---|---|---|
| `/services/blocked-drains/` | `/locations/glasgow/blocked-drains/` | Blocked Drains in Glasgow \| No Call-Out Fee \| 24/7 |
| `/services/drain-unblocking/` | `/locations/glasgow/drain-unblocking/` | Drain Unblocking in Glasgow \| No Call-Out Fee \| 24/7 |
| `/services/cctv-drain-surveys/` | `/locations/glasgow/cctv-drain-surveys/` | CCTV Drain Surveys in Glasgow \| No Call-Out Fee \| 24/7 |
| `/services/drain-jetting/` | `/locations/glasgow/drain-jetting/` | Drain Jetting in Glasgow \| No Call-Out Fee \| 24/7 |
| `/services/emergency-drain-services/` | `/locations/glasgow/emergency-drain-services/` | Emergency Drain Services in Glasgow \| No Call-Out Fee \| 24/7 |
| `/services/drain-repairs/` | `/locations/glasgow/drain-repairs/` | Drain Repairs in Glasgow \| No Call-Out Fee \| 24/7 |

**Fix:** Differentiate the location-service page titles from the main service page titles. For example:
- Service page: `Blocked Drains in Glasgow | No Call-Out Fee | 24/7`
- Location page: `Blocked Drains Glasgow | Local Engineers Near You`

**Files to change:**
- `src/pages/locations/[location]/[service].astro` — update the title template for Glasgow location-service pages
- OR `src/pages/services/[slug].astro` — update the service page title template

---

### C2. Duplicate/Garbled Meta Description on Drain Unblocking Page

The `/services/drain-unblocking/` page has a **repeated phrase** in its meta description:
> "No call-out charges, fixed pricing. No call-out fee, fixed pricing."

This is 191 characters (over the 160 char limit) and reads as an error.

**Fix:** Rewrite to a clean ~150 char description.

**File to change:** `src/data/services.ts` line 51 — the `description` field for drain-unblocking, and/or the meta description template in `src/pages/services/[slug].astro`

---

### C3. JSON-LD Service URLs Missing Trailing Slashes (All Pages)

Every page includes Plumber schema with service URLs like:
```
https://glasgowdrainunblocker.co.uk/services/blocked-drains
```
But the site uses trailing slashes everywhere else (`/services/blocked-drains/`). This inconsistency confuses crawlers.

**Affected lines in `src/utils/schema.ts`:**
- Line 73: `url: \`${siteUrl}/services/${service.slug}\``
- Line 113: `url: \`${siteUrl}/services/${service.slug}\``
- Line 130: `url: \`${siteUrl}/services/${service.slug}/${sub.slug}\``
- Line 157: `url: \`${siteUrl}/services/${service.slug}/${subService.slug}\``
- Line 160: `url: \`${siteUrl}/services/${service.slug}/${subService.slug}\``
- Line 171: `url: \`${siteUrl}/services/${service.slug}\``

**Fix:** Append `/` to all service URL template literals in `schema.ts`.

---

## HIGH Issues

### H1. Meta Descriptions Exceeding 160 Characters (10 pages)

These descriptions will be truncated in Google search results:

| Page | Current Length |
|---|---|
| `/services/blocked-drains/` | 213 chars |
| `/services/drain-unblocking/` | 191 chars |
| `/services/cctv-drain-surveys/` | 190 chars |
| `/services/emergency-drain-services/` | 188 chars |
| `/services/drain-jetting/` | 183 chars |
| `/services/drain-repairs/` | 175 chars |
| `/services/blocked-drains/blocked-toilet/` | 165 chars |
| `/sitemap/` | 161 chars |

**Fix:** Trim all meta descriptions to 150-155 characters while keeping the phone number CTA. Shorten the pattern:
- Before: `"Professional drain unblocking service... No call-out charges, fixed pricing. Call 0141 221 5164 for fast drainage solutions in Glasgow and surrounding areas."`
- After: `"Professional drain unblocking in Glasgow. No call-out fee, fixed pricing. Call 0141 221 5164 for same-day service."`

**Files to change:** `src/pages/services/[slug].astro`, `src/pages/services/[service]/[subservice].astro` — meta description templates

---

### H2. Title Tags Exceeding 60 Characters (8 pages)

| Page | Title | Length |
|---|---|---|
| `/services/blocked-drains/blocked-bath/` | Blocked Bath in Glasgow \| Same-Day \| No Call-Out Fee | 65 |
| `/services/cctv-drain-surveys/drainage-investigation/` | Drainage Investigation in Glasgow \| Same-Day \| No Call-Out Fee | 62 |
| `/services/cctv-drain-surveys/pre-purchase-survey/` | Pre-Purchase Survey in Glasgow \| Same-Day \| No Call-Out Fee | 65 |
| `/services/drain-jetting/commercial-jetting/` | Commercial Jetting in Glasgow \| Same-Day \| No Call-Out Fee | 64 |
| `/services/drain-jetting/domestic-jetting/` | Domestic Jetting in Glasgow \| Same-Day \| No Call-Out Fee | 62 |
| `/services/drain-unblocking/external-drain-unblocking/` | External Drain Unblocking in Glasgow \| Same-Day \| No Call-Out Fee | 65 |
| `/services/drain-unblocking/internal-drain-unblocking/` | Internal Drain Unblocking in Glasgow \| Same-Day \| No Call-Out Fee | 65 |
| `/services/emergency-drain-services/` | Emergency Drain Services in Glasgow \| No Call-Out Fee \| 24/7 | 60 |

**Fix:** Shorten the sub-service title template. Options:
- Drop "Same-Day": `Blocked Bath in Glasgow | No Call-Out Fee`
- Abbreviate: `Blocked Bath Glasgow | Same-Day | No Callout`

**File to change:** `src/pages/services/[service]/[subservice].astro` — title template

---

### H3. Empty `sameAs` Array in JSON-LD Schema

The `sameAs` property is `[]` in both Plumber and Organization schemas. Google may flag incomplete structured data.

**Fix:** Either populate with real social media URLs or remove the `sameAs` property entirely from `src/data/brand.ts` and `src/utils/schema.ts`.

---

### H4. No `<img>` Tags Used Anywhere on the Site

The entire site uses **zero `<img>` elements**. All images are CSS backgrounds or OG/favicon files. This means:
- Zero images indexed in Google Image Search
- No image SEO opportunity (alt text, structured data)
- Missing visual trust signals for users

**Fix:** Add relevant images with `<img>` tags to:
- Service pages (equipment, process photos)
- Location pages (area photos)
- Blog posts (featured images)
- About page (team/company photos)

Each should have descriptive `alt` text, explicit `width`/`height`, and `loading="lazy"`.

---

## MEDIUM Issues

### M1. About Page Is Thin (485 words)

For E-E-A-T (Experience, Expertise, Authority, Trust), the about page should be 800+ words with credentials, certifications, team info, and company history.

**File:** `src/data/staticContent.ts` — ABOUT_CONTENT

---

### M2. Blog Posts Are Short (686-850 words)

| Post | Words |
|---|---|
| signs-of-blocked-drain | 686 |
| prevent-blocked-drains-kitchen | 718 |
| cctv-drain-survey-home-buyers | 769 |
| emergency-drain-problems-what-to-do | 818 |
| drain-jetting-vs-drain-rods | 850 |

For competitive drain/plumbing keywords, aim for 1,200-1,500 words.

**File:** `src/data/blog.ts`

---

### M3. HTML Entity in About Page Title

The about page title renders as: `About Us | Glasgow&#39;s Trusted Drainage Specialists`

The `&#39;` should be a proper apostrophe character in the source.

**File:** `src/pages/about.astro` — title prop

---

### M4. Meta Descriptions Missing CTA (2 pages)

- `/blog/` — "Expert drainage tips..." (no phone number or CTA)
- `/sitemap/` — "Complete sitemap..." (no CTA)

**Fix:** Add "Call 0141 221 5164" or a "Read our guide" CTA to these descriptions.

**Files:** `src/pages/blog/index.astro`, `src/pages/sitemap.astro`

---

### M5. JSON-LD Missing on 404 Page

The `/404.html` page has no structured data. Not critical, but adding a basic WebPage schema maintains consistency.

**File:** `src/pages/404.astro`

---

### M6. HTML Sitemap Missing from XML Sitemap

The `/sitemap/` page exists but is not in `sitemap.xml`. Minor, but should be included for completeness.

**File:** `src/pages/sitemap.xml.ts`

---

## LOW Issues

### L1. No Self-Referencing hreflang Tags

Adding `<link rel="alternate" hreflang="en-gb" href="...">` is a best practice for UK-targeted sites, even single-language ones.

**File:** `src/layouts/BaseLayout.astro`

---

### L2. Blog Index Page Is Thin (406 words)

Add an introductory paragraph with relevant keywords about Glasgow drainage advice.

**File:** `src/pages/blog/index.astro`

---

### L3. 404 Page Is Thin (218 words)

Acceptable for an error page. No action required unless desired.

---

## PASSED Checks (No Issues)

| Check | Status |
|---|---|
| H1 tags — exactly 1 per page | PASS (all 96 pages) |
| Heading hierarchy — no skipped levels | PASS |
| Canonical tags — present, absolute, trailing slash | PASS |
| OG tags — title, description, image, url | PASS (all pages) |
| Twitter cards — card, title, description, image | PASS (all pages) |
| Internal links — no broken links | PASS |
| Trailing slash consistency — all hrefs | PASS |
| robots.txt — correct domain, sitemap ref, AI policies | PASS |
| Skip-to-content link | PASS |
| Form accessibility — labels, aria-hidden honeypot | PASS |
| Language attribute — `lang="en-GB"` | PASS |
| No Manchester references (old branding) | PASS |
| JSON-LD schema present | PASS (95/96 pages, only 404 missing) |
| Meta descriptions all unique | PASS |
| Content depth — all pages 300+ words (except 404) | PASS |
| GA4 tracking configured | PASS |
| Google Search Console verification | PASS |
| Sitemap — 97 URLs, all valid | PASS |
| OG images — all referenced files exist | PASS |

---

## Recommended Fix Priority

### Phase 1 — Quick Wins (30 min)
1. **C3** — Add trailing slashes to JSON-LD URLs in `schema.ts`
2. **C2** — Fix garbled meta description in `services.ts`
3. **H3** — Remove empty `sameAs` array from schema
4. **M3** — Fix HTML entity in about page title

### Phase 2 — Title & Description Optimization (1 hr)
5. **C1** — Differentiate duplicate title tags (service vs Glasgow location pages)
6. **H1** — Trim all meta descriptions to under 160 chars
7. **H2** — Shorten sub-service title tags to under 60 chars
8. **M4** — Add CTAs to blog index and sitemap descriptions

### Phase 3 — Content & Images (ongoing)
9. **H4** — Add `<img>` tags to key pages
10. **M1** — Expand about page content
11. **M2** — Expand blog post content
12. **M5** — Add schema to 404 page
13. **M6** — Add sitemap page to XML sitemap
14. **L1** — Add hreflang tags
