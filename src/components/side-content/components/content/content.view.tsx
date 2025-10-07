import { cn } from "@/lib/utils";
import type { ContentProps } from "./content.types";

export function ContentView({ children, className, ...props }: ContentProps) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col justify-center space-y-8 bg-primary-3systems p-4 text-center font-bold text-2xl/relaxed text-zinc-50 shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
