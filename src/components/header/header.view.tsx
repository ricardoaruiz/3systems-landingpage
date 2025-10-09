import React from "react";
import { cn } from "@/lib/utils";
import { Nav, NavLink } from "./components";
import type { HeaderProps } from "./header.types";

export function HeaderView({ menu, className, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        "fixed top-0 z-50 hidden h-15 w-full bg-primary-3systems shadow-md transition-all duration-300 lg:block",
        className
      )}
      {...props}
    >
      <Nav>
        {menu.map((item, index) => {
          // TODO remover quando criar o conteúdo de carreira no cms
          if (index === 1) {
            return (
              <React.Fragment key={item.href}>
                <NavLink href="#carreira">Carreira</NavLink>
                <NavLink href={`#${item.href}`}>{item.label}</NavLink>
              </React.Fragment>
            );
          }

          return (
            <NavLink href={`#${item.href}`} key={item.href}>
              {item.label}
            </NavLink>
          );
        })}
      </Nav>
    </header>
  );
}
