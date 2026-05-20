import StaticPageLayout from '@/components/common/StaticPageLayout';
import { usePageTitle } from '@/lib/usePageTitle';

export default function AboutPage() {
  usePageTitle('About | NEXA Talent Hire');

  return (
    <StaticPageLayout
      eyebrow="About NEXA Talent Hire"
      title="Helping Companies Hire Verified Talent Faster"
      subtitle="NEXA Talent Hire is built for companies, HR teams, and recruiters who want access to pre-screened, interview-ready candidates without wasting time on resume noise."
    >
      <section className="static-page__section">
        <h2 className="static-page__section-title">Who We Are</h2>
        <p className="static-page__text">
          NEXA Talent Hire is a company-side hiring platform designed to help employers discover
          verified, job-ready talent across India. We focus on structured candidate screening,
          role-based matching, and assisted hiring support so companies can move from requirement
          to shortlist faster.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">What We Help With</h2>
        <ul className="static-page__list">
          <li>Access pre-screened candidate profiles</li>
          <li>Match candidates based on role, skills, projects, and availability</li>
          <li>Reduce time spent on irrelevant resumes</li>
          <li>Support hiring for tech, digital, and business roles</li>
          <li>Help companies build cleaner interview pipelines</li>
        </ul>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">Our Mission</h2>
        <p className="static-page__text">
          Our mission is to make hiring simpler, faster, and more reliable by connecting companies
          with candidates who are already evaluated for readiness, communication, and role fit.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__section-title">Why NEXA</h2>
        <ul className="static-page__list">
          <li>Verified talent network</li>
          <li>Pan-India candidate access</li>
          <li>Role-based shortlisting</li>
          <li>Hiring support from requirement to interview coordination</li>
        </ul>
      </section>
    </StaticPageLayout>
  );
}
