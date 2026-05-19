import {
  Check,
  CheckCircle2,
  Code2,
  FolderKanban,
  LayoutDashboard,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
} from 'lucide-react';
import {
  preferences,
  profileMeta,
  projects,
  screeningSignals,
  skillChips,
  skills,
} from '@/data/marketing/verifiedProfilePreview';
import { cn } from '@/lib/utils';

const PROJECT_ICONS = [LayoutDashboard, FolderKanban, Code2];

export default function CandidateProfileCard({ isVisible, className }) {
  return (
    <article
      className={cn(
        'verified-profile__card',
        isVisible && 'verified-profile__card--visible',
        className,
      )}
      aria-label="Sample verified candidate profile dashboard"
    >
      <div className="verified-profile__card-grid" aria-hidden />
      <div className="verified-profile__card-glow" aria-hidden />
      <div className="verified-profile__card-shine" aria-hidden />

      <header className="verified-profile__card-header">
        <div className="verified-profile__card-top">
          <span className="verified-profile__verified-badge">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" strokeWidth={2.25} aria-hidden />
            {profileMeta.badge}
          </span>
          <span className="verified-profile__avatar" aria-hidden>
            <UserRound className="h-6 w-6" strokeWidth={1.75} />
          </span>
        </div>

        <div className="verified-profile__card-identity">
          <div className="min-w-0 flex-1">
            <p className="verified-profile__card-label">Role</p>
            <h3 className="verified-profile__card-role">{profileMeta.role}</h3>
          </div>
          <div className="verified-profile__status-group">
            <span className="verified-profile__status-badge">
              <Sparkles className="h-3 w-3 shrink-0" aria-hidden />
              {profileMeta.status}
            </span>
            <span className="verified-profile__role-fit">
              <Target className="h-3 w-3 shrink-0" aria-hidden />
              {profileMeta.roleFit}
            </span>
          </div>
        </div>
      </header>

      <section className="verified-profile__block" aria-labelledby="vp-skills-heading">
        <h4 id="vp-skills-heading" className="verified-profile__block-title">
          Skills
        </h4>
        <div className="verified-profile__chips" role="list" aria-label="Skill tags">
          {skillChips.map((skill, index) => (
            <span
              key={skill}
              className={cn('verified-profile__chip', `verified-profile__chip--${index + 1}`)}
              role="listitem"
            >
              {skill}
            </span>
          ))}
        </div>
        <ul className="verified-profile__bars" aria-label="Skill proficiency">
          {skills.map((skill, index) => (
            <li key={skill.name} className="verified-profile__bar-row">
              <div className="verified-profile__bar-meta">
                <span>{skill.name}</span>
                <span className="verified-profile__bar-check" aria-hidden>
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
              </div>
              <div className="verified-profile__bar-track">
                <span
                  className={cn(
                    'verified-profile__bar-fill',
                    `verified-profile__bar-fill--${index + 1}`,
                  )}
                  style={{ '--bar-target': `${skill.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="verified-profile__block" aria-labelledby="vp-projects-heading">
        <h4 id="vp-projects-heading" className="verified-profile__block-title">
          Project Exposure
        </h4>
        <ul className="verified-profile__projects">
          {projects.map((project, index) => {
            const Icon = PROJECT_ICONS[index] ?? FolderKanban;
            return (
              <li key={project.title}>
                <div className="verified-profile__project-card">
                  <span className="verified-profile__project-icon" aria-hidden>
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="verified-profile__project-title">{project.title}</p>
                    <p className="verified-profile__project-meta">{project.meta}</p>
                  </div>
                  <CheckCircle2 className="verified-profile__project-check h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="verified-profile__block" aria-labelledby="vp-signals-heading">
        <h4 id="vp-signals-heading" className="verified-profile__block-title">
          Screening Signals
        </h4>
        <ul className="verified-profile__signals">
          {screeningSignals.map((signal) => (
            <li key={signal.label} className="verified-profile__signal-row">
              <span className="verified-profile__signal-label">{signal.label}</span>
              <span
                className={cn(
                  'verified-profile__signal-value',
                  `verified-profile__signal-value--${signal.tone}`,
                )}
              >
                <Check className="h-3 w-3 shrink-0" strokeWidth={3} aria-hidden />
                {signal.value}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="verified-profile__prefs" aria-label="Candidate preferences">
        {preferences.map((pref) => (
          <div key={pref.label} className="verified-profile__pref-row">
            <span className="verified-profile__pref-label">
              <MapPin className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
              {pref.label}
            </span>
            <span className="verified-profile__pref-value">{pref.value}</span>
          </div>
        ))}
      </section>
    </article>
  );
}
