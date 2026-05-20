import { useState } from 'react';
import HiringCtaButton from '@/components/landing/HiringCtaButton';
import StaticPageLayout from '@/components/common/StaticPageLayout';
import { SITE } from '@/config/site';
import { usePageTitle } from '@/lib/usePageTitle';
import { cn } from '@/lib/utils';

const INITIAL_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactPage() {
  usePageTitle('Contact | NEXA Talent Hire');
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <StaticPageLayout
      eyebrow="Contact NEXA Talent Hire"
      title="Talk to Our Hiring Team"
      subtitle="Share your hiring requirement or contact our team for support with verified candidate matching."
    >
      <div className="contact-page__grid">
        <div className="contact-page__details">
          <h2 className="static-page__section-title">Contact Details</h2>
          <dl className="contact-page__dl">
            <div className="contact-page__row">
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${SITE.contactEmail}`} className="contact-page__link">
                  {SITE.contactEmail}
                </a>
              </dd>
            </div>
            <div className="contact-page__row">
              <dt>Location</dt>
              <dd>Hyderabad, India</dd>
            </div>
            <div className="contact-page__row">
              <dt>Support</dt>
              <dd>
                Hiring requirements, candidate matching, employer enquiries, and platform support.
              </dd>
            </div>
          </dl>

          <aside className="contact-page__cta-card" aria-labelledby="contact-cta-heading">
            <p className="contact-page__cta-eyebrow">Need candidates faster?</p>
            <h3 id="contact-cta-heading" className="contact-page__cta-title">
              Get Matched Candidates
            </h3>
            <p className="contact-page__cta-desc">
              Share your role requirements and we will help you shortlist verified, interview-ready
              talent.
            </p>
            <HiringCtaButton
              source="contact_page_cta"
              className="hero-cta-primary contact-page__cta-btn inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-white"
            >
              Get Matched Candidates
            </HiringCtaButton>
          </aside>
        </div>

        <div className="contact-page__form-wrap">
          <h2 className="static-page__section-title">Send a Message</h2>
          {submitted ? (
            <p className="contact-page__success" role="status">
              Thank you. Our team will get back to you shortly.
            </p>
          ) : null}
          <form
            className={cn('contact-page__form', submitted && 'contact-page__form--submitted')}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="contact-page__field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact-page__field">
              <label htmlFor="contact-company">Company Name</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div className="contact-page__field">
              <label htmlFor="contact-email">Work Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact-page__field">
              <label htmlFor="contact-phone">Phone Number</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="contact-page__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="contact-page__submit hero-cta-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </StaticPageLayout>
  );
}
