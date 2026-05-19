import { cn } from '@/lib/utils';

export default function SectionHeader({ tag, title, description, className }) {
  return (
    <div className={cn('mx-auto mb-10 max-w-3xl text-center', className)}>
      {tag ? (
        <span className="mb-3.5 inline-block rounded-full border border-[rgba(83,74,183,0.3)] bg-[rgba(83,74,183,0.15)] px-4 py-1.5 text-xs font-semibold tracking-widest text-nexa-purple-light uppercase">
          {tag}
        </span>
      ) : null}
      <h2 className="font-display text-[clamp(1.625rem,3.5vw,2.375rem)] font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-nexa-gray">{description}</p>
      ) : null}
    </div>
  );
}
