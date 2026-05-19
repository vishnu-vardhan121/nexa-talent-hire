import { Outlet, useLocation } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHeroHome = pathname === '/';

  if (isHeroHome) {
    return <Outlet />;
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
