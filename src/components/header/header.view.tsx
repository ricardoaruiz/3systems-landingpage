'use client';

import { useEffect } from 'react';
import { useScroll } from '@/hooks/useScroll';
import { cn } from '@/lib/utils';
import { Nav, NavLink } from './components';

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
        'sticky top-0 z-50 hidden h-15 bg-zinc-300/20 opacity-100 shadow-md transition-all duration-300 lg:block',
        {
          'h-0 opacity-0': !isOnTop,
        }
      )}
    >
      <Nav>
        <NavLink href="#reasons">Porque nos contratar?</NavLink>
        <NavLink href="#financial">Terceirização Financeira</NavLink>
        <NavLink href="#administrative">Assessoria Administrativa</NavLink>
        <NavLink href="#events">Eventos</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </Nav>
    </header>
  );
}
