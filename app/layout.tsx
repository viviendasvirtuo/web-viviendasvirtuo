import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Viviendas Virtuo | Gestión profesional de alquiler',
  description: 'Convierte tu vivienda en ingresos con nuestros sistemas de alquiler: coliving, temporal y vacacional.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
