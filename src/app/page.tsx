
import Header from '../../../graphics/src/components/Header';
import HeroSection from '../../../graphics/src/components/HeroSection';
import {FeaturesSection} from '../../../graphics/src/components/FeaturesSection';
import Services from '../../../graphics/src/components/Services';
import ExpertToolsSection from '../../../graphics/src/components/ExpertToolsSection';
import Statistics from '../../../graphics/src/components/Statistics';
import CaseStudySection from '../../../graphics/src/components/CaseStudySection';
import Testimonials from '../../../graphics/src/components/Testimonials';
import CreativeTalentSection from '../../../graphics/src/components/CreativeTalentSection';
import BusinessUI from '../../../graphics/src/components/BusinessUI';
import FAQ from '../../../graphics/src/components/FAQ';
import LandingPage from '../../../graphics/src/components/LandingPage';
import Footer from '../../../graphics/src/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Services />
      <ExpertToolsSection />
      <Statistics />
      <CaseStudySection />
      <Testimonials />
      <CreativeTalentSection />
      <BusinessUI />
      <FAQ />
      <LandingPage />
      <Footer />
    </>
  );
}
