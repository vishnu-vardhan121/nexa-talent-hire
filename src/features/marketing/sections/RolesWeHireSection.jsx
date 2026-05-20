import { useMemo, useState } from 'react';
import SectionHeadline from '@/components/marketing/SectionHeadline';
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
        'roles-we-hire marketing-section relative scroll-mt-24',
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

      <div className="marketing-section__container">
        <header className="roles-we-hire__header mx-auto max-w-[min(100%,42rem)] text-center md:max-w-[48rem] lg:max-w-[56rem] xl:max-w-[62rem]">
          <p className="roles-we-hire__eyebrow inline-flex items-center gap-2.5 rounded-full border border-[rgba(56,189,248,0.22)] bg-[rgba(15,23,42,0.72)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#CBD5E1] backdrop-blur-md sm:text-xs">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]"
              aria-hidden
            />
            {ROLES_WE_HIRE_COPY.eyebrow}
          </p>
          <SectionHeadline
            id="roles-we-hire-heading"
            className="roles-we-hire__heading marketing-section-headline--centered marketing-section-headline--roles mt-4 text-pretty sm:mt-5"
          >
            <span className="block sm:inline">{ROLES_WE_HIRE_COPY.headingLead} </span>
            <span className="block sm:inline">{ROLES_WE_HIRE_COPY.headingTrail}</span>
          </SectionHeadline>
          <p className="roles-we-hire__subtitle mx-auto mt-3 max-w-[min(100%,40rem)] text-[0.9375rem] leading-[1.7] text-[#94A3B8] sm:mt-4 sm:max-w-[45rem] sm:text-[15px] lg:max-w-[50rem]">
            {ROLES_WE_HIRE_COPY.subtitle}
          </p>
        </header>

        <div className="roles-we-hire__layout mt-10 lg:mt-12">
          <div
            className="roles-we-hire__cards grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-3"
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
