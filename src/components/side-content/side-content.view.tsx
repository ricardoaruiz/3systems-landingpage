/** biome-ignore-all lint/suspicious/noArrayIndexKey: in this case no problem because text is static */
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { SideContentProps } from './side-content.types';

export function SideContentView({
  isVisible,
  image,
  alt,
  className,
  children,
  ...props
}: SideContentProps) {
  if (!isVisible) {
    return null;
  }
  return (
    <aside
      className={cn('hidden flex-1/3 md:flex md:flex-col', className)}
      {...props}
    >
      {image && alt && (
        <div className="relative h-[300px]">
          <Image
            alt={alt}
            className="object-cover"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            src={image}
          />
        </div>
      )}

      {children}
    </aside>
  );
}
