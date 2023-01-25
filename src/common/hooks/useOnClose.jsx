import { useEffect, useCallback } from 'react';

export default function useOnClose() {
  return {
    handleClose: useCallback(() => {
      onClose?.();
    }, [onClose]),
  };
}
