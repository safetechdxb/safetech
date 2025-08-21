import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: [
          '/cart/',
          '/checkout/',
          '/account/',
          '/admin/',
          '/orders/',
          '/login/',
          '/register/',
          '/search/',
          '/?*',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.safetech-precast.com/sitemap.xml',
  }
}
