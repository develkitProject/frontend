import { useEffect } from 'react';

function useOutSideClick(ref, callback) {
  useEffect(() => {
    const handelClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    };

    window.addEventListener('mousedown', handelClick);
    return () => window.removeEventListener('mousedown', handelClick);
  }, [ref, callback]);
}

export default useOutSideClick;
