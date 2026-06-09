import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Viviendas Virtuo | Gestión profesional de alquiler en Barcelona',
  description: 'Convertimos tu vivienda en ingresos estables. Coliving, alquiler temporal y vacacional gestionados al 100% por nosotros. Sin preocupaciones.',
  keywords: 'gestión alquiler barcelona, coliving barcelona, alquiler temporal, alquiler vacacional, gestión viviendas',
  openGraph: {
    title: 'Viviendas Virtuo | Gestión profesional de alquiler',
    description: 'Tres sistemas de alquiler adaptados a tu propiedad. Máxima rentabilidad, cero gestión.',
    url: 'https://www.viviendasvirtuo.com',
    siteName: 'Viviendas Virtuo',
    locale: 'es_ES',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.viviendasvirtuo.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
