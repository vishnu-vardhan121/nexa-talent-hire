import { useHiringRequirementModal } from '@/context/HiringRequirementModalContext';
import { shouldOpenHiringModal } from '@/lib/hiringCta';
import { cn } from '@/lib/utils';

/**
 * Anchor that opens the hiring modal for known CTA hrefs; otherwise behaves as a normal link.
 */
export default function HiringCtaLink({
  href,
  source = 'nexa_landing_page',
  className,
  children,
  onClick,
  ...props
}) {
  const { openModal } = useHiringRequirementModal();

  if (!shouldOpenHiringModal(href)) {
    return (
      <a href={href} className={className} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  const handleClick = (event) => {
    event.preventDefault();
    onClick?.(event);
    if (!event.defaultPrevented) {
      openModal(source);
    }
  };

  return (
    <button type="button" className={cn('cursor-pointer text-left', className)} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
