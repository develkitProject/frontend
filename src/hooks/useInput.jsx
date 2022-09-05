import { useState } from 'react';

export function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  return [inputValue, onHandleChange, setInputValue];
}
