import { NavLink, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '@/config/site';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const navigate = useNavigate();

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

        <Button size="sm" className="shrink-0" onClick={() => navigate('/dashboard')}>
          Post a Job
        </Button>
      </div>
    </header>
  );
}
