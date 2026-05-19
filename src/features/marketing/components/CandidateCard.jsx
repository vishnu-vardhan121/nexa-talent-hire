import { Check } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CandidateCard({ candidate, onAction, actionLabel = 'View profile' }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-[rgba(83,74,183,0.3)] bg-nexa-card p-6 transition-all duration-250 hover:-translate-y-0.5 hover:border-nexa-purple-light">
      <div
        className="absolute top-0 right-0 left-0 h-0.5 bg-linear-to-r from-nexa-purple to-nexa-blue"
        aria-hidden
      />

      <div className="mb-4 flex items-center gap-3.5">
        <span
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full font-display text-lg font-bold"
          style={{ background: candidate.avatarBg, color: candidate.avatarColor }}
          aria-hidden
        >
          {candidate.initials}
        </span>
        <div>
          <h4 className="text-base font-bold text-white">{candidate.name}</h4>
          <p className="text-sm text-nexa-blue-light">{candidate.role}</p>
        </div>
      </div>

      <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[rgba(29,158,117,0.3)] bg-[rgba(29,158,117,0.12)] px-2.5 py-1 text-[11px] font-semibold text-nexa-green">
        <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
        Verified & prescreened
      </span>

      <div className="mb-3.5 grid grid-cols-2 gap-2">
        <Detail label="Experience" value={candidate.experience} />
        <Detail label="Location" value={candidate.location} />
        <Detail label="Education" value={candidate.education} />
        <Detail label="Availability" value={candidate.availability} available />
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {candidate.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-xl border border-[rgba(83,74,183,0.3)] bg-[rgba(83,74,183,0.18)] px-2.5 py-0.5 text-[11px] text-nexa-blue-light"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-white/5 pt-3.5">
        <div>
          <p className="text-sm font-bold text-nexa-amber">{candidate.salary}</p>
          <p className="text-xs font-semibold text-nexa-green">⚡ {candidate.matchScore}% match</p>
        </div>
        <Button size="sm" onClick={() => onAction?.(candidate)}>
          {actionLabel}
        </Button>
      </div>
    </article>
  );
}

function Detail({ label, value, available }) {
  return (
    <div className="text-xs text-nexa-gray">
      <strong className="block text-[13px] font-semibold text-white">
        {available ? (
          <>
            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-nexa-green" aria-hidden />
            {value}
          </>
        ) : (
          value
        )}
      </strong>
      {label}
    </div>
  );
}
