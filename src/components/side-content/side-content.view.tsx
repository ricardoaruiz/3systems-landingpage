/** biome-ignore-all lint/suspicious/noArrayIndexKey: in this case no problem because text is static */
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { SideContentProps } from './side-content.types';

export function SideContentView({
  image,
  alt,
  className,
  children,
  ...props
}: SideContentProps) {
  return (
    <aside
      className={cn('hidden flex-1/3 md:flex md:flex-col', className)}
      {...props}
    >
      {image && alt && (
        <div className="relative h-[300px]">
          <Image alt={alt} className="object-cover" fill src={image} />
        </div>
      )}

      {children}
    </aside>
  );
}
