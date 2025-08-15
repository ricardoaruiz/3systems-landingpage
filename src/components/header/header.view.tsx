'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useScroll } from '@/hooks/useScroll';
import { cn } from '@/lib/utils';

export function HeaderView() {
  const { isOnTop } = useScroll();

  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo(0, 0);
      window.location.href = '/';
    }
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 hidden h-15 bg-zinc-800/20 opacity-100 transition-all duration-300 lg:block',
        {
          'h-0 opacity-0': !isOnTop,
        }
      )}
    >
      <nav
        className={cn(
          'container mx-auto flex h-full items-center justify-center gap-8'
        )}
      >
        <Link
          className="cursor-pointer font-semibold text-primary-cristallo text-xl transition-all hover:text-secondary-cristallo"
          href="#reasons"
        >
          Porque nos contratar?
        </Link>
        <Link
          className="cursor-pointer font-semibold text-primary-cristallo text-xl transition-all hover:text-secondary-cristallo"
          href="#financial"
        >
          Terceirização Financeira
        </Link>
        <Link
          className="cursor-pointer font-semibold text-primary-cristallo text-xl transition-all hover:text-secondary-cristallo"
          href="#administrative"
        >
          Assessoria Administrativa
        </Link>
        <Link
          className="cursor-pointer font-semibold text-primary-cristallo text-xl transition-all hover:text-secondary-cristallo"
          href="#events"
        >
          Eventos
        </Link>
      </nav>
    </header>
  );
}
