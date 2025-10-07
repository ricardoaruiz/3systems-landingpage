import { cn } from "@/lib/utils";
import type { SectionTitleProps } from "./section-separator.types";

export function SectionSeparatorView({
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "h-[2px] w-full max-w-48 bg-zinc-50 md:max-w-96",
        className
      )}
      {...props}
    />
  );
}
