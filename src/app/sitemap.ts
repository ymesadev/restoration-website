import { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/data/services';
import { getAllLocationSlugs } from '@/data/locations';

const BASE_URL = 'https://thefloridarestorepro.com';
const CMS_API = process.env.CMS_API_URL || 'http://localhost:3001';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const serviceSlugs = getAllServiceSlugs();
  const locationSlugs = getAllLocationSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic blog articles from CMS
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${CMS_API}/api/articles`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const articles: { slug: string; published_at: string }[] = await res.json();
      blogPages = articles.map((article) => ({
        url: `${BASE_URL}/blog/${article.slug}`,
        lastModified: article.published_at,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
    }
  } catch {
    // CMS unavailable — return static pages only
  }

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
