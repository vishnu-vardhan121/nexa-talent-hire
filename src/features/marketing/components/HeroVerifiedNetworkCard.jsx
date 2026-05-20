import { cn } from '@/lib/utils';

const NETWORK_PROOF_STATS = [
  { value: '2,500+', label: 'Pre-Screened Profiles', dot: 'cyan', textValue: false },
  { value: '200+', label: 'Candidates Hired', dot: 'green', textValue: false },
  { value: 'Pan-India', label: 'Talent Pool', dot: 'blue', textValue: true },
  { value: 'Role-Based', label: 'Shortlisting', dot: 'violet', textValue: true },
];

const NETWORK_PIPELINE = ['Screened', 'Shortlisted', 'Interviewed', 'Hired'];

const DOT_CLASS = {
  cyan: 'bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.65)]',
  green: 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.55)]',
  blue: 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.55)]',
  violet: 'bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.55)]',
};

export default function HeroVerifiedNetworkCard({ className, compact = false }) {
  return (
    <aside
      className={cn(
        'hero-animate-dashboard pointer-events-auto relative w-full overflow-hidden rounded-2xl',
        'border border-sky-400/25 bg-[linear-gradient(165deg,rgba(15,23,42,0.84)_0%,rgba(7,21,39,0.9)_48%,rgba(2,11,22,0.94)_100%)]',
        'shadow-[0_22px_56px_-14px_rgba(37,99,235,0.42),0_0_0_1px_rgba(255,255,255,0.05)_inset,0_0_48px_-18px_rgba(56,189,248,0.22)]',
        'backdrop-blur-[18px] group',
        compact
          ? 'max-w-none p-3.5 sm:rounded-3xl sm:p-4'
          : 'max-w-[min(100%,19.5rem)] p-4 sm:max-w-[20.5rem] sm:p-[1.125rem] lg:max-w-[21rem] 2xl:max-w-[22rem] 2xl:p-5',
        className,
      )}
      aria-label="Verified talent network proof"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(56,189,248,0.08)_0%,transparent_42%,transparent_58%,rgba(139,92,246,0.06)_100%)]"
        aria-hidden
      />

      <p className="relative z-[1] text-[10px] font-bold tracking-[0.16em] text-slate-400 sm:text-[11px]">
        Verified Talent Network
      </p>

      <ul className="relative z-[1] mt-3 grid grid-cols-2 gap-[0.65rem] sm:mt-3.5 sm:gap-3">
        {NETWORK_PROOF_STATS.map((stat) => (
          <li
            key={stat.label}
            className="min-w-0 rounded-xl border border-slate-400/15 bg-[rgba(2,11,22,0.45)] p-[0.65rem_0.6rem] transition-[border-color,background] duration-220 group-hover:border-sky-400/20 group-hover:bg-[rgba(2,11,22,0.58)]"
          >
            <div className="flex items-center gap-1.5">
              <span
                className={cn('size-1.5 shrink-0 rounded-full', DOT_CLASS[stat.dot])}
                aria-hidden
              />
              <p
                className={cn(
                  'font-display font-extrabold leading-[1.05] text-slate-50',
                  stat.textValue
                    ? 'text-[15px] tracking-tight sm:text-base 2xl:text-base'
                    : 'text-lg sm:text-xl 2xl:text-[1.35rem]',
                )}
              >
                {stat.value}
              </p>
            </div>
            <p className="mt-1 text-[10px] leading-snug text-slate-400 sm:text-[11px]">{stat.label}</p>
          </li>
        ))}
      </ul>

      <div className="relative z-[1] mt-3 border-t border-slate-400/15 pt-3 sm:mt-3.5">
        <div className="flex flex-wrap items-center gap-x-0.5 gap-y-1">
          {NETWORK_PIPELINE.map((step, i) => (
            <span key={step} className="inline-flex items-center">
              <span className="whitespace-nowrap rounded-full border border-blue-600/35 bg-[rgba(7,21,39,0.85)] px-[0.45rem] py-0.5 text-[9px] font-semibold text-slate-300 sm:px-[0.55rem] sm:py-1 sm:text-[10px]">
                {step}
              </span>
              {i < NETWORK_PIPELINE.length - 1 && (
                <span className="select-none px-0.5 text-[9px] text-slate-500" aria-hidden>
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
