'use client';

import { useEffect } from 'react';
import { useScroll } from '@/hooks/useScroll';
import { cn } from '@/lib/utils';
import { Nav, NavLink } from './components';
import type { HeaderProps } from './header.types';

export function HeaderView({ menu, className, ...props }: HeaderProps) {
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
        },
        className
      )}
      {...props}
    >
      <Nav>
        {menu.map((item) => (
          <NavLink href={`#${item.href}`} key={item.href}>
            {item.label}
          </NavLink>
        ))}
        <NavLink href="#contact">Contato</NavLink>
      </Nav>
    </header>
  );
}
