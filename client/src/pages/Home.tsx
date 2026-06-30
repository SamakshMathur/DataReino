import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import TrustBar from '../components/TrustBar/TrustBar';
import MarqueeBar from '../components/MarqueeBar/MarqueeBar';
import Stats from '../components/Stats/Stats';
import Platform from '../components/Platform/Platform';
import Integrations from '../components/Integrations/Integrations';
import Process from '../components/Process/Process';
import UseCases from '../components/UseCases/UseCases';
import Security from '../components/Security/Security';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <MarqueeBar />
      <Stats />
      <Platform />
      <Integrations />
      <Process />
      <UseCases />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
}
