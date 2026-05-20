import { useEffect } from 'react';
import { SEO_DEFAULTS, SITE_URL } from '@/config/seo';

function upsertMeta(selector, attr, key, value) {
  if (!value) return;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * @param {{
 *   title: string;
 *   description: string;
 *   path?: string;
 *   ogTitle?: string;
 *   ogDescription?: string;
 *   ogImage?: string;
 *   noindex?: boolean;
 * }} seo
 */
export function useSeo({
  title,
  description,
  path = '/',
  ogTitle,
  ogDescription,
  ogImage = SEO_DEFAULTS.ogImage,
  noindex = false,
}) {
  useEffect(() => {
    const canonical = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
    const resolvedOgTitle = ogTitle || title;
    const resolvedOgDescription = ogDescription || description;

    document.title = title;
    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertLink('canonical', canonical);

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', resolvedOgTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', resolvedOgDescription);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SEO_DEFAULTS.siteName);

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', SEO_DEFAULTS.twitterCard);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', resolvedOgTitle);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', resolvedOgDescription);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    if (noindex) {
      upsertMeta('meta[name="robots"]', 'name', 'robots', 'noindex, nofollow');
    } else {
      const robots = document.querySelector('meta[name="robots"]');
      if (robots) robots.remove();
    }
  }, [title, description, path, ogTitle, ogDescription, ogImage, noindex]);
}
