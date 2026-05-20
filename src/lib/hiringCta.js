const HIRING_MODAL_HREFS = new Set(['#get-matched', '#final-hiring-cta']);

/** Returns true when this href should open the hiring requirement modal instead of navigating. */
export function shouldOpenHiringModal(href) {
  if (!href || typeof href !== 'string') return false;
  const normalized = href.trim().toLowerCase();
  return HIRING_MODAL_HREFS.has(normalized);
}
