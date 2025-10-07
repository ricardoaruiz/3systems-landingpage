import { cn } from "@/lib/utils";
import type { SectionDescriptionProps } from "./section-description.types";

export function SectionDescriptionView({
  children,
  className,
  ...props
}: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        "text-center font-bold text-lg/relaxed md:max-w-[1200px] md:text-4xl/relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
