import { cn } from '@/lib/utils';
import { Nav, NavLink } from './components';
import type { HeaderProps } from './header.types';

export function HeaderView({ menu, className, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        'fixed top-0 z-50 hidden h-15 w-full bg-primary-3systems shadow-md transition-all duration-300 lg:block',
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
        <NavLink href="#contato">Contato</NavLink>
      </Nav>
    </header>
  );
}
