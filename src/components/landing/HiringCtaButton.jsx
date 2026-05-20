import { useHiringRequirementModal } from '@/context/HiringRequirementModalContext';
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
        variant === 'secondary' && 'hero-cta-secondary',
        variant === 'primary' && 'hero-cta-primary',
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
