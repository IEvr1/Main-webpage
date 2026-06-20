# SEO decisions & priority checklist — NexAIpla

Reference file for humans and agents: what is done, what is next, and how to choose the next SEO step.

**Site:** https://www.nexaipla.com  
**Property:** Google Search Console — `nexaipla.com`  
**Last updated:** 2026-06-20

---

## Goal

Rank as high as possible for **specific, realistic keywords** — not generic terms like “online booking” globally.

| Search type | Realistic target |
|-------------|------------------|
| `NexAIpla` (brand) | #1 after indexing |
| Niche + Cyprus (e.g. salon SMS booking Cyprus) | Top 3–10 with content + backlinks (months) |
| Generic global terms | Unlikely without major authority spend |

**Formula:** specific keyword + clear page + useful content + real backlinks + time.

---

## Priority checklist

### Phase 1 — Foundation (technical)

| # | Step | Status | Notes |
|---|------|--------|-------|
| 1 | `robots.txt` + `sitemap.xml` in `public/` | ✅ Done | Live at `/robots.txt`, `/sitemap.xml` |
| 2 | Meta tags, canonical, OG, Twitter per page | ✅ Done | All 5 `index.html` files |
| 3 | JSON-LD (Organization / SoftwareApplication) | ✅ Done | Static in HTML |
| 4 | FAQ sections + FAQPage schema | ✅ Done | `FaqSection` on all landing pages |
| 5 | Google Search Console verified | ✅ Done | Domain property |
| 6 | Sitemap submitted & read successfully | ✅ Done | Re-submit after deploy — now 5 pages |

### Phase 2 — Indexing (do now)

| # | Step | Status | Action |
|---|------|--------|--------|
| 7 | Request indexing for all 5 URLs | ⬜ Next | Search Console → URL inspection → Request indexing for each URL below |
| 8 | Confirm pages indexed | ⬜ Pending | Weekly: **Indexing → Pages**; Google: `site:nexaipla.com` |

**URLs to inspect:**

- https://www.nexaipla.com/
- https://www.nexaipla.com/onlinebooking
- https://www.nexaipla.com/foodorder
- https://www.nexaipla.com/shoptraffic
- https://www.nexaipla.com/custom

### Phase 3 — Keyword focus (high impact)

| # | Step | Status | Action |
|---|------|--------|--------|
| 9 | Pick one primary keyword per page | ✅ Done | See table below |
| 10 | Tune titles & meta descriptions | 🟡 Partial | Booking + custom done; home/food/shop optional tune |
| 11 | Internal links with descriptive anchors | ⬜ Pending | Link between home ↔ product pages with keyword-rich text |

**Suggested keyword map (edit when you choose final targets):**

| Page | Primary keyword (EN) | Primary keyword (EL) |
|------|----------------------|----------------------|
| Home | business software Cyprus | λύσεις τεχνολογίας επιχειρήσεις Κύπρος |
| Online booking | online appointment booking Cyprus | online ραντεβού επιχειρήσεις Κύπρος |
| Food order | restaurant online ordering Cyprus | παραγγελίες φαγητού online εστιατόρια Κύπρο |
| Shop traffic | live shop traffic Cyprus | ζωντανή κίνηση καταστήματος Κύπρος |
| Custom apps | custom business apps Cyprus | προσαρμοσμένες εφαρμογές επιχειρήσεις Κύπρος |

### Phase 4 — Measurement

| # | Step | Status | Action |
|---|------|--------|--------|
| 12 | Google Analytics 4 | ⬜ Pending | Create property; add tracking snippet or Vercel integration |
| 13 | Weekly Search Console review | ⬜ Ongoing | Performance (queries), Indexing (errors), Core Web Vitals |

### Phase 5 — Authority & content (ranking lift)

| # | Step | Status | Action |
|---|------|--------|--------|
| 14 | 5–10 quality backlinks | ⬜ Pending | LinkedIn, directories, partners, email signature |
| 15 | 2–4 blog / guide articles | ⬜ Pending | Cyprus business pain points; link from home |
| 16 | Optional industry landing pages | ⬜ Later | e.g. `/for-salons`, `/for-restaurants` |
| 17 | PNG `og-image` (1200×630) | ⬜ Optional | Replace `public/og-image.svg` for better social previews |

### Phase 6 — Ongoing

| # | Step | Status | Action |
|---|------|--------|--------|
| 18 | Monthly content + links | ⬜ Recurring | 1 article and/or 1–2 backlinks per month |
| 19 | Monthly SERP & GSC review | ⬜ Recurring | Impressions, clicks, indexed count, tune titles |

---

## Decision: what to do next

Use this order when picking the next task:

```
IF sitemap Success BUT pages not indexed
  → Do step 7 (request indexing per URL), then step 8

ELSE IF indexed BUT no impressions in Performance
  → Do steps 9–11 (keywords + on-page tuning)

ELSE IF impressions but low clicks
  → Improve titles/descriptions (step 10); add FAQ/content (step 15)

ELSE IF clicks but not ranking top 10 for target keywords
  → Backlinks (step 14) + content (steps 15–16)

ALWAYS
  → Weekly step 8 + 13; monthly steps 18–19
```

**Current recommendation:** Deploy → re-submit sitemap in GSC → request indexing for `/custom` and updated `/onlinebooking`.

---

## Key files in this repo

| File | Purpose |
|------|---------|
| `public/robots.txt` | Crawl rules + sitemap pointer |
| `public/sitemap.xml` | URL list for Google (5 pages) |
| `public/og-image.svg` | Social preview image |
| `index.html`, `*/index.html` | Static SEO meta + JSON-LD |
| `src/i18n/en.json`, `el.json` | Dynamic titles/descriptions + FAQ copy |
| `src/i18n/useLang.ts` | Updates title, description, OG on language switch |
| `src/components/FaqSection.tsx` | FAQ UI + FAQPage schema |
| `src/constants/seo.ts` | Site URL constants |
| `src/constants/faq.ts` | FAQ item definitions per page |

---

## Timeline expectations

| Milestone | Typical time |
|-----------|----------------|
| `site:nexaipla.com` shows pages | 1–2 weeks after indexing requests |
| #1 for `NexAIpla` | Days–weeks after indexed |
| Top 10 for niche Cyprus keywords | 2–6 months |
| Top 3 for niche keywords | 6–12 months + content & backlinks |

---

## Out of scope (for now)

- Migrating to SSR/Next.js (only if indexing stalls)
- Paid Google Ads (separate from organic SEO)
- Generic global keywords without local/niche intent

---

## Changelog

| Date | Change |
|------|--------|
| 2026-06-20 | Booking titles broadened (appointment businesses); `/custom` page added; sitemap → 5 URLs |
| 2026-06-20 | Phase 1 complete; sitemap Success (4 pages); checklist created |
