import {
  ChangeEvent,
  ChangeEventHandler,
  MutableRefObject,
  RefObject,
  useCallback,
  useState,
} from 'react';

export default function useChangeImage() {
  const [imageUrl, setImageUrl] = useState<string | ArrayBuffer | null>(null);

  const onChangeImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files === null) return;
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  }, []);

  return { onChangeImage, imageUrl };
}
