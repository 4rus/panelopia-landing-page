# Panelopia — Wall Panels Calgary & Edmonton (landing page)

A standalone, single-page Next.js site built as a dedicated Google Ads / SEO
landing page for Panelopia's wall-panel supply-and-install business (real
company — WPC slat panels, UV marble imitation sheets, acoustic panels,
designer wallpaper — serving Calgary and Edmonton, Alberta).

This is **separate from the main panelopia.com codebase** (which lives at
`../../Downloads/New Panelopia Website/panelopia` on this machine). It reuses
the main site's brand tokens and real photography, and writes leads into the
**same Supabase table** as the main site's CRM, but is its own deployable
project so it can be pointed at directly from ad campaigns without pulling
visitors into the full site nav.

If you're picking this up in a new session: **read this whole file before
changing anything.** It exists specifically so you don't have to be told the
project history again.

---

## What this page actually is

One route (`app/page.tsx`), ten sections, in this fixed order:

1. Header — logo, minimal nav (Products / Gallery / Installation / FAQ), phone, Get a Free Quote
2. Intro — plain text only, **no hero image, no overlay** (see "Design rules" below — this was explicitly and repeatedly mandated)
3. Real Installations — asymmetric photo grid (1 big + 4 small), real installation photos
4. Product Categories — WPC Slat Panels / Acoustic Panels / UV Marble Imitation Sheets / Designer Wallpaper, each a full-width real photo + plain caption bar
5. Supply, Delivery & Installation — plain 4-step list + one supporting photo
6. Why Panelopia — factual trust list (verified stats only, no testimonials)
7. More Completed Projects — second, smaller real-photo gallery
8. Get a Free Quote — the lead form (`QuoteForm.tsx`, Supabase-backed)
9. FAQ — real questions/answers, with FAQPage structured data
10. Final CTA — plain heading + two buttons, no image

Plus a footer (both showroom addresses, hours, contact, legal) and a mobile
sticky Call / Get a Free Quote bar.

**Do not reorder or drop sections without being asked.** This structure was
specified explicitly by the client after several earlier redesigns missed
the mark — see "Design rules" for why.

---

## Design rules (hard-won — read before redesigning anything)

This page went through many redesign passes. Each of these rules exists
because an earlier version got corrected. Don't reintroduce what's on this
list unless explicitly asked to:

- **No hero section, ever.** Not a full-bleed photo with text over it, not a
  split image/text layout, not a dark gradient overlay behind a headline.
  The intro (section 2) is plain text on the plain background, full stop.
  Photography comes *after* the intro, never behind it.
- **No "editorial" design gimmicks** — no statement bands, pull-quotes, dark
  timelines with connecting lines, cinematic overlays, asymmetric-for-its-
  own-sake layouts, or giant decorative typography. This is a local
  service business's conversion page, not a design portfolio.
- **No stock or AI-generated imagery, ever.** Every photo on this page must
  come from `public/images/Showcase/` (or the pre-existing real photos in
  `public/images/`) — real Panelopia installation photography. If a section
  needs a photo and no real one fits well, leave it without a photo rather
  than substitute something fake. A CGI/stock-render set was used briefly
  in one iteration and was explicitly rejected — don't repeat that.
- **Leave watermarks intact.** Several real photos have "PANELOPIA / LUXURY
  REDEFINED" baked into them (either a physical watermark or literally the
  client's own logo showing on a TV/screen in the shot). Do not crop or
  edit these out — the client wants them visible.
- **Never invent business facts.** No fake testimonials, reviews, prices,
  guarantees, warranties, certifications, or stats. Every factual claim on
  the page (phone, addresses, hours, "1200+ projects / 3+ years / 2
  showrooms") must trace back to what's already verified — see "Verified
  business facts" below. If new info is needed, ask; don't invent it.
- **Plain, simple copy.** No "transform your space," "elevate," "redefine,"
  clever wordplay headings, or marketing-agency voice. Write like a real
  local business: say what you sell, where you operate, how to get a
  quote. Headings like "Wall Panels for Every Space" beat "Where It Goes
  Up." — concrete over clever, every time.
- **No em dashes in copy.** Use periods, commas, or colons instead. (Code
  comments using `── SECTION ──` dividers are fine — that's not copy.)
- **Match the real logo's typography family.** Headings should feel like
  they belong to the same brand as the actual Panelopia wordmark — avoid
  drifting into an unrelated serif or overly decorative display face.
  Current choice: Plus Jakarta Sans (see `app/globals.css`) — distinct
  from the main site's Montserrat but still a clean, bold, brand-adjacent
  sans, chosen after Montserrat was called out as generic/small-feeling.
- **Get a Free Quote must never be buried.** It's in the header, the intro,
  the mobile sticky bar, the closing section, and the footer. Don't remove
  any of those without being asked.

If you're about to design a hero section, add a stock photo, invent a
testimonial, or write a clever headline — stop and reread this section.

---

## Real photography — how it's organized

`public/images/Showcase/` is the **primary, curated source** of real
installation photography for this page, provided directly by the client.
Treat any new file dropped into that folder as material to actually use,
not just catalog.

Workflow for a new Showcase photo:

1. The client drops a file into `public/images/Showcase/` (original,
   full-size — these run 1–10MB, JPG/PNG/WEBP, sometimes with spaces and
   timestamps in the filename).
2. Optimize + rename it into `public/images/` with a clean, descriptive
   `showcase-<what-it-shows>.jpg` slug (resize to max width 2000px, JPEG
   quality ~82, via `sharp` — see the one-off Node scripts run in this
   project's history for the exact pattern; there's no build-time
   pipeline for this, it's manual per photo).
3. Reference the new `public/images/showcase-*.jpg` path from `page.tsx`.
4. **Never delete a photo from `Showcase/` or overwrite what it shows** —
   if a photo is retired from the page, just stop referencing it; leave
   the source file alone.

Images already used and what they actually show (so you don't have to
re-open every file to check before reusing one):

| File (`public/images/…`) | Shows |
|---|---|
| `showcase-wpc-slat-fireplace-2.jpg` | Residential living room, wood slat panels + LED flanking a fireplace, empty/staged room (used as the big hero photo in the Real Installations grid) |
| `showcase-marble-commercial-hallway.jpg` | Commercial office corridor, full marble-effect panel walls + floor LED strip |
| `showcase-marble-entryway-console.jpg` | Commercial entryway, marble panel wall behind a console table |
| `showcase-marble-slat-livingroom.jpg` | Residential living room, marble-effect chevron panel + wood slats around a TV/fireplace |
| `showcase-restaurant-booth.jpg` | Restaurant booth seating beside a wood slat panel wall |
| `showcase-wpc-slat-fireplace.jpg` | Residential, symmetric wood slat panels flanking a stone fireplace (used for the WPC Slat Panels product row) |
| `showcase-marble-fireplace-tv.jpg` | Residential living room, chevron-pattern panel wall with TV (used for **Acoustic Panels** product row) |
| `showcase-slat-marble-led.jpg` | Black fluted slat panels either side of marble-effect closet doors with LED strips (used for **UV Marble Imitation Sheets** product row) |
| `showcase-designer-wallpaper-livingroom.jpg` | Residential living room, textured metallic-pattern wallpaper (Designer Wallpaper product row) |
| `showcase-marble-gold-install.jpg` | Marble-effect panel installation mid-progress (visible tools/materials) — used in the Supply/Delivery/Install section deliberately, since the in-progress look fits that context |
| `showcase-marble-gold-tvwall.jpg`, `showcase-marble-gold-tvwall.jpg` variants | Black marble-effect + gold slat trim TV wall — used in the "More Completed Projects" gallery |
| `entryway-slat.jpg`, `black-slat-mirror.jpg`, `showroom-main.jpg`, `office-slat-wallpaper.jpg`, `showroom-slat-shelf.jpg` | Older real photos (pre-dating the Showcase folder), also genuine, used to round out the second gallery section |

**Important naming correction already made once** — don't undo it: the
photo showing marble-effect closet doors with black slats
(`showcase-slat-marble-led.jpg`) is labeled **"UV Marble Imitation
Sheets"**, and the chevron-panel TV-wall photo (`showcase-marble-fireplace-tv.jpg`)
is labeled **"Acoustic Panels"**. This looks backwards if you go by which
photo "looks more like marble" — it's correct per the client, who knows
the real product line. Don't swap them back based on visual assumption.

There's also a real bug worth knowing about: **Next.js's built-in image
optimizer (`/_next/image`) was observed serving mismatched bytes for some
images in this environment** — verified by direct byte/hash comparison
(the raw static files were always correct; only the optimizer's output was
wrong). That's why `next.config.js` sets `images: { unoptimized: true }`.
Don't remove that flag without re-testing carefully — if you do, verify
every image again with `curl | md5sum` against the source, not just by eye.

---

## Verified business facts (never invent beyond this list)

- Phone: `587-433-5187` (same number for both locations)
- Email: `info@panelopia.com`
- Calgary showroom: 101 - 2966 Main St, Airdrie, AB T4B 3G4
- Edmonton showroom: 65 St, Beaumont, AB T4X 0G7
- Hours: Thursday–Monday, 11am–7pm (Sunday until 6pm), closed Tuesday/Wednesday
- Stats: 1200+ projects completed, 3+ years in business, 2 showrooms
- Products: WPC slat panels, UV marble imitation sheets, acoustic panels,
  designer wallpaper (decorative panels also exist as a 5th line on the
  main site but are not currently a section on this page)
- Social: Instagram `@panelopia_official`, Facebook, X `@Panelopia_yyc`,
  WhatsApp via `wa.me/15874335187`
- Supabase `leads` table fields used by `QuoteForm.tsx`: first_name,
  last_name, email, phone, city (`Calgary`/`Edmonton`), product_interest,
  project_type, budget (unused here, always null), message

All of this was cross-checked against the main panelopia.com codebase
(`lib/products-data.ts`, `components/layout/Footer.tsx`, `app/contact/page.tsx`
in that project) — don't restate a fact without a source like that.

---

## Stack

- Next.js 14 (App Router), TypeScript, CSS Modules
- Fonts: Plus Jakarta Sans (headings/body) + Bebas Neue (small accents) — see `app/globals.css`
- Supabase JS — `lib/supabase.ts`, `insertLead()` — writes to the same
  `leads` table the main site's CRM dashboard reads from
- `sharp` — used ad hoc (via one-off `node -e "..."` scripts, not a build
  step) to resize/re-encode/watermark Showcase photos before they're
  copied into `public/images/`
- No image optimization at request time (`next.config.js` →
  `images.unoptimized: true`) — see the bug note above

## Local setup

```bash
npm install
cp .env.local.example .env.local
```

Fill `.env.local` with the same Supabase project URL/anon key used by the
main panelopia.com site (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).

```bash
npm run dev
# or, to sanity-check a real production build before handing off:
npm run build && npm run start
```

## Verifying changes (read this before trusting a screenshot)

**The in-app browser preview pane in this environment is unreliable once
you scroll** — it intermittently renders blank sections or stale/mismatched
frames, especially right after a `scroll` action. This happened repeatedly
across sessions and is a tool limitation, not a page bug. Don't chase it.

More reliable verification, in order of preference:
1. `npx tsc --noEmit` and `npm run build` — must both be clean
2. `curl -s http://localhost:3000/ | grep -o 'src="/images/[^"]*"'` then
   `curl -o /dev/null -w "%{http_code}"` each one — confirms every
   referenced image actually resolves (200, not 404)
3. For "is this really the right photo," `curl` the URL to a file and
   `md5sum` it against the source in `public/images/Showcase/` — don't
   trust a visual glance if the pane is behaving oddly
4. A fresh `preview_start`/navigate (not a `scroll` on an existing tab)
   usually renders correctly for an initial screenshot — if you need a
   below-the-fold screenshot, navigating straight to a `#section-id`
   anchor and waiting ~1s is more reliable than scrolling

## Marketing / analytics infrastructure

The code side of Google Ads + GA4 + SEO readiness is implemented. What's
still an **external account setup task**, not a code task:

- [ ] Create the GA4 property and set `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] Create the Google Ads account tag and set `NEXT_PUBLIC_GOOGLE_ADS_ID`
- [ ] Create a conversion action in Google Ads and set
      `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` / `_CONVERSION_LABEL` (only
      needed for a direct Ads conversion event in addition to GA4↔Ads
      linking — see `.env.local.example`)
- [ ] Link GA4 and Google Ads, and mark `generate_lead` as a GA4 Key Event
      / import it as an Ads conversion, in the Google UI
- [ ] Verify the domain in Google Search Console (uses `app/sitemap.ts` /
      `app/robots.ts`, both already live at `/sitemap.xml` / `/robots.txt`)
- [ ] Configure Enhanced Conversions in Google Ads if wanted — the site
      code deliberately never sends name/email/phone into any analytics
      event, by design; that's an Ads-side setting, not something this
      codebase needs to change to support later

How it works (all in `lib/analytics.ts`, `app/GoogleTag.tsx`,
`app/AnalyticsLink.tsx`):

- `app/GoogleTag.tsx` loads gtag.js exactly once, only if at least one of
  the env vars above is set. With nothing configured it renders nothing —
  verified via `npm run build` + `curl` that no gtag/googletagmanager
  script appears in the served HTML when env is empty.
- `generate_lead` (the primary conversion) fires from `QuoteForm.tsx`
  *only* after `insertLead()` (Supabase) resolves without throwing — never
  on form open, submit click, validation failure, or API failure. A
  `useRef` submit lock prevents a double-click from firing it twice; it
  resets on "Submit another request" since that's a deliberate second lead.
- `phone_click` / `email_click` / `quote_cta_click` fire from
  `AnalyticsLink.tsx`, a small client-component wrapper used in place of
  raw `<a>` tags for every tel:/mailto:/#quote link across the page, each
  tagged with a `location` param (header, intro, quote, final_cta, footer,
  mobile_sticky, quote_form_error).
- No PII (name, email, phone, message) is ever sent as an event parameter.

## Other outstanding items

- [ ] Point `metadataBase` in `app/layout.tsx` at wherever this actually
      deploys (currently defaults to `https://panelopia.com`, which is
      also the canonical/sitemap/robots URL — update all four together)
- [ ] Fill in real Supabase credentials in `.env.local` (and on the host)
- [ ] The client mentioned a leopard-print wallpaper mural photo in chat
      that was never actually saved to `public/images/Showcase/` — if
      they bring it up again, ask them to save the file there first

## File map

```
app/
  layout.tsx        — <html>/<body>, metadata (title/description/OG/canonical), mounts <GoogleTag />
  page.tsx           — the entire page, all 10 sections, in one file (server component)
  page.module.css     — all section styles
  QuoteForm.tsx       — lead form, 'use client', posts via lib/supabase.ts, fires generate_lead
  AnalyticsLink.tsx   — 'use client' <a> wrapper, fires phone_click/email_click/quote_cta_click
  GoogleTag.tsx        — conditional gtag.js loader (no-ops if no GA/Ads env vars set)
  robots.ts            — generates /robots.txt
  sitemap.ts           — generates /sitemap.xml
  globals.css         — brand tokens (colors/fonts/spacing), font imports
lib/
  supabase.ts         — Supabase client + insertLead()/getLeads()/updateLeadStatus()
  analytics.ts         — gtag event helpers (trackGenerateLead, trackPhoneClick, etc.)
public/
  logo-mark.png        — tightly-cropped logo (no dead space), used everywhere
  official_logo.png    — original full logo file (has more padding, avoid using directly)
  images/
    Showcase/           — original, unmodified client-provided photos (source of truth)
    showcase-*.jpg      — optimized/renamed copies actually used on the page
    (other *.jpg/*.webp)— older real photos, pre-dating the Showcase folder
```
