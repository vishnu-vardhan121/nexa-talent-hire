import { useHiringRequirementModal } from '@/context/HiringRequirementModalContext';
import { CTA_PRIMARY, CTA_SECONDARY } from '@/lib/marketingClasses';
import { cn } from '@/lib/utils';

/**
 * Primary/secondary CTA that opens the hiring requirement modal.
 */
export default function HiringCtaButton({
  source = 'nexa_landing_page',
  variant = 'primary',
  className,
  children,
  onClick,
  ...props
}) {
  const { openModal } = useHiringRequirementModal();

  const handleClick = (event) => {
    onClick?.(event);
    if (!event.defaultPrevented) {
      openModal(source);
    }
  };

  return (
    <button
      type="button"
      className={cn(
        variant === 'secondary' && CTA_SECONDARY,
        variant === 'primary' && CTA_PRIMARY,
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
