import type { Metadata } from 'next';
import ContactoPageComponent from '@/components/ContactoPageComponent';

export const metadata: Metadata = {
  title: 'Contacto | Viviendas Virtuo',
  description: 'Contacta con Viviendas Virtuo. Propietarios: auditoría gratuita de viabilidad. Inquilinos: solicita tu estancia. Respondemos en menos de 24h.',
};

export default function ContactoPage() {
  return <ContactoPageComponent />;
}
