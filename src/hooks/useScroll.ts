import { useEffect, useState } from 'react';

export function useScroll() {
  const [positionY, setPositionY] = useState(0);
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(window.scrollY === 0);
      setPositionY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { positionY, isOnTop };
}
