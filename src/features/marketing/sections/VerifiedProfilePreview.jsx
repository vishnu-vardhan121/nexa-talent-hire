import { Check } from 'lucide-react';
import SectionHeadline from '@/components/marketing/SectionHeadline';
import CandidateProfileCard from '@/features/marketing/components/VerifiedProfilePreview/CandidateProfileCard';
import {
  VERIFIED_PROFILE_COPY,
  checklistItems,
} from '@/data/marketing/verifiedProfilePreview';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils';

export default function VerifiedProfilePreview() {
  const [sectionRef, isVisible] = useInView();

  return (
    <section
      ref={sectionRef}
      id="talent-pool"
      className={cn(
        'verified-profile marketing-section relative overflow-hidden',
        isVisible && 'verified-profile--visible',
      )}
      aria-labelledby="verified-profile-heading"
    >
      <div className="verified-profile__bg" aria-hidden>
        <div className="verified-profile__seam" />
        <div className="verified-profile__glow verified-profile__glow--cyan" />
        <div className="verified-profile__glow verified-profile__glow--violet" />
        <div className="verified-profile__glow verified-profile__glow--blue" />
        <div className="verified-profile__grid" />
        <div className="verified-profile__particles" />
        <div className="verified-profile__vignette" />
      </div>

      <div className="marketing-section__container">
        <div className="verified-profile__split marketing-split marketing-split--40-60">
          <div className="verified-profile__left flex min-w-0 flex-col justify-center text-left">
            <p className="verified-profile__eyebrow inline-flex w-fit items-center gap-2.5 rounded-full border border-[rgba(56,189,248,0.22)] bg-[rgba(15,23,42,0.72)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#CBD5E1] backdrop-blur-md sm:text-xs">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]"
                aria-hidden
              />
              {VERIFIED_PROFILE_COPY.eyebrow}
            </p>
            <SectionHeadline
              id="verified-profile-heading"
              className="verified-profile__heading marketing-section-headline--split mt-4 sm:mt-5"
            >
              {VERIFIED_PROFILE_COPY.heading}
            </SectionHeadline>
            <p className="verified-profile__subtitle mt-3 max-w-[28rem] text-[0.9375rem] leading-[1.7] text-[#94A3B8] sm:mt-4 sm:text-[15px]">
              {VERIFIED_PROFILE_COPY.subtitle}
            </p>

            <ul className="verified-profile__checklist mt-7 flex flex-col gap-2 sm:mt-8">
              {checklistItems.map((item, index) => (
                <li
                  key={item}
                  className={cn(
                    'verified-profile__check-item group',
                    `verified-profile__check-item--${index + 1}`,
                  )}
                >
                  <span className="verified-profile__check-icon" aria-hidden>
                    <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
                  </span>
                  <span className="text-sm leading-snug text-[#CBD5E1] sm:text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <p className="verified-profile__support mt-5 max-w-[24rem] text-xs leading-relaxed text-[#94A3B8]/90 sm:text-[13px]">
              {VERIFIED_PROFILE_COPY.supportingLine}
            </p>
          </div>

          <CandidateProfileCard
            isVisible={isVisible}
            className="verified-profile__visual w-full min-w-0 lg:justify-self-end"
          />
        </div>
      </div>
    </section>
  );
}
