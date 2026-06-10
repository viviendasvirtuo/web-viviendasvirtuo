import { MetadataRoute } from 'next';

const BASE_URL = 'https://viviendas-virtuo.es';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { url: '/',               priority: 1.0,  changeFrequency: 'weekly'  as const },
    { url: '/coliving',       priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/temporal',       priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/vacacional',     priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/propietarios',   priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/inquilinos',     priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/sobre-nosotros', priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/faq',            priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/contacto',       priority: 0.8,  changeFrequency: 'yearly'  as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
