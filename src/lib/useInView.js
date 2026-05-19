import { useEffect, useRef, useState } from 'react';

const DEFAULT_IN_VIEW_OPTIONS = { threshold: 0.12, rootMargin: '0px 0px -8% 0px' };

/**
 * @param {IntersectionObserverInit} [options]
 * @returns {[import('react').RefObject<HTMLElement | null>, boolean]}
 */
export function useInView(options = DEFAULT_IN_VIEW_OPTIONS) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}
