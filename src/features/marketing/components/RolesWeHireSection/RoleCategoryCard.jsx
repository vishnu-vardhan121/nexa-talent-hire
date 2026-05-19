import {
  BarChart3,
  Briefcase,
  Check,
  CheckCircle2,
  Code2,
  Layers,
  Megaphone,
  PenTool,
  Server,
  Terminal,
  Users,
} from 'lucide-react';
import { ROLES_WE_HIRE_COPY } from '@/data/marketing/rolesWeHire';
import { cn } from '@/lib/utils';

const ICON_MAP = {
  code: Code2,
  layers: Layers,
  terminal: Terminal,
  server: Server,
  chart: BarChart3,
  'check-circle': CheckCircle2,
  pen: PenTool,
  megaphone: Megaphone,
  users: Users,
  briefcase: Briefcase,
};

export default function RoleCategoryCard({ role, isActive, onSelect, staggerIndex, isVisible }) {
  const Icon = ICON_MAP[role.icon] ?? Code2;

  return (
    <button
      type="button"
      className={cn(
        'roles-we-hire__card group text-left',
        isActive && 'roles-we-hire__card--active',
        isVisible && `roles-we-hire__card--${staggerIndex}`,
        role.accent && `roles-we-hire__card--${role.accent}`,
      )}
      onClick={() => onSelect(role.id)}
      aria-pressed={isActive}
      aria-label={`Preview ${role.title}`}
    >
      {isActive && (
        <span className="roles-we-hire__card-check" aria-hidden>
          <Check className="h-3 w-3" strokeWidth={3} />
        </span>
      )}

      <span
        className={cn(
          'roles-we-hire__card-icon',
          isActive && 'roles-we-hire__card-icon--active',
        )}
        aria-hidden
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>

      <h3 className="roles-we-hire__card-title">{role.title}</h3>

      <div className="roles-we-hire__card-chips" aria-hidden>
        {role.skills.map((skill) => (
          <span key={skill} className="roles-we-hire__card-chip">
            {skill}
          </span>
        ))}
      </div>

      <p className="roles-we-hire__card-desc">{role.description}</p>

      <span className="roles-we-hire__card-badge">
        <span className="roles-we-hire__card-badge-dot" aria-hidden />
        {ROLES_WE_HIRE_COPY.preScreenedLabel}
      </span>
    </button>
  );
}
