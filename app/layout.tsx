import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Viviendas Virtuo | Gestión profesional de alquiler',
  description: 'Convierte tu vivienda en ingresos estables con gestión 100% profesional. Coliving, alquiler temporal y vacacional en Barcelona y área metropolitana.',
  keywords: 'gestión alquiler Barcelona, coliving Barcelona, alquiler temporal Barcelona, alquiler vacacional gestión, propietarios Barcelona',
  openGraph: {
    title: 'Viviendas Virtuo | Gestión profesional de alquiler',
    description: 'Tu vivienda genera ingresos. Nosotros nos encargamos de todo.',
    url: 'https://www.viviendasvirtuo.com',
    siteName: 'Viviendas Virtuo',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
