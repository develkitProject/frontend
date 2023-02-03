import React, { RefObject, useEffect, MouseEvent } from 'react';

function useOutSideClick(
  ref: RefObject<HTMLInputElement>,
  callback: () => void,
) {
  useEffect(() => {
    const handelClick = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    };

    window.addEventListener('mouseup', handelClick);
    return () => window.removeEventListener('mouseup', handelClick);
  }, [ref, callback]);
}

export default useOutSideClick;
