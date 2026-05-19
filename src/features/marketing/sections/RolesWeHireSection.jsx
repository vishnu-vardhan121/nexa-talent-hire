import { useMemo, useState } from 'react';
import RoleCategoryCard from '@/features/marketing/components/RolesWeHireSection/RoleCategoryCard';
import RolePreviewPanel from '@/features/marketing/components/RolesWeHireSection/RolePreviewPanel';
import {
  DEFAULT_ROLE_ID,
  ROLES_WE_HIRE_COPY,
  rolesWeHire,
} from '@/data/marketing/rolesWeHire';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils';

export default function RolesWeHireSection() {
  const [sectionRef, isVisible] = useInView();
  const [selectedId, setSelectedId] = useState(DEFAULT_ROLE_ID);

  const selectedRole = useMemo(
    () => rolesWeHire.find((r) => r.id === selectedId) ?? rolesWeHire[0],
    [selectedId],
  );

  return (
    <section
      ref={sectionRef}
      id="roles-we-hire"
      className={cn(
        'roles-we-hire relative overflow-hidden py-[4.5rem] lg:py-[6.875rem]',
        isVisible && 'roles-we-hire--visible',
      )}
      aria-labelledby="roles-we-hire-heading"
    >
      <div className="roles-we-hire__bg" aria-hidden>
        <div className="roles-we-hire__seam" />
        <div className="roles-we-hire__glow roles-we-hire__glow--cyan" />
        <div className="roles-we-hire__glow roles-we-hire__glow--violet" />
        <div className="roles-we-hire__glow roles-we-hire__glow--blue" />
        <div className="roles-we-hire__grid-bg" />
        <div className="roles-we-hire__vignette" />
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-[80rem] px-4 sm:px-6 lg:px-10">
        <header className="roles-we-hire__header mx-auto max-w-[40rem] text-center">
          <p className="roles-we-hire__eyebrow inline-flex items-center gap-2.5 rounded-full border border-[rgba(56,189,248,0.22)] bg-[rgba(15,23,42,0.72)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#CBD5E1] backdrop-blur-md sm:text-xs">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]"
              aria-hidden
            />
            {ROLES_WE_HIRE_COPY.eyebrow}
          </p>
          <h2
            id="roles-we-hire-heading"
            className="roles-we-hire__heading mt-4 font-display text-[clamp(1.625rem,3.2vw+0.5rem,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-[#F8FAFC] sm:mt-5"
          >
            {ROLES_WE_HIRE_COPY.heading}
          </h2>
          <p className="roles-we-hire__subtitle mx-auto mt-3 max-w-[36rem] text-[0.9375rem] leading-[1.7] text-[#94A3B8] sm:mt-4 sm:text-[15px]">
            {ROLES_WE_HIRE_COPY.subtitle}
          </p>
        </header>

        <div className="roles-we-hire__layout mt-10 lg:mt-12">
          <div
            className="roles-we-hire__cards grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Talent role categories"
          >
            {rolesWeHire.map((role, index) => (
              <RoleCategoryCard
                key={role.id}
                role={role}
                isActive={selectedId === role.id}
                onSelect={setSelectedId}
                staggerIndex={index + 1}
                isVisible={isVisible}
              />
            ))}
          </div>

          <RolePreviewPanel role={selectedRole} className="roles-we-hire__preview-wrap" />
        </div>
      </div>
    </section>
  );
}
