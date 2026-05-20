import FinalHiringCTASection from '@/features/marketing/sections/FinalHiringCTASection';
import LandingFooter from '@/features/marketing/sections/LandingFooter';
import RolesWeHireSection from '@/features/marketing/sections/RolesWeHireSection';
import VerifiedProfilePreview from '@/features/marketing/sections/VerifiedProfilePreview';
import HeroSection from '@/features/marketing/sections/HeroSection';
import HiringPartnerEcosystem from '@/features/marketing/sections/HiringPartnerEcosystem';
import HiringProblemSection from '@/features/marketing/sections/HiringProblemSection';
import TrustedHiringNetwork from '@/features/marketing/sections/TrustedHiringNetwork';

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-[#020B16]">
      <HeroSection />
      <TrustedHiringNetwork />
      <HiringProblemSection />
      <HiringPartnerEcosystem />
      <VerifiedProfilePreview />
      <RolesWeHireSection />
      <FinalHiringCTASection />
      <LandingFooter />
    </div>
  );
}
