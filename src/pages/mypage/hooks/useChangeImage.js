import { useCallback, useState } from 'react';

export default function useChangeImage() {
  const [imageUrl, setImageUrl] = useState(null);

  const onChangeImage = useCallback((e) => {
    const reader = new FileReader();
    const file = e.current?.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  }, []);

  return { onChangeImage, imageUrl };
}
