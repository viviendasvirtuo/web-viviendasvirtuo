import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto — Viviendas Virtuo',
  description: 'Contacta con Viviendas Virtuo. Propietarios y inquilinos, estamos a tu disposición. Respuesta en menos de 24 horas.',
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
