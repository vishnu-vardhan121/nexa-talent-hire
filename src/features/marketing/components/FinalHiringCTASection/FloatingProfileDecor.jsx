import { Check, UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';

const DECOR_CARDS = [
  {
    position: 'final-hiring-cta__float--tl',
    role: 'Full Stack',
    skills: ['React', 'Node'],
    delay: '0s',
  },
  {
    position: 'final-hiring-cta__float--tr',
    role: 'Data Analyst',
    skills: ['SQL', 'Python'],
    delay: '1.2s',
  },
  {
    position: 'final-hiring-cta__float--bl',
    role: 'UI/UX',
    skills: ['Figma', 'UX'],
    delay: '2.4s',
  },
  {
    position: 'final-hiring-cta__float--br',
    role: 'Python Dev',
    skills: ['Django', 'APIs'],
    delay: '0.8s',
  },
];

export default function FloatingProfileDecor() {
  return (
    <div className="final-hiring-cta__floats" aria-hidden>
      {DECOR_CARDS.map((card) => (
        <div
          key={card.position}
          className={cn('final-hiring-cta__float', card.position)}
          style={{ '--float-delay': card.delay }}
        >
          <div className="final-hiring-cta__float-card">
            <span className="final-hiring-cta__float-avatar">
              <UserRound className="h-3.5 w-3.5" strokeWidth={1.75} />
            </span>
            <div className="final-hiring-cta__float-body">
              <span className="final-hiring-cta__float-role">{card.role}</span>
              <span className="final-hiring-cta__float-verified">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
                Verified
              </span>
              <span className="final-hiring-cta__float-skills">
                {card.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
