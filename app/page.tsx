import Image from 'next/image'
import styles from './page.module.css'
import QuoteForm from './QuoteForm'
import AnalyticsLink from './AnalyticsLink'

// ── Real installation photography, from /public/images/Showcase ──────────
// (optimized copies live at /public/images/showcase-*.jpg — same photos,
// resized/re-encoded for web delivery, watermarks left intact.)

const installations = [
  {
    src: '/images/showcase-wpc-slat-fireplace-2.jpg',
    alt: 'WPC slat wall panels either side of a fireplace with integrated LED lighting',
    label: 'Residential · Living Room',
  },
  {
    src: '/images/showcase-marble-commercial-hallway.jpg',
    alt: 'Commercial office hallway finished in marble-effect wall panels with LED floor lighting',
    label: 'Commercial · Office Corridor',
  },
  {
    src: '/images/showcase-marble-entryway-console.jpg',
    alt: 'Marble-effect wall panels behind a console table in an entryway',
    label: 'Commercial · Entryway',
  },
  {
    src: '/images/showcase-marble-slat-livingroom.jpg',
    alt: 'Marble-effect and slat wall panel combination behind a wall-mounted TV',
    label: 'Residential · Living Room',
  },
  {
    src: '/images/showcase-restaurant-booth.jpg',
    alt: 'Restaurant booth seating beside a walnut WPC slat wall panel',
    label: 'Commercial · Restaurant',
  },
]

const products = [
  {
    name: 'WPC Slat Panels',
    body: 'Waterproof wood-plastic composite slats with a natural wood look, suited to feature walls, fireplaces, and high-moisture rooms.',
    image: '/images/showcase-wpc-slat-fireplace.jpg',
    alt: 'WPC slat wall panels installed either side of a fireplace',
  },
  {
    name: 'Acoustic Panels',
    body: 'NRC-rated acoustic slat panels for home theatres, offices, and commercial spaces.',
    image: '/images/showcase-marble-fireplace-tv.jpg',
    alt: 'Acoustic slat wall panels installed around a fireplace and TV wall',
  },
  {
    name: 'UV Marble Imitation Sheets',
    body: 'Lightweight, UV-protected sheets with the look of natural stone, for feature walls and entryways.',
    image: '/images/showcase-slat-marble-led.jpg',
    alt: 'UV marble imitation wall sheets with black slat trim and integrated LED lighting',
  },
  {
    name: 'Designer Wallpaper',
    body: 'Vinyl, grasscloth, and non-woven wallcoverings, supplied and installed by our team.',
    image: '/images/showcase-designer-wallpaper-livingroom.jpg',
    alt: 'Designer wallpaper with metallic pattern installed in a living room',
  },
]

const processSteps = [
  { n: '01', title: 'Choose your panels', body: 'Visit our Calgary-area or Edmonton-area showroom, or book a free site visit.' },
  { n: '02', title: 'Get a quote', body: 'A clear, itemised quote covering materials and labour.' },
  { n: '03', title: 'Delivery', body: 'Panels are measured, cut, and brought to your space.' },
  { n: '04', title: 'Professional installation', body: 'Our own in-house team installs the panels, not a subcontractor.' },
]

const trustPoints = [
  '1200+ projects completed across Calgary and Edmonton',
  '3+ years in business, with two showrooms',
  'Supply, delivery, and installation handled by one in-house team',
  'Materials available to see and touch in person',
  'Waterproof, termite-resistant WPC, suited to Alberta’s freeze-thaw climate',
  'Clear, itemised quotes covering materials and labour',
]

const galleryItems = [
  {
    src: '/images/showcase-marble-gold-tvwall.jpg',
    alt: 'Black marble-effect wall panel with gold slat trim around a TV wall',
  },
  {
    src: '/images/entryway-slat.jpg',
    alt: 'Oak WPC slat wall panel installed in a residential entryway',
  },
  {
    src: '/images/black-slat-mirror.jpg',
    alt: 'Black fluted WPC slat accent wall with a round mirror',
  },
  {
    src: '/images/showroom-main.jpg',
    alt: 'Panelopia showroom hallway finished in marble sheet panels',
  },
  {
    src: '/images/office-slat-wallpaper.jpg',
    alt: 'Reception office featuring wallpaper and a wood slat wall panel',
  },
]

const faqs = [
  {
    q: 'What types of wall panels do you offer?',
    a: 'WPC (wood-plastic composite) slat panels, UV marble imitation sheets, acoustic wall panels, and designer wallpaper, available to see in person at our showrooms.',
  },
  {
    q: 'Do you deliver wall panels in Calgary and Edmonton?',
    a: 'Yes. We handle delivery as part of the job, from our Calgary-area showroom in Airdrie and our Edmonton-area showroom in Beaumont.',
  },
  {
    q: 'Do you install the panels, or just supply them?',
    a: 'Both. Our in-house team handles delivery and installation. We don’t hand the job off to a separate contractor.',
  },
  {
    q: 'How does the quote process work?',
    a: 'Visit a showroom or book a free site visit, tell us about the space, and we’ll prepare a clear, itemised quote covering materials and labour before any work begins.',
  },
  {
    q: 'How much does wall panel installation cost?',
    a: 'It depends on the space, the panel type, and the finish. We provide a clear, itemised quote after a free consultation or site visit rather than a generic estimate.',
  },
  {
    q: 'Can I visit a showroom?',
    a: 'Yes, both showrooms carry physical samples of the panels, sheets, and wallpaper we sell, open Thursday to Monday.',
  },
  {
    q: 'Can wall panels be used in commercial spaces, or only homes?',
    a: 'Both. Alongside residential feature walls, we’ve installed panels and wallpaper in offices, reception areas, and other commercial interiors.',
  },
  {
    q: 'Are the WPC panels actually waterproof?',
    a: 'Yes. Our WPC panels are waterproof and termite-resistant — useful for humid rooms like kitchens and bathrooms, and for Alberta’s freeze-thaw climate.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Panelopia',
  image: 'https://panelopia.com/images/showcase-wpc-slat-fireplace.jpg',
  telephone: '+15874335187',
  email: 'info@panelopia.com',
  url: 'https://panelopia.com',
  areaServed: ['Calgary', 'Airdrie', 'Edmonton', 'Beaumont', 'Alberta'],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '101 - 2966 Main ST',
      addressLocality: 'Airdrie',
      addressRegion: 'AB',
      postalCode: 'T4B 3G4',
      addressCountry: 'CA',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '65 St',
      addressLocality: 'Beaumont',
      addressRegion: 'AB',
      postalCode: 'T4X 0G7',
      addressCountry: 'CA',
    },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Thursday', 'Friday', 'Saturday', 'Monday'], opens: '11:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '11:00', closes: '18:00' },
  ],
  sameAs: [
    'https://www.instagram.com/panelopia_official',
    'https://www.facebook.com/profile.php?id=61563496005698',
    'https://x.com/Panelopia_yyc',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function WallPanelsCalgaryPage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── 1. HEADER ────────────────────────────────────────── */}
      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <a href="https://panelopia.com" className={styles.logo} aria-label="Panelopia main site">
            <Image src="/logo-mark.png" alt="Panelopia" width={253} height={160} priority className={styles.logoImg} />
          </a>
          <nav className={styles.topbarNav} aria-label="Page sections">
            <a href="#products">Products</a>
            <a href="#gallery">Gallery</a>
            <a href="#installation">Installation</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className={styles.topbarActions}>
            <AnalyticsLink href="tel:+15874335187" event="phone_click" location="header" className={styles.topbarPhone}>587-433-5187</AnalyticsLink>
            <AnalyticsLink href="tel:+15874335187" event="phone_click" location="header" className={styles.topbarPhoneIcon} aria-label="Call 587-433-5187">
              <PhoneIcon />
            </AnalyticsLink>
            <AnalyticsLink href="#quote" event="quote_cta_click" location="header" className={styles.topbarCta}>Get a Free Quote</AnalyticsLink>
          </div>
        </div>
      </header>

      <main>
        {/* ── 2. ABOVE-THE-FOLD INTRO — plain, no photo, no overlay ── */}
        <section className={styles.intro}>
          <h1 className={styles.introTitle}>Wall Panels in Calgary &amp; Edmonton</h1>
          <p className={styles.introSub}>
            Wall panels supplied, delivered and professionally installed for residential and commercial spaces.
          </p>
          <p className={styles.introProducts}>
            WPC slat panels &middot; marble-effect panels &middot; acoustic panels &middot; designer wallpaper
          </p>
          <div className={styles.ctaRow}>
            <AnalyticsLink href="#quote" event="quote_cta_click" location="intro" className={styles.btnPrimary}>Get a Free Quote</AnalyticsLink>
            <AnalyticsLink href="tel:+15874335187" event="phone_click" location="intro" className={styles.callLink}>
              <PhoneIcon />
              Call 587-433-5187
            </AnalyticsLink>
          </div>
          <p className={styles.introNote}>
            Supply &middot; Delivery &middot; Installation &middot; Calgary &middot; Airdrie &middot; Edmonton &middot; Beaumont
          </p>
        </section>

        {/* ── 3. REAL INSTALLATIONS ───────────────────────────── */}
        <section className={styles.installations}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Real Installations</h2>
          </div>
          <div className={styles.installGrid}>
            {installations.map((item, i) => (
              <div key={item.src} className={`${styles.installItem} ${i === 0 ? styles.installWide : ''}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={i === 0}
                  className={styles.installImg}
                  sizes={i === 0 ? '(max-width: 900px) 100vw, 66vw' : '(max-width: 900px) 100vw, 33vw'}
                />
                <span className={styles.installLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. PRODUCT CATEGORIES ───────────────────────────── */}
        <section id="products" className={styles.products}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Wall Panels for Every Space</h2>
            <p className={styles.lede}>Supplied and installed by our own team, in Calgary and Edmonton.</p>
          </div>
          <div className={styles.productList}>
            {products.map((p) => (
              <div key={p.name} className={styles.productBlock}>
                <div className={styles.productImg}>
                  <Image src={p.image} alt={p.alt} fill className={styles.productImgEl} sizes="(max-width: 900px) 100vw, 1120px" />
                </div>
                <div className={styles.productMeta}>
                  <h3>{p.name}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. SUPPLY + DELIVERY + INSTALLATION ─────────────── */}
        <section id="installation" className={styles.process}>
          <div className={styles.processInner}>
            <div>
              <p className="eyebrow">How It Works</p>
              <h2 className={styles.h2}>Supply, Delivery &amp; Installation</h2>
              <p className={styles.lede}>
                We don&apos;t just sell the panels. Our own team handles delivery and installation,
                so there&apos;s no separate contractor to find or coordinate.
              </p>
              <ol className={styles.processList}>
                {processSteps.map((s) => (
                  <li key={s.n} className={styles.processStep}>
                    <span className={styles.processNum}>{s.n}</span>
                    <div>
                      <h3 className={styles.processTitle}>{s.title}</h3>
                      <p className={styles.processBody}>{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className={styles.processImg}>
              <Image
                src="/images/showcase-marble-gold-install.jpg"
                alt="Marble-effect wall panel installation in progress on a feature wall"
                fill
                className={styles.productImgEl}
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        {/* ── 6. WHY PANELOPIA / TRUST ────────────────────────── */}
        <section className={styles.why}>
          <div>
            <p className="eyebrow">Why Panelopia</p>
            <h2 className={styles.h2}>Why Panelopia</h2>
            <p className={styles.whyBody}>
              Most suppliers hand you off to an installer they&apos;ve never met. We don&apos;t.
              Our own team supplies, delivers, and installs the panels, sheets, and wallpaper
              we sell, so there&apos;s one point of contact from quote to finished wall.
            </p>
          </div>
          <ul className={styles.trustList}>
            {trustPoints.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        {/* ── 7. GALLERY / PROJECT PROOF ──────────────────────── */}
        <section id="gallery" className={styles.gallery}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>More Completed Projects</h2>
          </div>
          <div className={styles.galleryGrid}>
            {galleryItems.map((g) => (
              <div key={g.src} className={styles.galleryItem}>
                <Image src={g.src} alt={g.alt} fill className={styles.galleryImg} sizes="(max-width: 900px) 50vw, 20vw" />
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. QUOTE / LEAD CAPTURE ──────────────────────────── */}
        <section id="quote" className={styles.quote}>
          <div className={styles.quoteInner}>
            <div className={styles.quoteIntro}>
              <p className="eyebrow">Get Started</p>
              <h2 className={styles.h2Light}>Get a Free Quote</h2>
              <p className={styles.ledeLight}>Tell us about your space and what you&apos;re looking for. We&apos;ll reply within one business day.</p>

              <div className={styles.quoteInfo}>
                <div className={styles.quoteInfoRow}>
                  <strong>Calgary Area</strong>
                  <span>101 - 2966 Main St, Airdrie, AB T4B 3G4</span>
                </div>
                <div className={styles.quoteInfoRow}>
                  <strong>Edmonton Area</strong>
                  <span>65 St, Beaumont, AB T4X 0G7</span>
                </div>
                <div className={styles.quoteInfoRow}>
                  <strong>Hours</strong>
                  <span>Thu &ndash; Mon, 11am &ndash; 7pm (Sun until 6pm), closed Tue &ndash; Wed</span>
                </div>
                <div className={styles.quoteInfoRow}>
                  <strong>Contact</strong>
                  <span>
                    <AnalyticsLink href="tel:+15874335187" event="phone_click" location="quote">587-433-5187</AnalyticsLink>
                    {' · '}
                    <AnalyticsLink href="mailto:info@panelopia.com" event="email_click" location="quote">info@panelopia.com</AnalyticsLink>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.quoteFormWrap}>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* ── 9. FAQ ───────────────────────────────────────────── */}
        <section id="faq" className={styles.faq}>
          <div className={styles.faqInner}>
            <p className="eyebrow">Questions</p>
            <h2 className={styles.h2}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {faqs.map((f) => (
                <details key={f.q} className={styles.faqItem}>
                  <summary className={styles.faqQ}>
                    {f.q}
                    <span className={styles.faqToggle} aria-hidden="true">+</span>
                  </summary>
                  <p className={styles.faqA}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. FINAL CTA ────────────────────────────────────── */}
        <section className={styles.closing}>
          <h2 className={styles.closingTitle}>Ready to Get Started?</h2>
          <p className={styles.closingSub}>Get a free quote from Panelopia.</p>
          <div className={styles.ctaRow}>
            <AnalyticsLink href="#quote" event="quote_cta_click" location="final_cta" className={styles.btnPrimary}>Get a Free Quote</AnalyticsLink>
            <AnalyticsLink href="tel:+15874335187" event="phone_click" location="final_cta" className={styles.callLink}>
              <PhoneIcon />
              Call 587-433-5187
            </AnalyticsLink>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <Image src="/images/logo-icon.png" alt="" width={228} height={292} className={styles.footerLogoIcon} />
              <div className={styles.footerLogoType}>
                <Image src="/images/logo-wordmark-light.png" alt="Panelopia" width={538} height={61} className={styles.footerLogoName} />
                <Image src="/images/logo-tagline.png" alt="Luxury Redefined" width={817} height={43} className={styles.footerLogoTagline} />
              </div>
            </div>
            <p>WPC panels, marble-effect panels, acoustic panels &amp; wallpaper, supplied and installed across Calgary and Edmonton.</p>
          </div>
          <div className={styles.footerCol}>
            <h3>Calgary-Area Showroom</h3>
            <p>101 - 2966 Main St, Airdrie, AB T4B 3G4</p>
            <h3>Edmonton-Area Showroom</h3>
            <p>65 St, Beaumont, AB T4X 0G7</p>
            <p className={styles.footerHours}>Thu &ndash; Mon, 11am &ndash; 7pm (Sun until 6pm) &middot; Closed Tue &ndash; Wed</p>
          </div>
          <div className={styles.footerContact}>
            <AnalyticsLink href="tel:+15874335187" event="phone_click" location="footer">587-433-5187</AnalyticsLink>
            <AnalyticsLink href="mailto:info@panelopia.com" event="email_click" location="footer">info@panelopia.com</AnalyticsLink>
            <a href="https://panelopia.com">panelopia.com</a>
            <AnalyticsLink href="#quote" event="quote_cta_click" location="footer" className={styles.footerQuoteLink}>Get a Free Quote &rarr;</AnalyticsLink>
          </div>
          <div className={styles.footerLegal}>
            <span>&copy; 2026 Panelopia Inc.</span>
            <a href="https://panelopia.com/policies">Privacy</a>
            <a href="https://panelopia.com/tandc">Terms</a>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CONTACT BAR ────────────────────────── */}
      <div className={styles.mobileBar}>
        <AnalyticsLink href="tel:+15874335187" event="phone_click" location="mobile_sticky" className={styles.mobileBarCall}>
          <PhoneIcon />
          Call
        </AnalyticsLink>
        <AnalyticsLink href="#quote" event="quote_cta_click" location="mobile_sticky" className={styles.mobileBarQuote}>Get a Free Quote</AnalyticsLink>
      </div>
    </div>
  )
}
