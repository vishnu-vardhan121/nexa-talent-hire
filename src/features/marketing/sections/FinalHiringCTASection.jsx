import { ArrowRight, MessageCircle } from 'lucide-react';
import HiringCtaButton from '@/components/landing/HiringCtaButton';
import FloatingProfileDecor from '@/features/marketing/components/FinalHiringCTASection/FloatingProfileDecor';
import SectionHeadline from '@/components/marketing/SectionHeadline';
import { FINAL_HIRING_CTA_COPY } from '@/data/marketing/finalHiringCta';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils';

export default function FinalHiringCTASection() {
  const [sectionRef, isVisible] = useInView();

  return (
    <section
      ref={sectionRef}
      id="final-hiring-cta"
      className={cn(
        'final-hiring-cta marketing-section relative scroll-mt-24',
        isVisible && 'final-hiring-cta--visible',
      )}
      aria-labelledby="final-hiring-cta-heading"
    >
      <div className="final-hiring-cta__bg" aria-hidden>
        <div className="final-hiring-cta__glow final-hiring-cta__glow--cyan" />
        <div className="final-hiring-cta__glow final-hiring-cta__glow--violet" />
        <div className="final-hiring-cta__glow final-hiring-cta__glow--blue" />
      </div>

      <div className="marketing-section__container max-w-[73.75rem]">
        <div className="final-hiring-cta__shell">
          <article className="final-hiring-cta__card">
            <div className="final-hiring-cta__card-grid" aria-hidden />
            <div className="final-hiring-cta__card-glow" aria-hidden />
            <FloatingProfileDecor />

            <div className="final-hiring-cta__content">
              <p className="final-hiring-cta__eyebrow inline-flex items-center gap-2 rounded-full border border-[rgba(56,189,248,0.24)] bg-[rgba(15,23,42,0.8)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#CBD5E1] backdrop-blur-md sm:text-xs">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]"
                  aria-hidden
                />
                {FINAL_HIRING_CTA_COPY.eyebrow}
              </p>

              <SectionHeadline
                id="final-hiring-cta-heading"
                className="final-hiring-cta__heading marketing-section-headline--cta mt-5 text-center sm:mt-6"
              >
                {FINAL_HIRING_CTA_COPY.heading}
              </SectionHeadline>

              <p className="final-hiring-cta__subtitle mx-auto mt-4 max-w-[36rem] text-[0.9375rem] leading-[1.7] text-[#94A3B8] sm:text-base">
                {FINAL_HIRING_CTA_COPY.subtitle}
              </p>

              <div className="final-hiring-cta__actions mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
                <HiringCtaButton
                  source="final_cta_primary"
                  className="final-hiring-cta__btn-primary hero-cta-primary inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold text-white sm:w-auto sm:min-w-[14rem] sm:text-[15px]"
                >
                  {FINAL_HIRING_CTA_COPY.primaryCta}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </HiringCtaButton>
                <HiringCtaButton
                  source={FINAL_HIRING_CTA_COPY.secondaryModalSource}
                  variant="secondary"
                  className="final-hiring-cta__btn-secondary inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[rgba(148,163,184,0.24)] bg-[rgba(2,11,22,0.55)] px-7 py-3.5 text-sm font-semibold text-[#F8FAFC] backdrop-blur-sm sm:w-auto sm:min-w-[14rem] sm:text-[15px]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                  {FINAL_HIRING_CTA_COPY.secondaryCta}
                </HiringCtaButton>
              </div>

              <p className="final-hiring-cta__trust mt-8 text-center text-xs leading-relaxed text-[#94A3B8] sm:mt-9 sm:text-[13px]">
                {FINAL_HIRING_CTA_COPY.trustLine}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
