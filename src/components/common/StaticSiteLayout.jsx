import LandingFooter from '@/features/marketing/sections/LandingFooter';
import StaticSiteNavbar from '@/components/common/StaticSiteNavbar';

/** Dark-themed shell for marketing static pages: nav, background, footer. */
export default function StaticSiteLayout({ children }) {
  return (
    <div className="static-site">
      <div className="static-site__bg" aria-hidden>
        <div className="static-site__grid" />
        <div className="static-site__glow static-site__glow--cyan" />
        <div className="static-site__glow static-site__glow--violet" />
      </div>
      <StaticSiteNavbar />
      <main className="static-site__main">{children}</main>
      <LandingFooter />
    </div>
  );
}
