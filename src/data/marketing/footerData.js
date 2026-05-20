import { HIRING_TEAM_MAILTO } from '@/config/site';

export const footerBrand = {
  name: 'NEXA Talent Hire',
  description:
    'Helping companies hire verified, job-ready candidates faster through pre-screened profiles, role-based matching, and assisted hiring support.',
  tagline: 'Hire smarter. Shortlist faster.',
  ctaEyebrow: 'Ready to hire?',
  ctaLabel: 'Get Matched Candidates',
  ctaHref: '#get-matched',
};

export const footerColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'How It Works', href: '#trusted-hiring-network' },
      { label: 'Talent Pool', href: '#talent-pool' },
      { label: 'Roles We Hire', href: '#roles-we-hire' },
      { label: 'Verified Profiles', href: '#verified-profile-preview' },
      { label: 'Hiring Partners', href: '#hiring-partner-ecosystem' },
    ],
  },
  {
    title: 'For Employers',
    links: [
      { label: 'Post Requirement', href: '#get-matched' },
      { label: 'Get Matched Candidates', href: '#get-matched' },
      { label: 'Bulk Hiring', href: '#get-matched' },
      { label: 'Schedule Demo', href: HIRING_TEAM_MAILTO },
      { label: 'Talk to Hiring Team', href: HIRING_TEAM_MAILTO },
    ],
  },
  {
    title: 'Talent Categories',
    links: [
      { label: 'Frontend Developers', href: '#roles-we-hire' },
      { label: 'Full Stack Developers', href: '#roles-we-hire' },
      { label: 'Data Analysts', href: '#roles-we-hire' },
      { label: 'QA Testers', href: '#roles-we-hire' },
      { label: 'Digital Marketing', href: '#roles-we-hire' },
      { label: 'Business Development', href: '#roles-we-hire' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    ],
  },
];

export const footerBottom = {
  copyright: '© 2026 NEXA Talent Hire. All rights reserved.',
  tagline: 'Hire smarter. Shortlist faster.',
};
