import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://viviendas-virtuo.es/sitemap.xml',
    host: 'https://viviendas-virtuo.es',
  };
}
