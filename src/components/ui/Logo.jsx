import { Link } from 'react-router-dom';
import { SITE } from '@/config/site';
import { cn } from '@/lib/utils';

export default function Logo({ className, asLink = true }) {
  const content = (
    <>
      <span
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-nexa-purple font-display text-base font-black text-white"
        aria-hidden
      >
        Nx
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-nexa-amber" />
      </span>
      <span className={cn('font-display text-lg font-extrabold tracking-tight', className)}>
        <span className="text-nexa-blue">Nexa</span>
        <span className="text-nexa-amber">Talent</span>
        <span className="text-white">Hire</span>
      </span>
    </>
  );

  if (!asLink) {
    return (
      <div className="flex items-center gap-3" aria-label={SITE.name}>
        {content}
      </div>
    );
  }

  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
      {content}
    </Link>
  );
}
