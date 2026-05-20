import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import HiringCtaButton from '@/components/landing/HiringCtaButton';
import HeroBackgroundVideo from '@/features/marketing/components/HeroBackgroundVideo';
import HeroVerifiedNetworkCard from '@/features/marketing/components/HeroVerifiedNetworkCard';
import SiteNavbar from '@/components/layout/SiteNavbar';
export { HERO_VIDEO_MP4, HERO_VIDEO_WEBM } from '@/features/marketing/heroVideo';
import { HERO_CONTAINER } from '@/lib/marketingClasses';
import { cn } from '@/lib/utils';

const TRUST_POINTS = [
  'Pre-screened profiles',
  'Interview-ready candidates',
  'Hiring support included',
];

export default function HeroSection() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <section
      className={cn(
        'relative min-h-dvh bg-[#020B16] text-slate-50',
        !reduceMotion && 'hero-motion-enabled',
      )}
      aria-label="NEXA Talent Hire hero"
    >
      <HeroBackgroundVideo />

      <div
        className="hero-overlay-ltr pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(2,11,22,0.08)_0%,rgba(2,11,22,0.45)_100%)] sm:bg-[linear-gradient(180deg,rgba(2,11,22,0.12)_0%,rgba(2,11,22,0.55)_100%)] lg:bg-[linear-gradient(180deg,rgba(2,11,22,0.15)_0%,rgba(2,11,22,0.65)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[rgba(2,11,22,0.22)] sm:bg-[rgba(2,11,22,0.18)] md:bg-[rgba(2,11,22,0.12)] lg:bg-transparent"
        aria-hidden="true"
      />

      <SiteNavbar variant="hero" ctaSource="hero_nav" />

      <div
        className={cn(
          HERO_CONTAINER,
          'relative z-10 flex flex-col pb-6 pt-[4.75rem] min-[400px]:pb-8 min-[400px]:pt-[5.25rem] sm:pb-10 sm:pt-28 md:pt-32 lg:pb-14 lg:pt-36 xl:pt-[9.5rem] 2xl:pb-16 2xl:pt-40',
        )}
      >
        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-6 xl:gap-10 2xl:gap-14">
          <div className="flex min-w-0 flex-col justify-center lg:max-w-[42rem] xl:max-w-[44rem] 2xl:max-w-[46rem]">
            <p className="hero-animate-badge mb-4 text-sm leading-snug text-slate-400 sm:mb-5 sm:text-[15px]">
              India-wide verified talent network
            </p>

            <h1
              className={cn(
                'hero-animate-headline font-display font-extrabold tracking-tight text-slate-50',
                'text-[clamp(2.375rem,1.1rem+4.2vw,4.75rem)] leading-[1.08] break-words hyphens-manual',
                'md:max-lg:text-[clamp(3rem,2rem+2.5vw,3.5rem)]',
              )}
            >
              Hire{' '}
              <span className="bg-[linear-gradient(90deg,#38BDF8,#2563EB,#8B5CF6)] bg-clip-text text-transparent">
                Pre-Screened Talent
              </span>{' '}
              to Save Your Hiring Time
            </h1>

            <p
              className={cn(
                'hero-animate-subhead mt-4 max-w-[36rem] min-w-0 text-slate-300 min-[400px]:mt-5 xl:max-w-[38rem] 2xl:max-w-[40rem]',
                'text-[clamp(0.9375rem,0.85rem+0.35vw,1.125rem)] leading-[1.65]',
              )}
            >
              Get pre-screened, job-ready talent from across India — already verified for skills,
              projects, communication, and interview readiness, so your team can move from shortlist to
              hire faster.
            </p>

            <div
              id="get-matched"
              className="hero-animate-cta mt-6 flex w-full flex-col gap-2.5 min-[400px]:mt-7 min-[400px]:gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
            >
              <HiringCtaButton
                source="hero_primary"
                className={cn(
                  'inline-flex w-full min-h-12 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white',
                  'min-[400px]:min-h-[3.25rem] min-[400px]:rounded-2xl min-[400px]:px-7 min-[400px]:py-3.5 min-[400px]:text-[15px]',
                  'sm:w-auto sm:min-w-[12.5rem] sm:px-8 sm:py-4',
                )}
              >
                Get Matched Candidates
              </HiringCtaButton>
              <HiringCtaButton
                source="hero_secondary"
                variant="secondary"
                className={cn(
                  'inline-flex w-full min-h-12 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold',
                  'min-[400px]:min-h-[3.25rem] min-[400px]:rounded-2xl min-[400px]:px-7 min-[400px]:py-3.5 min-[400px]:text-[15px]',
                  'sm:w-auto sm:min-w-[11rem] sm:px-8 sm:py-4',
                )}
              >
                View Talent Pool
              </HiringCtaButton>
            </div>

            <ul className="hero-animate-trust mt-6 flex flex-col gap-2.5 min-[400px]:mt-7 min-[400px]:gap-3 sm:mt-8 lg:flex-col lg:gap-3 xl:flex-row xl:flex-wrap xl:gap-x-8 2xl:gap-x-10">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex min-w-0 items-center gap-2 text-[13px] text-slate-300 sm:text-sm">
                  <Check className="h-3.5 w-3.5 shrink-0 text-green-500 sm:h-4 sm:w-4" strokeWidth={2.5} aria-hidden />
                  <span className="min-w-0">{point}</span>
                </li>
              ))}
            </ul>

            <HeroVerifiedNetworkCard compact className="mt-8 lg:hidden" />
          </div>

          <div className="hidden min-w-0 lg:flex lg:justify-end lg:self-center xl:pr-2 2xl:pr-4">
            <HeroVerifiedNetworkCard className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
