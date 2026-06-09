import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Sistemas from '@/components/Sistemas';
import Propietarios from '@/components/Propietarios';
import Inquilinos from '@/components/Inquilinos';
import ComoFunciona from '@/components/ComoFunciona';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Sistemas />
      <Propietarios />
      <Inquilinos />
      <ComoFunciona />
      <Contacto />
      <Footer />
    </main>
  );
}
