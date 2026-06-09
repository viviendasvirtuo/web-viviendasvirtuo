import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoBar from '@/components/LogoBar';
import Sistemas from '@/components/Sistemas';
import Propietarios from '@/components/Propietarios';
import Inquilinos from '@/components/Inquilinos';
import ComoFunciona from '@/components/ComoFunciona';
import Testimonios from '@/components/Testimonios';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoBar />
        <Sistemas />
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
