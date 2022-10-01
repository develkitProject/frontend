import { useCallback, useState } from 'react';

export default function useModalOverlay() {
  const [isOpen, setOpen] = useState(false);

  return {
    isOpen,
    open: useCallback(() => {
      setOpen(true);
    }, []),
    close: useCallback(() => {
      setOpen(false);
    }, []),
    toggle: useCallback(() => {
      setOpen((e) => !e);
    }, []),
  };
}
