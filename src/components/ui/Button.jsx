import { cn } from '@/lib/utils';

const variants = {
  primary:
    'bg-nexa-purple text-white shadow-lg shadow-black/20 hover:bg-nexa-purple-light active:brightness-95',
  outline:
    'border border-[rgba(83,74,183,0.3)] bg-transparent text-white hover:bg-nexa-navy-2',
  blue: 'bg-nexa-blue text-white hover:brightness-110',
};

const sizes = {
  md: 'px-7 py-3.5 text-[15px] rounded-xl',
  sm: 'px-5 py-2.5 text-sm rounded-lg',
  lg: 'px-8 py-4 text-base rounded-xl',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-2 font-semibold transition-all duration-200',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
