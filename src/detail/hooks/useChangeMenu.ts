import { useState } from 'react';

export default function useChangeMenu() {
  const [menu, setMenu] = useState('home');
  const [tab, setTab] = useState('list');
  const [stateId, setStateId] = useState(0);

  const onDocumentHandle = (tabpoint: string, docsId: number) => {
    setTab(tabpoint);
    setStateId(docsId);
  };

  const onClickMenu =
    ({ key, tab, docsId }: {key: string, tab: string, docsId: number}) =>
    () => {
      setMenu(key);
      if (tab) {
        setTab(tab);
      }
      if (docsId) {
        setStateId(docsId);
      }
    };

  return { onClickMenu, menu, tab, onDocumentHandle, setTab, stateId };
}
