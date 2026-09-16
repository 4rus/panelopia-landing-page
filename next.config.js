/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The built-in image optimizer proxy (/_next/image) was intermittently
    // serving mismatched bytes for some of the local photos in this project
    // (verified: the raw static files under /public are always correct —
    // only the optimizer's cached/re-encoded output scrambled a few of
    // them, even from a freshly cleared cache). Every image on this page
    // is already a reasonably sized local JPEG/WebP, so the resizing the
    // optimizer would add isn't worth the risk of serving the wrong photo
    // on a page whose whole job is to sell the photography.
    unoptimized: true,
  },
}

module.exports = nextConfig
