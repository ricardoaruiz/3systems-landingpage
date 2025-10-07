import { cn } from "@/lib/utils";
import type { NavProps } from "./nav.type";

export function NavView({ children, className, ...props }: NavProps) {
  return (
    <nav
      className={cn(
        "container mx-auto flex h-full items-center justify-center gap-8",
        className
      )}
      {...props}
    >
      {children}
    </nav>
  );
}
