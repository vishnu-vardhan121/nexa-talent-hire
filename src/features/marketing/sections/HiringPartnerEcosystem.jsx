import { ArrowRight, Briefcase, MapPin, Users } from 'lucide-react';
import HiringCtaButton from '@/components/landing/HiringCtaButton';
import SectionHeadline from '@/components/marketing/SectionHeadline';
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
      id="hiring-partners"
      className={cn(
        'partner-ecosystem marketing-section relative overflow-hidden',
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

      <div className="marketing-section__container">
        <div className="partner-ecosystem__split marketing-split marketing-split--41-59">
          <div className="partner-ecosystem__left flex min-w-0 flex-col justify-center text-left">
            <p className="partner-ecosystem__eyebrow inline-flex w-fit items-center gap-2.5 rounded-full border border-[rgba(56,189,248,0.22)] bg-[rgba(15,23,42,0.72)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#CBD5E1] backdrop-blur-md sm:text-xs">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]"
                aria-hidden
              />
              {ECOSYSTEM_COPY.eyebrow}
            </p>
            <SectionHeadline
              id="partner-ecosystem-heading"
              className="partner-ecosystem__heading marketing-section-headline--split mt-4 sm:mt-5"
            >
              {ECOSYSTEM_COPY.heading}
            </SectionHeadline>
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
                      <div
                        className={cn(
                          'min-w-0 flex-1',
                          stat.secondaryValue &&
                            'partner-ecosystem__stat-metrics--dual flex items-stretch gap-5 sm:gap-6',
                        )}
                      >
                        <div className="partner-ecosystem__stat-metric min-w-0">
                          <p className="font-display text-base font-bold leading-none text-[#F8FAFC] sm:text-[1.0625rem]">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-xs leading-snug text-[#94A3B8] sm:text-[13px]">
                            {stat.label}
                          </p>
                        </div>
                        {stat.secondaryValue ? (
                          <div className="partner-ecosystem__stat-metric min-w-0 border-l border-[rgba(148,163,184,0.18)] pl-5 sm:pl-6">
                            <p className="font-display text-base font-bold leading-none text-[#F8FAFC] sm:text-[1.0625rem]">
                              {stat.secondaryValue}
                            </p>
                            <p className="mt-1 text-xs leading-snug text-[#94A3B8] sm:text-[13px]">
                              {stat.secondaryLabel}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>

            <div className="partner-ecosystem__cta-wrap mt-7 sm:mt-8">
              <HiringCtaButton
                source="partner_ecosystem"
                className="partner-ecosystem__cta hero-cta-primary inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white sm:px-7 sm:py-3.5 sm:text-[15px]"
              >
                {ECOSYSTEM_COPY.cta}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </HiringCtaButton>
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
