import SectionHeader from '@/components/ui/SectionHeader';
import { PLATFORM_FEATURES } from '@/data/marketing/features';

export default function FeaturesSection() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10" aria-labelledby="features-heading">
      <SectionHeader
        tag="Why NexaTalentHire"
        title={
          <>
            Everything you need to <span className="text-nexa-amber">hire faster</span>
          </>
        }
      />

      <div className="mx-auto grid max-w-[1100px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PLATFORM_FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="rounded-[14px] border border-[rgba(83,74,183,0.3)] bg-nexa-card px-6 py-7"
          >
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(83,74,183,0.15)] text-[22px]">
              {feature.icon}
            </span>
            <h4 className="mb-2 text-base font-bold text-white">{feature.title}</h4>
            <p className="text-sm leading-relaxed text-nexa-gray">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
