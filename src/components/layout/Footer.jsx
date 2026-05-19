import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import { SITE } from '@/config/site';

const FOOTER_COLUMNS = [
  {
    title: 'For companies',
    links: [
      { label: 'Post a job', to: '/dashboard' },
      { label: 'Browse talent', to: '/talent' },
      { label: 'HR dashboard', to: '/dashboard' },
    ],
  },
  {
    title: 'For candidates',
    links: [
      { label: 'Create profile', to: '/talent' },
      { label: 'Browse jobs', to: '/talent' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/' },
      { label: 'Contact', to: '/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(83,74,183,0.3)] bg-nexa-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo asLink={false} />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-nexa-gray">
              India&apos;s pre-screened talent network for companies that want interview-ready
              candidates—not endless resume noise.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h5 className="mb-4 text-sm font-bold text-white">{col.title}</h5>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-nexa-gray transition-colors hover:text-nexa-blue-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-nexa-gray-dark">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved. | {SITE.domain}
          </p>
          <p className="text-sm text-nexa-purple-light">Next-gen talent acquisition</p>
        </div>
      </div>
    </footer>
  );
}
