import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import FeatureTabs from '../components/FeatureTabs/FeatureTabs';
import ScrollSection from '../components/ScrollSection/ScrollSection';
import DashboardPreview from '../components/DashboardPreview/DashboardPreview';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeatureTabs />
        <ScrollSection />
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  );
}
