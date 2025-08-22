'use client';

import { useEffect, useState } from 'react';

export function ConnectionStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Set initial state
    setIsOnline(navigator.onLine);

    // Listen for online/offline events
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  if (isOnline) {
    return null; // Don't show anything when online
  }

  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-red-500 p-2 text-center text-sm text-white">
      <span className="mr-2">📶</span>
      Você está offline. Algumas funcionalidades podem não estar disponíveis.
    </div>
  );
}

export default ConnectionStatus;
