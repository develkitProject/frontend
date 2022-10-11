import { useEffect, useState, useRef } from 'react';

export default function useObserver(a, b) {
  const target = useRef(null);

  useEffect(() => {
    let observer;
    if (target.current && !isLoading) {
      observer = new IntersectionObserver(onIntersect);
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [chatMessages]);

  const onIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          fetchMessage();
        }, 300);
      }
    });
  };

  return {};
}
