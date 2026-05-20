import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import HiringCtaButton from '@/components/landing/HiringCtaButton';
import NexaLogo from '@/components/ui/NexaLogo';
import { NAV_CTA_LABEL, PRIMARY_NAV_LINKS } from '@/config/site';
import { HERO_CONTAINER } from '@/lib/marketingClasses';
import { cn } from '@/lib/utils';

const LINK_CLASS =
  'rounded-lg px-3 py-2 text-sm font-medium text-[#CBD5E1] transition-colors hover:bg-[rgba(255,255,255,0.06)] hover:text-[#F8FAFC]';

const MOBILE_LINK_CLASS =
  'block rounded-lg px-3 py-2.5 text-sm font-medium text-[#CBD5E1] hover:bg-[rgba(255,255,255,0.06)] hover:text-white';

function PrimaryNavItem({ link, className, onClick }) {
  const { pathname } = useLocation();

  if (link.href) {
    return (
      <Link
        to={link.href}
        className={className}
        onClick={onClick}
        aria-current={pathname === link.href ? 'page' : undefined}
      >
        {link.label}
      </Link>
    );
  }

  const hash = `#${link.sectionId}`;
  if (pathname === '/') {
    return (
      <a href={hash} className={className} onClick={onClick}>
        {link.label}
      </a>
    );
  }

  return (
    <Link
      to={{ pathname: '/', hash }}
      className={className}
      onClick={onClick}
    >
      {link.label}
    </Link>
  );
}

/**
 * @param {'hero' | 'sticky' | 'fixed'} variant
 *   hero — absolute over homepage hero
 *   sticky — static marketing pages (contact, about, legal)
 *   fixed — app placeholder routes (talent, dashboard)
 */
export default function SiteNavbar({ variant = 'sticky', ctaSource = 'site_nav' }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle('site-nav-menu-open', mobileOpen);
    return () => {
      document.documentElement.classList.remove('site-nav-menu-open');
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        variant === 'hero' && 'absolute inset-x-0 top-0 z-30',
        variant === 'sticky' && 'static-site-nav',
        variant === 'fixed' && 'static-site-nav fixed top-0 right-0 left-0 z-50',
      )}
    >
      <div className="static-site-nav__bar">
        <div className={cn(HERO_CONTAINER, 'static-site-nav__inner')}>
          <NexaLogo size="nav" />

          <nav className="static-site-nav__links" aria-label="Main navigation">
            {PRIMARY_NAV_LINKS.map((link) => (
              <PrimaryNavItem key={link.label} link={link} className={LINK_CLASS} />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <HiringCtaButton
              source={ctaSource}
              className="static-site-nav__cta hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-white sm:inline-flex"
            >
              {NAV_CTA_LABEL}
            </HiringCtaButton>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(148,163,184,0.28)] bg-[rgba(255,255,255,0.04)] text-[#F8FAFC] transition-colors hover:bg-[rgba(255,255,255,0.08)] md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="site-mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id="site-mobile-menu"
          className="border-b border-[rgba(148,163,184,0.12)] bg-[rgba(2,11,22,0.98)] px-4 py-4 backdrop-blur-xl md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-0.5">
            {PRIMARY_NAV_LINKS.map((link) => (
              <li key={link.label}>
                <PrimaryNavItem
                  link={link}
                  className={MOBILE_LINK_CLASS}
                  onClick={closeMobile}
                />
              </li>
            ))}
          </ul>
          <HiringCtaButton
            source={`${ctaSource}_mobile`}
            className="mt-4 flex w-full justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white"
            onClick={closeMobile}
          >
            {NAV_CTA_LABEL}
          </HiringCtaButton>
        </nav>
      ) : null}
    </header>
  );
}
