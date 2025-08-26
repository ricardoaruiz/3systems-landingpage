import { cn } from '@/lib/utils';
import type { SectionTitleProps } from './section-title.types';

export function SectionTitleView({
  children,
  className,
  noBorder = false,
  style,
  ...props
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'border-b-2 pb-4 text-center font-bold text-2xl/snug md:max-w-[1000px] md:border-b-4 md:text-5xl/snug',
        { 'border-transparent pb-0': noBorder },
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </h2>
  );
}
