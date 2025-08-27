'use client';

import { useEffect, useState } from 'react';
import { useScroll } from '@/hooks/useScroll';
import { cn } from '@/lib/utils';
import { Nav, NavLink } from './components';
import type { HeaderProps } from './header.types';

export function HeaderView({ menu, className, ...props }: HeaderProps) {
  const [showMenu, setShowMenu] = useState(true);
  const { isOnTop } = useScroll();

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(
        window.location.hash.substring(1)
      );
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setShowMenu(!window.location.hash);
    }
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 hidden h-15 w-full bg-zinc-300/20 opacity-100 shadow-md transition-all duration-300 lg:block',
        {
          'h-1 opacity-0': !(showMenu && isOnTop),
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
