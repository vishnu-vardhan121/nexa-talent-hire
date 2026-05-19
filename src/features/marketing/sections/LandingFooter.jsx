import { ArrowRight } from 'lucide-react';
import {
  footerBottom,
  footerBrand,
  footerColumns,
} from '@/data/marketing/footerData';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils';

function FooterLink({ href, children }) {
  return (
    <a href={href} className="landing-footer__link">
      <span className="landing-footer__link-text">{children}</span>
    </a>
  );
}

export default function LandingFooter() {
  const [footerRef, isVisible] = useInView({ threshold: 0.08 });

  return (
    <footer
      ref={footerRef}
      className={cn('landing-footer', isVisible && 'landing-footer--visible')}
      aria-labelledby="landing-footer-brand"
    >
      <div className="landing-footer__bg" aria-hidden>
        <div className="landing-footer__seam" />
        <div className="landing-footer__grid" />
        <div className="landing-footer__glow landing-footer__glow--brand" />
        <div className="landing-footer__glow landing-footer__glow--violet" />
      </div>

      <div className="landing-footer__inner relative z-[1] mx-auto w-full max-w-[80rem] px-4 sm:px-6 lg:px-10">
        <div className="landing-footer__grid-main">
          <div className="landing-footer__brand">
            <a href="/" className="landing-footer__logo" id="landing-footer-brand">
              <span className="landing-footer__logo-mark font-display" aria-hidden>
                NE
                <span className="landing-footer__logo-x">X</span>
                A
              </span>
              <span className="landing-footer__logo-rest font-display">Talent Hire</span>
            </a>

            <p className="landing-footer__desc">{footerBrand.description}</p>

            <div className="landing-footer__cta-block">
              <p className="landing-footer__cta-eyebrow">{footerBrand.ctaEyebrow}</p>
              <a
                href={footerBrand.ctaHref}
                className="landing-footer__cta hero-cta-primary inline-flex w-fit items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white sm:text-[13px]"
              >
                {footerBrand.ctaLabel}
                <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} className="landing-footer__column" aria-label={column.title}>
              <h3 className="landing-footer__column-title">{column.title}</h3>
              <ul className="landing-footer__links">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="landing-footer__bar">
          <p className="landing-footer__copyright">{footerBottom.copyright}</p>
          <p className="landing-footer__tagline">{footerBottom.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
