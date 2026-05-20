import { SITE } from '@/config/site';

/** Production site URL — set VITE_SITE_URL in env; never use localhost here. */
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL || `https://${SITE.domain}`).replace(/\/$/, '');

export const SEO_DEFAULTS = {
  siteName: 'NEXA Talent Hire',
  title: 'NEXA Talent Hire | Hire Pre-Screened & Interview-Ready Candidates in India',
  description:
    'Hire verified, pre-screened, job-ready candidates across India with NEXA Talent Hire. Get role-based shortlists for developers, analysts, QA, and business roles.',
  ogTitle: 'NEXA Talent Hire | Hire Verified, Pre-Screened Talent',
  ogDescription:
    'Connect with job-ready candidates across India through verified profiles, role-based screening, and assisted hiring support.',
  ogImage: `${SITE_URL}/nexa-logo-full.png`,
  twitterCard: 'summary_large_image',
  email: SITE.contactEmail,
};

export const SEO_PAGES = {
  home: {
    path: '/',
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    ogTitle: SEO_DEFAULTS.ogTitle,
    ogDescription: SEO_DEFAULTS.ogDescription,
    ogImage: SEO_DEFAULTS.ogImage,
  },
  about: {
    path: '/about',
    title: 'About NEXA Talent Hire | Verified Talent Hiring Platform',
    description:
      'Learn about NEXA Talent Hire, a hiring platform helping companies access verified, pre-screened, job-ready candidates across India.',
  },
  contact: {
    path: '/contact',
    title: 'Contact NEXA Talent Hire | Hire Pre-Screened Candidates',
    description:
      'Contact NEXA Talent Hire to share your hiring requirements and get matched with verified, interview-ready candidates across India.',
  },
  privacy: {
    path: '/privacy-policy',
    title: 'Privacy Policy | NEXA Talent Hire',
    description:
      'Read how NEXA Talent Hire collects, uses, and protects employer, recruiter, and candidate-related information.',
  },
  terms: {
    path: '/terms-and-conditions',
    title: 'Terms & Conditions | NEXA Talent Hire',
    description: 'Read the terms for using the NEXA Talent Hire website and hiring enquiry services.',
  },
};

export const SEO_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-and-conditions', changefreq: 'yearly', priority: '0.3' },
];

export const HOME_STRUCTURED_DATA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_DEFAULTS.siteName,
    url: SITE_URL,
    logo: `${SITE_URL}/nexa-logo-full.png`,
    email: SEO_DEFAULTS.email,
    description:
      'NEXA Talent Hire helps companies hire verified, pre-screened, job-ready candidates across India.',
    areaServed: { '@type': 'Country', name: 'India' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO_DEFAULTS.siteName,
    url: SITE_URL,
    description: SEO_DEFAULTS.description,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pre-Screened Candidate Hiring Support',
    provider: { '@type': 'Organization', name: SEO_DEFAULTS.siteName, url: SITE_URL },
    description:
      'NEXA Talent Hire helps companies access verified, interview-ready candidates through role-based screening, candidate matching, and assisted hiring support.',
    areaServed: { '@type': 'Country', name: 'India' },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Employers, HR teams, recruiters, startups, and companies',
    },
  },
];
