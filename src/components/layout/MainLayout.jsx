import { Outlet, useLocation } from 'react-router-dom';
import StaticSiteLayout from '@/components/common/StaticSiteLayout';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const STATIC_MARKETING_PATHS = new Set([
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
]);

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHeroHome = pathname === '/';
  const isStaticMarketing = STATIC_MARKETING_PATHS.has(pathname);

  if (isHeroHome) {
    return <Outlet />;
  }

  if (isStaticMarketing) {
    return (
      <StaticSiteLayout>
        <Outlet />
      </StaticSiteLayout>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1 pt-[68px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
