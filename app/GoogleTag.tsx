import Script from 'next/script'

// Loads gtag.js exactly once and configures every tag ID that's actually
// present in env. If nothing is configured, this renders nothing — no
// placeholder IDs, no dead script tag.
//
// Env vars (all optional, all unset by default):
//   NEXT_PUBLIC_GA_MEASUREMENT_ID          GA4 property, e.g. "G-XXXXXXX"
//   NEXT_PUBLIC_GOOGLE_ADS_ID              Google Ads account tag, e.g. "AW-XXXXXXXXX"
//   NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID   Used only for the conversion event
//   NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL  fired from lib/analytics.ts, not here.
export default function GoogleTag() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

  const tagIds = [gaId, adsId].filter((id): id is string => Boolean(id))
  if (tagIds.length === 0) return null

  // gtag.js only needs to load once; the first configured ID is used as the
  // loader URL, and every configured ID (GA4 and/or Ads) is then config'd
  // against the same loaded library.
  const loaderId = tagIds[0]

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${tagIds.map((id) => `gtag('config', '${id}');`).join('\n          ')}
        `}
      </Script>
    </>
  )
}
