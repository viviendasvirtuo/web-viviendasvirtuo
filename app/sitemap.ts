import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.viviendasvirtuo.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL,                             lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/coliving`,               lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/temporal`,               lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/vacacional`,             lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/propietarios`,           lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/inquilinos`,             lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/sobre-nosotros`,         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/faq`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contacto`,               lastModified: now, changeFrequency: 'yearly',  priority: 0.8 },
  ];
}
