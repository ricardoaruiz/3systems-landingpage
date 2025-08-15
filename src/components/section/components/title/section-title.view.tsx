import { cn } from '@/lib/utils';
import type { SectionTitleProps } from './section-title.types';

export function SectionTitleView({
  children,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'text-center font-bold text-xl/snug text-zinc-50 md:max-w-[1000px] md:text-5xl/snug',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
