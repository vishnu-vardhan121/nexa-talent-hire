import { cn } from '@/lib/utils';

/**
 * Hero + glass content card for static marketing pages.
 * @param {boolean} [legal] — narrower readable width for policy pages
 */
export default function StaticPageLayout({ eyebrow, title, subtitle, children, legal = false }) {
  return (
    <article className={cn('static-page', legal && 'static-page--legal')}>
      <header className="static-page__header">
        {eyebrow ? <p className="static-page__eyebrow">{eyebrow}</p> : null}
        <h1 className="static-page__title">{title}</h1>
        {subtitle ? <p className="static-page__subtitle">{subtitle}</p> : null}
      </header>
      <div className={cn('static-page__card', legal && 'static-page__card--legal')}>{children}</div>
    </article>
  );
}
