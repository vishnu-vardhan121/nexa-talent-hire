import { Check } from 'lucide-react';
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
      id="verified-profile-preview"
      className={cn(
        'verified-profile relative overflow-hidden py-[4.5rem] lg:py-[6.875rem]',
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

      <div className="relative z-[1] mx-auto w-full max-w-[80rem] px-4 sm:px-6 lg:px-10">
        <div className="verified-profile__split grid items-center gap-10 lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] lg:gap-10 xl:gap-12">
          <div className="verified-profile__left flex flex-col justify-center text-left">
            <p className="verified-profile__eyebrow inline-flex w-fit items-center gap-2.5 rounded-full border border-[rgba(56,189,248,0.22)] bg-[rgba(15,23,42,0.72)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#CBD5E1] backdrop-blur-md sm:text-xs">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]"
                aria-hidden
              />
              {VERIFIED_PROFILE_COPY.eyebrow}
            </p>
            <h2
              id="verified-profile-heading"
              className="verified-profile__heading mt-4 font-display text-[clamp(1.625rem,3.2vw+0.5rem,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-[#F8FAFC] sm:mt-5"
            >
              {VERIFIED_PROFILE_COPY.heading}
            </h2>
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
