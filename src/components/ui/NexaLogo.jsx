import { Link } from 'react-router-dom';
import { NEXA_LOGO_NAV_SRC, NEXA_LOGO_SRC, SITE } from '@/config/site';
import { cn } from '@/lib/utils';

const SIZE_CLASS = {
  nav: 'h-10 w-auto min-[400px]:h-11 sm:h-12 md:h-14 lg:h-16',
  default: 'h-11 w-auto sm:h-12 max-w-[14rem]',
  footer: 'h-12 w-auto sm:h-14 max-w-[16rem] sm:max-w-[18rem]',
};

const LOGO_META = {
  nav: { src: NEXA_LOGO_NAV_SRC, width: 942, height: 418 },
  default: { src: NEXA_LOGO_SRC, width: 1662, height: 508 },
  footer: { src: NEXA_LOGO_SRC, width: 1662, height: 508 },
};

/**
 * Brand logo image — use in nav, footer, and app chrome.
 * @param {'nav' | 'default' | 'footer'} size
 */
export default function NexaLogo({ asLink = true, size = 'nav', className, imgClassName, id }) {
  const { src, width, height } = LOGO_META[size] ?? LOGO_META.nav;

  const image = (
    <img
      src={src}
      alt={SITE.name}
      className={cn('block object-contain object-left', SIZE_CLASS[size], imgClassName)}
      width={width}
      height={height}
      decoding="async"
    />
  );

  if (!asLink) {
    return (
      <span className={cn('inline-flex shrink-0 items-center', className)} aria-label={SITE.name}>
        {image}
      </span>
    );
  }

  return (
    <Link
      id={id}
      to="/"
      className={cn(
        'inline-flex shrink-0 items-center rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-sky-400/50',
        className,
      )}
      aria-label={`${SITE.name} home`}
    >
      {image}
    </Link>
  );
}
