import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import HiringCtaButton from '@/components/landing/HiringCtaButton';
import HiringCtaLink from '@/components/landing/HiringCtaLink';
import NexaLogo from '@/components/ui/NexaLogo';
import {
  footerBottom,
  footerBrand,
  footerColumns,
} from '@/data/marketing/footerData';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils';

function isInternalRoute(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');
}

function FooterLink({ href, label, children }) {
  const { pathname } = useLocation();

  if (isInternalRoute(href)) {
    return (
      <Link to={href} className="landing-footer__link">
        <span className="landing-footer__link-text">{children}</span>
      </Link>
    );
  }

  if (typeof href === 'string' && href.startsWith('#')) {
    const hash = href;
    if (pathname === '/') {
      return (
        <a href={hash} className="landing-footer__link">
          <span className="landing-footer__link-text">{children}</span>
        </a>
      );
    }
    return (
      <Link to={{ pathname: '/', hash }} className="landing-footer__link">
        <span className="landing-footer__link-text">{children}</span>
      </Link>
    );
  }

  return (
    <HiringCtaLink
      href={href}
      source={`footer_${label.toLowerCase().replace(/\s+/g, '_')}`}
      className="landing-footer__link"
    >
      <span className="landing-footer__link-text">{children}</span>
    </HiringCtaLink>
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

      <div className="landing-footer__inner">
        <div className="landing-footer__grid-main">
          <div className="landing-footer__brand">
            <NexaLogo
              size="footer"
              className="landing-footer__logo"
              id="landing-footer-brand"
            />

            <p className="landing-footer__desc">{footerBrand.description}</p>

            <div className="landing-footer__cta-block">
              <p className="landing-footer__cta-eyebrow">{footerBrand.ctaEyebrow}</p>
              <HiringCtaButton
                source="footer_primary_cta"
                className="landing-footer__cta hero-cta-primary inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white sm:w-fit sm:text-[13px]"
              >
                {footerBrand.ctaLabel}
                <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
              </HiringCtaButton>
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} className="landing-footer__column" aria-label={column.title}>
              <h3 className="landing-footer__column-title">{column.title}</h3>
              <ul className="landing-footer__links">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label}>
                      {link.label}
                    </FooterLink>
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
