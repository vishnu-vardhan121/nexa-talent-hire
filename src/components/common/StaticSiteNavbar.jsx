import { Link } from 'react-router-dom';
import HiringCtaButton from '@/components/landing/HiringCtaButton';
import { cn } from '@/lib/utils';

function NexaLogo({ className }) {
  return (
    <Link to="/" className={cn('group inline-flex min-w-0 shrink-0 flex-col leading-none', className)}>
      <span className="font-display text-base font-extrabold tracking-[0.1em] text-[#F8FAFC] min-[400px]:text-lg sm:text-xl">
        NE
        <span className="bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          X
        </span>
        A
      </span>
      <span className="mt-0.5 text-[10px] font-medium tracking-wide text-[#94A3B8] min-[400px]:text-[11px] sm:text-xs">
        Talent Hire
      </span>
    </Link>
  );
}

export default function StaticSiteNavbar() {
  return (
    <header className="static-site-nav">
      <div className="static-site-nav__bar">
        <div className="hero-container static-site-nav__inner">
          <NexaLogo />
          <nav className="static-site-nav__links" aria-label="Site navigation">
            <Link to="/" className="static-site-nav__link">
              Home
            </Link>
            <Link to="/about" className="static-site-nav__link">
              About
            </Link>
            <Link to="/contact" className="static-site-nav__link">
              Contact
            </Link>
          </nav>
          <HiringCtaButton
            source="static_nav"
            className="hero-cta-primary static-site-nav__cta inline-flex shrink-0 items-center justify-center rounded-xl px-3 py-2 text-xs font-semibold text-white sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <span className="sm:hidden">Get Matched</span>
            <span className="hidden sm:inline">Get Matched Candidates</span>
          </HiringCtaButton>
        </div>
      </div>
    </header>
  );
}
