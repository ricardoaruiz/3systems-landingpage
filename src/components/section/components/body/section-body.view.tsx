import { cn } from '@/lib/utils';
import type { SectionBodyProps } from './section-body.types';

export function SectionBodyView({
  children,
  className,
  style,
  backgroundImage,
  ...props
}: SectionBodyProps) {
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
    <div
      className={cn(
        'w-full px-4 py-4 md:mx-auto md:max-w-[840px] lg:px-0 lg:pt-8',
        className
      )}
      style={internalStyle}
      {...props}
    >
      {children}
    </div>
  );
}
