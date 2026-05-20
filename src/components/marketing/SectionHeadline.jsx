import { cn } from '@/lib/utils';

/**
 * @param {{
 *   id?: string;
 *   className?: string;
 *   children: React.ReactNode;
 * }} props
 */
export default function SectionHeadline({ id, className, children }) {
  return (
    <h2
      id={id}
      className={cn(
        'marketing-section-headline font-display font-extrabold text-[#F8FAFC]',
        className,
      )}
    >
      {children}
    </h2>
  );
}
