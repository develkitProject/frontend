import React, { useEffect, ReactNode, EffectCallback } from 'react';
import { createPortal } from 'react-dom';

function ModalContainer({ children }: { children: ReactNode }) {
  useEffect(() => {
    const $body = document.querySelector('body');
    if (!$body) return () => {};
    $body.style.overflow = 'hidden';
    // eslint-disable-next-line no-return-assign
    return (): string => ($body.style.overflow = 'auto');
  }, []);

  return createPortal(
    <>{children}</>,
    document.getElementById('modal') as Element,
  );
}

export default ModalContainer;
