import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const NOISY_CHIPS = [
  { top: '0%', left: '0%', w: 68, warn: false, bars: 2, opacity: 0.55, delay: 0 },
  { top: '8%', left: '22%', w: 58, warn: true, bars: 3, opacity: 0.48, delay: 0.6 },
  { top: '18%', left: '4%', w: 72, warn: false, bars: 2, opacity: 0.62, delay: 1.1 },
  { top: '26%', left: '30%', w: 52, warn: true, bars: 2, opacity: 0.42, delay: 0.3 },
  { top: '36%', left: '0%', w: 64, warn: false, bars: 3, opacity: 0.5, delay: 1.8 },
  { top: '44%', left: '18%', w: 56, warn: false, bars: 2, opacity: 0.58, delay: 0.9 },
  { top: '54%', left: '8%', w: 70, warn: true, bars: 3, opacity: 0.45, delay: 2.2 },
  { top: '62%', left: '28%', w: 50, warn: false, bars: 2, opacity: 0.4, delay: 1.4 },
  { top: '72%', left: '2%', w: 62, warn: true, bars: 2, opacity: 0.52, delay: 0.5 },
  { top: '80%', left: '20%', w: 54, warn: false, bars: 2, opacity: 0.38, delay: 2.6 },
];

function NoisyChip({ top, left, w, warn, bars, opacity, delay }) {
  return (
    <div
      className={cn(
        'hiring-problem-visual__chip hiring-problem-visual__chip--noisy absolute rounded-lg border border-[rgba(148,163,184,0.1)] bg-[rgba(2,11,22,0.82)] p-2 backdrop-blur-sm',
        warn && 'hiring-problem-visual__chip--warn',
      )}
      style={{
        top,
        left,
        width: `${w}%`,
        opacity,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="flex items-center gap-1.5">
        <span className="h-5 w-5 shrink-0 rounded-full bg-[rgba(148,163,184,0.18)]" />
        <div className="min-w-0 flex-1 space-y-0.5">
          <span className="block h-1 w-full rounded-full bg-[rgba(148,163,184,0.22)]" />
          <span className="block h-0.5 w-2/3 rounded-full bg-[rgba(148,163,184,0.12)]" />
        </div>
      </div>
      <div className="mt-1.5 flex gap-0.5" aria-hidden>
        {Array.from({ length: bars }).map((_, i) => (
          <span
            key={i}
            className={cn(
              'h-0.5 flex-1 rounded-full',
              warn ? 'bg-[rgba(245,158,11,0.4)]' : 'bg-[rgba(148,163,184,0.2)]',
            )}
          />
        ))}
      </div>
    </div>
  );
}

function VerifiedCard({ delay }) {
  return (
    <div
      className="hiring-problem-visual__chip hiring-problem-visual__chip--verified rounded-xl border border-[rgba(56,189,248,0.24)] bg-[rgba(15,23,42,0.88)] p-3 backdrop-blur-sm"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="h-8 w-8 shrink-0 rounded-full bg-[rgba(37,99,235,0.3)] ring-1 ring-[rgba(56,189,248,0.35)]" />
          <div className="space-y-1.5">
            <span className="block h-1.5 w-16 rounded-full bg-[rgba(248,250,252,0.55)]" />
            <span className="block h-1 w-11 rounded-full bg-[rgba(148,163,184,0.28)]" />
            <span className="flex gap-1">
              <span className="h-0.5 w-6 rounded-full bg-[rgba(34,197,94,0.55)]" />
              <span className="h-0.5 w-4 rounded-full bg-[rgba(56,189,248,0.45)]" />
            </span>
          </div>
        </div>
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.22)] text-[#22C55E]">
          <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
        </span>
      </div>
    </div>
  );
}

export default function HiringProblemVisual({ className }) {
  return (
    <div
      className={cn('hiring-problem-visual relative w-full max-w-[35rem]', className)}
      aria-hidden
    >
      <div className="hiring-problem-visual__diagonal-glow pointer-events-none absolute inset-0" />

      <div className="hiring-problem-visual__frame relative overflow-hidden rounded-[1.75rem] border border-[rgba(148,163,184,0.14)] bg-[rgba(7,21,39,0.65)] p-3 shadow-[0_32px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-4">
        <div className="hiring-problem-visual__stage grid grid-cols-[1.15fr_auto_0.95fr] items-stretch gap-2 sm:gap-3">
          <div className="hiring-problem-visual__noise-zone relative min-h-[15rem] sm:min-h-[16.5rem]">
            <div className="hiring-problem-visual__noise-glow pointer-events-none absolute inset-0" />
            <div className="hiring-problem-visual__particles pointer-events-none absolute inset-0" aria-hidden>
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className={`hiring-problem-visual__particle hiring-problem-visual__particle--${i + 1}`} />
              ))}
            </div>
            <div className="relative h-full min-h-[inherit]">
              {NOISY_CHIPS.map((chip, i) => (
                <NoisyChip key={i} {...chip} />
              ))}
            </div>
          </div>

          <div className="hiring-problem-visual__scanner flex flex-col items-center justify-center py-1">
            <div className="hiring-problem-visual__scanner-panel relative h-full min-h-[15rem] w-11 overflow-hidden rounded-xl border border-[rgba(56,189,248,0.32)] bg-[rgba(15,23,42,0.9)] shadow-[0_0_40px_rgba(56,189,248,0.18)] sm:min-h-[16.5rem] sm:w-12">
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[rgba(56,189,248,0.25)] to-transparent" />
              <div className="hiring-problem-visual__scanner-line absolute inset-x-1.5 h-9 rounded-md bg-gradient-to-r from-transparent via-[rgba(56,189,248,0.6)] to-transparent shadow-[0_0_24px_rgba(56,189,248,0.45)]" />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[rgba(37,99,235,0.2)] to-transparent" />
              <div className="absolute inset-y-4 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(56,189,248,0.35)] to-transparent" />
            </div>
            <span className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#38BDF8]/80 sm:text-[10px]">
              Filter
            </span>
          </div>

          <div className="hiring-problem-visual__clean-zone relative flex min-h-[15rem] flex-col justify-center gap-3 py-1 sm:min-h-[16.5rem] sm:gap-3.5">
            <div className="hiring-problem-visual__clean-glow pointer-events-none absolute inset-0" />
            <VerifiedCard delay={0} />
            <VerifiedCard delay={0.6} />
            <VerifiedCard delay={1.2} />
          </div>
        </div>
      </div>
    </div>
  );
}
