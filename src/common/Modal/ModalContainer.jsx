import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

function ModalContainer({ children }) {
  useEffect(() => {
    const $body = document.querySelector('body');
    $body.style.overflow = 'hidden';
    return () => ($body.style.overflow = 'auto');
  }, []);

  return createPortal(<>{children}</>, document.getElementById('modal'));
}

export default ModalContainer;
