import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '@/config/site';
import HiringCtaButton from '@/components/landing/HiringCtaButton';
import Logo from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

export default function Navbar() {

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[rgba(83,74,183,0.3)] bg-[rgba(30,30,46,0.92)] backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                  isActive ? 'bg-nexa-navy-2 text-white' : 'text-nexa-gray hover:bg-nexa-navy-2 hover:text-white',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <HiringCtaButton
          source="navbar_post_requirement"
          className="shrink-0 rounded-lg px-5 py-2.5 text-sm"
        >
          Post Requirement
        </HiringCtaButton>
      </div>
    </header>
  );
}
