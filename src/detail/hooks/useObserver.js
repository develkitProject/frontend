import { useEffect, useRef } from 'react';

export default function useObserver(options) {
  const { fetcher, dependency, isLoading } = options;
  const target = useRef(null);

  useEffect(() => {
    let observer;
    if (target.current && !isLoading) {
      observer = new IntersectionObserver(onIntersect);
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [dependency]);

  const onIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          fetcher();
        }, 300);
      }
    });
  };

  return { target };
}
