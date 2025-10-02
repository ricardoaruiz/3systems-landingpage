import { cn } from '@/lib/utils';
import type { SectionHeaderProps } from './secrtion.header.types';

export function SectionHeaderView({
  backgroundImage,
  children,
  style,
  className,
  ...props
}: SectionHeaderProps) {
  const internalStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        ...style,
      }
    : { ...style };

  return (
    <header
      className={cn(
        'bg-primary-3systems p-4 text-zinc-100 shadow-lg md:p-8',
        className
      )}
      style={internalStyle}
      {...props}
    >
      {children}
    </header>
  );
}
