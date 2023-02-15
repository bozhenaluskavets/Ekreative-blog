import { useState } from 'react';

export const useToggle = () => {
  const [isShown, setIsShown] = useState(false);

  const toggle = () => {
    setIsShown(!isShown);
  };

  return [isShown, toggle];
};
