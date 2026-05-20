import { useSeo } from '@/lib/useSeo';

/** @deprecated Prefer useSeo({ title, description, path }) from @/lib/useSeo */
export function usePageTitle(title, description = '') {
  useSeo({ title, description, path: typeof window !== 'undefined' ? window.location.pathname : '/' });
}
