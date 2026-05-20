export const OTHER_OPTION = 'Other';

/** Preset suggestions for combobox (no "Other" — user can type any value). */
export const ROLE_HIRING_SUGGESTIONS = [
  'Frontend Developer',
  'Full Stack Developer',
  'Python Developer',
  'Java Developer',
  'Data Analyst',
  'QA Tester',
  'UI/UX Designer',
  'Digital Marketing Executive',
  'Business Development Executive',
];

export const ROLE_HIRING_OPTIONS = [...ROLE_HIRING_SUGGESTIONS, OTHER_OPTION];

export const EXPERIENCE_LEVEL_OPTIONS = [
  'Fresher',
  '0–1 Years',
  '1–3 Years',
  '3–5 Years',
  '5+ Years',
];

export const LOCATION_PREFERENCE_SUGGESTIONS = [
  'Remote',
  'Hyderabad',
  'Bengaluru',
  'Chennai',
  'Pune',
  'Mumbai',
  'Delhi NCR',
  'Pan-India',
];

export const LOCATION_PREFERENCE_OPTIONS = [...LOCATION_PREFERENCE_SUGGESTIONS, OTHER_OPTION];

export const JOINING_TIMELINE_OPTIONS = [
  'Immediate',
  'Within 15 Days',
  'Within 30 Days',
  'Flexible',
];

export const HIRING_MODAL_COPY = {
  title: 'Get Matched with Verified Candidates',
  subtitle:
    'Share your hiring requirement and our team will help you find pre-screened, interview-ready profiles.',
  successTitle: 'Requirement received',
  successMessage:
    'Your requirement has been received. Our hiring team will contact you shortly with matched candidate options.',
};
