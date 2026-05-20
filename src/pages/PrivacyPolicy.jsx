import StaticPageLayout from '@/components/common/StaticPageLayout';
import { SITE } from '@/config/site';
import { SEO_PAGES } from '@/config/seo';
import { useSeo } from '@/lib/useSeo';

export default function PrivacyPolicyPage() {
  useSeo(SEO_PAGES.privacy);

  return (
    <StaticPageLayout
      legal
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      subtitle="This policy explains how NEXA Talent Hire collects, uses, and protects information shared by companies, recruiters, and website visitors."
    >
      <p className="static-page__meta">Effective Date: 2026</p>

      <section className="static-page__section">
        <h2 className="static-page__section-title">1. Information We Collect</h2>
        <p className="static-page__text">
          We may collect information such as name, company name, work email, phone number, hiring
          requirements, role details, and messages submitted through our website forms.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">2. How We Use Information</h2>
        <ul className="static-page__list">
          <li>To respond to hiring enquiries</li>
          <li>To understand employer requirements</li>
          <li>To match companies with relevant candidates</li>
          <li>To provide hiring support and follow-ups</li>
          <li>To improve our services and website experience</li>
        </ul>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">3. Candidate and Employer Data</h2>
        <p className="static-page__text">
          Information shared with NEXA Talent Hire is used only for hiring-related communication,
          candidate matching, and operational support.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">4. Data Sharing</h2>
        <p className="static-page__text">
          We do not sell personal data. Information may be shared internally with authorized team
          members for hiring support. Candidate details may be shared with employers only as part of
          the hiring process.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">5. Data Security</h2>
        <p className="static-page__text">
          We take reasonable measures to protect submitted information from unauthorized access,
          misuse, or disclosure.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">6. Cookies and Analytics</h2>
        <p className="static-page__text">
          Our website may use basic cookies or analytics tools to understand website performance
          and user experience.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">7. Data Retention</h2>
        <p className="static-page__text">
          We may retain submitted information for operational, legal, and hiring support purposes
          unless deletion is requested.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">8. Contact</h2>
        <p className="static-page__text">
          For privacy-related questions, contact us at{' '}
          <a href={`mailto:${SITE.contactEmail}`} className="static-page__inline-link">
            {SITE.contactEmail}
          </a>
        </p>
      </section>
    </StaticPageLayout>
  );
}
