import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.viviendasvirtuo.com';
  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/coliving', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/temporal', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/vacacional', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/propietarios', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/inquilinos', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/sobre-nosotros', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contacto', priority: 0.6, changeFrequency: 'monthly' as const },
  ];

  return routes.map(r => ({
    url: `${base}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
