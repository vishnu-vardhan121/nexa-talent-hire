import StructuredData from '@/components/seo/StructuredData';
import { HOME_STRUCTURED_DATA, SEO_PAGES } from '@/config/seo';
import FinalHiringCTASection from '@/features/marketing/sections/FinalHiringCTASection';
import LandingFooter from '@/features/marketing/sections/LandingFooter';
import RolesWeHireSection from '@/features/marketing/sections/RolesWeHireSection';
import VerifiedProfilePreview from '@/features/marketing/sections/VerifiedProfilePreview';
import HeroSection from '@/features/marketing/sections/HeroSection';
import HiringPartnerEcosystem from '@/features/marketing/sections/HiringPartnerEcosystem';
import HiringProblemSection from '@/features/marketing/sections/HiringProblemSection';
import TrustedHiringNetwork from '@/features/marketing/sections/TrustedHiringNetwork';
import { useSeo } from '@/lib/useSeo';

export default function HomePage() {
  useSeo(SEO_PAGES.home);

  return (
    <>
      <StructuredData data={HOME_STRUCTURED_DATA} />
      <main id="main-content" className="min-h-dvh bg-[#020B16]">
        <HeroSection />
        <TrustedHiringNetwork />
        <HiringProblemSection />
        <HiringPartnerEcosystem />
        <VerifiedProfilePreview />
        <RolesWeHireSection />
        <FinalHiringCTASection />
        <LandingFooter />
      </main>
    </>
  );
}
