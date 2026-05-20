import { AlertTriangle, Clock, Files, Hourglass } from 'lucide-react';
import SectionHeadline from '@/components/marketing/SectionHeadline';
import HiringProblemVisual from '@/features/marketing/components/HiringProblemVisual';
import { HIRING_PROBLEM_COPY, painChips } from '@/data/marketing/hiringProblem';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils';

const CHIP_ICONS = {
  resumes: Files,
  screening: AlertTriangle,
  interviews: Clock,
  decisions: Hourglass,
};

const CHIP_ACCENTS = {
  amber: 'hiring-problem__pain-chip--amber',
  violet: 'hiring-problem__pain-chip--violet',
  cyan: 'hiring-problem__pain-chip--cyan',
  blue: 'hiring-problem__pain-chip--blue',
};

export default function HiringProblemSection() {
  const [sectionRef, isVisible] = useInView();

  return (
    <section
      ref={sectionRef}
      className={cn(
        'hiring-problem marketing-section relative overflow-hidden',
        isVisible && 'hiring-problem--visible',
      )}
      aria-labelledby="hiring-problem-heading"
    >
      <div className="hiring-problem__bg" aria-hidden>
        <div className="hiring-problem__seam" />
        <div className="hiring-problem__slant" />
        <div className="hiring-problem__glow hiring-problem__glow--amber" />
        <div className="hiring-problem__glow hiring-problem__glow--clean" />
        <div className="hiring-problem__grid" />
      </div>

      <div className="marketing-section__container">
        <div className="hiring-problem__split marketing-split">
          <header className="hiring-problem__header min-w-0 max-w-[35rem] text-left">
            <p className="hiring-problem__eyebrow flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#38BDF8] sm:text-xs">
              <span className="h-px w-8 shrink-0 bg-gradient-to-r from-[#38BDF8] to-transparent" aria-hidden />
              {HIRING_PROBLEM_COPY.eyebrow}
            </p>
            <SectionHeadline
              id="hiring-problem-heading"
              className="hiring-problem__heading marketing-section-headline--emphasis mt-5"
            >
              {HIRING_PROBLEM_COPY.heading}
            </SectionHeadline>
            <p className="hiring-problem__subtitle mt-4 max-w-[34rem] text-[0.9375rem] leading-[1.7] text-[#94A3B8] sm:text-base">
              {HIRING_PROBLEM_COPY.subtitle}
            </p>
            <p className="hiring-problem__highlight mt-6 border-l-2 border-[#38BDF8] py-0.5 pl-4 text-sm font-medium leading-relaxed text-[#CBD5E1] sm:text-[15px]">
              {HIRING_PROBLEM_COPY.highlightLine}
            </p>
          </header>

          <HiringProblemVisual className="hiring-problem__visual w-full min-w-0 lg:max-w-[35rem] lg:justify-self-end" />
        </div>

        <ul
          className="hiring-problem__pains mt-10 flex flex-wrap gap-2.5 sm:mt-12 sm:gap-3 lg:mt-14"
          aria-label="Common hiring pain points"
        >
          {painChips.map((chip, index) => {
            const Icon = CHIP_ICONS[chip.icon];
            return (
              <li key={chip.label} className="min-w-0">
                <span
                  className={cn(
                    'hiring-problem__pain-chip group inline-flex max-w-full items-center gap-2.5 rounded-full border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.72)] px-3.5 py-2.5 text-[13px] font-medium leading-snug text-[#CBD5E1] backdrop-blur-md transition-[transform,border-color,box-shadow] duration-250 ease-out sm:px-4 sm:py-2.5 sm:text-sm',
                    CHIP_ACCENTS[chip.accent],
                    `hiring-problem__pain-chip--${index + 1}`,
                  )}
                >
                  <span
                    className={cn(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border',
                      chip.accent === 'amber' &&
                        'border-[rgba(245,158,11,0.28)] bg-[rgba(245,158,11,0.1)] text-[#F59E0B]',
                      chip.accent === 'violet' &&
                        'border-[rgba(139,92,246,0.25)] bg-[rgba(139,92,246,0.1)] text-[#8B5CF6]',
                      chip.accent === 'cyan' &&
                        'border-[rgba(56,189,248,0.26)] bg-[rgba(56,189,248,0.1)] text-[#38BDF8]',
                      chip.accent === 'blue' &&
                        'border-[rgba(37,99,235,0.28)] bg-[rgba(37,99,235,0.12)] text-[#38BDF8]',
                    )}
                    aria-hidden
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  {chip.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
