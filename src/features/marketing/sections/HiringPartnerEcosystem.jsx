import { ArrowRight, Briefcase, MapPin, Users } from 'lucide-react';
import PartnerOrbitVisual from '@/features/marketing/components/HiringPartnerEcosystem/PartnerOrbitVisual';
import {
  ECOSYSTEM_COPY,
  partnerStats,
} from '@/data/marketing/hiringPartnerEcosystem';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils';

const STAT_ICONS = {
  partners: Users,
  network: MapPin,
  roles: Briefcase,
};

export default function HiringPartnerEcosystem() {
  const [sectionRef, isVisible] = useInView();

  return (
    <section
      ref={sectionRef}
      id="hiring-partner-ecosystem"
      className={cn(
        'partner-ecosystem relative overflow-hidden py-[4.5rem] lg:py-[6.875rem]',
        isVisible && 'partner-ecosystem--visible',
      )}
      aria-labelledby="partner-ecosystem-heading"
    >
      <div className="partner-ecosystem__bg" aria-hidden>
        <div className="partner-ecosystem__seam" />
        <div className="partner-ecosystem__glow partner-ecosystem__glow--cyan" />
        <div className="partner-ecosystem__glow partner-ecosystem__glow--violet" />
        <div className="partner-ecosystem__glow partner-ecosystem__glow--right" />
        <div className="partner-ecosystem__grid" />
        <div className="partner-ecosystem__orbit-bg" />
        <div className="partner-ecosystem__particles" />
        <div className="partner-ecosystem__vignette" />
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-[80rem] px-4 sm:px-6 lg:px-10">
        <div className="partner-ecosystem__split grid items-center gap-10 lg:grid-cols-[minmax(0,38%)_minmax(0,62%)] lg:gap-8 xl:gap-10">
          <div className="partner-ecosystem__left flex flex-col justify-center text-left">
            <p className="partner-ecosystem__eyebrow inline-flex w-fit items-center gap-2.5 rounded-full border border-[rgba(56,189,248,0.22)] bg-[rgba(15,23,42,0.72)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#CBD5E1] backdrop-blur-md sm:text-xs">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]"
                aria-hidden
              />
              {ECOSYSTEM_COPY.eyebrow}
            </p>
            <h2
              id="partner-ecosystem-heading"
              className="partner-ecosystem__heading mt-4 font-display text-[clamp(1.625rem,3.2vw+0.5rem,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-[#F8FAFC] sm:mt-5"
            >
              {ECOSYSTEM_COPY.heading}
            </h2>
            <p className="partner-ecosystem__subtitle mt-3 max-w-[26rem] text-[0.9375rem] leading-[1.7] text-[#94A3B8] sm:mt-4 sm:text-[15px]">
              {ECOSYSTEM_COPY.subtitle}
            </p>

            <ul className="partner-ecosystem__stats mt-6 flex flex-col gap-2 sm:mt-7">
              {partnerStats.map((stat, index) => {
                const Icon = STAT_ICONS[stat.icon];
                return (
                  <li key={stat.label} className="min-w-0">
                    <article
                      className={cn(
                        'partner-ecosystem__stat group flex items-center gap-3 rounded-2xl border border-[rgba(148,163,184,0.14)] bg-[rgba(15,23,42,0.72)] px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md transition-[transform,box-shadow,border-color] duration-250 ease-out sm:px-4 sm:py-3.5',
                        `partner-ecosystem__stat--${index + 1}`,
                      )}
                    >
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[rgba(56,189,248,0.2)] bg-[rgba(37,99,235,0.1)] text-[#38BDF8]"
                        aria-hidden
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-base font-bold leading-none text-[#F8FAFC] sm:text-[1.0625rem]">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs leading-snug text-[#94A3B8] sm:text-[13px]">
                          {stat.label}
                        </p>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>

            <div className="partner-ecosystem__cta-wrap mt-7 sm:mt-8">
              <a
                href={ECOSYSTEM_COPY.ctaHref}
                className="partner-ecosystem__cta hero-cta-primary inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white sm:px-7 sm:py-3.5 sm:text-[15px]"
              >
                {ECOSYSTEM_COPY.cta}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </a>
              <p className="partner-ecosystem__footnote mt-4 max-w-[22rem] text-xs leading-relaxed text-[#94A3B8]/85 sm:text-[13px]">
                {ECOSYSTEM_COPY.footnote}
              </p>
            </div>
          </div>

          <PartnerOrbitVisual className="partner-ecosystem__visual w-full min-w-0 lg:justify-self-stretch" />
        </div>
      </div>
    </section>
  );
}
