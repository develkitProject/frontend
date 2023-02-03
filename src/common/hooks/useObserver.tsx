import { useEffect, useRef } from 'react';

interface IProps {
  dependency: {
    createdAt: string;
    message: string;
    nickname: string;
    workSpaceId: number;
    writer: string;
  }[];
  isLoading: boolean;
  fetcher: () => void;
}

export default function useObserver(options: IProps) {
  const { fetcher, dependency, isLoading } = options;
  const target = useRef(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target.current && !isLoading) {
      observer = new IntersectionObserver(onIntersect);
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [dependency]);

  const onIntersect = (entries: { isIntersecting: any }[]) => {
    entries.forEach((entry: { isIntersecting: any }) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          fetcher();
        }, 300);
      }
    });
  };

  return { target };
}
