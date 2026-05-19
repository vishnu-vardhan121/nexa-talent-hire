import { PLATFORM_STATS } from '@/data/marketing/stats';

export default function StatsSection() {
  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-10" aria-label="Platform statistics">
      <div className="mx-auto grid max-w-[900px] grid-cols-2 overflow-hidden rounded-2xl border border-[rgba(83,74,183,0.3)] md:grid-cols-5">
        {PLATFORM_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`bg-nexa-card px-5 py-7 text-center ${index < PLATFORM_STATS.length - 1 ? 'border-b border-[rgba(83,74,183,0.3)] md:border-r md:border-b-0' : ''}`}
          >
            <p className="font-display text-[32px] font-extrabold text-nexa-amber">{stat.value}</p>
            <p className="mt-1 text-[13px] text-nexa-gray">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
