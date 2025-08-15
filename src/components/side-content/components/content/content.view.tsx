import { cn } from '@/lib/utils';
import type { ContentProps } from './content.types';

export function ContentView({ children, className, ...props }: ContentProps) {
  return (
    <div
      className={cn(
        'flex-1 space-y-4 bg-primary-cristallo p-4 text-center font-bold text-xl/relaxed text-zinc-50 shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
