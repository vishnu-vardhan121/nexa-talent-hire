import SectionHeader from '@/components/ui/SectionHeader';
import { TESTIMONIALS } from '@/data/marketing/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10" aria-labelledby="testimonials-heading">
      <SectionHeader
        tag="Client stories"
        title={
          <>
            Loved by <span className="text-nexa-blue">HR leaders</span>
          </>
        }
      />

      <div className="mx-auto grid max-w-[1100px] gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <article
            key={item.name}
            className="rounded-[14px] border border-[rgba(83,74,183,0.3)] bg-nexa-card p-7"
          >
            <p className="mb-3 text-[13px] tracking-widest text-nexa-amber" aria-hidden>
              ★★★★★
            </p>
            <p className="mb-5 text-[15px] leading-relaxed text-nexa-gray italic">&ldquo;{item.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold"
                style={{ background: item.avatarBg, color: item.avatarColor }}
                aria-hidden
              >
                {item.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-nexa-gray">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
