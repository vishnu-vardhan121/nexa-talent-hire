import NexaLogo from '@/components/ui/NexaLogo';

/** App shell logo (talent/dashboard routes). */
export default function Logo({ className, asLink = true }) {
  return <NexaLogo asLink={asLink} size="default" className={className} />;
}
