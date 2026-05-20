import { useEffect } from 'react';

/** Sets document.title for the current page; restores previous title on unmount. */
export function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
