import { HIRING_FLOW_STATS } from '@/data/marketing/hiringProblem';
import { cn } from '@/lib/utils';

const ILLUSTRATION_SRC = '/images/nexa-hiring-flow-visual.png';

const TONE_STYLES = {
  warn: 'hp-visual__stat--warn',
  brand: 'hp-visual__stat--brand',
  success: 'hp-visual__stat--success',
};

export default function HiringProblemVisual({ className }) {
  return (
    <figure className={cn('hp-visual', className)}>
      <div className="hp-visual__frame">
        <img
          src={ILLUSTRATION_SRC}
          alt="Hiring workflow: a pile of unverified resumes passes through NEXA screening and becomes a short list of interview-ready candidates."
          className="hp-visual__img"
          width={1280}
          height={720}
          loading="lazy"
          decoding="async"
        />
        <div className="hp-visual__overlay" aria-hidden>
          <div className="hp-visual__glow" />
        </div>
      </div>

      <figcaption className="hp-visual__caption">
        <ul className="hp-visual__stats">
          {HIRING_FLOW_STATS.map((stat, index) => (
            <li
              key={stat.label}
              className={cn('hp-visual__stat', TONE_STYLES[stat.tone], `hp-visual__stat--${index + 1}`)}
            >
              {stat.value ? (
                <>
                  <span className="hp-visual__stat-value">{stat.value}</span>
                  <span className="hp-visual__stat-label">{stat.label}</span>
                </>
              ) : (
                <span className="hp-visual__stat-value hp-visual__stat-value--solo">{stat.label}</span>
              )}
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
