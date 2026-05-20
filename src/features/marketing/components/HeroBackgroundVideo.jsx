import { useEffect, useRef, useState } from 'react';
import {
  HERO_VIDEO_MP4,
  HERO_VIDEO_POSTER,
  HERO_VIDEO_WEBM,
} from '@/features/marketing/heroVideo';
import { cn } from '@/lib/utils';

/**
 * Background hero video with iOS-safe autoplay and MP4-first sources.
 */
export default function HeroBackgroundVideo({ className }) {
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || failed) return undefined;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {
          /* Autoplay blocked until gesture — poster still shows */
        });
      }
    };

    tryPlay();
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
    };
  }, [failed]);

  if (failed) {
    return (
      <div
        className={cn(
          'pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat',
          className,
        )}
        style={{ backgroundImage: `url(${HERO_VIDEO_POSTER})` }}
        aria-hidden="true"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={cn(
        'pointer-events-none absolute inset-0 z-0 h-full w-full touch-none object-cover object-[62%_center] sm:object-[58%_center] lg:object-center',
        className,
      )}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={HERO_VIDEO_POSTER}
      aria-hidden="true"
      onError={() => setFailed(true)}
    >
      {/* MP4 first — required for iOS Safari */}
      <source src={HERO_VIDEO_MP4} type="video/mp4" />
      <source src={HERO_VIDEO_WEBM} type="video/webm" />
    </video>
  );
}
