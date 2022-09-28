import { useCallback, useState } from 'react';

export default function useChangeMenu() {
  const [menu, setMenu] = useState('home');

  const onClickMenu = useCallback(
    ({ key }) =>
      () => {
        setMenu(key);
      },
    [],
  );

  return { onClickMenu, menu };
}
