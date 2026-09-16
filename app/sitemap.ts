import type { MetadataRoute } from 'next'

// Single-page site — one real URL, not a padded list.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://panelopia.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
