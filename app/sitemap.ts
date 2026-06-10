import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://viviendasvirtuo.com';
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/coliving`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/temporal`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/vacacional`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/propietarios`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/inquilinos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sobre-nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
