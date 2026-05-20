import StaticPageLayout from '@/components/common/StaticPageLayout';
import { SITE } from '@/config/site';
import { SEO_PAGES } from '@/config/seo';
import { useSeo } from '@/lib/useSeo';

export default function TermsAndConditionsPage() {
  useSeo(SEO_PAGES.terms);

  return (
    <StaticPageLayout
      legal
      eyebrow="Terms & Conditions"
      title="Terms & Conditions"
      subtitle="These terms outline the basic conditions for using the NEXA Talent Hire website and hiring enquiry services."
    >
      <p className="static-page__meta">Effective Date: 2026</p>

      <section className="static-page__section">
        <h2 className="static-page__section-title">1. Use of Website</h2>
        <p className="static-page__text">
          By using the NEXA Talent Hire website, you agree to use it for lawful hiring, recruitment,
          and business enquiry purposes only.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">2. Employer Enquiries</h2>
        <p className="static-page__text">
          Companies and recruiters may submit hiring requirements through our website. Submitting a
          requirement does not guarantee candidate availability, interview selection, or hiring
          outcome.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">3. Candidate Matching</h2>
        <p className="static-page__text">
          NEXA Talent Hire helps connect employers with pre-screened candidate profiles based on
          available information, role requirements, and candidate readiness. Final hiring decisions
          are made by the employer.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">4. Accuracy of Information</h2>
        <p className="static-page__text">
          Employers are responsible for providing accurate company, contact, and hiring requirement
          information. Incorrect or incomplete details may affect candidate matching and follow-up.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">5. No Hiring Guarantee</h2>
        <p className="static-page__text">
          While NEXA Talent Hire aims to provide relevant candidate shortlists, we do not guarantee
          a specific hiring result, joining date, or candidate acceptance.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">6. Intellectual Property</h2>
        <p className="static-page__text">
          All website content, branding, design, and materials belong to NEXA Talent Hire or its
          respective owners and should not be copied or reused without permission.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">7. Limitation of Liability</h2>
        <p className="static-page__text">
          NEXA Talent Hire is not responsible for indirect losses, hiring delays, or decisions made
          by employers or candidates during the recruitment process.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">8. Changes to Terms</h2>
        <p className="static-page__text">
          We may update these terms from time to time. Continued use of the website means you accept
          the updated terms.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">9. Contact</h2>
        <p className="static-page__text">
          For questions about these terms, contact{' '}
          <a href={`mailto:${SITE.contactEmail}`} className="static-page__inline-link">
            {SITE.contactEmail}
          </a>
        </p>
      </section>
    </StaticPageLayout>
  );
}
