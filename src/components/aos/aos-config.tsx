'use client';

import AOS from 'aos';
import { useEffect } from 'react';

export function AosConfig() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: 'ease-in-sine',
      disable: 'mobile',
    });
  }, []);

  return null;
}
