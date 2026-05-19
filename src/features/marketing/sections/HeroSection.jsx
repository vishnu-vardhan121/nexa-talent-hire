import { useEffect, useState } from 'react';
import { Check, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Hero background videos — replace files under public/videos/ */
export const HERO_VIDEO_WEBM = '/videos/nexa-hero-bg.webm';
export const HERO_VIDEO_MP4 = '/videos/nexa-hero-bg.mp4';

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Talent Pool', href: '#talent-pool' },
  { label: 'Roles We Hire', href: '#roles' },
  { label: 'Why NEXA', href: '#why-nexa' },
  { label: 'For Aspirants', href: '#aspirants' },
  { label: 'Contact', href: '#contact' },
];

const TRUST_POINTS = [
  'Pre-screened profiles',
  'Interview-ready candidates',
  'Hiring support included',
];

const DASHBOARD_STATS = [
  { label: 'Matched Candidates', value: '236', shortLabel: 'Matched', dot: 'bg-[#38BDF8]' },
  { label: 'Shortlisted Profiles', value: '48', shortLabel: 'Shortlisted', dot: 'bg-[#2563EB]' },
  { label: 'Interview Ready', value: '32', shortLabel: 'Interview Ready', dot: 'bg-[#22C55E]' },
];

const PIPELINE_STEPS = ['Matched', 'Shortlisted', 'Interview', 'Hired'];

function NexaLogo({ className }) {
  return (
    <a href="/" className={cn('group inline-flex min-w-0 shrink-0 flex-col leading-none', className)}>
      <span className="font-display text-base font-extrabold tracking-[0.1em] text-[#F8FAFC] min-[400px]:text-lg sm:text-xl 2xl:text-[1.35rem]">
        NE
        <span className="bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          X
        </span>
        A
      </span>
      <span className="mt-0.5 text-[10px] font-medium tracking-wide text-[#94A3B8] min-[400px]:text-[11px] sm:text-xs">
        Talent Hire
      </span>
    </a>
  );
}

function HeroNavbar({ mobileOpen, onToggleMobile, onCloseMobile }) {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="border-b border-[rgba(148,163,184,0.12)] bg-[rgba(2,11,22,0.55)] backdrop-blur-xl">
        <div className="hero-container flex h-14 min-h-14 items-center justify-between gap-2 min-[400px]:h-16 min-[400px]:gap-3 sm:h-[72px]">
          <NexaLogo />

          <nav
            className="absolute left-1/2 hidden max-w-[calc(100%-20rem)] -translate-x-1/2 items-center xl:flex 2xl:max-w-none"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-2 py-2 text-[13px] font-medium text-[#CBD5E1] transition-colors hover:bg-[rgba(255,255,255,0.06)] hover:text-[#F8FAFC] 2xl:px-3.5 2xl:text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex min-w-0 shrink-0 items-center gap-1.5 min-[400px]:gap-2 sm:gap-3">
            <a
              href="#get-matched"
              className="hero-cta-primary hero-cta-nav inline-flex max-w-[9rem] shrink-0 items-center justify-center truncate rounded-lg px-2.5 py-2 text-[11px] font-semibold text-white min-[400px]:max-w-none min-[400px]:rounded-xl min-[400px]:px-3 min-[400px]:text-xs sm:rounded-2xl sm:px-4 sm:py-2.5 sm:text-sm xl:px-5"
            >
              <span className="xl:hidden">Get Matched</span>
              <span className="hidden xl:inline">Get Matched Candidates</span>
            </a>

            <button
              type="button"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[rgba(148,163,184,0.28)] bg-[rgba(255,255,255,0.04)] text-[#F8FAFC] transition-colors hover:bg-[rgba(255,255,255,0.08)] min-[400px]:h-10 min-[400px]:w-10 min-[400px]:rounded-xl xl:hidden"
              aria-expanded={mobileOpen}
              aria-controls="hero-mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={onToggleMobile}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="hero-mobile-menu"
          className="max-h-[min(70dvh,28rem)] overflow-y-auto border-b border-[rgba(148,163,184,0.12)] bg-[rgba(2,11,22,0.96)] px-4 py-4 backdrop-blur-xl min-[400px]:px-5 xl:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#CBD5E1] hover:bg-[rgba(255,255,255,0.06)] hover:text-white"
                  onClick={onCloseMobile}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#get-matched"
            className="hero-cta-primary mt-4 flex w-full justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white"
            onClick={onCloseMobile}
          >
            Get Matched Candidates
          </a>
        </nav>
      )}
    </header>
  );
}

function HiringSnapshotCard({ className, compact = false }) {
  return (
    <aside
      className={cn(
        'hero-animate-dashboard pointer-events-auto w-full rounded-2xl border border-[rgba(148,163,184,0.18)] bg-[rgba(15,23,42,0.72)] shadow-[0_24px_64px_-12px_rgba(37,99,235,0.35)] backdrop-blur-[16px]',
        compact
          ? 'max-w-none p-4 sm:rounded-3xl sm:p-5'
          : 'max-w-[min(100%,20rem)] p-5 sm:max-w-[21.25rem] sm:p-6 lg:max-w-[22.5rem] 2xl:max-w-[24rem] 2xl:p-7',
        className,
      )}
      aria-label="Hiring snapshot"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8] sm:text-xs">
        Hiring Snapshot
      </p>

      <ul
        className={cn(
          'mt-3 sm:mt-4',
          compact ? 'grid grid-cols-3 gap-2 sm:gap-3' : 'space-y-3',
        )}
      >
        {DASHBOARD_STATS.map((stat) => (
          <li
            key={stat.label}
            className={cn(
              compact
                ? 'flex flex-col items-center gap-1 text-center min-[480px]:flex-row min-[480px]:items-center min-[480px]:gap-2 min-[480px]:text-left'
                : 'flex items-center gap-3',
            )}
          >
            <span
              className={cn(
                'shrink-0 rounded-full shadow-[0_0_8px_currentColor]',
                stat.dot,
                compact ? 'h-1.5 w-1.5 min-[480px]:h-2 min-[480px]:w-2' : 'h-2 w-2',
              )}
              aria-hidden
            />
            <div className="min-w-0">
              <p
                className={cn(
                  'font-display font-bold leading-none text-[#F8FAFC]',
                  compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl 2xl:text-[1.65rem]',
                )}
              >
                {stat.value}
              </p>
              <p
                className={cn(
                  'mt-0.5 text-[#94A3B8]',
                  compact
                    ? 'text-[9px] leading-tight min-[480px]:text-[10px] sm:text-xs'
                    : 'text-xs',
                )}
              >
                <span className="sm:hidden">{stat.shortLabel}</span>
                <span className="hidden sm:inline">{stat.label}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 border-t border-[rgba(148,163,184,0.14)] pt-3 sm:mt-5 sm:pt-4">
        <p className="text-[10px] font-medium uppercase tracking-wider text-[#94A3B8] sm:text-[11px]">Pipeline</p>
        <div
          className={cn(
            'mt-2 flex flex-wrap items-center text-[#CBD5E1]',
            compact ? 'gap-0.5 text-[10px] sm:gap-1 sm:text-xs' : 'gap-1.5 text-xs',
          )}
        >
          {PIPELINE_STEPS.map((step, i) => (
            <span key={step} className="inline-flex items-center gap-0.5 sm:gap-1">
              <span
                className={cn(
                  'rounded-full bg-[rgba(56,189,248,0.15)] text-[#38BDF8]',
                  compact ? 'px-1.5 py-px text-[9px] sm:px-2 sm:py-0.5 sm:text-[11px]' : 'px-2 py-0.5 text-[11px]',
                )}
              >
                {step}
              </span>
              {i < PIPELINE_STEPS.length - 1 && (
                <span className="text-[#64748B]" aria-hidden>
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <section
      className={cn(
        'relative min-h-[100dvh] overflow-x-hidden bg-[#020B16] text-[#F8FAFC]',
        !reduceMotion && 'hero-motion-enabled',
      )}
      aria-label="NEXA Talent Hire hero"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[58%_center] lg:object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_WEBM} type="video/webm" />
        <source src={HERO_VIDEO_MP4} type="video/mp4" />
      </video>

      <div className="hero-overlay-ltr pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,11,22,0.15)_0%,rgba(2,11,22,0.7)_100%)] sm:bg-[linear-gradient(180deg,rgba(2,11,22,0.2)_0%,rgba(2,11,22,0.75)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[rgba(2,11,22,0.52)] sm:bg-[rgba(2,11,22,0.38)] md:bg-[rgba(2,11,22,0.22)] lg:bg-transparent"
        aria-hidden="true"
      />

      <HeroNavbar
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((o) => !o)}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="hero-container relative z-10 flex min-h-[100dvh] flex-col pb-6 pt-[4.75rem] min-[400px]:pb-8 min-[400px]:pt-[5.25rem] sm:pb-10 sm:pt-28 md:pt-32 lg:pb-14 lg:pt-36 xl:pt-[9.5rem] 2xl:pb-16 2xl:pt-40">
        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-6 xl:gap-10 2xl:gap-14">
          <div className="flex min-w-0 flex-col justify-center lg:max-w-[42rem] xl:max-w-[44rem] 2xl:max-w-[46rem]">
            <p className="hero-animate-badge mb-4 text-sm leading-snug text-[#94A3B8] sm:mb-5 sm:text-[15px]">
              India-wide verified talent network
            </p>

            <h1 className="hero-animate-headline hero-headline font-display font-extrabold tracking-tight text-[#F8FAFC]">
              Hire Pre-Screened Talent Without{' '}
              <span className="bg-[linear-gradient(90deg,#38BDF8,#2563EB,#8B5CF6)] bg-clip-text text-transparent">
                Resume Noise
              </span>
            </h1>

            <p className="hero-animate-subhead hero-subhead mt-4 max-w-[36rem] text-[#CBD5E1] min-[400px]:mt-5 xl:max-w-[38rem] 2xl:max-w-[40rem]">
              Get matched with verified, job-ready candidates from across India — already screened for
              skills, projects, communication, and interview readiness.
            </p>

            <div
              id="get-matched"
              className="hero-animate-cta mt-6 flex w-full flex-col gap-2.5 min-[400px]:mt-7 min-[400px]:gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
            >
              <a
                href="#get-matched"
                className="hero-cta-primary inline-flex w-full min-h-12 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white min-[400px]:min-h-[3.25rem] min-[400px]:rounded-2xl min-[400px]:px-7 min-[400px]:py-3.5 min-[400px]:text-[15px] sm:w-auto sm:min-w-[12.5rem] sm:px-8 sm:py-4"
              >
                Get Matched Candidates
              </a>
              <a
                href="#talent-pool"
                className="hero-cta-secondary inline-flex w-full min-h-12 items-center justify-center rounded-xl border border-[rgba(148,163,184,0.28)] bg-[rgba(255,255,255,0.03)] px-5 py-3 text-sm font-semibold text-[#F8FAFC] backdrop-blur-sm transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)] min-[400px]:min-h-[3.25rem] min-[400px]:rounded-2xl min-[400px]:px-7 min-[400px]:py-3.5 min-[400px]:text-[15px] sm:w-auto sm:min-w-[11rem] sm:px-8 sm:py-4"
              >
                View Talent Pool
              </a>
            </div>

            <ul className="hero-animate-trust mt-6 flex flex-col gap-2.5 min-[400px]:mt-7 min-[400px]:gap-3 sm:mt-8 md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-2 lg:flex-col lg:gap-3 xl:flex-row xl:flex-wrap xl:gap-x-8 2xl:gap-x-10">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex min-w-0 items-center gap-2 text-[13px] text-[#CBD5E1] sm:text-sm">
                  <Check className="h-3.5 w-3.5 shrink-0 text-[#22C55E] sm:h-4 sm:w-4" strokeWidth={2.5} aria-hidden />
                  <span className="min-w-0">{point}</span>
                </li>
              ))}
            </ul>

            <HiringSnapshotCard compact className="hero-animate-dashboard mt-8 lg:hidden" />
          </div>

          <div className="hidden min-w-0 lg:flex lg:justify-end lg:self-center xl:pr-2 2xl:pr-4">
            <HiringSnapshotCard className="hero-animate-dashboard w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
