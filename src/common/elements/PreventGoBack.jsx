import { createBrowserHistory } from 'history';
import { useEffect } from 'react';

export default function PreventGoBack() {
  const history = createBrowserHistory();

  useEffect(() => {
    const preventGoBack = () => {
      if (
        window.confirm('워크스페이스 밖으로 이동 됩니다. 정말 나가시겠습니까?')
      ) {
        navigate('/workspace');
      }
    };

    const unPreventGoBack = history.listen(({ action }) => {
      if (action === 'POP') {
        preventGoBack();
      }
    });
    return unPreventGoBack;
  }, []);
}
