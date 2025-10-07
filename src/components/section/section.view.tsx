import { cn } from "@/lib/utils";
import type { SectionProps } from "./section.types";

export function SectionView({
  children,
  backgroundImage,
  className,
  style,
  ...props
}: SectionProps) {
  const internalStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        ...style,
      }
    : { ...style };

  return (
    <section className={cn(className)} style={internalStyle} {...props}>
      {children}
    </section>
  );
}
