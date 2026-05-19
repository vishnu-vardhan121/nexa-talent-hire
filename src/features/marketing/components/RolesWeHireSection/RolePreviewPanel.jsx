import { ArrowRight, Check } from 'lucide-react';
import { ROLES_WE_HIRE_COPY } from '@/data/marketing/rolesWeHire';
import { cn } from '@/lib/utils';

export default function RolePreviewPanel({ role, className }) {
  if (!role) return null;

  return (
    <aside
      className={cn('roles-we-hire__preview', className)}
      aria-live="polite"
      aria-atomic="true"
    >
      <div key={role.id} className="roles-we-hire__preview-inner">
        <div className="roles-we-hire__preview-glow" aria-hidden />

        <header className="roles-we-hire__preview-header">
          <p className="roles-we-hire__preview-label">{ROLES_WE_HIRE_COPY.previewTitle}</p>
          <h3 className="roles-we-hire__preview-role">{role.title}</h3>
          <p className="roles-we-hire__preview-desc">{role.description}</p>
        </header>

        <section className="roles-we-hire__preview-block" aria-labelledby="rwh-preview-skills">
          <h4 id="rwh-preview-skills" className="roles-we-hire__preview-block-title">
            Skills
          </h4>
          <div className="roles-we-hire__preview-chips" role="list">
            {role.previewSkills.map((skill, index) => (
              <span
                key={skill}
                className={cn(
                  'roles-we-hire__preview-chip',
                  `roles-we-hire__preview-chip--${index + 1}`,
                )}
                role="listitem"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="roles-we-hire__preview-block" aria-labelledby="rwh-preview-signals">
          <h4 id="rwh-preview-signals" className="roles-we-hire__preview-block-title">
            Candidate Signals
          </h4>
          <ul className="roles-we-hire__preview-signals">
            {role.candidateSignals.map((signal) => (
              <li key={signal} className="roles-we-hire__preview-signal">
                <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.75} aria-hidden />
                {signal}
              </li>
            ))}
          </ul>
        </section>

        <section className="roles-we-hire__preview-block" aria-labelledby="rwh-preview-fit">
          <h4 id="rwh-preview-fit" className="roles-we-hire__preview-block-title">
            Hiring Fit
          </h4>
          <p className="roles-we-hire__preview-fit">{role.hiringFit}</p>
        </section>

        <a
          href={ROLES_WE_HIRE_COPY.ctaHref}
          className="roles-we-hire__preview-cta hero-cta-primary inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white sm:text-[15px]"
        >
          {ROLES_WE_HIRE_COPY.cta}
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
        </a>
      </div>
    </aside>
  );
}
