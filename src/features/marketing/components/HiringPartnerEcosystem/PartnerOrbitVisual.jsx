import { useCallback, useMemo, useState } from 'react';
import NexaLogo from '@/components/ui/NexaLogo';
import { partnerLogos } from '@/data/marketing/hiringPartnerEcosystem';
import { usePartnerOrbitBreakpoint } from '@/lib/usePartnerOrbitBreakpoint';
import { cn } from '@/lib/utils';

const INNER_ORBIT_S = 40;
const OUTER_ORBIT_S = 62;

/** Per-logo aspect tuning (rendering only — keeps marks readable) */
const LOGO_SHAPE = {
  'CA Technologies': 'wide',
  'ValueMomentum': 'wide',
  'HackerEarth': 'wide',
  Welldoc: 'wide',
  Mindtree: 'wide',
  Commvault: 'wide',
  YuppTV: 'wide',
  Akamai: 'wide',
  Cigniti: 'wide',
  Razorpay: 'wide',
  Cybage: 'tall',
  Coforge: 'tall',
};

function logoShapeFor(name) {
  return LOGO_SHAPE[name] ?? null;
}

function companyInitials(name) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function PartnerLogoTile({
  logo,
  hoveredId,
  onHover,
  variant = 'orbit',
  className,
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const isActive = hoveredId != null && hoveredId === logo.id;
  const isDimmed = hoveredId !== null && !isActive;
  const showFallback = imgFailed || !logo.src;
  const shape = logoShapeFor(logo.name);

  return (
    <div
      className={cn(
        'partner-orbit__tile',
        variant === 'grid' && 'partner-orbit__tile--grid',
        variant === 'carousel' && 'partner-orbit__tile--carousel',
        `partner-orbit__tile--${logo.size || 'md'}`,
        logo.ring === 'inner' &&
          (variant === 'orbit' || variant === 'static') &&
          'partner-orbit__tile--inner-ring',
        logo.ring === 'outer' &&
          (variant === 'orbit' || variant === 'static') &&
          'partner-orbit__tile--outer-ring',
        isActive && 'partner-orbit__tile--active',
        isDimmed && 'partner-orbit__tile--dimmed',
        className,
      )}
      onMouseEnter={() => onHover(logo.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(logo.id)}
      onBlur={() => onHover(null)}
      role="listitem"
      tabIndex={0}
    >
      <div className="partner-orbit__tile-inner">
        <div className="partner-orbit__logo-media">
          {showFallback ? (
            <span className="partner-orbit__logo-fallback" aria-hidden>
              {companyInitials(logo.name)}
            </span>
          ) : (
            <img
              src={logo.src}
              alt={`${logo.name} logo`}
              className={cn(
                'partner-orbit__logo-img',
                shape === 'wide' && 'partner-orbit__logo-img--wide',
                shape === 'tall' && 'partner-orbit__logo-img--tall',
              )}
              loading={variant === 'orbit' ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
              onError={() => setImgFailed(true)}
            />
          )}
        </div>
      </div>
      <span className="partner-orbit__tooltip" role="tooltip">
        {logo.name}
      </span>
    </div>
  );
}

function RollingOrbitRing({ logos, ring, hoveredId, onHover, duration }) {
  const isInner = ring === 'inner';

  return (
    <div
      className={cn(
        'partner-orbit__roll-ring',
        isInner ? 'partner-orbit__roll-ring--inner' : 'partner-orbit__roll-ring--outer',
      )}
      style={{ '--orbit-duration': `${duration}s` }}
    >
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="partner-orbit__roll-anchor"
          style={{
            '--orbit-angle': `${logo.angle}deg`,
            '--float-delay': `${((logo.id % 9) * 0.85).toFixed(2)}s`,
          }}
        >
          <div
            className={cn(
              'partner-orbit__roll-upright',
              isInner ? 'partner-orbit__roll-upright--inner' : 'partner-orbit__roll-upright--outer',
            )}
          >
            <div className="partner-orbit__roll-float">
              <PartnerLogoTile logo={logo} hoveredId={hoveredId} onHover={onHover} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BackgroundParticles() {
  return (
    <div className="partner-orbit__particles" aria-hidden>
      {Array.from({ length: 28 }, (_, i) => (
        <span key={i} className={`partner-orbit__particle partner-orbit__particle--${(i % 14) + 1}`} />
      ))}
    </div>
  );
}

/** Mobile: fixed positions around center — no spin (avoids clip / off-center logos). */
function StaticMobileOrbitStage({ logos }) {
  const [hoveredId, setHoveredId] = useState(null);
  const onHover = useCallback((id) => setHoveredId(id), []);

  return (
    <div className="partner-orbit__stage partner-orbit__stage--mobile partner-orbit__stage--static">
      <div className="partner-orbit__glow-center" aria-hidden />
      <div className="partner-orbit__bg-rings" aria-hidden>
        <span className="partner-orbit__bg-ring partner-orbit__bg-ring--1" />
        <span className="partner-orbit__bg-ring partner-orbit__bg-ring--2" />
        <span className="partner-orbit__bg-ring partner-orbit__bg-ring--3" />
      </div>
      <div className="partner-orbit__ring partner-orbit__ring--inner" aria-hidden />
      <div className="partner-orbit__ring partner-orbit__ring--outer" aria-hidden />

      <div className="partner-orbit__static-logos" role="list" aria-label="Partner companies">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className={cn(
              'partner-orbit__static-anchor',
              logo.ring === 'inner'
                ? 'partner-orbit__static-anchor--inner'
                : 'partner-orbit__static-anchor--outer',
            )}
            style={{ '--orbit-angle': `${logo.angle}deg` }}
          >
            <PartnerLogoTile
              logo={logo}
              hoveredId={hoveredId}
              onHover={onHover}
              variant="static"
            />
          </div>
        ))}
      </div>

      <div className="partner-orbit__hub">
        <span className="partner-orbit__hub-glow" aria-hidden />
        <NexaLogo
          asLink={false}
          size="nav"
          imgClassName="!object-contain !object-center mx-auto w-full"
          className="partner-orbit__hub-logo partner-orbit__hub-logo--nav mx-auto w-full justify-center"
        />
        <span className="partner-orbit__hub-sub">Hiring Network</span>
      </div>
    </div>
  );
}

function OrbitStage({ logos, className, hubLogoSize = 'default' }) {
  const [hoveredId, setHoveredId] = useState(null);
  const onHover = useCallback((id) => setHoveredId(id), []);

  const innerLogos = useMemo(() => logos.filter((l) => l.ring === 'inner'), [logos]);
  const outerLogos = useMemo(() => logos.filter((l) => l.ring === 'outer'), [logos]);
  const isPaused = hoveredId !== null;

  return (
    <div
      className={cn(
        'partner-orbit__stage',
        className,
        isPaused && 'partner-orbit__stage--paused',
      )}
    >
      <div className="partner-orbit__glow-center" aria-hidden />
      <div className="partner-orbit__glow-outer" aria-hidden />
      <div className="partner-orbit__glow-violet" aria-hidden />
      <BackgroundParticles />

      <div className="partner-orbit__bg-rings" aria-hidden>
        <span className="partner-orbit__bg-ring partner-orbit__bg-ring--1" />
        <span className="partner-orbit__bg-ring partner-orbit__bg-ring--2" />
        <span className="partner-orbit__bg-ring partner-orbit__bg-ring--3" />
        <span className="partner-orbit__bg-ring partner-orbit__bg-ring--4" />
      </div>

      <div className="partner-orbit__ring partner-orbit__ring--inner" aria-hidden />
      <div className="partner-orbit__ring partner-orbit__ring--outer" aria-hidden />
      <div className="partner-orbit__ring partner-orbit__ring--mid" aria-hidden />
      <div className="partner-orbit__ring partner-orbit__ring--pulse" aria-hidden />

      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <span
          key={`n-in-${deg}`}
          className="partner-orbit__node partner-orbit__node--inner"
          style={{ '--orbit-angle': `${deg}deg` }}
          aria-hidden
        />
      ))}
      {[22, 67, 112, 157, 202, 247, 292, 337].map((deg) => (
        <span
          key={`n-out-${deg}`}
          className="partner-orbit__node partner-orbit__node--outer"
          style={{ '--orbit-angle': `${deg}deg` }}
          aria-hidden
        />
      ))}

      <div className="partner-orbit__roll-layers" role="list" aria-label="Partner companies">
        <RollingOrbitRing
          logos={innerLogos}
          ring="inner"
          hoveredId={hoveredId}
          onHover={onHover}
          duration={INNER_ORBIT_S}
        />
        <RollingOrbitRing
          logos={outerLogos}
          ring="outer"
          hoveredId={hoveredId}
          onHover={onHover}
          duration={OUTER_ORBIT_S}
        />
      </div>

      <div
        className={cn('partner-orbit__hub', hoveredId !== null && 'partner-orbit__hub--active')}
      >
        <span className="partner-orbit__hub-glow" aria-hidden />
        <NexaLogo
          asLink={false}
          size={hubLogoSize}
          imgClassName={
            hubLogoSize === 'nav' ? '!object-contain !object-center mx-auto w-full' : 'mx-auto'
          }
          className={cn(
            'partner-orbit__hub-logo mx-auto w-full justify-center',
            hubLogoSize === 'nav' && 'partner-orbit__hub-logo--nav',
          )}
        />
        <span className="partner-orbit__hub-sub">Hiring Network</span>
        <span className="partner-orbit__hub-meta">
          <span className="partner-orbit__hub-dot" aria-hidden />
          Trusted • Verified • Connected
        </span>
      </div>
    </div>
  );
}


function buildMobileLogos() {
  const innerAngles = [0, 72, 144, 216, 288];
  const outerAngles = [36, 108, 180, 252, 324];
  const inner = partnerLogos
    .filter((l) => l.ring === 'inner')
    .slice(0, 5)
    .map((logo, i) => ({ ...logo, angle: innerAngles[i], size: 'sm' }));
  const outer = partnerLogos
    .filter((l) => l.ring === 'outer')
    .slice(0, 5)
    .map((logo, i) => ({ ...logo, angle: outerAngles[i], size: 'sm' }));
  return [...inner, ...outer];
}

export default function PartnerOrbitVisual({ className }) {
  const breakpoint = usePartnerOrbitBreakpoint();

  const logos = useMemo(() => {
    if (breakpoint === 'mobile') return buildMobileLogos();
    if (breakpoint === 'tablet') return partnerLogos.slice(0, 14);
    return partnerLogos;
  }, [breakpoint]);

  const hubLogoSize = breakpoint === 'desktop' ? 'default' : 'nav';

  const stageClass = cn(
    'partner-orbit__stage--responsive',
    breakpoint === 'tablet' && 'partner-orbit__stage--tablet',
  );

  const canvasClass = cn(
    'partner-orbit__canvas flex w-full items-center',
    breakpoint === 'mobile' && 'justify-center',
    breakpoint === 'tablet' && 'justify-center',
    breakpoint === 'desktop' && 'partner-orbit__canvas--bleed-right justify-start',
  );

  return (
    <div className={cn('partner-orbit w-full', className)}>
      <div className={canvasClass}>
        {breakpoint === 'mobile' ? (
          <StaticMobileOrbitStage logos={logos} />
        ) : (
          <OrbitStage logos={logos} hubLogoSize={hubLogoSize} className={stageClass} />
        )}
      </div>
    </div>
  );
}
