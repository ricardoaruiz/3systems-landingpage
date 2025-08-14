'use client';

import AOS from 'aos';
import { useEffect } from 'react';

export function AosConfig() {
  useEffect(() => {
    AOS.init();
  }, []);

  return null;
}
