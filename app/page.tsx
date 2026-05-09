import { HeroSection } from '@/components/HeroSection';
import { MarqueeSection } from '@/components/MarqueeSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="w-full overflow-x-clip bg-[#0C0C0C]">
      <ScrollToTop />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
