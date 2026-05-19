import { cn } from '@/lib/utils';

export default function TrustedHiringIllustration({ className }) {
  return (
    <div className={cn('trusted-illustration pointer-events-none', className)} aria-hidden>
      <svg
        className="h-full w-full"
        viewBox="0 0 420 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="thi-cyan-dark" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="thi-violet-dark" cx="70%" cy="60%" r="45%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="thi-line-dark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>

        <ellipse cx="220" cy="160" rx="140" ry="120" fill="url(#thi-cyan-dark)" />
        <ellipse cx="300" cy="280" rx="100" ry="90" fill="url(#thi-violet-dark)" />

        <path
          d="M120 320 C140 260 180 220 230 210 C280 200 320 230 340 280 C350 310 330 350 280 370 C220 395 160 380 120 320 Z"
          fill="rgba(37,99,235,0.06)"
          stroke="#2563EB"
          strokeOpacity="0.22"
          strokeWidth="1.5"
        />

        <path
          d="M60 180 L140 220 L200 150 L280 190 L360 130"
          stroke="url(#thi-line-dark)"
          strokeWidth="1.25"
          strokeDasharray="5 7"
          fill="none"
        />
        <path
          d="M100 300 L180 260 L260 310 L340 250"
          stroke="#38BDF8"
          strokeOpacity="0.2"
          strokeWidth="1"
          fill="none"
        />

        {[
          [200, 150, 11, '#38BDF8'],
          [280, 190, 9, '#2563EB'],
          [140, 220, 8, '#8B5CF6'],
          [230, 250, 12, '#38BDF8'],
          [300, 280, 8, '#2563EB'],
          [180, 300, 7, '#22C55E'],
          [260, 330, 9, '#8B5CF6'],
        ].map(([cx, cy, r, stroke], i) => (
          <g key={i} className="trusted-illustration__node">
            <circle cx={cx} cy={cy} r={r + 12} fill={stroke} fillOpacity="0.06" />
            <circle
              cx={cx}
              cy={cy}
              r={r}
              fill="rgba(15,23,42,0.85)"
              stroke={stroke}
              strokeOpacity="0.45"
              strokeWidth="1"
            />
            <circle cx={cx} cy={cy} r={3.5} fill={stroke} fillOpacity="0.95" />
            {i < 5 && (
              <circle
                cx={cx}
                cy={cy}
                r={r + 16}
                stroke={stroke}
                strokeOpacity="0.12"
                strokeWidth="1"
                fill="none"
              />
            )}
          </g>
        ))}

        <path
          d="M248 248 L258 258 L278 232"
          stroke="#22C55E"
          strokeOpacity="0.65"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
