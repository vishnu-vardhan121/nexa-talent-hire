import { Headphones, ListChecks, MapPin, ShieldCheck } from 'lucide-react';
import SectionHeadline from '@/components/marketing/SectionHeadline';
import TrustedHiringIllustration from '@/features/marketing/components/TrustedHiringIllustration';
import {
  companyTypes,
  TRUSTED_NETWORK_COPY,
  trustCards,
} from '@/data/marketing/trustedHiringNetwork';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils';

const CARD_ICONS = {
  verified: ShieldCheck,
  screening: ListChecks,
  map: MapPin,
  support: Headphones,
};

const ACCENT_STYLES = {
  blue: {
    icon: 'border-[rgba(56,189,248,0.20)] bg-[rgba(37,99,235,0.12)] text-[#38BDF8] group-hover:shadow-[0_0_24px_rgba(56,189,248,0.22)]',
    card: 'trusted-network__card--blue',
  },
  green: {
    icon: 'border-[rgba(34,197,94,0.22)] bg-[rgba(34,197,94,0.10)] text-[#22C55E] group-hover:shadow-[0_0_24px_rgba(34,197,94,0.18)]',
    card: 'trusted-network__card--green',
  },
  violet: {
    icon: 'border-[rgba(139,92,246,0.22)] bg-[rgba(139,92,246,0.10)] text-[#8B5CF6] group-hover:shadow-[0_0_24px_rgba(139,92,246,0.18)]',
    card: 'trusted-network__card--violet',
  },
  cyan: {
    icon: 'border-[rgba(56,189,248,0.24)] bg-[rgba(56,189,248,0.10)] text-[#38BDF8] group-hover:shadow-[0_0_24px_rgba(56,189,248,0.22)]',
    card: 'trusted-network__card--cyan',
  },
};

export default function TrustedHiringNetwork() {
  const [sectionRef, isVisible] = useInView();

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className={cn(
        'trusted-network marketing-section relative -mt-12 overflow-hidden pt-16 pb-14 sm:-mt-16 sm:pt-20 sm:pb-16 md:-mt-20 lg:-mt-24 lg:pt-24 lg:pb-0 scroll-mt-24',
        isVisible && 'trusted-network--visible',
      )}
      aria-labelledby="trusted-network-heading"
    >
      <div className="trusted-network__bg" aria-hidden>
        <div className="trusted-network__seam" />
        <div className="trusted-network__glow trusted-network__glow--top" />
        <div className="trusted-network__grid" />
      </div>

      <TrustedHiringIllustration className="trusted-network__illustration absolute top-8 right-0 z-0 hidden h-[min(72%,22rem)] w-[min(38%,20rem)] opacity-40 lg:block lg:top-12 lg:h-[28rem] lg:w-[22rem] xl:top-16 xl:h-[30rem] xl:w-[24rem] xl:opacity-50" />

      <div className="trusted-network__inner marketing-section__container">
        <header className="trusted-network__header mx-auto max-w-[min(100%,48rem)] text-center lg:max-w-[50rem]">
          <p className="trusted-network__eyebrow inline-flex max-w-full items-center gap-2 rounded-full border border-[rgba(56,189,248,0.22)] bg-[rgba(15,23,42,0.72)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#CBD5E1] backdrop-blur-md min-[400px]:gap-2.5 min-[400px]:px-4 min-[400px]:text-xs sm:text-[13px]">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]"
              aria-hidden
            />
            {TRUSTED_NETWORK_COPY.eyebrow}
          </p>
          <SectionHeadline
            id="trusted-network-heading"
            className="trusted-network__heading marketing-section-headline--centered mt-4 text-center sm:mt-5"
          >
            {TRUSTED_NETWORK_COPY.heading}
          </SectionHeadline>
          <p className="trusted-network__subtitle mx-auto mt-3 max-w-[min(100%,45rem)] text-[0.9375rem] leading-[1.7] text-[#94A3B8] sm:mt-4 sm:text-base lg:text-lg">
            {TRUSTED_NETWORK_COPY.subtitle}
          </p>
        </header>

        <ul className="trusted-network__cards mx-auto mt-10 grid w-full max-w-[75rem] grid-cols-1 gap-4 min-[480px]:gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {trustCards.map((card, index) => {
            const Icon = CARD_ICONS[card.icon];
            const accent = ACCENT_STYLES[card.accent];
            return (
              <li key={card.title}>
                <article
                  className={cn(
                    'trusted-network__card group relative flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.70)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-[18px] sm:p-6 lg:p-7',
                    accent.card,
                    `trusted-network__card--${index + 1}`,
                  )}
                >
                  <div
                    className={cn(
                      'trusted-network__icon mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border transition-[box-shadow,background-color] duration-250 ease-out',
                      accent.icon,
                    )}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#F8FAFC] sm:text-lg">{card.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-[#94A3B8] sm:text-sm">{card.description}</p>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="trusted-network__pills mx-auto mt-10 w-full max-w-[62rem] sm:mt-14 lg:mt-16">
          <p className="trusted-network__pill-heading mb-4 px-2 text-center text-[13px] font-medium text-[#CBD5E1] sm:mb-5 sm:text-sm lg:text-[15px]">
            {TRUSTED_NETWORK_COPY.pillHeading}
          </p>
          <div className="trusted-network__pill-panel rounded-2xl border border-[rgba(148,163,184,0.14)] bg-[rgba(15,23,42,0.58)] px-4 py-5 backdrop-blur-[16px] sm:rounded-[28px] sm:px-6 sm:py-6 lg:px-7 lg:py-7">
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {companyTypes.map((label) => (
                <li key={label} className="max-w-full">
                  <span className="trusted-network__pill inline-flex max-w-full items-center gap-1.5 rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(2,11,22,0.74)] px-3 py-1.5 text-[11px] font-medium text-[#CBD5E1] transition-all duration-200 ease-out min-[400px]:px-3.5 min-[400px]:py-2 min-[400px]:text-xs sm:px-4 sm:text-[13px]">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#38BDF8] opacity-80"
                      aria-hidden
                    />
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
