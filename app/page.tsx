export const dynamic = 'force-dynamic';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoBar from '@/components/LogoBar';
import Sistemas from '@/components/Sistemas';
import HabitacionesDestacadas from '@/components/HabitacionesDestacadas';
import Propietarios from '@/components/Propietarios';
import Inquilinos from '@/components/Inquilinos';
import ComoFunciona from '@/components/ComoFunciona';
import Testimonios from '@/components/Testimonios';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoBar />
        <Sistemas />
        <HabitacionesDestacadas />
        <Propietarios />
        <Inquilinos />
        <ComoFunciona />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
