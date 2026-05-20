import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import SelectOrCreateInput from '@/components/landing/SelectOrCreateInput';
import {
  EXPERIENCE_LEVEL_OPTIONS,
  HIRING_MODAL_COPY,
  JOINING_TIMELINE_OPTIONS,
  LOCATION_PREFERENCE_SUGGESTIONS,
  ROLE_HIRING_SUGGESTIONS,
} from '@/data/marketing/hiringRequirementForm';
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM = {
  company_name: '',
  contact_person: '',
  work_email: '',
  phone: '',
  role_hiring_for: '',
  number_of_openings: '',
  experience_level: '',
  location_preference: '',
  joining_timeline: '',
  requirement_details: '',
};

const inputClass =
  'hiring-modal__input w-full min-w-0 rounded-xl border px-3.5 py-2.5 text-sm text-[#F8FAFC] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#94A3B8] focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/25';

function Field({ id, label, required, error, className, children }) {
  return (
    <div className={cn('hiring-modal__field', className)}>
      <label htmlFor={id} className="hiring-modal__label">
        {label}
        {required ? <span className="hiring-modal__required"> *</span> : null}
      </label>
      {children}
      {error ? <p className="hiring-modal__field-error">{error}</p> : null}
    </div>
  );
}

export default function HiringRequirementModal({ open, source, onClose }) {
  const titleId = useId();
  const panelRef = useRef(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const resetForm = useCallback(() => {
    setForm(INITIAL_FORM);
    setFieldErrors({});
    setSubmitError('');
    setSuccess(false);
  }, []);

  useEffect(() => {
    if (!open) {
      resetForm();
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    const timer = window.setTimeout(() => {
      const first = panelRef.current?.querySelector('input, select, textarea');
      first?.focus();
    }, 80);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(timer);
    };
  }, [open, onClose, resetForm]);

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validate = () => {
    const errors = {};
    if (!form.company_name.trim()) errors.company_name = 'Company name is required.';
    if (!form.contact_person.trim()) errors.contact_person = 'Your name is required.';
    if (!form.work_email.trim() || !EMAIL_REGEX.test(form.work_email.trim())) {
      errors.work_email = 'A valid work email is required.';
    }
    if (!form.phone.trim()) errors.phone = 'Phone number is required.';
    if (!form.role_hiring_for.trim()) {
      errors.role_hiring_for = 'Please select or enter a role.';
    }

    if (form.number_of_openings !== '') {
      const n = Number(form.number_of_openings);
      if (!Number.isInteger(n) || n < 1) {
        errors.number_of_openings = 'Enter a whole number of at least 1.';
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError('');
    if (!validate()) return;

    setSubmitting(true);
    const openings =
      form.number_of_openings === '' ? null : parseInt(form.number_of_openings, 10);

    try {
      const { data, error } = await supabase.rpc('submit_nexa_hiring_lead', {
        p_company_name: form.company_name.trim(),
        p_contact_person: form.contact_person.trim(),
        p_work_email: form.work_email.trim(),
        p_phone: form.phone.trim(),
        p_role_hiring_for: form.role_hiring_for.trim(),
        p_number_of_openings: openings,
        p_experience_level: form.experience_level || null,
        p_location_preference: form.location_preference.trim() || null,
        p_joining_timeline: form.joining_timeline || null,
        p_requirement_details: form.requirement_details.trim() || null,
        p_source: source || 'nexa_landing_page',
      });

      if (error) {
        console.error('[NEXA hiring lead]', error);
        setSubmitError('Something went wrong. Please try again in a moment.');
        return;
      }

      if (!data?.ok) {
        setSubmitError(data?.error || 'Unable to submit your requirement. Please check the form and try again.');
        return;
      }

      setSuccess(true);
    } catch (err) {
      console.error('[NEXA hiring lead]', err);
      setSubmitError('Something went wrong. Please try again in a moment.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  if (!open) return null;

  return (
    <div
      className="hiring-modal"
      role="presentation"
      onClick={handleClose}
    >
      <div
        ref={panelRef}
        className={cn('hiring-modal__panel', open && 'hiring-modal__panel--open')}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="hiring-modal__close"
          onClick={handleClose}
          aria-label="Close hiring requirement form"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        {success ? (
          <div className="hiring-modal__success">
            <CheckCircle2 className="h-12 w-12 text-[#22C55E]" aria-hidden />
            <h2 id={titleId} className="hiring-modal__title mt-4">
              {HIRING_MODAL_COPY.successTitle}
            </h2>
            <p className="hiring-modal__subtitle mt-3">{HIRING_MODAL_COPY.successMessage}</p>
            <button type="button" className="hiring-modal__submit mt-8" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id={titleId} className="hiring-modal__title pr-10">
              {HIRING_MODAL_COPY.title}
            </h2>
            <p className="hiring-modal__subtitle">{HIRING_MODAL_COPY.subtitle}</p>

            <form className="hiring-modal__form mt-6" onSubmit={handleSubmit} noValidate>
              <div className="hiring-modal__grid">
                <Field id="company_name" label="Company Name" required error={fieldErrors.company_name}>
                  <input
                    id="company_name"
                    className={inputClass}
                    value={form.company_name}
                    onChange={(e) => setField('company_name', e.target.value)}
                    autoComplete="organization"
                  />
                </Field>

                <Field id="contact_person" label="Your Name" required error={fieldErrors.contact_person}>
                  <input
                    id="contact_person"
                    className={inputClass}
                    value={form.contact_person}
                    onChange={(e) => setField('contact_person', e.target.value)}
                    autoComplete="name"
                  />
                </Field>

                <Field id="work_email" label="Work Email" required error={fieldErrors.work_email}>
                  <input
                    id="work_email"
                    type="email"
                    className={inputClass}
                    value={form.work_email}
                    onChange={(e) => setField('work_email', e.target.value)}
                    autoComplete="email"
                  />
                </Field>

                <Field id="phone" label="Phone Number" required error={fieldErrors.phone}>
                  <input
                    id="phone"
                    type="tel"
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => setField('phone', e.target.value)}
                    autoComplete="tel"
                  />
                </Field>

                <Field
                  id="role_hiring_for"
                  label="Role Hiring For"
                  required
                  error={fieldErrors.role_hiring_for}
                >
                  <SelectOrCreateInput
                    id="role_hiring_for"
                    listId="role-hiring-for-suggestions"
                    value={form.role_hiring_for}
                    onChange={(value) => setField('role_hiring_for', value)}
                    suggestions={ROLE_HIRING_SUGGESTIONS}
                    placeholder="Select or type role"
                    className={inputClass}
                  />
                </Field>

                <Field
                  id="number_of_openings"
                  label="Number of Openings"
                  error={fieldErrors.number_of_openings}
                >
                  <input
                    id="number_of_openings"
                    type="number"
                    min={1}
                    className={inputClass}
                    value={form.number_of_openings}
                    onChange={(e) => setField('number_of_openings', e.target.value)}
                  />
                </Field>

                <Field id="experience_level" label="Experience Level">
                  <select
                    id="experience_level"
                    className={cn(inputClass, 'hiring-modal__select')}
                    value={form.experience_level}
                    onChange={(e) => setField('experience_level', e.target.value)}
                  >
                    <option value="">Select experience</option>
                    {EXPERIENCE_LEVEL_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="location_preference" label="Location Preference">
                  <SelectOrCreateInput
                    id="location_preference"
                    listId="location-preference-suggestions"
                    value={form.location_preference}
                    onChange={(value) => setField('location_preference', value)}
                    suggestions={LOCATION_PREFERENCE_SUGGESTIONS}
                    placeholder="Select or type location"
                    className={inputClass}
                  />
                </Field>

                <Field id="joining_timeline" label="Joining Timeline" className="hiring-modal__field--full">
                  <select
                    id="joining_timeline"
                    className={cn(inputClass, 'hiring-modal__select')}
                    value={form.joining_timeline}
                    onChange={(e) => setField('joining_timeline', e.target.value)}
                  >
                    <option value="">Select timeline</option>
                    {JOINING_TIMELINE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  id="requirement_details"
                  label="Requirement Details"
                  className="hiring-modal__field--full"
                >
                  <textarea
                    id="requirement_details"
                    rows={4}
                    className={cn(inputClass, 'hiring-modal__textarea resize-y min-h-[6rem]')}
                    placeholder="Skills, budget, interview process, or any specifics…"
                    value={form.requirement_details}
                    onChange={(e) => setField('requirement_details', e.target.value)}
                  />
                </Field>
              </div>

              {submitError ? <p className="hiring-modal__submit-error">{submitError}</p> : null}

              <div className="hiring-modal__actions">
                <button type="button" className="hiring-modal__cancel" onClick={handleClose}>
                  Cancel
                </button>
                <button type="submit" className="hiring-modal__submit" disabled={submitting}>
                  {submitting ? 'Submitting…' : 'Submit requirement'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
